# HRMApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**clockInStaff**](HRMApi.md#clockinstaff) | **POST** /v1/erp/hrm/staff/{id}/clock-in |  |
| [**clockInStaffLegacyPrefix**](HRMApi.md#clockinstafflegacyprefix) | **POST** /v1/erp/staff/{id}/clock-in |  |
| [**clockOutStaff**](HRMApi.md#clockoutstaff) | **POST** /v1/erp/hrm/staff/{id}/clock-out |  |
| [**clockOutStaffLegacyPrefix**](HRMApi.md#clockoutstafflegacyprefix) | **POST** /v1/erp/staff/{id}/clock-out |  |
| [**createStaffLeaveRequest**](HRMApi.md#createstaffleaverequestoperation) | **POST** /v1/erp/hrm/staff/{id}/leave-requests |  |
| [**createStaffLeaveRequestLegacyPrefix**](HRMApi.md#createstaffleaverequestlegacyprefix) | **POST** /v1/erp/staff/{id}/leave-requests |  |
| [**createStaffMember**](HRMApi.md#createstaffmember) | **POST** /v1/erp/hrm/staff |  |
| [**createStaffMemberLegacyPrefix**](HRMApi.md#createstaffmemberlegacyprefix) | **POST** /v1/erp/staff |  |
| [**createStaffShift**](HRMApi.md#createstaffshift) | **POST** /v1/erp/hrm/staff/{id}/shifts |  |
| [**createStaffShiftLegacyPrefix**](HRMApi.md#createstaffshiftlegacyprefix) | **POST** /v1/erp/staff/{id}/shifts |  |
| [**decideStaffLeaveRequest**](HRMApi.md#decidestaffleaverequestoperation) | **PATCH** /v1/erp/hrm/leave-requests/{id} |  |
| [**decideStaffLeaveRequestLegacyPrefix**](HRMApi.md#decidestaffleaverequestlegacyprefix) | **PATCH** /v1/erp/staff/leave-requests/{id} |  |
| [**deleteStaffMember**](HRMApi.md#deletestaffmember) | **DELETE** /v1/erp/hrm/staff/{id} |  |
| [**deleteStaffMemberLegacyPrefix**](HRMApi.md#deletestaffmemberlegacyprefix) | **DELETE** /v1/erp/staff/{id} |  |
| [**deleteStaffShift**](HRMApi.md#deletestaffshift) | **DELETE** /v1/erp/hrm/staff/{staffId}/shifts/{shiftId} |  |
| [**deleteStaffShiftLegacyPrefix**](HRMApi.md#deletestaffshiftlegacyprefix) | **DELETE** /v1/erp/staff/{staffId}/shifts/{shiftId} |  |
| [**getStaffCompensationProfile**](HRMApi.md#getstaffcompensationprofile) | **GET** /v1/erp/hrm/staff/{id}/compensation |  |
| [**getStaffCompensationProfileLegacyPrefix**](HRMApi.md#getstaffcompensationprofilelegacyprefix) | **GET** /v1/erp/staff/{id}/compensation |  |
| [**getStaffPayrollEstimate**](HRMApi.md#getstaffpayrollestimate) | **GET** /v1/erp/hrm/staff/{id}/payroll-estimate |  |
| [**getStaffPayrollEstimateLegacyPrefix**](HRMApi.md#getstaffpayrollestimatelegacyprefix) | **GET** /v1/erp/staff/{id}/payroll-estimate |  |
| [**getStaffShiftPreference**](HRMApi.md#getstaffshiftpreference) | **GET** /v1/erp/hrm/staff/{id}/shift-preference |  |
| [**getStaffShiftPreferenceLegacyPrefix**](HRMApi.md#getstaffshiftpreferencelegacyprefix) | **GET** /v1/erp/staff/{id}/shift-preference |  |
| [**getStaffSkillProfile**](HRMApi.md#getstaffskillprofile) | **GET** /v1/erp/hrm/staff/{id}/skills |  |
| [**getStaffSkillProfileLegacyPrefix**](HRMApi.md#getstaffskillprofilelegacyprefix) | **GET** /v1/erp/staff/{id}/skills |  |
| [**getStaffUtilization**](HRMApi.md#getstaffutilization) | **GET** /v1/erp/hrm/staff/{id}/utilization |  |
| [**getStaffUtilizationLegacyPrefix**](HRMApi.md#getstaffutilizationlegacyprefix) | **GET** /v1/erp/staff/{id}/utilization |  |
| [**listStaffLeaveRequests**](HRMApi.md#liststaffleaverequests) | **GET** /v1/erp/hrm/staff/{id}/leave-requests |  |
| [**listStaffLeaveRequestsLegacyPrefix**](HRMApi.md#liststaffleaverequestslegacyprefix) | **GET** /v1/erp/staff/{id}/leave-requests |  |
| [**listStaffMembers**](HRMApi.md#liststaffmembers) | **GET** /v1/erp/hrm/staff |  |
| [**listStaffMembersLegacyPrefix**](HRMApi.md#liststaffmemberslegacyprefix) | **GET** /v1/erp/staff |  |
| [**listStaffShifts**](HRMApi.md#liststaffshifts) | **GET** /v1/erp/hrm/staff/{id}/shifts |  |
| [**listStaffShiftsLegacyPrefix**](HRMApi.md#liststaffshiftslegacyprefix) | **GET** /v1/erp/staff/{id}/shifts |  |
| [**listStaffUtilization**](HRMApi.md#liststaffutilization) | **GET** /v1/erp/hrm/staff-utilization |  |
| [**listStaffUtilizationLegacyPrefix**](HRMApi.md#liststaffutilizationlegacyprefix) | **GET** /v1/erp/staff-utilization |  |
| [**updateStaffCompensationProfile**](HRMApi.md#updatestaffcompensationprofile) | **PATCH** /v1/erp/hrm/staff/{id}/compensation |  |
| [**updateStaffCompensationProfileLegacyPrefix**](HRMApi.md#updatestaffcompensationprofilelegacyprefix) | **PATCH** /v1/erp/staff/{id}/compensation |  |
| [**updateStaffMember**](HRMApi.md#updatestaffmemberoperation) | **PATCH** /v1/erp/hrm/staff/{id} |  |
| [**updateStaffMemberLegacyPrefix**](HRMApi.md#updatestaffmemberlegacyprefix) | **PATCH** /v1/erp/staff/{id} |  |
| [**updateStaffShift**](HRMApi.md#updatestaffshiftoperation) | **PATCH** /v1/erp/hrm/staff/{staffId}/shifts/{shiftId} |  |
| [**updateStaffShiftLegacyPrefix**](HRMApi.md#updatestaffshiftlegacyprefix) | **PATCH** /v1/erp/staff/{staffId}/shifts/{shiftId} |  |
| [**updateStaffShiftPreference**](HRMApi.md#updatestaffshiftpreference) | **PATCH** /v1/erp/hrm/staff/{id}/shift-preference |  |
| [**updateStaffShiftPreferenceLegacyPrefix**](HRMApi.md#updatestaffshiftpreferencelegacyprefix) | **PATCH** /v1/erp/staff/{id}/shift-preference |  |
| [**updateStaffSkillProfile**](HRMApi.md#updatestaffskillprofile) | **PATCH** /v1/erp/hrm/staff/{id}/skills |  |
| [**updateStaffSkillProfileLegacyPrefix**](HRMApi.md#updatestaffskillprofilelegacyprefix) | **PATCH** /v1/erp/staff/{id}/skills |  |



## clockInStaff

> StaffAttendance clockInStaff(id, clockInRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ClockInStaffRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // ClockInRequest
    clockInRequest: ...,
  } satisfies ClockInStaffRequest;

  try {
    const data = await api.clockInStaff(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **clockInRequest** | [ClockInRequest](ClockInRequest.md) |  | |

### Return type

[**StaffAttendance**](StaffAttendance.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff clocked in |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## clockInStaffLegacyPrefix

> StaffAttendance clockInStaffLegacyPrefix(id, clockInRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ClockInStaffLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // ClockInRequest
    clockInRequest: ...,
  } satisfies ClockInStaffLegacyPrefixRequest;

  try {
    const data = await api.clockInStaffLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **clockInRequest** | [ClockInRequest](ClockInRequest.md) |  | |

### Return type

[**StaffAttendance**](StaffAttendance.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff clocked in |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## clockOutStaff

> StaffAttendance clockOutStaff(id, clockOutRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ClockOutStaffRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // ClockOutRequest
    clockOutRequest: ...,
  } satisfies ClockOutStaffRequest;

  try {
    const data = await api.clockOutStaff(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **clockOutRequest** | [ClockOutRequest](ClockOutRequest.md) |  | |

### Return type

[**StaffAttendance**](StaffAttendance.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff clocked out |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## clockOutStaffLegacyPrefix

> StaffAttendance clockOutStaffLegacyPrefix(id, clockOutRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ClockOutStaffLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // ClockOutRequest
    clockOutRequest: ...,
  } satisfies ClockOutStaffLegacyPrefixRequest;

  try {
    const data = await api.clockOutStaffLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **clockOutRequest** | [ClockOutRequest](ClockOutRequest.md) |  | |

### Return type

[**StaffAttendance**](StaffAttendance.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff clocked out |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createStaffLeaveRequest

> StaffLeaveRequest createStaffLeaveRequest(id, createStaffLeaveRequestRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { CreateStaffLeaveRequestOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // CreateStaffLeaveRequestRequest
    createStaffLeaveRequestRequest: ...,
  } satisfies CreateStaffLeaveRequestOperationRequest;

  try {
    const data = await api.createStaffLeaveRequest(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **createStaffLeaveRequestRequest** | [CreateStaffLeaveRequestRequest](CreateStaffLeaveRequestRequest.md) |  | |

### Return type

[**StaffLeaveRequest**](StaffLeaveRequest.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Staff leave request created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createStaffLeaveRequestLegacyPrefix

> StaffLeaveRequest createStaffLeaveRequestLegacyPrefix(id, createStaffLeaveRequestRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { CreateStaffLeaveRequestLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // CreateStaffLeaveRequestRequest
    createStaffLeaveRequestRequest: ...,
  } satisfies CreateStaffLeaveRequestLegacyPrefixRequest;

  try {
    const data = await api.createStaffLeaveRequestLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **createStaffLeaveRequestRequest** | [CreateStaffLeaveRequestRequest](CreateStaffLeaveRequestRequest.md) |  | |

### Return type

[**StaffLeaveRequest**](StaffLeaveRequest.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Staff leave request created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createStaffMember

> StaffMember createStaffMember(saveStaffMemberRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { CreateStaffMemberRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // SaveStaffMemberRequest
    saveStaffMemberRequest: ...,
  } satisfies CreateStaffMemberRequest;

  try {
    const data = await api.createStaffMember(body);
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
| **saveStaffMemberRequest** | [SaveStaffMemberRequest](SaveStaffMemberRequest.md) |  | |

### Return type

[**StaffMember**](StaffMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Staff member created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createStaffMemberLegacyPrefix

> StaffMember createStaffMemberLegacyPrefix(saveStaffMemberRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { CreateStaffMemberLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // SaveStaffMemberRequest
    saveStaffMemberRequest: ...,
  } satisfies CreateStaffMemberLegacyPrefixRequest;

  try {
    const data = await api.createStaffMemberLegacyPrefix(body);
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
| **saveStaffMemberRequest** | [SaveStaffMemberRequest](SaveStaffMemberRequest.md) |  | |

### Return type

[**StaffMember**](StaffMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Staff member created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createStaffShift

> StaffShift createStaffShift(id, saveStaffShiftRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { CreateStaffShiftRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // SaveStaffShiftRequest
    saveStaffShiftRequest: ...,
  } satisfies CreateStaffShiftRequest;

  try {
    const data = await api.createStaffShift(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **saveStaffShiftRequest** | [SaveStaffShiftRequest](SaveStaffShiftRequest.md) |  | |

### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Staff shift created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createStaffShiftLegacyPrefix

> StaffShift createStaffShiftLegacyPrefix(id, saveStaffShiftRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { CreateStaffShiftLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // SaveStaffShiftRequest
    saveStaffShiftRequest: ...,
  } satisfies CreateStaffShiftLegacyPrefixRequest;

  try {
    const data = await api.createStaffShiftLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **saveStaffShiftRequest** | [SaveStaffShiftRequest](SaveStaffShiftRequest.md) |  | |

### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Staff shift created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## decideStaffLeaveRequest

> StaffLeaveRequest decideStaffLeaveRequest(id, decideStaffLeaveRequestRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { DecideStaffLeaveRequestOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Leave request ID
    id: id_example,
    // DecideStaffLeaveRequestRequest
    decideStaffLeaveRequestRequest: ...,
  } satisfies DecideStaffLeaveRequestOperationRequest;

  try {
    const data = await api.decideStaffLeaveRequest(body);
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
| **id** | `string` | Leave request ID | [Defaults to `undefined`] |
| **decideStaffLeaveRequestRequest** | [DecideStaffLeaveRequestRequest](DecideStaffLeaveRequestRequest.md) |  | |

### Return type

[**StaffLeaveRequest**](StaffLeaveRequest.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff leave request decided |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## decideStaffLeaveRequestLegacyPrefix

> StaffLeaveRequest decideStaffLeaveRequestLegacyPrefix(id, decideStaffLeaveRequestRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { DecideStaffLeaveRequestLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Leave request ID
    id: id_example,
    // DecideStaffLeaveRequestRequest
    decideStaffLeaveRequestRequest: ...,
  } satisfies DecideStaffLeaveRequestLegacyPrefixRequest;

  try {
    const data = await api.decideStaffLeaveRequestLegacyPrefix(body);
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
| **id** | `string` | Leave request ID | [Defaults to `undefined`] |
| **decideStaffLeaveRequestRequest** | [DecideStaffLeaveRequestRequest](DecideStaffLeaveRequestRequest.md) |  | |

### Return type

[**StaffLeaveRequest**](StaffLeaveRequest.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff leave request decided |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteStaffMember

> deleteStaffMember(id)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { DeleteStaffMemberRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
  } satisfies DeleteStaffMemberRequest;

  try {
    const data = await api.deleteStaffMember(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |

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
| **204** | Staff member deleted |  -  |
| **404** | Staff member not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteStaffMemberLegacyPrefix

> deleteStaffMemberLegacyPrefix(id)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { DeleteStaffMemberLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
  } satisfies DeleteStaffMemberLegacyPrefixRequest;

  try {
    const data = await api.deleteStaffMemberLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |

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
| **204** | Staff member deleted |  -  |
| **404** | Staff member not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteStaffShift

> deleteStaffShift(staffId, shiftId)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { DeleteStaffShiftRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    staffId: staffId_example,
    // string | Staff shift ID
    shiftId: shiftId_example,
  } satisfies DeleteStaffShiftRequest;

  try {
    const data = await api.deleteStaffShift(body);
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
| **staffId** | `string` | Staff member ID | [Defaults to `undefined`] |
| **shiftId** | `string` | Staff shift ID | [Defaults to `undefined`] |

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
| **204** | Staff shift deleted |  -  |
| **404** | Staff shift not found for this staff member |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteStaffShiftLegacyPrefix

> deleteStaffShiftLegacyPrefix(staffId, shiftId)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { DeleteStaffShiftLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    staffId: staffId_example,
    // string | Staff shift ID
    shiftId: shiftId_example,
  } satisfies DeleteStaffShiftLegacyPrefixRequest;

  try {
    const data = await api.deleteStaffShiftLegacyPrefix(body);
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
| **staffId** | `string` | Staff member ID | [Defaults to `undefined`] |
| **shiftId** | `string` | Staff shift ID | [Defaults to `undefined`] |

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
| **204** | Staff shift deleted |  -  |
| **404** | Staff shift not found for this staff member |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStaffCompensationProfile

> StaffCompensationProfileResponse getStaffCompensationProfile(id)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { GetStaffCompensationProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
  } satisfies GetStaffCompensationProfileRequest;

  try {
    const data = await api.getStaffCompensationProfile(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |

### Return type

[**StaffCompensationProfileResponse**](StaffCompensationProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff compensation profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStaffCompensationProfileLegacyPrefix

> StaffCompensationProfileResponse getStaffCompensationProfileLegacyPrefix(id)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { GetStaffCompensationProfileLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
  } satisfies GetStaffCompensationProfileLegacyPrefixRequest;

  try {
    const data = await api.getStaffCompensationProfileLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |

### Return type

[**StaffCompensationProfileResponse**](StaffCompensationProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff compensation profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStaffPayrollEstimate

> StaffPayrollEstimate getStaffPayrollEstimate(id, period)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { GetStaffPayrollEstimateRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // string (optional)
    period: period_example,
  } satisfies GetStaffPayrollEstimateRequest;

  try {
    const data = await api.getStaffPayrollEstimate(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **period** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**StaffPayrollEstimate**](StaffPayrollEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff payroll estimate |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStaffPayrollEstimateLegacyPrefix

> StaffPayrollEstimate getStaffPayrollEstimateLegacyPrefix(id, period)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { GetStaffPayrollEstimateLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // string (optional)
    period: period_example,
  } satisfies GetStaffPayrollEstimateLegacyPrefixRequest;

  try {
    const data = await api.getStaffPayrollEstimateLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **period** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**StaffPayrollEstimate**](StaffPayrollEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff payroll estimate |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStaffShiftPreference

> StaffShiftPreferenceResponse getStaffShiftPreference(id)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { GetStaffShiftPreferenceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
  } satisfies GetStaffShiftPreferenceRequest;

  try {
    const data = await api.getStaffShiftPreference(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |

### Return type

[**StaffShiftPreferenceResponse**](StaffShiftPreferenceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff shift preference |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStaffShiftPreferenceLegacyPrefix

> StaffShiftPreferenceResponse getStaffShiftPreferenceLegacyPrefix(id)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { GetStaffShiftPreferenceLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
  } satisfies GetStaffShiftPreferenceLegacyPrefixRequest;

  try {
    const data = await api.getStaffShiftPreferenceLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |

### Return type

[**StaffShiftPreferenceResponse**](StaffShiftPreferenceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff shift preference |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStaffSkillProfile

> StaffSkillProfileResponse getStaffSkillProfile(id)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { GetStaffSkillProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
  } satisfies GetStaffSkillProfileRequest;

  try {
    const data = await api.getStaffSkillProfile(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |

### Return type

[**StaffSkillProfileResponse**](StaffSkillProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff skill profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStaffSkillProfileLegacyPrefix

> StaffSkillProfileResponse getStaffSkillProfileLegacyPrefix(id)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { GetStaffSkillProfileLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
  } satisfies GetStaffSkillProfileLegacyPrefixRequest;

  try {
    const data = await api.getStaffSkillProfileLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |

### Return type

[**StaffSkillProfileResponse**](StaffSkillProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff skill profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStaffUtilization

> StaffWorkload getStaffUtilization(id, period)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { GetStaffUtilizationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // string | `week`, `month`, `all`, or a calendar month as `YYYY-MM`.  The three words are anchored on today, so they can only describe the present. `YYYY-MM` names a month outright, which is what a caller settling a period that has already closed needs. Defaults to `week`. (optional)
    period: period_example,
  } satisfies GetStaffUtilizationRequest;

  try {
    const data = await api.getStaffUtilization(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **period** | `string` | &#x60;week&#x60;, &#x60;month&#x60;, &#x60;all&#x60;, or a calendar month as &#x60;YYYY-MM&#x60;.  The three words are anchored on today, so they can only describe the present. &#x60;YYYY-MM&#x60; names a month outright, which is what a caller settling a period that has already closed needs. Defaults to &#x60;week&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**StaffWorkload**](StaffWorkload.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff utilization |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStaffUtilizationLegacyPrefix

> StaffWorkload getStaffUtilizationLegacyPrefix(id, period)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { GetStaffUtilizationLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // string | `week`, `month`, `all`, or a calendar month as `YYYY-MM`.  The three words are anchored on today, so they can only describe the present. `YYYY-MM` names a month outright, which is what a caller settling a period that has already closed needs. Defaults to `week`. (optional)
    period: period_example,
  } satisfies GetStaffUtilizationLegacyPrefixRequest;

  try {
    const data = await api.getStaffUtilizationLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **period** | `string` | &#x60;week&#x60;, &#x60;month&#x60;, &#x60;all&#x60;, or a calendar month as &#x60;YYYY-MM&#x60;.  The three words are anchored on today, so they can only describe the present. &#x60;YYYY-MM&#x60; names a month outright, which is what a caller settling a period that has already closed needs. Defaults to &#x60;week&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**StaffWorkload**](StaffWorkload.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff utilization |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStaffLeaveRequests

> StaffLeaveRequestListResponse listStaffLeaveRequests(id)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ListStaffLeaveRequestsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
  } satisfies ListStaffLeaveRequestsRequest;

  try {
    const data = await api.listStaffLeaveRequests(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |

### Return type

[**StaffLeaveRequestListResponse**](StaffLeaveRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff leave request list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStaffLeaveRequestsLegacyPrefix

> StaffLeaveRequestListResponse listStaffLeaveRequestsLegacyPrefix(id)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ListStaffLeaveRequestsLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
  } satisfies ListStaffLeaveRequestsLegacyPrefixRequest;

  try {
    const data = await api.listStaffLeaveRequestsLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |

### Return type

[**StaffLeaveRequestListResponse**](StaffLeaveRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff leave request list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStaffMembers

> StaffMemberListResponse listStaffMembers()



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ListStaffMembersRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  try {
    const data = await api.listStaffMembers();
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

[**StaffMemberListResponse**](StaffMemberListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff member list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStaffMembersLegacyPrefix

> StaffMemberListResponse listStaffMembersLegacyPrefix()



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ListStaffMembersLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  try {
    const data = await api.listStaffMembersLegacyPrefix();
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

[**StaffMemberListResponse**](StaffMemberListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff member list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStaffShifts

> StaffShiftListResponse listStaffShifts(id, startDate, endDate)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ListStaffShiftsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // Date (optional)
    startDate: 2013-10-20,
    // Date (optional)
    endDate: 2013-10-20,
  } satisfies ListStaffShiftsRequest;

  try {
    const data = await api.listStaffShifts(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **startDate** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**StaffShiftListResponse**](StaffShiftListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff shift list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStaffShiftsLegacyPrefix

> StaffShiftListResponse listStaffShiftsLegacyPrefix(id, startDate, endDate)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ListStaffShiftsLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // Date (optional)
    startDate: 2013-10-20,
    // Date (optional)
    endDate: 2013-10-20,
  } satisfies ListStaffShiftsLegacyPrefixRequest;

  try {
    const data = await api.listStaffShiftsLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **startDate** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**StaffShiftListResponse**](StaffShiftListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff shift list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStaffUtilization

> StaffWorkloadListResponse listStaffUtilization(period)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ListStaffUtilizationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | `week`, `month`, `all`, or a calendar month as `YYYY-MM`.  The three words are anchored on today, so they can only describe the present. `YYYY-MM` names a month outright, which is what a caller settling a period that has already closed needs. Defaults to `week`. (optional)
    period: period_example,
  } satisfies ListStaffUtilizationRequest;

  try {
    const data = await api.listStaffUtilization(body);
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
| **period** | `string` | &#x60;week&#x60;, &#x60;month&#x60;, &#x60;all&#x60;, or a calendar month as &#x60;YYYY-MM&#x60;.  The three words are anchored on today, so they can only describe the present. &#x60;YYYY-MM&#x60; names a month outright, which is what a caller settling a period that has already closed needs. Defaults to &#x60;week&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**StaffWorkloadListResponse**](StaffWorkloadListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Workload for every staff member |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStaffUtilizationLegacyPrefix

> StaffWorkloadListResponse listStaffUtilizationLegacyPrefix(period)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { ListStaffUtilizationLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | `week`, `month`, `all`, or a calendar month as `YYYY-MM`.  The three words are anchored on today, so they can only describe the present. `YYYY-MM` names a month outright, which is what a caller settling a period that has already closed needs. Defaults to `week`. (optional)
    period: period_example,
  } satisfies ListStaffUtilizationLegacyPrefixRequest;

  try {
    const data = await api.listStaffUtilizationLegacyPrefix(body);
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
| **period** | `string` | &#x60;week&#x60;, &#x60;month&#x60;, &#x60;all&#x60;, or a calendar month as &#x60;YYYY-MM&#x60;.  The three words are anchored on today, so they can only describe the present. &#x60;YYYY-MM&#x60; names a month outright, which is what a caller settling a period that has already closed needs. Defaults to &#x60;week&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**StaffWorkloadListResponse**](StaffWorkloadListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Workload for every staff member |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffCompensationProfile

> StaffCompensationProfile updateStaffCompensationProfile(id, saveStaffCompensationProfileRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffCompensationProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // SaveStaffCompensationProfileRequest
    saveStaffCompensationProfileRequest: ...,
  } satisfies UpdateStaffCompensationProfileRequest;

  try {
    const data = await api.updateStaffCompensationProfile(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **saveStaffCompensationProfileRequest** | [SaveStaffCompensationProfileRequest](SaveStaffCompensationProfileRequest.md) |  | |

### Return type

[**StaffCompensationProfile**](StaffCompensationProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff compensation profile updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffCompensationProfileLegacyPrefix

> StaffCompensationProfile updateStaffCompensationProfileLegacyPrefix(id, saveStaffCompensationProfileRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffCompensationProfileLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // SaveStaffCompensationProfileRequest
    saveStaffCompensationProfileRequest: ...,
  } satisfies UpdateStaffCompensationProfileLegacyPrefixRequest;

  try {
    const data = await api.updateStaffCompensationProfileLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **saveStaffCompensationProfileRequest** | [SaveStaffCompensationProfileRequest](SaveStaffCompensationProfileRequest.md) |  | |

### Return type

[**StaffCompensationProfile**](StaffCompensationProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff compensation profile updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffMember

> StaffMember updateStaffMember(id, updateStaffMemberRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffMemberOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // UpdateStaffMemberRequest
    updateStaffMemberRequest: ...,
  } satisfies UpdateStaffMemberOperationRequest;

  try {
    const data = await api.updateStaffMember(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **updateStaffMemberRequest** | [UpdateStaffMemberRequest](UpdateStaffMemberRequest.md) |  | |

### Return type

[**StaffMember**](StaffMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff member updated |  -  |
| **404** | Staff member not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffMemberLegacyPrefix

> StaffMember updateStaffMemberLegacyPrefix(id, updateStaffMemberRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffMemberLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // UpdateStaffMemberRequest
    updateStaffMemberRequest: ...,
  } satisfies UpdateStaffMemberLegacyPrefixRequest;

  try {
    const data = await api.updateStaffMemberLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **updateStaffMemberRequest** | [UpdateStaffMemberRequest](UpdateStaffMemberRequest.md) |  | |

### Return type

[**StaffMember**](StaffMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff member updated |  -  |
| **404** | Staff member not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffShift

> StaffShift updateStaffShift(staffId, shiftId, updateStaffShiftRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffShiftOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    staffId: staffId_example,
    // string | Staff shift ID
    shiftId: shiftId_example,
    // UpdateStaffShiftRequest
    updateStaffShiftRequest: ...,
  } satisfies UpdateStaffShiftOperationRequest;

  try {
    const data = await api.updateStaffShift(body);
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
| **staffId** | `string` | Staff member ID | [Defaults to `undefined`] |
| **shiftId** | `string` | Staff shift ID | [Defaults to `undefined`] |
| **updateStaffShiftRequest** | [UpdateStaffShiftRequest](UpdateStaffShiftRequest.md) |  | |

### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff shift updated |  -  |
| **404** | Staff shift not found for this staff member |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffShiftLegacyPrefix

> StaffShift updateStaffShiftLegacyPrefix(staffId, shiftId, updateStaffShiftRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffShiftLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    staffId: staffId_example,
    // string | Staff shift ID
    shiftId: shiftId_example,
    // UpdateStaffShiftRequest
    updateStaffShiftRequest: ...,
  } satisfies UpdateStaffShiftLegacyPrefixRequest;

  try {
    const data = await api.updateStaffShiftLegacyPrefix(body);
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
| **staffId** | `string` | Staff member ID | [Defaults to `undefined`] |
| **shiftId** | `string` | Staff shift ID | [Defaults to `undefined`] |
| **updateStaffShiftRequest** | [UpdateStaffShiftRequest](UpdateStaffShiftRequest.md) |  | |

### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff shift updated |  -  |
| **404** | Staff shift not found for this staff member |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffShiftPreference

> StaffShiftPreference updateStaffShiftPreference(id, saveStaffShiftPreferenceRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffShiftPreferenceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // SaveStaffShiftPreferenceRequest
    saveStaffShiftPreferenceRequest: ...,
  } satisfies UpdateStaffShiftPreferenceRequest;

  try {
    const data = await api.updateStaffShiftPreference(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **saveStaffShiftPreferenceRequest** | [SaveStaffShiftPreferenceRequest](SaveStaffShiftPreferenceRequest.md) |  | |

### Return type

[**StaffShiftPreference**](StaffShiftPreference.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff shift preference updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffShiftPreferenceLegacyPrefix

> StaffShiftPreference updateStaffShiftPreferenceLegacyPrefix(id, saveStaffShiftPreferenceRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffShiftPreferenceLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // SaveStaffShiftPreferenceRequest
    saveStaffShiftPreferenceRequest: ...,
  } satisfies UpdateStaffShiftPreferenceLegacyPrefixRequest;

  try {
    const data = await api.updateStaffShiftPreferenceLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **saveStaffShiftPreferenceRequest** | [SaveStaffShiftPreferenceRequest](SaveStaffShiftPreferenceRequest.md) |  | |

### Return type

[**StaffShiftPreference**](StaffShiftPreference.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff shift preference updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffSkillProfile

> StaffSkillProfile updateStaffSkillProfile(id, saveStaffSkillProfileRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffSkillProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // SaveStaffSkillProfileRequest
    saveStaffSkillProfileRequest: ...,
  } satisfies UpdateStaffSkillProfileRequest;

  try {
    const data = await api.updateStaffSkillProfile(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **saveStaffSkillProfileRequest** | [SaveStaffSkillProfileRequest](SaveStaffSkillProfileRequest.md) |  | |

### Return type

[**StaffSkillProfile**](StaffSkillProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff skill profile updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffSkillProfileLegacyPrefix

> StaffSkillProfile updateStaffSkillProfileLegacyPrefix(id, saveStaffSkillProfileRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon-sdk/field';
import type { UpdateStaffSkillProfileLegacyPrefixRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // SaveStaffSkillProfileRequest
    saveStaffSkillProfileRequest: ...,
  } satisfies UpdateStaffSkillProfileLegacyPrefixRequest;

  try {
    const data = await api.updateStaffSkillProfileLegacyPrefix(body);
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
| **id** | `string` | Staff member ID | [Defaults to `undefined`] |
| **saveStaffSkillProfileRequest** | [SaveStaffSkillProfileRequest](SaveStaffSkillProfileRequest.md) |  | |

### Return type

[**StaffSkillProfile**](StaffSkillProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Staff skill profile updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

