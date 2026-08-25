# PublicMembershipApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPublicMembershipRegistrationForm**](PublicMembershipApi.md#getpublicmembershipregistrationform) | **GET** /v1/public/membership/{tenant_id}/registration-form |  |
| [**registerPublicMembership**](PublicMembershipApi.md#registerpublicmembership) | **POST** /v1/public/membership/{tenant_id}/registrations |  |



## getPublicMembershipRegistrationForm

> PublicMembershipRegistrationFormResponse getPublicMembershipRegistrationForm(tenantId)



### Example

```ts
import {
  Configuration,
  PublicMembershipApi,
} from '@tachyon-sdk/field';
import type { GetPublicMembershipRegistrationFormRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicMembershipApi(config);

  const body = {
    // string | Tenant accepting the pre-registration
    tenantId: tenantId_example,
  } satisfies GetPublicMembershipRegistrationFormRequest;

  try {
    const data = await api.getPublicMembershipRegistrationForm(body);
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
| **tenantId** | `string` | Tenant accepting the pre-registration | [Defaults to `undefined`] |

### Return type

[**PublicMembershipRegistrationFormResponse**](PublicMembershipRegistrationFormResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## registerPublicMembership

> PublicMembershipRegistrationResponse registerPublicMembership(tenantId, publicMembershipRegistrationRequest)



### Example

```ts
import {
  Configuration,
  PublicMembershipApi,
} from '@tachyon-sdk/field';
import type { RegisterPublicMembershipRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicMembershipApi(config);

  const body = {
    // string | Tenant accepting the pre-registration
    tenantId: tenantId_example,
    // PublicMembershipRegistrationRequest
    publicMembershipRegistrationRequest: ...,
  } satisfies RegisterPublicMembershipRequest;

  try {
    const data = await api.registerPublicMembership(body);
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
| **tenantId** | `string` | Tenant accepting the pre-registration | [Defaults to `undefined`] |
| **publicMembershipRegistrationRequest** | [PublicMembershipRegistrationRequest](PublicMembershipRegistrationRequest.md) |  | |

### Return type

[**PublicMembershipRegistrationResponse**](PublicMembershipRegistrationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **400** |  |  -  |
| **422** | Malformed input or unknown fields |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

