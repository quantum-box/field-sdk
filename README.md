# TACHYON Field SDK

Generated API clients for the [TACHYON Field](https://github.com/quantum-box/tachyonfield)
REST API. The contract is `apps/api/tachyon-field.openapi.yaml` in tachyonfield,
vendored here as [`openapi.yaml`](openapi.yaml) and turned into one client per
language by [`scripts/generate.sh`](scripts/generate.sh).

| Directory | Package | Distribution |
|-----------|---------|--------------|
| [`rust/`](rust) | `field-sdk` (crate) | git dependency |
| [`typescript/`](typescript) | `@tachyon-sdk/field` (npm) | npm, published on version bump |

Coverage is the full REST surface: 233 paths across 36 tag groups (ERP, StoreKit,
Bridge, IAM, invoices, quotations, reservations, ...).

Both clients default to production — `https://tachyon-field-api.txcloud.app` is
baked into the generated code, so nothing but a token is required to make a call.

## Authentication

Two things travel with every authenticated request:

- `Authorization: Bearer <token>` — a Cognito **access token** for the user,
  the same one the desktop client sends.
- `x-operator-id` / `x-platform-id` — the tenant context. These are not part of
  the OpenAPI contract, so the generated operations cannot set them; the
  `field` helpers below fold them into the HTTP client instead. Requests
  without them are rejected even with a valid token.

The token is exactly the one the app itself uses. Three ways to get one:

```bash
# Already signed in to the app: hand over the refresh token the browser keeps
# under localStorage['tachyon.field.auth.refresh'].
export FIELD_API_TOKEN="$(FIELD_REFRESH_TOKEN='…' node scripts/login.mjs)"

# Or sign in from scratch.
export FIELD_API_TOKEN="$(FIELD_USERNAME=you@example.com FIELD_PASSWORD='…' node scripts/login.mjs)"
```

Or copy the `Authorization: Bearer …` header straight off any API request in
the browser's network panel.

`scripts/login.mjs` makes the same `InitiateAuth` calls as the client app,
reads secrets from the environment only, and prints nothing but the access
token. Access tokens are short-lived — re-run it when calls start returning
401.

## Rust

```toml
[dependencies]
field-sdk = { git = "https://github.com/quantum-box/field-sdk" }
```

```rust
use field_sdk::apis::vendors_api;
use field_sdk::field;

let config = field::configuration(&access_token, field::FIELD_TENANT_ID)?;

let vendor = vendors_api::get_vendor(&config, "vnd_123").await?;
```

`field::configuration_for_platform` takes an explicit platform id; both return
a `Configuration` you can further adjust (`base_path` for a preview deployment
or a local API). TLS backend: `rustls` by default, `native-tls` via
`default-features = false, features = ["native-tls"]`.

## TypeScript

```sh
npm install @tachyon-sdk/field
```

```ts
import { FIELD_TENANT_ID, VendorsApi, createFieldConfiguration } from '@tachyon-sdk/field'

const api = new VendorsApi(
  createFieldConfiguration({ accessToken, operatorId: FIELD_TENANT_ID }),
)

const vendor = await api.getVendor({ id: 'vnd_123' })
```

`createFieldConfiguration` accepts everything `Configuration` does, so pass
`basePath` to target something other than production. Operations take a single
request object (`useSingleRequestParameter`), so optional query parameters stay
named at the call site.

## Smoke tests

Both clients ship live tests against production. They cover the health and
readiness probes, and assert that an authenticated endpoint rejects a missing
token with `401 UNAUTHORIZED`:

```bash
cargo test --manifest-path rust/Cargo.toml --test smoke -- --ignored
cd typescript && npm run smoke
```

Set `FIELD_API_TOKEN` (see [Authentication](#authentication)) to also exercise
an authenticated request; the test is skipped without it. `FIELD_OPERATOR_ID`
overrides the tenant, which defaults to the TACHYON Field tenant. `.github/workflows/smoke.yml` runs both nightly and on
demand, reading the token from the `FIELD_API_TOKEN` repository secret.

## Releasing

The npm package publishes from `main` whenever `typescript/package.json`
carries a version that is not on the registry yet
(`.github/workflows/publish-typescript.yml`). Bump the version and record the
change in [CHANGELOG.md](CHANGELOG.md).

Two repository secrets gate this:

| Secret | Used by | Without it |
|--------|---------|------------|
| `NPM_TOKEN` | publish workflow | the job logs a notice and skips — nothing is published |
| `FIELD_API_TOKEN` | nightly smoke workflow | the authenticated case is skipped; the rest still runs |

The Rust crate is consumed as a git dependency and is marked `publish = false`;
pin a tag or commit on the consumer side when you need reproducibility.

## Regenerating

```bash
scripts/sync-spec.sh    # refresh openapi.yaml from a tachyonfield checkout
scripts/generate.sh     # regenerate both clients (or: generate.sh rust | typescript)
```

`generate.sh` runs openapi-generator 7.20.0 through a local install, Docker, or
`npx` — whichever is available. `openapi.yaml` is a byte-for-byte copy of the
upstream contract; `scripts/sync-spec.sh` reads it from `$TACHYONFIELD_DIR`
(default: the `tachyonfield` checkout next to this repo).

Hand-maintained files that regeneration must not clobber are listed in each
client's `.openapi-generator-ignore`: `rust/Cargo.toml`, `rust/src/lib.rs`,
`rust/src/field.rs`, `typescript/package.json`, `typescript/src/index.ts`, and
`typescript/src/field.ts`. Everything else under `rust/src` and
`typescript/src` is generated — edit the spec or the scripts, not the output.

## Spec normalization

`scripts/normalize-spec.py` patches a build copy of the spec
(`build/openapi.normalized.yaml`, gitignored) and prints every change it makes.
Only one patch is live today:

| Gap | Normalization | Status |
|-----|---------------|--------|
| No `servers`, so clients would default to `http://localhost` | declare the production host `https://tachyon-field-api.txcloud.app` | applied — deliberate, the SDK owns the default |
| Path templated but the parameter is undeclared (`/v1/erp/vendors/{id}`) | inject `in: path`, `required: true`, `type: string` | fixed upstream in [tachyonfield#914](https://github.com/quantum-box/tachyonfield/pull/914) |
| Query parameter declared as `in: path` (`/v1/field/reports/payout?from=`) | move to `in: query`; optional when the schema is nullable | fixed upstream |
| `operationId` reused across tags (`get_order`, `list_orders`, `list_categories`) | rename to `<tag>_<operationId>` | fixed upstream, which adopted the same `storekit_*` names — no client rename |
| No `securitySchemes`, so clients would never send a token | declare `bearerAuth` (`http` / `bearer`) | fixed upstream |

The upstream fixes stay covered: the checks run on every generation and report
what they touch, so a regression in the annotations shows up as a patch line
instead of a client that fails to compile.

Not covered by normalization: the `x-operator-id` / `x-platform-id` headers are
still absent from the contract, which is why the `field` helpers exist.

Also patched after generation: openapi-generator 7.20.0's typescript-fetch
templates import `mapValues` from `runtime.ts` without ever emitting it, so
`generate.sh` appends the helper.

## Versioning

`openapi.yaml` carries the upstream contract version (`info.version`), which is
independent of the package versions in `rust/Cargo.toml` and
`typescript/package.json`. Bump the packages when publishing; record the spec
version the release was generated from in the commit message.
