#!/usr/bin/env node
// Sign in to the TACHYON Field Cognito pool and print an access token.
//
// The pool is a public client with no secret and no Hosted UI, so this is the
// same USER_PASSWORD_AUTH call the desktop client makes
// (apps/client/src/platform/auth/cognito-client.ts in tachyonfield).
//
// Two ways in, both reading secrets from the environment only, and both
// printing nothing but the access token:
//
//   FIELD_USERNAME=you@example.com FIELD_PASSWORD='...' node scripts/login.mjs
//   FIELD_REFRESH_TOKEN='...' node scripts/login.mjs
//
// The refresh-token flow is the one to use when you are already signed in to
// the app: the browser keeps the access token in memory but persists the
// refresh token under localStorage['tachyon.field.auth.refresh'], and Cognito
// exchanges it for a fresh access token — the same call the client makes.
//
// The token can be captured directly:
//
//   export FIELD_API_TOKEN="$(FIELD_REFRESH_TOKEN=... node scripts/login.mjs)"
//
// Everything else (progress, errors) goes to stderr.

const CLIENT_ID = '5n3h0du82ll3t02m99gnr8qj27'
const ENDPOINT = 'https://cognito-idp.ap-northeast-1.amazonaws.com/'

const username = process.env.FIELD_USERNAME
const password = process.env.FIELD_PASSWORD
const refreshToken = process.env.FIELD_REFRESH_TOKEN

const authRequest = refreshToken
  ? {
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      ClientId: CLIENT_ID,
      AuthParameters: { REFRESH_TOKEN: refreshToken },
    }
  : username && password
    ? {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: CLIENT_ID,
        AuthParameters: { USERNAME: username, PASSWORD: password },
      }
    : null

if (!authRequest) {
  console.error(
    'Set FIELD_REFRESH_TOKEN, or FIELD_USERNAME and FIELD_PASSWORD, in the environment.',
  )
  process.exit(2)
}

const response = await fetch(ENDPOINT, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-amz-json-1.1',
    'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
  },
  body: JSON.stringify(authRequest),
})

const payload = await response.json().catch(() => null)

if (!response.ok) {
  const type = payload?.__type ?? `HTTP ${response.status}`
  const message = payload?.message ?? 'sign-in failed'
  console.error(`${type}: ${message}`)
  process.exit(1)
}

if (payload?.ChallengeName) {
  console.error(
    `Sign-in returned the ${payload.ChallengeName} challenge; finish it in the app first.`,
  )
  process.exit(1)
}

const accessToken = payload?.AuthenticationResult?.AccessToken
if (!accessToken) {
  console.error('Sign-in succeeded but no AccessToken was returned.')
  process.exit(1)
}

const expiresIn = payload.AuthenticationResult.ExpiresIn
console.error(
  `${authRequest.AuthFlow}: access token valid for ${expiresIn}s.`,
)
process.stdout.write(accessToken)
