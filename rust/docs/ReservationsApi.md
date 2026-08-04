# \ReservationsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assign_reservation_staff**](ReservationsApi.md#assign_reservation_staff) | **POST** /v1/erp/reservations/{id}/staff-assignment | 
[**cancel_reservation_with_policy**](ReservationsApi.md#cancel_reservation_with_policy) | **POST** /v1/erp/reservations/{id}/cancel | 
[**create_reservation**](ReservationsApi.md#create_reservation) | **POST** /v1/erp/reservations | 
[**create_staff_assignment**](ReservationsApi.md#create_staff_assignment) | **POST** /v1/erp/staff-assignments | 
[**create_staff_profile**](ReservationsApi.md#create_staff_profile) | **POST** /v1/erp/staff-profiles | 
[**disable_extension**](ReservationsApi.md#disable_extension) | **POST** /v1/erp/extensions/{extension_key}/disable | 
[**enable_extension**](ReservationsApi.md#enable_extension) | **POST** /v1/erp/extensions/{extension_key}/enable | 
[**export_cancellation_fee_report_csv**](ReservationsApi.md#export_cancellation_fee_report_csv) | **GET** /v1/erp/reservation-reports/cancellation-fees.csv | 
[**export_reservations_csv**](ReservationsApi.md#export_reservations_csv) | **GET** /v1/erp/reservations/export.csv | 
[**get_extension_config**](ReservationsApi.md#get_extension_config) | **GET** /v1/erp/extensions/{extension_key}/config | 
[**get_reservation**](ReservationsApi.md#get_reservation) | **GET** /v1/erp/reservations/{id} | 
[**issue_reservation_billing_link**](ReservationsApi.md#issue_reservation_billing_link) | **POST** /v1/erp/reservations/{id}/billing-link | 
[**issue_reservation_square_invoice**](ReservationsApi.md#issue_reservation_square_invoice) | **POST** /v1/erp/reservations/{id}/billing-invoice | 
[**list_cancellation_fee_report**](ReservationsApi.md#list_cancellation_fee_report) | **GET** /v1/erp/reservation-reports/cancellation-fees | 
[**list_extension_lifecycle_audit_events**](ReservationsApi.md#list_extension_lifecycle_audit_events) | **GET** /v1/erp/extensions/audit | 
[**list_extensions**](ReservationsApi.md#list_extensions) | **GET** /v1/erp/extensions | 
[**list_reservation_types**](ReservationsApi.md#list_reservation_types) | **GET** /v1/erp/reservation-types | 
[**list_reservations**](ReservationsApi.md#list_reservations) | **GET** /v1/erp/reservations | 
[**list_resources**](ReservationsApi.md#list_resources) | **GET** /v1/erp/resources | 
[**list_staff_assignments**](ReservationsApi.md#list_staff_assignments) | **GET** /v1/erp/staff-assignments | 
[**list_staff_availability**](ReservationsApi.md#list_staff_availability) | **GET** /v1/erp/staff-availability | 
[**list_staff_profiles**](ReservationsApi.md#list_staff_profiles) | **GET** /v1/erp/staff-profiles | 
[**list_tenant_extension_statuses**](ReservationsApi.md#list_tenant_extension_statuses) | **GET** /v1/erp/extensions/status | 
[**list_tenant_extension_statuses_app_store**](ReservationsApi.md#list_tenant_extension_statuses_app_store) | **GET** /v1/erp/app-store/apps | Thin wrapper so the app-store mount (`/v1/erp/app-store/apps`) gets its own OpenAPI path entry; delegates entirely to `list_tenant_extension_statuses`.
[**list_tenant_extensions**](ReservationsApi.md#list_tenant_extensions) | **GET** /v1/erp/extensions/enabled | 
[**register_extension**](ReservationsApi.md#register_extension) | **POST** /v1/erp/extensions | 
[**release_expired_payment_holds**](ReservationsApi.md#release_expired_payment_holds) | **POST** /v1/erp/reservations/payment-holds/release-expired | 
[**release_payment_intent_hold**](ReservationsApi.md#release_payment_intent_hold) | **POST** /v1/erp/reservations/payment-holds/release | 
[**send_reservation_notification**](ReservationsApi.md#send_reservation_notification) | **POST** /v1/erp/reservations/{id}/notifications | 
[**unassign_reservation_staff**](ReservationsApi.md#unassign_reservation_staff) | **POST** /v1/erp/reservations/{id}/staff-assignment/unassign | 
[**update_extension_config**](ReservationsApi.md#update_extension_config) | **PATCH** /v1/erp/extensions/{extension_key}/config | 
[**update_reservation**](ReservationsApi.md#update_reservation) | **PATCH** /v1/erp/reservations/{id} | 
[**update_staff_assignment**](ReservationsApi.md#update_staff_assignment) | **PATCH** /v1/erp/staff-assignments/{id} | 
[**update_staff_profile**](ReservationsApi.md#update_staff_profile) | **PATCH** /v1/erp/staff-profiles/{id} | 



## assign_reservation_staff

> models::StaffAssignmentView assign_reservation_staff(id, save_reservation_staff_assignment_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID to assign staff to | [required] |
**save_reservation_staff_assignment_request** | [**SaveReservationStaffAssignmentRequest**](SaveReservationStaffAssignmentRequest.md) |  | [required] |

### Return type

[**models::StaffAssignmentView**](StaffAssignmentView.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## cancel_reservation_with_policy

> models::Reservation cancel_reservation_with_policy(id, cancel_reservation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID to cancel | [required] |
**cancel_reservation_request** | [**CancelReservationRequest**](CancelReservationRequest.md) |  | [required] |

### Return type

[**models::Reservation**](Reservation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_reservation

> models::CreateReservationResponse create_reservation(create_reservation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_reservation_request** | [**CreateReservationRequest**](CreateReservationRequest.md) |  | [required] |

### Return type

[**models::CreateReservationResponse**](CreateReservationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_staff_assignment

> models::StaffAssignmentView create_staff_assignment(save_staff_assignment_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_staff_assignment_request** | [**SaveStaffAssignmentRequest**](SaveStaffAssignmentRequest.md) |  | [required] |

### Return type

[**models::StaffAssignmentView**](StaffAssignmentView.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_staff_profile

> models::StaffProfileView create_staff_profile(save_staff_profile_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_staff_profile_request** | [**SaveStaffProfileRequest**](SaveStaffProfileRequest.md) |  | [required] |

### Return type

[**models::StaffProfileView**](StaffProfileView.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## disable_extension

> models::TenantExtension disable_extension(extension_key)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**extension_key** | **String** | Extension key to disable for the tenant | [required] |

### Return type

[**models::TenantExtension**](TenantExtension.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## enable_extension

> models::TenantExtension enable_extension(extension_key, enable_extension_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**extension_key** | **String** | Extension key to enable for the tenant | [required] |
**enable_extension_request** | [**EnableExtensionRequest**](EnableExtensionRequest.md) |  | [required] |

### Return type

[**models::TenantExtension**](TenantExtension.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## export_cancellation_fee_report_csv

> String export_cancellation_fee_report_csv(from, to)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**from** | Option<**String**> |  |  |
**to** | Option<**String**> |  |  |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## export_reservations_csv

> String export_reservations_csv(from, to)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**from** | Option<**String**> |  |  |
**to** | Option<**String**> |  |  |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_extension_config

> models::ExtensionConfig get_extension_config(extension_key, scope_type, scope_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**extension_key** | **String** | Extension key to fetch config for | [required] |
**scope_type** | Option<**String**> | Config scope type (e.g. tenant/store) |  |
**scope_id** | Option<**String**> | Scope identifier for non-tenant scopes |  |

### Return type

[**models::ExtensionConfig**](ExtensionConfig.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_reservation

> models::Reservation get_reservation(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID | [required] |

### Return type

[**models::Reservation**](Reservation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## issue_reservation_billing_link

> models::IssueReservationBillingLinkResponse issue_reservation_billing_link(id, issue_reservation_billing_link_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID to issue a billing link for | [required] |
**issue_reservation_billing_link_request** | [**IssueReservationBillingLinkRequest**](IssueReservationBillingLinkRequest.md) |  | [required] |

### Return type

[**models::IssueReservationBillingLinkResponse**](IssueReservationBillingLinkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## issue_reservation_square_invoice

> models::IssueReservationSquareInvoiceResponse issue_reservation_square_invoice(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID to issue a Square invoice for | [required] |

### Return type

[**models::IssueReservationSquareInvoiceResponse**](IssueReservationSquareInvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_cancellation_fee_report

> models::CancellationFeeReportResponse list_cancellation_fee_report(from, to)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**from** | Option<**String**> |  |  |
**to** | Option<**String**> |  |  |

### Return type

[**models::CancellationFeeReportResponse**](CancellationFeeReportResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_extension_lifecycle_audit_events

> models::ExtensionLifecycleAuditListResponse list_extension_lifecycle_audit_events(extension_key, limit)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**extension_key** | Option<**String**> | Filter audit events by extension key |  |
**limit** | Option<**i32**> | Maximum number of audit events to return (default 20) |  |

### Return type

[**models::ExtensionLifecycleAuditListResponse**](ExtensionLifecycleAuditListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_extensions

> models::ExtensionManifestListResponse list_extensions()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ExtensionManifestListResponse**](ExtensionManifestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_reservation_types

> models::ReservationTypeListResponse list_reservation_types()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ReservationTypeListResponse**](ReservationTypeListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_reservations

> models::ReservationListResponse list_reservations(status, payment_status, reservation_type_id, resource_id, staff_id, customer_id, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> |  |  |
**payment_status** | Option<**String**> |  |  |
**reservation_type_id** | Option<**String**> |  |  |
**resource_id** | Option<**String**> |  |  |
**staff_id** | Option<**String**> |  |  |
**customer_id** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::ReservationListResponse**](ReservationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_resources

> models::ResourceListResponse list_resources()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ResourceListResponse**](ResourceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_staff_assignments

> models::StaffAssignmentListResponse list_staff_assignments(reservation_id, staff_profile_id, status)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**reservation_id** | Option<**String**> | Filter by reservation ID |  |
**staff_profile_id** | Option<**String**> | Filter by staff profile ID |  |
**status** | Option<**String**> | Filter by assignment status |  |

### Return type

[**models::StaffAssignmentListResponse**](StaffAssignmentListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_staff_availability

> models::StaffAvailabilityResponse list_staff_availability(date, starts_at, ends_at, start_time, end_time, include_unavailable)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**date** | Option<**String**> | Date to check availability for |  |
**starts_at** | Option<**String**> | Window start timestamp |  |
**ends_at** | Option<**String**> | Window end timestamp |  |
**start_time** | Option<**String**> | Window start time of day |  |
**end_time** | Option<**String**> | Window end time of day |  |
**include_unavailable** | Option<**bool**> | Include staff marked unavailable (default false) |  |

### Return type

[**models::StaffAvailabilityResponse**](StaffAvailabilityResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_staff_profiles

> models::StaffProfileListResponse list_staff_profiles()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::StaffProfileListResponse**](StaffProfileListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_tenant_extension_statuses

> models::TenantExtensionStatusListResponse list_tenant_extension_statuses()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::TenantExtensionStatusListResponse**](TenantExtensionStatusListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_tenant_extension_statuses_app_store

> models::TenantExtensionStatusListResponse list_tenant_extension_statuses_app_store()
Thin wrapper so the app-store mount (`/v1/erp/app-store/apps`) gets its own OpenAPI path entry; delegates entirely to `list_tenant_extension_statuses`.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::TenantExtensionStatusListResponse**](TenantExtensionStatusListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_tenant_extensions

> models::TenantExtensionListResponse list_tenant_extensions()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::TenantExtensionListResponse**](TenantExtensionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## register_extension

> models::ExtensionManifest register_extension(register_extension_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**register_extension_request** | [**RegisterExtensionRequest**](RegisterExtensionRequest.md) |  | [required] |

### Return type

[**models::ExtensionManifest**](ExtensionManifest.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## release_expired_payment_holds

> models::ReleasePaymentHoldsResult release_expired_payment_holds(release_payment_holds_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**release_payment_holds_request** | [**ReleasePaymentHoldsRequest**](ReleasePaymentHoldsRequest.md) |  | [required] |

### Return type

[**models::ReleasePaymentHoldsResult**](ReleasePaymentHoldsResult.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## release_payment_intent_hold

> models::PaymentIntent release_payment_intent_hold(release_payment_intent_hold_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**release_payment_intent_hold_request** | [**ReleasePaymentIntentHoldRequest**](ReleasePaymentIntentHoldRequest.md) |  | [required] |

### Return type

[**models::PaymentIntent**](PaymentIntent.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_reservation_notification

> models::SendReservationNotificationResponse send_reservation_notification(id, send_reservation_notification_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID to send a notification for | [required] |
**send_reservation_notification_request** | [**SendReservationNotificationRequest**](SendReservationNotificationRequest.md) |  | [required] |

### Return type

[**models::SendReservationNotificationResponse**](SendReservationNotificationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## unassign_reservation_staff

> models::StaffAssignmentView unassign_reservation_staff(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID to unassign staff from | [required] |

### Return type

[**models::StaffAssignmentView**](StaffAssignmentView.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_extension_config

> models::ExtensionConfig update_extension_config(extension_key, update_extension_config_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**extension_key** | **String** | Extension key to update config for | [required] |
**update_extension_config_request** | [**UpdateExtensionConfigRequest**](UpdateExtensionConfigRequest.md) |  | [required] |

### Return type

[**models::ExtensionConfig**](ExtensionConfig.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_reservation

> models::Reservation update_reservation(id, update_reservation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID | [required] |
**update_reservation_request** | [**UpdateReservationRequest**](UpdateReservationRequest.md) |  | [required] |

### Return type

[**models::Reservation**](Reservation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_assignment

> models::StaffAssignmentView update_staff_assignment(id, save_staff_assignment_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff assignment ID to update | [required] |
**save_staff_assignment_request** | [**SaveStaffAssignmentRequest**](SaveStaffAssignmentRequest.md) |  | [required] |

### Return type

[**models::StaffAssignmentView**](StaffAssignmentView.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_staff_profile

> models::StaffProfileView update_staff_profile(id, save_staff_profile_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Staff profile ID to update | [required] |
**save_staff_profile_request** | [**SaveStaffProfileRequest**](SaveStaffProfileRequest.md) |  | [required] |

### Return type

[**models::StaffProfileView**](StaffProfileView.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

