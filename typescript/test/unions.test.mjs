// The `kind`-tagged unions survive a variant this SDK was not generated from.
//
// `scripts/normalize-spec.py` gives these unions a `discriminator`, so the
// generated `…FromJSON` helpers switch on `kind` and return the payload
// untouched for a tag they do not know. Without it the generator matched
// variants by which properties were present and returned `{} as any` when
// nothing matched, which emptied the field with no error — the half of
// tachyonfield#1292 that TypeScript callers could not see.
//
// Offline tests: `npm test`.

import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { test } from 'node:test'

// The ESM build ships extensionless specifiers for bundlers, so load the
// CommonJS output the way `require()` callers do. The `…FromJSON` helpers come
// from their own modules: `models/index.ts` carries the interfaces only, which
// is what `apis/*.ts` import them from as well.
const require = createRequire(import.meta.url)
const { variantKind } = require('../dist/index.js')
const { InvoiceBillToEvidenceResponseFromJSON } = require(
  '../dist/models/InvoiceBillToEvidenceResponse.js',
)
const { InvoiceBillToRequestToJSON } = require('../dist/models/InvoiceBillToRequest.js')
const { InvoiceBillToResponseFromJSON, InvoiceBillToResponseToJSON } = require(
  '../dist/models/InvoiceBillToResponse.js',
)

test('a known kind deserializes into its own variant', () => {
  const raw = { kind: 'customer', customerId: 'cus_1', snapshot: { name: '山田太郎' } }

  const billTo = InvoiceBillToResponseFromJSON(raw)

  assert.equal(billTo.kind, 'customer')
  assert.equal(billTo.customerId, 'cus_1')
  assert.deepEqual(InvoiceBillToResponseToJSON(billTo), raw)
})

test('a tag-only variant round trips', () => {
  const raw = { kind: 'direct' }

  const evidence = InvoiceBillToEvidenceResponseFromJSON(raw)

  assert.equal(evidence.kind, 'direct')
})

test('an unknown kind is kept rather than emptied', () => {
  const raw = { kind: 'introducer', introducerId: 'int_1', snapshot: { name: '紹介元' } }

  const billTo = InvoiceBillToResponseFromJSON(raw)

  // The pre-discriminator generator returned `{}` here, so the caller saw a
  // present-but-empty billTo and had nothing to branch on.
  assert.deepEqual(billTo, raw)
  assert.equal(variantKind(billTo), 'introducer')
})

test('an unknown kind nested in a known variant does not empty it', () => {
  const raw = {
    kind: 'client',
    clientId: 'cli_1',
    snapshot: { name: '取引先' },
    evidence: { kind: 'introduced_by', introducerId: 'int_1' },
  }

  const billTo = InvoiceBillToResponseFromJSON(raw)

  assert.equal(billTo.kind, 'client')
  assert.equal(billTo.clientId, 'cli_1')
  assert.deepEqual(billTo.evidence, raw.evidence)
  assert.equal(variantKind(billTo.evidence), 'introduced_by')
})

test('a request variant serializes its tag', () => {
  const body = InvoiceBillToRequestToJSON({ kind: 'unregistered', name: '山田太郎' })

  // The optional members come back as explicit `undefined`, which JSON.stringify
  // drops; the tag is what this asserts.
  assert.equal(body.kind, 'unregistered')
  assert.equal(body.name, '山田太郎')
})

test('variantKind reports nothing for a value that carries no tag', () => {
  assert.equal(variantKind(null), undefined)
  assert.equal(variantKind('customer'), undefined)
  assert.equal(variantKind({}), undefined)
})
