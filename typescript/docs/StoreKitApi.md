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
| [**deleteCustomer**](StoreKitApi.md#deletecustomer) | **DELETE** /v1/storekit/customers/{customer_id} | Delete customer. |
| [**deliverOrder**](StoreKitApi.md#deliverorder) | **POST** /v1/storekit/orders/{order_id}/deliver | Deliver order. |
| [**getCart**](StoreKitApi.md#getcart) | **GET** /v1/storekit/carts/{cart_id} | Get a cart. |
| [**getCustomer**](StoreKitApi.md#getcustomer) | **GET** /v1/storekit/customers/{customer_id} | Get customer. |
| [**getOrderReceipt**](StoreKitApi.md#getorderreceipt) | **GET** /v1/storekit/consumer-orders/{order_id}/receipt | Get a printable receipt for a consumer order. |
| [**getProduct**](StoreKitApi.md#getproduct) | **GET** /v1/storekit/products/{product_id} | Get a storefront product. |
| [**getProductStock**](StoreKitApi.md#getproductstock) | **GET** /v1/storekit/products/{product_id}/stock | Get product stock. |
| [**listCustomers**](StoreKitApi.md#listcustomers) | **GET** /v1/storekit/customers | List customers. |
| [**listFulfillmentMethods**](StoreKitApi.md#listfulfillmentmethods) | **GET** /v1/storekit/fulfillment-methods | List supported fulfillment methods. |
| [**listProducts**](StoreKitApi.md#listproducts) | **GET** /v1/storekit/products | List storefront products. |
| [**pickupOrder**](StoreKitApi.md#pickuporder) | **POST** /v1/storekit/orders/{order_id}/pickup | Mark pickup order as picked up. |
| [**prepareOrder**](StoreKitApi.md#prepareorder) | **POST** /v1/storekit/orders/{order_id}/prepare | Prepare order for fulfillment. |
| [**readyOrder**](StoreKitApi.md#readyorder) | **POST** /v1/storekit/orders/{order_id}/ready | Mark pickup order as ready. |
| [**refundOrder**](StoreKitApi.md#refundorder) | **POST** /v1/storekit/orders/{order_id}/refund | Refund order. |
| [**removeCartItem**](StoreKitApi.md#removecartitem) | **DELETE** /v1/storekit/carts/{cart_id}/items/{item_id} | Remove a cart item by item ID. |
| [**selectPickupDatetime**](StoreKitApi.md#selectpickupdatetimeoperation) | **POST** /v1/storekit/orders/{order_id}/select-pickup-datetime | Select pickup date-time. |
| [**shipOrder**](StoreKitApi.md#shiporder) | **POST** /v1/storekit/orders/{order_id}/ship | Ship order. |
| [**storefrontCreateReservation**](StoreKitApi.md#storefrontcreatereservation) | **POST** /v1/storekit/reservations |  |
| [**storefrontListReservationProducts**](StoreKitApi.md#storefrontlistreservationproducts) | **GET** /v1/storekit/reservation-products |  |
| [**storefrontListReservationTypes**](StoreKitApi.md#storefrontlistreservationtypes) | **GET** /v1/storekit/reservation-types |  |
| [**storefrontListReservations**](StoreKitApi.md#storefrontlistreservations) | **GET** /v1/storekit/reservations |  |
| [**storefrontListResources**](StoreKitApi.md#storefrontlistresources) | **GET** /v1/storekit/resources |  |
| [**storefrontUpdateReservation**](StoreKitApi.md#storefrontupdatereservation) | **PATCH** /v1/storekit/reservations/{id} |  |
| [**storekitGetOrder**](StoreKitApi.md#storekitgetorder) | **GET** /v1/storekit/orders/{order_id} | Get order. |
| [**storekitListCategories**](StoreKitApi.md#storekitlistcategories) | **GET** /v1/storekit/categories | List storefront categories. |
| [**storekitListOrders**](StoreKitApi.md#storekitlistorders) | **GET** /v1/storekit/orders | List orders. |
| [**updateCartItem**](StoreKitApi.md#updatecartitemoperation) | **POST** /v1/storekit/carts/{cart_id}/items/{item_id} | Update a cart item by item ID. |
| [**updateCustomer**](StoreKitApi.md#updatecustomeroperation) | **POST** /v1/storekit/customers/{customer_id} | Update customer. |
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


## listCustomers

> StoreKitListCustomerResponse listCustomers(email, limit)

List customers.

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
    // string (optional)
    email: email_example,
    // number (optional)
    limit: 789,
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
| **email** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

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

> CreateReservationResponse storefrontCreateReservation(createReservationRequest)



### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontCreateReservationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreKitApi(config);

  const body = {
    // CreateReservationRequest
    createReservationRequest: ...,
  } satisfies StorefrontCreateReservationRequest;

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
| **createReservationRequest** | [CreateReservationRequest](CreateReservationRequest.md) |  | |

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


## storefrontListReservationProducts

> ReservationProductListResponse storefrontListReservationProducts(date)



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
    // number | Maximum number of reservations to return (optional)
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
| **limit** | `number` | Maximum number of reservations to return | [Optional] [Defaults to `undefined`] |
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


## storefrontUpdateReservation

> Reservation storefrontUpdateReservation(id, updateReservationRequest)



### Example

```ts
import {
  Configuration,
  StoreKitApi,
} from '@tachyon-sdk/field';
import type { StorefrontUpdateReservationRequest } from '@tachyon-sdk/field';

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
    // UpdateReservationRequest
    updateReservationRequest: ...,
  } satisfies StorefrontUpdateReservationRequest;

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
| **updateReservationRequest** | [UpdateReservationRequest](UpdateReservationRequest.md) |  | |

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

> StoreKitListOrderResponse storekitListOrders(userId, sessionId, customerId, status, limit, offset)

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
    // string (optional)
    status: status_example,
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
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
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

