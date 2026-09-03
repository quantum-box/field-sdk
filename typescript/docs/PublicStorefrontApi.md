# PublicStorefrontApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listPublicCustomFieldDefinitions**](PublicStorefrontApi.md#listpubliccustomfielddefinitions) | **GET** /v1/public/storefront/{tenant_id}/custom-field-definitions |  |
| [**publicStorefrontAddCartItem**](PublicStorefrontApi.md#publicstorefrontaddcartitem) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/items | Add a product to a cart. |
| [**publicStorefrontCancelOrderByLookupToken**](PublicStorefrontApi.md#publicstorefrontcancelorderbylookuptoken) | **POST** /v1/public/storefront/{tenant_id}/orders/by-token/{lookup_token}/cancel | Cancel the one order represented by a lookup token. |
| [**publicStorefrontCheckout**](PublicStorefrontApi.md#publicstorefrontcheckout) | **POST** /v1/public/storefront/{tenant_id}/checkout_sessions | Place the order. |
| [**publicStorefrontClearCart**](PublicStorefrontApi.md#publicstorefrontclearcart) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/clear | Empty a cart. |
| [**publicStorefrontCreateCart**](PublicStorefrontApi.md#publicstorefrontcreatecart) | **POST** /v1/public/storefront/{tenant_id}/carts | Open a cart. |
| [**publicStorefrontCreateReservation**](PublicStorefrontApi.md#publicstorefrontcreatereservation) | **POST** /v1/public/storefront/{tenant_id}/reservations | The booking submission. |
| [**publicStorefrontGetCart**](PublicStorefrontApi.md#publicstorefrontgetcart) | **GET** /v1/public/storefront/{tenant_id}/carts/{cart_id} | Read a cart the caller holds the identifier of. |
| [**publicStorefrontGetOrderByLookupToken**](PublicStorefrontApi.md#publicstorefrontgetorderbylookuptoken) | **GET** /v1/public/storefront/{tenant_id}/orders/by-token/{lookup_token} | Read an order again with the token the lookup handed back. |
| [**publicStorefrontGetProduct**](PublicStorefrontApi.md#publicstorefrontgetproduct) | **GET** /v1/public/storefront/{tenant_id}/products/{product_id} | Read one published product. |
| [**publicStorefrontGetProductSelections**](PublicStorefrontApi.md#publicstorefrontgetproductselections) | **GET** /v1/public/storefront/{tenant_id}/products/{product_id}/selections | List the variants and option groups a published product offers. |
| [**publicStorefrontGetStorefrontProfile**](PublicStorefrontApi.md#publicstorefrontgetstorefrontprofile) | **GET** /v1/public/storefront/{tenant_id}/profile | The same read under the public shape; see &#x60;reservation_storefront_api::public_tenant&#x60; for why the tenant is a path segment rather than a header. |
| [**publicStorefrontListCategories**](PublicStorefrontApi.md#publicstorefrontlistcategories) | **GET** /v1/public/storefront/{tenant_id}/categories | List the categories the menu is grouped by. |
| [**publicStorefrontListMembershipPlans**](PublicStorefrontApi.md#publicstorefrontlistmembershipplans) | **GET** /v1/public/storefront/{tenant_id}/membership-plans | The same read under the public shape; see &#x60;reservation_storefront_api::public_tenant&#x60; for why the tenant is a path segment rather than a header. |
| [**publicStorefrontListProducts**](PublicStorefrontApi.md#publicstorefrontlistproducts) | **GET** /v1/public/storefront/{tenant_id}/products | List the products a tenant publishes. |
| [**publicStorefrontListReservationProducts**](PublicStorefrontApi.md#publicstorefrontlistreservationproducts) | **GET** /v1/public/storefront/{tenant_id}/reservation-products |  |
| [**publicStorefrontListReservationTypes**](PublicStorefrontApi.md#publicstorefrontlistreservationtypes) | **GET** /v1/public/storefront/{tenant_id}/reservation-types |  |
| [**publicStorefrontListResources**](PublicStorefrontApi.md#publicstorefrontlistresources) | **GET** /v1/public/storefront/{tenant_id}/resources |  |
| [**publicStorefrontLookupOrder**](PublicStorefrontApi.md#publicstorefrontlookuporder) | **POST** /v1/public/storefront/{tenant_id}/orders/lookup | Find one order from what its customer knows. |
| [**publicStorefrontPreviewCoupon**](PublicStorefrontApi.md#publicstorefrontpreviewcoupon) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/coupon-preview | Price one code against one cart. |
| [**publicStorefrontRemoveCartItem**](PublicStorefrontApi.md#publicstorefrontremovecartitem) | **DELETE** /v1/public/storefront/{tenant_id}/carts/{cart_id}/items/{item_id} | Remove a cart line. |
| [**publicStorefrontResourceAvailabilityCalendar**](PublicStorefrontApi.md#publicstorefrontresourceavailabilitycalendar) | **GET** /v1/public/storefront/{tenant_id}/resources/{id}/availability-calendar |  |
| [**publicStorefrontUpdateCartItem**](PublicStorefrontApi.md#publicstorefrontupdatecartitem) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/items/{item_id} | Change the quantity of a cart line. |



## listPublicCustomFieldDefinitions

> PublicCustomFieldDefinitionListResponse listPublicCustomFieldDefinitions(tenantId, entityType, xTachyonCustomFieldTypes)



### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { ListPublicCustomFieldDefinitionsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
    // string | Public form entity type (reservation/customer_subject)
    entityType: entityType_example,
    // string | Comma-separated additional custom field types supported by this client. The legacy baseline (text, number, date, select, boolean) is always supported; when absent or empty, additional types are represented as text. Unknown type tokens are ignored. (optional)
    xTachyonCustomFieldTypes: xTachyonCustomFieldTypes_example,
  } satisfies ListPublicCustomFieldDefinitionsRequest;

  try {
    const data = await api.listPublicCustomFieldDefinitions(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |
| **entityType** | `string` | Public form entity type (reservation/customer_subject) | [Defaults to `undefined`] |
| **xTachyonCustomFieldTypes** | `string` | Comma-separated additional custom field types supported by this client. The legacy baseline (text, number, date, select, boolean) is always supported; when absent or empty, additional types are represented as text. Unknown type tokens are ignored. | [Optional] [Defaults to `undefined`] |

### Return type

[**PublicCustomFieldDefinitionListResponse**](PublicCustomFieldDefinitionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Unsupported entity type |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontAddCartItem

> PublicCartResponse publicStorefrontAddCartItem(tenantId, cartId, publicAddCartItemRequest)

Add a product to a cart.

The price is not an input. The service reads the product\&#39;s list price for the named tenant and refuses anything that is not ACTIVE and PUBLIC, so a caller can neither set its own price nor put another tenant\&#39;s product — or this tenant\&#39;s unpublished one — into a cart.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontAddCartItemRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // string | Cart the caller holds the identifier of
    cartId: cartId_example,
    // PublicAddCartItemRequest
    publicAddCartItemRequest: ...,
  } satisfies PublicStorefrontAddCartItemRequest;

  try {
    const data = await api.publicStorefrontAddCartItem(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **cartId** | `string` | Cart the caller holds the identifier of | [Defaults to `undefined`] |
| **publicAddCartItemRequest** | [PublicAddCartItemRequest](PublicAddCartItemRequest.md) |  | |

### Return type

[**PublicCartResponse**](PublicCartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Unavailable product or rejected quantity |  -  |
| **429** | Tenant cart budget exhausted |  -  |
| **503** | Public storefront limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontCancelOrderByLookupToken

> PublicOrderResponse publicStorefrontCancelOrderByLookupToken(tenantId, lookupToken)

Cancel the one order represented by a lookup token.

There is deliberately no order ID in this contract. The short-lived token is resolved server-side under the tenant in the path, so it cannot be paired with a different customer\&#39;s order.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontCancelOrderByLookupTokenRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // string | Token minted by the lookup
    lookupToken: lookupToken_example,
  } satisfies PublicStorefrontCancelOrderByLookupTokenRequest;

  try {
    const data = await api.publicStorefrontCancelOrderByLookupToken(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **lookupToken** | `string` | Token minted by the lookup | [Defaults to `undefined`] |

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
| **404** | Lookup token is unknown, expired or belongs to another tenant |  -  |
| **409** | The order has reached a non-cancellable status |  -  |
| **429** | Tenant consumer-cancel budget exhausted |  -  |
| **503** | Public storefront limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontCheckout

> PublicOrderResponse publicStorefrontCheckout(tenantId, publicCheckoutRequest)

Place the order.

Anonymous by nature: someone reading a menu on their phone is not signed in, here or on any other store\&#39;s page. The amounts are recomputed from the cart the caller names, which was itself priced from the tenant\&#39;s own catalog, so nothing about the money is caller-supplied.  No confirmation email is sent from this route even when &#x60;customer_email&#x60; is given. The address is stored on the order for the store to use; sending from an unauthenticated route would make Field a mail relay pointed at any address a caller types. The authenticated StoreKit checkout still sends it, and the anonymous booking submission likewise sends nothing.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontCheckoutRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // PublicCheckoutRequest
    publicCheckoutRequest: ...,
  } satisfies PublicStorefrontCheckoutRequest;

  try {
    const data = await api.publicStorefrontCheckout(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **publicCheckoutRequest** | [PublicCheckoutRequest](PublicCheckoutRequest.md) |  | |

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
| **400** | Empty cart, rejected redirect URL, or invalid enum |  -  |
| **429** | Tenant order-create budget exhausted |  -  |
| **503** | Public storefront limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontClearCart

> OkResponse publicStorefrontClearCart(tenantId, cartId)

Empty a cart.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontClearCartRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // string | Cart the caller holds the identifier of
    cartId: cartId_example,
  } satisfies PublicStorefrontClearCartRequest;

  try {
    const data = await api.publicStorefrontClearCart(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **cartId** | `string` | Cart the caller holds the identifier of | [Defaults to `undefined`] |

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
| **429** | Tenant cart budget exhausted |  -  |
| **503** | Public storefront limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontCreateCart

> PublicCartResponse publicStorefrontCreateCart(tenantId)

Open a cart.

The StoreKit route takes a &#x60;user_id&#x60;/&#x60;session_id&#x60; and hands back whichever active cart already matches. That lookup is why this one takes no body at all: &#x60;find_active_by_user_id&#x60; would let an anonymous caller name a signed-in shopper and be given their cart, and a caller-chosen session id is a guess away from the same thing. The session identifier is minted here instead, so the returned &#x60;crt_&#x60;+ULID cart id is the only handle to this cart and the caller is the only party that has ever seen it.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontCreateCartRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
  } satisfies PublicStorefrontCreateCartRequest;

  try {
    const data = await api.publicStorefrontCreateCart(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |

### Return type

[**PublicCartResponse**](PublicCartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **429** | Tenant cart budget exhausted |  -  |
| **503** | Public storefront limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontCreateReservation

> CreateReservationResponse publicStorefrontCreateReservation(tenantId, storefrontCreateReservationRequest)

The booking submission.

Anonymous by nature: a visitor filling in a public booking form is not signed in, on this page or on any other course\&#39;s. It was reachable without a bearer before route classification existed, so this states the existing exposure rather than opening a new one. A shared tenant write budget now bounds its side effects. Because an attacker can spend that aggregate budget and lock out legitimate visitors, PLT-3683 still tracks the non-bypassable origin/client-level protection needed to prevent griefing.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontCreateReservationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
    // StorefrontCreateReservationRequest
    storefrontCreateReservationRequest: ...,
  } satisfies PublicStorefrontCreateReservationRequest;

  try {
    const data = await api.publicStorefrontCreateReservation(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |
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
| **429** | Tenant reservation-create budget exhausted |  -  |
| **503** | Reservation limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontGetCart

> PublicCartResponse publicStorefrontGetCart(tenantId, cartId)

Read a cart the caller holds the identifier of.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontGetCartRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // string | Cart the caller holds the identifier of
    cartId: cartId_example,
  } satisfies PublicStorefrontGetCartRequest;

  try {
    const data = await api.publicStorefrontGetCart(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **cartId** | `string` | Cart the caller holds the identifier of | [Defaults to `undefined`] |

### Return type

[**PublicCartResponse**](PublicCartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | No cart with that identifier in this tenant |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontGetOrderByLookupToken

> PublicOrderResponse publicStorefrontGetOrderByLookupToken(tenantId, lookupToken)

Read an order again with the token the lookup handed back.

This is the one order read on the public surface, and the token is what makes it one: it is server-minted, unguessable and short-lived, unlike the order identifier printed on the receipt. An expired or unknown token is a 404 like any other.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontGetOrderByLookupTokenRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // string | Token minted by the lookup
    lookupToken: lookupToken_example,
  } satisfies PublicStorefrontGetOrderByLookupTokenRequest;

  try {
    const data = await api.publicStorefrontGetOrderByLookupToken(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **lookupToken** | `string` | Token minted by the lookup | [Defaults to `undefined`] |

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
| **404** | No order for that token, or the token has expired |  -  |
| **429** | Tenant order lookup budget exhausted |  -  |
| **503** | Public storefront limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontGetProduct

> PublicProductResponse publicStorefrontGetProduct(tenantId, productId)

Read one published product.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontGetProductRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // string | Published product being read
    productId: productId_example,
  } satisfies PublicStorefrontGetProductRequest;

  try {
    const data = await api.publicStorefrontGetProduct(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **productId** | `string` | Published product being read | [Defaults to `undefined`] |

### Return type

[**PublicProductResponse**](PublicProductResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | No published product with that identifier |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontGetProductSelections

> ProductSelectionsResponse publicStorefrontGetProductSelections(tenantId, productId)

List the variants and option groups a published product offers.

The StoreKit twin answers for any product the operator can see. This one must not: a caller that guessed an unpublished product\&#39;s id would otherwise learn its choices and their prices, so the publication check runs first and an unpublished product is reported exactly as a missing one.  The response type is shared with StoreKit deliberately. It is the same menu the store prints — names and the amount each choice adds — and reusing it keeps one definition of what a choice costs, which is the number the cart resolves server-side.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontGetProductSelectionsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // string | Published product whose choices are being read
    productId: productId_example,
  } satisfies PublicStorefrontGetProductSelectionsRequest;

  try {
    const data = await api.publicStorefrontGetProductSelections(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **productId** | `string` | Published product whose choices are being read | [Defaults to `undefined`] |

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
| **404** | No published product with that identifier |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontGetStorefrontProfile

> StorefrontProfileResponse publicStorefrontGetStorefrontProfile(tenantId)

The same read under the public shape; see &#x60;reservation_storefront_api::public_tenant&#x60; for why the tenant is a path segment rather than a header.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontGetStorefrontProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
  } satisfies PublicStorefrontGetStorefrontProfileRequest;

  try {
    const data = await api.publicStorefrontGetStorefrontProfile(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |

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
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontListCategories

> Array&lt;CategoryResponse&gt; publicStorefrontListCategories(tenantId)

List the categories the menu is grouped by.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontListCategoriesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
  } satisfies PublicStorefrontListCategoriesRequest;

  try {
    const data = await api.publicStorefrontListCategories(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |

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
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontListMembershipPlans

> StorefrontMembershipPlanListResponse publicStorefrontListMembershipPlans(tenantId)

The same read under the public shape; see &#x60;reservation_storefront_api::public_tenant&#x60; for why the tenant is a path segment rather than a header.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontListMembershipPlansRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose member classes are being read
    tenantId: tenantId_example,
  } satisfies PublicStorefrontListMembershipPlansRequest;

  try {
    const data = await api.publicStorefrontListMembershipPlans(body);
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
| **tenantId** | `string` | Tenant whose member classes are being read | [Defaults to `undefined`] |

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
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontListProducts

> StoreKitListPublicProductResponse publicStorefrontListProducts(tenantId, categoryId, search, limit, offset)

List the products a tenant publishes.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontListProductsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // string (optional)
    categoryId: categoryId_example,
    // string (optional)
    search: search_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies PublicStorefrontListProductsRequest;

  try {
    const data = await api.publicStorefrontListProducts(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **categoryId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**StoreKitListPublicProductResponse**](StoreKitListPublicProductResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontListReservationProducts

> ReservationProductListResponse publicStorefrontListReservationProducts(tenantId, date, resourceId)



### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontListReservationProductsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
    // Date | Filter/materialize slot-based products for this date (optional)
    date: 2013-10-20,
    // string | Resource whose generated inventory supplies the bookable slots (optional)
    resourceId: resourceId_example,
  } satisfies PublicStorefrontListReservationProductsRequest;

  try {
    const data = await api.publicStorefrontListReservationProducts(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |
| **date** | `Date` | Filter/materialize slot-based products for this date | [Optional] [Defaults to `undefined`] |
| **resourceId** | `string` | Resource whose generated inventory supplies the bookable slots | [Optional] [Defaults to `undefined`] |

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
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontListReservationTypes

> ReservationTypeListResponse publicStorefrontListReservationTypes(tenantId)



### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontListReservationTypesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
  } satisfies PublicStorefrontListReservationTypesRequest;

  try {
    const data = await api.publicStorefrontListReservationTypes(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |

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
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontListResources

> ResourceListResponse publicStorefrontListResources(tenantId)



### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontListResourcesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
  } satisfies PublicStorefrontListResourcesRequest;

  try {
    const data = await api.publicStorefrontListResources(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |

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
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontLookupOrder

> PublicOrderLookupResponse publicStorefrontLookupOrder(tenantId, publicOrderLookupRequest)

Find one order from what its customer knows.

#1148 kept order reads off this surface because a caller-held identifier is not evidence of identity, and an order id alone still is not. This route does not take one: it takes the two things a customer has and a passer-by does not, and it is metered on the tightest budget here so the pair cannot be walked. A wrong pair and an unknown phone number are the same 404, so a failed attempt does not confirm the number exists.  The response carries no more than the confirmation screen already showed at checkout — no address, no email, no customer record.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontLookupOrderRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // PublicOrderLookupRequest
    publicOrderLookupRequest: ...,
  } satisfies PublicStorefrontLookupOrderRequest;

  try {
    const data = await api.publicStorefrontLookupOrder(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **publicOrderLookupRequest** | [PublicOrderLookupRequest](PublicOrderLookupRequest.md) |  | |

### Return type

[**PublicOrderLookupResponse**](PublicOrderLookupResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | No order in this tenant matches that phone number and those digits |  -  |
| **429** | Tenant order lookup budget exhausted |  -  |
| **503** | Public storefront limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontPreviewCoupon

> PublicCouponPreviewResponse publicStorefrontPreviewCoupon(tenantId, cartId, publicCouponPreviewRequest)

Price one code against one cart.

A discount has to be visible before it is submitted — a checkout screen that takes a code and reveals what it did only once the order exists is not one anybody will use. The oracle a bare &#x60;validate_coupon&#x60; would be is closed by what this route demands rather than by withholding the answer: the caller has to hold a cart identifier, which costs a &#x60;CartWrite&#x60; to mint, and the attempt is metered on its own budget on top of that. Every rejection is the same 404 whether the code does not exist, has expired, or does not clear the cart\&#39;s minimum, so working through a code space learns nothing from the replies.  Nothing is persisted. A preview neither reserves the code nor commits the cart to it; &#x60;checkout&#x60; re-validates and re-prices server-side, and that result is the one the order is built from.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontPreviewCouponRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // string | Cart the caller holds the identifier of
    cartId: cartId_example,
    // PublicCouponPreviewRequest
    publicCouponPreviewRequest: ...,
  } satisfies PublicStorefrontPreviewCouponRequest;

  try {
    const data = await api.publicStorefrontPreviewCoupon(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **cartId** | `string` | Cart the caller holds the identifier of | [Defaults to `undefined`] |
| **publicCouponPreviewRequest** | [PublicCouponPreviewRequest](PublicCouponPreviewRequest.md) |  | |

### Return type

[**PublicCouponPreviewResponse**](PublicCouponPreviewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | No such cart in this tenant, or the code does not apply to it |  -  |
| **429** | Tenant coupon attempt budget exhausted |  -  |
| **503** | Public storefront limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontRemoveCartItem

> OkResponse publicStorefrontRemoveCartItem(tenantId, cartId, itemId)

Remove a cart line.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontRemoveCartItemRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // string | Cart the caller holds the identifier of
    cartId: cartId_example,
    // string | Cart line being removed
    itemId: itemId_example,
  } satisfies PublicStorefrontRemoveCartItemRequest;

  try {
    const data = await api.publicStorefrontRemoveCartItem(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **cartId** | `string` | Cart the caller holds the identifier of | [Defaults to `undefined`] |
| **itemId** | `string` | Cart line being removed | [Defaults to `undefined`] |

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
| **429** | Tenant cart budget exhausted |  -  |
| **503** | Public storefront limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontResourceAvailabilityCalendar

> StorefrontAvailabilityCalendarResponse publicStorefrontResourceAvailabilityCalendar(tenantId, id, from, to, timezone, fewLeftThreshold)



### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontResourceAvailabilityCalendarRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
    // string | Resource whose month is being read
    id: id_example,
    // Date | First date of the range
    from: 2013-10-20,
    // Date | Last date of the range
    to: 2013-10-20,
    // string | IANA timezone the days are grouped by (optional)
    timezone: timezone_example,
    // number | Remaining groups at or below which a day is marked few_left (optional)
    fewLeftThreshold: 789,
  } satisfies PublicStorefrontResourceAvailabilityCalendarRequest;

  try {
    const data = await api.publicStorefrontResourceAvailabilityCalendar(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |
| **id** | `string` | Resource whose month is being read | [Defaults to `undefined`] |
| **from** | `Date` | First date of the range | [Defaults to `undefined`] |
| **to** | `Date` | Last date of the range | [Defaults to `undefined`] |
| **timezone** | `string` | IANA timezone the days are grouped by | [Optional] [Defaults to `undefined`] |
| **fewLeftThreshold** | `number` | Remaining groups at or below which a day is marked few_left | [Optional] [Defaults to `undefined`] |

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
| **429** | Tenant availability-calendar budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontUpdateCartItem

> PublicCartResponse publicStorefrontUpdateCartItem(tenantId, cartId, itemId, publicUpdateCartItemRequest)

Change the quantity of a cart line.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontUpdateCartItemRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being ordered from
    tenantId: tenantId_example,
    // string | Cart the caller holds the identifier of
    cartId: cartId_example,
    // string | Cart line being changed
    itemId: itemId_example,
    // PublicUpdateCartItemRequest
    publicUpdateCartItemRequest: ...,
  } satisfies PublicStorefrontUpdateCartItemRequest;

  try {
    const data = await api.publicStorefrontUpdateCartItem(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being ordered from | [Defaults to `undefined`] |
| **cartId** | `string` | Cart the caller holds the identifier of | [Defaults to `undefined`] |
| **itemId** | `string` | Cart line being changed | [Defaults to `undefined`] |
| **publicUpdateCartItemRequest** | [PublicUpdateCartItemRequest](PublicUpdateCartItemRequest.md) |  | |

### Return type

[**PublicCartResponse**](PublicCartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Rejected quantity |  -  |
| **429** | Tenant cart budget exhausted |  -  |
| **503** | Public storefront limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

