#!/usr/bin/env python3
"""Give every discriminated Rust union a catch-all for tags it does not know.

`scripts/normalize-spec.py` declares a `discriminator` on the `kind`-tagged
`oneOf` unions, so openapi-generator emits them as internally tagged enums:

    #[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
    #[serde(tag = "kind")]
    pub enum InvoiceBillToResponse {
        #[serde(rename = "customer")]
        Customer(Box<models::InvoiceBillToResponseCustomer>),
        ...
    }

serde rejects a `kind` that is not listed, and the failure is not local: the
union is reached through a required field, so one unrecognised row fails the
whole response. When `unregistered` was added to `InvoiceBillToResponse`
(tachyonfield#1292), every invoice list containing such an invoice stopped
deserializing until the SDK was regenerated.

tachyonfield's CERP-25 policy allows adding response variants and asks
generated clients to tolerate them, so we append a variant that absorbs the
rest:

    #[serde(untagged)]
    Unknown(serde_json::Value),

serde supports `#[serde(untagged)]` on a single variant of an internally
tagged enum: known tags still deserialize into their typed variant, anything
else lands in `Unknown` with the payload — including `kind` — intact, and
re-serializing emits it unchanged.

The generator has no option for this and the models are regenerated on every
run, so it is applied here rather than committed by hand.

Usage:
    scripts/patch-rust-unknown-variants.py rust/src/models
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

TAGGED_ENUM_RE = re.compile(
    r'^#\[serde\(tag = "(?P<tag>[^"]+)"\)\]\n'
    r"pub enum (?P<name>\w+) \{\n"
    r"(?P<body>.*?)"
    r"^\}$",
    re.MULTILINE | re.DOTALL,
)

VARIANT_TEMPLATE = '''    /// A `{tag}` this client was not generated from.
    ///
    /// tachyonfield adds union variants as an additive change (CERP-25), so a
    /// tag this SDK predates is kept as the raw object instead of failing the
    /// deserialization of everything that contains it. The payload — `{tag}`
    /// included — is intact, and re-serializing emits it unchanged.
    #[serde(untagged)]
    Unknown(serde_json::Value),
'''


def patch(source: str) -> tuple[str, list[str]]:
    patched: list[str] = []

    def replace(match: re.Match[str]) -> str:
        body = match.group("body")
        if "#[serde(untagged)]" in body:
            return match.group(0)
        patched.append(match.group("name"))
        variant = VARIANT_TEMPLATE.format(tag=match.group("tag"))
        return match.group(0)[: -len("}")] + variant + "}"

    return TAGGED_ENUM_RE.sub(replace, source), patched


def main(argv: list[str]) -> int:
    if len(argv) != 2:
        sys.exit(f"usage: {argv[0]} <rust/src/models>")

    models = Path(argv[1])
    if not models.is_dir():
        sys.exit(f"not a directory: {models}")

    patched: list[str] = []
    for path in sorted(models.glob("*.rs")):
        source = path.read_text()
        if '#[serde(tag = "' not in source:
            continue
        updated, names = patch(source)
        if names:
            path.write_text(updated)
            patched.extend(names)

    if patched:
        print(
            f"==> added an `Unknown` catch-all to {len(patched)} discriminated union(s): "
            + ", ".join(patched),
            file=sys.stderr,
        )
    else:
        print(
            "==> no discriminated unions found in "
            f"{models}; unknown `kind` values would break the client",
            file=sys.stderr,
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
