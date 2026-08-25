# \GolfCourseApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auto_assign_golf_caddies**](GolfCourseApi.md#auto_assign_golf_caddies) | **POST** /v1/erp/extensions/golf-course/caddie-auto-assignments | キャディ自動配置（T09）。 対象日のキャディ付き予約のうち未割当のものへ、以下を考慮して割り当てる: - 稼働可否（希望休・午前/午後のみ・軽勤務） - 1日の担当数（2ラウンドは can_two_rounds かつ two_round_request のときのみ） - 月間契約ラウンドの残数が多い順（生活基盤=契約消化を優先） - 同点はレーティング順
[**create_golf_caddie_assignment**](GolfCourseApi.md#create_golf_caddie_assignment) | **POST** /v1/erp/extensions/golf-course/caddie-assignments | 
[**create_golf_caddie_profile**](GolfCourseApi.md#create_golf_caddie_profile) | **POST** /v1/erp/extensions/golf-course/caddie-profiles | 
[**create_golf_caddie_rating**](GolfCourseApi.md#create_golf_caddie_rating) | **POST** /v1/erp/extensions/golf-course/caddie-ratings | 
[**create_golf_course**](GolfCourseApi.md#create_golf_course) | **POST** /v1/erp/extensions/golf-course/courses | 
[**create_golf_course_resource**](GolfCourseApi.md#create_golf_course_resource) | **POST** /v1/erp/extensions/golf-course/resources | 
[**delete_caddie_availability**](GolfCourseApi.md#delete_caddie_availability) | **DELETE** /v1/erp/extensions/golf-course/caddie-availabilities/{caddie_id}/{date} | 
[**delete_daily_budget**](GolfCourseApi.md#delete_daily_budget) | **DELETE** /v1/erp/extensions/golf-course/daily-budgets/{course_id}/{date} | 
[**delete_golf_caddie_profile**](GolfCourseApi.md#delete_golf_caddie_profile) | **DELETE** /v1/erp/extensions/golf-course/caddie-profiles/{id} | 
[**delete_golf_course**](GolfCourseApi.md#delete_golf_course) | **DELETE** /v1/erp/extensions/golf-course/courses/{id} | 
[**export_golf_caddie_payroll_csv**](GolfCourseApi.md#export_golf_caddie_payroll_csv) | **GET** /v1/erp/extensions/golf-course/caddie-payroll-summary/export.csv | 
[**export_golf_monthly_settlement_csv**](GolfCourseApi.md#export_golf_monthly_settlement_csv) | **GET** /v1/erp/extensions/golf-course/monthly-settlement/export.csv | 
[**get_daily_budget_achievement**](GolfCourseApi.md#get_daily_budget_achievement) | **GET** /v1/erp/extensions/golf-course/daily-budgets/achievement | 
[**get_golf_course**](GolfCourseApi.md#get_golf_course) | **GET** /v1/erp/extensions/golf-course/courses/{id} | 
[**get_golf_monthly_settlement**](GolfCourseApi.md#get_golf_monthly_settlement) | **GET** /v1/erp/extensions/golf-course/monthly-settlement | 
[**get_golf_reservation_policy**](GolfCourseApi.md#get_golf_reservation_policy) | **GET** /v1/erp/extensions/golf-course/reservation-policy | 
[**import_daily_budgets_csv**](GolfCourseApi.md#import_daily_budgets_csv) | **POST** /v1/erp/extensions/golf-course/daily-budgets/import | CSV import: `golf_course_id,date,target_revenue,target_average_spend,target_caddy_attached_ratio`
[**list_caddie_availabilities**](GolfCourseApi.md#list_caddie_availabilities) | **GET** /v1/erp/extensions/golf-course/caddie-availabilities | 
[**list_caddie_course_memberships**](GolfCourseApi.md#list_caddie_course_memberships) | **GET** /v1/erp/extensions/golf-course/caddie-profiles/{id}/courses | 
[**list_daily_budgets**](GolfCourseApi.md#list_daily_budgets) | **GET** /v1/erp/extensions/golf-course/daily-budgets | 
[**list_golf_caddie_assignments**](GolfCourseApi.md#list_golf_caddie_assignments) | **GET** /v1/erp/extensions/golf-course/caddie-assignments | 
[**list_golf_caddie_attendance_period_snapshots**](GolfCourseApi.md#list_golf_caddie_attendance_period_snapshots) | **GET** /v1/erp/extensions/golf-course/caddie-attendance-snapshots | 
[**list_golf_caddie_attendance_snapshot**](GolfCourseApi.md#list_golf_caddie_attendance_snapshot) | **GET** /v1/erp/extensions/golf-course/caddie-attendance-snapshot | 
[**list_golf_caddie_payroll_summary**](GolfCourseApi.md#list_golf_caddie_payroll_summary) | **GET** /v1/erp/extensions/golf-course/caddie-payroll-summary | 
[**list_golf_caddie_profiles**](GolfCourseApi.md#list_golf_caddie_profiles) | **GET** /v1/erp/extensions/golf-course/caddie-profiles | 
[**list_golf_caddie_ratings**](GolfCourseApi.md#list_golf_caddie_ratings) | **GET** /v1/erp/extensions/golf-course/caddie-ratings | 
[**list_golf_course_resources**](GolfCourseApi.md#list_golf_course_resources) | **GET** /v1/erp/extensions/golf-course/resources | 
[**list_golf_courses**](GolfCourseApi.md#list_golf_courses) | **GET** /v1/erp/extensions/golf-course/courses | 
[**list_golf_custom_fields**](GolfCourseApi.md#list_golf_custom_fields) | **GET** /v1/erp/extensions/golf-course/custom-fields | 
[**list_golf_product_slots**](GolfCourseApi.md#list_golf_product_slots) | **GET** /v1/erp/extensions/golf-course/reservation-products/{service_id}/slots | Deprecated by PLT-3199: availability is the resource's generated inventory, so these product-scoped slots no longer decide what a storefront can book. Migrate with `POST /v1/erp/reservation-resources/{id}/schedule/import-product-slots`. CERP-25 forbids removing a `/v1/` endpoint, so removal waits for `/v2/`.
[**list_golf_reservation_products**](GolfCourseApi.md#list_golf_reservation_products) | **GET** /v1/erp/extensions/golf-course/reservation-products | 
[**recommend_golf_caddies**](GolfCourseApi.md#recommend_golf_caddies) | **GET** /v1/erp/extensions/golf-course/caddie-recommendations | 
[**replace_caddie_course_memberships**](GolfCourseApi.md#replace_caddie_course_memberships) | **PUT** /v1/erp/extensions/golf-course/caddie-profiles/{id}/courses | 
[**replace_golf_product_slots**](GolfCourseApi.md#replace_golf_product_slots) | **PUT** /v1/erp/extensions/golf-course/reservation-products/{service_id}/slots | Deprecated by PLT-3199; see `list_golf_product_slots`. Writing here no longer changes what a storefront offers.
[**update_golf_caddie_assignment**](GolfCourseApi.md#update_golf_caddie_assignment) | **PATCH** /v1/erp/extensions/golf-course/caddie-assignments/{id} | 
[**update_golf_caddie_profile**](GolfCourseApi.md#update_golf_caddie_profile) | **PATCH** /v1/erp/extensions/golf-course/caddie-profiles/{id} | 
[**update_golf_course**](GolfCourseApi.md#update_golf_course) | **PATCH** /v1/erp/extensions/golf-course/courses/{id} | 
[**update_golf_course_resource**](GolfCourseApi.md#update_golf_course_resource) | **PATCH** /v1/erp/extensions/golf-course/resources/{id} | 
[**update_golf_custom_field**](GolfCourseApi.md#update_golf_custom_field) | **PATCH** /v1/erp/extensions/golf-course/custom-fields | 
[**update_golf_reservation_policy**](GolfCourseApi.md#update_golf_reservation_policy) | **PATCH** /v1/erp/extensions/golf-course/reservation-policy | 
[**upsert_caddie_availability**](GolfCourseApi.md#upsert_caddie_availability) | **POST** /v1/erp/extensions/golf-course/caddie-availabilities | 
[**upsert_daily_budget**](GolfCourseApi.md#upsert_daily_budget) | **POST** /v1/erp/extensions/golf-course/daily-budgets | 
[**upsert_golf_reservation_product**](GolfCourseApi.md#upsert_golf_reservation_product) | **POST** /v1/erp/extensions/golf-course/reservation-products/{service_id} | 



## auto_assign_golf_caddies

> models::AutoAssignCaddiesResponse auto_assign_golf_caddies(auto_assign_caddies_request)
キャディ自動配置（T09）。 対象日のキャディ付き予約のうち未割当のものへ、以下を考慮して割り当てる: - 稼働可否（希望休・午前/午後のみ・軽勤務） - 1日の担当数（2ラウンドは can_two_rounds かつ two_round_request のときのみ） - 月間契約ラウンドの残数が多い順（生活基盤=契約消化を優先） - 同点はレーティング順

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**auto_assign_caddies_request** | [**AutoAssignCaddiesRequest**](AutoAssignCaddiesRequest.md) |  | [required] |

### Return type

[**models::AutoAssignCaddiesResponse**](AutoAssignCaddiesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_golf_caddie_assignment

> models::GolfCaddieAssignment create_golf_caddie_assignment(save_golf_caddie_assignment_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_golf_caddie_assignment_request** | [**SaveGolfCaddieAssignmentRequest**](SaveGolfCaddieAssignmentRequest.md) |  | [required] |

### Return type

[**models::GolfCaddieAssignment**](GolfCaddieAssignment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_golf_caddie_profile

> models::GolfCaddieProfile create_golf_caddie_profile(save_golf_caddie_profile_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_golf_caddie_profile_request** | [**SaveGolfCaddieProfileRequest**](SaveGolfCaddieProfileRequest.md) |  | [required] |

### Return type

[**models::GolfCaddieProfile**](GolfCaddieProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_golf_caddie_rating

> models::GolfCaddieRating create_golf_caddie_rating(save_golf_caddie_rating_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_golf_caddie_rating_request** | [**SaveGolfCaddieRatingRequest**](SaveGolfCaddieRatingRequest.md) |  | [required] |

### Return type

[**models::GolfCaddieRating**](GolfCaddieRating.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_golf_course

> models::GolfCourse create_golf_course(save_golf_course_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_golf_course_request** | [**SaveGolfCourseRequest**](SaveGolfCourseRequest.md) |  | [required] |

### Return type

[**models::GolfCourse**](GolfCourse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_golf_course_resource

> models::GolfCourseResource create_golf_course_resource(save_golf_course_resource_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_golf_course_resource_request** | [**SaveGolfCourseResourceRequest**](SaveGolfCourseResourceRequest.md) |  | [required] |

### Return type

[**models::GolfCourseResource**](GolfCourseResource.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_caddie_availability

> delete_caddie_availability(caddie_id, date)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**caddie_id** | **String** | Caddie profile ID | [required] |
**date** | **String** | Availability date | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_daily_budget

> delete_daily_budget(course_id, date)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**course_id** | **String** | Golf course ID | [required] |
**date** | **String** | Budget date (YYYY-MM-DD) | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_golf_caddie_profile

> delete_golf_caddie_profile(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Golf caddie profile ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_golf_course

> delete_golf_course(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Golf course ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## export_golf_caddie_payroll_csv

> export_golf_caddie_payroll_csv(year_month, timezone)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**year_month** | **String** |  | [required] |
**timezone** | Option<**String**> | IANA timezone defining the requested payroll month. Omitted keeps the legacy UTC boundary for existing callers. |  |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## export_golf_monthly_settlement_csv

> export_golf_monthly_settlement_csv(year_month, timezone)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**year_month** | **String** |  | [required] |
**timezone** | Option<**String**> | IANA timezone defining the settlement month. Omitted keeps legacy UTC. |  |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_daily_budget_achievement

> models::DailyBudgetAchievementResponse get_daily_budget_achievement(from, to, golf_course_id, timezone)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**from** | **String** | Range start date (inclusive). | [required] |
**to** | **String** | Range end date (inclusive). | [required] |
**golf_course_id** | Option<**String**> | Filter by golf course ID. |  |
**timezone** | Option<**String**> | IANA timezone defining each aggregation day. Omitted keeps legacy UTC. |  |

### Return type

[**models::DailyBudgetAchievementResponse**](DailyBudgetAchievementResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_golf_course

> models::GolfCourse get_golf_course(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Golf course ID | [required] |

### Return type

[**models::GolfCourse**](GolfCourse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_golf_monthly_settlement

> models::GolfMonthlySettlementReport get_golf_monthly_settlement(year_month, timezone)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**year_month** | **String** |  | [required] |
**timezone** | Option<**String**> | IANA timezone defining the settlement month. Omitted keeps legacy UTC. |  |

### Return type

[**models::GolfMonthlySettlementReport**](GolfMonthlySettlementReport.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_golf_reservation_policy

> models::GolfReservationPolicy get_golf_reservation_policy(reservation_type_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**reservation_type_id** | Option<**String**> |  |  |

### Return type

[**models::GolfReservationPolicy**](GolfReservationPolicy.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## import_daily_budgets_csv

> models::DailyBudgetListResponse import_daily_budgets_csv(body)
CSV import: `golf_course_id,date,target_revenue,target_average_spend,target_caddy_attached_ratio`

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**body** | **String** | Raw CSV text of daily budgets to import: `golf_course_id,date,target_revenue,target_average_spend,target_caddy_attached_ratio` | [required] |

### Return type

[**models::DailyBudgetListResponse**](DailyBudgetListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: text/csv
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_caddie_availabilities

> models::CaddieAvailabilityListResponse list_caddie_availabilities(caddie_profile_id, from, to)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**caddie_profile_id** | Option<**String**> |  |  |
**from** | Option<**String**> |  |  |
**to** | Option<**String**> |  |  |

### Return type

[**models::CaddieAvailabilityListResponse**](CaddieAvailabilityListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_caddie_course_memberships

> models::CaddieCourseMembershipListResponse list_caddie_course_memberships(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Caddie profile ID | [required] |

### Return type

[**models::CaddieCourseMembershipListResponse**](CaddieCourseMembershipListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_daily_budgets

> models::DailyBudgetListResponse list_daily_budgets(golf_course_id, from, to)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**golf_course_id** | Option<**String**> | Filter by golf course ID. |  |
**from** | Option<**String**> | Range start date (inclusive). |  |
**to** | Option<**String**> | Range end date (inclusive). |  |

### Return type

[**models::DailyBudgetListResponse**](DailyBudgetListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_golf_caddie_assignments

> models::GolfCaddieAssignmentListResponse list_golf_caddie_assignments(reservation_id, caddie_profile_id, status, from, to)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**reservation_id** | Option<**String**> |  |  |
**caddie_profile_id** | Option<**String**> |  |  |
**status** | Option<**String**> |  |  |
**from** | Option<**String**> |  |  |
**to** | Option<**String**> |  |  |

### Return type

[**models::GolfCaddieAssignmentListResponse**](GolfCaddieAssignmentListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_golf_caddie_attendance_period_snapshots

> models::GolfCaddieAttendancePeriodSnapshotResponse list_golf_caddie_attendance_period_snapshots(from, to)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**from** | **String** |  | [required] |
**to** | **String** |  | [required] |

### Return type

[**models::GolfCaddieAttendancePeriodSnapshotResponse**](GolfCaddieAttendancePeriodSnapshotResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_golf_caddie_attendance_snapshot

> models::GolfCaddieAttendanceSnapshotResponse list_golf_caddie_attendance_snapshot(date, timezone)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**date** | Option<**String**> |  |  |
**timezone** | Option<**String**> | IANA timezone defining the day and the default date. |  |

### Return type

[**models::GolfCaddieAttendanceSnapshotResponse**](GolfCaddieAttendanceSnapshotResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_golf_caddie_payroll_summary

> models::GolfCaddiePayrollSummaryResponse list_golf_caddie_payroll_summary(year_month, timezone)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**year_month** | **String** |  | [required] |
**timezone** | Option<**String**> | IANA timezone defining the requested payroll month. Omitted keeps the legacy UTC boundary for existing callers. |  |

### Return type

[**models::GolfCaddiePayrollSummaryResponse**](GolfCaddiePayrollSummaryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_golf_caddie_profiles

> models::GolfCaddieProfileListResponse list_golf_caddie_profiles(include_deleted)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**include_deleted** | Option<**bool**> | 削除済みのキャディも含めて返す。既定は false で、復旧・監査のときだけ opt-in する。 |  |

### Return type

[**models::GolfCaddieProfileListResponse**](GolfCaddieProfileListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_golf_caddie_ratings

> models::GolfCaddieRatingListResponse list_golf_caddie_ratings(caddie_profile_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**caddie_profile_id** | Option<**String**> |  |  |

### Return type

[**models::GolfCaddieRatingListResponse**](GolfCaddieRatingListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_golf_course_resources

> models::GolfCourseResourceListResponse list_golf_course_resources()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GolfCourseResourceListResponse**](GolfCourseResourceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_golf_courses

> models::GolfCourseListResponse list_golf_courses()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GolfCourseListResponse**](GolfCourseListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_golf_custom_fields

> models::GolfCustomFieldListResponse list_golf_custom_fields(reservation_type_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**reservation_type_id** | Option<**String**> |  |  |

### Return type

[**models::GolfCustomFieldListResponse**](GolfCustomFieldListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_golf_product_slots

> models::GolfProductSlotListResponse list_golf_product_slots(service_id)
Deprecated by PLT-3199: availability is the resource's generated inventory, so these product-scoped slots no longer decide what a storefront can book. Migrate with `POST /v1/erp/reservation-resources/{id}/schedule/import-product-slots`. CERP-25 forbids removing a `/v1/` endpoint, so removal waits for `/v2/`.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**service_id** | **String** | Reservation service ID | [required] |

### Return type

[**models::GolfProductSlotListResponse**](GolfProductSlotListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_golf_reservation_products

> models::GolfReservationProductListResponse list_golf_reservation_products()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GolfReservationProductListResponse**](GolfReservationProductListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## recommend_golf_caddies

> models::GolfCaddieRecommendationResponse recommend_golf_caddies(reservation_id, scheduled_at, player_count, include_rookie_pairing, limit)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**reservation_id** | Option<**String**> |  |  |
**scheduled_at** | Option<**String**> |  |  |
**player_count** | Option<**i32**> |  |  |
**include_rookie_pairing** | Option<**bool**> |  |  |
**limit** | Option<**i32**> |  |  |

### Return type

[**models::GolfCaddieRecommendationResponse**](GolfCaddieRecommendationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## replace_caddie_course_memberships

> models::CaddieCourseMembershipListResponse replace_caddie_course_memberships(id, replace_caddie_course_memberships_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Caddie profile ID | [required] |
**replace_caddie_course_memberships_request** | [**ReplaceCaddieCourseMembershipsRequest**](ReplaceCaddieCourseMembershipsRequest.md) |  | [required] |

### Return type

[**models::CaddieCourseMembershipListResponse**](CaddieCourseMembershipListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## replace_golf_product_slots

> models::GolfProductSlotListResponse replace_golf_product_slots(service_id, replace_golf_product_slots_request)
Deprecated by PLT-3199; see `list_golf_product_slots`. Writing here no longer changes what a storefront offers.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**service_id** | **String** | Reservation service ID | [required] |
**replace_golf_product_slots_request** | [**ReplaceGolfProductSlotsRequest**](ReplaceGolfProductSlotsRequest.md) |  | [required] |

### Return type

[**models::GolfProductSlotListResponse**](GolfProductSlotListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_golf_caddie_assignment

> models::GolfCaddieAssignment update_golf_caddie_assignment(id, save_golf_caddie_assignment_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Golf caddie assignment ID | [required] |
**save_golf_caddie_assignment_request** | [**SaveGolfCaddieAssignmentRequest**](SaveGolfCaddieAssignmentRequest.md) |  | [required] |

### Return type

[**models::GolfCaddieAssignment**](GolfCaddieAssignment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_golf_caddie_profile

> models::GolfCaddieProfile update_golf_caddie_profile(id, save_golf_caddie_profile_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Golf caddie profile ID | [required] |
**save_golf_caddie_profile_request** | [**SaveGolfCaddieProfileRequest**](SaveGolfCaddieProfileRequest.md) |  | [required] |

### Return type

[**models::GolfCaddieProfile**](GolfCaddieProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_golf_course

> models::GolfCourse update_golf_course(id, save_golf_course_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Golf course ID | [required] |
**save_golf_course_request** | [**SaveGolfCourseRequest**](SaveGolfCourseRequest.md) |  | [required] |

### Return type

[**models::GolfCourse**](GolfCourse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_golf_course_resource

> models::GolfCourseResource update_golf_course_resource(id, save_golf_course_resource_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Golf course resource ID | [required] |
**save_golf_course_resource_request** | [**SaveGolfCourseResourceRequest**](SaveGolfCourseResourceRequest.md) |  | [required] |

### Return type

[**models::GolfCourseResource**](GolfCourseResource.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_golf_custom_field

> models::GolfCustomField update_golf_custom_field(save_golf_custom_field_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_golf_custom_field_request** | [**SaveGolfCustomFieldRequest**](SaveGolfCustomFieldRequest.md) |  | [required] |

### Return type

[**models::GolfCustomField**](GolfCustomField.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_golf_reservation_policy

> models::GolfReservationPolicy update_golf_reservation_policy(update_golf_reservation_policy_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**update_golf_reservation_policy_request** | [**UpdateGolfReservationPolicyRequest**](UpdateGolfReservationPolicyRequest.md) |  | [required] |

### Return type

[**models::GolfReservationPolicy**](GolfReservationPolicy.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## upsert_caddie_availability

> models::CaddieAvailability upsert_caddie_availability(save_caddie_availability_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_caddie_availability_request** | [**SaveCaddieAvailabilityRequest**](SaveCaddieAvailabilityRequest.md) |  | [required] |

### Return type

[**models::CaddieAvailability**](CaddieAvailability.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## upsert_daily_budget

> models::DailyBudget upsert_daily_budget(save_daily_budget_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_daily_budget_request** | [**SaveDailyBudgetRequest**](SaveDailyBudgetRequest.md) |  | [required] |

### Return type

[**models::DailyBudget**](DailyBudget.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## upsert_golf_reservation_product

> models::GolfReservationProduct upsert_golf_reservation_product(service_id, save_golf_reservation_product_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**service_id** | **String** | Reservation service ID | [required] |
**save_golf_reservation_product_request** | [**SaveGolfReservationProductRequest**](SaveGolfReservationProductRequest.md) |  | [required] |

### Return type

[**models::GolfReservationProduct**](GolfReservationProduct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

