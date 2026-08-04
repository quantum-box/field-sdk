# DealsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDeal**](DealsApi.md#createdealoperation) | **POST** /v1/erp/deals |  |
| [**getDeal**](DealsApi.md#getdeal) | **GET** /v1/erp/deals/{id} |  |
| [**listDeals**](DealsApi.md#listdeals) | **GET** /v1/erp/deals |  |
| [**updateDeal**](DealsApi.md#updatedealoperation) | **PATCH** /v1/erp/deals/{id} |  |



## createDeal

> DealResponse createDeal(createDealRequest)



### Example

```ts
import {
  Configuration,
  DealsApi,
} from '@tachyon-sdk/field';
import type { CreateDealOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DealsApi(config);

  const body = {
    // CreateDealRequest
    createDealRequest: ...,
  } satisfies CreateDealOperationRequest;

  try {
    const data = await api.createDeal(body);
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
| **createDealRequest** | [CreateDealRequest](CreateDealRequest.md) |  | |

### Return type

[**DealResponse**](DealResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Deal created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeal

> DealResponse getDeal(id)



### Example

```ts
import {
  Configuration,
  DealsApi,
} from '@tachyon-sdk/field';
import type { GetDealRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DealsApi(config);

  const body = {
    // string | Deal ID
    id: id_example,
  } satisfies GetDealRequest;

  try {
    const data = await api.getDeal(body);
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
| **id** | `string` | Deal ID | [Defaults to `undefined`] |

### Return type

[**DealResponse**](DealResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deal detail |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDeals

> DealListResponse listDeals(pipeline, stage, clientId, limit, offset)



### Example

```ts
import {
  Configuration,
  DealsApi,
} from '@tachyon-sdk/field';
import type { ListDealsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DealsApi(config);

  const body = {
    // string | Filter by pipeline name. (optional)
    pipeline: pipeline_example,
    // string | Filter by stage name. (optional)
    stage: stage_example,
    // string | Filter by client ID. (optional)
    clientId: clientId_example,
    // number | Max number of results (default 200, capped at 500). (optional)
    limit: 56,
    // number | Pagination offset (default 0). (optional)
    offset: 56,
  } satisfies ListDealsRequest;

  try {
    const data = await api.listDeals(body);
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
| **pipeline** | `string` | Filter by pipeline name. | [Optional] [Defaults to `undefined`] |
| **stage** | `string` | Filter by stage name. | [Optional] [Defaults to `undefined`] |
| **clientId** | `string` | Filter by client ID. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Max number of results (default 200, capped at 500). | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Pagination offset (default 0). | [Optional] [Defaults to `undefined`] |

### Return type

[**DealListResponse**](DealListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deal list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDeal

> DealResponse updateDeal(id, updateDealRequest)



### Example

```ts
import {
  Configuration,
  DealsApi,
} from '@tachyon-sdk/field';
import type { UpdateDealOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DealsApi(config);

  const body = {
    // string | Deal ID
    id: id_example,
    // UpdateDealRequest
    updateDealRequest: ...,
  } satisfies UpdateDealOperationRequest;

  try {
    const data = await api.updateDeal(body);
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
| **id** | `string` | Deal ID | [Defaults to `undefined`] |
| **updateDealRequest** | [UpdateDealRequest](UpdateDealRequest.md) |  | |

### Return type

[**DealResponse**](DealResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deal updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

