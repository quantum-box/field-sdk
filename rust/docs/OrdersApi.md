# \OrdersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convert_order_to_invoice**](OrdersApi.md#convert_order_to_invoice) | **POST** /v1/erp/orders/{id}/convert-to-invoice | 
[**create_order**](OrdersApi.md#create_order) | **POST** /v1/erp/orders | 
[**get_order**](OrdersApi.md#get_order) | **GET** /v1/erp/orders/{id} | 
[**list_orders**](OrdersApi.md#list_orders) | **GET** /v1/erp/orders | 
[**update_order**](OrdersApi.md#update_order) | **PATCH** /v1/erp/orders/{id} | 



## convert_order_to_invoice

> models::ConvertOrderToInvoiceResponse convert_order_to_invoice(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**models::ConvertOrderToInvoiceResponse**](ConvertOrderToInvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_order

> models::CrateOrderApiOrderResponse create_order(create_order_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_order_request** | [**CreateOrderRequest**](CreateOrderRequest.md) |  | [required] |

### Return type

[**models::CrateOrderApiOrderResponse**](crate.order_api.OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_order

> models::CrateOrderApiOrderResponse get_order(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**models::CrateOrderApiOrderResponse**](crate.order_api.OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_orders

> models::OrderListResponse list_orders(status, client_id, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> |  |  |
**client_id** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::OrderListResponse**](OrderListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_order

> models::CrateOrderApiOrderResponse update_order(id, update_order_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_order_request** | [**UpdateOrderRequest**](UpdateOrderRequest.md) |  | [required] |

### Return type

[**models::CrateOrderApiOrderResponse**](crate.order_api.OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

