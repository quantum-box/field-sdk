# \SalesContractSigningApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_signing_request**](SalesContractSigningApi.md#create_signing_request) | **POST** /v1/erp/sales-contracts/{contract_id}/signing-requests | 
[**download_signing_artifact**](SalesContractSigningApi.md#download_signing_artifact) | **GET** /v1/erp/sales-contract-signing-requests/{request_id}/artifacts/{kind}/download | 
[**get_signing_request**](SalesContractSigningApi.md#get_signing_request) | **GET** /v1/erp/sales-contract-signing-requests/{request_id} | 
[**list_signing_requests**](SalesContractSigningApi.md#list_signing_requests) | **GET** /v1/erp/sales-contracts/{contract_id}/signing-requests | 
[**reissue_signing_capability**](SalesContractSigningApi.md#reissue_signing_capability) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/reissue | 
[**retry_signing_finalization**](SalesContractSigningApi.md#retry_signing_finalization) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/retry-finalization | 
[**revoke_signing_request**](SalesContractSigningApi.md#revoke_signing_request) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/revoke | 
[**send_signing_request**](SalesContractSigningApi.md#send_signing_request) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/send | 



## create_signing_request

> models::SigningRequestDetailResponse create_signing_request(contract_id, idempotency_key, create_signing_request_input)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**contract_id** | **String** | Sales contract ID | [required] |
**idempotency_key** | **String** | Unique key for idempotent request creation | [required] |
**create_signing_request_input** | [**CreateSigningRequestInput**](CreateSigningRequestInput.md) |  | [required] |

### Return type

[**models::SigningRequestDetailResponse**](SigningRequestDetailResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## download_signing_artifact

> models::ArtifactDownloadResponse download_signing_artifact(request_id, kind)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**request_id** | **String** | Signing request ID | [required] |
**kind** | **String** | Artifact kind | [required] |

### Return type

[**models::ArtifactDownloadResponse**](ArtifactDownloadResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_signing_request

> models::SigningRequestDetailResponse get_signing_request(request_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**request_id** | **String** | Signing request ID | [required] |

### Return type

[**models::SigningRequestDetailResponse**](SigningRequestDetailResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_signing_requests

> models::SigningRequestListResponse list_signing_requests(contract_id, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**contract_id** | **String** | Sales contract ID | [required] |
**limit** | Option<**i32**> | Maximum number of results, from 1 to 100 |  |
**offset** | Option<**i32**> | Number of results to skip |  |

### Return type

[**models::SigningRequestListResponse**](SigningRequestListResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## reissue_signing_capability

> models::SendSigningRequestResponse reissue_signing_capability(request_id, origin)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**request_id** | **String** | Signing request ID | [required] |
**origin** | Option<**String**> | Required when ENVIRONMENT=preview. Must be the canonical HTTPS preview origin; ignored for fixed production and local signing URLs. |  |

### Return type

[**models::SendSigningRequestResponse**](SendSigningRequestResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## retry_signing_finalization

> models::SigningRequestDetailResponse retry_signing_finalization(request_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**request_id** | **String** | Signing request ID | [required] |

### Return type

[**models::SigningRequestDetailResponse**](SigningRequestDetailResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## revoke_signing_request

> models::SigningRequestDetailResponse revoke_signing_request(request_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**request_id** | **String** | Signing request ID | [required] |

### Return type

[**models::SigningRequestDetailResponse**](SigningRequestDetailResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_signing_request

> models::SendSigningRequestResponse send_signing_request(request_id, origin)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**request_id** | **String** | Signing request ID | [required] |
**origin** | Option<**String**> | Required when ENVIRONMENT=preview. Must be the canonical HTTPS preview origin; ignored for fixed production and local signing URLs. |  |

### Return type

[**models::SendSigningRequestResponse**](SendSigningRequestResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

