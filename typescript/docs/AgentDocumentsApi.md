# AgentDocumentsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**agentCreateInvoice**](AgentDocumentsApi.md#agentcreateinvoice) | **POST** /api/agent/invoices |  |
| [**agentCreateQuotation**](AgentDocumentsApi.md#agentcreatequotation) | **POST** /api/agent/quotations |  |
| [**agentGetInvoice**](AgentDocumentsApi.md#agentgetinvoice) | **GET** /api/agent/invoices/{id} |  |
| [**agentGetQuotation**](AgentDocumentsApi.md#agentgetquotation) | **GET** /api/agent/quotations/{id} |  |
| [**agentListInvoices**](AgentDocumentsApi.md#agentlistinvoices) | **GET** /api/agent/invoices |  |
| [**agentListQuotations**](AgentDocumentsApi.md#agentlistquotations) | **GET** /api/agent/quotations |  |
| [**agentSendInvoice**](AgentDocumentsApi.md#agentsendinvoice) | **POST** /api/agent/invoices/{id}/send |  |
| [**agentSendQuotation**](AgentDocumentsApi.md#agentsendquotation) | **POST** /api/agent/quotations/{id}/send |  |



## agentCreateInvoice

> InvoiceResponse agentCreateInvoice(createInvoiceRequest)



### Example

```ts
import {
  Configuration,
  AgentDocumentsApi,
} from '@tachyon-sdk/field';
import type { AgentCreateInvoiceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentDocumentsApi(config);

  const body = {
    // CreateInvoiceRequest
    createInvoiceRequest: ...,
  } satisfies AgentCreateInvoiceRequest;

  try {
    const data = await api.agentCreateInvoice(body);
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


## agentCreateQuotation

> QuotationResponse agentCreateQuotation(createQuotationRequest)



### Example

```ts
import {
  Configuration,
  AgentDocumentsApi,
} from '@tachyon-sdk/field';
import type { AgentCreateQuotationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentDocumentsApi(config);

  const body = {
    // CreateQuotationRequest
    createQuotationRequest: ...,
  } satisfies AgentCreateQuotationRequest;

  try {
    const data = await api.agentCreateQuotation(body);
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
| **createQuotationRequest** | [CreateQuotationRequest](CreateQuotationRequest.md) |  | |

### Return type

[**QuotationResponse**](QuotationResponse.md)

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


## agentGetInvoice

> InvoiceResponse agentGetInvoice(id)



### Example

```ts
import {
  Configuration,
  AgentDocumentsApi,
} from '@tachyon-sdk/field';
import type { AgentGetInvoiceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentDocumentsApi(config);

  const body = {
    // string | Invoice ID
    id: id_example,
  } satisfies AgentGetInvoiceRequest;

  try {
    const data = await api.agentGetInvoice(body);
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


## agentGetQuotation

> QuotationResponse agentGetQuotation(id)



### Example

```ts
import {
  Configuration,
  AgentDocumentsApi,
} from '@tachyon-sdk/field';
import type { AgentGetQuotationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentDocumentsApi(config);

  const body = {
    // string | Quotation ID
    id: id_example,
  } satisfies AgentGetQuotationRequest;

  try {
    const data = await api.agentGetQuotation(body);
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
| **id** | `string` | Quotation ID | [Defaults to `undefined`] |

### Return type

[**QuotationResponse**](QuotationResponse.md)

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


## agentListInvoices

> InvoiceListResponse agentListInvoices()



### Example

```ts
import {
  Configuration,
  AgentDocumentsApi,
} from '@tachyon-sdk/field';
import type { AgentListInvoicesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentDocumentsApi(config);

  try {
    const data = await api.agentListInvoices();
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


## agentListQuotations

> QuotationListResponse agentListQuotations()



### Example

```ts
import {
  Configuration,
  AgentDocumentsApi,
} from '@tachyon-sdk/field';
import type { AgentListQuotationsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentDocumentsApi(config);

  try {
    const data = await api.agentListQuotations();
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

[**QuotationListResponse**](QuotationListResponse.md)

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


## agentSendInvoice

> InvoiceResponse agentSendInvoice(id)



### Example

```ts
import {
  Configuration,
  AgentDocumentsApi,
} from '@tachyon-sdk/field';
import type { AgentSendInvoiceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentDocumentsApi(config);

  const body = {
    // string | Invoice ID
    id: id_example,
  } satisfies AgentSendInvoiceRequest;

  try {
    const data = await api.agentSendInvoice(body);
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


## agentSendQuotation

> QuotationResponse agentSendQuotation(id)



### Example

```ts
import {
  Configuration,
  AgentDocumentsApi,
} from '@tachyon-sdk/field';
import type { AgentSendQuotationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentDocumentsApi(config);

  const body = {
    // string | Quotation ID
    id: id_example,
  } satisfies AgentSendQuotationRequest;

  try {
    const data = await api.agentSendQuotation(body);
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
| **id** | `string` | Quotation ID | [Defaults to `undefined`] |

### Return type

[**QuotationResponse**](QuotationResponse.md)

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

