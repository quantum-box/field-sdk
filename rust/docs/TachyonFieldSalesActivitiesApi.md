# \TachyonFieldSalesActivitiesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_activity**](TachyonFieldSalesActivitiesApi.md#create_activity) | **POST** /v1/erp/sales-activities | 
[**delete_activity**](TachyonFieldSalesActivitiesApi.md#delete_activity) | **DELETE** /v1/erp/sales-activities/{id} | 
[**list_activities**](TachyonFieldSalesActivitiesApi.md#list_activities) | **GET** /v1/erp/sales-activities | 



## create_activity

> models::ActivityResponse create_activity(create_activity_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_activity_request** | [**CreateActivityRequest**](CreateActivityRequest.md) |  | [required] |

### Return type

[**models::ActivityResponse**](ActivityResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_activity

> delete_activity(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Sales activity ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_activities

> models::ActivityListResponse list_activities(client_id, deal_id, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**client_id** | Option<**String**> | Filter by client ID. |  |
**deal_id** | Option<**String**> | Filter by deal ID. |  |
**limit** | Option<**i32**> | Max number of results (default 50, capped at 200). |  |
**offset** | Option<**i32**> | Pagination offset (default 0). |  |

### Return type

[**models::ActivityListResponse**](ActivityListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

