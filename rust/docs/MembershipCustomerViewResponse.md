# MembershipCustomerViewResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_assignment** | Option<[**models::MembershipPlanAssignmentResponse**](MembershipPlanAssignmentResponse.md)> |  | [optional]
**active_plan** | Option<[**models::MembershipPlanResponse**](MembershipPlanResponse.md)> |  | [optional]
**consents** | [**Vec<models::CustomerConsentResponse>**](CustomerConsentResponse.md) |  | 
**credentials** | [**Vec<models::CustomerCredentialResponse>**](CustomerCredentialResponse.md) |  | 
**customer** | [**models::MembershipCustomerResponse**](MembershipCustomerResponse.md) |  | 
**sale** | Option<[**models::MembershipSaleResponse**](MembershipSaleResponse.md)> | The counter sale this registration produced, when a product was sold. | [optional]
**subjects** | [**Vec<models::CustomerSubjectResponse>**](CustomerSubjectResponse.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


