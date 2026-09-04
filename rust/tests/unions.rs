//! The `kind`-tagged unions survive a variant this SDK was not generated from.
//!
//! `scripts/normalize-spec.py` gives these unions a `discriminator` and
//! `scripts/patch-rust-unknown-variants.py` appends the `Unknown` catch-all.
//! Together they are what stops a spec bump upstream from breaking callers:
//! tachyonfield may add response variants as an additive change (CERP-25), and
//! until the SDK is regenerated serde has to keep the payload rather than fail
//! everything that contains it — which is what happened when `unregistered`
//! joined `InvoiceBillToResponse` (tachyonfield#1292).
//!
//! These are offline tests: `cargo test --manifest-path rust/Cargo.toml`.

use field_sdk::models::{
    InvoiceBillToEvidenceResponse, InvoiceBillToRequest, InvoiceBillToRequestUnregistered,
    InvoiceBillToResponse,
};
use serde_json::json;

#[test]
fn a_known_variant_deserializes_into_its_own_type() {
    let raw = json!({
        "kind": "customer",
        "customerId": "cus_1",
        "snapshot": {"name": "山田太郎"},
    });

    let bill_to: InvoiceBillToResponse =
        serde_json::from_value(raw.clone()).expect("a known kind should deserialize");

    match &bill_to {
        InvoiceBillToResponse::Customer(customer) => {
            assert_eq!(customer.customer_id, "cus_1");
        }
        other => panic!("expected the customer variant, got {other:?}"),
    }

    // The tag is written back by the enum, not by the variant struct.
    assert_eq!(serde_json::to_value(&bill_to).unwrap(), raw);
}

#[test]
fn a_tag_only_variant_round_trips() {
    let raw = json!({"kind": "direct"});

    let evidence: InvoiceBillToEvidenceResponse =
        serde_json::from_value(raw.clone()).expect("`direct` carries nothing but its tag");

    assert!(matches!(evidence, InvoiceBillToEvidenceResponse::Direct(_)));
    assert_eq!(serde_json::to_value(&evidence).unwrap(), raw);
}

#[test]
fn an_unknown_kind_is_kept_rather_than_rejected() {
    let raw = json!({
        "kind": "introducer",
        "introducerId": "int_1",
        "snapshot": {"name": "紹介元"},
    });

    let bill_to: InvoiceBillToResponse = serde_json::from_value(raw.clone())
        .expect("a kind added after this SDK was generated must not fail the response");

    match &bill_to {
        InvoiceBillToResponse::Unknown(value) => {
            assert_eq!(value["kind"], "introducer");
            assert_eq!(value["introducerId"], "int_1");
        }
        other => panic!("expected the unknown catch-all, got {other:?}"),
    }

    // Nothing is dropped on the way back out, so a value read from one endpoint
    // can be handed to another unchanged.
    assert_eq!(serde_json::to_value(&bill_to).unwrap(), raw);
}

#[test]
fn an_unknown_kind_nested_in_a_known_variant_does_not_fail_it() {
    // The failure that motivated this: the union is reached through a field of
    // something else, so rejecting it rejects the whole enclosing payload.
    let raw = json!({
        "kind": "client",
        "clientId": "cli_1",
        "snapshot": {"name": "取引先"},
        "evidence": {"kind": "introduced_by", "introducerId": "int_1"},
    });

    let bill_to: InvoiceBillToResponse =
        serde_json::from_value(raw.clone()).expect("an unknown evidence kind must stay local");

    match &bill_to {
        InvoiceBillToResponse::Client(client) => {
            assert!(matches!(
                *client.evidence,
                InvoiceBillToEvidenceResponse::Unknown(_)
            ));
        }
        other => panic!("expected the client variant, got {other:?}"),
    }

    assert_eq!(serde_json::to_value(&bill_to).unwrap(), raw);
}

#[test]
fn a_request_variant_serializes_its_tag() {
    let bill_to = InvoiceBillToRequest::Unregistered(Box::new(InvoiceBillToRequestUnregistered {
        name: "山田太郎".to_owned(),
        ..Default::default()
    }));

    assert_eq!(
        serde_json::to_value(&bill_to).unwrap(),
        json!({"kind": "unregistered", "name": "山田太郎"}),
    );
}
