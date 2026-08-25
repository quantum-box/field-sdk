# RegisterMembershipRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | Option<**String**> | store / web / kiosk (default store) | [optional]
**consents** | Option<[**Vec<models::RegistrationConsentRequest>**](RegistrationConsentRequest.md)> |  | [optional]
**credentials** | Option<[**Vec<models::RegistrationCredentialRequest>**](RegistrationCredentialRequest.md)> |  | [optional]
**customer** | Option<[**models::RegistrationCustomerRequest**](RegistrationCustomerRequest.md)> | New customer to create. Mutually exclusive with `customerId`. | [optional]
**customer_id** | Option<**String**> | Existing customer to register. Mutually exclusive with `customer`. | [optional]
**plan_id** | Option<**String**> |  | [optional]
**subjects** | Option<[**Vec<models::RegistrationSubjectRequest>**](RegistrationSubjectRequest.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


