# QuotationsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acceptOrderByQuotation**](QuotationsApi.md#acceptorderbyquotation) | **POST** /v1/erp/quotations/{id}/accept-order | REST fallback for the quarantined &#x60;acceptOrderByQuotes&#x60; GraphQL mutation (PLT-3424): accept a quotation and idempotently create the matching order. |
| [**convertQuotationToInvoice**](QuotationsApi.md#convertquotationtoinvoice) | **POST** /v1/erp/quotations/{id}/convert-to-invoice |  |
| [**createQuotation**](QuotationsApi.md#createquotationoperation) | **POST** /v1/erp/quotations |  |
| [**createQuotationPdf**](QuotationsApi.md#createquotationpdf) | **POST** /v1/erp/quotations/{id}/pdf | REST fallback for the quarantined &#x60;createQuotePdf&#x60; GraphQL mutation (PLT-3424): generate a quotation PDF and return a signed URL. |
| [**getQuotation**](QuotationsApi.md#getquotation) | **GET** /v1/erp/quotations/{id} |  |
| [**listQuotations**](QuotationsApi.md#listquotations) | **GET** /v1/erp/quotations |  |
| [**updateQuotation**](QuotationsApi.md#updatequotationoperation) | **PATCH** /v1/erp/quotations/{id} |  |



## acceptOrderByQuotation

> AcceptOrderByQuotationResponse acceptOrderByQuotation(id)

REST fallback for the quarantined &#x60;acceptOrderByQuotes&#x60; GraphQL mutation (PLT-3424): accept a quotation and idempotently create the matching order.

### Example

```ts
import {
  Configuration,
  QuotationsApi,
} from '@tachyon-sdk/field';
import type { AcceptOrderByQuotationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotationsApi(config);

  const body = {
    // string | Quotation ID
    id: id_example,
  } satisfies AcceptOrderByQuotationRequest;

  try {
    const data = await api.acceptOrderByQuotation(body);
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

[**AcceptOrderByQuotationResponse**](AcceptOrderByQuotationResponse.md)

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


## convertQuotationToInvoice

> ConvertQuotationToInvoiceResponse convertQuotationToInvoice(id)



### Example

```ts
import {
  Configuration,
  QuotationsApi,
} from '@tachyon-sdk/field';
import type { ConvertQuotationToInvoiceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotationsApi(config);

  const body = {
    // string | Quotation ID
    id: id_example,
  } satisfies ConvertQuotationToInvoiceRequest;

  try {
    const data = await api.convertQuotationToInvoice(body);
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

[**ConvertQuotationToInvoiceResponse**](ConvertQuotationToInvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createQuotation

> QuotationResponse createQuotation(createQuotationRequest)



### Example

```ts
import {
  Configuration,
  QuotationsApi,
} from '@tachyon-sdk/field';
import type { CreateQuotationOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotationsApi(config);

  const body = {
    // CreateQuotationRequest
    createQuotationRequest: ...,
  } satisfies CreateQuotationOperationRequest;

  try {
    const data = await api.createQuotation(body);
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


## createQuotationPdf

> QuotationPdfResponse createQuotationPdf(id)

REST fallback for the quarantined &#x60;createQuotePdf&#x60; GraphQL mutation (PLT-3424): generate a quotation PDF and return a signed URL.

### Example

```ts
import {
  Configuration,
  QuotationsApi,
} from '@tachyon-sdk/field';
import type { CreateQuotationPdfRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotationsApi(config);

  const body = {
    // string | Quotation ID
    id: id_example,
  } satisfies CreateQuotationPdfRequest;

  try {
    const data = await api.createQuotationPdf(body);
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

[**QuotationPdfResponse**](QuotationPdfResponse.md)

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


## getQuotation

> QuotationResponse getQuotation(id)



### Example

```ts
import {
  Configuration,
  QuotationsApi,
} from '@tachyon-sdk/field';
import type { GetQuotationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotationsApi(config);

  const body = {
    // string | Quotation ID
    id: id_example,
  } satisfies GetQuotationRequest;

  try {
    const data = await api.getQuotation(body);
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


## listQuotations

> QuotationListResponse listQuotations(status, clientId, limit, offset)



### Example

```ts
import {
  Configuration,
  QuotationsApi,
} from '@tachyon-sdk/field';
import type { ListQuotationsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotationsApi(config);

  const body = {
    // string | Filter by quotation status. (optional)
    status: status_example,
    // string | Filter by client ID. (optional)
    clientId: clientId_example,
    // number | Maximum number of quotations to return. (optional)
    limit: 56,
    // number | Number of quotations to skip. (optional)
    offset: 56,
  } satisfies ListQuotationsRequest;

  try {
    const data = await api.listQuotations(body);
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
| **status** | `string` | Filter by quotation status. | [Optional] [Defaults to `undefined`] |
| **clientId** | `string` | Filter by client ID. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of quotations to return. | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Number of quotations to skip. | [Optional] [Defaults to `undefined`] |

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


## updateQuotation

> QuotationResponse updateQuotation(id, updateQuotationRequest)



### Example

```ts
import {
  Configuration,
  QuotationsApi,
} from '@tachyon-sdk/field';
import type { UpdateQuotationOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotationsApi(config);

  const body = {
    // string | Quotation ID
    id: id_example,
    // UpdateQuotationRequest
    updateQuotationRequest: ...,
  } satisfies UpdateQuotationOperationRequest;

  try {
    const data = await api.updateQuotation(body);
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
| **updateQuotationRequest** | [UpdateQuotationRequest](UpdateQuotationRequest.md) |  | |

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
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

