use std::error;
use std::fmt;

#[derive(Debug, Clone)]
pub struct ResponseContent<T> {
    pub status: reqwest::StatusCode,
    pub content: String,
    pub entity: Option<T>,
}

#[derive(Debug)]
pub enum Error<T> {
    Reqwest(reqwest::Error),
    Serde(serde_json::Error),
    Io(std::io::Error),
    ResponseError(ResponseContent<T>),
}

impl<T> fmt::Display for Error<T> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let (module, e) = match self {
            Error::Reqwest(e) => ("reqwest", e.to_string()),
            Error::Serde(e) => ("serde", e.to_string()),
            Error::Io(e) => ("IO", e.to_string()),
            Error::ResponseError(e) => ("response", format!("status code {}", e.status)),
        };
        write!(f, "error in {}: {}", module, e)
    }
}

impl<T: fmt::Debug> error::Error for Error<T> {
    fn source(&self) -> Option<&(dyn error::Error + 'static)> {
        Some(match self {
            Error::Reqwest(e) => e,
            Error::Serde(e) => e,
            Error::Io(e) => e,
            Error::ResponseError(_) => return None,
        })
    }
}

impl<T> From<reqwest::Error> for Error<T> {
    fn from(e: reqwest::Error) -> Self {
        Error::Reqwest(e)
    }
}

impl<T> From<serde_json::Error> for Error<T> {
    fn from(e: serde_json::Error) -> Self {
        Error::Serde(e)
    }
}

impl<T> From<std::io::Error> for Error<T> {
    fn from(e: std::io::Error) -> Self {
        Error::Io(e)
    }
}

pub fn urlencode<T: AsRef<str>>(s: T) -> String {
    ::url::form_urlencoded::byte_serialize(s.as_ref().as_bytes()).collect()
}

pub fn parse_deep_object(prefix: &str, value: &serde_json::Value) -> Vec<(String, String)> {
    if let serde_json::Value::Object(object) = value {
        let mut params = vec![];

        for (key, value) in object {
            match value {
                serde_json::Value::Object(_) => params.append(&mut parse_deep_object(
                    &format!("{}[{}]", prefix, key),
                    value,
                )),
                serde_json::Value::Array(array) => {
                    for (i, value) in array.iter().enumerate() {
                        params.append(&mut parse_deep_object(
                            &format!("{}[{}][{}]", prefix, key, i),
                            value,
                        ));
                    }
                }
                serde_json::Value::String(s) => {
                    params.push((format!("{}[{}]", prefix, key), s.clone()))
                }
                _ => params.push((format!("{}[{}]", prefix, key), value.to_string())),
            }
        }

        return params;
    }

    unimplemented!("Only objects are supported with style=deepObject")
}

/// Internal use only
/// A content type supported by this client.
#[allow(dead_code)]
enum ContentType {
    Json,
    Text,
    Unsupported(String),
}

impl From<&str> for ContentType {
    fn from(content_type: &str) -> Self {
        if content_type.starts_with("application") && content_type.contains("json") {
            return Self::Json;
        } else if content_type.starts_with("text/plain") {
            return Self::Text;
        } else {
            return Self::Unsupported(content_type.to_string());
        }
    }
}

pub mod agent_documents_api;
pub mod approvals_api;
pub mod custom_fields_api;
pub mod deals_api;
pub mod default_api;
pub mod document_pdf_settings_api;
pub mod erp_masters_api;
pub mod expenses_api;
pub mod golf_course_api;
pub mod golf_course_extension_api;
pub mod hrm_api;
pub mod inventory_api;
pub mod invoice_schedules_api;
pub mod invoices_api;
pub mod membership_api;
pub mod order_entry_points_api;
pub mod order_products_api;
pub mod orders_api;
pub mod payment_links_api;
pub mod public_invoices_api;
pub mod public_membership_api;
pub mod public_ordering_api;
pub mod public_sales_contract_signing_api;
pub mod public_storefront_api;
pub mod purchase_orders_api;
pub mod quotations_api;
pub mod reservations_api;
pub mod returns_api;
pub mod saa_s_subscriptions_api;
pub mod sales_contract_signing_api;
pub mod store_kit_api;
pub mod storefront_profile_api;
pub mod tachyon_field_api_keys_api;
pub mod tachyon_field_billing_accounts_api;
pub mod tachyon_field_bridge_api;
pub mod tachyon_field_bridge_export_api;
pub mod tachyon_field_crm_clients_api;
pub mod tachyon_field_crm_customers_api;
pub mod tachyon_field_iam_api;
pub mod tachyon_field_identity_api;
pub mod tachyon_field_orders_api;
pub mod tachyon_field_reports_api;
pub mod tachyon_field_sales_activities_api;
pub mod tachyon_field_sales_forecast_api;
pub mod tachyon_field_sales_tasks_api;
pub mod tachyon_field_stripe_connect_api;
pub mod vendors_api;

pub mod configuration;
