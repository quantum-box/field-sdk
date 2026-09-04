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

One more patch is deliberate rather than a guard: ``kind``-tagged ``oneOf``
unions are hoisted into named subschemas and given a ``discriminator``, so the
generated clients switch on the tag instead of guessing structurally and
survive a variant the SDK predates. See ``discriminate_tagged_unions``.

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


DISCRIMINATOR_PROPERTY = "kind"


def _pascal(value: str) -> str:
    return "".join(part.capitalize() for part in re.split(r"[^0-9a-zA-Z]+", value) if part)


def _tag_values(schema: dict) -> list[str] | None:
    """Return the `kind` values of a tagged union, or None if it is not one.

    A tagged union here is a ``oneOf`` whose every subschema is an inline
    object with a required ``kind`` pinned to a single enum value — the shape
    utoipa emits for a Rust enum with a ``#[serde(tag = "kind")]`` attribute.
    Anything else (the ``oneOf: [{type: null}, {$ref: ...}]`` that stands for
    ``Option<T>``, unions already carrying a discriminator) is left alone.
    """
    variants = schema.get("oneOf")
    if not isinstance(variants, list) or len(variants) < 2:
        return None
    if schema.get("discriminator"):
        return None

    values: list[str] = []
    for variant in variants:
        if not isinstance(variant, dict) or "$ref" in variant:
            return None
        if variant.get("type") != "object":
            return None
        if DISCRIMINATOR_PROPERTY not in (variant.get("required") or []):
            return None
        tag = (variant.get("properties") or {}).get(DISCRIMINATOR_PROPERTY)
        if not isinstance(tag, dict):
            return None
        enum = tag.get("enum")
        if not isinstance(enum, list) or len(enum) != 1 or not isinstance(enum[0], str):
            return None
        values.append(enum[0])

    if len(set(values)) != len(values):
        return None
    return values


def discriminate_tagged_unions(spec: dict) -> tuple[list[tuple[str, str, str]], list[str]]:
    """Turn `kind`-tagged `oneOf` unions into named, discriminated ones.

    utoipa emits these unions as anonymous inline subschemas, which
    openapi-generator names by position: ``InvoiceBillToResponseOneOf2`` meant
    ``legacy_unresolved`` in spec 0.1.16 and ``unregistered`` in 0.1.25,
    because a variant was inserted in the middle. Identical inline shapes are
    also deduplicated across schemas, so `ReservationBillToRequest` borrowed
    `InvoiceBillToRequestOneOf` for its `customer` arm.

    We hoist every subschema to ``<Parent><PascalKind>`` and declare
    ``discriminator: {propertyName: kind}``. The names then follow the tag
    rather than the position, and both generators switch on ``kind`` instead of
    guessing structurally:

    - rust emits ``#[serde(tag = "kind")]`` instead of ``#[serde(untagged)]``;
    - typescript-fetch emits ``{ kind: 'customer' } & ...`` unions whose
      ``FromJSONTyped`` switches on the tag and returns the raw payload for a
      tag it does not know, rather than the ``{} as any`` that silently
      emptied the field.

    ``kind`` is dropped from each hoisted subschema: the discriminator owns it,
    and both generators re-attach it. Leaving it in place makes serde's
    internally tagged representation fail with ``missing field `kind```,
    because it strips the tag before handing the rest to the variant. The one
    exception is a variant that carries nothing else — see below.

    See tachyonfield's `docs/adr/cerp-25-api-versioning-policy.md`, which lets
    upstream add response variants behind a label and requires generated
    clients not to fall over on them.
    """
    schemas = (spec.get("components") or {}).get("schemas")
    if not isinstance(schemas, dict):
        return [], []

    hoisted: list[tuple[str, str, str]] = []
    collisions: list[str] = []

    for parent in list(schemas):
        schema = schemas[parent]
        if not isinstance(schema, dict):
            continue
        values = _tag_values(schema)
        if values is None:
            continue

        names = [f"{parent}{_pascal(value)}" for value in values]
        # Hoisting onto a name that is already spoken for — by another schema,
        # or by a sibling tag that pascal-cases the same way — would silently
        # overwrite it. Report the union and leave it anonymous rather than
        # corrupt the spec.
        taken = [name for name in names if name in schemas]
        taken += [name for name in set(names) if names.count(name) > 1]
        if taken:
            collisions.extend(sorted(set(taken)))
            continue

        mapping: dict[str, str] = {}
        for index, (value, name) in enumerate(zip(values, names)):
            variant = schema["oneOf"][index]
            variant["required"] = [
                item for item in variant["required"] if item != DISCRIMINATOR_PROPERTY
            ]
            if not variant["required"]:
                del variant["required"]
            # Dropping `kind` from a variant that carries nothing else would
            # leave an empty object, which openapi-generator treats as
            # free-form: no model is emitted and `serde_json::Value` / `any` is
            # inlined instead, and the typescript barrel then imports a name
            # that was never written. Such a variant keeps `kind` as an
            # optional property — serde reads it back as `None` (the tag is
            # stripped before the variant sees the body) and skips it on the
            # way out, so the enum still owns the tag either way.
            if len(variant["properties"]) > 1:
                del variant["properties"][DISCRIMINATOR_PROPERTY]

            schemas[name] = variant
            schema["oneOf"][index] = {"$ref": f"#/components/schemas/{name}"}
            mapping[value] = f"#/components/schemas/{name}"
            hoisted.append((parent, value, name))

        schema["discriminator"] = {
            "propertyName": DISCRIMINATOR_PROPERTY,
            "mapping": mapping,
        }

    return hoisted, collisions


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
    hoisted, collisions = discriminate_tagged_unions(spec)
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
    if hoisted:
        unions = dict.fromkeys(parent for parent, _, _ in hoisted)
        print(
            f"==> named and discriminated {len(unions)} `kind`-tagged oneOf union(s) "
            "(upstream emits them as anonymous subschemas that openapi-generator "
            "names by position):",
            file=sys.stderr,
        )
        for parent, value, name in hoisted:
            print(f"    {parent}: kind={value} -> {name}", file=sys.stderr)
    if collisions:
        print(
            f"==> WARNING: left {len(collisions)} `kind`-tagged union(s) anonymous: "
            "hoisting would have overwritten an existing schema. Unknown `kind` "
            "values will break these clients:",
            file=sys.stderr,
        )
        for name in collisions:
            print(f"    {name}", file=sys.stderr)
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
    if (
        not injected
        and not requalified
        and not renamed
        and not hoisted
        and not collisions
        and not security_added
        and not server_added
    ):
        print("==> spec already consistent; nothing to normalize", file=sys.stderr)

    print(f"==> wrote {destination}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
