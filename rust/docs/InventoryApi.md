# \InventoryApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_stock_outbound**](InventoryApi.md#create_stock_outbound) | **POST** /v1/field/inventory/outbounds | 
[**create_stock_transfer**](InventoryApi.md#create_stock_transfer) | **POST** /v1/field/inventory/stock-transfers | 
[**create_store**](InventoryApi.md#create_store) | **POST** /v1/field/inventory/stores | 
[**create_warehouse**](InventoryApi.md#create_warehouse) | **POST** /v1/field/inventory/warehouses | 
[**delete_store**](InventoryApi.md#delete_store) | **DELETE** /v1/field/inventory/stores/{id} | 
[**delete_warehouse**](InventoryApi.md#delete_warehouse) | **DELETE** /v1/field/inventory/warehouses/{id} | 
[**get_store**](InventoryApi.md#get_store) | **GET** /v1/field/inventory/stores/{id} | 
[**get_warehouse**](InventoryApi.md#get_warehouse) | **GET** /v1/field/inventory/warehouses/{id} | 
[**list_inventory_locations**](InventoryApi.md#list_inventory_locations) | **GET** /v1/field/inventory/locations | 
[**list_inventory_valuations**](InventoryApi.md#list_inventory_valuations) | **GET** /v1/field/inventory/valuations | 
[**list_low_stock_alerts**](InventoryApi.md#list_low_stock_alerts) | **GET** /v1/field/inventory/low-stock-alerts | 
[**list_stock_levels**](InventoryApi.md#list_stock_levels) | **GET** /v1/field/inventory/stock-levels | 
[**list_stock_lot_balances**](InventoryApi.md#list_stock_lot_balances) | **GET** /v1/field/inventory/lot-balances | 
[**list_stock_movements**](InventoryApi.md#list_stock_movements) | **GET** /v1/field/inventory/stock-movements | 
[**list_stock_transfers**](InventoryApi.md#list_stock_transfers) | **GET** /v1/field/inventory/stock-transfers | 
[**list_stores**](InventoryApi.md#list_stores) | **GET** /v1/field/inventory/stores | 
[**list_warehouses**](InventoryApi.md#list_warehouses) | **GET** /v1/field/inventory/warehouses | 
[**start_stock_tracking**](InventoryApi.md#start_stock_tracking) | **POST** /v1/field/inventory/stock-items | `POST /v1/field/inventory/stock-items`
[**update_low_stock_decision**](InventoryApi.md#update_low_stock_decision) | **PATCH** /v1/field/inventory/low-stock-alerts/{stock_item_id}/decision | 
[**update_store**](InventoryApi.md#update_store) | **PUT** /v1/field/inventory/stores/{id} | 
[**update_warehouse**](InventoryApi.md#update_warehouse) | **PUT** /v1/field/inventory/warehouses/{id} | 
[**upsert_replenishment_policy**](InventoryApi.md#upsert_replenishment_policy) | **PUT** /v1/field/inventory/replenishment-policies | 



## create_stock_outbound

> models::CreateStockOutboundResponse create_stock_outbound(create_stock_outbound_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_stock_outbound_request** | [**CreateStockOutboundRequest**](CreateStockOutboundRequest.md) |  | [required] |

### Return type

[**models::CreateStockOutboundResponse**](CreateStockOutboundResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_stock_transfer

> models::StockTransferResponse create_stock_transfer(create_stock_transfer_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_stock_transfer_request** | [**CreateStockTransferRequest**](CreateStockTransferRequest.md) |  | [required] |

### Return type

[**models::StockTransferResponse**](StockTransferResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_store

> models::StoreResponse create_store(save_store_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_store_request** | [**SaveStoreRequest**](SaveStoreRequest.md) |  | [required] |

### Return type

[**models::StoreResponse**](StoreResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_warehouse

> models::WarehouseResponse create_warehouse(save_warehouse_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_warehouse_request** | [**SaveWarehouseRequest**](SaveWarehouseRequest.md) |  | [required] |

### Return type

[**models::WarehouseResponse**](WarehouseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_store

> delete_store(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Store ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_warehouse

> delete_warehouse(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Warehouse ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_store

> models::StoreResponse get_store(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Store ID | [required] |

### Return type

[**models::StoreResponse**](StoreResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_warehouse

> models::WarehouseResponse get_warehouse(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Warehouse ID | [required] |

### Return type

[**models::WarehouseResponse**](WarehouseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_inventory_locations

> models::InventoryLocationListResponse list_inventory_locations()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::InventoryLocationListResponse**](InventoryLocationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_inventory_valuations

> models::InventoryValuationListResponse list_inventory_valuations(warehouse_id, sku, period_start)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**warehouse_id** | Option<**String**> |  |  |
**sku** | Option<**String**> |  |  |
**period_start** | Option<**String**> |  |  |

### Return type

[**models::InventoryValuationListResponse**](InventoryValuationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_low_stock_alerts

> models::LowStockAlertListResponse list_low_stock_alerts(warehouse_id, sku, status)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**warehouse_id** | Option<**String**> |  |  |
**sku** | Option<**String**> |  |  |
**status** | Option<**String**> |  |  |

### Return type

[**models::LowStockAlertListResponse**](LowStockAlertListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_stock_levels

> models::StockLevelListResponse list_stock_levels(warehouse_id, location_id, sku, search, q, stock_level_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**warehouse_id** | Option<**String**> |  |  |
**location_id** | Option<**String**> |  |  |
**sku** | Option<**String**> |  |  |
**search** | Option<**String**> |  |  |
**q** | Option<**String**> |  |  |
**stock_level_id** | Option<**String**> |  |  |

### Return type

[**models::StockLevelListResponse**](StockLevelListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_stock_lot_balances

> models::StockLotBalanceListResponse list_stock_lot_balances(warehouse_id, sku)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**warehouse_id** | Option<**String**> |  |  |
**sku** | Option<**String**> |  |  |

### Return type

[**models::StockLotBalanceListResponse**](StockLotBalanceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_stock_movements

> models::StockMovementListResponse list_stock_movements(stock_item_id, warehouse_id, sku, source_event, limit)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**stock_item_id** | Option<**String**> |  |  |
**warehouse_id** | Option<**String**> |  |  |
**sku** | Option<**String**> |  |  |
**source_event** | Option<**String**> |  |  |
**limit** | Option<**i64**> |  |  |

### Return type

[**models::StockMovementListResponse**](StockMovementListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_stock_transfers

> models::StockTransferListResponse list_stock_transfers()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::StockTransferListResponse**](StockTransferListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_stores

> models::StoreListResponse list_stores()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::StoreListResponse**](StoreListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_warehouses

> models::WarehouseListResponse list_warehouses(search, q, name)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**search** | Option<**String**> |  |  |
**q** | Option<**String**> |  |  |
**name** | Option<**String**> |  |  |

### Return type

[**models::WarehouseListResponse**](WarehouseListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## start_stock_tracking

> models::StockTrackingResponse start_stock_tracking(start_stock_tracking_request)
`POST /v1/field/inventory/stock-items`

Idempotent: repeating it returns the existing item and its **current** balance rather than resetting anything, so a client may retry freely.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**start_stock_tracking_request** | [**StartStockTrackingRequest**](StartStockTrackingRequest.md) |  | [required] |

### Return type

[**models::StockTrackingResponse**](StockTrackingResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_low_stock_decision

> models::LowStockAlertResponse update_low_stock_decision(stock_item_id, update_low_stock_decision_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**stock_item_id** | **String** | Stock item ID | [required] |
**update_low_stock_decision_request** | [**UpdateLowStockDecisionRequest**](UpdateLowStockDecisionRequest.md) |  | [required] |

### Return type

[**models::LowStockAlertResponse**](LowStockAlertResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_store

> models::StoreResponse update_store(id, save_store_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Store ID | [required] |
**save_store_request** | [**SaveStoreRequest**](SaveStoreRequest.md) |  | [required] |

### Return type

[**models::StoreResponse**](StoreResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_warehouse

> models::WarehouseResponse update_warehouse(id, save_warehouse_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Warehouse ID | [required] |
**save_warehouse_request** | [**SaveWarehouseRequest**](SaveWarehouseRequest.md) |  | [required] |

### Return type

[**models::WarehouseResponse**](WarehouseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## upsert_replenishment_policy

> models::ReplenishmentPolicyResponse upsert_replenishment_policy(upsert_replenishment_policy_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**upsert_replenishment_policy_request** | [**UpsertReplenishmentPolicyRequest**](UpsertReplenishmentPolicyRequest.md) |  | [required] |

### Return type

[**models::ReplenishmentPolicyResponse**](ReplenishmentPolicyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

