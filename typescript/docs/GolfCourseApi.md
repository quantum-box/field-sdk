# GolfCourseApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**autoAssignGolfCaddies**](GolfCourseApi.md#autoassigngolfcaddies) | **POST** /v1/erp/extensions/golf-course/caddie-auto-assignments | キャディ自動配置（T09）。 対象日のキャディ付き予約のうち未割当のものへ、以下を考慮して割り当てる: - 稼働可否（希望休・午前/午後のみ・軽勤務） - 1日の担当数（2ラウンドは can_two_rounds かつ two_round_request のときのみ） - 月間契約ラウンドの残数が多い順（生活基盤&#x3D;契約消化を優先） - 同点はレーティング順 |
| [**createGolfCaddieAssignment**](GolfCourseApi.md#creategolfcaddieassignment) | **POST** /v1/erp/extensions/golf-course/caddie-assignments |  |
| [**createGolfCaddieProfile**](GolfCourseApi.md#creategolfcaddieprofile) | **POST** /v1/erp/extensions/golf-course/caddie-profiles |  |
| [**createGolfCaddieRating**](GolfCourseApi.md#creategolfcaddierating) | **POST** /v1/erp/extensions/golf-course/caddie-ratings |  |
| [**createGolfCourse**](GolfCourseApi.md#creategolfcourse) | **POST** /v1/erp/extensions/golf-course/courses |  |
| [**createGolfCourseResource**](GolfCourseApi.md#creategolfcourseresource) | **POST** /v1/erp/extensions/golf-course/resources |  |
| [**deleteCaddieAvailability**](GolfCourseApi.md#deletecaddieavailability) | **DELETE** /v1/erp/extensions/golf-course/caddie-availabilities/{caddie_id}/{date} |  |
| [**deleteDailyBudget**](GolfCourseApi.md#deletedailybudget) | **DELETE** /v1/erp/extensions/golf-course/daily-budgets/{course_id}/{date} |  |
| [**deleteGolfCaddieProfile**](GolfCourseApi.md#deletegolfcaddieprofile) | **DELETE** /v1/erp/extensions/golf-course/caddie-profiles/{id} |  |
| [**deleteGolfCourse**](GolfCourseApi.md#deletegolfcourse) | **DELETE** /v1/erp/extensions/golf-course/courses/{id} |  |
| [**exportGolfCaddiePayrollCsv**](GolfCourseApi.md#exportgolfcaddiepayrollcsv) | **GET** /v1/erp/extensions/golf-course/caddie-payroll-summary/export.csv |  |
| [**exportGolfMonthlySettlementCsv**](GolfCourseApi.md#exportgolfmonthlysettlementcsv) | **GET** /v1/erp/extensions/golf-course/monthly-settlement/export.csv |  |
| [**getDailyBudgetAchievement**](GolfCourseApi.md#getdailybudgetachievement) | **GET** /v1/erp/extensions/golf-course/daily-budgets/achievement |  |
| [**getGolfCourse**](GolfCourseApi.md#getgolfcourse) | **GET** /v1/erp/extensions/golf-course/courses/{id} |  |
| [**getGolfMonthlySettlement**](GolfCourseApi.md#getgolfmonthlysettlement) | **GET** /v1/erp/extensions/golf-course/monthly-settlement |  |
| [**getGolfReservationPolicy**](GolfCourseApi.md#getgolfreservationpolicy) | **GET** /v1/erp/extensions/golf-course/reservation-policy |  |
| [**importDailyBudgetsCsv**](GolfCourseApi.md#importdailybudgetscsv) | **POST** /v1/erp/extensions/golf-course/daily-budgets/import | CSV import: &#x60;golf_course_id,date,target_revenue,target_average_spend,target_caddy_attached_ratio&#x60; |
| [**listCaddieAvailabilities**](GolfCourseApi.md#listcaddieavailabilities) | **GET** /v1/erp/extensions/golf-course/caddie-availabilities |  |
| [**listCaddieCourseMemberships**](GolfCourseApi.md#listcaddiecoursememberships) | **GET** /v1/erp/extensions/golf-course/caddie-profiles/{id}/courses |  |
| [**listDailyBudgets**](GolfCourseApi.md#listdailybudgets) | **GET** /v1/erp/extensions/golf-course/daily-budgets |  |
| [**listGolfCaddieAssignments**](GolfCourseApi.md#listgolfcaddieassignments) | **GET** /v1/erp/extensions/golf-course/caddie-assignments |  |
| [**listGolfCaddieAttendancePeriodSnapshots**](GolfCourseApi.md#listgolfcaddieattendanceperiodsnapshots) | **GET** /v1/erp/extensions/golf-course/caddie-attendance-snapshots |  |
| [**listGolfCaddieAttendanceSnapshot**](GolfCourseApi.md#listgolfcaddieattendancesnapshot) | **GET** /v1/erp/extensions/golf-course/caddie-attendance-snapshot |  |
| [**listGolfCaddiePayrollSummary**](GolfCourseApi.md#listgolfcaddiepayrollsummary) | **GET** /v1/erp/extensions/golf-course/caddie-payroll-summary |  |
| [**listGolfCaddieProfiles**](GolfCourseApi.md#listgolfcaddieprofiles) | **GET** /v1/erp/extensions/golf-course/caddie-profiles |  |
| [**listGolfCaddieRatings**](GolfCourseApi.md#listgolfcaddieratings) | **GET** /v1/erp/extensions/golf-course/caddie-ratings |  |
| [**listGolfCourseResources**](GolfCourseApi.md#listgolfcourseresources) | **GET** /v1/erp/extensions/golf-course/resources |  |
| [**listGolfCourses**](GolfCourseApi.md#listgolfcourses) | **GET** /v1/erp/extensions/golf-course/courses |  |
| [**listGolfCustomFields**](GolfCourseApi.md#listgolfcustomfields) | **GET** /v1/erp/extensions/golf-course/custom-fields |  |
| [**listGolfProductSlots**](GolfCourseApi.md#listgolfproductslots) | **GET** /v1/erp/extensions/golf-course/reservation-products/{service_id}/slots | Deprecated by PLT-3199: availability is the resource\&#39;s generated inventory, so these product-scoped slots no longer decide what a storefront can book. Migrate with &#x60;POST /v1/erp/reservation-resources/{id}/schedule/import-product-slots&#x60;. CERP-25 forbids removing a &#x60;/v1/&#x60; endpoint, so removal waits for &#x60;/v2/&#x60;. |
| [**listGolfReservationProducts**](GolfCourseApi.md#listgolfreservationproducts) | **GET** /v1/erp/extensions/golf-course/reservation-products |  |
| [**recommendGolfCaddies**](GolfCourseApi.md#recommendgolfcaddies) | **GET** /v1/erp/extensions/golf-course/caddie-recommendations |  |
| [**replaceCaddieCourseMemberships**](GolfCourseApi.md#replacecaddiecoursemembershipsoperation) | **PUT** /v1/erp/extensions/golf-course/caddie-profiles/{id}/courses |  |
| [**replaceGolfProductSlots**](GolfCourseApi.md#replacegolfproductslotsoperation) | **PUT** /v1/erp/extensions/golf-course/reservation-products/{service_id}/slots | Deprecated by PLT-3199; see &#x60;list_golf_product_slots&#x60;. Writing here no longer changes what a storefront offers. |
| [**updateGolfCaddieAssignment**](GolfCourseApi.md#updategolfcaddieassignment) | **PATCH** /v1/erp/extensions/golf-course/caddie-assignments/{id} |  |
| [**updateGolfCaddieProfile**](GolfCourseApi.md#updategolfcaddieprofile) | **PATCH** /v1/erp/extensions/golf-course/caddie-profiles/{id} |  |
| [**updateGolfCourse**](GolfCourseApi.md#updategolfcourse) | **PATCH** /v1/erp/extensions/golf-course/courses/{id} |  |
| [**updateGolfCourseResource**](GolfCourseApi.md#updategolfcourseresource) | **PATCH** /v1/erp/extensions/golf-course/resources/{id} |  |
| [**updateGolfCustomField**](GolfCourseApi.md#updategolfcustomfield) | **PATCH** /v1/erp/extensions/golf-course/custom-fields |  |
| [**updateGolfReservationPolicy**](GolfCourseApi.md#updategolfreservationpolicyoperation) | **PATCH** /v1/erp/extensions/golf-course/reservation-policy |  |
| [**upsertCaddieAvailability**](GolfCourseApi.md#upsertcaddieavailability) | **POST** /v1/erp/extensions/golf-course/caddie-availabilities |  |
| [**upsertDailyBudget**](GolfCourseApi.md#upsertdailybudget) | **POST** /v1/erp/extensions/golf-course/daily-budgets |  |
| [**upsertGolfReservationProduct**](GolfCourseApi.md#upsertgolfreservationproduct) | **POST** /v1/erp/extensions/golf-course/reservation-products/{service_id} |  |



## autoAssignGolfCaddies

> AutoAssignCaddiesResponse autoAssignGolfCaddies(autoAssignCaddiesRequest)

キャディ自動配置（T09）。 対象日のキャディ付き予約のうち未割当のものへ、以下を考慮して割り当てる: - 稼働可否（希望休・午前/午後のみ・軽勤務） - 1日の担当数（2ラウンドは can_two_rounds かつ two_round_request のときのみ） - 月間契約ラウンドの残数が多い順（生活基盤&#x3D;契約消化を優先） - 同点はレーティング順

### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { AutoAssignGolfCaddiesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // AutoAssignCaddiesRequest
    autoAssignCaddiesRequest: ...,
  } satisfies AutoAssignGolfCaddiesRequest;

  try {
    const data = await api.autoAssignGolfCaddies(body);
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
| **autoAssignCaddiesRequest** | [AutoAssignCaddiesRequest](AutoAssignCaddiesRequest.md) |  | |

### Return type

[**AutoAssignCaddiesResponse**](AutoAssignCaddiesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | キャディ自動配置の結果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGolfCaddieAssignment

> GolfCaddieAssignment createGolfCaddieAssignment(saveGolfCaddieAssignmentRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { CreateGolfCaddieAssignmentRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // SaveGolfCaddieAssignmentRequest
    saveGolfCaddieAssignmentRequest: ...,
  } satisfies CreateGolfCaddieAssignmentRequest;

  try {
    const data = await api.createGolfCaddieAssignment(body);
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
| **saveGolfCaddieAssignmentRequest** | [SaveGolfCaddieAssignmentRequest](SaveGolfCaddieAssignmentRequest.md) |  | |

### Return type

[**GolfCaddieAssignment**](GolfCaddieAssignment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Golf caddie assignment created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGolfCaddieProfile

> GolfCaddieProfile createGolfCaddieProfile(saveGolfCaddieProfileRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { CreateGolfCaddieProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // SaveGolfCaddieProfileRequest
    saveGolfCaddieProfileRequest: ...,
  } satisfies CreateGolfCaddieProfileRequest;

  try {
    const data = await api.createGolfCaddieProfile(body);
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
| **saveGolfCaddieProfileRequest** | [SaveGolfCaddieProfileRequest](SaveGolfCaddieProfileRequest.md) |  | |

### Return type

[**GolfCaddieProfile**](GolfCaddieProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Golf caddie profile created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGolfCaddieRating

> GolfCaddieRating createGolfCaddieRating(saveGolfCaddieRatingRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { CreateGolfCaddieRatingRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // SaveGolfCaddieRatingRequest
    saveGolfCaddieRatingRequest: ...,
  } satisfies CreateGolfCaddieRatingRequest;

  try {
    const data = await api.createGolfCaddieRating(body);
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
| **saveGolfCaddieRatingRequest** | [SaveGolfCaddieRatingRequest](SaveGolfCaddieRatingRequest.md) |  | |

### Return type

[**GolfCaddieRating**](GolfCaddieRating.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Golf caddie rating created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGolfCourse

> GolfCourse createGolfCourse(saveGolfCourseRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { CreateGolfCourseRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // SaveGolfCourseRequest
    saveGolfCourseRequest: ...,
  } satisfies CreateGolfCourseRequest;

  try {
    const data = await api.createGolfCourse(body);
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
| **saveGolfCourseRequest** | [SaveGolfCourseRequest](SaveGolfCourseRequest.md) |  | |

### Return type

[**GolfCourse**](GolfCourse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Golf course created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGolfCourseResource

> GolfCourseResource createGolfCourseResource(saveGolfCourseResourceRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { CreateGolfCourseResourceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // SaveGolfCourseResourceRequest
    saveGolfCourseResourceRequest: ...,
  } satisfies CreateGolfCourseResourceRequest;

  try {
    const data = await api.createGolfCourseResource(body);
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
| **saveGolfCourseResourceRequest** | [SaveGolfCourseResourceRequest](SaveGolfCourseResourceRequest.md) |  | |

### Return type

[**GolfCourseResource**](GolfCourseResource.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Golf course resource created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCaddieAvailability

> deleteCaddieAvailability(caddieId, date)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { DeleteCaddieAvailabilityRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Caddie profile ID
    caddieId: caddieId_example,
    // Date | Availability date
    date: 2013-10-20,
  } satisfies DeleteCaddieAvailabilityRequest;

  try {
    const data = await api.deleteCaddieAvailability(body);
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
| **caddieId** | `string` | Caddie profile ID | [Defaults to `undefined`] |
| **date** | `Date` | Availability date | [Defaults to `undefined`] |

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
| **204** | Caddie availability deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDailyBudget

> deleteDailyBudget(courseId, date)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { DeleteDailyBudgetRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Golf course ID
    courseId: courseId_example,
    // string | Budget date (YYYY-MM-DD)
    date: date_example,
  } satisfies DeleteDailyBudgetRequest;

  try {
    const data = await api.deleteDailyBudget(body);
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
| **courseId** | `string` | Golf course ID | [Defaults to `undefined`] |
| **date** | `string` | Budget date (YYYY-MM-DD) | [Defaults to `undefined`] |

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
| **204** | Daily budget deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteGolfCaddieProfile

> deleteGolfCaddieProfile(id)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { DeleteGolfCaddieProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Golf caddie profile ID
    id: id_example,
  } satisfies DeleteGolfCaddieProfileRequest;

  try {
    const data = await api.deleteGolfCaddieProfile(body);
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
| **id** | `string` | Golf caddie profile ID | [Defaults to `undefined`] |

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
| **204** | Golf caddie profile deleted |  -  |
| **404** | Golf caddie profile not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteGolfCourse

> deleteGolfCourse(id)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { DeleteGolfCourseRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Golf course ID
    id: id_example,
  } satisfies DeleteGolfCourseRequest;

  try {
    const data = await api.deleteGolfCourse(body);
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
| **id** | `string` | Golf course ID | [Defaults to `undefined`] |

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
| **204** | Golf course deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportGolfCaddiePayrollCsv

> exportGolfCaddiePayrollCsv(yearMonth, timezone)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ExportGolfCaddiePayrollCsvRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string
    yearMonth: yearMonth_example,
    // string | IANA timezone defining the requested payroll month. Omitted keeps the legacy UTC boundary for existing callers. (optional)
    timezone: timezone_example,
  } satisfies ExportGolfCaddiePayrollCsvRequest;

  try {
    const data = await api.exportGolfCaddiePayrollCsv(body);
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
| **yearMonth** | `string` |  | [Defaults to `undefined`] |
| **timezone** | `string` | IANA timezone defining the requested payroll month. Omitted keeps the legacy UTC boundary for existing callers. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CSV export of golf caddie payroll summary |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportGolfMonthlySettlementCsv

> exportGolfMonthlySettlementCsv(yearMonth, timezone)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ExportGolfMonthlySettlementCsvRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string
    yearMonth: yearMonth_example,
    // string | IANA timezone defining the settlement month. Omitted keeps legacy UTC. (optional)
    timezone: timezone_example,
  } satisfies ExportGolfMonthlySettlementCsvRequest;

  try {
    const data = await api.exportGolfMonthlySettlementCsv(body);
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
| **yearMonth** | `string` |  | [Defaults to `undefined`] |
| **timezone** | `string` | IANA timezone defining the settlement month. Omitted keeps legacy UTC. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CSV export of golf monthly settlement |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDailyBudgetAchievement

> DailyBudgetAchievementResponse getDailyBudgetAchievement(from, to, golfCourseId, timezone)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { GetDailyBudgetAchievementRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // Date | Range start date (inclusive).
    from: 2013-10-20,
    // Date | Range end date (inclusive).
    to: 2013-10-20,
    // string | Filter by golf course ID. (optional)
    golfCourseId: golfCourseId_example,
    // string | IANA timezone defining each aggregation day. Omitted keeps legacy UTC. (optional)
    timezone: timezone_example,
  } satisfies GetDailyBudgetAchievementRequest;

  try {
    const data = await api.getDailyBudgetAchievement(body);
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
| **from** | `Date` | Range start date (inclusive). | [Defaults to `undefined`] |
| **to** | `Date` | Range end date (inclusive). | [Defaults to `undefined`] |
| **golfCourseId** | `string` | Filter by golf course ID. | [Optional] [Defaults to `undefined`] |
| **timezone** | `string` | IANA timezone defining each aggregation day. Omitted keeps legacy UTC. | [Optional] [Defaults to `undefined`] |

### Return type

[**DailyBudgetAchievementResponse**](DailyBudgetAchievementResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Daily budget achievement list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGolfCourse

> GolfCourse getGolfCourse(id)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { GetGolfCourseRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Golf course ID
    id: id_example,
  } satisfies GetGolfCourseRequest;

  try {
    const data = await api.getGolfCourse(body);
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
| **id** | `string` | Golf course ID | [Defaults to `undefined`] |

### Return type

[**GolfCourse**](GolfCourse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Get a golf course |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGolfMonthlySettlement

> GolfMonthlySettlementReport getGolfMonthlySettlement(yearMonth, timezone)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { GetGolfMonthlySettlementRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string
    yearMonth: yearMonth_example,
    // string | IANA timezone defining the settlement month. Omitted keeps legacy UTC. (optional)
    timezone: timezone_example,
  } satisfies GetGolfMonthlySettlementRequest;

  try {
    const data = await api.getGolfMonthlySettlement(body);
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
| **yearMonth** | `string` |  | [Defaults to `undefined`] |
| **timezone** | `string` | IANA timezone defining the settlement month. Omitted keeps legacy UTC. | [Optional] [Defaults to `undefined`] |

### Return type

[**GolfMonthlySettlementReport**](GolfMonthlySettlementReport.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Get golf monthly settlement report |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGolfReservationPolicy

> GolfReservationPolicy getGolfReservationPolicy(reservationTypeId)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { GetGolfReservationPolicyRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string (optional)
    reservationTypeId: reservationTypeId_example,
  } satisfies GetGolfReservationPolicyRequest;

  try {
    const data = await api.getGolfReservationPolicy(body);
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
| **reservationTypeId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GolfReservationPolicy**](GolfReservationPolicy.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Get golf reservation policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importDailyBudgetsCsv

> DailyBudgetListResponse importDailyBudgetsCsv(body)

CSV import: &#x60;golf_course_id,date,target_revenue,target_average_spend,target_caddy_attached_ratio&#x60;

### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ImportDailyBudgetsCsvRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Raw CSV text of daily budgets to import: `golf_course_id,date,target_revenue,target_average_spend,target_caddy_attached_ratio`
    body: body_example,
  } satisfies ImportDailyBudgetsCsvRequest;

  try {
    const data = await api.importDailyBudgetsCsv(body);
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
| **body** | `string` | Raw CSV text of daily budgets to import: &#x60;golf_course_id,date,target_revenue,target_average_spend,target_caddy_attached_ratio&#x60; | |

### Return type

[**DailyBudgetListResponse**](DailyBudgetListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `text/csv`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Imported daily budgets |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCaddieAvailabilities

> CaddieAvailabilityListResponse listCaddieAvailabilities(caddieProfileId, from, to)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListCaddieAvailabilitiesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string (optional)
    caddieProfileId: caddieProfileId_example,
    // Date (optional)
    from: 2013-10-20,
    // Date (optional)
    to: 2013-10-20,
  } satisfies ListCaddieAvailabilitiesRequest;

  try {
    const data = await api.listCaddieAvailabilities(body);
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
| **caddieProfileId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CaddieAvailabilityListResponse**](CaddieAvailabilityListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List caddie availabilities |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCaddieCourseMemberships

> CaddieCourseMembershipListResponse listCaddieCourseMemberships(id)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListCaddieCourseMembershipsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Caddie profile ID
    id: id_example,
  } satisfies ListCaddieCourseMembershipsRequest;

  try {
    const data = await api.listCaddieCourseMemberships(body);
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
| **id** | `string` | Caddie profile ID | [Defaults to `undefined`] |

### Return type

[**CaddieCourseMembershipListResponse**](CaddieCourseMembershipListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List caddie course memberships |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDailyBudgets

> DailyBudgetListResponse listDailyBudgets(golfCourseId, from, to)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListDailyBudgetsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Filter by golf course ID. (optional)
    golfCourseId: golfCourseId_example,
    // Date | Range start date (inclusive). (optional)
    from: 2013-10-20,
    // Date | Range end date (inclusive). (optional)
    to: 2013-10-20,
  } satisfies ListDailyBudgetsRequest;

  try {
    const data = await api.listDailyBudgets(body);
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
| **golfCourseId** | `string` | Filter by golf course ID. | [Optional] [Defaults to `undefined`] |
| **from** | `Date` | Range start date (inclusive). | [Optional] [Defaults to `undefined`] |
| **to** | `Date` | Range end date (inclusive). | [Optional] [Defaults to `undefined`] |

### Return type

[**DailyBudgetListResponse**](DailyBudgetListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Daily budget list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGolfCaddieAssignments

> GolfCaddieAssignmentListResponse listGolfCaddieAssignments(reservationId, caddieProfileId, status, from, to)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListGolfCaddieAssignmentsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string (optional)
    reservationId: reservationId_example,
    // string (optional)
    caddieProfileId: caddieProfileId_example,
    // string (optional)
    status: status_example,
    // Date (optional)
    from: 2013-10-20,
    // Date (optional)
    to: 2013-10-20,
  } satisfies ListGolfCaddieAssignmentsRequest;

  try {
    const data = await api.listGolfCaddieAssignments(body);
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
| **reservationId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **caddieProfileId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GolfCaddieAssignmentListResponse**](GolfCaddieAssignmentListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List golf caddie assignments |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGolfCaddieAttendancePeriodSnapshots

> GolfCaddieAttendancePeriodSnapshotResponse listGolfCaddieAttendancePeriodSnapshots(from, to)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListGolfCaddieAttendancePeriodSnapshotsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // Date
    from: 2013-10-20,
    // Date
    to: 2013-10-20,
  } satisfies ListGolfCaddieAttendancePeriodSnapshotsRequest;

  try {
    const data = await api.listGolfCaddieAttendancePeriodSnapshots(body);
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
| **from** | `Date` |  | [Defaults to `undefined`] |
| **to** | `Date` |  | [Defaults to `undefined`] |

### Return type

[**GolfCaddieAttendancePeriodSnapshotResponse**](GolfCaddieAttendancePeriodSnapshotResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Golf caddie attendance snapshots for an inclusive period |  -  |
| **400** | Invalid attendance period |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGolfCaddieAttendanceSnapshot

> GolfCaddieAttendanceSnapshotResponse listGolfCaddieAttendanceSnapshot(date, timezone)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListGolfCaddieAttendanceSnapshotRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // Date (optional)
    date: 2013-10-20,
    // string | IANA timezone defining the day and the default date. (optional)
    timezone: timezone_example,
  } satisfies ListGolfCaddieAttendanceSnapshotRequest;

  try {
    const data = await api.listGolfCaddieAttendanceSnapshot(body);
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
| **date** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **timezone** | `string` | IANA timezone defining the day and the default date. | [Optional] [Defaults to `undefined`] |

### Return type

[**GolfCaddieAttendanceSnapshotResponse**](GolfCaddieAttendanceSnapshotResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Golf caddie attendance snapshot |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGolfCaddiePayrollSummary

> GolfCaddiePayrollSummaryResponse listGolfCaddiePayrollSummary(yearMonth, timezone)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListGolfCaddiePayrollSummaryRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string
    yearMonth: yearMonth_example,
    // string | IANA timezone defining the requested payroll month. Omitted keeps the legacy UTC boundary for existing callers. (optional)
    timezone: timezone_example,
  } satisfies ListGolfCaddiePayrollSummaryRequest;

  try {
    const data = await api.listGolfCaddiePayrollSummary(body);
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
| **yearMonth** | `string` |  | [Defaults to `undefined`] |
| **timezone** | `string` | IANA timezone defining the requested payroll month. Omitted keeps the legacy UTC boundary for existing callers. | [Optional] [Defaults to `undefined`] |

### Return type

[**GolfCaddiePayrollSummaryResponse**](GolfCaddiePayrollSummaryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List golf caddie payroll summary |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGolfCaddieProfiles

> GolfCaddieProfileListResponse listGolfCaddieProfiles(includeDeleted)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListGolfCaddieProfilesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // boolean | 削除済みのキャディも含めて返す。既定は false で、復旧・監査のときだけ opt-in する。 (optional)
    includeDeleted: true,
  } satisfies ListGolfCaddieProfilesRequest;

  try {
    const data = await api.listGolfCaddieProfiles(body);
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
| **includeDeleted** | `boolean` | 削除済みのキャディも含めて返す。既定は false で、復旧・監査のときだけ opt-in する。 | [Optional] [Defaults to `undefined`] |

### Return type

[**GolfCaddieProfileListResponse**](GolfCaddieProfileListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List golf caddie profiles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGolfCaddieRatings

> GolfCaddieRatingListResponse listGolfCaddieRatings(caddieProfileId)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListGolfCaddieRatingsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string (optional)
    caddieProfileId: caddieProfileId_example,
  } satisfies ListGolfCaddieRatingsRequest;

  try {
    const data = await api.listGolfCaddieRatings(body);
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
| **caddieProfileId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GolfCaddieRatingListResponse**](GolfCaddieRatingListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List golf caddie ratings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGolfCourseResources

> GolfCourseResourceListResponse listGolfCourseResources()



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListGolfCourseResourcesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  try {
    const data = await api.listGolfCourseResources();
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

[**GolfCourseResourceListResponse**](GolfCourseResourceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List golf course resources |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGolfCourses

> GolfCourseListResponse listGolfCourses()



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListGolfCoursesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  try {
    const data = await api.listGolfCourses();
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

[**GolfCourseListResponse**](GolfCourseListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List golf courses |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGolfCustomFields

> GolfCustomFieldListResponse listGolfCustomFields(reservationTypeId)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListGolfCustomFieldsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string (optional)
    reservationTypeId: reservationTypeId_example,
  } satisfies ListGolfCustomFieldsRequest;

  try {
    const data = await api.listGolfCustomFields(body);
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
| **reservationTypeId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GolfCustomFieldListResponse**](GolfCustomFieldListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List golf custom fields |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGolfProductSlots

> GolfProductSlotListResponse listGolfProductSlots(serviceId)

Deprecated by PLT-3199: availability is the resource\&#39;s generated inventory, so these product-scoped slots no longer decide what a storefront can book. Migrate with &#x60;POST /v1/erp/reservation-resources/{id}/schedule/import-product-slots&#x60;. CERP-25 forbids removing a &#x60;/v1/&#x60; endpoint, so removal waits for &#x60;/v2/&#x60;.

### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListGolfProductSlotsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Reservation service ID
    serviceId: serviceId_example,
  } satisfies ListGolfProductSlotsRequest;

  try {
    const data = await api.listGolfProductSlots(body);
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
| **serviceId** | `string` | Reservation service ID | [Defaults to `undefined`] |

### Return type

[**GolfProductSlotListResponse**](GolfProductSlotListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List golf product slots |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGolfReservationProducts

> GolfReservationProductListResponse listGolfReservationProducts()



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ListGolfReservationProductsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  try {
    const data = await api.listGolfReservationProducts();
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

[**GolfReservationProductListResponse**](GolfReservationProductListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List golf reservation products |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## recommendGolfCaddies

> GolfCaddieRecommendationResponse recommendGolfCaddies(reservationId, scheduledAt, playerCount, includeRookiePairing, limit)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { RecommendGolfCaddiesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string (optional)
    reservationId: reservationId_example,
    // Date (optional)
    scheduledAt: 2013-10-20T19:20:30+01:00,
    // number (optional)
    playerCount: 56,
    // boolean (optional)
    includeRookiePairing: true,
    // number (optional)
    limit: 56,
  } satisfies RecommendGolfCaddiesRequest;

  try {
    const data = await api.recommendGolfCaddies(body);
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
| **reservationId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **scheduledAt** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **playerCount** | `number` |  | [Optional] [Defaults to `undefined`] |
| **includeRookiePairing** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GolfCaddieRecommendationResponse**](GolfCaddieRecommendationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recommend golf caddies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replaceCaddieCourseMemberships

> CaddieCourseMembershipListResponse replaceCaddieCourseMemberships(id, replaceCaddieCourseMembershipsRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ReplaceCaddieCourseMembershipsOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Caddie profile ID
    id: id_example,
    // ReplaceCaddieCourseMembershipsRequest
    replaceCaddieCourseMembershipsRequest: ...,
  } satisfies ReplaceCaddieCourseMembershipsOperationRequest;

  try {
    const data = await api.replaceCaddieCourseMemberships(body);
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
| **id** | `string` | Caddie profile ID | [Defaults to `undefined`] |
| **replaceCaddieCourseMembershipsRequest** | [ReplaceCaddieCourseMembershipsRequest](ReplaceCaddieCourseMembershipsRequest.md) |  | |

### Return type

[**CaddieCourseMembershipListResponse**](CaddieCourseMembershipListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Caddie course memberships replaced |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replaceGolfProductSlots

> GolfProductSlotListResponse replaceGolfProductSlots(serviceId, replaceGolfProductSlotsRequest)

Deprecated by PLT-3199; see &#x60;list_golf_product_slots&#x60;. Writing here no longer changes what a storefront offers.

### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { ReplaceGolfProductSlotsOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Reservation service ID
    serviceId: serviceId_example,
    // ReplaceGolfProductSlotsRequest
    replaceGolfProductSlotsRequest: ...,
  } satisfies ReplaceGolfProductSlotsOperationRequest;

  try {
    const data = await api.replaceGolfProductSlots(body);
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
| **serviceId** | `string` | Reservation service ID | [Defaults to `undefined`] |
| **replaceGolfProductSlotsRequest** | [ReplaceGolfProductSlotsRequest](ReplaceGolfProductSlotsRequest.md) |  | |

### Return type

[**GolfProductSlotListResponse**](GolfProductSlotListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Golf product slots replaced |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGolfCaddieAssignment

> GolfCaddieAssignment updateGolfCaddieAssignment(id, saveGolfCaddieAssignmentRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { UpdateGolfCaddieAssignmentRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Golf caddie assignment ID
    id: id_example,
    // SaveGolfCaddieAssignmentRequest
    saveGolfCaddieAssignmentRequest: ...,
  } satisfies UpdateGolfCaddieAssignmentRequest;

  try {
    const data = await api.updateGolfCaddieAssignment(body);
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
| **id** | `string` | Golf caddie assignment ID | [Defaults to `undefined`] |
| **saveGolfCaddieAssignmentRequest** | [SaveGolfCaddieAssignmentRequest](SaveGolfCaddieAssignmentRequest.md) |  | |

### Return type

[**GolfCaddieAssignment**](GolfCaddieAssignment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Golf caddie assignment updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGolfCaddieProfile

> GolfCaddieProfile updateGolfCaddieProfile(id, saveGolfCaddieProfileRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { UpdateGolfCaddieProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Golf caddie profile ID
    id: id_example,
    // SaveGolfCaddieProfileRequest
    saveGolfCaddieProfileRequest: ...,
  } satisfies UpdateGolfCaddieProfileRequest;

  try {
    const data = await api.updateGolfCaddieProfile(body);
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
| **id** | `string` | Golf caddie profile ID | [Defaults to `undefined`] |
| **saveGolfCaddieProfileRequest** | [SaveGolfCaddieProfileRequest](SaveGolfCaddieProfileRequest.md) |  | |

### Return type

[**GolfCaddieProfile**](GolfCaddieProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Golf caddie profile updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGolfCourse

> GolfCourse updateGolfCourse(id, saveGolfCourseRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { UpdateGolfCourseRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Golf course ID
    id: id_example,
    // SaveGolfCourseRequest
    saveGolfCourseRequest: ...,
  } satisfies UpdateGolfCourseRequest;

  try {
    const data = await api.updateGolfCourse(body);
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
| **id** | `string` | Golf course ID | [Defaults to `undefined`] |
| **saveGolfCourseRequest** | [SaveGolfCourseRequest](SaveGolfCourseRequest.md) |  | |

### Return type

[**GolfCourse**](GolfCourse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Golf course updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGolfCourseResource

> GolfCourseResource updateGolfCourseResource(id, saveGolfCourseResourceRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { UpdateGolfCourseResourceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Golf course resource ID
    id: id_example,
    // SaveGolfCourseResourceRequest
    saveGolfCourseResourceRequest: ...,
  } satisfies UpdateGolfCourseResourceRequest;

  try {
    const data = await api.updateGolfCourseResource(body);
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
| **id** | `string` | Golf course resource ID | [Defaults to `undefined`] |
| **saveGolfCourseResourceRequest** | [SaveGolfCourseResourceRequest](SaveGolfCourseResourceRequest.md) |  | |

### Return type

[**GolfCourseResource**](GolfCourseResource.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Golf course resource updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGolfCustomField

> GolfCustomField updateGolfCustomField(saveGolfCustomFieldRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { UpdateGolfCustomFieldRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // SaveGolfCustomFieldRequest
    saveGolfCustomFieldRequest: ...,
  } satisfies UpdateGolfCustomFieldRequest;

  try {
    const data = await api.updateGolfCustomField(body);
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
| **saveGolfCustomFieldRequest** | [SaveGolfCustomFieldRequest](SaveGolfCustomFieldRequest.md) |  | |

### Return type

[**GolfCustomField**](GolfCustomField.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Golf custom field updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGolfReservationPolicy

> GolfReservationPolicy updateGolfReservationPolicy(updateGolfReservationPolicyRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { UpdateGolfReservationPolicyOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // UpdateGolfReservationPolicyRequest
    updateGolfReservationPolicyRequest: ...,
  } satisfies UpdateGolfReservationPolicyOperationRequest;

  try {
    const data = await api.updateGolfReservationPolicy(body);
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
| **updateGolfReservationPolicyRequest** | [UpdateGolfReservationPolicyRequest](UpdateGolfReservationPolicyRequest.md) |  | |

### Return type

[**GolfReservationPolicy**](GolfReservationPolicy.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Golf reservation policy updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertCaddieAvailability

> CaddieAvailability upsertCaddieAvailability(saveCaddieAvailabilityRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { UpsertCaddieAvailabilityRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // SaveCaddieAvailabilityRequest
    saveCaddieAvailabilityRequest: ...,
  } satisfies UpsertCaddieAvailabilityRequest;

  try {
    const data = await api.upsertCaddieAvailability(body);
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
| **saveCaddieAvailabilityRequest** | [SaveCaddieAvailabilityRequest](SaveCaddieAvailabilityRequest.md) |  | |

### Return type

[**CaddieAvailability**](CaddieAvailability.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Caddie availability upserted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertDailyBudget

> DailyBudget upsertDailyBudget(saveDailyBudgetRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { UpsertDailyBudgetRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // SaveDailyBudgetRequest
    saveDailyBudgetRequest: ...,
  } satisfies UpsertDailyBudgetRequest;

  try {
    const data = await api.upsertDailyBudget(body);
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
| **saveDailyBudgetRequest** | [SaveDailyBudgetRequest](SaveDailyBudgetRequest.md) |  | |

### Return type

[**DailyBudget**](DailyBudget.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Saved daily budget |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertGolfReservationProduct

> GolfReservationProduct upsertGolfReservationProduct(serviceId, saveGolfReservationProductRequest)



### Example

```ts
import {
  Configuration,
  GolfCourseApi,
} from '@tachyon-sdk/field';
import type { UpsertGolfReservationProductRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseApi(config);

  const body = {
    // string | Reservation service ID
    serviceId: serviceId_example,
    // SaveGolfReservationProductRequest
    saveGolfReservationProductRequest: ...,
  } satisfies UpsertGolfReservationProductRequest;

  try {
    const data = await api.upsertGolfReservationProduct(body);
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
| **serviceId** | `string` | Reservation service ID | [Defaults to `undefined`] |
| **saveGolfReservationProductRequest** | [SaveGolfReservationProductRequest](SaveGolfReservationProductRequest.md) |  | |

### Return type

[**GolfReservationProduct**](GolfReservationProduct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Golf reservation product upserted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

