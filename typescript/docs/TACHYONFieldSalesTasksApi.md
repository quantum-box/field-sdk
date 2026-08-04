# TACHYONFieldSalesTasksApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSalesTask**](TACHYONFieldSalesTasksApi.md#createsalestaskoperation) | **POST** /v1/erp/sales-tasks |  |
| [**deleteSalesTask**](TACHYONFieldSalesTasksApi.md#deletesalestask) | **DELETE** /v1/erp/sales-tasks/{id} |  |
| [**listSalesTasks**](TACHYONFieldSalesTasksApi.md#listsalestasks) | **GET** /v1/erp/sales-tasks |  |
| [**updateSalesTask**](TACHYONFieldSalesTasksApi.md#updatesalestaskoperation) | **PATCH** /v1/erp/sales-tasks/{id} |  |



## createSalesTask

> SalesTaskResponse createSalesTask(createSalesTaskRequest)



### Example

```ts
import {
  Configuration,
  TACHYONFieldSalesTasksApi,
} from '@tachyon/field-sdk';
import type { CreateSalesTaskOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldSalesTasksApi(config);

  const body = {
    // CreateSalesTaskRequest
    createSalesTaskRequest: ...,
  } satisfies CreateSalesTaskOperationRequest;

  try {
    const data = await api.createSalesTask(body);
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
| **createSalesTaskRequest** | [CreateSalesTaskRequest](CreateSalesTaskRequest.md) |  | |

### Return type

[**SalesTaskResponse**](SalesTaskResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Sales task created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSalesTask

> deleteSalesTask(id)



### Example

```ts
import {
  Configuration,
  TACHYONFieldSalesTasksApi,
} from '@tachyon/field-sdk';
import type { DeleteSalesTaskRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldSalesTasksApi(config);

  const body = {
    // string | Sales task ID
    id: id_example,
  } satisfies DeleteSalesTaskRequest;

  try {
    const data = await api.deleteSalesTask(body);
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
| **id** | `string` | Sales task ID | [Defaults to `undefined`] |

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
| **204** | Sales task deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSalesTasks

> SalesTaskListResponse listSalesTasks(clientId, dealId, status, limit, offset)



### Example

```ts
import {
  Configuration,
  TACHYONFieldSalesTasksApi,
} from '@tachyon/field-sdk';
import type { ListSalesTasksRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldSalesTasksApi(config);

  const body = {
    // string | Filter by client ID. (optional)
    clientId: clientId_example,
    // string | Filter by deal ID. (optional)
    dealId: dealId_example,
    // string | Filter by task status (\"open\" or \"done\"). (optional)
    status: status_example,
    // number | Max number of results (default 50, capped at 200). (optional)
    limit: 56,
    // number | Pagination offset (default 0). (optional)
    offset: 56,
  } satisfies ListSalesTasksRequest;

  try {
    const data = await api.listSalesTasks(body);
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
| **status** | `string` | Filter by task status (\&quot;open\&quot; or \&quot;done\&quot;). | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Max number of results (default 50, capped at 200). | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Pagination offset (default 0). | [Optional] [Defaults to `undefined`] |

### Return type

[**SalesTaskListResponse**](SalesTaskListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sales task list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSalesTask

> SalesTaskResponse updateSalesTask(id, updateSalesTaskRequest)



### Example

```ts
import {
  Configuration,
  TACHYONFieldSalesTasksApi,
} from '@tachyon/field-sdk';
import type { UpdateSalesTaskOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldSalesTasksApi(config);

  const body = {
    // string | Sales task ID
    id: id_example,
    // UpdateSalesTaskRequest
    updateSalesTaskRequest: ...,
  } satisfies UpdateSalesTaskOperationRequest;

  try {
    const data = await api.updateSalesTask(body);
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
| **id** | `string` | Sales task ID | [Defaults to `undefined`] |
| **updateSalesTaskRequest** | [UpdateSalesTaskRequest](UpdateSalesTaskRequest.md) |  | |

### Return type

[**SalesTaskResponse**](SalesTaskResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sales task updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

