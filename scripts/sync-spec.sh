#!/usr/bin/env bash
# Refresh openapi.yaml from the tachyonfield checkout that owns the contract.
#
# The spec is generated in tachyonfield by `cargo run --bin codegen` and
# committed at apps/api/tachyon-field.openapi.yaml. This script only copies it;
# run scripts/generate.sh afterwards to regenerate the clients.
#
# Usage:
#   scripts/sync-spec.sh                        # uses $TACHYONFIELD_DIR or the default sibling checkout
#   TACHYONFIELD_DIR=/path/to/tachyonfield scripts/sync-spec.sh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

DEFAULT_SOURCE_REPO="$(cd "$ROOT_DIR/.." && pwd)/tachyonfield"
SOURCE_REPO="${TACHYONFIELD_DIR:-$DEFAULT_SOURCE_REPO}"
SOURCE_SPEC="$SOURCE_REPO/apps/api/tachyon-field.openapi.yaml"

if [[ ! -f "$SOURCE_SPEC" ]]; then
  echo "Error: spec not found at $SOURCE_SPEC" >&2
  echo "Set TACHYONFIELD_DIR to your tachyonfield checkout." >&2
  exit 1
fi

cp "$SOURCE_SPEC" "$ROOT_DIR/openapi.yaml"
echo "==> Copied $SOURCE_SPEC -> $ROOT_DIR/openapi.yaml"

VERSION="$(awk '/^info:/{f=1} f && /^  version:/{print $2; exit}' "$ROOT_DIR/openapi.yaml")"
echo "==> Spec version: ${VERSION:-unknown}"
echo "==> Next: scripts/generate.sh"
