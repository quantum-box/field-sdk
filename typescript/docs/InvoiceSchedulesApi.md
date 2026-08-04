# InvoiceSchedulesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSchedule**](InvoiceSchedulesApi.md#createscheduleoperation) | **POST** /v1/erp/invoice-schedules |  |
| [**deactivateSchedule**](InvoiceSchedulesApi.md#deactivateschedule) | **DELETE** /v1/erp/invoice-schedules/{id} |  |
| [**listSchedules**](InvoiceSchedulesApi.md#listschedules) | **GET** /v1/erp/invoice-schedules |  |
| [**updateSchedule**](InvoiceSchedulesApi.md#updatescheduleoperation) | **PUT** /v1/erp/invoice-schedules/{id} |  |



## createSchedule

> ScheduleResponse createSchedule(createScheduleRequest)



### Example

```ts
import {
  Configuration,
  InvoiceSchedulesApi,
} from '@tachyon/field-sdk';
import type { CreateScheduleOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoiceSchedulesApi(config);

  const body = {
    // CreateScheduleRequest
    createScheduleRequest: ...,
  } satisfies CreateScheduleOperationRequest;

  try {
    const data = await api.createSchedule(body);
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
| **createScheduleRequest** | [CreateScheduleRequest](CreateScheduleRequest.md) |  | |

### Return type

[**ScheduleResponse**](ScheduleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Recurring invoice schedule created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deactivateSchedule

> deactivateSchedule(id)



### Example

```ts
import {
  Configuration,
  InvoiceSchedulesApi,
} from '@tachyon/field-sdk';
import type { DeactivateScheduleRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoiceSchedulesApi(config);

  const body = {
    // string | Invoice schedule ID
    id: id_example,
  } satisfies DeactivateScheduleRequest;

  try {
    const data = await api.deactivateSchedule(body);
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
| **id** | `string` | Invoice schedule ID | [Defaults to `undefined`] |

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
| **204** | Recurring invoice schedule deactivated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSchedules

> ScheduleListResponse listSchedules()



### Example

```ts
import {
  Configuration,
  InvoiceSchedulesApi,
} from '@tachyon/field-sdk';
import type { ListSchedulesRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoiceSchedulesApi(config);

  try {
    const data = await api.listSchedules();
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

[**ScheduleListResponse**](ScheduleListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recurring invoice schedule list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSchedule

> ScheduleResponse updateSchedule(id, updateScheduleRequest)



### Example

```ts
import {
  Configuration,
  InvoiceSchedulesApi,
} from '@tachyon/field-sdk';
import type { UpdateScheduleOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvoiceSchedulesApi(config);

  const body = {
    // string | Invoice schedule ID
    id: id_example,
    // UpdateScheduleRequest
    updateScheduleRequest: ...,
  } satisfies UpdateScheduleOperationRequest;

  try {
    const data = await api.updateSchedule(body);
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
| **id** | `string` | Invoice schedule ID | [Defaults to `undefined`] |
| **updateScheduleRequest** | [UpdateScheduleRequest](UpdateScheduleRequest.md) |  | |

### Return type

[**ScheduleResponse**](ScheduleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recurring invoice schedule updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

