# PurchaseOrdersApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPurchaseOrder**](PurchaseOrdersApi.md#createpurchaseorderoperation) | **POST** /v1/erp/purchase-orders |  |
| [**getPurchaseOrder**](PurchaseOrdersApi.md#getpurchaseorder) | **GET** /v1/erp/purchase-orders/{id} |  |
| [**listPurchaseOrders**](PurchaseOrdersApi.md#listpurchaseorders) | **GET** /v1/erp/purchase-orders |  |
| [**updatePurchaseOrder**](PurchaseOrdersApi.md#updatepurchaseorderoperation) | **PATCH** /v1/erp/purchase-orders/{id} |  |



## createPurchaseOrder

> PurchaseOrderResponse createPurchaseOrder(createPurchaseOrderRequest, idempotencyKey)



### Example

```ts
import {
  Configuration,
  PurchaseOrdersApi,
} from '@tachyon-sdk/field';
import type { CreatePurchaseOrderOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PurchaseOrdersApi(config);

  const body = {
    // CreatePurchaseOrderRequest
    createPurchaseOrderRequest: ...,
    // string | Optional tenant-scoped idempotency key. When omitted the request is a plain (non-idempotent) create. When supplied, a retry with the same key and identical payload returns the same purchase order; the same key with a different payload is rejected with 409. (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CreatePurchaseOrderOperationRequest;

  try {
    const data = await api.createPurchaseOrder(body);
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
| **createPurchaseOrderRequest** | [CreatePurchaseOrderRequest](CreatePurchaseOrderRequest.md) |  | |
| **idempotencyKey** | `string` | Optional tenant-scoped idempotency key. When omitted the request is a plain (non-idempotent) create. When supplied, a retry with the same key and identical payload returns the same purchase order; the same key with a different payload is rejected with 409. | [Optional] [Defaults to `undefined`] |

### Return type

[**PurchaseOrderResponse**](PurchaseOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **400** | status was supplied as anything other than Draft: purchase orders are created as drafts and advance through PATCH or POST /api/approvals |  -  |
| **409** | Idempotency-Key reused with a different payload, or purchase_order_number already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPurchaseOrder

> PurchaseOrderResponse getPurchaseOrder(id)



### Example

```ts
import {
  Configuration,
  PurchaseOrdersApi,
} from '@tachyon-sdk/field';
import type { GetPurchaseOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PurchaseOrdersApi(config);

  const body = {
    // string | Purchase order ID
    id: id_example,
  } satisfies GetPurchaseOrderRequest;

  try {
    const data = await api.getPurchaseOrder(body);
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
| **id** | `string` | Purchase order ID | [Defaults to `undefined`] |

### Return type

[**PurchaseOrderResponse**](PurchaseOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPurchaseOrders

> PurchaseOrderListResponse listPurchaseOrders(status, vendorId, limit, offset)



### Example

```ts
import {
  Configuration,
  PurchaseOrdersApi,
} from '@tachyon-sdk/field';
import type { ListPurchaseOrdersRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PurchaseOrdersApi(config);

  const body = {
    // string (optional)
    status: status_example,
    // string (optional)
    vendorId: vendorId_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListPurchaseOrdersRequest;

  try {
    const data = await api.listPurchaseOrders(body);
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
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **vendorId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PurchaseOrderListResponse**](PurchaseOrderListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePurchaseOrder

> PurchaseOrderResponse updatePurchaseOrder(id, updatePurchaseOrderRequest)



### Example

```ts
import {
  Configuration,
  PurchaseOrdersApi,
} from '@tachyon-sdk/field';
import type { UpdatePurchaseOrderOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PurchaseOrdersApi(config);

  const body = {
    // string | Purchase order ID
    id: id_example,
    // UpdatePurchaseOrderRequest
    updatePurchaseOrderRequest: ...,
  } satisfies UpdatePurchaseOrderOperationRequest;

  try {
    const data = await api.updatePurchaseOrder(body);
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
| **id** | `string` | Purchase order ID | [Defaults to `undefined`] |
| **updatePurchaseOrderRequest** | [UpdatePurchaseOrderRequest](UpdatePurchaseOrderRequest.md) |  | |

### Return type

[**PurchaseOrderResponse**](PurchaseOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **409** | The requested status is owned by the approval workflow (use POST /api/approvals), is not a legal transition from the order\&#39;s current status, or the order changed concurrently |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

