//! Live smoke tests against the production TACHYON Field API.
//!
//! These hit the real host baked into `Configuration::default()`, so they are
//! network tests: run them with `cargo test --test smoke -- --ignored`.
//!
//! `smoke_authenticated_endpoint` only runs when `FIELD_API_TOKEN` is set;
//! without a token it is skipped, and `smoke_rejects_missing_token` covers the
//! unauthenticated half of the contract.

use field_sdk::apis::configuration::Configuration;
use field_sdk::apis::{default_api, vendors_api, Error};

const PRODUCTION: &str = "https://tachyon-field-api.txcloud.app";

#[test]
fn default_base_path_is_production() {
    assert_eq!(Configuration::default().base_path, PRODUCTION);
}

#[tokio::test]
#[ignore = "network test: hits the production API"]
async fn smoke_health() {
    let configuration = Configuration::default();

    default_api::health_check(&configuration)
        .await
        .expect("GET /health should return 200");

    default_api::readiness_check(&configuration)
        .await
        .expect("GET /health/ready should return 200");
}

#[tokio::test]
#[ignore = "network test: hits the production API"]
async fn smoke_rejects_missing_token() {
    let configuration = Configuration::default();

    let error = vendors_api::list_vendors(&configuration, None, None, Some(1), None)
        .await
        .expect_err("GET /v1/erp/vendors without a token should fail");

    match error {
        Error::ResponseError(response) => {
            assert_eq!(response.status, 401, "body: {}", response.content);
            assert!(
                response.content.contains("UNAUTHORIZED"),
                "expected an UNAUTHORIZED error body, got: {}",
                response.content
            );
        }
        other => panic!("expected an HTTP 401 response, got: {other:?}"),
    }
}

#[tokio::test]
#[ignore = "network test: hits the production API"]
async fn smoke_authenticated_endpoint() {
    let Ok(token) = std::env::var("FIELD_API_TOKEN") else {
        eprintln!("FIELD_API_TOKEN is not set; skipping the authenticated smoke test");
        return;
    };

    let configuration = Configuration {
        bearer_access_token: Some(token),
        ..Configuration::default()
    };

    vendors_api::list_vendors(&configuration, None, None, Some(1), None)
        .await
        .expect("GET /v1/erp/vendors with a token should return 200");
}
