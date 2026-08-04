# InvoicesApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createInvoice**](InvoicesApi.md#createinvoiceoperation) | **POST** /v1/invoices |  |
| [**deleteInvoice**](InvoicesApi.md#deleteinvoice) | **DELETE** /v1/invoices/{id} |  |
| [**fulfillInvoice**](InvoicesApi.md#fulfillinvoice) | **POST** /v1/invoices/{id}/fulfill |  |
| [**getInvoice**](InvoicesApi.md#getinvoice) | **GET** /v1/invoices/{id} |  |
| [**listInvoices**](InvoicesApi.md#listinvoices) | **GET** /v1/invoices |  |
| [**listSquarePaymentReconciliations**](InvoicesApi.md#listsquarepaymentreconciliations) | **GET** /v1/invoice-reconciliations/square-payments |  |
| [**reconcileSquarePayment**](InvoicesApi.md#reconcilesquarepaymentoperation) | **POST** /v1/invoice-reconciliations/square-payments/{square_payment_id}/reconcile |  |
| [**resendInvoicePaymentLink**](InvoicesApi.md#resendinvoicepaymentlink) | **POST** /v1/invoices/{id}/payment-link/resend |  |
| [**updateInvoice**](InvoicesApi.md#updateinvoiceoperation) | **PATCH** /v1/invoices/{id} |  |
| [**updateInvoiceFollowUpStatus**](InvoicesApi.md#updateinvoicefollowupstatusoperation) | **POST** /v1/invoices/{id}/follow-up-status |  |



## createInvoice

> InvoiceResponse createInvoice(createInvoiceRequest)



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { CreateInvoiceOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  const body = {
    // CreateInvoiceRequest
    createInvoiceRequest: ...,
  } satisfies CreateInvoiceOperationRequest;

  try {
    const data = await api.createInvoice(body);
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
| **createInvoiceRequest** | [CreateInvoiceRequest](CreateInvoiceRequest.md) |  | |

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

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


## deleteInvoice

> DeleteInvoiceResponse deleteInvoice(id)



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { DeleteInvoiceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteInvoiceRequest;

  try {
    const data = await api.deleteInvoice(body);
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

[**DeleteInvoiceResponse**](DeleteInvoiceResponse.md)

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


## fulfillInvoice

> InvoiceResponse fulfillInvoice(id)



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { FulfillInvoiceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies FulfillInvoiceRequest;

  try {
    const data = await api.fulfillInvoice(body);
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

[**InvoiceResponse**](InvoiceResponse.md)

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


## getInvoice

> InvoiceResponse getInvoice(id)



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { GetInvoiceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetInvoiceRequest;

  try {
    const data = await api.getInvoice(body);
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

[**InvoiceResponse**](InvoiceResponse.md)

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


## listInvoices

> InvoiceListResponse listInvoices()



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { ListInvoicesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  try {
    const data = await api.listInvoices();
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

[**InvoiceListResponse**](InvoiceListResponse.md)

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


## listSquarePaymentReconciliations

> SquarePaymentReconciliationListResponse listSquarePaymentReconciliations()



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { ListSquarePaymentReconciliationsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  try {
    const data = await api.listSquarePaymentReconciliations();
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

[**SquarePaymentReconciliationListResponse**](SquarePaymentReconciliationListResponse.md)

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


## reconcileSquarePayment

> SquarePaymentReconciliationResponse reconcileSquarePayment(squarePaymentId, reconcileSquarePaymentRequest)



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { ReconcileSquarePaymentOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  const body = {
    // string
    squarePaymentId: squarePaymentId_example,
    // ReconcileSquarePaymentRequest
    reconcileSquarePaymentRequest: ...,
  } satisfies ReconcileSquarePaymentOperationRequest;

  try {
    const data = await api.reconcileSquarePayment(body);
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
| **squarePaymentId** | `string` |  | [Defaults to `undefined`] |
| **reconcileSquarePaymentRequest** | [ReconcileSquarePaymentRequest](ReconcileSquarePaymentRequest.md) |  | |

### Return type

[**SquarePaymentReconciliationResponse**](SquarePaymentReconciliationResponse.md)

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


## resendInvoicePaymentLink

> InvoiceResponse resendInvoicePaymentLink(id, resendPaymentLinkRequest)



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { ResendInvoicePaymentLinkRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  const body = {
    // string
    id: id_example,
    // ResendPaymentLinkRequest
    resendPaymentLinkRequest: ...,
  } satisfies ResendInvoicePaymentLinkRequest;

  try {
    const data = await api.resendInvoicePaymentLink(body);
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
| **resendPaymentLinkRequest** | [ResendPaymentLinkRequest](ResendPaymentLinkRequest.md) |  | |

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

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


## updateInvoice

> InvoiceResponse updateInvoice(id, updateInvoiceRequest)



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { UpdateInvoiceOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateInvoiceRequest
    updateInvoiceRequest: ...,
  } satisfies UpdateInvoiceOperationRequest;

  try {
    const data = await api.updateInvoice(body);
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
| **updateInvoiceRequest** | [UpdateInvoiceRequest](UpdateInvoiceRequest.md) |  | |

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

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


## updateInvoiceFollowUpStatus

> InvoiceResponse updateInvoiceFollowUpStatus(id, updateInvoiceFollowUpStatusRequest)



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { UpdateInvoiceFollowUpStatusOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateInvoiceFollowUpStatusRequest
    updateInvoiceFollowUpStatusRequest: ...,
  } satisfies UpdateInvoiceFollowUpStatusOperationRequest;

  try {
    const data = await api.updateInvoiceFollowUpStatus(body);
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
| **updateInvoiceFollowUpStatusRequest** | [UpdateInvoiceFollowUpStatusRequest](UpdateInvoiceFollowUpStatusRequest.md) |  | |

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

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

