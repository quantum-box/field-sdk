# StoreKitApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addCartItem**](StoreKitApi.md#addcartitemoperation) | **POST** /v1/storekit/carts/{cart_id}/items | Add a cart item. |
| [**cancelOrder**](StoreKitApi.md#cancelorder) | **POST** /v1/storekit/orders/{order_id}/cancel | Cancel order. |
| [**checkout**](StoreKitApi.md#checkoutoperation) | **POST** /v1/storekit/checkout_sessions | Create checkout session / order. |
| [**clearCart**](StoreKitApi.md#clearcart) | **POST** /v1/storekit/carts/{cart_id}/clear | Clear cart items. |
| [**confirmCheckoutSession**](StoreKitApi.md#confirmcheckoutsession) | **POST** /v1/storekit/checkout_sessions/{order_id}/confirm | Confirm checkout session. |
| [**createCart**](StoreKitApi.md#createcartoperation) | **POST** /v1/storekit/carts | Create or retrieve a cart. |
| [**createCustomer**](StoreKitApi.md#createcustomeroperation) | **POST** /v1/storekit/customers | Create customer. |
| [**createWebhookEndpoint**](StoreKitApi.md#createwebhookendpointoperation) | **POST** /v1/storekit/webhook-endpoints | webhook 宛先を登録し、署名シークレットを一度だけ返す。 |
| [**deleteCustomer**](StoreKitApi.md#deletecustomer) | **DELETE** /v1/storekit/customers/{customer_id} | Delete customer. |
| [**deleteWebhookEndpoint**](StoreKitApi.md#deletewebhookendpoint) | **DELETE** /v1/storekit/webhook-endpoints/{endpoint_id} | webhook 宛先を削除する。 |
| [**deliverOrder**](StoreKitApi.md#deliverorder) | **POST** /v1/storekit/orders/{order_id}/deliver | Deliver order. |
| [**getCart**](StoreKitApi.md#getcart) | **GET** /v1/storekit/carts/{cart_id} | Get a cart. |
| [**getCustomer**](StoreKitApi.md#getcustomer) | **GET** /v1/storekit/customers/{customer_id} | Get customer. |
| [**getOrderReceipt**](StoreKitApi.md#getorderreceipt) | **GET** /v1/storekit/consumer-orders/{order_id}/receipt | Get a printable receipt for a consumer order. |
| [**getProduct**](StoreKitApi.md#getproduct) | **GET** /v1/storekit/products/{product_id} | Get a storefront product. |
| [**getProductSelections**](StoreKitApi.md#getproductselections) | **GET** /v1/storekit/products/{product_id}/selections | List the variants and option groups a product offers. |
| [**getProductStock**](StoreKitApi.md#getproductstock) | **GET** /v1/storekit/products/{product_id}/stock | Get product stock. |
| [**getWebhookEndpoint**](StoreKitApi.md#getwebhookendpoint) | **GET** /v1/storekit/webhook-endpoints/{endpoint_id} | webhook 宛先を1件取得する。 |
| [**listCustomers**](StoreKitApi.md#listcustomers) | **GET** /v1/storekit/customers | List customers. |
| [**listFulfillmentMethods**](StoreKitApi.md#listfulfillmentmethods) | **GET** /v1/storekit/fulfillment-methods | List supported fulfillment methods. |
| [**listProducts**](StoreKitApi.md#listproducts) | **GET** /v1/storekit/products | List storefront products. |
| [**listWebhookDeliveries**](StoreKitApi.md#listwebhookdeliveries) | **GET** /v1/storekit/webhook-endpoints/{endpoint_id}/deliveries | 宛先の配送履歴を新しい順に返す。 |
| [**listWebhookEndpoints**](StoreKitApi.md#listwebhookendpoints) | **GET** /v1/storekit/webhook-endpoints | テナントの webhook 宛先を一覧する。 |
| [**pickupOrder**](StoreKitApi.md#pickuporder) | **POST** /v1/storekit/orders/{order_id}/pickup | Mark pickup order as picked up. |
| [**prepareOrder**](StoreKitApi.md#prepareorder) | **POST** /v1/storekit/orders/{order_id}/prepare | Prepare order for fulfillment. |
| [**readyOrder**](StoreKitApi.md#readyorder) | **POST** /v1/storekit/orders/{order_id}/ready | Mark pickup order as ready. |
| [**refundOrder**](StoreKitApi.md#refundorder) | **POST** /v1/storekit/orders/{order_id}/refund | Refund order. |
| [**removeCartItem**](StoreKitApi.md#removecartitem) | **DELETE** /v1/storekit/carts/{cart_id}/items/{item_id} | Remove a cart item by item ID. |
| [**rotateWebhookEndpointSecret**](StoreKitApi.md#rotatewebhookendpointsecret) | **POST** /v1/storekit/webhook-endpoints/{endpoint_id}/rotate-secret | 署名シークレットを更新し、新しい値を一度だけ返す。 |
| [**selectPickupDatetime**](StoreKitApi.md#selectpickupdatetimeoperation) | **POST** /v1/storekit/orders/{order_id}/select-pickup-datetime | Select pickup date-time. |
| [**shipOrder**](StoreKitApi.md#shiporder) | **POST** /v1/storekit/orders/{order_id}/ship | Ship order. |
| [**storefrontCreateReservation**](StoreKitApi.md#storefrontcreatereservationoperation) | **POST** /v1/storekit/reservations |  |
| [**storefrontGetStorefrontProfile**](StoreKitApi.md#storefrontgetstorefrontprofile) | **GET** /v1/storekit/storefront-profile | Anonymous read for the public storefront. |
| [**storefrontListMembershipPlans**](StoreKitApi.md#storefrontlistmembershipplans) | **GET** /v1/storekit/membership-plans | The member classes on offer. |
| [**storefrontListReservationProducts**](StoreKitApi.md#storefrontlistreservationproducts) | **GET** /v1/storekit/reservation-products |  |
| [**storefrontListReservationTypes**](StoreKitApi.md#storefrontlistreservationtypes) | **GET** /v1/storekit/reservation-types |  |
| [**storefrontListReservations**](StoreKitApi.md#storefrontlistreservations) | **GET** /v1/storekit/reservations |  |
| [**storefrontListResourceTimeSlots**](StoreKitApi.md#storefrontlistresourcetimeslots) | **GET** /v1/storekit/resources/{id}/time-slots |  |
| [**storefrontListResources**](StoreKitApi.md#storefrontlistresources) | **GET** /v1/storekit/resources |  |
| [**storefrontResourceAvailabilityCalendar**](StoreKitApi.md#storefrontresourceavailabilitycalendar) | **GET** /v1/storekit/resources/{id}/availability-calendar |  |
| [**storefrontUpdateReservation**](StoreKitApi.md#storefrontupdatereservationoperation) | **PATCH** /v1/storekit/reservations/{id} |  |
| [**storekitGetOrder**](StoreKitApi.md#storekitgetorder) | **GET** /v1/storekit/orders/{order_id} | Get order. |
| [**storekitListCategories**](StoreKitApi.md#storekitlistcategories) | **GET** /v1/storekit/categories | List storefront categories. |
| [**storekitListOrders**](StoreKitApi.md#storekitlistorders) | **GET** /v1/storekit/orders | List orders. |
| [**testWebhookEndpoint**](StoreKitApi.md#testwebhookendpoint) | **POST** /v1/storekit/webhook-endpoints/{endpoint_id}/test | 宛先へ署名付きの疎通確認イベントを1回送る。 |
| [**updateCartItem**](StoreKitApi.md#updatecartitemoperation) | **POST** /v1/storekit/carts/{cart_id}/items/{item_id} | Update a cart item by item ID. |
| [**updateCustomer**](StoreKitApi.md#updatecustomeroperation) | **POST** /v1/storekit/customers/{customer_id} | Update customer. |
| [**updateWebhookEndpoint**](StoreKitApi.md#updatewebhookendpointoperation) | **PATCH** /v1/storekit/webhook-endpoints/{endpoint_id} | webhook 宛先を部分更新する。 |
| [**validateCoupon**](StoreKitApi.md#validatecouponoperation) | **POST** /v1/storekit/coupons/validate | Validate coupon. |



## addCartItem

> CartResponse addCartItem(cartId, addCartItemRequest)

Add a cart item.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { AddCartItemOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    cartId: cartId_example,
    // AddCartItemRequest
    addCartItemRequest: ...,
  } satisfies AddCartItemOperationRequest;

  try {
    const data = await api.addCartItem(body);
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
| **cartId** | `string` |  | [Defaults to `undefined`] |
| **addCartItemRequest** | [AddCartItemRequest](AddCartItemRequest.md) |  | |

### Return type

[**CartResponse**](CartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelOrder

> OkResponse cancelOrder(orderId)

Cancel order.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { CancelOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies CancelOrderRequest;

  try {
    const data = await api.cancelOrder(body);
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
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OkResponse**](OkResponse.md)

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


## checkout

> OrderResponse checkout(checkoutRequest)

Create checkout session / order.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { CheckoutOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // CheckoutRequest
    checkoutRequest: ...,
  } satisfies CheckoutOperationRequest;

  try {
    const data = await api.checkout(body);
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
| **checkoutRequest** | [CheckoutRequest](CheckoutRequest.md) |  | |

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## clearCart

> OkResponse clearCart(cartId)

Clear cart items.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { ClearCartRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    cartId: cartId_example,
  } satisfies ClearCartRequest;

  try {
    const data = await api.clearCart(body);
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
| **cartId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OkResponse**](OkResponse.md)

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


## confirmCheckoutSession

> OrderResponse confirmCheckoutSession(orderId)

Confirm checkout session.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { ConfirmCheckoutSessionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies ConfirmCheckoutSessionRequest;

  try {
    const data = await api.confirmCheckoutSession(body);
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
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrderResponse**](OrderResponse.md)

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


## createCart

> CartResponse createCart(createCartRequest)

Create or retrieve a cart.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { CreateCartOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // CreateCartRequest
    createCartRequest: ...,
  } satisfies CreateCartOperationRequest;

  try {
    const data = await api.createCart(body);
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
| **createCartRequest** | [CreateCartRequest](CreateCartRequest.md) |  | |

### Return type

[**CartResponse**](CartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCustomer

> CustomerResponse createCustomer(createCustomerRequest)

Create customer.

&#x60;email&#x60; is optional. Customers taken by phone or at the counter often have none, and they still need a ledger entry so their visit history can be aggregated.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { CreateCustomerOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // CreateCustomerRequest
    createCustomerRequest: ...,
  } satisfies CreateCustomerOperationRequest;

  try {
    const data = await api.createCustomer(body);
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
| **createCustomerRequest** | [CreateCustomerRequest](CreateCustomerRequest.md) |  | |

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createWebhookEndpoint

> WebhookEndpointWithSecretResponse createWebhookEndpoint(createWebhookEndpointRequest)

webhook 宛先を登録し、署名シークレットを一度だけ返す。

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { CreateWebhookEndpointOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // CreateWebhookEndpointRequest
    createWebhookEndpointRequest: ...,
  } satisfies CreateWebhookEndpointOperationRequest;

  try {
    const data = await api.createWebhookEndpoint(body);
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
| **createWebhookEndpointRequest** | [CreateWebhookEndpointRequest](CreateWebhookEndpointRequest.md) |  | |

### Return type

[**WebhookEndpointWithSecretResponse**](WebhookEndpointWithSecretResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCustomer

> DeletedResponse deleteCustomer(customerId)

Delete customer.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { DeleteCustomerRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    customerId: customerId_example,
  } satisfies DeleteCustomerRequest;

  try {
    const data = await api.deleteCustomer(body);
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
| **customerId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeletedResponse**](DeletedResponse.md)

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


## deleteWebhookEndpoint

> deleteWebhookEndpoint(endpointId)

webhook 宛先を削除する。

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { DeleteWebhookEndpointRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    endpointId: endpointId_example,
  } satisfies DeleteWebhookEndpointRequest;

  try {
    const data = await api.deleteWebhookEndpoint(body);
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
| **endpointId** | `string` |  | [Defaults to `undefined`] |

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
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deliverOrder

> OrderResponse deliverOrder(orderId)

Deliver order.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { DeliverOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies DeliverOrderRequest;

  try {
    const data = await api.deliverOrder(body);
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
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrderResponse**](OrderResponse.md)

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


## getCart

> CartResponse getCart(cartId)

Get a cart.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { GetCartRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    cartId: cartId_example,
  } satisfies GetCartRequest;

  try {
    const data = await api.getCart(body);
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
| **cartId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CartResponse**](CartResponse.md)

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


## getCustomer

> CustomerResponse getCustomer(customerId)

Get customer.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { GetCustomerRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    customerId: customerId_example,
  } satisfies GetCustomerRequest;

  try {
    const data = await api.getCustomer(body);
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
| **customerId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CustomerResponse**](CustomerResponse.md)

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


## getOrderReceipt

> getOrderReceipt(orderId, format)

Get a printable receipt for a consumer order.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { GetOrderReceiptRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    orderId: orderId_example,
    // string (optional)
    format: format_example,
  } satisfies GetOrderReceiptRequest;

  try {
    const data = await api.getOrderReceipt(body);
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
| **orderId** | `string` |  | [Defaults to `undefined`] |
| **format** | `string` |  | [Optional] [Defaults to `undefined`] |

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
| **200** | Receipt HTML or PDF |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProduct

> ProductResponse getProduct(productId)

Get a storefront product.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { GetProductRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    productId: productId_example,
  } satisfies GetProductRequest;

  try {
    const data = await api.getProduct(body);
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
| **productId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ProductResponse**](ProductResponse.md)

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


## getProductSelections

> ProductSelectionsResponse getProductSelections(productId)

List the variants and option groups a product offers.

Prices live here, not in the cart request: a client renders these choices and then sends back IDs only.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { GetProductSelectionsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    productId: productId_example,
  } satisfies GetProductSelectionsRequest;

  try {
    const data = await api.getProductSelections(body);
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
| **productId** | `string` |  | [Defaults to `undefined`] |

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProductStock

> StockResponse getProductStock(productId)

Get product stock.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { GetProductStockRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    productId: productId_example,
  } satisfies GetProductStockRequest;

  try {
    const data = await api.getProductStock(body);
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
| **productId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**StockResponse**](StockResponse.md)

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


## getWebhookEndpoint

> WebhookEndpointResponse getWebhookEndpoint(endpointId)

webhook 宛先を1件取得する。

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { GetWebhookEndpointRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    endpointId: endpointId_example,
  } satisfies GetWebhookEndpointRequest;

  try {
    const data = await api.getWebhookEndpoint(body);
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
| **endpointId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WebhookEndpointResponse**](WebhookEndpointResponse.md)

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


## listCustomers

> StoreKitListCustomerResponse listCustomers(email, name, phone, ids, limit, offset)

List customers.

&#x60;email&#x60; matches exactly; &#x60;name&#x60; (display name or kana reading) and &#x60;phone&#x60; match partially. Results are candidates: customers are never merged or deduplicated, so two people sharing a name or a household phone number stay separate records. Picking the right candidate — or registering a new customer — is the caller\&#39;s decision.  &#x60;ids&#x60; fetches a known set of customers in one call, for callers that already hold customer IDs and only need the names and phone numbers to display alongside them. It is ANDed with the other filters, is capped at 100 IDs per request (more is a 400, never a silent truncation), and drops IDs that do not exist instead of failing the request.  &#x60;offset&#x60; pages through the filtered set, and &#x60;total&#x60; on the response is that set\&#39;s size — not the size of the returned page. The order is stable for a given filter, so paging neither repeats nor skips a row.  &#x60;limit&#x60; and &#x60;offset&#x60; on the response body are always &#x60;0&#x60; here: the legacy upstream list carried no pagination metadata and StoreKit has exposed zeroes since. Read &#x60;has_more&#x60; and &#x60;total&#x60; instead.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { ListCustomersRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string | Exact email match. (optional)
    email: email_example,
    // string | Partial match against the display name or its kana reading. (optional)
    name: name_example,
    // string | Partial match against the phone number. Separators are ignored on both sides, so `090-1234-5678` and `09012345678` match. (optional)
    phone: phone_example,
    // string | Comma-separated customer IDs, at most 100 per request (`ids=cus_a,cus_b`). Combines with `email`, `name` and `phone` as AND, and does not widen `limit`: pass a `limit` big enough for the set you asked for. IDs that do not exist are dropped from the result rather than reported. More than 100 IDs is a 400; the list is never silently truncated. An `ids` that parses to no ID at all matches nothing, so an empty page stays empty. (optional)
    ids: ids_example,
    // number (optional)
    limit: 789,
    // number | Rows to skip, applied after the filters above. Defaults to 0. (optional)
    offset: 56,
  } satisfies ListCustomersRequest;

  try {
    const data = await api.listCustomers(body);
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
| **email** | `string` | Exact email match. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Partial match against the display name or its kana reading. | [Optional] [Defaults to `undefined`] |
| **phone** | `string` | Partial match against the phone number. Separators are ignored on both sides, so &#x60;090-1234-5678&#x60; and &#x60;09012345678&#x60; match. | [Optional] [Defaults to `undefined`] |
| **ids** | `string` | Comma-separated customer IDs, at most 100 per request (&#x60;ids&#x3D;cus_a,cus_b&#x60;). Combines with &#x60;email&#x60;, &#x60;name&#x60; and &#x60;phone&#x60; as AND, and does not widen &#x60;limit&#x60;: pass a &#x60;limit&#x60; big enough for the set you asked for. IDs that do not exist are dropped from the result rather than reported. More than 100 IDs is a 400; the list is never silently truncated. An &#x60;ids&#x60; that parses to no ID at all matches nothing, so an empty page stays empty. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Rows to skip, applied after the filters above. Defaults to 0. | [Optional] [Defaults to `undefined`] |

### Return type

[**StoreKitListCustomerResponse**](StoreKitListCustomerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | More than 100 &#x60;ids&#x60; in one request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listFulfillmentMethods

> Array&lt;FulfillmentMethodResponse&gt; listFulfillmentMethods()

List supported fulfillment methods.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { ListFulfillmentMethodsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  try {
    const data = await api.listFulfillmentMethods();
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

[**Array&lt;FulfillmentMethodResponse&gt;**](FulfillmentMethodResponse.md)

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


## listProducts

> StoreKitListProductResponse listProducts(categoryId, search, limit, offset)

List storefront products.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { ListProductsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string (optional)
    categoryId: categoryId_example,
    // string (optional)
    search: search_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListProductsRequest;

  try {
    const data = await api.listProducts(body);
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

[**StoreKitListProductResponse**](StoreKitListProductResponse.md)

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


## listWebhookDeliveries

> Array&lt;WebhookDeliveryResponse&gt; listWebhookDeliveries(endpointId, limit)

宛先の配送履歴を新しい順に返す。

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { ListWebhookDeliveriesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    endpointId: endpointId_example,
    // number (optional)
    limit: 56,
  } satisfies ListWebhookDeliveriesRequest;

  try {
    const data = await api.listWebhookDeliveries(body);
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
| **endpointId** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;WebhookDeliveryResponse&gt;**](WebhookDeliveryResponse.md)

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


## listWebhookEndpoints

> Array&lt;WebhookEndpointResponse&gt; listWebhookEndpoints()

テナントの webhook 宛先を一覧する。

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { ListWebhookEndpointsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  try {
    const data = await api.listWebhookEndpoints();
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

[**Array&lt;WebhookEndpointResponse&gt;**](WebhookEndpointResponse.md)

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


## pickupOrder

> OrderResponse pickupOrder(orderId)

Mark pickup order as picked up.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { PickupOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies PickupOrderRequest;

  try {
    const data = await api.pickupOrder(body);
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
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrderResponse**](OrderResponse.md)

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


## prepareOrder

> OrderResponse prepareOrder(orderId)

Prepare order for fulfillment.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { PrepareOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies PrepareOrderRequest;

  try {
    const data = await api.prepareOrder(body);
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
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrderResponse**](OrderResponse.md)

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


## readyOrder

> OrderResponse readyOrder(orderId)

Mark pickup order as ready.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { ReadyOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies ReadyOrderRequest;

  try {
    const data = await api.readyOrder(body);
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
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrderResponse**](OrderResponse.md)

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


## refundOrder

> OrderResponse refundOrder(orderId)

Refund order.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { RefundOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies RefundOrderRequest;

  try {
    const data = await api.refundOrder(body);
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
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrderResponse**](OrderResponse.md)

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


## removeCartItem

> OkResponse removeCartItem(cartId, itemId)

Remove a cart item by item ID.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { RemoveCartItemRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    cartId: cartId_example,
    // string
    itemId: itemId_example,
  } satisfies RemoveCartItemRequest;

  try {
    const data = await api.removeCartItem(body);
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
| **cartId** | `string` |  | [Defaults to `undefined`] |
| **itemId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OkResponse**](OkResponse.md)

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


## rotateWebhookEndpointSecret

> WebhookEndpointWithSecretResponse rotateWebhookEndpointSecret(endpointId)

署名シークレットを更新し、新しい値を一度だけ返す。

旧世代は24時間だけ併記される。受信側はその間に値を差し替える。

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { RotateWebhookEndpointSecretRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    endpointId: endpointId_example,
  } satisfies RotateWebhookEndpointSecretRequest;

  try {
    const data = await api.rotateWebhookEndpointSecret(body);
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
| **endpointId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WebhookEndpointWithSecretResponse**](WebhookEndpointWithSecretResponse.md)

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


## selectPickupDatetime

> OrderResponse selectPickupDatetime(orderId, selectPickupDatetimeRequest)

Select pickup date-time.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { SelectPickupDatetimeOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    orderId: orderId_example,
    // SelectPickupDatetimeRequest
    selectPickupDatetimeRequest: ...,
  } satisfies SelectPickupDatetimeOperationRequest;

  try {
    const data = await api.selectPickupDatetime(body);
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
| **orderId** | `string` |  | [Defaults to `undefined`] |
| **selectPickupDatetimeRequest** | [SelectPickupDatetimeRequest](SelectPickupDatetimeRequest.md) |  | |

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## shipOrder

> OrderResponse shipOrder(orderId)

Ship order.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { ShipOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies ShipOrderRequest;

  try {
    const data = await api.shipOrder(body);
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
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrderResponse**](OrderResponse.md)

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


## storefrontCreateReservation

> CreateReservationResponse storefrontCreateReservation(storefrontCreateReservationRequest)



### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontCreateReservationOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // StorefrontCreateReservationRequest
    storefrontCreateReservationRequest: ...,
  } satisfies StorefrontCreateReservationOperationRequest;

  try {
    const data = await api.storefrontCreateReservation(body);
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
| **storefrontCreateReservationRequest** | [StorefrontCreateReservationRequest](StorefrontCreateReservationRequest.md) |  | |

### Return type

[**CreateReservationResponse**](CreateReservationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## storefrontGetStorefrontProfile

> StorefrontProfileResponse storefrontGetStorefrontProfile()

Anonymous read for the public storefront.

&#x60;/v1/storekit/_*&#x60; is reachable without a bearer token because &#x60;erp_authz::erp_action_for_request&#x60; has no branch for it and falls through to &#x60;None&#x60;. The tenant comes from &#x60;x-operator-id&#x60;, exactly as it does for the other storefront reads the page already makes.  This handler takes neither an &#x60;Executor&#x60; nor an &#x60;AuthApp&#x60;, so it structurally cannot perform a staff action — the same narrowing the public membership router expresses through a reduced use-case trait.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontGetStorefrontProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  try {
    const data = await api.storefrontGetStorefrontProfile();
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

[**StorefrontProfileResponse**](StorefrontProfileResponse.md)

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


## storefrontListMembershipPlans

> StorefrontMembershipPlanListResponse storefrontListMembershipPlans()

The member classes on offer.

Reached anonymously through the public route below. This &#x60;/v1/storekit/&#x60; path is *not* anonymous: fail-closed classification quarantines the whole StoreKit prefix, so it answers only callers that already carry an operator header and a bearer.  This handler takes neither an &#x60;Executor&#x60; nor an &#x60;AuthApp&#x60;, so it structurally cannot perform a staff action, and it only ever asks the repository for active plans.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontListMembershipPlansRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  try {
    const data = await api.storefrontListMembershipPlans();
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

[**StorefrontMembershipPlanListResponse**](StorefrontMembershipPlanListResponse.md)

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


## storefrontListReservationProducts

> ReservationProductListResponse storefrontListReservationProducts(date, resourceId)



### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontListReservationProductsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // Date | Filter/materialize slot-based products for this date (optional)
    date: 2013-10-20,
    // string | Resource whose generated inventory supplies the bookable slots, and whose membership in a product\'s eligibleResourceIds decides whether that product is offered (optional)
    resourceId: resourceId_example,
  } satisfies StorefrontListReservationProductsRequest;

  try {
    const data = await api.storefrontListReservationProducts(body);
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
| **date** | `Date` | Filter/materialize slot-based products for this date | [Optional] [Defaults to `undefined`] |
| **resourceId** | `string` | Resource whose generated inventory supplies the bookable slots, and whose membership in a product\&#39;s eligibleResourceIds decides whether that product is offered | [Optional] [Defaults to `undefined`] |

### Return type

[**ReservationProductListResponse**](ReservationProductListResponse.md)

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


## storefrontListReservationTypes

> ReservationTypeListResponse storefrontListReservationTypes()



### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontListReservationTypesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  try {
    const data = await api.storefrontListReservationTypes();
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

[**ReservationTypeListResponse**](ReservationTypeListResponse.md)

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


## storefrontListReservations

> ReservationListResponse storefrontListReservations(status, paymentStatus, reservationTypeId, resourceId, staffId, customerId, limit, offset)



### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontListReservationsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string | Filter by reservation status (optional)
    status: status_example,
    // string | Filter by payment status (optional)
    paymentStatus: paymentStatus_example,
    // string | Filter by reservation type ID (optional)
    reservationTypeId: reservationTypeId_example,
    // string | Filter by resource ID (optional)
    resourceId: resourceId_example,
    // string | Filter by assigned staff ID (optional)
    staffId: staffId_example,
    // string | Filter by customer ID (optional)
    customerId: customerId_example,
    // number | Page size; defaults to 100, maximum 500. A larger value is capped rather than rejected, and the applied value comes back as `limit` in the response. (optional)
    limit: 56,
    // number | Number of reservations to skip (optional)
    offset: 56,
  } satisfies StorefrontListReservationsRequest;

  try {
    const data = await api.storefrontListReservations(body);
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
| **status** | `string` | Filter by reservation status | [Optional] [Defaults to `undefined`] |
| **paymentStatus** | `string` | Filter by payment status | [Optional] [Defaults to `undefined`] |
| **reservationTypeId** | `string` | Filter by reservation type ID | [Optional] [Defaults to `undefined`] |
| **resourceId** | `string` | Filter by resource ID | [Optional] [Defaults to `undefined`] |
| **staffId** | `string` | Filter by assigned staff ID | [Optional] [Defaults to `undefined`] |
| **customerId** | `string` | Filter by customer ID | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page size; defaults to 100, maximum 500. A larger value is capped rather than rejected, and the applied value comes back as &#x60;limit&#x60; in the response. | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Number of reservations to skip | [Optional] [Defaults to `undefined`] |

### Return type

[**ReservationListResponse**](ReservationListResponse.md)

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


## storefrontListResourceTimeSlots

> StorefrontResourceTimeSlotListResponse storefrontListResourceTimeSlots(id, date, timezone, includeSoldOut)



### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontListResourceTimeSlotsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // Date | Tenant-local calendar date to list bookable slots for.
    date: 2013-10-20,
    // string | IANA timezone defining `date`. Omitted keeps the legacy Asia/Tokyo day. (optional)
    timezone: timezone_example,
    // boolean | Include slots with no remaining groups. Defaults to hiding them. (optional)
    includeSoldOut: true,
  } satisfies StorefrontListResourceTimeSlotsRequest;

  try {
    const data = await api.storefrontListResourceTimeSlots(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **date** | `Date` | Tenant-local calendar date to list bookable slots for. | [Defaults to `undefined`] |
| **timezone** | `string` | IANA timezone defining &#x60;date&#x60;. Omitted keeps the legacy Asia/Tokyo day. | [Optional] [Defaults to `undefined`] |
| **includeSoldOut** | `boolean` | Include slots with no remaining groups. Defaults to hiding them. | [Optional] [Defaults to `undefined`] |

### Return type

[**StorefrontResourceTimeSlotListResponse**](StorefrontResourceTimeSlotListResponse.md)

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


## storefrontListResources

> ResourceListResponse storefrontListResources()



### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontListResourcesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  try {
    const data = await api.storefrontListResources();
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

[**ResourceListResponse**](ResourceListResponse.md)

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


## storefrontResourceAvailabilityCalendar

> StorefrontAvailabilityCalendarResponse storefrontResourceAvailabilityCalendar(id, from, to, timezone, fewLeftThreshold)



### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontResourceAvailabilityCalendarRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // Date | First tenant-local calendar date, inclusive.
    from: 2013-10-20,
    // Date | Last tenant-local calendar date, inclusive.
    to: 2013-10-20,
    // string | IANA timezone defining `from`/`to`. Omitted keeps Asia/Tokyo. (optional)
    timezone: timezone_example,
    // number | Remaining groups at or below which a day reads as \"few left\". (optional)
    fewLeftThreshold: 56,
  } satisfies StorefrontResourceAvailabilityCalendarRequest;

  try {
    const data = await api.storefrontResourceAvailabilityCalendar(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **from** | `Date` | First tenant-local calendar date, inclusive. | [Defaults to `undefined`] |
| **to** | `Date` | Last tenant-local calendar date, inclusive. | [Defaults to `undefined`] |
| **timezone** | `string` | IANA timezone defining &#x60;from&#x60;/&#x60;to&#x60;. Omitted keeps Asia/Tokyo. | [Optional] [Defaults to `undefined`] |
| **fewLeftThreshold** | `number` | Remaining groups at or below which a day reads as \&quot;few left\&quot;. | [Optional] [Defaults to `undefined`] |

### Return type

[**StorefrontAvailabilityCalendarResponse**](StorefrontAvailabilityCalendarResponse.md)

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


## storefrontUpdateReservation

> Reservation storefrontUpdateReservation(id, storefrontUpdateReservationRequest)



### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontUpdateReservationOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string | Reservation ID to update
    id: id_example,
    // StorefrontUpdateReservationRequest
    storefrontUpdateReservationRequest: ...,
  } satisfies StorefrontUpdateReservationOperationRequest;

  try {
    const data = await api.storefrontUpdateReservation(body);
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
| **id** | `string` | Reservation ID to update | [Defaults to `undefined`] |
| **storefrontUpdateReservationRequest** | [StorefrontUpdateReservationRequest](StorefrontUpdateReservationRequest.md) |  | |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## storekitGetOrder

> OrderResponse storekitGetOrder(orderId)

Get order.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorekitGetOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies StorekitGetOrderRequest;

  try {
    const data = await api.storekitGetOrder(body);
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
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrderResponse**](OrderResponse.md)

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


## storekitListCategories

> Array&lt;CategoryResponse&gt; storekitListCategories()

List storefront categories.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorekitListCategoriesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  try {
    const data = await api.storekitListCategories();
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

[**Array&lt;CategoryResponse&gt;**](CategoryResponse.md)

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


## storekitListOrders

> StoreKitListOrderResponse storekitListOrders(userId, sessionId, customerId, status, updatedAfter, limit, offset)

List orders.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorekitListOrdersRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string (optional)
    userId: userId_example,
    // string (optional)
    sessionId: sessionId_example,
    // string (optional)
    customerId: customerId_example,
    // string | Order status to keep. Accepts a comma-separated list (`confirmed,preparing,ready`) so a kitchen board can watch every in-progress status in one request. (optional)
    status: status_example,
    // string | RFC 3339 lower bound on `updated_at`, for delta polling.  The bound is **inclusive**: `consumer_orders.updated_at` has second precision, so an exclusive bound would permanently drop a row updated later in the same second as the caller\'s cursor. Poll with the largest `updated_at` of the previous response and de-duplicate on order ID; the overlap is at most one second of rows.  Supplying it also switches the result order to `updated_at` ascending, so a backlog longer than one page drains in order. (optional)
    updatedAfter: updatedAfter_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies StorekitListOrdersRequest;

  try {
    const data = await api.storekitListOrders(body);
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
| **userId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sessionId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **customerId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Order status to keep. Accepts a comma-separated list (&#x60;confirmed,preparing,ready&#x60;) so a kitchen board can watch every in-progress status in one request. | [Optional] [Defaults to `undefined`] |
| **updatedAfter** | `string` | RFC 3339 lower bound on &#x60;updated_at&#x60;, for delta polling.  The bound is **inclusive**: &#x60;consumer_orders.updated_at&#x60; has second precision, so an exclusive bound would permanently drop a row updated later in the same second as the caller\&#39;s cursor. Poll with the largest &#x60;updated_at&#x60; of the previous response and de-duplicate on order ID; the overlap is at most one second of rows.  Supplying it also switches the result order to &#x60;updated_at&#x60; ascending, so a backlog longer than one page drains in order. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**StoreKitListOrderResponse**](StoreKitListOrderResponse.md)

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


## testWebhookEndpoint

> WebhookTestResponse testWebhookEndpoint(endpointId)

宛先へ署名付きの疎通確認イベントを1回送る。

実配送とまったく同じ経路（SSRF ガード・接続先の固定・署名・timeout）を 通る。注文イベントも配送行も作らないので、履歴には残らない。

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { TestWebhookEndpointRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    endpointId: endpointId_example,
  } satisfies TestWebhookEndpointRequest;

  try {
    const data = await api.testWebhookEndpoint(body);
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
| **endpointId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WebhookTestResponse**](WebhookTestResponse.md)

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


## updateCartItem

> CartResponse updateCartItem(cartId, itemId, updateCartItemRequest)

Update a cart item by item ID.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { UpdateCartItemOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    cartId: cartId_example,
    // string
    itemId: itemId_example,
    // UpdateCartItemRequest
    updateCartItemRequest: ...,
  } satisfies UpdateCartItemOperationRequest;

  try {
    const data = await api.updateCartItem(body);
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
| **cartId** | `string` |  | [Defaults to `undefined`] |
| **itemId** | `string` |  | [Defaults to `undefined`] |
| **updateCartItemRequest** | [UpdateCartItemRequest](UpdateCartItemRequest.md) |  | |

### Return type

[**CartResponse**](CartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomer

> CustomerResponse updateCustomer(customerId, updateCustomerRequest)

Update customer.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { UpdateCustomerOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    customerId: customerId_example,
    // UpdateCustomerRequest
    updateCustomerRequest: ...,
  } satisfies UpdateCustomerOperationRequest;

  try {
    const data = await api.updateCustomer(body);
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
| **customerId** | `string` |  | [Defaults to `undefined`] |
| **updateCustomerRequest** | [UpdateCustomerRequest](UpdateCustomerRequest.md) |  | |

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWebhookEndpoint

> WebhookEndpointResponse updateWebhookEndpoint(endpointId, updateWebhookEndpointRequest)

webhook 宛先を部分更新する。

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { UpdateWebhookEndpointOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // string
    endpointId: endpointId_example,
    // UpdateWebhookEndpointRequest
    updateWebhookEndpointRequest: ...,
  } satisfies UpdateWebhookEndpointOperationRequest;

  try {
    const data = await api.updateWebhookEndpoint(body);
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
| **endpointId** | `string` |  | [Defaults to `undefined`] |
| **updateWebhookEndpointRequest** | [UpdateWebhookEndpointRequest](UpdateWebhookEndpointRequest.md) |  | |

### Return type

[**WebhookEndpointResponse**](WebhookEndpointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateCoupon

> CouponResponse validateCoupon(validateCouponRequest)

Validate coupon.

### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { ValidateCouponOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // ValidateCouponRequest
    validateCouponRequest: ...,
  } satisfies ValidateCouponOperationRequest;

  try {
    const data = await api.validateCoupon(body);
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
| **validateCouponRequest** | [ValidateCouponRequest](ValidateCouponRequest.md) |  | |

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

