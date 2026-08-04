# QuotationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**convertQuotationToInvoice**](QuotationsApi.md#convertquotationtoinvoice) | **POST** /v1/erp/quotations/{id}/convert-to-invoice |  |
| [**createQuotation**](QuotationsApi.md#createquotationoperation) | **POST** /v1/erp/quotations |  |
| [**getQuotation**](QuotationsApi.md#getquotation) | **GET** /v1/erp/quotations/{id} |  |
| [**listQuotations**](QuotationsApi.md#listquotations) | **GET** /v1/erp/quotations |  |
| [**updateQuotation**](QuotationsApi.md#updatequotationoperation) | **PATCH** /v1/erp/quotations/{id} |  |



## convertQuotationToInvoice

> ConvertQuotationToInvoiceResponse convertQuotationToInvoice(id)



### Example

```ts
import {
  Configuration,
  QuotationsApi,
} from '@tachyon/field-sdk';
import type { ConvertQuotationToInvoiceRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotationsApi(config);

  const body = {
    // string
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
| **id** | `string` |  | [Defaults to `undefined`] |

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
} from '@tachyon/field-sdk';
import type { CreateQuotationOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## getQuotation

> QuotationResponse getQuotation(id)



### Example

```ts
import {
  Configuration,
  QuotationsApi,
} from '@tachyon/field-sdk';
import type { GetQuotationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotationsApi(config);

  const body = {
    // string
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
| **id** | `string` |  | [Defaults to `undefined`] |

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

> QuotationListResponse listQuotations()



### Example

```ts
import {
  Configuration,
  QuotationsApi,
} from '@tachyon/field-sdk';
import type { ListQuotationsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotationsApi(config);

  try {
    const data = await api.listQuotations();
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


## updateQuotation

> QuotationResponse updateQuotation(id, updateQuotationRequest)



### Example

```ts
import {
  Configuration,
  QuotationsApi,
} from '@tachyon/field-sdk';
import type { UpdateQuotationOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotationsApi(config);

  const body = {
    // string
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
| **id** | `string` |  | [Defaults to `undefined`] |
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

