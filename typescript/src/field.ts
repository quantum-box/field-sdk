/**
 * Hand-maintained helpers on top of the generated client.
 *
 * TACHYON Field resolves the caller's tenant from two headers that the OpenAPI
 * contract does not describe, so the generated operations cannot set them:
 * `x-operator-id` (the tenant being acted on) and `x-platform-id` (the platform
 * that tenant belongs to). Requests without them are rejected even with a valid
 * bearer token.
 *
 * This module and `index.ts` are listed in `.openapi-generator-ignore`;
 * regeneration leaves them alone.
 */
import { Configuration, type ConfigurationParameters } from './runtime'

/** Platform id of the production TACHYON deployment. */
export const PRODUCTION_PLATFORM_ID = 'tn_01hjjn348rn3t49zz6hvmfq67p'

/** Tenant id of the dedicated TACHYON Field tenant. */
export const FIELD_TENANT_ID = 'tn_01ks18jhh1xvggktfzjx5jqsen'

export type FieldConfigurationParameters = ConfigurationParameters & {
  /** Tenant being acted on, sent as `x-operator-id`. */
  operatorId: string
  /** Platform the tenant belongs to, sent as `x-platform-id`. */
  platformId?: string
}

/** Build a `Configuration` that carries the tenant headers on every request. */
export function createFieldConfiguration({
  operatorId,
  platformId = PRODUCTION_PLATFORM_ID,
  headers,
  ...rest
}: FieldConfigurationParameters): Configuration {
  return new Configuration({
    ...rest,
    headers: {
      ...headers,
      'x-operator-id': operatorId,
      'x-platform-id': platformId,
    },
  })
}
