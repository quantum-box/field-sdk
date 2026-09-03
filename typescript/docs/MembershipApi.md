# MembershipApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**archiveCustomerSubject**](MembershipApi.md#archivecustomersubject) | **DELETE** /v1/erp/membership/subjects/{id} |  |
| [**assignMembershipPlan**](MembershipApi.md#assignmembershipplanoperation) | **POST** /v1/erp/membership/customers/{customer_id}/plan-assignments |  |
| [**createCustomerCredential**](MembershipApi.md#createcustomercredentialoperation) | **POST** /v1/erp/membership/customers/{customer_id}/credentials |  |
| [**createCustomerSubject**](MembershipApi.md#createcustomersubjectoperation) | **POST** /v1/erp/membership/customers/{customer_id}/subjects |  |
| [**createMembershipConsentItem**](MembershipApi.md#createmembershipconsentitemoperation) | **POST** /v1/erp/membership/consent-items |  |
| [**createMembershipEntitlement**](MembershipApi.md#createmembershipentitlementoperation) | **POST** /v1/erp/membership/entitlements |  |
| [**createMembershipPlan**](MembershipApi.md#createmembershipplanoperation) | **POST** /v1/erp/membership/plans |  |
| [**deleteMembershipConsentItem**](MembershipApi.md#deletemembershipconsentitem) | **DELETE** /v1/erp/membership/consent-items/{id} |  |
| [**deleteMembershipEntitlement**](MembershipApi.md#deletemembershipentitlement) | **DELETE** /v1/erp/membership/entitlements/{id} |  |
| [**deleteMembershipPlan**](MembershipApi.md#deletemembershipplan) | **DELETE** /v1/erp/membership/plans/{id} |  |
| [**getCustomerMembership**](MembershipApi.md#getcustomermembership) | **GET** /v1/erp/membership/customers/{customer_id} |  |
| [**listMembershipActivities**](MembershipApi.md#listmembershipactivities) | **GET** /v1/erp/membership/customers/{customer_id}/activities |  |
| [**listMembershipConsentItems**](MembershipApi.md#listmembershipconsentitems) | **GET** /v1/erp/membership/consent-items |  |
| [**listMembershipEntitlements**](MembershipApi.md#listmembershipentitlements) | **GET** /v1/erp/membership/entitlements |  |
| [**listMembershipOfferings**](MembershipApi.md#listmembershipofferings) | **GET** /v1/erp/membership/offerings |  |
| [**listMembershipPlans**](MembershipApi.md#listmembershipplans) | **GET** /v1/erp/membership/plans |  |
| [**listMembershipRoster**](MembershipApi.md#listmembershiproster) | **GET** /v1/erp/membership/customers |  |
| [**listReceptionFields**](MembershipApi.md#listreceptionfields) | **GET** /v1/erp/membership/reception-fields | Every box on this tenant\&#39;s reception sheet. |
| [**recordCustomerConsents**](MembershipApi.md#recordcustomerconsentsoperation) | **POST** /v1/erp/membership/customers/{customer_id}/consents |  |
| [**registerMembership**](MembershipApi.md#registermembershipoperation) | **POST** /v1/erp/membership/registrations |  |
| [**replaceReceptionFields**](MembershipApi.md#replacereceptionfieldsoperation) | **PUT** /v1/erp/membership/reception-fields | Saves the boxes named in the request. Boxes left out keep their current setting, so a screen that shows a subset cannot reset the rest. |
| [**updateCustomerCredential**](MembershipApi.md#updatecustomercredentialoperation) | **PUT** /v1/erp/membership/credentials/{id} |  |
| [**updateCustomerSubject**](MembershipApi.md#updatecustomersubjectoperation) | **PUT** /v1/erp/membership/subjects/{id} |  |
| [**updateMembershipConsentItem**](MembershipApi.md#updatemembershipconsentitemoperation) | **PUT** /v1/erp/membership/consent-items/{id} |  |
| [**updateMembershipEntitlement**](MembershipApi.md#updatemembershipentitlementoperation) | **PATCH** /v1/erp/membership/entitlements/{id} |  |
| [**updateMembershipPlan**](MembershipApi.md#updatemembershipplanoperation) | **PUT** /v1/erp/membership/plans/{id} |  |



## archiveCustomerSubject

> archiveCustomerSubject(id)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { ArchiveCustomerSubjectRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ArchiveCustomerSubjectRequest;

  try {
    const data = await api.archiveCustomerSubject(body);
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
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** |  |  -  |
| **422** | Membership activity snapshot exceeded its size limit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## assignMembershipPlan

> MembershipPlanAssignmentResponse assignMembershipPlan(customerId, assignMembershipPlanRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { AssignMembershipPlanOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    customerId: customerId_example,
    // AssignMembershipPlanRequest
    assignMembershipPlanRequest: ...,
  } satisfies AssignMembershipPlanOperationRequest;

  try {
    const data = await api.assignMembershipPlan(body);
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
| **customerId** | `string` |  | [Defaults to `undefined`] |
| **assignMembershipPlanRequest** | [AssignMembershipPlanRequest](AssignMembershipPlanRequest.md) |  | |

### Return type

[**MembershipPlanAssignmentResponse**](MembershipPlanAssignmentResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **422** | Membership activity snapshot exceeded its size limit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCustomerCredential

> CustomerCredentialResponse createCustomerCredential(customerId, createCustomerCredentialRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { CreateCustomerCredentialOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    customerId: customerId_example,
    // CreateCustomerCredentialRequest
    createCustomerCredentialRequest: ...,
  } satisfies CreateCustomerCredentialOperationRequest;

  try {
    const data = await api.createCustomerCredential(body);
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
| **customerId** | `string` |  | [Defaults to `undefined`] |
| **createCustomerCredentialRequest** | [CreateCustomerCredentialRequest](CreateCustomerCredentialRequest.md) |  | |

### Return type

[**CustomerCredentialResponse**](CustomerCredentialResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **422** | Membership activity snapshot exceeded its size limit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCustomerSubject

> CustomerSubjectResponse createCustomerSubject(customerId, createCustomerSubjectRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { CreateCustomerSubjectOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    customerId: customerId_example,
    // CreateCustomerSubjectRequest
    createCustomerSubjectRequest: ...,
  } satisfies CreateCustomerSubjectOperationRequest;

  try {
    const data = await api.createCustomerSubject(body);
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
| **customerId** | `string` |  | [Defaults to `undefined`] |
| **createCustomerSubjectRequest** | [CreateCustomerSubjectRequest](CreateCustomerSubjectRequest.md) |  | |

### Return type

[**CustomerSubjectResponse**](CustomerSubjectResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **422** | Membership activity snapshot exceeded its size limit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createMembershipConsentItem

> MembershipConsentItemResponse createMembershipConsentItem(createMembershipConsentItemRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { CreateMembershipConsentItemOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // CreateMembershipConsentItemRequest
    createMembershipConsentItemRequest: ...,
  } satisfies CreateMembershipConsentItemOperationRequest;

  try {
    const data = await api.createMembershipConsentItem(body);
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
| **createMembershipConsentItemRequest** | [CreateMembershipConsentItemRequest](CreateMembershipConsentItemRequest.md) |  | |

### Return type

[**MembershipConsentItemResponse**](MembershipConsentItemResponse.md)

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


## createMembershipEntitlement

> MembershipEntitlementResponse createMembershipEntitlement(createMembershipEntitlementRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { CreateMembershipEntitlementOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // CreateMembershipEntitlementRequest
    createMembershipEntitlementRequest: ...,
  } satisfies CreateMembershipEntitlementOperationRequest;

  try {
    const data = await api.createMembershipEntitlement(body);
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
| **createMembershipEntitlementRequest** | [CreateMembershipEntitlementRequest](CreateMembershipEntitlementRequest.md) |  | |

### Return type

[**MembershipEntitlementResponse**](MembershipEntitlementResponse.md)

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


## createMembershipPlan

> MembershipPlanResponse createMembershipPlan(createMembershipPlanRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { CreateMembershipPlanOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // CreateMembershipPlanRequest
    createMembershipPlanRequest: ...,
  } satisfies CreateMembershipPlanOperationRequest;

  try {
    const data = await api.createMembershipPlan(body);
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
| **createMembershipPlanRequest** | [CreateMembershipPlanRequest](CreateMembershipPlanRequest.md) |  | |

### Return type

[**MembershipPlanResponse**](MembershipPlanResponse.md)

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


## deleteMembershipConsentItem

> deleteMembershipConsentItem(id)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { DeleteMembershipConsentItemRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteMembershipConsentItemRequest;

  try {
    const data = await api.deleteMembershipConsentItem(body);
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
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMembershipEntitlement

> deleteMembershipEntitlement(id)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { DeleteMembershipEntitlementRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteMembershipEntitlementRequest;

  try {
    const data = await api.deleteMembershipEntitlement(body);
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
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMembershipPlan

> deleteMembershipPlan(id)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { DeleteMembershipPlanRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteMembershipPlanRequest;

  try {
    const data = await api.deleteMembershipPlan(body);
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
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerMembership

> MembershipCustomerViewResponse getCustomerMembership(customerId)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { GetCustomerMembershipRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    customerId: customerId_example,
  } satisfies GetCustomerMembershipRequest;

  try {
    const data = await api.getCustomerMembership(body);
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
| **customerId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**MembershipCustomerViewResponse**](MembershipCustomerViewResponse.md)

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


## listMembershipActivities

> MembershipActivityListResponse listMembershipActivities(customerId, limit, cursor)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { ListMembershipActivitiesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string | Customer ID
    customerId: customerId_example,
    // number | Maximum number of events to return (default 20, maximum 100). (optional)
    limit: 56,
    // string | Opaque base64url cursor returned by the previous page. (optional)
    cursor: cursor_example,
  } satisfies ListMembershipActivitiesRequest;

  try {
    const data = await api.listMembershipActivities(body);
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
| **customerId** | `string` | Customer ID | [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of events to return (default 20, maximum 100). | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Opaque base64url cursor returned by the previous page. | [Optional] [Defaults to `undefined`] |

### Return type

[**MembershipActivityListResponse**](MembershipActivityListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid limit or cursor |  -  |
| **401** | Authentication required |  -  |
| **403** | Insufficient permission |  -  |
| **404** | Customer not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMembershipConsentItems

> MembershipConsentItemListResponse listMembershipConsentItems(includeInactive)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { ListMembershipConsentItemsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // boolean | Include deactivated items (optional)
    includeInactive: true,
  } satisfies ListMembershipConsentItemsRequest;

  try {
    const data = await api.listMembershipConsentItems(body);
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
| **includeInactive** | `boolean` | Include deactivated items | [Optional] [Defaults to `undefined`] |

### Return type

[**MembershipConsentItemListResponse**](MembershipConsentItemListResponse.md)

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


## listMembershipEntitlements

> MembershipEntitlementListResponse listMembershipEntitlements(includeInactive)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { ListMembershipEntitlementsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // boolean | Include deactivated grants (optional)
    includeInactive: true,
  } satisfies ListMembershipEntitlementsRequest;

  try {
    const data = await api.listMembershipEntitlements(body);
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
| **includeInactive** | `boolean` | Include deactivated grants | [Optional] [Defaults to `undefined`] |

### Return type

[**MembershipEntitlementListResponse**](MembershipEntitlementListResponse.md)

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


## listMembershipOfferings

> MembershipOfferingListResponse listMembershipOfferings(includeInactive)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { ListMembershipOfferingsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // boolean | Also return grants that are disabled or whose product is not on sale (optional)
    includeInactive: true,
  } satisfies ListMembershipOfferingsRequest;

  try {
    const data = await api.listMembershipOfferings(body);
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
| **includeInactive** | `boolean` | Also return grants that are disabled or whose product is not on sale | [Optional] [Defaults to `undefined`] |

### Return type

[**MembershipOfferingListResponse**](MembershipOfferingListResponse.md)

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


## listMembershipPlans

> MembershipPlanListResponse listMembershipPlans(includeInactive)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { ListMembershipPlansRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // boolean | Include deactivated plans (optional)
    includeInactive: true,
  } satisfies ListMembershipPlansRequest;

  try {
    const data = await api.listMembershipPlans(body);
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
| **includeInactive** | `boolean` | Include deactivated plans | [Optional] [Defaults to `undefined`] |

### Return type

[**MembershipPlanListResponse**](MembershipPlanListResponse.md)

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


## listMembershipRoster

> MembershipRosterResponse listMembershipRoster(state, planId, q, expiringWithinDays, limit, offset)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { ListMembershipRosterRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string | `current`（既定）/ `expiring` / `lapsed` / `all`。 (optional)
    state: state_example,
    // string (optional)
    planId: planId_example,
    // string | 氏名・カナ・メール・電話の部分一致。 (optional)
    q: q_example,
    // number | `state=expiring` のときだけ効く。既定は 30 日。 (optional)
    expiringWithinDays: 56,
    // number (optional)
    limit: 789,
    // number (optional)
    offset: 789,
  } satisfies ListMembershipRosterRequest;

  try {
    const data = await api.listMembershipRoster(body);
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
| **state** | `string` | &#x60;current&#x60;（既定）/ &#x60;expiring&#x60; / &#x60;lapsed&#x60; / &#x60;all&#x60;。 | [Optional] [Defaults to `undefined`] |
| **planId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **q** | `string` | 氏名・カナ・メール・電話の部分一致。 | [Optional] [Defaults to `undefined`] |
| **expiringWithinDays** | `number` | &#x60;state&#x3D;expiring&#x60; のときだけ効く。既定は 30 日。 | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**MembershipRosterResponse**](MembershipRosterResponse.md)

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


## listReceptionFields

> ReceptionFieldListResponse listReceptionFields()

Every box on this tenant\&#39;s reception sheet.

The list is always complete: boxes the tenant never configured come back with their built-in default rather than being absent, so the counter screen and the document reader can both be built straight from the response without knowing which boxes happen to be stored.

### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { ListReceptionFieldsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  try {
    const data = await api.listReceptionFields();
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

[**ReceptionFieldListResponse**](ReceptionFieldListResponse.md)

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


## recordCustomerConsents

> MembershipCustomerViewResponse recordCustomerConsents(customerId, recordCustomerConsentsRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { RecordCustomerConsentsOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    customerId: customerId_example,
    // RecordCustomerConsentsRequest
    recordCustomerConsentsRequest: ...,
  } satisfies RecordCustomerConsentsOperationRequest;

  try {
    const data = await api.recordCustomerConsents(body);
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
| **customerId** | `string` |  | [Defaults to `undefined`] |
| **recordCustomerConsentsRequest** | [RecordCustomerConsentsRequest](RecordCustomerConsentsRequest.md) |  | |

### Return type

[**MembershipCustomerViewResponse**](MembershipCustomerViewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **422** | Membership activity snapshot exceeded its size limit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## registerMembership

> MembershipCustomerViewResponse registerMembership(registerMembershipRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { RegisterMembershipOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // RegisterMembershipRequest
    registerMembershipRequest: ...,
  } satisfies RegisterMembershipOperationRequest;

  try {
    const data = await api.registerMembership(body);
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
| **registerMembershipRequest** | [RegisterMembershipRequest](RegisterMembershipRequest.md) |  | |

### Return type

[**MembershipCustomerViewResponse**](MembershipCustomerViewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **422** | Membership activity snapshot exceeded its size limit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replaceReceptionFields

> ReceptionFieldListResponse replaceReceptionFields(replaceReceptionFieldsRequest)

Saves the boxes named in the request. Boxes left out keep their current setting, so a screen that shows a subset cannot reset the rest.

### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { ReplaceReceptionFieldsOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // ReplaceReceptionFieldsRequest
    replaceReceptionFieldsRequest: ...,
  } satisfies ReplaceReceptionFieldsOperationRequest;

  try {
    const data = await api.replaceReceptionFields(body);
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
| **replaceReceptionFieldsRequest** | [ReplaceReceptionFieldsRequest](ReplaceReceptionFieldsRequest.md) |  | |

### Return type

[**ReceptionFieldListResponse**](ReceptionFieldListResponse.md)

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


## updateCustomerCredential

> CustomerCredentialResponse updateCustomerCredential(id, updateCustomerCredentialRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { UpdateCustomerCredentialOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateCustomerCredentialRequest
    updateCustomerCredentialRequest: ...,
  } satisfies UpdateCustomerCredentialOperationRequest;

  try {
    const data = await api.updateCustomerCredential(body);
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
| **updateCustomerCredentialRequest** | [UpdateCustomerCredentialRequest](UpdateCustomerCredentialRequest.md) |  | |

### Return type

[**CustomerCredentialResponse**](CustomerCredentialResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **422** | Membership activity snapshot exceeded its size limit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomerSubject

> CustomerSubjectResponse updateCustomerSubject(id, updateCustomerSubjectRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { UpdateCustomerSubjectOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateCustomerSubjectRequest
    updateCustomerSubjectRequest: ...,
  } satisfies UpdateCustomerSubjectOperationRequest;

  try {
    const data = await api.updateCustomerSubject(body);
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
| **updateCustomerSubjectRequest** | [UpdateCustomerSubjectRequest](UpdateCustomerSubjectRequest.md) |  | |

### Return type

[**CustomerSubjectResponse**](CustomerSubjectResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **422** | Membership activity snapshot exceeded its size limit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMembershipConsentItem

> MembershipConsentItemResponse updateMembershipConsentItem(id, updateMembershipConsentItemRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { UpdateMembershipConsentItemOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateMembershipConsentItemRequest
    updateMembershipConsentItemRequest: ...,
  } satisfies UpdateMembershipConsentItemOperationRequest;

  try {
    const data = await api.updateMembershipConsentItem(body);
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
| **updateMembershipConsentItemRequest** | [UpdateMembershipConsentItemRequest](UpdateMembershipConsentItemRequest.md) |  | |

### Return type

[**MembershipConsentItemResponse**](MembershipConsentItemResponse.md)

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


## updateMembershipEntitlement

> MembershipEntitlementResponse updateMembershipEntitlement(id, updateMembershipEntitlementRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { UpdateMembershipEntitlementOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateMembershipEntitlementRequest
    updateMembershipEntitlementRequest: ...,
  } satisfies UpdateMembershipEntitlementOperationRequest;

  try {
    const data = await api.updateMembershipEntitlement(body);
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
| **updateMembershipEntitlementRequest** | [UpdateMembershipEntitlementRequest](UpdateMembershipEntitlementRequest.md) |  | |

### Return type

[**MembershipEntitlementResponse**](MembershipEntitlementResponse.md)

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


## updateMembershipPlan

> MembershipPlanResponse updateMembershipPlan(id, updateMembershipPlanRequest)



### Example

```ts
import {
  Configuration,
  MembershipApi,
} from '@tachyon-sdk/field';
import type { UpdateMembershipPlanOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MembershipApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateMembershipPlanRequest
    updateMembershipPlanRequest: ...,
  } satisfies UpdateMembershipPlanOperationRequest;

  try {
    const data = await api.updateMembershipPlan(body);
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
| **updateMembershipPlanRequest** | [UpdateMembershipPlanRequest](UpdateMembershipPlanRequest.md) |  | |

### Return type

[**MembershipPlanResponse**](MembershipPlanResponse.md)

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

