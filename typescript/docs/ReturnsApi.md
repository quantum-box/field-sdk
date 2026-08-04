# ReturnsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authorizeReturnRequest**](ReturnsApi.md#authorizereturnrequest) | **POST** /v1/erp/return-requests/{id}/authorize |  |
| [**cancelReturnRequest**](ReturnsApi.md#cancelreturnrequest) | **POST** /v1/erp/return-requests/{id}/cancel |  |
| [**completeReturnRequest**](ReturnsApi.md#completereturnrequest) | **POST** /v1/erp/return-requests/{id}/complete |  |
| [**createReturnRequest**](ReturnsApi.md#createreturnrequest) | **POST** /v1/erp/return-requests |  |
| [**getReturnRequest**](ReturnsApi.md#getreturnrequest) | **GET** /v1/erp/return-requests/{id} |  |
| [**listReturnRequests**](ReturnsApi.md#listreturnrequests) | **GET** /v1/erp/return-requests |  |
| [**recordReturnInspectionDisposition**](ReturnsApi.md#recordreturninspectiondisposition) | **POST** /v1/erp/return-requests/{id}/inspection-disposition |  |
| [**rejectReturnRequest**](ReturnsApi.md#rejectreturnrequest) | **POST** /v1/erp/return-requests/{id}/reject |  |
| [**startReturnInspection**](ReturnsApi.md#startreturninspection) | **POST** /v1/erp/return-requests/{id}/start-inspection |  |



## authorizeReturnRequest

> ReturnRequestResponse authorizeReturnRequest(id)



### Example

```ts
import {
  Configuration,
  ReturnsApi,
} from '@tachyon-sdk/field';
import type { AuthorizeReturnRequestRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReturnsApi(config);

  const body = {
    // string | Return request id
    id: id_example,
  } satisfies AuthorizeReturnRequestRequest;

  try {
    const data = await api.authorizeReturnRequest(body);
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
| **id** | `string` | Return request id | [Defaults to `undefined`] |

### Return type

[**ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Authorize a pending return request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelReturnRequest

> ReturnRequestResponse cancelReturnRequest(id)



### Example

```ts
import {
  Configuration,
  ReturnsApi,
} from '@tachyon-sdk/field';
import type { CancelReturnRequestRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReturnsApi(config);

  const body = {
    // string | Return request id
    id: id_example,
  } satisfies CancelReturnRequestRequest;

  try {
    const data = await api.cancelReturnRequest(body);
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
| **id** | `string` | Return request id | [Defaults to `undefined`] |

### Return type

[**ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cancel a return request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## completeReturnRequest

> ReturnRequestResponse completeReturnRequest(id)



### Example

```ts
import {
  Configuration,
  ReturnsApi,
} from '@tachyon-sdk/field';
import type { CompleteReturnRequestRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReturnsApi(config);

  const body = {
    // string | Return request id
    id: id_example,
  } satisfies CompleteReturnRequestRequest;

  try {
    const data = await api.completeReturnRequest(body);
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
| **id** | `string` | Return request id | [Defaults to `undefined`] |

### Return type

[**ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Complete a return request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createReturnRequest

> ReturnRequestResponse createReturnRequest(createReturnRequest)



### Example

```ts
import {
  Configuration,
  ReturnsApi,
} from '@tachyon-sdk/field';
import type { CreateReturnRequestRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReturnsApi(config);

  const body = {
    // CreateReturnRequest
    createReturnRequest: ...,
  } satisfies CreateReturnRequestRequest;

  try {
    const data = await api.createReturnRequest(body);
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
| **createReturnRequest** | [CreateReturnRequest](CreateReturnRequest.md) |  | |

### Return type

[**ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Create a new return request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReturnRequest

> ReturnRequestResponse getReturnRequest(id)



### Example

```ts
import {
  Configuration,
  ReturnsApi,
} from '@tachyon-sdk/field';
import type { GetReturnRequestRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReturnsApi(config);

  const body = {
    // string | Return request id
    id: id_example,
  } satisfies GetReturnRequestRequest;

  try {
    const data = await api.getReturnRequest(body);
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
| **id** | `string` | Return request id | [Defaults to `undefined`] |

### Return type

[**ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Get a return request by id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listReturnRequests

> ReturnRequestListResponse listReturnRequests(status, orderRefKind, orderRefId)



### Example

```ts
import {
  Configuration,
  ReturnsApi,
} from '@tachyon-sdk/field';
import type { ListReturnRequestsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReturnsApi(config);

  const body = {
    // string (optional)
    status: status_example,
    // string (optional)
    orderRefKind: orderRefKind_example,
    // string (optional)
    orderRefId: orderRefId_example,
  } satisfies ListReturnRequestsRequest;

  try {
    const data = await api.listReturnRequests(body);
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
| **orderRefKind** | `string` |  | [Optional] [Defaults to `undefined`] |
| **orderRefId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ReturnRequestListResponse**](ReturnRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List return requests, optionally filtered by status or order reference |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## recordReturnInspectionDisposition

> ReturnRequestResponse recordReturnInspectionDisposition(id, inspectionDispositionRequest)



### Example

```ts
import {
  Configuration,
  ReturnsApi,
} from '@tachyon-sdk/field';
import type { RecordReturnInspectionDispositionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReturnsApi(config);

  const body = {
    // string | Return request id
    id: id_example,
    // InspectionDispositionRequest
    inspectionDispositionRequest: ...,
  } satisfies RecordReturnInspectionDispositionRequest;

  try {
    const data = await api.recordReturnInspectionDisposition(body);
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
| **id** | `string` | Return request id | [Defaults to `undefined`] |
| **inspectionDispositionRequest** | [InspectionDispositionRequest](InspectionDispositionRequest.md) |  | |

### Return type

[**ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Record per-line inspection dispositions for a return request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rejectReturnRequest

> ReturnRequestResponse rejectReturnRequest(id)



### Example

```ts
import {
  Configuration,
  ReturnsApi,
} from '@tachyon-sdk/field';
import type { RejectReturnRequestRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReturnsApi(config);

  const body = {
    // string | Return request id
    id: id_example,
  } satisfies RejectReturnRequestRequest;

  try {
    const data = await api.rejectReturnRequest(body);
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
| **id** | `string` | Return request id | [Defaults to `undefined`] |

### Return type

[**ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reject a pending return request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startReturnInspection

> ReturnRequestResponse startReturnInspection(id)



### Example

```ts
import {
  Configuration,
  ReturnsApi,
} from '@tachyon-sdk/field';
import type { StartReturnInspectionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReturnsApi(config);

  const body = {
    // string | Return request id
    id: id_example,
  } satisfies StartReturnInspectionRequest;

  try {
    const data = await api.startReturnInspection(body);
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
| **id** | `string` | Return request id | [Defaults to `undefined`] |

### Return type

[**ReturnRequestResponse**](ReturnRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Start inspection on an authorized return request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

