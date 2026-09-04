#!/usr/bin/env bash
# Regenerate the Rust and TypeScript clients from openapi.yaml.
#
# The generator runs through one of (in order of preference):
#   1. a locally installed openapi-generator-cli / openapi-generator (needs a JRE)
#   2. the openapitools/openapi-generator-cli Docker image
#   3. npx @openapitools/openapi-generator-cli   (needs a JRE)
#
# Usage:
#   scripts/generate.sh              # regenerate both clients
#   scripts/generate.sh rust         # regenerate only the Rust crate
#   scripts/generate.sh typescript   # regenerate only the TypeScript package
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SPEC_FILE="$ROOT_DIR/openapi.yaml"
GENERATOR_VERSION="7.20.0"

NORMALIZED_SPEC="$ROOT_DIR/build/openapi.normalized.yaml"
RUST_PACKAGE_NAME="field-sdk"
TS_NPM_NAME="@tachyon-sdk/field"
PACKAGE_VERSION="0.1.0"

if [[ ! -f "$SPEC_FILE" ]]; then
  echo "Error: spec not found at $SPEC_FILE (run scripts/sync-spec.sh first)" >&2
  exit 1
fi

TARGETS=("$@")
if [[ ${#TARGETS[@]} -eq 0 ]]; then
  TARGETS=(rust typescript)
fi

# Resolve how we invoke the generator. `run_generator <args...>` takes paths
# that are relative to the repository root so the Docker bind mount and the
# native invocations can share one call site.
has_java() { java -version >/dev/null 2>&1; }

if command -v openapi-generator-cli >/dev/null 2>&1 && has_java; then
  MODE="native"
  GENERATOR_BIN="openapi-generator-cli"
elif command -v openapi-generator >/dev/null 2>&1 && has_java; then
  MODE="native"
  GENERATOR_BIN="openapi-generator"
elif command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1; then
  MODE="docker"
elif command -v npx >/dev/null 2>&1 && has_java; then
  MODE="npx"
else
  echo "Error: no way to run openapi-generator." >&2
  echo "Install one of:" >&2
  echo "  npm install -g @openapitools/openapi-generator-cli  (needs a JRE)" >&2
  echo "  brew install openapi-generator" >&2
  echo "  Docker (the openapitools/openapi-generator-cli image is pulled on demand)" >&2
  exit 1
fi

run_generator() {
  case "$MODE" in
    native)
      (cd "$ROOT_DIR" && "$GENERATOR_BIN" "$@")
      ;;
    npx)
      # The npm wrapper is versioned independently; the generator version it
      # downloads is pinned in openapitools.json.
      (cd "$ROOT_DIR" && npx --yes @openapitools/openapi-generator-cli "$@")
      ;;
    docker)
      docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v "$ROOT_DIR:/local" \
        -w /local \
        "openapitools/openapi-generator-cli:v$GENERATOR_VERSION" "$@"
      ;;
  esac
}

echo "==> generator mode: $MODE (openapi-generator $GENERATOR_VERSION)"

# The committed spec is a byte-for-byte copy of tachyonfield's contract, so the
# missing `in: path` parameters are patched into a build copy instead.
"$SCRIPT_DIR/normalize-spec.py" "$SPEC_FILE" "$NORMALIZED_SPEC"
SPEC_ARG="build/openapi.normalized.yaml"

# useSingleRequestParameter is deliberately off for Rust: in that mode the
# generator emits bare `{id}` path interpolations that do not compile.
generate_rust() {
  echo "==> Generating Rust client into rust/"
  run_generator generate \
    -g rust \
    -i "$SPEC_ARG" \
    -o rust \
    --additional-properties="packageName=$RUST_PACKAGE_NAME,packageVersion=$PACKAGE_VERSION,library=reqwest,supportAsync=true,preferUnsignedInt=false" \
    --skip-validate-spec

  # The `kind`-tagged unions are generated as internally tagged enums that
  # reject an unknown tag, which fails the whole enclosing response. Append the
  # catch-all variant that keeps such a payload instead.
  "$SCRIPT_DIR/patch-rust-unknown-variants.py" "$ROOT_DIR/rust/src/models"

  prune_generated rust src/apis src/models docs

  # The generator's output is not rustfmt-clean; format it so the committed
  # tree stays stable and `cargo fmt --check` passes in CI.
  if command -v cargo >/dev/null 2>&1; then
    echo "==> cargo fmt"
    cargo fmt --manifest-path "$ROOT_DIR/rust/Cargo.toml"
  else
    echo "==> cargo not found; skipping rustfmt (committed output will drift)" >&2
  fi
}

generate_typescript() {
  echo "==> Generating TypeScript client into typescript/"
  run_generator generate \
    -g typescript-fetch \
    -i "$SPEC_ARG" \
    -o typescript \
    --additional-properties="npmName=$TS_NPM_NAME,npmVersion=$PACKAGE_VERSION,supportsES6=true,typescriptThreePlus=true,useSingleRequestParameter=true,withoutRuntimeChecks=false" \
    --skip-validate-spec

  prune_generated typescript src/apis src/models docs
  patch_runtime_map_values
}

# openapi-generator only writes files; it never deletes output it no longer
# produces. A schema that is renamed or dropped upstream leaves its module
# behind, unreferenced by the regenerated `mod.rs` / `index.ts` but still
# committed and still importable — which is how `CustomFieldType` and the
# positional `…OneOf2` modules outlived the schemas they were generated from.
# Each run's own FILES manifest lists what it wrote, so drop everything else
# under the generated directories. Hand-maintained files (listed in
# .openapi-generator-ignore) live outside them and are never considered.
prune_generated() {
  local root="$1"
  shift
  local manifest="$ROOT_DIR/$root/.openapi-generator/FILES"
  local -a removed=()
  local file relative

  while IFS= read -r file; do
    relative="${file#"$ROOT_DIR/$root/"}"
    if ! grep -Fxq "$relative" "$manifest"; then
      rm "$file"
      removed+=("$relative")
    fi
  done < <(find "${@/#/$ROOT_DIR/$root/}" -type f | sort)

  if [[ ${#removed[@]} -gt 0 ]]; then
    echo "==> Pruning ${#removed[@]} stale file(s) from $root/ (no longer generated)"
    printf '    %s\n' "${removed[@]}"
  fi
}

# openapi-generator 7.20.0's typescript-fetch templates make every model import
# `mapValues` from ../runtime, but the runtime template never emits it. Append
# the upstream helper so the package typechecks.
patch_runtime_map_values() {
  local runtime="$ROOT_DIR/typescript/src/runtime.ts"
  if grep -q "export function mapValues" "$runtime"; then
    return
  fi
  echo "==> Patching typescript/src/runtime.ts with the missing mapValues helper"
  cat >>"$runtime" <<'TS'

export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {},
  );
}
TS
}

for target in "${TARGETS[@]}"; do
  case "$target" in
    rust) generate_rust ;;
    typescript|ts) generate_typescript ;;
    *)
      echo "Unknown target: $target (expected: rust, typescript)" >&2
      exit 2
      ;;
  esac
done

echo "==> Done."
