# TACHYON Field SDK

Generated API clients for the [TACHYON Field](https://github.com/quantum-box/tachyonfield)
REST API. The contract is `apps/api/tachyon-field.openapi.yaml` in tachyonfield,
vendored here as [`openapi.yaml`](openapi.yaml) and turned into one client per
language by [`scripts/generate.sh`](scripts/generate.sh).

| Directory | Package | Status |
|-----------|---------|--------|
| [`rust/`](rust) | `field-sdk` (crate) | generated, `cargo check` clean |
| [`typescript/`](typescript) | `@tachyon/field-sdk` (npm) | generated, `tsc` clean |

Coverage is the full REST surface: 233 paths across 36 tag groups (ERP, StoreKit,
Bridge, IAM, invoices, quotations, reservations, ...).

## Rust

```toml
[dependencies]
field-sdk = { git = "https://github.com/quantum-box/field-sdk", package = "field-sdk" }
```

```rust
use field_sdk::apis::configuration::Configuration;
use field_sdk::apis::vendors_api;

let mut config = Configuration::new();
config.base_path = "https://api.example.com".to_owned();
config.bearer_access_token = Some(access_token);

let vendor = vendors_api::get_vendor(&config, "vnd_123").await?;
```

TLS backend: `rustls` by default, `native-tls` via
`default-features = false, features = ["native-tls"]`.

## TypeScript

```ts
import { Configuration, VendorsApi } from '@tachyon/field-sdk'

const config = new Configuration({
  basePath: 'https://api.example.com',
  accessToken: () => accessToken,
})

const vendor = await new VendorsApi(config).getVendor({ id: 'vnd_123' })
```

Operations take a single request object (`useSingleRequestParameter`), so
optional query parameters stay named at the call site.

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
client's `.openapi-generator-ignore`: `rust/Cargo.toml` and
`typescript/package.json`. Everything else under `rust/src` and
`typescript/src` is generated — edit the spec or the scripts, not the output.

## Spec normalization

The upstream spec is emitted from `#[utoipa::path]` annotations and currently
has three defects that make the generated clients fail to compile.
`scripts/normalize-spec.py` patches a build copy
(`build/openapi.normalized.yaml`, gitignored) and prints every change:

| Defect | Count | Normalization |
|--------|-------|---------------|
| Path templated but the parameter is undeclared (`/v1/erp/vendors/{id}`) | 53 | inject `in: path`, `required: true`, `type: string` |
| Query parameter declared as `in: path` (`/v1/field/reports/payout?from=`) | 20 | move to `in: query`; optional when the schema is nullable |
| `operationId` reused across tags (`get_order`, `list_orders`, `list_categories`) | 3 | rename the later path to `<tag>_<operationId>` (e.g. `storekit_get_order`) |
| No `securitySchemes`, so clients would never send a token | 1 | declare `bearerAuth` (`http` / `bearer`) globally, matching the `Authorization: Bearer` the API enforces |

Two consequences worth knowing:

- StoreKit's `getOrder` / `listOrders` / `listCategories` are exposed as
  `storekitGetOrder` / `storekitListOrders` / `storekitListCategories`. Fixing
  the duplicate `operationId`s upstream will rename them back — a breaking
  change for consumers, so do it in a deliberate release.
- Injected path parameters are always typed `string`. Any that are really
  integers or enums upstream will change type once annotated properly.

The fix belongs in tachyonfield's annotations; the script reports "spec already
consistent" and becomes a no-op once they land.

Also patched after generation: openapi-generator 7.20.0's typescript-fetch
templates import `mapValues` from `runtime.ts` without ever emitting it, so
`generate.sh` appends the helper.

## Versioning

`openapi.yaml` carries the upstream contract version (`info.version`), which is
independent of the package versions in `rust/Cargo.toml` and
`typescript/package.json`. Bump the packages when publishing; record the spec
version the release was generated from in the commit message.
