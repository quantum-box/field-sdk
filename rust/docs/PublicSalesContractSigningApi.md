# \PublicSalesContractSigningApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete_public_signing_session**](PublicSalesContractSigningApi.md#complete_public_signing_session) | **POST** /v1/public/sales-contract-signing/session/complete | 
[**get_public_signing_session**](PublicSalesContractSigningApi.md#get_public_signing_session) | **GET** /v1/public/sales-contract-signing/session | 



## complete_public_signing_session

> complete_public_signing_session(complete_public_signing_input)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**complete_public_signing_input** | [**CompletePublicSigningInput**](CompletePublicSigningInput.md) |  | [required] |

### Return type

 (empty response body)

### Authorization

[signingCapability](../README.md#signingCapability)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_public_signing_session

> models::PublicSigningSessionResponse get_public_signing_session()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::PublicSigningSessionResponse**](PublicSigningSessionResponse.md)

### Authorization

[signingCapability](../README.md#signingCapability)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

