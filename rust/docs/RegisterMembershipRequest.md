# RegisterMembershipRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | Option<**String**> | store / web / kiosk (default store) | [optional]
**consent_evidence_record_id** | Option<**String**> | Immutable Evidence record for the application document used to record these consent answers. Validated in the tenant before customer writes. | [optional]
**consents** | Option<[**Vec<models::RegistrationConsentRequest>**](RegistrationConsentRequest.md)> |  | [optional]
**credentials** | Option<[**Vec<models::RegistrationCredentialRequest>**](RegistrationCredentialRequest.md)> |  | [optional]
**customer** | Option<[**models::RegistrationCustomerRequest**](RegistrationCustomerRequest.md)> | New customer to create. Mutually exclusive with `customerId`. | [optional]
**customer_custom_fields** | Option<**serde_json::Value**> | Trade-specific boxes for the customer, keyed by `custom_field_definitions.field_key` under the `consumer` entity type.  Accepted only alongside `customer`. Registering an existing customer carries no values: this endpoint would have to write the whole set, and a reception sheet that happens not to ask for a box would erase what that customer answered the last time it did. | [optional]
**customer_id** | Option<**String**> | Existing customer to register. Mutually exclusive with `customer`. | [optional]
**plan_id** | Option<**String**> | Class to join directly, without a sale. Kept so a client deployed before the product switch keeps working; mutually exclusive with `productId`. | [optional]
**product_id** | Option<**String**> | Product being sold at the counter. Its grant decides which class the customer joins and for how long. | [optional]
**subjects** | Option<[**Vec<models::RegistrationSubjectRequest>**](RegistrationSubjectRequest.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


