# \ReturnsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize_return_request**](ReturnsApi.md#authorize_return_request) | **POST** /v1/erp/return-requests/{id}/authorize | 
[**cancel_return_request**](ReturnsApi.md#cancel_return_request) | **POST** /v1/erp/return-requests/{id}/cancel | 
[**complete_return_request**](ReturnsApi.md#complete_return_request) | **POST** /v1/erp/return-requests/{id}/complete | 
[**create_return_request**](ReturnsApi.md#create_return_request) | **POST** /v1/erp/return-requests | 
[**get_return_request**](ReturnsApi.md#get_return_request) | **GET** /v1/erp/return-requests/{id} | 
[**list_return_requests**](ReturnsApi.md#list_return_requests) | **GET** /v1/erp/return-requests | 
[**record_return_inspection_disposition**](ReturnsApi.md#record_return_inspection_disposition) | **POST** /v1/erp/return-requests/{id}/inspection-disposition | 
[**reject_return_request**](ReturnsApi.md#reject_return_request) | **POST** /v1/erp/return-requests/{id}/reject | 
[**start_return_inspection**](ReturnsApi.md#start_return_inspection) | **POST** /v1/erp/return-requests/{id}/start-inspection | 



## authorize_return_request

> models::ReturnRequestResponse authorize_return_request(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Return request id | [required] |

### Return type

[**models::ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## cancel_return_request

> models::ReturnRequestResponse cancel_return_request(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Return request id | [required] |

### Return type

[**models::ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## complete_return_request

> models::ReturnRequestResponse complete_return_request(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Return request id | [required] |

### Return type

[**models::ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_return_request

> models::ReturnRequestResponse create_return_request(create_return_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_return_request** | [**CreateReturnRequest**](CreateReturnRequest.md) |  | [required] |

### Return type

[**models::ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_return_request

> models::ReturnRequestResponse get_return_request(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Return request id | [required] |

### Return type

[**models::ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_return_requests

> models::ReturnRequestListResponse list_return_requests(status, order_ref_kind, order_ref_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> |  |  |
**order_ref_kind** | Option<**String**> |  |  |
**order_ref_id** | Option<**String**> |  |  |

### Return type

[**models::ReturnRequestListResponse**](ReturnRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## record_return_inspection_disposition

> models::ReturnRequestResponse record_return_inspection_disposition(id, inspection_disposition_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Return request id | [required] |
**inspection_disposition_request** | [**InspectionDispositionRequest**](InspectionDispositionRequest.md) |  | [required] |

### Return type

[**models::ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## reject_return_request

> models::ReturnRequestResponse reject_return_request(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Return request id | [required] |

### Return type

[**models::ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## start_return_inspection

> models::ReturnRequestResponse start_return_inspection(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Return request id | [required] |

### Return type

[**models::ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

