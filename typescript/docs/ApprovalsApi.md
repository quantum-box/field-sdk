# ApprovalsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createApprovalFlow**](ApprovalsApi.md#createapprovalflowoperation) | **POST** /v1/erp/approval-flows |  |
| [**deleteApprovalFlow**](ApprovalsApi.md#deleteapprovalflow) | **DELETE** /v1/erp/approval-flows/{id} |  |
| [**getApprovalFlow**](ApprovalsApi.md#getapprovalflow) | **GET** /v1/erp/approval-flows/{id} |  |
| [**listApprovalFlows**](ApprovalsApi.md#listapprovalflows) | **GET** /v1/erp/approval-flows |  |
| [**listApprovals**](ApprovalsApi.md#listapprovals) | **GET** /api/approvals |  |
| [**mutateApproval**](ApprovalsApi.md#mutateapproval) | **POST** /api/approvals |  |
| [**updateApprovalFlow**](ApprovalsApi.md#updateapprovalflowoperation) | **PUT** /v1/erp/approval-flows/{id} |  |



## createApprovalFlow

> ApprovalFlowResponse createApprovalFlow(createApprovalFlowRequest)



### Example

```ts
import {
  Configuration,
  ApprovalsApi,
} from '@tachyon/field-sdk';
import type { CreateApprovalFlowOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApprovalsApi(config);

  const body = {
    // CreateApprovalFlowRequest
    createApprovalFlowRequest: ...,
  } satisfies CreateApprovalFlowOperationRequest;

  try {
    const data = await api.createApprovalFlow(body);
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
| **createApprovalFlowRequest** | [CreateApprovalFlowRequest](CreateApprovalFlowRequest.md) |  | |

### Return type

[**ApprovalFlowResponse**](ApprovalFlowResponse.md)

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


## deleteApprovalFlow

> deleteApprovalFlow(id)



### Example

```ts
import {
  Configuration,
  ApprovalsApi,
} from '@tachyon/field-sdk';
import type { DeleteApprovalFlowRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApprovalsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteApprovalFlowRequest;

  try {
    const data = await api.deleteApprovalFlow(body);
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

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Approval flow definition deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApprovalFlow

> ApprovalFlowResponse getApprovalFlow(id)



### Example

```ts
import {
  Configuration,
  ApprovalsApi,
} from '@tachyon/field-sdk';
import type { GetApprovalFlowRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApprovalsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetApprovalFlowRequest;

  try {
    const data = await api.getApprovalFlow(body);
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

[**ApprovalFlowResponse**](ApprovalFlowResponse.md)

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


## listApprovalFlows

> ApprovalFlowListResponse listApprovalFlows(resourceType, active, limit, offset)



### Example

```ts
import {
  Configuration,
  ApprovalsApi,
} from '@tachyon/field-sdk';
import type { ListApprovalFlowsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApprovalsApi(config);

  const body = {
    // string (optional)
    resourceType: resourceType_example,
    // boolean (optional)
    active: true,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListApprovalFlowsRequest;

  try {
    const data = await api.listApprovalFlows(body);
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
| **resourceType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **active** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ApprovalFlowListResponse**](ApprovalFlowListResponse.md)

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


## listApprovals

> ApprovalWorkflowListResponse listApprovals(status, resourceType, resourceId, limit, offset)



### Example

```ts
import {
  Configuration,
  ApprovalsApi,
} from '@tachyon/field-sdk';
import type { ListApprovalsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApprovalsApi(config);

  const body = {
    // string (optional)
    status: status_example,
    // string (optional)
    resourceType: resourceType_example,
    // string (optional)
    resourceId: resourceId_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListApprovalsRequest;

  try {
    const data = await api.listApprovals(body);
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
| **resourceType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **resourceId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ApprovalWorkflowListResponse**](ApprovalWorkflowListResponse.md)

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


## mutateApproval

> ApprovalWorkflowResponse mutateApproval(approvalMutationRequest)



### Example

```ts
import {
  Configuration,
  ApprovalsApi,
} from '@tachyon/field-sdk';
import type { MutateApprovalRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApprovalsApi(config);

  const body = {
    // ApprovalMutationRequest
    approvalMutationRequest: ...,
  } satisfies MutateApprovalRequest;

  try {
    const data = await api.mutateApproval(body);
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
| **approvalMutationRequest** | [ApprovalMutationRequest](ApprovalMutationRequest.md) |  | |

### Return type

[**ApprovalWorkflowResponse**](ApprovalWorkflowResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateApprovalFlow

> ApprovalFlowResponse updateApprovalFlow(id, updateApprovalFlowRequest)



### Example

```ts
import {
  Configuration,
  ApprovalsApi,
} from '@tachyon/field-sdk';
import type { UpdateApprovalFlowOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApprovalsApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateApprovalFlowRequest
    updateApprovalFlowRequest: ...,
  } satisfies UpdateApprovalFlowOperationRequest;

  try {
    const data = await api.updateApprovalFlow(body);
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
| **updateApprovalFlowRequest** | [UpdateApprovalFlowRequest](UpdateApprovalFlowRequest.md) |  | |

### Return type

[**ApprovalFlowResponse**](ApprovalFlowResponse.md)

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

