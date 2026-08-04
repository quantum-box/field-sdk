#!/usr/bin/env python3
"""Normalize openapi.yaml into a build copy the generators can consume.

The one patch that always applies is the server URL: utoipa emits no
``servers``, so the SDK bakes in the production host itself.

The rest are guards. TACHYON Field's spec is emitted from utoipa annotations,
and the gaps below once broke generation outright; tachyonfield#914 fixed them
at the source, so these now report nothing. They stay because a dropped
annotation would otherwise surface as a client that does not compile:

1. Templated but undeclared: ``/v1/erp/vendors/{id}`` has no ``parameters``
   entry for ``id``, so the generated code interpolates ``{id}`` with no such
   binding in scope. We inject the missing ``in: path`` parameter.
2. Declared as ``in: path`` but absent from the template: query parameters such
   as ``/v1/field/reports/payout?from=&to=`` are tagged ``in: path``, so the
   generated code passes named format arguments that the URL template never
   uses. We move those to ``in: query`` (optional when the schema is nullable).

3. ``operationId`` reused across tags: ``get_order`` existed under both Orders
   and StoreKit, which OpenAPI forbids. The typescript-fetch barrel then
   re-exports two ``GetOrderRequest`` interfaces and fails to compile, so
   duplicates after the first (ordered by path) are renamed to
   ``<tag>_<operationId>`` — the same ``storekit_*`` names upstream settled on.
4. No ``securitySchemes``, so no operation carried the bearer token.

Every change is reported on stderr so any regression stays visible.

Usage:
    scripts/normalize-spec.py openapi.yaml build/openapi.normalized.yaml
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

try:
    import yaml
except ModuleNotFoundError:  # pragma: no cover - environment guard
    sys.exit("PyYAML is required: pip install pyyaml")

HTTP_METHODS = {
    "get",
    "put",
    "post",
    "delete",
    "options",
    "head",
    "patch",
    "trace",
}

TEMPLATE_RE = re.compile(r"\{([^}]+)\}")


def declared_path_params(container: dict) -> set[str]:
    return {
        param.get("name")
        for param in container.get("parameters", [])
        if isinstance(param, dict) and param.get("in") == "path"
    }


def is_nullable(schema: dict | None) -> bool:
    if not isinstance(schema, dict):
        return False
    declared = schema.get("type")
    if isinstance(declared, list):
        return "null" in declared
    return bool(schema.get("nullable"))


def normalize(spec: dict) -> tuple[list[tuple[str, str, str]], list[tuple[str, str, str]]]:
    injected: list[tuple[str, str, str]] = []
    requalified: list[tuple[str, str, str]] = []

    for path, path_item in (spec.get("paths") or {}).items():
        templated = list(dict.fromkeys(TEMPLATE_RE.findall(path)))
        shared = declared_path_params(path_item)

        for method, operation in path_item.items():
            if method not in HTTP_METHODS or not isinstance(operation, dict):
                continue

            # `in: path` on a name the URL never templates means a query
            # parameter that lost its `Query` annotation upstream.
            for param in operation.get("parameters", []) or []:
                if not isinstance(param, dict) or param.get("in") != "path":
                    continue
                if param.get("name") in templated:
                    continue
                param["in"] = "query"
                if is_nullable(param.get("schema")):
                    param["required"] = False
                requalified.append((path, method, param.get("name")))

            known = shared | declared_path_params(operation)
            for name in templated:
                if name in known:
                    continue
                operation.setdefault("parameters", []).append(
                    {
                        "name": name,
                        "in": "path",
                        "required": True,
                        "schema": {"type": "string"},
                    }
                )
                injected.append((path, method, name))

    return injected, requalified


def slugify_tag(tag: str) -> str:
    slug = re.sub(r"[^0-9a-zA-Z]+", "_", tag).strip("_").lower()
    # "TACHYON field - Orders" -> "tachyon_field_orders"
    return slug or "op"


def deduplicate_operation_ids(spec: dict) -> list[tuple[str, str, str]]:
    """Rename reused operationIds; returns (path, old_id, new_id) tuples."""
    occurrences: dict[str, list[tuple[str, dict]]] = {}

    for path, path_item in (spec.get("paths") or {}).items():
        for method, operation in path_item.items():
            if method not in HTTP_METHODS or not isinstance(operation, dict):
                continue
            operation_id = operation.get("operationId")
            if operation_id:
                occurrences.setdefault(operation_id, []).append((path, operation))

    renamed: list[tuple[str, str, str]] = []
    for operation_id, uses in occurrences.items():
        if len(uses) < 2:
            continue
        # Sort by path so the winner does not depend on mapping order.
        for path, operation in sorted(uses, key=lambda use: use[0])[1:]:
            tags = operation.get("tags") or []
            prefix = slugify_tag(tags[0]) if tags else "alt"
            new_id = f"{prefix}_{operation_id}"
            operation["operationId"] = new_id
            renamed.append((path, operation_id, new_id))

    return renamed


def ensure_bearer_security(spec: dict) -> bool:
    """Declare the Bearer scheme the API actually enforces.

    utoipa emits no ``securitySchemes``, so the generated clients never attach
    an Authorization header and every caller has to inject it by hand. TACHYON
    Field authenticates with ``Authorization: Bearer <token>``; declaring it
    globally makes the clients send the token when one is configured, and is
    harmless on the public endpoints that ignore it.
    """
    changed = False

    components = spec.setdefault("components", {})
    schemes = components.setdefault("securitySchemes", {})
    if "bearerAuth" not in schemes:
        schemes["bearerAuth"] = {"type": "http", "scheme": "bearer"}
        changed = True

    if not spec.get("security"):
        spec["security"] = [{"bearerAuth": []}]
        changed = True

    return changed


PRODUCTION_SERVER = "https://tachyon-field-api.txcloud.app"


def ensure_production_server(spec: dict) -> bool:
    """Point the generated clients at production by default.

    utoipa emits no ``servers``, so openapi-generator falls back to
    ``http://localhost`` and every caller has to set a base path before the
    client is usable. TACHYON Field's production API is a single fixed host, so
    we bake it in; callers can still override ``base_path`` / ``basePath``.
    """
    if spec.get("servers"):
        return False

    spec["servers"] = [
        {"url": PRODUCTION_SERVER, "description": "Production"},
    ]
    return True


def main(argv: list[str]) -> int:
    if len(argv) != 3:
        sys.exit(f"usage: {argv[0]} <input.yaml> <output.yaml>")

    source, destination = Path(argv[1]), Path(argv[2])
    spec = yaml.safe_load(source.read_text())

    injected, requalified = normalize(spec)
    renamed = deduplicate_operation_ids(spec)
    security_added = ensure_bearer_security(spec)
    server_added = ensure_production_server(spec)

    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(yaml.safe_dump(spec, sort_keys=True, allow_unicode=True))

    if injected:
        print(
            f"==> injected {len(injected)} missing path parameter(s) "
            "(upstream utoipa annotations should declare these):",
            file=sys.stderr,
        )
        for path, method, name in injected:
            print(f"    {method.upper():6} {path} -> {name}", file=sys.stderr)
    if requalified:
        print(
            f"==> moved {len(requalified)} parameter(s) from path to query "
            "(upstream declares them as `in: path` but never templates them):",
            file=sys.stderr,
        )
        for path, method, name in requalified:
            print(f"    {method.upper():6} {path} -> {name}", file=sys.stderr)
    if renamed:
        print(
            f"==> renamed {len(renamed)} duplicated operationId(s) "
            "(operationId must be unique across the spec):",
            file=sys.stderr,
        )
        for path, old_id, new_id in renamed:
            print(f"    {path}: {old_id} -> {new_id}", file=sys.stderr)
    if security_added:
        print(
            "==> declared the global bearerAuth security scheme "
            "(upstream declares none, so clients would send no token)",
            file=sys.stderr,
        )
    if server_added:
        print(
            f"==> set the default server to {PRODUCTION_SERVER} "
            "(upstream declares none, so clients would default to localhost)",
            file=sys.stderr,
        )
    if not injected and not requalified and not renamed and not security_added and not server_added:
        print("==> spec already consistent; nothing to normalize", file=sys.stderr)

    print(f"==> wrote {destination}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
