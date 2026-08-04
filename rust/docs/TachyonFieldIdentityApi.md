# \TachyonFieldIdentityApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_client_capabilities**](TachyonFieldIdentityApi.md#get_client_capabilities) | **GET** /v1/field/client-capabilities | Resolve tenant-scoped UI capabilities from the same policy actions enforced by the corresponding API handlers.
[**get_me**](TachyonFieldIdentityApi.md#get_me) | **GET** /v1/erp/me | Return the authenticated user's Tachyon tenant memberships annotated with one Field extension's enabled state.



## get_client_capabilities

> models::ClientCapabilitiesResponse get_client_capabilities()
Resolve tenant-scoped UI capabilities from the same policy actions enforced by the corresponding API handlers.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ClientCapabilitiesResponse**](ClientCapabilitiesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_me

> models::ProfileResponse get_me(extension_key)
Return the authenticated user's Tachyon tenant memberships annotated with one Field extension's enabled state.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**extension_key** | **String** | Extension key whose enabled state should be attached to every tenant. | [required] |

### Return type

[**models::ProfileResponse**](ProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

