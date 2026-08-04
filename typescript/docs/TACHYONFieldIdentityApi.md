# TACHYONFieldIdentityApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getClientCapabilities**](TACHYONFieldIdentityApi.md#getclientcapabilities) | **GET** /v1/field/client-capabilities | Resolve tenant-scoped UI capabilities from the same policy actions enforced by the corresponding API handlers. |
| [**getMe**](TACHYONFieldIdentityApi.md#getme) | **GET** /v1/erp/me | Return the authenticated user\&#39;s Tachyon tenant memberships annotated with one Field extension\&#39;s enabled state. |



## getClientCapabilities

> ClientCapabilitiesResponse getClientCapabilities()

Resolve tenant-scoped UI capabilities from the same policy actions enforced by the corresponding API handlers.

### Example

```ts
import {
  Configuration,
  TACHYONFieldIdentityApi,
} from '@tachyon-sdk/field';
import type { GetClientCapabilitiesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldIdentityApi(config);

  try {
    const data = await api.getClientCapabilities();
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

[**ClientCapabilitiesResponse**](ClientCapabilitiesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tenant-scoped client capabilities |  -  |
| **401** | Missing or rejected bearer token |  -  |
| **503** | Tachyon policy evaluation is unavailable or incomplete |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMe

> ProfileResponse getMe(extensionKey)

Return the authenticated user\&#39;s Tachyon tenant memberships annotated with one Field extension\&#39;s enabled state.

### Example

```ts
import {
  Configuration,
  TACHYONFieldIdentityApi,
} from '@tachyon-sdk/field';
import type { GetMeRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldIdentityApi(config);

  const body = {
    // string | Extension key whose enabled state should be attached to every tenant.
    extensionKey: extensionKey_example,
  } satisfies GetMeRequest;

  try {
    const data = await api.getMe(body);
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
| **extensionKey** | `string` | Extension key whose enabled state should be attached to every tenant. | [Defaults to `undefined`] |

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Authenticated profile with extension eligibility |  -  |
| **400** | Invalid extension key |  -  |
| **401** | Missing or rejected bearer token |  -  |
| **403** | Profile access denied by Tachyon |  -  |
| **500** | Field eligibility query failed |  -  |
| **503** | Tachyon profile is unavailable or invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

