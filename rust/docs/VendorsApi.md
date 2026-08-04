# \VendorsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_vendor**](VendorsApi.md#create_vendor) | **POST** /v1/erp/vendors | 
[**get_vendor**](VendorsApi.md#get_vendor) | **GET** /v1/erp/vendors/{id} | 
[**list_vendors**](VendorsApi.md#list_vendors) | **GET** /v1/erp/vendors | 
[**update_vendor**](VendorsApi.md#update_vendor) | **PATCH** /v1/erp/vendors/{id} | 



## create_vendor

> models::VendorResponse create_vendor(create_vendor_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_vendor_request** | [**CreateVendorRequest**](CreateVendorRequest.md) |  | [required] |

### Return type

[**models::VendorResponse**](VendorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_vendor

> models::VendorResponse get_vendor(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**models::VendorResponse**](VendorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_vendors

> models::VendorListResponse list_vendors(status, search, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> |  |  |
**search** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::VendorListResponse**](VendorListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_vendor

> models::VendorResponse update_vendor(id, update_vendor_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_vendor_request** | [**UpdateVendorRequest**](UpdateVendorRequest.md) |  | [required] |

### Return type

[**models::VendorResponse**](VendorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

