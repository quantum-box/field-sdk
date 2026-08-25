# ReservationsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assignReservationStaff**](ReservationsApi.md#assignreservationstaff) | **POST** /v1/erp/reservations/{id}/staff-assignment |  |
| [**cancelReservationWithPolicy**](ReservationsApi.md#cancelreservationwithpolicy) | **POST** /v1/erp/reservations/{id}/cancel |  |
| [**closeCustomerClientAffiliation**](ReservationsApi.md#closecustomerclientaffiliationoperation) | **POST** /v1/erp/customer-client-affiliations/{id}/close |  |
| [**createCustomerClientAffiliation**](ReservationsApi.md#createcustomerclientaffiliationoperation) | **POST** /v1/erp/customer-client-affiliations |  |
| [**createReservation**](ReservationsApi.md#createreservationoperation) | **POST** /v1/erp/reservations |  |
| [**createReservationProduct**](ReservationsApi.md#createreservationproduct) | **POST** /v1/erp/reservation-products |  |
| [**createReservationResource**](ReservationsApi.md#createreservationresourceoperation) | **POST** /v1/erp/reservation-resources |  |
| [**createReservationType**](ReservationsApi.md#createreservationtypeoperation) | **POST** /v1/erp/reservation-types |  |
| [**createStaffAssignment**](ReservationsApi.md#createstaffassignment) | **POST** /v1/erp/staff-assignments |  |
| [**createStaffProfile**](ReservationsApi.md#createstaffprofile) | **POST** /v1/erp/staff-profiles |  |
| [**deleteReservationProduct**](ReservationsApi.md#deletereservationproduct) | **DELETE** /v1/erp/reservation-products/{id} |  |
| [**deleteReservationResource**](ReservationsApi.md#deletereservationresource) | **DELETE** /v1/erp/reservation-resources/{id} |  |
| [**deleteReservationScheduleDateOverride**](ReservationsApi.md#deletereservationscheduledateoverride) | **DELETE** /v1/erp/reservation-resources/{id}/schedule/overrides/{localDate} |  |
| [**deleteReservationScheduleLocation**](ReservationsApi.md#deletereservationschedulelocation) | **DELETE** /v1/erp/reservation-schedule-location |  |
| [**deleteReservationType**](ReservationsApi.md#deletereservationtype) | **DELETE** /v1/erp/reservation-types/{id} |  |
| [**disableExtension**](ReservationsApi.md#disableextension) | **POST** /v1/erp/extensions/{extension_key}/disable |  |
| [**enableExtension**](ReservationsApi.md#enableextensionoperation) | **POST** /v1/erp/extensions/{extension_key}/enable |  |
| [**exportCancellationFeeReportCsv**](ReservationsApi.md#exportcancellationfeereportcsv) | **GET** /v1/erp/reservation-reports/cancellation-fees.csv |  |
| [**exportReservationsCsv**](ReservationsApi.md#exportreservationscsv) | **GET** /v1/erp/reservations/export.csv |  |
| [**generateReservationResourceTimeSlots**](ReservationsApi.md#generatereservationresourcetimeslots) | **POST** /v1/erp/reservation-resources/{id}/time-slots/generate |  |
| [**getExtensionConfig**](ReservationsApi.md#getextensionconfig) | **GET** /v1/erp/extensions/{extension_key}/config |  |
| [**getReservation**](ReservationsApi.md#getreservation) | **GET** /v1/erp/reservations/{id} |  |
| [**getReservationProduct**](ReservationsApi.md#getreservationproduct) | **GET** /v1/erp/reservation-products/{id} |  |
| [**getReservationResource**](ReservationsApi.md#getreservationresource) | **GET** /v1/erp/reservation-resources/{id} |  |
| [**getReservationResourceSchedule**](ReservationsApi.md#getreservationresourceschedule) | **GET** /v1/erp/reservation-resources/{id}/schedule |  |
| [**getReservationScheduleLocation**](ReservationsApi.md#getreservationschedulelocation) | **GET** /v1/erp/reservation-schedule-location |  |
| [**importProductSlotsIntoResourceSchedule**](ReservationsApi.md#importproductslotsintoresourceschedule) | **POST** /v1/erp/reservation-resources/{id}/schedule/import-product-slots |  |
| [**issueReservationBillingLink**](ReservationsApi.md#issuereservationbillinglinkoperation) | **POST** /v1/erp/reservations/{id}/billing-link |  |
| [**issueReservationSquareInvoice**](ReservationsApi.md#issuereservationsquareinvoice) | **POST** /v1/erp/reservations/{id}/billing-invoice |  |
| [**listCancellationFeeReport**](ReservationsApi.md#listcancellationfeereport) | **GET** /v1/erp/reservation-reports/cancellation-fees |  |
| [**listCustomerClientAffiliations**](ReservationsApi.md#listcustomerclientaffiliations) | **GET** /v1/erp/customer-client-affiliations |  |
| [**listExtensionLifecycleAuditEvents**](ReservationsApi.md#listextensionlifecycleauditevents) | **GET** /v1/erp/extensions/audit |  |
| [**listExtensions**](ReservationsApi.md#listextensions) | **GET** /v1/erp/extensions |  |
| [**listReservationCancellations**](ReservationsApi.md#listreservationcancellations) | **GET** /v1/erp/reservations/{id}/cancellations |  |
| [**listReservationProducts**](ReservationsApi.md#listreservationproducts) | **GET** /v1/erp/reservation-products |  |
| [**listReservationResourceTimeSlots**](ReservationsApi.md#listreservationresourcetimeslots) | **GET** /v1/erp/reservation-resources/{id}/time-slots |  |
| [**listReservationResources**](ReservationsApi.md#listreservationresources) | **GET** /v1/erp/reservation-resources |  |
| [**listReservationScheduleDateOverrides**](ReservationsApi.md#listreservationscheduledateoverrides) | **GET** /v1/erp/reservation-resources/{id}/schedule/overrides |  |
| [**listReservationTypes**](ReservationsApi.md#listreservationtypes) | **GET** /v1/erp/reservation-types |  |
| [**listReservationTypesForManagement**](ReservationsApi.md#listreservationtypesformanagement) | **GET** /v1/erp/reservation-types/manage |  |
| [**listReservations**](ReservationsApi.md#listreservations) | **GET** /v1/erp/reservations |  |
| [**listResources**](ReservationsApi.md#listresources) | **GET** /v1/erp/resources |  |
| [**listStaffAssignments**](ReservationsApi.md#liststaffassignments) | **GET** /v1/erp/staff-assignments |  |
| [**listStaffAvailability**](ReservationsApi.md#liststaffavailability) | **GET** /v1/erp/staff-availability |  |
| [**listStaffProfiles**](ReservationsApi.md#liststaffprofiles) | **GET** /v1/erp/staff-profiles |  |
| [**listTenantExtensionStatuses**](ReservationsApi.md#listtenantextensionstatuses) | **GET** /v1/erp/extensions/status |  |
| [**listTenantExtensionStatusesAppStore**](ReservationsApi.md#listtenantextensionstatusesappstore) | **GET** /v1/erp/app-store/apps | Thin wrapper so the app-store mount (&#x60;/v1/erp/app-store/apps&#x60;) gets its own OpenAPI path entry; delegates entirely to &#x60;list_tenant_extension_statuses&#x60;. |
| [**listTenantExtensions**](ReservationsApi.md#listtenantextensions) | **GET** /v1/erp/extensions/enabled |  |
| [**listTenantReservationCancellations**](ReservationsApi.md#listtenantreservationcancellations) | **GET** /v1/erp/reservation-cancellations |  |
| [**lookupReservationStatuses**](ReservationsApi.md#lookupreservationstatuses) | **POST** /v1/erp/reservations/status-lookup | Resolves the current state of reservations the caller already references. |
| [**purgeManualReservationResourceTimeSlots**](ReservationsApi.md#purgemanualreservationresourcetimeslots) | **DELETE** /v1/erp/reservation-resources/{id}/time-slots/manual |  |
| [**purgeReservationResourceTimeSlots**](ReservationsApi.md#purgereservationresourcetimeslots) | **DELETE** /v1/erp/reservation-resources/{id}/time-slots |  |
| [**putReservationScheduleDateOverride**](ReservationsApi.md#putreservationscheduledateoverrideoperation) | **PUT** /v1/erp/reservation-resources/{id}/schedule/overrides/{localDate} |  |
| [**putReservationScheduleLocation**](ReservationsApi.md#putreservationschedulelocationoperation) | **PUT** /v1/erp/reservation-schedule-location |  |
| [**registerExtension**](ReservationsApi.md#registerextensionoperation) | **POST** /v1/erp/extensions |  |
| [**releaseExpiredPaymentHolds**](ReservationsApi.md#releaseexpiredpaymentholds) | **POST** /v1/erp/reservations/payment-holds/release-expired |  |
| [**releasePaymentIntentHold**](ReservationsApi.md#releasepaymentintentholdoperation) | **POST** /v1/erp/reservations/payment-holds/release |  |
| [**replaceReservationProduct**](ReservationsApi.md#replacereservationproduct) | **PUT** /v1/erp/reservation-products/{id} |  |
| [**replaceReservationProductSlots**](ReservationsApi.md#replacereservationproductslotsoperation) | **PUT** /v1/erp/reservation-products/{id}/slots |  |
| [**replaceReservationResourceSchedule**](ReservationsApi.md#replacereservationresourcescheduleoperation) | **PUT** /v1/erp/reservation-resources/{id}/schedule |  |
| [**seedReservationProductsFromExtensionConfig**](ReservationsApi.md#seedreservationproductsfromextensionconfig) | **POST** /v1/erp/reservation-products/seed-from-extension-config |  |
| [**sendReservationNotification**](ReservationsApi.md#sendreservationnotificationoperation) | **POST** /v1/erp/reservations/{id}/notifications |  |
| [**unassignReservationStaff**](ReservationsApi.md#unassignreservationstaff) | **POST** /v1/erp/reservations/{id}/staff-assignment/unassign |  |
| [**updateCustomerClientAffiliation**](ReservationsApi.md#updatecustomerclientaffiliationoperation) | **PATCH** /v1/erp/customer-client-affiliations/{id} |  |
| [**updateExtensionConfig**](ReservationsApi.md#updateextensionconfigoperation) | **PATCH** /v1/erp/extensions/{extension_key}/config |  |
| [**updateReservation**](ReservationsApi.md#updatereservationoperation) | **PATCH** /v1/erp/reservations/{id} |  |
| [**updateReservationResource**](ReservationsApi.md#updatereservationresourceoperation) | **PATCH** /v1/erp/reservation-resources/{id} |  |
| [**updateReservationType**](ReservationsApi.md#updatereservationtypeoperation) | **PATCH** /v1/erp/reservation-types/{id} |  |
| [**updateStaffAssignment**](ReservationsApi.md#updatestaffassignment) | **PATCH** /v1/erp/staff-assignments/{id} |  |
| [**updateStaffProfile**](ReservationsApi.md#updatestaffprofile) | **PATCH** /v1/erp/staff-profiles/{id} |  |



## assignReservationStaff

> StaffAssignmentView assignReservationStaff(id, saveReservationStaffAssignmentRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { AssignReservationStaffRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation ID to assign staff to
    id: id_example,
    // SaveReservationStaffAssignmentRequest
    saveReservationStaffAssignmentRequest: ...,
  } satisfies AssignReservationStaffRequest;

  try {
    const data = await api.assignReservationStaff(body);
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
| **id** | `string` | Reservation ID to assign staff to | [Defaults to `undefined`] |
| **saveReservationStaffAssignmentRequest** | [SaveReservationStaffAssignmentRequest](SaveReservationStaffAssignmentRequest.md) |  | |

### Return type

[**StaffAssignmentView**](StaffAssignmentView.md)

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


## cancelReservationWithPolicy

> Reservation cancelReservationWithPolicy(id, cancelReservationRequest, idempotencyKey)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { CancelReservationWithPolicyRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation ID to cancel
    id: id_example,
    // CancelReservationRequest
    cancelReservationRequest: ...,
    // string | Retry-safe cancellation key; the same key replays the first outcome instead of refunding twice (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CancelReservationWithPolicyRequest;

  try {
    const data = await api.cancelReservationWithPolicy(body);
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
| **id** | `string` | Reservation ID to cancel | [Defaults to `undefined`] |
| **cancelReservationRequest** | [CancelReservationRequest](CancelReservationRequest.md) |  | |
| **idempotencyKey** | `string` | Retry-safe cancellation key; the same key replays the first outcome instead of refunding twice | [Optional] [Defaults to `undefined`] |

### Return type

[**Reservation**](Reservation.md)

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


## closeCustomerClientAffiliation

> CustomerClientAffiliation closeCustomerClientAffiliation(id, closeCustomerClientAffiliationRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { CloseCustomerClientAffiliationOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Customer-client affiliation ID
    id: id_example,
    // CloseCustomerClientAffiliationRequest
    closeCustomerClientAffiliationRequest: ...,
  } satisfies CloseCustomerClientAffiliationOperationRequest;

  try {
    const data = await api.closeCustomerClientAffiliation(body);
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
| **id** | `string` | Customer-client affiliation ID | [Defaults to `undefined`] |
| **closeCustomerClientAffiliationRequest** | [CloseCustomerClientAffiliationRequest](CloseCustomerClientAffiliationRequest.md) |  | |

### Return type

[**CustomerClientAffiliation**](CustomerClientAffiliation.md)

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


## createCustomerClientAffiliation

> CustomerClientAffiliation createCustomerClientAffiliation(createCustomerClientAffiliationRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { CreateCustomerClientAffiliationOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // CreateCustomerClientAffiliationRequest
    createCustomerClientAffiliationRequest: ...,
  } satisfies CreateCustomerClientAffiliationOperationRequest;

  try {
    const data = await api.createCustomerClientAffiliation(body);
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
| **createCustomerClientAffiliationRequest** | [CreateCustomerClientAffiliationRequest](CreateCustomerClientAffiliationRequest.md) |  | |

### Return type

[**CustomerClientAffiliation**](CustomerClientAffiliation.md)

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


## createReservation

> CreateReservationResponse createReservation(createReservationRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { CreateReservationOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // CreateReservationRequest
    createReservationRequest: ...,
  } satisfies CreateReservationOperationRequest;

  try {
    const data = await api.createReservation(body);
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
| **createReservationRequest** | [CreateReservationRequest](CreateReservationRequest.md) |  | |

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createReservationProduct

> ReservationProductCatalogItem createReservationProduct(saveReservationProductRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { CreateReservationProductRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // SaveReservationProductRequest
    saveReservationProductRequest: ...,
  } satisfies CreateReservationProductRequest;

  try {
    const data = await api.createReservationProduct(body);
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
| **saveReservationProductRequest** | [SaveReservationProductRequest](SaveReservationProductRequest.md) |  | |

### Return type

[**ReservationProductCatalogItem**](ReservationProductCatalogItem.md)

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


## createReservationResource

> ReservationResourceResponse createReservationResource(createReservationResourceRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { CreateReservationResourceOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // CreateReservationResourceRequest
    createReservationResourceRequest: ...,
  } satisfies CreateReservationResourceOperationRequest;

  try {
    const data = await api.createReservationResource(body);
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
| **createReservationResourceRequest** | [CreateReservationResourceRequest](CreateReservationResourceRequest.md) |  | |

### Return type

[**ReservationResourceResponse**](ReservationResourceResponse.md)

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


## createReservationType

> ReservationType createReservationType(createReservationTypeRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { CreateReservationTypeOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // CreateReservationTypeRequest
    createReservationTypeRequest: ...,
  } satisfies CreateReservationTypeOperationRequest;

  try {
    const data = await api.createReservationType(body);
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
| **createReservationTypeRequest** | [CreateReservationTypeRequest](CreateReservationTypeRequest.md) |  | |

### Return type

[**ReservationType**](ReservationType.md)

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


## createStaffAssignment

> StaffAssignmentView createStaffAssignment(saveStaffAssignmentRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { CreateStaffAssignmentRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // SaveStaffAssignmentRequest
    saveStaffAssignmentRequest: ...,
  } satisfies CreateStaffAssignmentRequest;

  try {
    const data = await api.createStaffAssignment(body);
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
| **saveStaffAssignmentRequest** | [SaveStaffAssignmentRequest](SaveStaffAssignmentRequest.md) |  | |

### Return type

[**StaffAssignmentView**](StaffAssignmentView.md)

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


## createStaffProfile

> StaffProfileView createStaffProfile(saveStaffProfileRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { CreateStaffProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // SaveStaffProfileRequest
    saveStaffProfileRequest: ...,
  } satisfies CreateStaffProfileRequest;

  try {
    const data = await api.createStaffProfile(body);
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
| **saveStaffProfileRequest** | [SaveStaffProfileRequest](SaveStaffProfileRequest.md) |  | |

### Return type

[**StaffProfileView**](StaffProfileView.md)

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


## deleteReservationProduct

> deleteReservationProduct(id)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { DeleteReservationProductRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation product ID
    id: id_example,
  } satisfies DeleteReservationProductRequest;

  try {
    const data = await api.deleteReservationProduct(body);
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
| **id** | `string` | Reservation product ID | [Defaults to `undefined`] |

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
| **204** | Product and its child slots removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteReservationResource

> deleteReservationResource(id)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { DeleteReservationResourceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
  } satisfies DeleteReservationResourceRequest;

  try {
    const data = await api.deleteReservationResource(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |

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
| **204** | Resource, schedule, and generated inventory removed |  -  |
| **409** | Reservations, committed inventory, or an extension binding still depend on the resource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteReservationScheduleDateOverride

> deleteReservationScheduleDateOverride(id, localDate, expectedRevision)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { DeleteReservationScheduleDateOverrideRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // Date | Override local date
    localDate: 2013-10-20,
    // number
    expectedRevision: 789,
  } satisfies DeleteReservationScheduleDateOverrideRequest;

  try {
    const data = await api.deleteReservationScheduleDateOverride(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **localDate** | `Date` | Override local date | [Defaults to `undefined`] |
| **expectedRevision** | `number` |  | [Defaults to `undefined`] |

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
| **204** | Date override disabled |  -  |
| **409** | Override revision does not match |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteReservationScheduleLocation

> deleteReservationScheduleLocation(expectedRevision)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { DeleteReservationScheduleLocationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // number
    expectedRevision: 789,
  } satisfies DeleteReservationScheduleLocationRequest;

  try {
    const data = await api.deleteReservationScheduleLocation(body);
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
| **expectedRevision** | `number` |  | [Defaults to `undefined`] |

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
| **204** | Tenant schedule location deleted |  -  |
| **409** | Location is stale or used by an active solar rule |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteReservationType

> deleteReservationType(id)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { DeleteReservationTypeRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation type ID
    id: id_example,
  } satisfies DeleteReservationTypeRequest;

  try {
    const data = await api.deleteReservationType(body);
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
| **id** | `string` | Reservation type ID | [Defaults to `undefined`] |

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


## disableExtension

> TenantExtension disableExtension(extensionKey)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { DisableExtensionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Extension key to disable for the tenant
    extensionKey: extensionKey_example,
  } satisfies DisableExtensionRequest;

  try {
    const data = await api.disableExtension(body);
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
| **extensionKey** | `string` | Extension key to disable for the tenant | [Defaults to `undefined`] |

### Return type

[**TenantExtension**](TenantExtension.md)

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


## enableExtension

> TenantExtension enableExtension(extensionKey, enableExtensionRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { EnableExtensionOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Extension key to enable for the tenant
    extensionKey: extensionKey_example,
    // EnableExtensionRequest
    enableExtensionRequest: ...,
  } satisfies EnableExtensionOperationRequest;

  try {
    const data = await api.enableExtension(body);
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
| **extensionKey** | `string` | Extension key to enable for the tenant | [Defaults to `undefined`] |
| **enableExtensionRequest** | [EnableExtensionRequest](EnableExtensionRequest.md) |  | |

### Return type

[**TenantExtension**](TenantExtension.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **409** | Reservation products are served from the generic product catalog for this tenant; write them through /v1/erp/reservation-products |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportCancellationFeeReportCsv

> string exportCancellationFeeReportCsv(from, to)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ExportCancellationFeeReportCsvRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // Date (optional)
    from: 2013-10-20,
    // Date (optional)
    to: 2013-10-20,
  } satisfies ExportCancellationFeeReportCsvRequest;

  try {
    const data = await api.exportCancellationFeeReportCsv(body);
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
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CSV export of cancellation fees |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportReservationsCsv

> string exportReservationsCsv(from, to)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ExportReservationsCsvRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // Date (optional)
    from: 2013-10-20,
    // Date (optional)
    to: 2013-10-20,
  } satisfies ExportReservationsCsvRequest;

  try {
    const data = await api.exportReservationsCsv(body);
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
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CSV export of reservations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateReservationResourceTimeSlots

> ResourceTimeSlotGenerationResponse generateReservationResourceTimeSlots(id, generateResourceTimeSlotsRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { GenerateReservationResourceTimeSlotsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // GenerateResourceTimeSlotsRequest
    generateResourceTimeSlotsRequest: ...,
  } satisfies GenerateReservationResourceTimeSlotsRequest;

  try {
    const data = await api.generateReservationResourceTimeSlots(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **generateResourceTimeSlotsRequest** | [GenerateResourceTimeSlotsRequest](GenerateResourceTimeSlotsRequest.md) |  | |

### Return type

[**ResourceTimeSlotGenerationResponse**](ResourceTimeSlotGenerationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **409** | Existing inventory conflicts with the schedule |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getExtensionConfig

> ExtensionConfig getExtensionConfig(extensionKey, scopeType, scopeId)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { GetExtensionConfigRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Extension key to fetch config for
    extensionKey: extensionKey_example,
    // string | Config scope type (e.g. tenant/store) (optional)
    scopeType: scopeType_example,
    // string | Scope identifier for non-tenant scopes (optional)
    scopeId: scopeId_example,
  } satisfies GetExtensionConfigRequest;

  try {
    const data = await api.getExtensionConfig(body);
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
| **extensionKey** | `string` | Extension key to fetch config for | [Defaults to `undefined`] |
| **scopeType** | `string` | Config scope type (e.g. tenant/store) | [Optional] [Defaults to `undefined`] |
| **scopeId** | `string` | Scope identifier for non-tenant scopes | [Optional] [Defaults to `undefined`] |

### Return type

[**ExtensionConfig**](ExtensionConfig.md)

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


## getReservation

> Reservation getReservation(id)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { GetReservationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation ID
    id: id_example,
  } satisfies GetReservationRequest;

  try {
    const data = await api.getReservation(body);
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
| **id** | `string` | Reservation ID | [Defaults to `undefined`] |

### Return type

[**Reservation**](Reservation.md)

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


## getReservationProduct

> ReservationProductCatalogItem getReservationProduct(id)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { GetReservationProductRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation product ID
    id: id_example,
  } satisfies GetReservationProductRequest;

  try {
    const data = await api.getReservationProduct(body);
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
| **id** | `string` | Reservation product ID | [Defaults to `undefined`] |

### Return type

[**ReservationProductCatalogItem**](ReservationProductCatalogItem.md)

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


## getReservationResource

> ReservationResourceResponse getReservationResource(id)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { GetReservationResourceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
  } satisfies GetReservationResourceRequest;

  try {
    const data = await api.getReservationResource(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |

### Return type

[**ReservationResourceResponse**](ReservationResourceResponse.md)

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


## getReservationResourceSchedule

> ReservationResourceScheduleResponse getReservationResourceSchedule(id)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { GetReservationResourceScheduleRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
  } satisfies GetReservationResourceScheduleRequest;

  try {
    const data = await api.getReservationResourceSchedule(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |

### Return type

[**ReservationResourceScheduleResponse**](ReservationResourceScheduleResponse.md)

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


## getReservationScheduleLocation

> ReservationScheduleLocationResponse getReservationScheduleLocation()



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { GetReservationScheduleLocationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  try {
    const data = await api.getReservationScheduleLocation();
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

[**ReservationScheduleLocationResponse**](ReservationScheduleLocationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Tenant schedule location is not configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importProductSlotsIntoResourceSchedule

> ImportProductSlotsResponse importProductSlotsIntoResourceSchedule(id, importProductSlotsRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ImportProductSlotsIntoResourceScheduleRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // ImportProductSlotsRequest
    importProductSlotsRequest: ...,
  } satisfies ImportProductSlotsIntoResourceScheduleRequest;

  try {
    const data = await api.importProductSlotsIntoResourceSchedule(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **importProductSlotsRequest** | [ImportProductSlotsRequest](ImportProductSlotsRequest.md) |  | |

### Return type

[**ImportProductSlotsResponse**](ImportProductSlotsResponse.md)

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


## issueReservationBillingLink

> IssueReservationBillingLinkResponse issueReservationBillingLink(id, issueReservationBillingLinkRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { IssueReservationBillingLinkOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation ID to issue a billing link for
    id: id_example,
    // IssueReservationBillingLinkRequest
    issueReservationBillingLinkRequest: ...,
  } satisfies IssueReservationBillingLinkOperationRequest;

  try {
    const data = await api.issueReservationBillingLink(body);
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
| **id** | `string` | Reservation ID to issue a billing link for | [Defaults to `undefined`] |
| **issueReservationBillingLinkRequest** | [IssueReservationBillingLinkRequest](IssueReservationBillingLinkRequest.md) |  | |

### Return type

[**IssueReservationBillingLinkResponse**](IssueReservationBillingLinkResponse.md)

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


## issueReservationSquareInvoice

> IssueReservationSquareInvoiceResponse issueReservationSquareInvoice(id)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { IssueReservationSquareInvoiceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation ID to issue a Square invoice for
    id: id_example,
  } satisfies IssueReservationSquareInvoiceRequest;

  try {
    const data = await api.issueReservationSquareInvoice(body);
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
| **id** | `string` | Reservation ID to issue a Square invoice for | [Defaults to `undefined`] |

### Return type

[**IssueReservationSquareInvoiceResponse**](IssueReservationSquareInvoiceResponse.md)

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


## listCancellationFeeReport

> CancellationFeeReportResponse listCancellationFeeReport(from, to)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListCancellationFeeReportRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // Date (optional)
    from: 2013-10-20,
    // Date (optional)
    to: 2013-10-20,
  } satisfies ListCancellationFeeReportRequest;

  try {
    const data = await api.listCancellationFeeReport(body);
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
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CancellationFeeReportResponse**](CancellationFeeReportResponse.md)

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


## listCustomerClientAffiliations

> CustomerClientAffiliationListResponse listCustomerClientAffiliations(customerId)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListCustomerClientAffiliationsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string
    customerId: customerId_example,
  } satisfies ListCustomerClientAffiliationsRequest;

  try {
    const data = await api.listCustomerClientAffiliations(body);
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

[**CustomerClientAffiliationListResponse**](CustomerClientAffiliationListResponse.md)

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


## listExtensionLifecycleAuditEvents

> ExtensionLifecycleAuditListResponse listExtensionLifecycleAuditEvents(extensionKey, limit)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListExtensionLifecycleAuditEventsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Filter audit events by extension key (optional)
    extensionKey: extensionKey_example,
    // number | Maximum number of audit events to return (default 20) (optional)
    limit: 56,
  } satisfies ListExtensionLifecycleAuditEventsRequest;

  try {
    const data = await api.listExtensionLifecycleAuditEvents(body);
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
| **extensionKey** | `string` | Filter audit events by extension key | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of audit events to return (default 20) | [Optional] [Defaults to `undefined`] |

### Return type

[**ExtensionLifecycleAuditListResponse**](ExtensionLifecycleAuditListResponse.md)

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


## listExtensions

> ExtensionManifestListResponse listExtensions()



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListExtensionsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  try {
    const data = await api.listExtensions();
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

[**ExtensionManifestListResponse**](ExtensionManifestListResponse.md)

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


## listReservationCancellations

> ReservationCancellationListResponse listReservationCancellations(id, limit)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListReservationCancellationsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation ID whose cancellation history is read
    id: id_example,
    // number | Maximum number of events to return (default 50, max 200) (optional)
    limit: 56,
  } satisfies ListReservationCancellationsRequest;

  try {
    const data = await api.listReservationCancellations(body);
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
| **id** | `string` | Reservation ID whose cancellation history is read | [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of events to return (default 50, max 200) | [Optional] [Defaults to `undefined`] |

### Return type

[**ReservationCancellationListResponse**](ReservationCancellationListResponse.md)

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


## listReservationProducts

> ReservationProductCatalogListResponse listReservationProducts(includeDisabled)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListReservationProductsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // boolean (optional)
    includeDisabled: true,
  } satisfies ListReservationProductsRequest;

  try {
    const data = await api.listReservationProducts(body);
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
| **includeDisabled** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ReservationProductCatalogListResponse**](ReservationProductCatalogListResponse.md)

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


## listReservationResourceTimeSlots

> ResourceTimeSlotListResponse listReservationResourceTimeSlots(id, from, to, includeInactive)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListReservationResourceTimeSlotsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // Date | Inclusive UTC lower bound on startsAt.
    from: 2013-10-20T19:20:30+01:00,
    // Date | Exclusive UTC upper bound on startsAt.
    to: 2013-10-20T19:20:30+01:00,
    // boolean (optional)
    includeInactive: true,
  } satisfies ListReservationResourceTimeSlotsRequest;

  try {
    const data = await api.listReservationResourceTimeSlots(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **from** | `Date` | Inclusive UTC lower bound on startsAt. | [Defaults to `undefined`] |
| **to** | `Date` | Exclusive UTC upper bound on startsAt. | [Defaults to `undefined`] |
| **includeInactive** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ResourceTimeSlotListResponse**](ResourceTimeSlotListResponse.md)

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


## listReservationResources

> ReservationResourceListResponse listReservationResources(includeInactive)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListReservationResourcesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // boolean | Include inactive resources in the management list. (optional)
    includeInactive: true,
  } satisfies ListReservationResourcesRequest;

  try {
    const data = await api.listReservationResources(body);
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
| **includeInactive** | `boolean` | Include inactive resources in the management list. | [Optional] [Defaults to `undefined`] |

### Return type

[**ReservationResourceListResponse**](ReservationResourceListResponse.md)

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


## listReservationScheduleDateOverrides

> ReservationScheduleDateOverrideListResponse listReservationScheduleDateOverrides(id, from, to)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListReservationScheduleDateOverridesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // Date
    from: 2013-10-20,
    // Date
    to: 2013-10-20,
  } satisfies ListReservationScheduleDateOverridesRequest;

  try {
    const data = await api.listReservationScheduleDateOverrides(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **from** | `Date` |  | [Defaults to `undefined`] |
| **to** | `Date` |  | [Defaults to `undefined`] |

### Return type

[**ReservationScheduleDateOverrideListResponse**](ReservationScheduleDateOverrideListResponse.md)

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


## listReservationTypes

> ReservationTypeListResponse listReservationTypes()



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListReservationTypesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  try {
    const data = await api.listReservationTypes();
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listReservationTypesForManagement

> ReservationTypeListResponse listReservationTypesForManagement(includeInactive)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListReservationTypesForManagementRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // boolean | Include deactivated types. The storefront never sees these. (optional)
    includeInactive: true,
  } satisfies ListReservationTypesForManagementRequest;

  try {
    const data = await api.listReservationTypesForManagement(body);
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
| **includeInactive** | `boolean` | Include deactivated types. The storefront never sees these. | [Optional] [Defaults to `undefined`] |

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listReservations

> ReservationListResponse listReservations(status, paymentStatus, reservationTypeId, resourceId, staffId, customerId, search, limit, offset)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListReservationsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string (optional)
    status: status_example,
    // string (optional)
    paymentStatus: paymentStatus_example,
    // string (optional)
    reservationTypeId: reservationTypeId_example,
    // string (optional)
    resourceId: resourceId_example,
    // string (optional)
    staffId: staffId_example,
    // string (optional)
    customerId: customerId_example,
    // string | Search reservation number or the reservation-held customer snapshot. (optional)
    search: search_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListReservationsRequest;

  try {
    const data = await api.listReservations(body);
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
| **paymentStatus** | `string` |  | [Optional] [Defaults to `undefined`] |
| **reservationTypeId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **resourceId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **staffId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **customerId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **search** | `string` | Search reservation number or the reservation-held customer snapshot. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ReservationListResponse**](ReservationListResponse.md)

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


## listResources

> ResourceListResponse listResources()



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListResourcesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  try {
    const data = await api.listResources();
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStaffAssignments

> StaffAssignmentListResponse listStaffAssignments(reservationId, staffProfileId, status)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListStaffAssignmentsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Filter by reservation ID (optional)
    reservationId: reservationId_example,
    // string | Filter by staff profile ID (optional)
    staffProfileId: staffProfileId_example,
    // string | Filter by assignment status (optional)
    status: status_example,
  } satisfies ListStaffAssignmentsRequest;

  try {
    const data = await api.listStaffAssignments(body);
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
| **reservationId** | `string` | Filter by reservation ID | [Optional] [Defaults to `undefined`] |
| **staffProfileId** | `string` | Filter by staff profile ID | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by assignment status | [Optional] [Defaults to `undefined`] |

### Return type

[**StaffAssignmentListResponse**](StaffAssignmentListResponse.md)

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


## listStaffAvailability

> StaffAvailabilityResponse listStaffAvailability(date, startsAt, endsAt, startTime, endTime, includeUnavailable)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListStaffAvailabilityRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // Date | Date to check availability for (optional)
    date: 2013-10-20,
    // Date | Window start timestamp (optional)
    startsAt: 2013-10-20T19:20:30+01:00,
    // Date | Window end timestamp (optional)
    endsAt: 2013-10-20T19:20:30+01:00,
    // string | Window start time of day (optional)
    startTime: startTime_example,
    // string | Window end time of day (optional)
    endTime: endTime_example,
    // boolean | Include staff marked unavailable (default false) (optional)
    includeUnavailable: true,
  } satisfies ListStaffAvailabilityRequest;

  try {
    const data = await api.listStaffAvailability(body);
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
| **date** | `Date` | Date to check availability for | [Optional] [Defaults to `undefined`] |
| **startsAt** | `Date` | Window start timestamp | [Optional] [Defaults to `undefined`] |
| **endsAt** | `Date` | Window end timestamp | [Optional] [Defaults to `undefined`] |
| **startTime** | `string` | Window start time of day | [Optional] [Defaults to `undefined`] |
| **endTime** | `string` | Window end time of day | [Optional] [Defaults to `undefined`] |
| **includeUnavailable** | `boolean` | Include staff marked unavailable (default false) | [Optional] [Defaults to `undefined`] |

### Return type

[**StaffAvailabilityResponse**](StaffAvailabilityResponse.md)

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


## listStaffProfiles

> StaffProfileListResponse listStaffProfiles()



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListStaffProfilesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  try {
    const data = await api.listStaffProfiles();
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

[**StaffProfileListResponse**](StaffProfileListResponse.md)

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


## listTenantExtensionStatuses

> TenantExtensionStatusListResponse listTenantExtensionStatuses()



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListTenantExtensionStatusesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  try {
    const data = await api.listTenantExtensionStatuses();
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

[**TenantExtensionStatusListResponse**](TenantExtensionStatusListResponse.md)

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


## listTenantExtensionStatusesAppStore

> TenantExtensionStatusListResponse listTenantExtensionStatusesAppStore()

Thin wrapper so the app-store mount (&#x60;/v1/erp/app-store/apps&#x60;) gets its own OpenAPI path entry; delegates entirely to &#x60;list_tenant_extension_statuses&#x60;.

### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListTenantExtensionStatusesAppStoreRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  try {
    const data = await api.listTenantExtensionStatusesAppStore();
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

[**TenantExtensionStatusListResponse**](TenantExtensionStatusListResponse.md)

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


## listTenantExtensions

> TenantExtensionListResponse listTenantExtensions()



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListTenantExtensionsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  try {
    const data = await api.listTenantExtensions();
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

[**TenantExtensionListResponse**](TenantExtensionListResponse.md)

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


## listTenantReservationCancellations

> ReservationCancellationListResponse listTenantReservationCancellations(reservationId, from, to, limit)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ListTenantReservationCancellationsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Narrow the tenant-wide trail to one reservation. (optional)
    reservationId: reservationId_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
  } satisfies ListTenantReservationCancellationsRequest;

  try {
    const data = await api.listTenantReservationCancellations(body);
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
| **reservationId** | `string` | Narrow the tenant-wide trail to one reservation. | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ReservationCancellationListResponse**](ReservationCancellationListResponse.md)

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


## lookupReservationStatuses

> ReservationStatusLookupResponse lookupReservationStatuses(reservationStatusLookupRequest)

Resolves the current state of reservations the caller already references.

An extension that stores its own records against reservation ids (staff assignments, for example) has no way to learn that a reservation was cancelled elsewhere in Field. Re-listing reservations does not answer it either: &#x60;GET /v1/erp/reservations&#x60; is capped at 500 rows ordered by &#x60;startsAt DESC&#x60;, so anything older simply never comes back. This takes the ids the caller holds and answers only \&quot;are these still live\&quot;, which stays correct however old the reservations are.  It is a POST because the id set is a request body rather than a URL-sized parameter; it reads nothing else and is authorized as a read (&#x60;field:ListReservations&#x60;).

### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { LookupReservationStatusesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // ReservationStatusLookupRequest
    reservationStatusLookupRequest: ...,
  } satisfies LookupReservationStatusesRequest;

  try {
    const data = await api.lookupReservationStatuses(body);
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
| **reservationStatusLookupRequest** | [ReservationStatusLookupRequest](ReservationStatusLookupRequest.md) |  | |

### Return type

[**ReservationStatusLookupResponse**](ReservationStatusLookupResponse.md)

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


## purgeManualReservationResourceTimeSlots

> PurgeResourceTimeSlotsResponse purgeManualReservationResourceTimeSlots(id, from, to, dryRun)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { PurgeManualReservationResourceTimeSlotsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // Date | Inclusive UTC lower bound on startsAt.
    from: 2013-10-20T19:20:30+01:00,
    // Date | Exclusive UTC upper bound on startsAt.
    to: 2013-10-20T19:20:30+01:00,
    // boolean | Report the same selection and conflicts without deleting. (optional)
    dryRun: true,
  } satisfies PurgeManualReservationResourceTimeSlotsRequest;

  try {
    const data = await api.purgeManualReservationResourceTimeSlots(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **from** | `Date` | Inclusive UTC lower bound on startsAt. | [Defaults to `undefined`] |
| **to** | `Date` | Exclusive UTC upper bound on startsAt. | [Defaults to `undefined`] |
| **dryRun** | `boolean` | Report the same selection and conflicts without deleting. | [Optional] [Defaults to `undefined`] |

### Return type

[**PurgeResourceTimeSlotsResponse**](PurgeResourceTimeSlotsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **409** | A manual slot with reserved or held groups is inside the requested range |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## purgeReservationResourceTimeSlots

> PurgeResourceTimeSlotsResponse purgeReservationResourceTimeSlots(id, from, to, dryRun)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { PurgeReservationResourceTimeSlotsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // Date | Inclusive UTC lower bound on startsAt.
    from: 2013-10-20T19:20:30+01:00,
    // Date | Exclusive UTC upper bound on startsAt.
    to: 2013-10-20T19:20:30+01:00,
    // boolean | Report the same selection and conflicts without deleting. (optional)
    dryRun: true,
  } satisfies PurgeReservationResourceTimeSlotsRequest;

  try {
    const data = await api.purgeReservationResourceTimeSlots(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **from** | `Date` | Inclusive UTC lower bound on startsAt. | [Defaults to `undefined`] |
| **to** | `Date` | Exclusive UTC upper bound on startsAt. | [Defaults to `undefined`] |
| **dryRun** | `boolean` | Report the same selection and conflicts without deleting. | [Optional] [Defaults to `undefined`] |

### Return type

[**PurgeResourceTimeSlotsResponse**](PurgeResourceTimeSlotsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **409** | A reserved or held slot is inside the requested range |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putReservationScheduleDateOverride

> ReservationScheduleDateOverride putReservationScheduleDateOverride(id, localDate, putReservationScheduleDateOverrideRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { PutReservationScheduleDateOverrideOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // Date | Override local date
    localDate: 2013-10-20,
    // PutReservationScheduleDateOverrideRequest
    putReservationScheduleDateOverrideRequest: ...,
  } satisfies PutReservationScheduleDateOverrideOperationRequest;

  try {
    const data = await api.putReservationScheduleDateOverride(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **localDate** | `Date` | Override local date | [Defaults to `undefined`] |
| **putReservationScheduleDateOverrideRequest** | [PutReservationScheduleDateOverrideRequest](PutReservationScheduleDateOverrideRequest.md) |  | |

### Return type

[**ReservationScheduleDateOverride**](ReservationScheduleDateOverride.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **409** | Override revision does not match |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putReservationScheduleLocation

> ReservationScheduleLocationResponse putReservationScheduleLocation(putReservationScheduleLocationRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { PutReservationScheduleLocationOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // PutReservationScheduleLocationRequest
    putReservationScheduleLocationRequest: ...,
  } satisfies PutReservationScheduleLocationOperationRequest;

  try {
    const data = await api.putReservationScheduleLocation(body);
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
| **putReservationScheduleLocationRequest** | [PutReservationScheduleLocationRequest](PutReservationScheduleLocationRequest.md) |  | |

### Return type

[**ReservationScheduleLocationResponse**](ReservationScheduleLocationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **409** | Location revision does not match |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## registerExtension

> ExtensionManifest registerExtension(registerExtensionRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { RegisterExtensionOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // RegisterExtensionRequest
    registerExtensionRequest: ...,
  } satisfies RegisterExtensionOperationRequest;

  try {
    const data = await api.registerExtension(body);
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
| **registerExtensionRequest** | [RegisterExtensionRequest](RegisterExtensionRequest.md) |  | |

### Return type

[**ExtensionManifest**](ExtensionManifest.md)

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


## releaseExpiredPaymentHolds

> ReleasePaymentHoldsResult releaseExpiredPaymentHolds(releasePaymentHoldsRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ReleaseExpiredPaymentHoldsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // ReleasePaymentHoldsRequest
    releasePaymentHoldsRequest: ...,
  } satisfies ReleaseExpiredPaymentHoldsRequest;

  try {
    const data = await api.releaseExpiredPaymentHolds(body);
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
| **releasePaymentHoldsRequest** | [ReleasePaymentHoldsRequest](ReleasePaymentHoldsRequest.md) |  | |

### Return type

[**ReleasePaymentHoldsResult**](ReleasePaymentHoldsResult.md)

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


## releasePaymentIntentHold

> PaymentIntent releasePaymentIntentHold(releasePaymentIntentHoldRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ReleasePaymentIntentHoldOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // ReleasePaymentIntentHoldRequest
    releasePaymentIntentHoldRequest: ...,
  } satisfies ReleasePaymentIntentHoldOperationRequest;

  try {
    const data = await api.releasePaymentIntentHold(body);
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
| **releasePaymentIntentHoldRequest** | [ReleasePaymentIntentHoldRequest](ReleasePaymentIntentHoldRequest.md) |  | |

### Return type

[**PaymentIntent**](PaymentIntent.md)

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


## replaceReservationProduct

> ReservationProductCatalogItem replaceReservationProduct(id, saveReservationProductRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ReplaceReservationProductRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation product ID
    id: id_example,
    // SaveReservationProductRequest
    saveReservationProductRequest: ...,
  } satisfies ReplaceReservationProductRequest;

  try {
    const data = await api.replaceReservationProduct(body);
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
| **id** | `string` | Reservation product ID | [Defaults to `undefined`] |
| **saveReservationProductRequest** | [SaveReservationProductRequest](SaveReservationProductRequest.md) |  | |

### Return type

[**ReservationProductCatalogItem**](ReservationProductCatalogItem.md)

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


## replaceReservationProductSlots

> ReservationProductSlotListResponse replaceReservationProductSlots(id, replaceReservationProductSlotsRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ReplaceReservationProductSlotsOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation product ID
    id: id_example,
    // ReplaceReservationProductSlotsRequest
    replaceReservationProductSlotsRequest: ...,
  } satisfies ReplaceReservationProductSlotsOperationRequest;

  try {
    const data = await api.replaceReservationProductSlots(body);
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
| **id** | `string` | Reservation product ID | [Defaults to `undefined`] |
| **replaceReservationProductSlotsRequest** | [ReplaceReservationProductSlotsRequest](ReplaceReservationProductSlotsRequest.md) |  | |

### Return type

[**ReservationProductSlotListResponse**](ReservationProductSlotListResponse.md)

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


## replaceReservationResourceSchedule

> ReservationResourceScheduleResponse replaceReservationResourceSchedule(id, replaceReservationResourceScheduleRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { ReplaceReservationResourceScheduleOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // ReplaceReservationResourceScheduleRequest
    replaceReservationResourceScheduleRequest: ...,
  } satisfies ReplaceReservationResourceScheduleOperationRequest;

  try {
    const data = await api.replaceReservationResourceSchedule(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **replaceReservationResourceScheduleRequest** | [ReplaceReservationResourceScheduleRequest](ReplaceReservationResourceScheduleRequest.md) |  | |

### Return type

[**ReservationResourceScheduleResponse**](ReservationResourceScheduleResponse.md)

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


## seedReservationProductsFromExtensionConfig

> SeedReservationProductsResponse seedReservationProductsFromExtensionConfig(seedReservationProductsRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { SeedReservationProductsFromExtensionConfigRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // SeedReservationProductsRequest
    seedReservationProductsRequest: ...,
  } satisfies SeedReservationProductsFromExtensionConfigRequest;

  try {
    const data = await api.seedReservationProductsFromExtensionConfig(body);
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
| **seedReservationProductsRequest** | [SeedReservationProductsRequest](SeedReservationProductsRequest.md) |  | |

### Return type

[**SeedReservationProductsResponse**](SeedReservationProductsResponse.md)

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


## sendReservationNotification

> SendReservationNotificationResponse sendReservationNotification(id, sendReservationNotificationRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { SendReservationNotificationOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation ID to send a notification for
    id: id_example,
    // SendReservationNotificationRequest
    sendReservationNotificationRequest: ...,
  } satisfies SendReservationNotificationOperationRequest;

  try {
    const data = await api.sendReservationNotification(body);
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
| **id** | `string` | Reservation ID to send a notification for | [Defaults to `undefined`] |
| **sendReservationNotificationRequest** | [SendReservationNotificationRequest](SendReservationNotificationRequest.md) |  | |

### Return type

[**SendReservationNotificationResponse**](SendReservationNotificationResponse.md)

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


## unassignReservationStaff

> StaffAssignmentView unassignReservationStaff(id)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { UnassignReservationStaffRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation ID to unassign staff from
    id: id_example,
  } satisfies UnassignReservationStaffRequest;

  try {
    const data = await api.unassignReservationStaff(body);
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
| **id** | `string` | Reservation ID to unassign staff from | [Defaults to `undefined`] |

### Return type

[**StaffAssignmentView**](StaffAssignmentView.md)

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


## updateCustomerClientAffiliation

> CustomerClientAffiliation updateCustomerClientAffiliation(id, updateCustomerClientAffiliationRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { UpdateCustomerClientAffiliationOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Customer-client affiliation ID
    id: id_example,
    // UpdateCustomerClientAffiliationRequest
    updateCustomerClientAffiliationRequest: ...,
  } satisfies UpdateCustomerClientAffiliationOperationRequest;

  try {
    const data = await api.updateCustomerClientAffiliation(body);
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
| **id** | `string` | Customer-client affiliation ID | [Defaults to `undefined`] |
| **updateCustomerClientAffiliationRequest** | [UpdateCustomerClientAffiliationRequest](UpdateCustomerClientAffiliationRequest.md) |  | |

### Return type

[**CustomerClientAffiliation**](CustomerClientAffiliation.md)

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


## updateExtensionConfig

> ExtensionConfig updateExtensionConfig(extensionKey, updateExtensionConfigRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { UpdateExtensionConfigOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Extension key to update config for
    extensionKey: extensionKey_example,
    // UpdateExtensionConfigRequest
    updateExtensionConfigRequest: ...,
  } satisfies UpdateExtensionConfigOperationRequest;

  try {
    const data = await api.updateExtensionConfig(body);
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
| **extensionKey** | `string` | Extension key to update config for | [Defaults to `undefined`] |
| **updateExtensionConfigRequest** | [UpdateExtensionConfigRequest](UpdateExtensionConfigRequest.md) |  | |

### Return type

[**ExtensionConfig**](ExtensionConfig.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **409** | Reservation products are served from the generic product catalog for this tenant; write them through /v1/erp/reservation-products |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateReservation

> Reservation updateReservation(id, updateReservationRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { UpdateReservationOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation ID
    id: id_example,
    // UpdateReservationRequest
    updateReservationRequest: ...,
  } satisfies UpdateReservationOperationRequest;

  try {
    const data = await api.updateReservation(body);
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
| **id** | `string` | Reservation ID | [Defaults to `undefined`] |
| **updateReservationRequest** | [UpdateReservationRequest](UpdateReservationRequest.md) |  | |

### Return type

[**Reservation**](Reservation.md)

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


## updateReservationResource

> ReservationResourceResponse updateReservationResource(id, updateReservationResourceRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { UpdateReservationResourceOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation resource ID
    id: id_example,
    // UpdateReservationResourceRequest
    updateReservationResourceRequest: ...,
  } satisfies UpdateReservationResourceOperationRequest;

  try {
    const data = await api.updateReservationResource(body);
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
| **id** | `string` | Reservation resource ID | [Defaults to `undefined`] |
| **updateReservationResourceRequest** | [UpdateReservationResourceRequest](UpdateReservationResourceRequest.md) |  | |

### Return type

[**ReservationResourceResponse**](ReservationResourceResponse.md)

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


## updateReservationType

> ReservationType updateReservationType(id, updateReservationTypeRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { UpdateReservationTypeOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Reservation type ID
    id: id_example,
    // UpdateReservationTypeRequest
    updateReservationTypeRequest: ...,
  } satisfies UpdateReservationTypeOperationRequest;

  try {
    const data = await api.updateReservationType(body);
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
| **id** | `string` | Reservation type ID | [Defaults to `undefined`] |
| **updateReservationTypeRequest** | [UpdateReservationTypeRequest](UpdateReservationTypeRequest.md) |  | |

### Return type

[**ReservationType**](ReservationType.md)

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


## updateStaffAssignment

> StaffAssignmentView updateStaffAssignment(id, saveStaffAssignmentRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffAssignmentRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Staff assignment ID to update
    id: id_example,
    // SaveStaffAssignmentRequest
    saveStaffAssignmentRequest: ...,
  } satisfies UpdateStaffAssignmentRequest;

  try {
    const data = await api.updateStaffAssignment(body);
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
| **id** | `string` | Staff assignment ID to update | [Defaults to `undefined`] |
| **saveStaffAssignmentRequest** | [SaveStaffAssignmentRequest](SaveStaffAssignmentRequest.md) |  | |

### Return type

[**StaffAssignmentView**](StaffAssignmentView.md)

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


## updateStaffProfile

> StaffProfileView updateStaffProfile(id, saveStaffProfileRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string | Staff profile ID to update
    id: id_example,
    // SaveStaffProfileRequest
    saveStaffProfileRequest: ...,
  } satisfies UpdateStaffProfileRequest;

  try {
    const data = await api.updateStaffProfile(body);
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
| **id** | `string` | Staff profile ID to update | [Defaults to `undefined`] |
| **saveStaffProfileRequest** | [SaveStaffProfileRequest](SaveStaffProfileRequest.md) |  | |

### Return type

[**StaffProfileView**](StaffProfileView.md)

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

