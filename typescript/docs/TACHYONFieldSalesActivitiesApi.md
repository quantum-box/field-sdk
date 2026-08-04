# TACHYONFieldSalesActivitiesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createActivity**](TACHYONFieldSalesActivitiesApi.md#createactivityoperation) | **POST** /v1/erp/sales-activities |  |
| [**deleteActivity**](TACHYONFieldSalesActivitiesApi.md#deleteactivity) | **DELETE** /v1/erp/sales-activities/{id} |  |
| [**listActivities**](TACHYONFieldSalesActivitiesApi.md#listactivities) | **GET** /v1/erp/sales-activities |  |



## createActivity

> ActivityResponse createActivity(createActivityRequest)



### Example

```ts
import {
  Configuration,
  TACHYONFieldSalesActivitiesApi,
} from '@tachyon/field-sdk';
import type { CreateActivityOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldSalesActivitiesApi(config);

  const body = {
    // CreateActivityRequest
    createActivityRequest: ...,
  } satisfies CreateActivityOperationRequest;

  try {
    const data = await api.createActivity(body);
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
| **createActivityRequest** | [CreateActivityRequest](CreateActivityRequest.md) |  | |

### Return type

[**ActivityResponse**](ActivityResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Sales activity created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteActivity

> deleteActivity(id)



### Example

```ts
import {
  Configuration,
  TACHYONFieldSalesActivitiesApi,
} from '@tachyon/field-sdk';
import type { DeleteActivityRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldSalesActivitiesApi(config);

  const body = {
    // string | Sales activity ID
    id: id_example,
  } satisfies DeleteActivityRequest;

  try {
    const data = await api.deleteActivity(body);
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
| **id** | `string` | Sales activity ID | [Defaults to `undefined`] |

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
| **204** | Sales activity deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listActivities

> ActivityListResponse listActivities(clientId, dealId, limit, offset)



### Example

```ts
import {
  Configuration,
  TACHYONFieldSalesActivitiesApi,
} from '@tachyon/field-sdk';
import type { ListActivitiesRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldSalesActivitiesApi(config);

  const body = {
    // string | Filter by client ID. (optional)
    clientId: clientId_example,
    // string | Filter by deal ID. (optional)
    dealId: dealId_example,
    // number | Max number of results (default 50, capped at 200). (optional)
    limit: 56,
    // number | Pagination offset (default 0). (optional)
    offset: 56,
  } satisfies ListActivitiesRequest;

  try {
    const data = await api.listActivities(body);
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
| **clientId** | `string` | Filter by client ID. | [Optional] [Defaults to `undefined`] |
| **dealId** | `string` | Filter by deal ID. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Max number of results (default 50, capped at 200). | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Pagination offset (default 0). | [Optional] [Defaults to `undefined`] |

### Return type

[**ActivityListResponse**](ActivityListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sales activity list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

