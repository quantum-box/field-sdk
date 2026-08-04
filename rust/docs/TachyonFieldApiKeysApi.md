# \TachyonFieldApiKeysApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_api_key**](TachyonFieldApiKeysApi.md#create_api_key) | **POST** /v1/field/api-keys | 
[**delete_api_key**](TachyonFieldApiKeysApi.md#delete_api_key) | **DELETE** /v1/field/api-keys/{id} | 
[**get_api_key**](TachyonFieldApiKeysApi.md#get_api_key) | **GET** /v1/field/api-keys/{id} | 
[**list_api_keys**](TachyonFieldApiKeysApi.md#list_api_keys) | **GET** /v1/field/api-keys | 
[**revoke_api_key**](TachyonFieldApiKeysApi.md#revoke_api_key) | **POST** /v1/field/api-keys/{id}/revoke | 



## create_api_key

> models::CreateApiKeyResponse create_api_key(create_api_key_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_api_key_request** | [**CreateApiKeyRequest**](CreateApiKeyRequest.md) |  | [required] |

### Return type

[**models::CreateApiKeyResponse**](CreateApiKeyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_api_key

> models::DeletedResponse delete_api_key(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | API key ID | [required] |

### Return type

[**models::DeletedResponse**](DeletedResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_api_key

> models::ApiKeyResponse get_api_key(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | API key ID | [required] |

### Return type

[**models::ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_api_keys

> Vec<models::ApiKeyResponse> list_api_keys()


### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::ApiKeyResponse>**](ApiKeyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## revoke_api_key

> models::ApiKeyResponse revoke_api_key(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | API key ID | [required] |

### Return type

[**models::ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

