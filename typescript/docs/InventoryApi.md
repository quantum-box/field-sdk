# InventoryApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createStockOutbound**](InventoryApi.md#createstockoutboundoperation) | **POST** /v1/field/inventory/outbounds |  |
| [**createStockTransfer**](InventoryApi.md#createstocktransferoperation) | **POST** /v1/field/inventory/stock-transfers |  |
| [**createStore**](InventoryApi.md#createstore) | **POST** /v1/field/inventory/stores |  |
| [**createWarehouse**](InventoryApi.md#createwarehouse) | **POST** /v1/field/inventory/warehouses |  |
| [**deleteStore**](InventoryApi.md#deletestore) | **DELETE** /v1/field/inventory/stores/{id} |  |
| [**deleteWarehouse**](InventoryApi.md#deletewarehouse) | **DELETE** /v1/field/inventory/warehouses/{id} |  |
| [**getStore**](InventoryApi.md#getstore) | **GET** /v1/field/inventory/stores/{id} |  |
| [**getWarehouse**](InventoryApi.md#getwarehouse) | **GET** /v1/field/inventory/warehouses/{id} |  |
| [**listInventoryLocations**](InventoryApi.md#listinventorylocations) | **GET** /v1/field/inventory/locations |  |
| [**listInventoryValuations**](InventoryApi.md#listinventoryvaluations) | **GET** /v1/field/inventory/valuations |  |
| [**listLowStockAlerts**](InventoryApi.md#listlowstockalerts) | **GET** /v1/field/inventory/low-stock-alerts |  |
| [**listStockLevels**](InventoryApi.md#liststocklevels) | **GET** /v1/field/inventory/stock-levels |  |
| [**listStockLotBalances**](InventoryApi.md#liststocklotbalances) | **GET** /v1/field/inventory/lot-balances |  |
| [**listStockMovements**](InventoryApi.md#liststockmovements) | **GET** /v1/field/inventory/stock-movements |  |
| [**listStockTransfers**](InventoryApi.md#liststocktransfers) | **GET** /v1/field/inventory/stock-transfers |  |
| [**listStores**](InventoryApi.md#liststores) | **GET** /v1/field/inventory/stores |  |
| [**listWarehouses**](InventoryApi.md#listwarehouses) | **GET** /v1/field/inventory/warehouses |  |
| [**startStockTracking**](InventoryApi.md#startstocktrackingoperation) | **POST** /v1/field/inventory/stock-items | &#x60;POST /v1/field/inventory/stock-items&#x60; |
| [**updateLowStockDecision**](InventoryApi.md#updatelowstockdecisionoperation) | **PATCH** /v1/field/inventory/low-stock-alerts/{stock_item_id}/decision |  |
| [**updateStore**](InventoryApi.md#updatestore) | **PUT** /v1/field/inventory/stores/{id} |  |
| [**updateWarehouse**](InventoryApi.md#updatewarehouse) | **PUT** /v1/field/inventory/warehouses/{id} |  |
| [**upsertReplenishmentPolicy**](InventoryApi.md#upsertreplenishmentpolicyoperation) | **PUT** /v1/field/inventory/replenishment-policies |  |



## createStockOutbound

> CreateStockOutboundResponse createStockOutbound(createStockOutboundRequest)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { CreateStockOutboundOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // CreateStockOutboundRequest
    createStockOutboundRequest: ...,
  } satisfies CreateStockOutboundOperationRequest;

  try {
    const data = await api.createStockOutbound(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createStockOutboundRequest** | [CreateStockOutboundRequest](CreateStockOutboundRequest.md) |  | |

### Return type

[**CreateStockOutboundResponse**](CreateStockOutboundResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stock outbound created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createStockTransfer

> StockTransferResponse createStockTransfer(createStockTransferRequest)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { CreateStockTransferOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // CreateStockTransferRequest
    createStockTransferRequest: ...,
  } satisfies CreateStockTransferOperationRequest;

  try {
    const data = await api.createStockTransfer(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createStockTransferRequest** | [CreateStockTransferRequest](CreateStockTransferRequest.md) |  | |

### Return type

[**StockTransferResponse**](StockTransferResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Stock transfer created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createStore

> StoreResponse createStore(saveStoreRequest)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { CreateStoreRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // SaveStoreRequest
    saveStoreRequest: ...,
  } satisfies CreateStoreRequest;

  try {
    const data = await api.createStore(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **saveStoreRequest** | [SaveStoreRequest](SaveStoreRequest.md) |  | |

### Return type

[**StoreResponse**](StoreResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Store created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createWarehouse

> WarehouseResponse createWarehouse(saveWarehouseRequest)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { CreateWarehouseRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // SaveWarehouseRequest
    saveWarehouseRequest: ...,
  } satisfies CreateWarehouseRequest;

  try {
    const data = await api.createWarehouse(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **saveWarehouseRequest** | [SaveWarehouseRequest](SaveWarehouseRequest.md) |  | |

### Return type

[**WarehouseResponse**](WarehouseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Warehouse created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteStore

> deleteStore(id)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { DeleteStoreRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string | Store ID
    id: id_example,
  } satisfies DeleteStoreRequest;

  try {
    const data = await api.deleteStore(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Store ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Store deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWarehouse

> deleteWarehouse(id)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { DeleteWarehouseRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string | Warehouse ID
    id: id_example,
  } satisfies DeleteWarehouseRequest;

  try {
    const data = await api.deleteWarehouse(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Warehouse ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Warehouse deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStore

> StoreResponse getStore(id)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { GetStoreRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string | Store ID
    id: id_example,
  } satisfies GetStoreRequest;

  try {
    const data = await api.getStore(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Store ID | [Defaults to `undefined`] |

### Return type

[**StoreResponse**](StoreResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Store detail |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWarehouse

> WarehouseResponse getWarehouse(id)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { GetWarehouseRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string | Warehouse ID
    id: id_example,
  } satisfies GetWarehouseRequest;

  try {
    const data = await api.getWarehouse(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Warehouse ID | [Defaults to `undefined`] |

### Return type

[**WarehouseResponse**](WarehouseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Warehouse detail |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listInventoryLocations

> InventoryLocationListResponse listInventoryLocations()



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { ListInventoryLocationsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  try {
    const data = await api.listInventoryLocations();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InventoryLocationListResponse**](InventoryLocationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Inventory location list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listInventoryValuations

> InventoryValuationListResponse listInventoryValuations(warehouseId, sku, periodStart)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { ListInventoryValuationsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string (optional)
    warehouseId: warehouseId_example,
    // string (optional)
    sku: sku_example,
    // string (optional)
    periodStart: periodStart_example,
  } satisfies ListInventoryValuationsRequest;

  try {
    const data = await api.listInventoryValuations(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sku** | `string` |  | [Optional] [Defaults to `undefined`] |
| **periodStart** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**InventoryValuationListResponse**](InventoryValuationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Inventory valuation list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLowStockAlerts

> LowStockAlertListResponse listLowStockAlerts(warehouseId, sku, status)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { ListLowStockAlertsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string (optional)
    warehouseId: warehouseId_example,
    // string (optional)
    sku: sku_example,
    // string (optional)
    status: status_example,
  } satisfies ListLowStockAlertsRequest;

  try {
    const data = await api.listLowStockAlerts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sku** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**LowStockAlertListResponse**](LowStockAlertListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Low stock alert list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStockLevels

> StockLevelListResponse listStockLevels(warehouseId, locationId, sku, search, q, stockLevelId)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { ListStockLevelsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string (optional)
    warehouseId: warehouseId_example,
    // string (optional)
    locationId: locationId_example,
    // string (optional)
    sku: sku_example,
    // string (optional)
    search: search_example,
    // string (optional)
    q: q_example,
    // string (optional)
    stockLevelId: stockLevelId_example,
  } satisfies ListStockLevelsRequest;

  try {
    const data = await api.listStockLevels(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **locationId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sku** | `string` |  | [Optional] [Defaults to `undefined`] |
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **stockLevelId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**StockLevelListResponse**](StockLevelListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stock level list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStockLotBalances

> StockLotBalanceListResponse listStockLotBalances(warehouseId, sku)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { ListStockLotBalancesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string (optional)
    warehouseId: warehouseId_example,
    // string (optional)
    sku: sku_example,
  } satisfies ListStockLotBalancesRequest;

  try {
    const data = await api.listStockLotBalances(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sku** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**StockLotBalanceListResponse**](StockLotBalanceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stock lot balance list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStockMovements

> StockMovementListResponse listStockMovements(stockItemId, warehouseId, sku, sourceEvent, limit)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { ListStockMovementsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string (optional)
    stockItemId: stockItemId_example,
    // string (optional)
    warehouseId: warehouseId_example,
    // string (optional)
    sku: sku_example,
    // string (optional)
    sourceEvent: sourceEvent_example,
    // number (optional)
    limit: 789,
  } satisfies ListStockMovementsRequest;

  try {
    const data = await api.listStockMovements(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **stockItemId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **warehouseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sku** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sourceEvent** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**StockMovementListResponse**](StockMovementListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stock movement list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStockTransfers

> StockTransferListResponse listStockTransfers()



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { ListStockTransfersRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  try {
    const data = await api.listStockTransfers();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**StockTransferListResponse**](StockTransferListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stock transfer list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStores

> StoreListResponse listStores()



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { ListStoresRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  try {
    const data = await api.listStores();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**StoreListResponse**](StoreListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Store list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWarehouses

> WarehouseListResponse listWarehouses(search, q, name)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { ListWarehousesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string (optional)
    search: search_example,
    // string (optional)
    q: q_example,
    // string (optional)
    name: name_example,
  } satisfies ListWarehousesRequest;

  try {
    const data = await api.listWarehouses(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **name** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**WarehouseListResponse**](WarehouseListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Warehouse list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startStockTracking

> StockTrackingResponse startStockTracking(startStockTrackingRequest)

&#x60;POST /v1/field/inventory/stock-items&#x60;

Idempotent: repeating it returns the existing item and its **current** balance rather than resetting anything, so a client may retry freely.

### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { StartStockTrackingOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // StartStockTrackingRequest
    startStockTrackingRequest: ...,
  } satisfies StartStockTrackingOperationRequest;

  try {
    const data = await api.startStockTracking(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **startStockTrackingRequest** | [StartStockTrackingRequest](StartStockTrackingRequest.md) |  | |

### Return type

[**StockTrackingResponse**](StockTrackingResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stock tracking started (or already started) for this SKU/warehouse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateLowStockDecision

> LowStockAlertResponse updateLowStockDecision(stockItemId, updateLowStockDecisionRequest)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { UpdateLowStockDecisionOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string | Stock item ID
    stockItemId: stockItemId_example,
    // UpdateLowStockDecisionRequest
    updateLowStockDecisionRequest: ...,
  } satisfies UpdateLowStockDecisionOperationRequest;

  try {
    const data = await api.updateLowStockDecision(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **stockItemId** | `string` | Stock item ID | [Defaults to `undefined`] |
| **updateLowStockDecisionRequest** | [UpdateLowStockDecisionRequest](UpdateLowStockDecisionRequest.md) |  | |

### Return type

[**LowStockAlertResponse**](LowStockAlertResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Low stock decision updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStore

> StoreResponse updateStore(id, saveStoreRequest)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { UpdateStoreRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string | Store ID
    id: id_example,
    // SaveStoreRequest
    saveStoreRequest: ...,
  } satisfies UpdateStoreRequest;

  try {
    const data = await api.updateStore(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Store ID | [Defaults to `undefined`] |
| **saveStoreRequest** | [SaveStoreRequest](SaveStoreRequest.md) |  | |

### Return type

[**StoreResponse**](StoreResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Store updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWarehouse

> WarehouseResponse updateWarehouse(id, saveWarehouseRequest)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { UpdateWarehouseRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string | Warehouse ID
    id: id_example,
    // SaveWarehouseRequest
    saveWarehouseRequest: ...,
  } satisfies UpdateWarehouseRequest;

  try {
    const data = await api.updateWarehouse(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Warehouse ID | [Defaults to `undefined`] |
| **saveWarehouseRequest** | [SaveWarehouseRequest](SaveWarehouseRequest.md) |  | |

### Return type

[**WarehouseResponse**](WarehouseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Warehouse updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertReplenishmentPolicy

> ReplenishmentPolicyResponse upsertReplenishmentPolicy(upsertReplenishmentPolicyRequest)



### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@tachyon-sdk/field';
import type { UpsertReplenishmentPolicyOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // UpsertReplenishmentPolicyRequest
    upsertReplenishmentPolicyRequest: ...,
  } satisfies UpsertReplenishmentPolicyOperationRequest;

  try {
    const data = await api.upsertReplenishmentPolicy(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **upsertReplenishmentPolicyRequest** | [UpsertReplenishmentPolicyRequest](UpsertReplenishmentPolicyRequest.md) |  | |

### Return type

[**ReplenishmentPolicyResponse**](ReplenishmentPolicyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Replenishment policy upserted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

