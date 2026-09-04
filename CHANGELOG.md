# Changelog

## Unreleased

### Changed

- `kind`-tagged unions (`InvoiceBillToResponse`, `InvoiceBillToRequest`,
  `InvoiceBillToEvidenceResponse`, `ReservationBillTo`,
  `ReservationBillToRequest`) are now discriminated on `kind` and their variants
  are named after the tag. **Breaking for callers that named a variant type**:
  `InvoiceBillToResponseOneOf2` is now `InvoiceBillToResponseUnregistered`, and
  the Rust variants lost their `InvoiceBillToResponse` prefix
  (`InvoiceBillToResponse::Customer`). The positional names were not stable —
  `…OneOf2` meant `legacy_unresolved` in spec 0.1.16 and `unregistered` in
  0.1.25 — so code that matched on them was silently reading a different
  variant after a regeneration.
- A `kind` the installed client was not generated from no longer breaks the
  response. Rust keeps it in a new `Unknown(serde_json::Value)` variant instead
  of failing the deserialization of everything that contains it; TypeScript
  returns the payload untouched instead of the empty object it used to
  substitute. tachyonfield adds union variants as an additive change
  ([CERP-25](https://github.com/quantum-box/tachyonfield/blob/main/docs/adr/cerp-25-api-versioning-policy.md)),
  so this is the case that occurs between an upstream release and a
  regeneration here — see [Tagged unions](README.md#tagged-unions).

### Added

- `variantKind` (TypeScript): reads `kind` off a union value, including a
  variant the package predates, which the declared union type cannot describe.
- Offline tests for the union behaviour in both clients, wired into `ci`:
  `cargo test --manifest-path rust/Cargo.toml` and `npm test`.
- Rust client (`field-sdk` crate) and TypeScript client (`@tachyon-sdk/field`
  npm package) generated from TACHYON Field spec version 0.1.7 — 233 paths
  across 36 tag groups.
- `https://tachyon-field-api.txcloud.app` baked in as the default base path in
  both clients; callers can still override it.
- Bearer authentication wired into every operation.
- `scripts/login.mjs`: mints an access token from either a refresh token
  (`FIELD_REFRESH_TOKEN`, the one the app persists after login) or a
  username/password sign-in.
- Tenant-context helpers — `field::configuration` (Rust) and
  `createFieldConfiguration` (TypeScript) — which attach the `x-operator-id` /
  `x-platform-id` headers the API requires but the contract does not describe.
- Live smoke tests against production: `cargo test --test smoke -- --ignored`
  and `npm run smoke`. The authenticated case calls
  `GET /v1/field/client-capabilities` through the tenant helpers when
  `FIELD_API_TOKEN` is set, and is skipped otherwise. Verified end to end
  against production with a real token: 4/4 in both clients.
- Spec re-synced from tachyonfield main after
  [tachyonfield#914](https://github.com/quantum-box/tachyonfield/pull/914)
  fixed the utoipa annotation gaps. Path/query parameters, unique
  `operationId`s, and `bearerAuth` now come from the contract itself; only the
  `servers` patch remains SDK-side. Client method names are unchanged —
  upstream adopted the same `storekit_*` names.
- `scripts/sync-spec.sh` (refresh the vendored spec) and `scripts/generate.sh`
  (regenerate both clients), plus `scripts/normalize-spec.py` which patches the
  upstream spec's utoipa gaps into a build copy.
- CI: build/typecheck both clients, verify the committed output still matches
  `openapi.yaml`, publish the npm package on version bump, and run the smoke
  suite nightly.

### Fixed

- `generate.sh` deletes generated files the current spec no longer produces.
  openapi-generator only writes, so `CustomFieldType` and the positional
  `…OneOf` modules had outlived their schemas — unreferenced by the regenerated
  barrels, but still committed and still importable.
- The `generated-up-to-date` CI job checks `git status` rather than `git diff`,
  so a schema that arrives as new untracked files is caught too.
