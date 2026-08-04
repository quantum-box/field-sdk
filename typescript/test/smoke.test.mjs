// Live smoke tests against the production TACHYON Field API.
//
// Run with `npm run smoke` (builds first, then executes this file). These hit
// the real host baked into BASE_PATH, so they need network access.
//
// The authenticated case only runs when FIELD_API_TOKEN is set; without a token
// the unauthenticated case still proves routing, TLS, and error decoding.

import assert from 'node:assert/strict'
import { test } from 'node:test'

import {
  BASE_PATH,
  Configuration,
  DefaultApi,
  ResponseError,
  VendorsApi,
} from '../dist/index.js'

const PRODUCTION = 'https://tachyon-field-api.txcloud.app'

test('default base path is production', () => {
  assert.equal(BASE_PATH, PRODUCTION)
})

test('health and readiness probes respond', async () => {
  const api = new DefaultApi()

  await api.healthCheck()
  await api.readinessCheck()
})

test('an authenticated endpoint rejects a missing token', async () => {
  const api = new VendorsApi()

  const error = await api.listVendors({ limit: 1 }).then(
    () => null,
    (caught) => caught,
  )

  assert.ok(error instanceof ResponseError, `expected ResponseError, got: ${error}`)
  assert.equal(error.response.status, 401)

  const body = await error.response.json()
  assert.equal(body.code, 'UNAUTHORIZED')
})

test('an authenticated endpoint accepts a token', async (t) => {
  const accessToken = process.env.FIELD_API_TOKEN
  if (!accessToken) {
    t.skip('FIELD_API_TOKEN is not set')
    return
  }

  const api = new VendorsApi(new Configuration({ accessToken }))
  const vendors = await api.listVendors({ limit: 1 })

  assert.ok(Array.isArray(vendors.items), 'expected a vendor list payload')
})
