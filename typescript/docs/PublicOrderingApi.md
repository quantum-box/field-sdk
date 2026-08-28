# PublicOrderingApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCurrentSession**](PublicOrderingApi.md#getcurrentsession) | **GET** /v1/public/order-sessions/current | Report the state of the session the caller holds. |
| [**getEntryPoint**](PublicOrderingApi.md#getentrypoint) | **GET** /v1/public/order-entry-points/{public_token} | Resolve a printed token to the page a diner should see. |
| [**getMenu**](PublicOrderingApi.md#getmenu) | **GET** /v1/public/order-sessions/current/menu | The menu this entry point can order from. |
| [**getMenuProductSelections**](PublicOrderingApi.md#getmenuproductselections) | **GET** /v1/public/order-sessions/current/menu/products/{product_id}/selections | The variants and options one menu item offers. |
| [**getOwnOrder**](PublicOrderingApi.md#getownorder) | **GET** /v1/public/order-sessions/current/order | Read back the order this session placed. |
| [**placeOrder**](PublicOrderingApi.md#placeorder) | **POST** /v1/public/order-sessions/current/orders | Place the order this session has been assembling. |
| [**resetSession**](PublicOrderingApi.md#resetsession) | **POST** /v1/public/order-sessions/current/reset | End the session and make its token useless. |
| [**startSession**](PublicOrderingApi.md#startsession) | **POST** /v1/public/order-sessions | Open a guest session on an entry point. |



## getCurrentSession

> OrderSessionResponse getCurrentSession()

Report the state of the session the caller holds.

### Example

```ts
import {
  Configuration,
  PublicOrderingApi,
} from '@tachyon-sdk/field';
import type { GetCurrentSessionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicOrderingApi(config);

  try {
    const data = await api.getCurrentSession();
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

[**OrderSessionResponse**](OrderSessionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** | No live session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEntryPoint

> PublicOrderEntryPointResponse getEntryPoint(publicToken)

Resolve a printed token to the page a diner should see.

### Example

```ts
import {
  Configuration,
  PublicOrderingApi,
} from '@tachyon-sdk/field';
import type { GetEntryPointRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicOrderingApi(config);

  const body = {
    // string | Opaque value printed in the QR
    publicToken: publicToken_example,
  } satisfies GetEntryPointRequest;

  try {
    const data = await api.getEntryPoint(body);
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
| **publicToken** | `string` | Opaque value printed in the QR | [Defaults to `undefined`] |

### Return type

[**PublicOrderEntryPointResponse**](PublicOrderEntryPointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Unknown, rotated, or disabled entry point |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMenu

> PublicOrderMenuResponse getMenu(categoryId, search, limit, offset)

The menu this entry point can order from.

### Example

```ts
import {
  Configuration,
  PublicOrderingApi,
} from '@tachyon-sdk/field';
import type { GetMenuRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicOrderingApi(config);

  const body = {
    // string (optional)
    categoryId: categoryId_example,
    // string (optional)
    search: search_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies GetMenuRequest;

  try {
    const data = await api.getMenu(body);
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
| **categoryId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PublicOrderMenuResponse**](PublicOrderMenuResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** | No live session |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMenuProductSelections

> ProductSelectionsResponse getMenuProductSelections(productId)

The variants and options one menu item offers.

### Example

```ts
import {
  Configuration,
  PublicOrderingApi,
} from '@tachyon-sdk/field';
import type { GetMenuProductSelectionsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicOrderingApi(config);

  const body = {
    // string | Menu item whose choices are being read
    productId: productId_example,
  } satisfies GetMenuProductSelectionsRequest;

  try {
    const data = await api.getMenuProductSelections(body);
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
| **productId** | `string` | Menu item whose choices are being read | [Defaults to `undefined`] |

### Return type

[**ProductSelectionsResponse**](ProductSelectionsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** | No live session |  -  |
| **404** | No published product with that identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOwnOrder

> PublicOrderResponse getOwnOrder()

Read back the order this session placed.

Scoped to the session\&#39;s own order id, so possession of a session is not a way to enumerate the store\&#39;s orders. The response is the same narrow shape the submission returned: no customer contact details come back out.

### Example

```ts
import {
  Configuration,
  PublicOrderingApi,
} from '@tachyon-sdk/field';
import type { GetOwnOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicOrderingApi(config);

  try {
    const data = await api.getOwnOrder();
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

[**PublicOrderResponse**](PublicOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** | No live session |  -  |
| **404** | This session has not placed an order |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeOrder

> PublicOrderResponse placeOrder(idempotencyKey, placePublicOrderRequest)

Place the order this session has been assembling.

&#x60;Idempotency-Key&#x60; is required, not optional. A diner taps twice, a phone loses signal mid-request and the app retries, a kiosk reloads: all three arrive here as a second identical POST, and the key is what makes the second one return the first one\&#39;s order instead of creating another.  Failure is handled the same way and for the same reason. When the checkout call does not come back with an answer, the key is marked &#x60;failed&#x60; and the session is marked &#x60;unknown&#x60;, which refuses every later attempt on that session rather than risking a duplicate. Staff resolve it; the software does not guess.

### Example

```ts
import {
  Configuration,
  PublicOrderingApi,
} from '@tachyon-sdk/field';
import type { PlaceOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicOrderingApi(config);

  const body = {
    // string | Required; replays return the first result
    idempotencyKey: idempotencyKey_example,
    // PlacePublicOrderRequest
    placePublicOrderRequest: ...,
  } satisfies PlaceOrderRequest;

  try {
    const data = await api.placeOrder(body);
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
| **idempotencyKey** | `string` | Required; replays return the first result | [Defaults to `undefined`] |
| **placePublicOrderRequest** | [PlacePublicOrderRequest](PlacePublicOrderRequest.md) |  | |

### Return type

[**PublicOrderResponse**](PublicOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **400** | Missing Idempotency-Key or invalid line |  -  |
| **401** | No live session |  -  |
| **409** | Key reused with a different body, still processing, or previously failed |  -  |
| **429** | Tenant order budget exhausted |  -  |
| **503** | Public ordering protection is unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resetSession

> resetSession()

End the session and make its token useless.

Idempotent on purpose: a kiosk that clears itself after an abandoned order should not have to know whether it still holds a live session.

### Example

```ts
import {
  Configuration,
  PublicOrderingApi,
} from '@tachyon-sdk/field';
import type { ResetSessionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicOrderingApi(config);

  try {
    const data = await api.resetSession();
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

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Session ended |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startSession

> StartOrderSessionResponse startSession(startOrderSessionRequest)

Open a guest session on an entry point.

### Example

```ts
import {
  Configuration,
  PublicOrderingApi,
} from '@tachyon-sdk/field';
import type { StartSessionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicOrderingApi(config);

  const body = {
    // StartOrderSessionRequest
    startOrderSessionRequest: ...,
  } satisfies StartSessionRequest;

  try {
    const data = await api.startSession(body);
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
| **startOrderSessionRequest** | [StartOrderSessionRequest](StartOrderSessionRequest.md) |  | |

### Return type

[**StartOrderSessionResponse**](StartOrderSessionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **404** | Unknown, rotated, or disabled entry point |  -  |
| **429** | Tenant session budget exhausted |  -  |
| **503** | Public ordering protection is unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

