# PublicStorefrontApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listPublicCustomFieldDefinitions**](PublicStorefrontApi.md#listpubliccustomfielddefinitions) | **GET** /v1/public/storefront/{tenant_id}/custom-field-definitions |  |
| [**publicStorefrontCreateReservation**](PublicStorefrontApi.md#publicstorefrontcreatereservation) | **POST** /v1/public/storefront/{tenant_id}/reservations | The booking submission. |
| [**publicStorefrontGetStorefrontProfile**](PublicStorefrontApi.md#publicstorefrontgetstorefrontprofile) | **GET** /v1/public/storefront/{tenant_id}/profile | The same read under the public shape; see &#x60;reservation_storefront_api::public_tenant&#x60; for why the tenant is a path segment rather than a header. |
| [**publicStorefrontListMembershipPlans**](PublicStorefrontApi.md#publicstorefrontlistmembershipplans) | **GET** /v1/public/storefront/{tenant_id}/membership-plans | The same read under the public shape; see &#x60;reservation_storefront_api::public_tenant&#x60; for why the tenant is a path segment rather than a header. |
| [**publicStorefrontListReservationProducts**](PublicStorefrontApi.md#publicstorefrontlistreservationproducts) | **GET** /v1/public/storefront/{tenant_id}/reservation-products |  |
| [**publicStorefrontListReservationTypes**](PublicStorefrontApi.md#publicstorefrontlistreservationtypes) | **GET** /v1/public/storefront/{tenant_id}/reservation-types |  |
| [**publicStorefrontListResources**](PublicStorefrontApi.md#publicstorefrontlistresources) | **GET** /v1/public/storefront/{tenant_id}/resources |  |
| [**publicStorefrontResourceAvailabilityCalendar**](PublicStorefrontApi.md#publicstorefrontresourceavailabilitycalendar) | **GET** /v1/public/storefront/{tenant_id}/resources/{id}/availability-calendar |  |



## listPublicCustomFieldDefinitions

> PublicCustomFieldDefinitionListResponse listPublicCustomFieldDefinitions(tenantId, entityType)



### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { ListPublicCustomFieldDefinitionsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
    // string | Public form entity type (reservation/customer_subject)
    entityType: entityType_example,
  } satisfies ListPublicCustomFieldDefinitionsRequest;

  try {
    const data = await api.listPublicCustomFieldDefinitions(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |
| **entityType** | `string` | Public form entity type (reservation/customer_subject) | [Defaults to `undefined`] |

### Return type

[**PublicCustomFieldDefinitionListResponse**](PublicCustomFieldDefinitionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Unsupported entity type |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontCreateReservation

> CreateReservationResponse publicStorefrontCreateReservation(tenantId, storefrontCreateReservationRequest)

The booking submission.

Anonymous by nature: a visitor filling in a public booking form is not signed in, on this page or on any other course\&#39;s. It was reachable without a bearer before route classification existed, so this states the existing exposure rather than opening a new one. A shared tenant write budget now bounds its side effects. Because an attacker can spend that aggregate budget and lock out legitimate visitors, PLT-3683 still tracks the non-bypassable origin/client-level protection needed to prevent griefing.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontCreateReservationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
    // StorefrontCreateReservationRequest
    storefrontCreateReservationRequest: ...,
  } satisfies PublicStorefrontCreateReservationRequest;

  try {
    const data = await api.publicStorefrontCreateReservation(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |
| **storefrontCreateReservationRequest** | [StorefrontCreateReservationRequest](StorefrontCreateReservationRequest.md) |  | |

### Return type

[**CreateReservationResponse**](CreateReservationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **429** | Tenant reservation-create budget exhausted |  -  |
| **503** | Reservation limiter unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontGetStorefrontProfile

> StorefrontProfileResponse publicStorefrontGetStorefrontProfile(tenantId)

The same read under the public shape; see &#x60;reservation_storefront_api::public_tenant&#x60; for why the tenant is a path segment rather than a header.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontGetStorefrontProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
  } satisfies PublicStorefrontGetStorefrontProfileRequest;

  try {
    const data = await api.publicStorefrontGetStorefrontProfile(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |

### Return type

[**StorefrontProfileResponse**](StorefrontProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontListMembershipPlans

> StorefrontMembershipPlanListResponse publicStorefrontListMembershipPlans(tenantId)

The same read under the public shape; see &#x60;reservation_storefront_api::public_tenant&#x60; for why the tenant is a path segment rather than a header.

### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontListMembershipPlansRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose member classes are being read
    tenantId: tenantId_example,
  } satisfies PublicStorefrontListMembershipPlansRequest;

  try {
    const data = await api.publicStorefrontListMembershipPlans(body);
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
| **tenantId** | `string` | Tenant whose member classes are being read | [Defaults to `undefined`] |

### Return type

[**StorefrontMembershipPlanListResponse**](StorefrontMembershipPlanListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontListReservationProducts

> ReservationProductListResponse publicStorefrontListReservationProducts(tenantId, date, resourceId)



### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontListReservationProductsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
    // Date | Filter/materialize slot-based products for this date (optional)
    date: 2013-10-20,
    // string | Resource whose generated inventory supplies the bookable slots (optional)
    resourceId: resourceId_example,
  } satisfies PublicStorefrontListReservationProductsRequest;

  try {
    const data = await api.publicStorefrontListReservationProducts(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |
| **date** | `Date` | Filter/materialize slot-based products for this date | [Optional] [Defaults to `undefined`] |
| **resourceId** | `string` | Resource whose generated inventory supplies the bookable slots | [Optional] [Defaults to `undefined`] |

### Return type

[**ReservationProductListResponse**](ReservationProductListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontListReservationTypes

> ReservationTypeListResponse publicStorefrontListReservationTypes(tenantId)



### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontListReservationTypesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
  } satisfies PublicStorefrontListReservationTypesRequest;

  try {
    const data = await api.publicStorefrontListReservationTypes(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |

### Return type

[**ReservationTypeListResponse**](ReservationTypeListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontListResources

> ResourceListResponse publicStorefrontListResources(tenantId)



### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontListResourcesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
  } satisfies PublicStorefrontListResourcesRequest;

  try {
    const data = await api.publicStorefrontListResources(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |

### Return type

[**ResourceListResponse**](ResourceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **429** | Tenant read budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicStorefrontResourceAvailabilityCalendar

> StorefrontAvailabilityCalendarResponse publicStorefrontResourceAvailabilityCalendar(tenantId, id, from, to, timezone, fewLeftThreshold)



### Example

```ts
import {
  Configuration,
  PublicStorefrontApi,
} from '@tachyon-sdk/field';
import type { PublicStorefrontResourceAvailabilityCalendarRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicStorefrontApi(config);

  const body = {
    // string | Tenant whose public storefront is being read
    tenantId: tenantId_example,
    // string | Resource whose month is being read
    id: id_example,
    // Date | First date of the range
    from: 2013-10-20,
    // Date | Last date of the range
    to: 2013-10-20,
    // string | IANA timezone the days are grouped by (optional)
    timezone: timezone_example,
    // number | Remaining groups at or below which a day is marked few_left (optional)
    fewLeftThreshold: 789,
  } satisfies PublicStorefrontResourceAvailabilityCalendarRequest;

  try {
    const data = await api.publicStorefrontResourceAvailabilityCalendar(body);
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
| **tenantId** | `string` | Tenant whose public storefront is being read | [Defaults to `undefined`] |
| **id** | `string` | Resource whose month is being read | [Defaults to `undefined`] |
| **from** | `Date` | First date of the range | [Defaults to `undefined`] |
| **to** | `Date` | Last date of the range | [Defaults to `undefined`] |
| **timezone** | `string` | IANA timezone the days are grouped by | [Optional] [Defaults to `undefined`] |
| **fewLeftThreshold** | `number` | Remaining groups at or below which a day is marked few_left | [Optional] [Defaults to `undefined`] |

### Return type

[**StorefrontAvailabilityCalendarResponse**](StorefrontAvailabilityCalendarResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **429** | Tenant availability-calendar budget exhausted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

