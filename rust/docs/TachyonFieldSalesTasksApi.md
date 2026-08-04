# \TachyonFieldSalesTasksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_sales_task**](TachyonFieldSalesTasksApi.md#create_sales_task) | **POST** /v1/erp/sales-tasks | 
[**delete_sales_task**](TachyonFieldSalesTasksApi.md#delete_sales_task) | **DELETE** /v1/erp/sales-tasks/{id} | 
[**list_sales_tasks**](TachyonFieldSalesTasksApi.md#list_sales_tasks) | **GET** /v1/erp/sales-tasks | 
[**update_sales_task**](TachyonFieldSalesTasksApi.md#update_sales_task) | **PATCH** /v1/erp/sales-tasks/{id} | 



## create_sales_task

> models::SalesTaskResponse create_sales_task(create_sales_task_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_sales_task_request** | [**CreateSalesTaskRequest**](CreateSalesTaskRequest.md) |  | [required] |

### Return type

[**models::SalesTaskResponse**](SalesTaskResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_sales_task

> delete_sales_task(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Sales task ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_sales_tasks

> models::SalesTaskListResponse list_sales_tasks(client_id, deal_id, status, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**client_id** | Option<**String**> | Filter by client ID. |  |
**deal_id** | Option<**String**> | Filter by deal ID. |  |
**status** | Option<**String**> | Filter by task status (\"open\" or \"done\"). |  |
**limit** | Option<**i32**> | Max number of results (default 50, capped at 200). |  |
**offset** | Option<**i32**> | Pagination offset (default 0). |  |

### Return type

[**models::SalesTaskListResponse**](SalesTaskListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_sales_task

> models::SalesTaskResponse update_sales_task(id, update_sales_task_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Sales task ID | [required] |
**update_sales_task_request** | [**UpdateSalesTaskRequest**](UpdateSalesTaskRequest.md) |  | [required] |

### Return type

[**models::SalesTaskResponse**](SalesTaskResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

