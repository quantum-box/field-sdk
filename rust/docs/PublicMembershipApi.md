# \PublicMembershipApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_public_membership_registration_form**](PublicMembershipApi.md#get_public_membership_registration_form) | **GET** /v1/public/membership/{tenant_id}/registration-form | 
[**register_public_membership**](PublicMembershipApi.md#register_public_membership) | **POST** /v1/public/membership/{tenant_id}/registrations | 



## get_public_membership_registration_form

> models::PublicMembershipRegistrationFormResponse get_public_membership_registration_form(tenant_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant accepting the pre-registration | [required] |

### Return type

[**models::PublicMembershipRegistrationFormResponse**](PublicMembershipRegistrationFormResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## register_public_membership

> models::PublicMembershipRegistrationResponse register_public_membership(tenant_id, public_membership_registration_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant accepting the pre-registration | [required] |
**public_membership_registration_request** | [**PublicMembershipRegistrationRequest**](PublicMembershipRegistrationRequest.md) |  | [required] |

### Return type

[**models::PublicMembershipRegistrationResponse**](PublicMembershipRegistrationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

