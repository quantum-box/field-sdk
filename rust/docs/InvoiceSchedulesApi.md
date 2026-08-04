# \InvoiceSchedulesApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_schedule**](InvoiceSchedulesApi.md#create_schedule) | **POST** /v1/erp/invoice-schedules | 
[**deactivate_schedule**](InvoiceSchedulesApi.md#deactivate_schedule) | **DELETE** /v1/erp/invoice-schedules/{id} | 
[**list_schedules**](InvoiceSchedulesApi.md#list_schedules) | **GET** /v1/erp/invoice-schedules | 
[**update_schedule**](InvoiceSchedulesApi.md#update_schedule) | **PUT** /v1/erp/invoice-schedules/{id} | 



## create_schedule

> models::ScheduleResponse create_schedule(create_schedule_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_schedule_request** | [**CreateScheduleRequest**](CreateScheduleRequest.md) |  | [required] |

### Return type

[**models::ScheduleResponse**](ScheduleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deactivate_schedule

> deactivate_schedule(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Invoice schedule ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_schedules

> models::ScheduleListResponse list_schedules()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ScheduleListResponse**](ScheduleListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_schedule

> models::ScheduleResponse update_schedule(id, update_schedule_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Invoice schedule ID | [required] |
**update_schedule_request** | [**UpdateScheduleRequest**](UpdateScheduleRequest.md) |  | [required] |

### Return type

[**models::ScheduleResponse**](ScheduleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

