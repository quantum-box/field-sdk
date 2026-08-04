# SaaSSubscriptionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**approveSaasChangeRequest**](SaaSSubscriptionsApi.md#approvesaaschangerequest) | **POST** /v1/erp/saas-subscription-requests/{id}/approve |  |
| [**createSaasChangeRequest**](SaaSSubscriptionsApi.md#createsaaschangerequestoperation) | **POST** /v1/erp/saas-subscription-requests |  |
| [**createSaasSubscription**](SaaSSubscriptionsApi.md#createsaassubscriptionoperation) | **POST** /v1/erp/saas-subscriptions |  |
| [**listSaasChangeRequests**](SaaSSubscriptionsApi.md#listsaaschangerequests) | **GET** /v1/erp/saas-subscription-requests |  |
| [**listSaasSubscriptions**](SaaSSubscriptionsApi.md#listsaassubscriptions) | **GET** /v1/erp/saas-subscriptions |  |
| [**returnSaasChangeRequest**](SaaSSubscriptionsApi.md#returnsaaschangerequest) | **POST** /v1/erp/saas-subscription-requests/{id}/return |  |
| [**updateSaasSubscription**](SaaSSubscriptionsApi.md#updatesaassubscriptionoperation) | **PATCH** /v1/erp/saas-subscriptions/{id} |  |



## approveSaasChangeRequest

> SaasChangeRequestResponse approveSaasChangeRequest(id, decideSaasChangeRequestRequest)



### Example

```ts
import {
  Configuration,
  SaaSSubscriptionsApi,
} from '@tachyon/field-sdk';
import type { ApproveSaasChangeRequestRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SaaSSubscriptionsApi(config);

  const body = {
    // string | SaaS change request ID
    id: id_example,
    // DecideSaasChangeRequestRequest
    decideSaasChangeRequestRequest: ...,
  } satisfies ApproveSaasChangeRequestRequest;

  try {
    const data = await api.approveSaasChangeRequest(body);
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
| **id** | `string` | SaaS change request ID | [Defaults to `undefined`] |
| **decideSaasChangeRequestRequest** | [DecideSaasChangeRequestRequest](DecideSaasChangeRequestRequest.md) |  | |

### Return type

[**SaasChangeRequestResponse**](SaasChangeRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SaaS change request approved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createSaasChangeRequest

> SaasChangeRequestResponse createSaasChangeRequest(createSaasChangeRequestRequest, idempotencyKey)



### Example

```ts
import {
  Configuration,
  SaaSSubscriptionsApi,
} from '@tachyon/field-sdk';
import type { CreateSaasChangeRequestOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SaaSSubscriptionsApi(config);

  const body = {
    // CreateSaasChangeRequestRequest
    createSaasChangeRequestRequest: ...,
    // string | Optional idempotency key; a retried request with the same key and payload replays the original result (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CreateSaasChangeRequestOperationRequest;

  try {
    const data = await api.createSaasChangeRequest(body);
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
| **createSaasChangeRequestRequest** | [CreateSaasChangeRequestRequest](CreateSaasChangeRequestRequest.md) |  | |
| **idempotencyKey** | `string` | Optional idempotency key; a retried request with the same key and payload replays the original result | [Optional] [Defaults to `undefined`] |

### Return type

[**SaasChangeRequestResponse**](SaasChangeRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SaaS change request created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createSaasSubscription

> SaasSubscriptionResponse createSaasSubscription(createSaasSubscriptionRequest)



### Example

```ts
import {
  Configuration,
  SaaSSubscriptionsApi,
} from '@tachyon/field-sdk';
import type { CreateSaasSubscriptionOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SaaSSubscriptionsApi(config);

  const body = {
    // CreateSaasSubscriptionRequest
    createSaasSubscriptionRequest: ...,
  } satisfies CreateSaasSubscriptionOperationRequest;

  try {
    const data = await api.createSaasSubscription(body);
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
| **createSaasSubscriptionRequest** | [CreateSaasSubscriptionRequest](CreateSaasSubscriptionRequest.md) |  | |

### Return type

[**SaasSubscriptionResponse**](SaasSubscriptionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SaaS subscription created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSaasChangeRequests

> SaasChangeRequestListResponse listSaasChangeRequests(state)



### Example

```ts
import {
  Configuration,
  SaaSSubscriptionsApi,
} from '@tachyon/field-sdk';
import type { ListSaasChangeRequestsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SaaSSubscriptionsApi(config);

  const body = {
    // string | Filter by change request state. (optional)
    state: state_example,
  } satisfies ListSaasChangeRequestsRequest;

  try {
    const data = await api.listSaasChangeRequests(body);
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
| **state** | `string` | Filter by change request state. | [Optional] [Defaults to `undefined`] |

### Return type

[**SaasChangeRequestListResponse**](SaasChangeRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SaaS change request list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSaasSubscriptions

> SaasSubscriptionListResponse listSaasSubscriptions(status)



### Example

```ts
import {
  Configuration,
  SaaSSubscriptionsApi,
} from '@tachyon/field-sdk';
import type { ListSaasSubscriptionsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SaaSSubscriptionsApi(config);

  const body = {
    // string | Filter by subscription status. (optional)
    status: status_example,
  } satisfies ListSaasSubscriptionsRequest;

  try {
    const data = await api.listSaasSubscriptions(body);
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
| **status** | `string` | Filter by subscription status. | [Optional] [Defaults to `undefined`] |

### Return type

[**SaasSubscriptionListResponse**](SaasSubscriptionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SaaS subscription list with summary |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## returnSaasChangeRequest

> SaasChangeRequestResponse returnSaasChangeRequest(id, decideSaasChangeRequestRequest)



### Example

```ts
import {
  Configuration,
  SaaSSubscriptionsApi,
} from '@tachyon/field-sdk';
import type { ReturnSaasChangeRequestRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SaaSSubscriptionsApi(config);

  const body = {
    // string | SaaS change request ID
    id: id_example,
    // DecideSaasChangeRequestRequest
    decideSaasChangeRequestRequest: ...,
  } satisfies ReturnSaasChangeRequestRequest;

  try {
    const data = await api.returnSaasChangeRequest(body);
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
| **id** | `string` | SaaS change request ID | [Defaults to `undefined`] |
| **decideSaasChangeRequestRequest** | [DecideSaasChangeRequestRequest](DecideSaasChangeRequestRequest.md) |  | |

### Return type

[**SaasChangeRequestResponse**](SaasChangeRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SaaS change request returned for revision |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSaasSubscription

> SaasSubscriptionResponse updateSaasSubscription(id, updateSaasSubscriptionRequest)



### Example

```ts
import {
  Configuration,
  SaaSSubscriptionsApi,
} from '@tachyon/field-sdk';
import type { UpdateSaasSubscriptionOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SaaSSubscriptionsApi(config);

  const body = {
    // string | SaaS subscription ID
    id: id_example,
    // UpdateSaasSubscriptionRequest
    updateSaasSubscriptionRequest: ...,
  } satisfies UpdateSaasSubscriptionOperationRequest;

  try {
    const data = await api.updateSaasSubscription(body);
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
| **id** | `string` | SaaS subscription ID | [Defaults to `undefined`] |
| **updateSaasSubscriptionRequest** | [UpdateSaasSubscriptionRequest](UpdateSaasSubscriptionRequest.md) |  | |

### Return type

[**SaasSubscriptionResponse**](SaasSubscriptionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SaaS subscription updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

