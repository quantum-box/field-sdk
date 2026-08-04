#![allow(unused_imports)]
#![allow(clippy::too_many_arguments)]

// Hand-maintained (see .openapi-generator-ignore): identical to the generator's
// output apart from the `field` module, which supplies the tenant headers the
// contract does not describe.

extern crate reqwest;
extern crate serde;
extern crate serde_json;
extern crate serde_repr;
extern crate url;

pub mod apis;
pub mod field;
pub mod models;
