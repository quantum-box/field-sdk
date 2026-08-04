# \PurchaseOrdersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_purchase_order**](PurchaseOrdersApi.md#create_purchase_order) | **POST** /v1/erp/purchase-orders | 
[**get_purchase_order**](PurchaseOrdersApi.md#get_purchase_order) | **GET** /v1/erp/purchase-orders/{id} | 
[**list_purchase_orders**](PurchaseOrdersApi.md#list_purchase_orders) | **GET** /v1/erp/purchase-orders | 
[**update_purchase_order**](PurchaseOrdersApi.md#update_purchase_order) | **PATCH** /v1/erp/purchase-orders/{id} | 



## create_purchase_order

> models::PurchaseOrderResponse create_purchase_order(create_purchase_order_request, idempotency_key)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_purchase_order_request** | [**CreatePurchaseOrderRequest**](CreatePurchaseOrderRequest.md) |  | [required] |
**idempotency_key** | Option<**String**> | Optional tenant-scoped idempotency key. When omitted the request is a plain (non-idempotent) create. When supplied, a retry with the same key and identical payload returns the same purchase order; the same key with a different payload is rejected with 409. |  |

### Return type

[**models::PurchaseOrderResponse**](PurchaseOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_purchase_order

> models::PurchaseOrderResponse get_purchase_order(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**models::PurchaseOrderResponse**](PurchaseOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_purchase_orders

> models::PurchaseOrderListResponse list_purchase_orders(status, vendor_id, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> |  |  |
**vendor_id** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::PurchaseOrderListResponse**](PurchaseOrderListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_purchase_order

> models::PurchaseOrderResponse update_purchase_order(id, update_purchase_order_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_purchase_order_request** | [**UpdatePurchaseOrderRequest**](UpdatePurchaseOrderRequest.md) |  | [required] |

### Return type

[**models::PurchaseOrderResponse**](PurchaseOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

