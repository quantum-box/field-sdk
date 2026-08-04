# VendorsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createVendor**](VendorsApi.md#createvendoroperation) | **POST** /v1/erp/vendors |  |
| [**getVendor**](VendorsApi.md#getvendor) | **GET** /v1/erp/vendors/{id} |  |
| [**listVendors**](VendorsApi.md#listvendors) | **GET** /v1/erp/vendors |  |
| [**updateVendor**](VendorsApi.md#updatevendoroperation) | **PATCH** /v1/erp/vendors/{id} |  |



## createVendor

> VendorResponse createVendor(createVendorRequest)



### Example

```ts
import {
  Configuration,
  VendorsApi,
} from '@tachyon/field-sdk';
import type { CreateVendorOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VendorsApi(config);

  const body = {
    // CreateVendorRequest
    createVendorRequest: ...,
  } satisfies CreateVendorOperationRequest;

  try {
    const data = await api.createVendor(body);
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
| **createVendorRequest** | [CreateVendorRequest](CreateVendorRequest.md) |  | |

### Return type

[**VendorResponse**](VendorResponse.md)

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


## getVendor

> VendorResponse getVendor(id)



### Example

```ts
import {
  Configuration,
  VendorsApi,
} from '@tachyon/field-sdk';
import type { GetVendorRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VendorsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetVendorRequest;

  try {
    const data = await api.getVendor(body);
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

[**VendorResponse**](VendorResponse.md)

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


## listVendors

> VendorListResponse listVendors(status, search, limit, offset)



### Example

```ts
import {
  Configuration,
  VendorsApi,
} from '@tachyon/field-sdk';
import type { ListVendorsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VendorsApi(config);

  const body = {
    // string (optional)
    status: status_example,
    // string (optional)
    search: search_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListVendorsRequest;

  try {
    const data = await api.listVendors(body);
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
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**VendorListResponse**](VendorListResponse.md)

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


## updateVendor

> VendorResponse updateVendor(id, updateVendorRequest)



### Example

```ts
import {
  Configuration,
  VendorsApi,
} from '@tachyon/field-sdk';
import type { UpdateVendorOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VendorsApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateVendorRequest
    updateVendorRequest: ...,
  } satisfies UpdateVendorOperationRequest;

  try {
    const data = await api.updateVendor(body);
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
| **updateVendorRequest** | [UpdateVendorRequest](UpdateVendorRequest.md) |  | |

### Return type

[**VendorResponse**](VendorResponse.md)

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

