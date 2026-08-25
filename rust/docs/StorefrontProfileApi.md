# \StorefrontProfileApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_storefront_profile**](StorefrontProfileApi.md#get_storefront_profile) | **GET** /v1/field/storefront-profile | 
[**save_storefront_profile**](StorefrontProfileApi.md#save_storefront_profile) | **PUT** /v1/field/storefront-profile | 



## get_storefront_profile

> models::StorefrontProfileResponse get_storefront_profile()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::StorefrontProfileResponse**](StorefrontProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## save_storefront_profile

> models::StorefrontProfileResponse save_storefront_profile(save_storefront_profile_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_storefront_profile_request** | [**SaveStorefrontProfileRequest**](SaveStorefrontProfileRequest.md) |  | [required] |

### Return type

[**models::StorefrontProfileResponse**](StorefrontProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

