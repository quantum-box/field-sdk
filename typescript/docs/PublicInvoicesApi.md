# PublicInvoicesApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**confirmPublicInvoicePayment**](PublicInvoicesApi.md#confirmpublicinvoicepayment) | **POST** /v1/public/invoices/{tenant_id}/{id}/payment-confirmation |  |
| [**confirmShortPublicInvoicePayment**](PublicInvoicesApi.md#confirmshortpublicinvoicepayment) | **POST** /v1/public/invoices/{id}/payment-confirmation |  |
| [**createPublicInvoiceCheckout**](PublicInvoicesApi.md#createpublicinvoicecheckout) | **POST** /v1/public/invoices/{tenant_id}/{id}/checkout |  |
| [**createPublicInvoicePaymentIntent**](PublicInvoicesApi.md#createpublicinvoicepaymentintent) | **POST** /v1/public/invoices/{tenant_id}/{id}/payment-intent |  |
| [**createShortPublicInvoiceCheckout**](PublicInvoicesApi.md#createshortpublicinvoicecheckout) | **POST** /v1/public/invoices/{id}/checkout |  |
| [**createShortPublicInvoicePaymentIntent**](PublicInvoicesApi.md#createshortpublicinvoicepaymentintent) | **POST** /v1/public/invoices/{id}/payment-intent |  |
| [**getPublicInvoice**](PublicInvoicesApi.md#getpublicinvoice) | **GET** /v1/public/invoices/{tenant_id}/{id} |  |
| [**getPublicInvoiceStripePublishableKey**](PublicInvoicesApi.md#getpublicinvoicestripepublishablekey) | **GET** /v1/public/invoices/{tenant_id}/{id}/stripe-publishable-key |  |
| [**getShortPublicInvoice**](PublicInvoicesApi.md#getshortpublicinvoice) | **GET** /v1/public/invoices/{id} |  |
| [**getShortPublicInvoiceStripePublishableKey**](PublicInvoicesApi.md#getshortpublicinvoicestripepublishablekey) | **GET** /v1/public/invoices/{id}/stripe-publishable-key |  |



## confirmPublicInvoicePayment

> PublicInvoicePaymentConfirmationResponse confirmPublicInvoicePayment(tenantId, id, publicInvoicePaymentConfirmationRequest)



### Example

```ts
import {
  Configuration,
  PublicInvoicesApi,
} from '@tachyon-sdk/field';
import type { ConfirmPublicInvoicePaymentRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInvoicesApi(config);

  const body = {
    // string | Tenant ID that owns the invoice
    tenantId: tenantId_example,
    // string | Public invoice ID
    id: id_example,
    // PublicInvoicePaymentConfirmationRequest
    publicInvoicePaymentConfirmationRequest: ...,
  } satisfies ConfirmPublicInvoicePaymentRequest;

  try {
    const data = await api.confirmPublicInvoicePayment(body);
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
| **tenantId** | `string` | Tenant ID that owns the invoice | [Defaults to `undefined`] |
| **id** | `string` | Public invoice ID | [Defaults to `undefined`] |
| **publicInvoicePaymentConfirmationRequest** | [PublicInvoicePaymentConfirmationRequest](PublicInvoicePaymentConfirmationRequest.md) |  | |

### Return type

[**PublicInvoicePaymentConfirmationResponse**](PublicInvoicePaymentConfirmationResponse.md)

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


## confirmShortPublicInvoicePayment

> PublicInvoicePaymentConfirmationResponse confirmShortPublicInvoicePayment(id, publicInvoicePaymentConfirmationRequest)



### Example

```ts
import {
  Configuration,
  PublicInvoicesApi,
} from '@tachyon-sdk/field';
import type { ConfirmShortPublicInvoicePaymentRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInvoicesApi(config);

  const body = {
    // string | Public invoice ID
    id: id_example,
    // PublicInvoicePaymentConfirmationRequest
    publicInvoicePaymentConfirmationRequest: ...,
  } satisfies ConfirmShortPublicInvoicePaymentRequest;

  try {
    const data = await api.confirmShortPublicInvoicePayment(body);
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
| **id** | `string` | Public invoice ID | [Defaults to `undefined`] |
| **publicInvoicePaymentConfirmationRequest** | [PublicInvoicePaymentConfirmationRequest](PublicInvoicePaymentConfirmationRequest.md) |  | |

### Return type

[**PublicInvoicePaymentConfirmationResponse**](PublicInvoicePaymentConfirmationResponse.md)

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


## createPublicInvoiceCheckout

> PublicInvoiceCheckoutResponse createPublicInvoiceCheckout(tenantId, id)



### Example

```ts
import {
  Configuration,
  PublicInvoicesApi,
} from '@tachyon-sdk/field';
import type { CreatePublicInvoiceCheckoutRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInvoicesApi(config);

  const body = {
    // string | Tenant ID that owns the invoice
    tenantId: tenantId_example,
    // string | Public invoice ID
    id: id_example,
  } satisfies CreatePublicInvoiceCheckoutRequest;

  try {
    const data = await api.createPublicInvoiceCheckout(body);
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
| **tenantId** | `string` | Tenant ID that owns the invoice | [Defaults to `undefined`] |
| **id** | `string` | Public invoice ID | [Defaults to `undefined`] |

### Return type

[**PublicInvoiceCheckoutResponse**](PublicInvoiceCheckoutResponse.md)

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


## createPublicInvoicePaymentIntent

> PublicInvoicePaymentIntentResponse createPublicInvoicePaymentIntent(tenantId, id, apiKey, publicApiKey)



### Example

```ts
import {
  Configuration,
  PublicInvoicesApi,
} from '@tachyon-sdk/field';
import type { CreatePublicInvoicePaymentIntentRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInvoicesApi(config);

  const body = {
    // string | Tenant ID that owns the invoice
    tenantId: tenantId_example,
    // string | Public invoice ID
    id: id_example,
    // string | Optional public API key (legacy) (optional)
    apiKey: apiKey_example,
    // string | Optional public API key (optional)
    publicApiKey: publicApiKey_example,
  } satisfies CreatePublicInvoicePaymentIntentRequest;

  try {
    const data = await api.createPublicInvoicePaymentIntent(body);
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
| **tenantId** | `string` | Tenant ID that owns the invoice | [Defaults to `undefined`] |
| **id** | `string` | Public invoice ID | [Defaults to `undefined`] |
| **apiKey** | `string` | Optional public API key (legacy) | [Optional] [Defaults to `undefined`] |
| **publicApiKey** | `string` | Optional public API key | [Optional] [Defaults to `undefined`] |

### Return type

[**PublicInvoicePaymentIntentResponse**](PublicInvoicePaymentIntentResponse.md)

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


## createShortPublicInvoiceCheckout

> PublicInvoiceCheckoutResponse createShortPublicInvoiceCheckout(id)



### Example

```ts
import {
  Configuration,
  PublicInvoicesApi,
} from '@tachyon-sdk/field';
import type { CreateShortPublicInvoiceCheckoutRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInvoicesApi(config);

  const body = {
    // string | Public invoice ID
    id: id_example,
  } satisfies CreateShortPublicInvoiceCheckoutRequest;

  try {
    const data = await api.createShortPublicInvoiceCheckout(body);
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
| **id** | `string` | Public invoice ID | [Defaults to `undefined`] |

### Return type

[**PublicInvoiceCheckoutResponse**](PublicInvoiceCheckoutResponse.md)

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


## createShortPublicInvoicePaymentIntent

> PublicInvoicePaymentIntentResponse createShortPublicInvoicePaymentIntent(id, apiKey, publicApiKey)



### Example

```ts
import {
  Configuration,
  PublicInvoicesApi,
} from '@tachyon-sdk/field';
import type { CreateShortPublicInvoicePaymentIntentRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInvoicesApi(config);

  const body = {
    // string | Public invoice ID
    id: id_example,
    // string | Optional public API key (legacy) (optional)
    apiKey: apiKey_example,
    // string | Optional public API key (optional)
    publicApiKey: publicApiKey_example,
  } satisfies CreateShortPublicInvoicePaymentIntentRequest;

  try {
    const data = await api.createShortPublicInvoicePaymentIntent(body);
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
| **id** | `string` | Public invoice ID | [Defaults to `undefined`] |
| **apiKey** | `string` | Optional public API key (legacy) | [Optional] [Defaults to `undefined`] |
| **publicApiKey** | `string` | Optional public API key | [Optional] [Defaults to `undefined`] |

### Return type

[**PublicInvoicePaymentIntentResponse**](PublicInvoicePaymentIntentResponse.md)

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


## getPublicInvoice

> PublicInvoiceResponse getPublicInvoice(tenantId, id)



### Example

```ts
import {
  Configuration,
  PublicInvoicesApi,
} from '@tachyon-sdk/field';
import type { GetPublicInvoiceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInvoicesApi(config);

  const body = {
    // string | Tenant ID that owns the invoice
    tenantId: tenantId_example,
    // string | Public invoice ID
    id: id_example,
  } satisfies GetPublicInvoiceRequest;

  try {
    const data = await api.getPublicInvoice(body);
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
| **tenantId** | `string` | Tenant ID that owns the invoice | [Defaults to `undefined`] |
| **id** | `string` | Public invoice ID | [Defaults to `undefined`] |

### Return type

[**PublicInvoiceResponse**](PublicInvoiceResponse.md)

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


## getPublicInvoiceStripePublishableKey

> PublicInvoiceStripePublishableKeyResponse getPublicInvoiceStripePublishableKey(tenantId, id, apiKey, publicApiKey)



### Example

```ts
import {
  Configuration,
  PublicInvoicesApi,
} from '@tachyon-sdk/field';
import type { GetPublicInvoiceStripePublishableKeyRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInvoicesApi(config);

  const body = {
    // string | Tenant ID that owns the invoice
    tenantId: tenantId_example,
    // string | Public invoice ID
    id: id_example,
    // string | Optional public API key (legacy) (optional)
    apiKey: apiKey_example,
    // string | Optional public API key (optional)
    publicApiKey: publicApiKey_example,
  } satisfies GetPublicInvoiceStripePublishableKeyRequest;

  try {
    const data = await api.getPublicInvoiceStripePublishableKey(body);
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
| **tenantId** | `string` | Tenant ID that owns the invoice | [Defaults to `undefined`] |
| **id** | `string` | Public invoice ID | [Defaults to `undefined`] |
| **apiKey** | `string` | Optional public API key (legacy) | [Optional] [Defaults to `undefined`] |
| **publicApiKey** | `string` | Optional public API key | [Optional] [Defaults to `undefined`] |

### Return type

[**PublicInvoiceStripePublishableKeyResponse**](PublicInvoiceStripePublishableKeyResponse.md)

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


## getShortPublicInvoice

> PublicInvoiceResponse getShortPublicInvoice(id)



### Example

```ts
import {
  Configuration,
  PublicInvoicesApi,
} from '@tachyon-sdk/field';
import type { GetShortPublicInvoiceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInvoicesApi(config);

  const body = {
    // string | Public invoice ID
    id: id_example,
  } satisfies GetShortPublicInvoiceRequest;

  try {
    const data = await api.getShortPublicInvoice(body);
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
| **id** | `string` | Public invoice ID | [Defaults to `undefined`] |

### Return type

[**PublicInvoiceResponse**](PublicInvoiceResponse.md)

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


## getShortPublicInvoiceStripePublishableKey

> PublicInvoiceStripePublishableKeyResponse getShortPublicInvoiceStripePublishableKey(id, apiKey, publicApiKey)



### Example

```ts
import {
  Configuration,
  PublicInvoicesApi,
} from '@tachyon-sdk/field';
import type { GetShortPublicInvoiceStripePublishableKeyRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInvoicesApi(config);

  const body = {
    // string | Public invoice ID
    id: id_example,
    // string | Optional public API key (legacy) (optional)
    apiKey: apiKey_example,
    // string | Optional public API key (optional)
    publicApiKey: publicApiKey_example,
  } satisfies GetShortPublicInvoiceStripePublishableKeyRequest;

  try {
    const data = await api.getShortPublicInvoiceStripePublishableKey(body);
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
| **id** | `string` | Public invoice ID | [Defaults to `undefined`] |
| **apiKey** | `string` | Optional public API key (legacy) | [Optional] [Defaults to `undefined`] |
| **publicApiKey** | `string` | Optional public API key | [Optional] [Defaults to `undefined`] |

### Return type

[**PublicInvoiceStripePublishableKeyResponse**](PublicInvoiceStripePublishableKeyResponse.md)

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

