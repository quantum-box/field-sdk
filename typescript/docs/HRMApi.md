# HRMApi

All URIs are relative to *http://localhost*

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
| [**updateStaffCompensationProfile**](HRMApi.md#updatestaffcompensationprofile) | **PATCH** /v1/erp/hrm/staff/{id}/compensation |  |
| [**updateStaffCompensationProfileLegacyPrefix**](HRMApi.md#updatestaffcompensationprofilelegacyprefix) | **PATCH** /v1/erp/staff/{id}/compensation |  |
| [**updateStaffMember**](HRMApi.md#updatestaffmember) | **PATCH** /v1/erp/hrm/staff/{id} |  |
| [**updateStaffMemberLegacyPrefix**](HRMApi.md#updatestaffmemberlegacyprefix) | **PATCH** /v1/erp/staff/{id} |  |
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
} from '@tachyon/field-sdk';
import type { ClockInStaffRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ClockInStaffLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ClockOutStaffRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ClockOutStaffLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { CreateStaffLeaveRequestOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { CreateStaffLeaveRequestLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { CreateStaffMemberRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { CreateStaffMemberLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { CreateStaffShiftRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { CreateStaffShiftLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { DecideStaffLeaveRequestOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { DecideStaffLeaveRequestLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## getStaffCompensationProfile

> StaffCompensationProfileResponse getStaffCompensationProfile(id)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon/field-sdk';
import type { GetStaffCompensationProfileRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { GetStaffCompensationProfileLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { GetStaffPayrollEstimateRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { GetStaffPayrollEstimateLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { GetStaffShiftPreferenceRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { GetStaffShiftPreferenceLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { GetStaffSkillProfileRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { GetStaffSkillProfileLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { GetStaffUtilizationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
| **period** | `string` |  | [Optional] [Defaults to `undefined`] |

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
} from '@tachyon/field-sdk';
import type { GetStaffUtilizationLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
| **period** | `string` |  | [Optional] [Defaults to `undefined`] |

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
} from '@tachyon/field-sdk';
import type { ListStaffLeaveRequestsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListStaffLeaveRequestsLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListStaffMembersRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListStaffMembersLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListStaffShiftsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { ListStaffShiftsLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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


## updateStaffCompensationProfile

> StaffCompensationProfile updateStaffCompensationProfile(id, saveStaffCompensationProfileRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon/field-sdk';
import type { UpdateStaffCompensationProfileRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { UpdateStaffCompensationProfileLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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

> StaffMember updateStaffMember(id, saveStaffMemberRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon/field-sdk';
import type { UpdateStaffMemberRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // SaveStaffMemberRequest
    saveStaffMemberRequest: ...,
  } satisfies UpdateStaffMemberRequest;

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
| **200** | Staff member updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffMemberLegacyPrefix

> StaffMember updateStaffMemberLegacyPrefix(id, saveStaffMemberRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon/field-sdk';
import type { UpdateStaffMemberLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HRMApi(config);

  const body = {
    // string | Staff member ID
    id: id_example,
    // SaveStaffMemberRequest
    saveStaffMemberRequest: ...,
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
| **200** | Staff member updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStaffShiftPreference

> StaffShiftPreference updateStaffShiftPreference(id, saveStaffShiftPreferenceRequest)



### Example

```ts
import {
  Configuration,
  HRMApi,
} from '@tachyon/field-sdk';
import type { UpdateStaffShiftPreferenceRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { UpdateStaffShiftPreferenceLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { UpdateStaffSkillProfileRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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
} from '@tachyon/field-sdk';
import type { UpdateStaffSkillProfileLegacyPrefixRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
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

