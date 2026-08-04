//! Hand-maintained helpers on top of the generated client.
//!
//! TACHYON Field resolves the caller's tenant from two headers that the
//! OpenAPI contract does not describe, so the generated operations cannot set
//! them: `x-operator-id` (the tenant being acted on) and `x-platform-id` (the
//! platform that tenant belongs to). Requests without them are rejected even
//! with a valid bearer token.
//!
//! These constructors fold the headers into the `reqwest::Client` that the
//! generated [`Configuration`] carries, so every operation picks them up.
//!
//! This module is listed in `.openapi-generator-ignore`; regeneration leaves
//! it (and `lib.rs`) alone.

use reqwest::header::{HeaderMap, HeaderValue, InvalidHeaderValue};

use crate::apis::configuration::Configuration;

/// Platform id of the production TACHYON deployment.
pub const PRODUCTION_PLATFORM_ID: &str = "tn_01hjjn348rn3t49zz6hvmfq67p";

/// Tenant id of the dedicated TACHYON Field tenant.
pub const FIELD_TENANT_ID: &str = "tn_01ks18jhh1xvggktfzjx5jqsen";

/// Build a configuration for `operator_id` on the production platform.
pub fn configuration(
    access_token: &str,
    operator_id: &str,
) -> Result<Configuration, InvalidHeaderValue> {
    configuration_for_platform(access_token, operator_id, PRODUCTION_PLATFORM_ID)
}

/// Build a configuration for an explicit operator/platform pair.
pub fn configuration_for_platform(
    access_token: &str,
    operator_id: &str,
    platform_id: &str,
) -> Result<Configuration, InvalidHeaderValue> {
    let mut headers = HeaderMap::new();
    headers.insert("x-operator-id", HeaderValue::from_str(operator_id)?);
    headers.insert("x-platform-id", HeaderValue::from_str(platform_id)?);

    let client = reqwest::Client::builder()
        .default_headers(headers)
        .build()
        .expect("reqwest client with static tenant headers should build");

    Ok(Configuration {
        client,
        bearer_access_token: Some(access_token.to_owned()),
        ..Configuration::default()
    })
}
