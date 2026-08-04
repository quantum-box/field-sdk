# TACHYONFieldIAMApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteErpUserRole**](TACHYONFieldIAMApi.md#deleteerpuserrole) | **DELETE** /v1/field/iam/users/{user_id} |  |
| [**inviteErpUser**](TACHYONFieldIAMApi.md#inviteerpuseroperation) | **POST** /v1/field/iam/users/invite |  |
| [**listErpUsers**](TACHYONFieldIAMApi.md#listerpusers) | **GET** /v1/field/iam/users |  |
| [**updateErpUserPolicies**](TACHYONFieldIAMApi.md#updateerpuserpoliciesoperation) | **PUT** /v1/field/iam/users/{user_id}/policies | Replace a member\&#39;s ERP-managed policies with the given flat list. |
| [**updateErpUserRole**](TACHYONFieldIAMApi.md#updateerpuserroleoperation) | **PUT** /v1/field/iam/users/{user_id}/role |  |



## deleteErpUserRole

> deleteErpUserRole(userId)



### Example

```ts
import {
  Configuration,
  TACHYONFieldIAMApi,
} from '@tachyon/field-sdk';
import type { DeleteErpUserRoleRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldIAMApi(config);

  const body = {
    // string | Field IAM member user id
    userId: userId_example,
  } satisfies DeleteErpUserRoleRequest;

  try {
    const data = await api.deleteErpUserRole(body);
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
| **userId** | `string` | Field IAM member user id | [Defaults to `undefined`] |

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
| **204** | Detach all ERP-managed policies from the member |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## inviteErpUser

> InviteErpUserResponse inviteErpUser(inviteErpUserRequest)



### Example

```ts
import {
  Configuration,
  TACHYONFieldIAMApi,
} from '@tachyon/field-sdk';
import type { InviteErpUserOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldIAMApi(config);

  const body = {
    // InviteErpUserRequest
    inviteErpUserRequest: ...,
  } satisfies InviteErpUserOperationRequest;

  try {
    const data = await api.inviteErpUser(body);
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
| **inviteErpUserRequest** | [InviteErpUserRequest](InviteErpUserRequest.md) |  | |

### Return type

[**InviteErpUserResponse**](InviteErpUserResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Invite a user to the Field tenant and assign ERP-managed policies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listErpUsers

> ErpUserListResponse listErpUsers()



### Example

```ts
import {
  Configuration,
  TACHYONFieldIAMApi,
} from '@tachyon/field-sdk';
import type { ListErpUsersRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldIAMApi(config);

  try {
    const data = await api.listErpUsers();
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

[**ErpUserListResponse**](ErpUserListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List Field IAM member users and the custom policy catalog |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateErpUserPolicies

> ErpUserResponse updateErpUserPolicies(userId, updateErpUserPoliciesRequest)

Replace a member\&#39;s ERP-managed policies with the given flat list.

### Example

```ts
import {
  Configuration,
  TACHYONFieldIAMApi,
} from '@tachyon/field-sdk';
import type { UpdateErpUserPoliciesOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldIAMApi(config);

  const body = {
    // string | Field IAM member user id
    userId: userId_example,
    // UpdateErpUserPoliciesRequest
    updateErpUserPoliciesRequest: ...,
  } satisfies UpdateErpUserPoliciesOperationRequest;

  try {
    const data = await api.updateErpUserPolicies(body);
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
| **userId** | `string` | Field IAM member user id | [Defaults to `undefined`] |
| **updateErpUserPoliciesRequest** | [UpdateErpUserPoliciesRequest](UpdateErpUserPoliciesRequest.md) |  | |

### Return type

[**ErpUserResponse**](ErpUserResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Replace a member\&#39;s ERP-managed policy set with a flat list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateErpUserRole

> ErpUserResponse updateErpUserRole(userId, updateErpUserRoleRequest)



### Example

```ts
import {
  Configuration,
  TACHYONFieldIAMApi,
} from '@tachyon/field-sdk';
import type { UpdateErpUserRoleOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldIAMApi(config);

  const body = {
    // string | Field IAM member user id
    userId: userId_example,
    // UpdateErpUserRoleRequest
    updateErpUserRoleRequest: ...,
  } satisfies UpdateErpUserRoleOperationRequest;

  try {
    const data = await api.updateErpUserRole(body);
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
| **userId** | `string` | Field IAM member user id | [Defaults to `undefined`] |
| **updateErpUserRoleRequest** | [UpdateErpUserRoleRequest](UpdateErpUserRoleRequest.md) |  | |

### Return type

[**ErpUserResponse**](ErpUserResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Replace a member\&#39;s exclusive role and custom policies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

