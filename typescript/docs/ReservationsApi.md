# ReservationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assignReservationStaff**](ReservationsApi.md#assignreservationstaff) | **POST** /v1/erp/reservations/{id}/staff-assignment |  |
| [**cancelReservationWithPolicy**](ReservationsApi.md#cancelreservationwithpolicy) | **POST** /v1/erp/reservations/{id}/cancel |  |
| [**createReservation**](ReservationsApi.md#createreservationoperation) | **POST** /v1/erp/reservations |  |
| [**createStaffAssignment**](ReservationsApi.md#createstaffassignment) | **POST** /v1/erp/staff-assignments |  |
| [**createStaffProfile**](ReservationsApi.md#createstaffprofile) | **POST** /v1/erp/staff-profiles |  |
| [**disableExtension**](ReservationsApi.md#disableextension) | **POST** /v1/erp/extensions/{extension_key}/disable |  |
| [**enableExtension**](ReservationsApi.md#enableextensionoperation) | **POST** /v1/erp/extensions/{extension_key}/enable |  |
| [**exportCancellationFeeReportCsv**](ReservationsApi.md#exportcancellationfeereportcsv) | **GET** /v1/erp/reservation-reports/cancellation-fees.csv |  |
| [**exportReservationsCsv**](ReservationsApi.md#exportreservationscsv) | **GET** /v1/erp/reservations/export.csv |  |
| [**getExtensionConfig**](ReservationsApi.md#getextensionconfig) | **GET** /v1/erp/extensions/{extension_key}/config |  |
| [**getReservation**](ReservationsApi.md#getreservation) | **GET** /v1/erp/reservations/{id} |  |
| [**issueReservationBillingLink**](ReservationsApi.md#issuereservationbillinglinkoperation) | **POST** /v1/erp/reservations/{id}/billing-link |  |
| [**issueReservationSquareInvoice**](ReservationsApi.md#issuereservationsquareinvoice) | **POST** /v1/erp/reservations/{id}/billing-invoice |  |
| [**listCancellationFeeReport**](ReservationsApi.md#listcancellationfeereport) | **GET** /v1/erp/reservation-reports/cancellation-fees |  |
| [**listExtensionLifecycleAuditEvents**](ReservationsApi.md#listextensionlifecycleauditevents) | **GET** /v1/erp/extensions/audit |  |
| [**listExtensions**](ReservationsApi.md#listextensions) | **GET** /v1/erp/extensions |  |
| [**listReservationTypes**](ReservationsApi.md#listreservationtypes) | **GET** /v1/erp/reservation-types |  |
| [**listReservations**](ReservationsApi.md#listreservations) | **GET** /v1/erp/reservations |  |
| [**listResources**](ReservationsApi.md#listresources) | **GET** /v1/erp/resources |  |
| [**listStaffAssignments**](ReservationsApi.md#liststaffassignments) | **GET** /v1/erp/staff-assignments |  |
| [**listStaffAvailability**](ReservationsApi.md#liststaffavailability) | **GET** /v1/erp/staff-availability |  |
| [**listStaffProfiles**](ReservationsApi.md#liststaffprofiles) | **GET** /v1/erp/staff-profiles |  |
| [**listTenantExtensionStatuses**](ReservationsApi.md#listtenantextensionstatuses) | **GET** /v1/erp/extensions/status |  |
| [**listTenantExtensionStatusesAppStore**](ReservationsApi.md#listtenantextensionstatusesappstore) | **GET** /v1/erp/app-store/apps | Thin wrapper so the app-store mount (&#x60;/v1/erp/app-store/apps&#x60;) gets its own OpenAPI path entry; delegates entirely to &#x60;list_tenant_extension_statuses&#x60;. |
| [**listTenantExtensions**](ReservationsApi.md#listtenantextensions) | **GET** /v1/erp/extensions/enabled |  |
| [**registerExtension**](ReservationsApi.md#registerextensionoperation) | **POST** /v1/erp/extensions |  |
| [**releaseExpiredPaymentHolds**](ReservationsApi.md#releaseexpiredpaymentholds) | **POST** /v1/erp/reservations/payment-holds/release-expired |  |
| [**releasePaymentIntentHold**](ReservationsApi.md#releasepaymentintentholdoperation) | **POST** /v1/erp/reservations/payment-holds/release |  |
| [**sendReservationNotification**](ReservationsApi.md#sendreservationnotificationoperation) | **POST** /v1/erp/reservations/{id}/notifications |  |
| [**unassignReservationStaff**](ReservationsApi.md#unassignreservationstaff) | **POST** /v1/erp/reservations/{id}/staff-assignment/unassign |  |
| [**updateExtensionConfig**](ReservationsApi.md#updateextensionconfigoperation) | **PATCH** /v1/erp/extensions/{extension_key}/config |  |
| [**updateReservation**](ReservationsApi.md#updatereservationoperation) | **PATCH** /v1/erp/reservations/{id} |  |
| [**updateStaffAssignment**](ReservationsApi.md#updatestaffassignment) | **PATCH** /v1/erp/staff-assignments/{id} |  |
| [**updateStaffProfile**](ReservationsApi.md#updatestaffprofile) | **PATCH** /v1/erp/staff-profiles/{id} |  |



## assignReservationStaff

> StaffAssignmentView assignReservationStaff(id, saveReservationStaffAssignmentRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { AssignReservationStaffRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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

> Reservation cancelReservationWithPolicy(id, cancelReservationRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { CancelReservationWithPolicyRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## createReservation

> CreateReservationResponse createReservation(createReservationRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { CreateReservationOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## createStaffAssignment

> StaffAssignmentView createStaffAssignment(saveStaffAssignmentRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { CreateStaffAssignmentRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { CreateStaffProfileRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## disableExtension

> TenantExtension disableExtension(extensionKey)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { DisableExtensionRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { EnableExtensionOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportCancellationFeeReportCsv

> string exportCancellationFeeReportCsv(from, to)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { ExportCancellationFeeReportCsvRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ExportReservationsCsvRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## getExtensionConfig

> ExtensionConfig getExtensionConfig(extensionKey, scopeType, scopeId)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { GetExtensionConfigRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { GetReservationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string
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
| **id** | `string` |  | [Defaults to `undefined`] |

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


## issueReservationBillingLink

> IssueReservationBillingLinkResponse issueReservationBillingLink(id, issueReservationBillingLinkRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { IssueReservationBillingLinkOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { IssueReservationSquareInvoiceRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListCancellationFeeReportRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## listExtensionLifecycleAuditEvents

> ExtensionLifecycleAuditListResponse listExtensionLifecycleAuditEvents(extensionKey, limit)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { ListExtensionLifecycleAuditEventsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListExtensionsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## listReservationTypes

> ReservationTypeListResponse listReservationTypes()



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { ListReservationTypesRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## listReservations

> ReservationListResponse listReservations(status, paymentStatus, reservationTypeId, resourceId, staffId, customerId, limit, offset)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { ListReservationsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListResourcesRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListStaffAssignmentsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListStaffAvailabilityRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListStaffProfilesRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListTenantExtensionStatusesRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListTenantExtensionStatusesAppStoreRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListTenantExtensionsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## registerExtension

> ExtensionManifest registerExtension(registerExtensionRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { RegisterExtensionOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ReleaseExpiredPaymentHoldsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ReleasePaymentIntentHoldOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## sendReservationNotification

> SendReservationNotificationResponse sendReservationNotification(id, sendReservationNotificationRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { SendReservationNotificationOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { UnassignReservationStaffRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## updateExtensionConfig

> ExtensionConfig updateExtensionConfig(extensionKey, updateExtensionConfigRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { UpdateExtensionConfigOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateReservation

> Reservation updateReservation(id, updateReservationRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { UpdateReservationOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReservationsApi(config);

  const body = {
    // string
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
| **id** | `string` |  | [Defaults to `undefined`] |
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


## updateStaffAssignment

> StaffAssignmentView updateStaffAssignment(id, saveStaffAssignmentRequest)



### Example

```ts
import {
  Configuration,
  ReservationsApi,
} from '@tachyon/field-sdk';
import type { UpdateStaffAssignmentRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { UpdateStaffProfileRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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

