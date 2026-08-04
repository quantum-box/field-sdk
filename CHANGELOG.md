# Changelog

## Unreleased

### Added

- Rust client (`field-sdk` crate) and TypeScript client (`@tachyon-sdk/field`
  npm package) generated from TACHYON Field spec version 0.1.7 — 233 paths
  across 36 tag groups.
- `https://tachyon-field-api.txcloud.app` baked in as the default base path in
  both clients; callers can still override it.
- Bearer authentication wired into every operation.
- Live smoke tests against production: `cargo test --test smoke -- --ignored`
  and `npm run smoke`. The authenticated case runs when `FIELD_API_TOKEN` is
  set and is skipped otherwise.
- `scripts/sync-spec.sh` (refresh the vendored spec) and `scripts/generate.sh`
  (regenerate both clients), plus `scripts/normalize-spec.py` which patches the
  upstream spec's utoipa gaps into a build copy.
- CI: build/typecheck both clients, verify the committed output still matches
  `openapi.yaml`, publish the npm package on version bump, and run the smoke
  suite nightly.
