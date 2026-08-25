# \HrmApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clock_in_staff**](HrmApi.md#clock_in_staff) | **POST** /v1/erp/hrm/staff/{id}/clock-in | 
[**clock_in_staff_legacy_prefix**](HrmApi.md#clock_in_staff_legacy_prefix) | **POST** /v1/erp/staff/{id}/clock-in | 
[**clock_out_staff**](HrmApi.md#clock_out_staff) | **POST** /v1/erp/hrm/staff/{id}/clock-out | 
[**clock_out_staff_legacy_prefix**](HrmApi.md#clock_out_staff_legacy_prefix) | **POST** /v1/erp/staff/{id}/clock-out | 
[**create_staff_leave_request**](HrmApi.md#create_staff_leave_request) | **POST** /v1/erp/hrm/staff/{id}/leave-requests | 
[**create_staff_leave_request_legacy_prefix**](HrmApi.md#create_staff_leave_request_legacy_prefix) | **POST** /v1/erp/staff/{id}/leave-requests | 
[**create_staff_member**](HrmApi.md#create_staff_member) | **POST** /v1/erp/hrm/staff | 
[**create_staff_member_legacy_prefix**](HrmApi.md#create_staff_member_legacy_prefix) | **POST** /v1/erp/staff | 
[**create_staff_shift**](HrmApi.md#create_staff_shift) | **POST** /v1/erp/hrm/staff/{id}/shifts | 
[**create_staff_shift_legacy_prefix**](HrmApi.md#create_staff_shift_legacy_prefix) | **POST** /v1/erp/staff/{id}/shifts | 
[**decide_staff_leave_request**](HrmApi.md#decide_staff_leave_request) | **PATCH** /v1/erp/hrm/leave-requests/{id} | 
[**decide_staff_leave_request_legacy_prefix**](HrmApi.md#decide_staff_leave_request_legacy_prefix) | **PATCH** /v1/erp/staff/leave-requests/{id} | 
[**delete_staff_member**](HrmApi.md#delete_staff_member) | **DELETE** /v1/erp/hrm/staff/{id} | 
[**delete_staff_member_legacy_prefix**](HrmApi.md#delete_staff_member_legacy_prefix) | **DELETE** /v1/erp/staff/{id} | 
[**delete_staff_shift**](HrmApi.md#delete_staff_shift) | **DELETE** /v1/erp/hrm/staff/{staffId}/shifts/{shiftId} | 
[**delete_staff_shift_legacy_prefix**](HrmApi.md#delete_staff_shift_legacy_prefix) | **DELETE** /v1/erp/staff/{staffId}/shifts/{shiftId} | 
[**get_staff_compensation_profile**](HrmApi.md#get_staff_compensation_profile) | **GET** /v1/erp/hrm/staff/{id}/compensation | 
[**get_staff_compensation_profile_legacy_prefix**](HrmApi.md#get_staff_compensation_profile_legacy_prefix) | **GET** /v1/erp/staff/{id}/compensation | 
[**get_staff_payroll_estimate**](HrmApi.md#get_staff_payroll_estimate) | **GET** /v1/erp/hrm/staff/{id}/payroll-estimate | 
[**get_staff_payroll_estimate_legacy_prefix**](HrmApi.md#get_staff_payroll_estimate_legacy_prefix) | **GET** /v1/erp/staff/{id}/payroll-estimate | 
[**get_staff_shift_preference**](HrmApi.md#get_staff_shift_preference) | **GET** /v1/erp/hrm/staff/{id}/shift-preference | 
[**get_staff_shift_preference_legacy_prefix**](HrmApi.md#get_staff_shift_preference_legacy_prefix) | **GET** /v1/erp/staff/{id}/shift-preference | 
[**get_staff_skill_profile**](HrmApi.md#get_staff_skill_profile) | **GET** /v1/erp/hrm/staff/{id}/skills | 
[**get_staff_skill_profile_legacy_prefix**](HrmApi.md#get_staff_skill_profile_legacy_prefix) | **GET** /v1/erp/staff/{id}/skills | 
[**get_staff_utilization**](HrmApi.md#get_staff_utilization) | **GET** /v1/erp/hrm/staff/{id}/utilization | 
[**get_staff_utilization_legacy_prefix**](HrmApi.md#get_staff_utilization_legacy_prefix) | **GET** /v1/erp/staff/{id}/utilization | 
[**list_staff_leave_requests**](HrmApi.md#list_staff_leave_requests) | **GET** /v1/erp/hrm/staff/{id}/leave-requests | 
[**list_staff_leave_requests_legacy_prefix**](HrmApi.md#list_staff_leave_requests_legacy_prefix) | **GET** /v1/erp/staff/{id}/leave-requests | 
[**list_staff_members**](HrmApi.md#list_staff_members) | **GET** /v1/erp/hrm/staff | 
[**list_staff_members_legacy_prefix**](HrmApi.md#list_staff_members_legacy_prefix) | **GET** /v1/erp/staff | 
[**list_staff_shifts**](HrmApi.md#list_staff_shifts) | **GET** /v1/erp/hrm/staff/{id}/shifts | 
[**list_staff_shifts_legacy_prefix**](HrmApi.md#list_staff_shifts_legacy_prefix) | **GET** /v1/erp/staff/{id}/shifts | 
[**list_staff_utilization**](HrmApi.md#list_staff_utilization) | **GET** /v1/erp/hrm/staff-utilization | 
[**list_staff_utilization_legacy_prefix**](HrmApi.md#list_staff_utilization_legacy_prefix) | **GET** /v1/erp/staff-utilization | 
[**update_staff_compensation_profile**](HrmApi.md#update_staff_compensation_profile) | **PATCH** /v1/erp/hrm/staff/{id}/compensation | 
[**update_staff_compensation_profile_legacy_prefix**](HrmApi.md#update_staff_compensation_profile_legacy_prefix) | **PATCH** /v1/erp/staff/{id}/compensation | 
[**update_staff_member**](HrmApi.md#update_staff_member) | **PATCH** /v1/erp/hrm/staff/{id} | 
[**update_staff_member_legacy_prefix**](HrmApi.md#update_staff_member_legacy_prefix) | **PATCH** /v1/erp/staff/{id} | 
[**update_staff_shift**](HrmApi.md#update_staff_shift) | **PATCH** /v1/erp/hrm/staff/{staffId}/shifts/{shiftId} | 
[**update_staff_shift_legacy_prefix**](HrmApi.md#update_staff_shift_legacy_prefix) | **PATCH** /v1/erp/staff/{staffId}/shifts/{shiftId} | 
[**update_staff_shift_preference**](HrmApi.md#update_staff_shift_preference) | **PATCH** /v1/erp/hrm/staff/{id}/shift-preference | 
[**update_staff_shift_preference_legacy_prefix**](HrmApi.md#update_staff_shift_preference_legacy_prefix) | **PATCH** /v1/erp/staff/{id}/shift-preference | 
[**update_staff_skill_profile**](HrmApi.md#update_staff_skill_profile) | **PATCH** /v1/erp/hrm/staff/{id}/skills | 
[**update_staff_skill_profile_legacy_prefix**](HrmApi.md#update_staff_skill_profile_legacy_prefix) | **PATCH** /v1/erp/staff/{id}/skills | 



## clock_in_staff

> models::StaffAttendance clock_in_staff(id, clock_in_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**clock_in_request** | [**ClockInRequest**](ClockInRequest.md) |  | [required] |

### Return type

[**models::StaffAttendance**](StaffAttendance.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## clock_in_staff_legacy_prefix

> models::StaffAttendance clock_in_staff_legacy_prefix(id, clock_in_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**clock_in_request** | [**ClockInRequest**](ClockInRequest.md) |  | [required] |

### Return type

[**models::StaffAttendance**](StaffAttendance.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## clock_out_staff

> models::StaffAttendance clock_out_staff(id, clock_out_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**clock_out_request** | [**ClockOutRequest**](ClockOutRequest.md) |  | [required] |

### Return type

[**models::StaffAttendance**](StaffAttendance.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## clock_out_staff_legacy_prefix

> models::StaffAttendance clock_out_staff_legacy_prefix(id, clock_out_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**clock_out_request** | [**ClockOutRequest**](ClockOutRequest.md) |  | [required] |

### Return type

[**models::StaffAttendance**](StaffAttendance.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_staff_leave_request

> models::StaffLeaveRequest create_staff_leave_request(id, create_staff_leave_request_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**create_staff_leave_request_request** | [**CreateStaffLeaveRequestRequest**](CreateStaffLeaveRequestRequest.md) |  | [required] |

### Return type

[**models::StaffLeaveRequest**](StaffLeaveRequest.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_staff_leave_request_legacy_prefix

> models::StaffLeaveRequest create_staff_leave_request_legacy_prefix(id, create_staff_leave_request_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**create_staff_leave_request_request** | [**CreateStaffLeaveRequestRequest**](CreateStaffLeaveRequestRequest.md) |  | [required] |

### Return type

[**models::StaffLeaveRequest**](StaffLeaveRequest.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_staff_member

> models::StaffMember create_staff_member(save_staff_member_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_staff_member_request** | [**SaveStaffMemberRequest**](SaveStaffMemberRequest.md) |  | [required] |

### Return type

[**models::StaffMember**](StaffMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_staff_member_legacy_prefix

> models::StaffMember create_staff_member_legacy_prefix(save_staff_member_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_staff_member_request** | [**SaveStaffMemberRequest**](SaveStaffMemberRequest.md) |  | [required] |

### Return type

[**models::StaffMember**](StaffMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_staff_shift

> models::StaffShift create_staff_shift(id, save_staff_shift_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**save_staff_shift_request** | [**SaveStaffShiftRequest**](SaveStaffShiftRequest.md) |  | [required] |

### Return type

[**models::StaffShift**](StaffShift.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_staff_shift_legacy_prefix

> models::StaffShift create_staff_shift_legacy_prefix(id, save_staff_shift_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**save_staff_shift_request** | [**SaveStaffShiftRequest**](SaveStaffShiftRequest.md) |  | [required] |

### Return type

[**models::StaffShift**](StaffShift.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## decide_staff_leave_request

> models::StaffLeaveRequest decide_staff_leave_request(id, decide_staff_leave_request_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Leave request ID | [required] |
**decide_staff_leave_request_request** | [**DecideStaffLeaveRequestRequest**](DecideStaffLeaveRequestRequest.md) |  | [required] |

### Return type

[**models::StaffLeaveRequest**](StaffLeaveRequest.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## decide_staff_leave_request_legacy_prefix

> models::StaffLeaveRequest decide_staff_leave_request_legacy_prefix(id, decide_staff_leave_request_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Leave request ID | [required] |
**decide_staff_leave_request_request** | [**DecideStaffLeaveRequestRequest**](DecideStaffLeaveRequestRequest.md) |  | [required] |

### Return type

[**models::StaffLeaveRequest**](StaffLeaveRequest.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_staff_member

> delete_staff_member(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_staff_member_legacy_prefix

> delete_staff_member_legacy_prefix(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_staff_shift

> delete_staff_shift(staff_id, shift_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**staff_id** | **String** | Staff member ID | [required] |
**shift_id** | **String** | Staff shift ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_staff_shift_legacy_prefix

> delete_staff_shift_legacy_prefix(staff_id, shift_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**staff_id** | **String** | Staff member ID | [required] |
**shift_id** | **String** | Staff shift ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staff_compensation_profile

> models::StaffCompensationProfileResponse get_staff_compensation_profile(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |

### Return type

[**models::StaffCompensationProfileResponse**](StaffCompensationProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staff_compensation_profile_legacy_prefix

> models::StaffCompensationProfileResponse get_staff_compensation_profile_legacy_prefix(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |

### Return type

[**models::StaffCompensationProfileResponse**](StaffCompensationProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staff_payroll_estimate

> models::StaffPayrollEstimate get_staff_payroll_estimate(id, period)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**period** | Option<**String**> |  |  |

### Return type

[**models::StaffPayrollEstimate**](StaffPayrollEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staff_payroll_estimate_legacy_prefix

> models::StaffPayrollEstimate get_staff_payroll_estimate_legacy_prefix(id, period)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**period** | Option<**String**> |  |  |

### Return type

[**models::StaffPayrollEstimate**](StaffPayrollEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staff_shift_preference

> models::StaffShiftPreferenceResponse get_staff_shift_preference(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |

### Return type

[**models::StaffShiftPreferenceResponse**](StaffShiftPreferenceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staff_shift_preference_legacy_prefix

> models::StaffShiftPreferenceResponse get_staff_shift_preference_legacy_prefix(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |

### Return type

[**models::StaffShiftPreferenceResponse**](StaffShiftPreferenceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staff_skill_profile

> models::StaffSkillProfileResponse get_staff_skill_profile(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |

### Return type

[**models::StaffSkillProfileResponse**](StaffSkillProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staff_skill_profile_legacy_prefix

> models::StaffSkillProfileResponse get_staff_skill_profile_legacy_prefix(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |

### Return type

[**models::StaffSkillProfileResponse**](StaffSkillProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staff_utilization

> models::StaffWorkload get_staff_utilization(id, period)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**period** | Option<**String**> | `week`, `month`, `all`, or a calendar month as `YYYY-MM`.  The three words are anchored on today, so they can only describe the present. `YYYY-MM` names a month outright, which is what a caller settling a period that has already closed needs. Defaults to `week`. |  |

### Return type

[**models::StaffWorkload**](StaffWorkload.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staff_utilization_legacy_prefix

> models::StaffWorkload get_staff_utilization_legacy_prefix(id, period)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**period** | Option<**String**> | `week`, `month`, `all`, or a calendar month as `YYYY-MM`.  The three words are anchored on today, so they can only describe the present. `YYYY-MM` names a month outright, which is what a caller settling a period that has already closed needs. Defaults to `week`. |  |

### Return type

[**models::StaffWorkload**](StaffWorkload.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_staff_leave_requests

> models::StaffLeaveRequestListResponse list_staff_leave_requests(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |

### Return type

[**models::StaffLeaveRequestListResponse**](StaffLeaveRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_staff_leave_requests_legacy_prefix

> models::StaffLeaveRequestListResponse list_staff_leave_requests_legacy_prefix(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |

### Return type

[**models::StaffLeaveRequestListResponse**](StaffLeaveRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_staff_members

> models::StaffMemberListResponse list_staff_members()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::StaffMemberListResponse**](StaffMemberListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_staff_members_legacy_prefix

> models::StaffMemberListResponse list_staff_members_legacy_prefix()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::StaffMemberListResponse**](StaffMemberListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_staff_shifts

> models::StaffShiftListResponse list_staff_shifts(id, start_date, end_date)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**start_date** | Option<**String**> |  |  |
**end_date** | Option<**String**> |  |  |

### Return type

[**models::StaffShiftListResponse**](StaffShiftListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_staff_shifts_legacy_prefix

> models::StaffShiftListResponse list_staff_shifts_legacy_prefix(id, start_date, end_date)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**start_date** | Option<**String**> |  |  |
**end_date** | Option<**String**> |  |  |

### Return type

[**models::StaffShiftListResponse**](StaffShiftListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_staff_utilization

> models::StaffWorkloadListResponse list_staff_utilization(period)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**period** | Option<**String**> | `week`, `month`, `all`, or a calendar month as `YYYY-MM`.  The three words are anchored on today, so they can only describe the present. `YYYY-MM` names a month outright, which is what a caller settling a period that has already closed needs. Defaults to `week`. |  |

### Return type

[**models::StaffWorkloadListResponse**](StaffWorkloadListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_staff_utilization_legacy_prefix

> models::StaffWorkloadListResponse list_staff_utilization_legacy_prefix(period)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**period** | Option<**String**> | `week`, `month`, `all`, or a calendar month as `YYYY-MM`.  The three words are anchored on today, so they can only describe the present. `YYYY-MM` names a month outright, which is what a caller settling a period that has already closed needs. Defaults to `week`. |  |

### Return type

[**models::StaffWorkloadListResponse**](StaffWorkloadListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_compensation_profile

> models::StaffCompensationProfile update_staff_compensation_profile(id, save_staff_compensation_profile_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**save_staff_compensation_profile_request** | [**SaveStaffCompensationProfileRequest**](SaveStaffCompensationProfileRequest.md) |  | [required] |

### Return type

[**models::StaffCompensationProfile**](StaffCompensationProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_compensation_profile_legacy_prefix

> models::StaffCompensationProfile update_staff_compensation_profile_legacy_prefix(id, save_staff_compensation_profile_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**save_staff_compensation_profile_request** | [**SaveStaffCompensationProfileRequest**](SaveStaffCompensationProfileRequest.md) |  | [required] |

### Return type

[**models::StaffCompensationProfile**](StaffCompensationProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_member

> models::StaffMember update_staff_member(id, update_staff_member_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**update_staff_member_request** | [**UpdateStaffMemberRequest**](UpdateStaffMemberRequest.md) |  | [required] |

### Return type

[**models::StaffMember**](StaffMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_member_legacy_prefix

> models::StaffMember update_staff_member_legacy_prefix(id, update_staff_member_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**update_staff_member_request** | [**UpdateStaffMemberRequest**](UpdateStaffMemberRequest.md) |  | [required] |

### Return type

[**models::StaffMember**](StaffMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_shift

> models::StaffShift update_staff_shift(staff_id, shift_id, update_staff_shift_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**staff_id** | **String** | Staff member ID | [required] |
**shift_id** | **String** | Staff shift ID | [required] |
**update_staff_shift_request** | [**UpdateStaffShiftRequest**](UpdateStaffShiftRequest.md) |  | [required] |

### Return type

[**models::StaffShift**](StaffShift.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_shift_legacy_prefix

> models::StaffShift update_staff_shift_legacy_prefix(staff_id, shift_id, update_staff_shift_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**staff_id** | **String** | Staff member ID | [required] |
**shift_id** | **String** | Staff shift ID | [required] |
**update_staff_shift_request** | [**UpdateStaffShiftRequest**](UpdateStaffShiftRequest.md) |  | [required] |

### Return type

[**models::StaffShift**](StaffShift.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_shift_preference

> models::StaffShiftPreference update_staff_shift_preference(id, save_staff_shift_preference_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**save_staff_shift_preference_request** | [**SaveStaffShiftPreferenceRequest**](SaveStaffShiftPreferenceRequest.md) |  | [required] |

### Return type

[**models::StaffShiftPreference**](StaffShiftPreference.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_shift_preference_legacy_prefix

> models::StaffShiftPreference update_staff_shift_preference_legacy_prefix(id, save_staff_shift_preference_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**save_staff_shift_preference_request** | [**SaveStaffShiftPreferenceRequest**](SaveStaffShiftPreferenceRequest.md) |  | [required] |

### Return type

[**models::StaffShiftPreference**](StaffShiftPreference.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_skill_profile

> models::StaffSkillProfile update_staff_skill_profile(id, save_staff_skill_profile_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**save_staff_skill_profile_request** | [**SaveStaffSkillProfileRequest**](SaveStaffSkillProfileRequest.md) |  | [required] |

### Return type

[**models::StaffSkillProfile**](StaffSkillProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_skill_profile_legacy_prefix

> models::StaffSkillProfile update_staff_skill_profile_legacy_prefix(id, save_staff_skill_profile_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff member ID | [required] |
**save_staff_skill_profile_request** | [**SaveStaffSkillProfileRequest**](SaveStaffSkillProfileRequest.md) |  | [required] |

### Return type

[**models::StaffSkillProfile**](StaffSkillProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

