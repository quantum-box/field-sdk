# OrderEntryPointsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrderEntryPoint**](OrderEntryPointsApi.md#createorderentrypointoperation) | **POST** /v1/field/order-entry-points | Provision a QR or kiosk and mint its public token. |
| [**disableOrderEntryPoint**](OrderEntryPointsApi.md#disableorderentrypoint) | **DELETE** /v1/field/order-entry-points/{id} | Retire an entry point. |
| [**getOrderEntryPoint**](OrderEntryPointsApi.md#getorderentrypoint) | **GET** /v1/field/order-entry-points/{id} | Read one entry point. The token is not part of the answer. |
| [**listOrderEntryPoints**](OrderEntryPointsApi.md#listorderentrypoints) | **GET** /v1/field/order-entry-points | List the tenant\&#39;s QR and kiosk entry points. |
| [**rotateOrderEntryPointToken**](OrderEntryPointsApi.md#rotateorderentrypointtoken) | **POST** /v1/field/order-entry-points/{id}/rotate-token | Reprint: mint a new public token and retire the old one at once. |
| [**updateOrderEntryPoint**](OrderEntryPointsApi.md#updateorderentrypointoperation) | **PATCH** /v1/field/order-entry-points/{id} | Edit an entry point\&#39;s display, seat, timing, or enabled state. |



## createOrderEntryPoint

> OrderEntryPointWithTokenResponse createOrderEntryPoint(createOrderEntryPointRequest)

Provision a QR or kiosk and mint its public token.

### Example

```ts
import {
  Configuration,
  OrderEntryPointsApi,
} from '@tachyon-sdk/field';
import type { CreateOrderEntryPointOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderEntryPointsApi(config);

  const body = {
    // CreateOrderEntryPointRequest
    createOrderEntryPointRequest: ...,
  } satisfies CreateOrderEntryPointOperationRequest;

  try {
    const data = await api.createOrderEntryPoint(body);
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
| **createOrderEntryPointRequest** | [CreateOrderEntryPointRequest](CreateOrderEntryPointRequest.md) |  | |

### Return type

[**OrderEntryPointWithTokenResponse**](OrderEntryPointWithTokenResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **400** | Unknown mode or out-of-range timing |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disableOrderEntryPoint

> disableOrderEntryPoint(id)

Retire an entry point.

The row survives so the orders attributed to it still resolve in reporting; what stops is the token\&#39;s ability to open a session.

### Example

```ts
import {
  Configuration,
  OrderEntryPointsApi,
} from '@tachyon-sdk/field';
import type { DisableOrderEntryPointRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderEntryPointsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DisableOrderEntryPointRequest;

  try {
    const data = await api.disableOrderEntryPoint(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Entry point retired |  -  |
| **404** | No such entry point in this tenant |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrderEntryPoint

> OrderEntryPointResponse getOrderEntryPoint(id)

Read one entry point. The token is not part of the answer.

### Example

```ts
import {
  Configuration,
  OrderEntryPointsApi,
} from '@tachyon-sdk/field';
import type { GetOrderEntryPointRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderEntryPointsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetOrderEntryPointRequest;

  try {
    const data = await api.getOrderEntryPoint(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrderEntryPointResponse**](OrderEntryPointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | No such entry point in this tenant |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOrderEntryPoints

> Array&lt;OrderEntryPointResponse&gt; listOrderEntryPoints()

List the tenant\&#39;s QR and kiosk entry points.

### Example

```ts
import {
  Configuration,
  OrderEntryPointsApi,
} from '@tachyon-sdk/field';
import type { ListOrderEntryPointsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderEntryPointsApi(config);

  try {
    const data = await api.listOrderEntryPoints();
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

[**Array&lt;OrderEntryPointResponse&gt;**](OrderEntryPointResponse.md)

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


## rotateOrderEntryPointToken

> OrderEntryPointWithTokenResponse rotateOrderEntryPointToken(id)

Reprint: mint a new public token and retire the old one at once.

### Example

```ts
import {
  Configuration,
  OrderEntryPointsApi,
} from '@tachyon-sdk/field';
import type { RotateOrderEntryPointTokenRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderEntryPointsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies RotateOrderEntryPointTokenRequest;

  try {
    const data = await api.rotateOrderEntryPointToken(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrderEntryPointWithTokenResponse**](OrderEntryPointWithTokenResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | No such entry point in this tenant |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateOrderEntryPoint

> OrderEntryPointResponse updateOrderEntryPoint(id, updateOrderEntryPointRequest)

Edit an entry point\&#39;s display, seat, timing, or enabled state.

### Example

```ts
import {
  Configuration,
  OrderEntryPointsApi,
} from '@tachyon-sdk/field';
import type { UpdateOrderEntryPointOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderEntryPointsApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateOrderEntryPointRequest
    updateOrderEntryPointRequest: ...,
  } satisfies UpdateOrderEntryPointOperationRequest;

  try {
    const data = await api.updateOrderEntryPoint(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |
| **updateOrderEntryPointRequest** | [UpdateOrderEntryPointRequest](UpdateOrderEntryPointRequest.md) |  | |

### Return type

[**OrderEntryPointResponse**](OrderEntryPointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Out-of-range timing or over-long label |  -  |
| **404** | No such entry point in this tenant |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

