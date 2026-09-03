# InvoicesApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createInvoice**](InvoicesApi.md#createinvoiceoperation) | **POST** /v1/invoices |  |
| [**deleteInvoice**](InvoicesApi.md#deleteinvoice) | **DELETE** /v1/invoices/{id} |  |
| [**fulfillInvoice**](InvoicesApi.md#fulfillinvoice) | **POST** /v1/invoices/{id}/fulfill |  |
| [**getInvoice**](InvoicesApi.md#getinvoice) | **GET** /v1/invoices/{id} |  |
| [**getInvoiceVoidEligibility**](InvoicesApi.md#getinvoicevoideligibility) | **GET** /v1/invoices/{invoice_id}/void-eligibility |  |
| [**listInvoices**](InvoicesApi.md#listinvoices) | **GET** /v1/invoices |  |
| [**listSquarePaymentReconciliations**](InvoicesApi.md#listsquarepaymentreconciliations) | **GET** /v1/invoice-reconciliations/square-payments |  |
| [**reconcileSquarePayment**](InvoicesApi.md#reconcilesquarepaymentoperation) | **POST** /v1/invoice-reconciliations/square-payments/{square_payment_id}/reconcile |  |
| [**resendInvoicePaymentLink**](InvoicesApi.md#resendinvoicepaymentlink) | **POST** /v1/invoices/{id}/payment-link/resend |  |
| [**updateInvoice**](InvoicesApi.md#updateinvoiceoperation) | **PATCH** /v1/invoices/{id} |  |
| [**updateInvoiceFollowUpStatus**](InvoicesApi.md#updateinvoicefollowupstatusoperation) | **POST** /v1/invoices/{id}/follow-up-status |  |
| [**voidInvoice**](InvoicesApi.md#voidinvoiceoperation) | **POST** /v1/invoices/{invoice_id}/void |  |



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

> deleteInvoice(id)



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
    // string | Invoice ID
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
| **id** | `string` | Invoice ID | [Defaults to `undefined`] |

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
| **400** | Invoice deletion is disabled; use a void or reversal workflow |  -  |
| **404** | Invoice not found |  -  |

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
    // string | Invoice ID
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
| **id** | `string` | Invoice ID | [Defaults to `undefined`] |

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
    // string | Invoice ID
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
| **id** | `string` | Invoice ID | [Defaults to `undefined`] |

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


## getInvoiceVoidEligibility

> InvoiceVoidEligibilityResponse getInvoiceVoidEligibility(invoiceId)



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { GetInvoiceVoidEligibilityRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  const body = {
    // string | Invoice ID
    invoiceId: invoiceId_example,
  } satisfies GetInvoiceVoidEligibilityRequest;

  try {
    const data = await api.getInvoiceVoidEligibility(body);
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
| **invoiceId** | `string` | Invoice ID | [Defaults to `undefined`] |

### Return type

[**InvoiceVoidEligibilityResponse**](InvoiceVoidEligibilityResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listInvoices

> InvoiceListResponse listInvoices(status, clientId, sourceType, sourceId, reason, limit, offset)



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

  const body = {
    // string | Filter by invoice status. (optional)
    status: status_example,
    // string | Filter by client ID. (optional)
    clientId: clientId_example,
    // string | Return invoices raised from this record kind. One of `reservation`, `order`, `subscription`, `quotation`, `contract`.  Named in camelCase to match the JSON bodies, with the endpoint\'s older snake_case spelling accepted as an alias so both conventions work. (optional)
    sourceType: sourceType_example,
    // string | Return invoices raised from this record. Combine with `sourceType` to answer whether a given record has already been billed. (optional)
    sourceId: sourceId_example,
    // string | Return invoices carrying this caller-defined classification on any of their sources. Matched exactly. (optional)
    reason: reason_example,
    // number | Maximum number of invoices to return. (optional)
    limit: 56,
    // number | Number of invoices to skip. (optional)
    offset: 56,
  } satisfies ListInvoicesRequest;

  try {
    const data = await api.listInvoices(body);
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
| **status** | `string` | Filter by invoice status. | [Optional] [Defaults to `undefined`] |
| **clientId** | `string` | Filter by client ID. | [Optional] [Defaults to `undefined`] |
| **sourceType** | `string` | Return invoices raised from this record kind. One of &#x60;reservation&#x60;, &#x60;order&#x60;, &#x60;subscription&#x60;, &#x60;quotation&#x60;, &#x60;contract&#x60;.  Named in camelCase to match the JSON bodies, with the endpoint\&#39;s older snake_case spelling accepted as an alias so both conventions work. | [Optional] [Defaults to `undefined`] |
| **sourceId** | `string` | Return invoices raised from this record. Combine with &#x60;sourceType&#x60; to answer whether a given record has already been billed. | [Optional] [Defaults to `undefined`] |
| **reason** | `string` | Return invoices carrying this caller-defined classification on any of their sources. Matched exactly. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of invoices to return. | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Number of invoices to skip. | [Optional] [Defaults to `undefined`] |

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

> SquarePaymentReconciliationListResponse listSquarePaymentReconciliations(status, limit, offset)



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

  const body = {
    // string | Filter by reconciliation status. (optional)
    status: status_example,
    // number | Maximum number of reconciliations to return. (optional)
    limit: 56,
    // number | Number of reconciliations to skip. (optional)
    offset: 56,
  } satisfies ListSquarePaymentReconciliationsRequest;

  try {
    const data = await api.listSquarePaymentReconciliations(body);
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
| **status** | `string` | Filter by reconciliation status. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of reconciliations to return. | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Number of reconciliations to skip. | [Optional] [Defaults to `undefined`] |

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
    // string | Square payment ID to reconcile
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
| **squarePaymentId** | `string` | Square payment ID to reconcile | [Defaults to `undefined`] |
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
    // string | Invoice ID
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
| **id** | `string` | Invoice ID | [Defaults to `undefined`] |
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
    // string | Invoice ID
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
| **id** | `string` | Invoice ID | [Defaults to `undefined`] |
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
    // string | Invoice ID
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
| **id** | `string` | Invoice ID | [Defaults to `undefined`] |
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


## voidInvoice

> VoidInvoiceResponse voidInvoice(invoiceId, idempotencyKey, voidInvoiceRequest)



### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@tachyon-sdk/field';
import type { VoidInvoiceOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoicesApi(config);

  const body = {
    // string | Invoice ID
    invoiceId: invoiceId_example,
    // string | Required retry key (1-128 bytes after trimming)
    idempotencyKey: idempotencyKey_example,
    // VoidInvoiceRequest
    voidInvoiceRequest: ...,
  } satisfies VoidInvoiceOperationRequest;

  try {
    const data = await api.voidInvoice(body);
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
| **invoiceId** | `string` | Invoice ID | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Required retry key (1-128 bytes after trimming) | [Defaults to `undefined`] |
| **voidInvoiceRequest** | [VoidInvoiceRequest](VoidInvoiceRequest.md) |  | |

### Return type

[**VoidInvoiceResponse**](VoidInvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **404** |  |  -  |
| **409** |  |  -  |
| **503** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

