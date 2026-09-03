# \ReservationsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledge_handoff_note**](ReservationsApi.md#acknowledge_handoff_note) | **POST** /v1/erp/handoff-notes/{id}/acknowledge | 
[**assign_reservation_staff**](ReservationsApi.md#assign_reservation_staff) | **POST** /v1/erp/reservations/{id}/staff-assignment | 
[**cancel_reservation_with_policy**](ReservationsApi.md#cancel_reservation_with_policy) | **POST** /v1/erp/reservations/{id}/cancel | 
[**close_customer_client_affiliation**](ReservationsApi.md#close_customer_client_affiliation) | **POST** /v1/erp/customer-client-affiliations/{id}/close | 
[**close_reservation_waitlist_entry**](ReservationsApi.md#close_reservation_waitlist_entry) | **POST** /v1/erp/reservation-waitlist/{id}/close | 
[**convert_reservation_waitlist_entry**](ReservationsApi.md#convert_reservation_waitlist_entry) | **POST** /v1/erp/reservation-waitlist/{id}/convert | 
[**create_customer_client_affiliation**](ReservationsApi.md#create_customer_client_affiliation) | **POST** /v1/erp/customer-client-affiliations | 
[**create_handoff_note**](ReservationsApi.md#create_handoff_note) | **POST** /v1/erp/handoff-notes | 
[**create_reservation**](ReservationsApi.md#create_reservation) | **POST** /v1/erp/reservations | 
[**create_reservation_product**](ReservationsApi.md#create_reservation_product) | **POST** /v1/erp/reservation-products | 
[**create_reservation_resource**](ReservationsApi.md#create_reservation_resource) | **POST** /v1/erp/reservation-resources | 
[**create_reservation_type**](ReservationsApi.md#create_reservation_type) | **POST** /v1/erp/reservation-types | 
[**create_reservation_waitlist_entry**](ReservationsApi.md#create_reservation_waitlist_entry) | **POST** /v1/erp/reservation-waitlist | 
[**create_staff_assignment**](ReservationsApi.md#create_staff_assignment) | **POST** /v1/erp/staff-assignments | 
[**create_staff_profile**](ReservationsApi.md#create_staff_profile) | **POST** /v1/erp/staff-profiles | 
[**delete_reservation_product**](ReservationsApi.md#delete_reservation_product) | **DELETE** /v1/erp/reservation-products/{id} | 
[**delete_reservation_resource**](ReservationsApi.md#delete_reservation_resource) | **DELETE** /v1/erp/reservation-resources/{id} | 
[**delete_reservation_schedule_date_override**](ReservationsApi.md#delete_reservation_schedule_date_override) | **DELETE** /v1/erp/reservation-resources/{id}/schedule/overrides/{localDate} | 
[**delete_reservation_schedule_location**](ReservationsApi.md#delete_reservation_schedule_location) | **DELETE** /v1/erp/reservation-schedule-location | 
[**delete_reservation_type**](ReservationsApi.md#delete_reservation_type) | **DELETE** /v1/erp/reservation-types/{id} | 
[**disable_extension**](ReservationsApi.md#disable_extension) | **POST** /v1/erp/extensions/{extension_key}/disable | 
[**enable_extension**](ReservationsApi.md#enable_extension) | **POST** /v1/erp/extensions/{extension_key}/enable | 
[**export_cancellation_fee_report_csv**](ReservationsApi.md#export_cancellation_fee_report_csv) | **GET** /v1/erp/reservation-reports/cancellation-fees.csv | 
[**export_reservations_csv**](ReservationsApi.md#export_reservations_csv) | **GET** /v1/erp/reservations/export.csv | 
[**generate_reservation_resource_time_slots**](ReservationsApi.md#generate_reservation_resource_time_slots) | **POST** /v1/erp/reservation-resources/{id}/time-slots/generate | 
[**get_extension_config**](ReservationsApi.md#get_extension_config) | **GET** /v1/erp/extensions/{extension_key}/config | 
[**get_reservation**](ReservationsApi.md#get_reservation) | **GET** /v1/erp/reservations/{id} | 
[**get_reservation_product**](ReservationsApi.md#get_reservation_product) | **GET** /v1/erp/reservation-products/{id} | 
[**get_reservation_resource**](ReservationsApi.md#get_reservation_resource) | **GET** /v1/erp/reservation-resources/{id} | 
[**get_reservation_resource_schedule**](ReservationsApi.md#get_reservation_resource_schedule) | **GET** /v1/erp/reservation-resources/{id}/schedule | 
[**get_reservation_schedule_location**](ReservationsApi.md#get_reservation_schedule_location) | **GET** /v1/erp/reservation-schedule-location | 
[**get_reservation_waitlist_entry**](ReservationsApi.md#get_reservation_waitlist_entry) | **GET** /v1/erp/reservation-waitlist/{id} | 
[**import_product_slots_into_resource_schedule**](ReservationsApi.md#import_product_slots_into_resource_schedule) | **POST** /v1/erp/reservation-resources/{id}/schedule/import-product-slots | 
[**issue_reservation_billing_link**](ReservationsApi.md#issue_reservation_billing_link) | **POST** /v1/erp/reservations/{id}/billing-link | 
[**issue_reservation_square_invoice**](ReservationsApi.md#issue_reservation_square_invoice) | **POST** /v1/erp/reservations/{id}/billing-invoice | 
[**list_cancellation_fee_report**](ReservationsApi.md#list_cancellation_fee_report) | **GET** /v1/erp/reservation-reports/cancellation-fees | 
[**list_customer_client_affiliations**](ReservationsApi.md#list_customer_client_affiliations) | **GET** /v1/erp/customer-client-affiliations | 
[**list_extension_lifecycle_audit_events**](ReservationsApi.md#list_extension_lifecycle_audit_events) | **GET** /v1/erp/extensions/audit | 
[**list_extensions**](ReservationsApi.md#list_extensions) | **GET** /v1/erp/extensions | 
[**list_handoff_notes**](ReservationsApi.md#list_handoff_notes) | **GET** /v1/erp/handoff-notes | 
[**list_reservation_cancellations**](ReservationsApi.md#list_reservation_cancellations) | **GET** /v1/erp/reservations/{id}/cancellations | 
[**list_reservation_notification_templates**](ReservationsApi.md#list_reservation_notification_templates) | **GET** /v1/erp/reservation-notification-templates | 
[**list_reservation_products**](ReservationsApi.md#list_reservation_products) | **GET** /v1/erp/reservation-products | 
[**list_reservation_resource_time_slots**](ReservationsApi.md#list_reservation_resource_time_slots) | **GET** /v1/erp/reservation-resources/{id}/time-slots | 
[**list_reservation_resources**](ReservationsApi.md#list_reservation_resources) | **GET** /v1/erp/reservation-resources | 
[**list_reservation_schedule_date_overrides**](ReservationsApi.md#list_reservation_schedule_date_overrides) | **GET** /v1/erp/reservation-resources/{id}/schedule/overrides | 
[**list_reservation_types**](ReservationsApi.md#list_reservation_types) | **GET** /v1/erp/reservation-types | 
[**list_reservation_types_for_management**](ReservationsApi.md#list_reservation_types_for_management) | **GET** /v1/erp/reservation-types/manage | 
[**list_reservation_waitlist**](ReservationsApi.md#list_reservation_waitlist) | **GET** /v1/erp/reservation-waitlist | 
[**list_reservations**](ReservationsApi.md#list_reservations) | **GET** /v1/erp/reservations | 
[**list_resources**](ReservationsApi.md#list_resources) | **GET** /v1/erp/resources | 
[**list_staff_assignments**](ReservationsApi.md#list_staff_assignments) | **GET** /v1/erp/staff-assignments | 
[**list_staff_availability**](ReservationsApi.md#list_staff_availability) | **GET** /v1/erp/staff-availability | 
[**list_staff_profiles**](ReservationsApi.md#list_staff_profiles) | **GET** /v1/erp/staff-profiles | 
[**list_tenant_extension_statuses**](ReservationsApi.md#list_tenant_extension_statuses) | **GET** /v1/erp/extensions/status | 
[**list_tenant_extension_statuses_app_store**](ReservationsApi.md#list_tenant_extension_statuses_app_store) | **GET** /v1/erp/app-store/apps | Thin wrapper so the app-store mount (`/v1/erp/app-store/apps`) gets its own OpenAPI path entry; delegates entirely to `list_tenant_extension_statuses`.
[**list_tenant_extensions**](ReservationsApi.md#list_tenant_extensions) | **GET** /v1/erp/extensions/enabled | 
[**list_tenant_reservation_cancellations**](ReservationsApi.md#list_tenant_reservation_cancellations) | **GET** /v1/erp/reservation-cancellations | 
[**lookup_reservation_statuses**](ReservationsApi.md#lookup_reservation_statuses) | **POST** /v1/erp/reservations/status-lookup | Resolves the current state of reservations the caller already references.
[**purge_manual_reservation_resource_time_slots**](ReservationsApi.md#purge_manual_reservation_resource_time_slots) | **DELETE** /v1/erp/reservation-resources/{id}/time-slots/manual | 
[**purge_reservation_resource_time_slots**](ReservationsApi.md#purge_reservation_resource_time_slots) | **DELETE** /v1/erp/reservation-resources/{id}/time-slots | 
[**put_reservation_schedule_date_override**](ReservationsApi.md#put_reservation_schedule_date_override) | **PUT** /v1/erp/reservation-resources/{id}/schedule/overrides/{localDate} | 
[**put_reservation_schedule_location**](ReservationsApi.md#put_reservation_schedule_location) | **PUT** /v1/erp/reservation-schedule-location | 
[**register_extension**](ReservationsApi.md#register_extension) | **POST** /v1/erp/extensions | 
[**release_expired_payment_holds**](ReservationsApi.md#release_expired_payment_holds) | **POST** /v1/erp/reservations/payment-holds/release-expired | 
[**release_payment_intent_hold**](ReservationsApi.md#release_payment_intent_hold) | **POST** /v1/erp/reservations/payment-holds/release | 
[**replace_reservation_product**](ReservationsApi.md#replace_reservation_product) | **PUT** /v1/erp/reservation-products/{id} | 
[**replace_reservation_product_slots**](ReservationsApi.md#replace_reservation_product_slots) | **PUT** /v1/erp/reservation-products/{id}/slots | 
[**replace_reservation_resource_schedule**](ReservationsApi.md#replace_reservation_resource_schedule) | **PUT** /v1/erp/reservation-resources/{id}/schedule | 
[**retract_handoff_note**](ReservationsApi.md#retract_handoff_note) | **POST** /v1/erp/handoff-notes/{id}/retract | 
[**save_reservation_notification_templates**](ReservationsApi.md#save_reservation_notification_templates) | **PUT** /v1/erp/reservation-notification-templates | 
[**seed_reservation_products_from_extension_config**](ReservationsApi.md#seed_reservation_products_from_extension_config) | **POST** /v1/erp/reservation-products/seed-from-extension-config | 
[**send_reservation_notification**](ReservationsApi.md#send_reservation_notification) | **POST** /v1/erp/reservations/{id}/notifications | 
[**unassign_reservation_staff**](ReservationsApi.md#unassign_reservation_staff) | **POST** /v1/erp/reservations/{id}/staff-assignment/unassign | 
[**update_customer_client_affiliation**](ReservationsApi.md#update_customer_client_affiliation) | **PATCH** /v1/erp/customer-client-affiliations/{id} | 
[**update_extension_config**](ReservationsApi.md#update_extension_config) | **PATCH** /v1/erp/extensions/{extension_key}/config | 
[**update_reservation**](ReservationsApi.md#update_reservation) | **PATCH** /v1/erp/reservations/{id} | 
[**update_reservation_resource**](ReservationsApi.md#update_reservation_resource) | **PATCH** /v1/erp/reservation-resources/{id} | 
[**update_reservation_type**](ReservationsApi.md#update_reservation_type) | **PATCH** /v1/erp/reservation-types/{id} | 
[**update_staff_assignment**](ReservationsApi.md#update_staff_assignment) | **PATCH** /v1/erp/staff-assignments/{id} | 
[**update_staff_profile**](ReservationsApi.md#update_staff_profile) | **PATCH** /v1/erp/staff-profiles/{id} | 



## acknowledge_handoff_note

> models::HandoffNote acknowledge_handoff_note(id)


Marks the note as taken over.  The first acknowledgement wins: pressing this on an already acknowledged note keeps whoever picked it up first, because that is the fact the handover turns on.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Handoff note ID | [required] |

### Return type

[**models::HandoffNote**](HandoffNote.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


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

> models::Reservation cancel_reservation_with_policy(id, cancel_reservation_request, idempotency_key)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID to cancel | [required] |
**cancel_reservation_request** | [**CancelReservationRequest**](CancelReservationRequest.md) |  | [required] |
**idempotency_key** | Option<**String**> | Retry-safe cancellation key; the same key replays the first outcome instead of refunding twice |  |

### Return type

[**models::Reservation**](Reservation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## close_customer_client_affiliation

> models::CustomerClientAffiliation close_customer_client_affiliation(id, close_customer_client_affiliation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Customer-client affiliation ID | [required] |
**close_customer_client_affiliation_request** | [**CloseCustomerClientAffiliationRequest**](CloseCustomerClientAffiliationRequest.md) |  | [required] |

### Return type

[**models::CustomerClientAffiliation**](CustomerClientAffiliation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## close_reservation_waitlist_entry

> models::ReservationWaitlistEntry close_reservation_waitlist_entry(id, close_reservation_waitlist_entry_request)


Takes an entry out of the queue without booking it.  Closing an entry that already left the queue returns it unchanged rather than rewriting why it first left.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Waitlist entry ID | [required] |
**close_reservation_waitlist_entry_request** | [**CloseReservationWaitlistEntryRequest**](CloseReservationWaitlistEntryRequest.md) |  | [required] |

### Return type

[**models::ReservationWaitlistEntry**](ReservationWaitlistEntry.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## convert_reservation_waitlist_entry

> models::ConvertReservationWaitlistEntryResponse convert_reservation_waitlist_entry(id, convert_reservation_waitlist_entry_request)


Books the entry, seating the guest.  This is the manual promotion. It runs the ordinary reservation creation path, so it takes the slot hold there and fails with 409 if the slot filled up again in the meantime — the entry then stays in the queue. The entry is stamped `converted` only after the reservation exists.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Waitlist entry ID | [required] |
**convert_reservation_waitlist_entry_request** | [**ConvertReservationWaitlistEntryRequest**](ConvertReservationWaitlistEntryRequest.md) |  | [required] |

### Return type

[**models::ConvertReservationWaitlistEntryResponse**](ConvertReservationWaitlistEntryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_customer_client_affiliation

> models::CustomerClientAffiliation create_customer_client_affiliation(create_customer_client_affiliation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_customer_client_affiliation_request** | [**CreateCustomerClientAffiliationRequest**](CreateCustomerClientAffiliationRequest.md) |  | [required] |

### Return type

[**models::CustomerClientAffiliation**](CustomerClientAffiliation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_handoff_note

> models::HandoffNote create_handoff_note(create_handoff_note_request)


Appends one handover note.  The note is never edited afterwards. A mistaken note is retracted, not rewritten, so the board always shows what was actually written.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_handoff_note_request** | [**CreateHandoffNoteRequest**](CreateHandoffNoteRequest.md) |  | [required] |

### Return type

[**models::HandoffNote**](HandoffNote.md)

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


## create_reservation_product

> models::ReservationProductCatalogItem create_reservation_product(save_reservation_product_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_reservation_product_request** | [**SaveReservationProductRequest**](SaveReservationProductRequest.md) |  | [required] |

### Return type

[**models::ReservationProductCatalogItem**](ReservationProductCatalogItem.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_reservation_resource

> models::ReservationResourceResponse create_reservation_resource(create_reservation_resource_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_reservation_resource_request** | [**CreateReservationResourceRequest**](CreateReservationResourceRequest.md) |  | [required] |

### Return type

[**models::ReservationResourceResponse**](ReservationResourceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_reservation_type

> models::ReservationType create_reservation_type(create_reservation_type_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_reservation_type_request** | [**CreateReservationTypeRequest**](CreateReservationTypeRequest.md) |  | [required] |

### Return type

[**models::ReservationType**](ReservationType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_reservation_waitlist_entry

> models::ReservationWaitlistEntry create_reservation_waitlist_entry(create_reservation_waitlist_entry_request)


Adds one request to the queue.  Joining the queue consumes no slot inventory: the whole point is that the slot has none left. The entry needs `customerId` or at least one of `customerName`, `customerEmail`, `customerPhone` — a waitlist nobody can call back is not actionable.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_reservation_waitlist_entry_request** | [**CreateReservationWaitlistEntryRequest**](CreateReservationWaitlistEntryRequest.md) |  | [required] |

### Return type

[**models::ReservationWaitlistEntry**](ReservationWaitlistEntry.md)

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


## delete_reservation_product

> delete_reservation_product(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation product ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_reservation_resource

> delete_reservation_resource(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_reservation_schedule_date_override

> delete_reservation_schedule_date_override(id, local_date, expected_revision)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**local_date** | **String** | Override local date | [required] |
**expected_revision** | **i64** |  | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_reservation_schedule_location

> delete_reservation_schedule_location(expected_revision)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**expected_revision** | **i64** |  | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_reservation_type

> delete_reservation_type(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation type ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

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


## generate_reservation_resource_time_slots

> models::ResourceTimeSlotGenerationResponse generate_reservation_resource_time_slots(id, generate_resource_time_slots_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**generate_resource_time_slots_request** | [**GenerateResourceTimeSlotsRequest**](GenerateResourceTimeSlotsRequest.md) |  | [required] |

### Return type

[**models::ResourceTimeSlotGenerationResponse**](ResourceTimeSlotGenerationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

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


## get_reservation_product

> models::ReservationProductCatalogItem get_reservation_product(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation product ID | [required] |

### Return type

[**models::ReservationProductCatalogItem**](ReservationProductCatalogItem.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_reservation_resource

> models::ReservationResourceResponse get_reservation_resource(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |

### Return type

[**models::ReservationResourceResponse**](ReservationResourceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_reservation_resource_schedule

> models::ReservationResourceScheduleResponse get_reservation_resource_schedule(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |

### Return type

[**models::ReservationResourceScheduleResponse**](ReservationResourceScheduleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_reservation_schedule_location

> models::ReservationScheduleLocationResponse get_reservation_schedule_location()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ReservationScheduleLocationResponse**](ReservationScheduleLocationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_reservation_waitlist_entry

> models::ReservationWaitlistEntry get_reservation_waitlist_entry(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Waitlist entry ID | [required] |

### Return type

[**models::ReservationWaitlistEntry**](ReservationWaitlistEntry.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## import_product_slots_into_resource_schedule

> models::ImportProductSlotsResponse import_product_slots_into_resource_schedule(id, import_product_slots_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**import_product_slots_request** | [**ImportProductSlotsRequest**](ImportProductSlotsRequest.md) |  | [required] |

### Return type

[**models::ImportProductSlotsResponse**](ImportProductSlotsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
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


## list_customer_client_affiliations

> models::CustomerClientAffiliationListResponse list_customer_client_affiliations(customer_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** |  | [required] |

### Return type

[**models::CustomerClientAffiliationListResponse**](CustomerClientAffiliationListResponse.md)

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


## list_handoff_notes

> models::HandoffNoteListResponse list_handoff_notes(subject_type, subject_id, category, outstanding_only, include_retracted, from, to, limit)


Lists handover notes, newest first.  Pass `subjectType` and `subjectId` for one subject's board, or `outstandingOnly=true` for everything still waiting to be picked up. Retracted notes are hidden unless `includeRetracted=true`.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**subject_type** | Option<**String**> | Narrow to one subject, e.g. `reservation`. Both parts are needed for a single subject's board; either alone still filters. |  |
**subject_id** | Option<**String**> |  |  |
**category** | Option<**String**> |  |  |
**outstanding_only** | Option<**bool**> | Keep only notes nobody has taken over yet — the shift-start read. |  |
**include_retracted** | Option<**bool**> | Include notes that were withdrawn. Off by default so a retracted note stops appearing on the board, while staying readable for audit. |  |
**from** | Option<**String**> |  |  |
**to** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |

### Return type

[**models::HandoffNoteListResponse**](HandoffNoteListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_reservation_cancellations

> models::ReservationCancellationListResponse list_reservation_cancellations(id, limit)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID whose cancellation history is read | [required] |
**limit** | Option<**i32**> | Maximum number of events to return (default 50, max 200) |  |

### Return type

[**models::ReservationCancellationListResponse**](ReservationCancellationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_reservation_notification_templates

> models::ReservationNotificationTemplatesResponse list_reservation_notification_templates()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ReservationNotificationTemplatesResponse**](ReservationNotificationTemplatesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_reservation_products

> models::ReservationProductCatalogListResponse list_reservation_products(include_disabled)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**include_disabled** | Option<**bool**> |  |  |

### Return type

[**models::ReservationProductCatalogListResponse**](ReservationProductCatalogListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_reservation_resource_time_slots

> models::ResourceTimeSlotListResponse list_reservation_resource_time_slots(id, from, to, include_inactive)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**from** | **String** | Inclusive UTC lower bound on startsAt. | [required] |
**to** | **String** | Exclusive UTC upper bound on startsAt. | [required] |
**include_inactive** | Option<**bool**> |  |  |

### Return type

[**models::ResourceTimeSlotListResponse**](ResourceTimeSlotListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_reservation_resources

> models::ReservationResourceListResponse list_reservation_resources(include_inactive)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**include_inactive** | Option<**bool**> | Include inactive resources in the management list. |  |

### Return type

[**models::ReservationResourceListResponse**](ReservationResourceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_reservation_schedule_date_overrides

> models::ReservationScheduleDateOverrideListResponse list_reservation_schedule_date_overrides(id, from, to)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**from** | **String** |  | [required] |
**to** | **String** |  | [required] |

### Return type

[**models::ReservationScheduleDateOverrideListResponse**](ReservationScheduleDateOverrideListResponse.md)

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


## list_reservation_types_for_management

> models::ReservationTypeListResponse list_reservation_types_for_management(include_inactive)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**include_inactive** | Option<**bool**> | Include deactivated types. The storefront never sees these. |  |

### Return type

[**models::ReservationTypeListResponse**](ReservationTypeListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_reservation_waitlist

> models::ReservationWaitlistListResponse list_reservation_waitlist(status, reservation_type_id, resource_id, customer_id, from, to, seatable_only, limit)


Lists キャンセル待ち entries, oldest first.  Each item carries `queuePosition` — its place among the entries still waiting for the same slot — and `availableSlotGroups`, the free inventory groups that slot has right now. One booking consumes one group whatever the party size, so a single free group seats an entry of any `quantity`. `availableSlotGroups` is absent when no slot has been opened for the requested time, which is a different situation from a full one. `seatableOnly=true` narrows the list to entries the slot can already take.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> | Defaults to `waiting`. Pass a terminal status to read the history of entries that already left the queue. |  |
**reservation_type_id** | Option<**String**> |  |  |
**resource_id** | Option<**String**> |  |  |
**customer_id** | Option<**String**> |  |  |
**from** | Option<**String**> | Bounds `desiredStartsAt` as the half-open interval `[from, to)`. |  |
**to** | Option<**String**> |  |  |
**seatable_only** | Option<**bool**> | Keep only entries whose slot has room for them right now — the \"空きが 出た\" list an operator works from. |  |
**limit** | Option<**i32**> |  |  |

### Return type

[**models::ReservationWaitlistListResponse**](ReservationWaitlistListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_reservations

> models::ReservationListResponse list_reservations(status, payment_status, reservation_type_id, resource_id, staff_id, customer_id, search, from, to, updated_since, limit, offset)


Lists a tenant's reservations, newest start time first.  `from`/`to` bound the reservation's own start time (`startsAt`) as the half-open interval `[from, to)`, so consecutive windows cover a period exactly once. `updatedSince` bounds `updatedAt` inclusively, for incremental reads.  `limit` defaults to 100 and is capped at 500; a larger request is capped rather than rejected, and the response echoes the applied `limit`, `offset`, and the filter's `total`.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> |  |  |
**payment_status** | Option<**String**> |  |  |
**reservation_type_id** | Option<**String**> |  |  |
**resource_id** | Option<**String**> |  |  |
**staff_id** | Option<**String**> |  |  |
**customer_id** | Option<**String**> |  |  |
**search** | Option<**String**> | Search reservation number or the reservation-held customer snapshot. |  |
**from** | Option<**String**> | Inclusive lower bound on the reservation's own start time (`startsAt`), RFC 3339. Not the creation or update time. |  |
**to** | Option<**String**> | Exclusive upper bound on the reservation's own start time (`startsAt`), RFC 3339. Exclusive so consecutive windows (`[from, to)`) cover a period exactly once. |  |
**updated_since** | Option<**String**> | Return only reservations whose `updatedAt` is at or after this RFC 3339 instant. The bound is inclusive, so replaying the previous page's high-water mark can repeat a row but never skips one. |  |
**limit** | Option<**i32**> | Page size. Defaults to 100, maximum 500. A larger value is capped at 500 rather than rejected, and the applied value comes back as `limit` in the response. Declared in the description rather than as a schema `maximum` because the server caps instead of failing validation. |  |
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


## list_tenant_reservation_cancellations

> models::ReservationCancellationListResponse list_tenant_reservation_cancellations(reservation_id, from, to, limit)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**reservation_id** | Option<**String**> | Narrow the tenant-wide trail to one reservation. |  |
**from** | Option<**String**> |  |  |
**to** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |

### Return type

[**models::ReservationCancellationListResponse**](ReservationCancellationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## lookup_reservation_statuses

> models::ReservationStatusLookupResponse lookup_reservation_statuses(reservation_status_lookup_request)
Resolves the current state of reservations the caller already references.

An extension that stores its own records against reservation ids (staff assignments, for example) has no way to learn that a reservation was cancelled elsewhere in Field. Re-listing reservations does not answer it either: `GET /v1/erp/reservations` is capped at 500 rows ordered by `startsAt DESC`, so anything older simply never comes back. This takes the ids the caller holds and answers only \"are these still live\", which stays correct however old the reservations are.  It is a POST because the id set is a request body rather than a URL-sized parameter; it reads nothing else and is authorized as a read (`field:ListReservations`).

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**reservation_status_lookup_request** | [**ReservationStatusLookupRequest**](ReservationStatusLookupRequest.md) |  | [required] |

### Return type

[**models::ReservationStatusLookupResponse**](ReservationStatusLookupResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## purge_manual_reservation_resource_time_slots

> models::PurgeResourceTimeSlotsResponse purge_manual_reservation_resource_time_slots(id, from, to, dry_run)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**from** | **String** | Inclusive UTC lower bound on startsAt. | [required] |
**to** | **String** | Exclusive UTC upper bound on startsAt. | [required] |
**dry_run** | Option<**bool**> | Report the same selection and conflicts without deleting. |  |

### Return type

[**models::PurgeResourceTimeSlotsResponse**](PurgeResourceTimeSlotsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## purge_reservation_resource_time_slots

> models::PurgeResourceTimeSlotsResponse purge_reservation_resource_time_slots(id, from, to, dry_run)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**from** | **String** | Inclusive UTC lower bound on startsAt. | [required] |
**to** | **String** | Exclusive UTC upper bound on startsAt. | [required] |
**dry_run** | Option<**bool**> | Report the same selection and conflicts without deleting. |  |

### Return type

[**models::PurgeResourceTimeSlotsResponse**](PurgeResourceTimeSlotsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## put_reservation_schedule_date_override

> models::ReservationScheduleDateOverride put_reservation_schedule_date_override(id, local_date, put_reservation_schedule_date_override_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**local_date** | **String** | Override local date | [required] |
**put_reservation_schedule_date_override_request** | [**PutReservationScheduleDateOverrideRequest**](PutReservationScheduleDateOverrideRequest.md) |  | [required] |

### Return type

[**models::ReservationScheduleDateOverride**](ReservationScheduleDateOverride.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## put_reservation_schedule_location

> models::ReservationScheduleLocationResponse put_reservation_schedule_location(put_reservation_schedule_location_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**put_reservation_schedule_location_request** | [**PutReservationScheduleLocationRequest**](PutReservationScheduleLocationRequest.md) |  | [required] |

### Return type

[**models::ReservationScheduleLocationResponse**](ReservationScheduleLocationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
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


## replace_reservation_product

> models::ReservationProductCatalogItem replace_reservation_product(id, save_reservation_product_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation product ID | [required] |
**save_reservation_product_request** | [**SaveReservationProductRequest**](SaveReservationProductRequest.md) |  | [required] |

### Return type

[**models::ReservationProductCatalogItem**](ReservationProductCatalogItem.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## replace_reservation_product_slots

> models::ReservationProductSlotListResponse replace_reservation_product_slots(id, replace_reservation_product_slots_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation product ID | [required] |
**replace_reservation_product_slots_request** | [**ReplaceReservationProductSlotsRequest**](ReplaceReservationProductSlotsRequest.md) |  | [required] |

### Return type

[**models::ReservationProductSlotListResponse**](ReservationProductSlotListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## replace_reservation_resource_schedule

> models::ReservationResourceScheduleResponse replace_reservation_resource_schedule(id, replace_reservation_resource_schedule_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**replace_reservation_resource_schedule_request** | [**ReplaceReservationResourceScheduleRequest**](ReplaceReservationResourceScheduleRequest.md) |  | [required] |

### Return type

[**models::ReservationResourceScheduleResponse**](ReservationResourceScheduleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## retract_handoff_note

> models::HandoffNote retract_handoff_note(id, retract_handoff_note_request)


Withdraws a note written in error.  The row is not deleted and the body is not rewritten: the note stays readable and marked as retracted, which is what keeps the log a log.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Handoff note ID | [required] |
**retract_handoff_note_request** | [**RetractHandoffNoteRequest**](RetractHandoffNoteRequest.md) |  | [required] |

### Return type

[**models::HandoffNote**](HandoffNote.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## save_reservation_notification_templates

> models::ReservationNotificationTemplatesResponse save_reservation_notification_templates(save_reservation_notification_templates_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_reservation_notification_templates_request** | [**SaveReservationNotificationTemplatesRequest**](SaveReservationNotificationTemplatesRequest.md) |  | [required] |

### Return type

[**models::ReservationNotificationTemplatesResponse**](ReservationNotificationTemplatesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## seed_reservation_products_from_extension_config

> models::SeedReservationProductsResponse seed_reservation_products_from_extension_config(seed_reservation_products_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**seed_reservation_products_request** | [**SeedReservationProductsRequest**](SeedReservationProductsRequest.md) |  | [required] |

### Return type

[**models::SeedReservationProductsResponse**](SeedReservationProductsResponse.md)

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


## update_customer_client_affiliation

> models::CustomerClientAffiliation update_customer_client_affiliation(id, update_customer_client_affiliation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Customer-client affiliation ID | [required] |
**update_customer_client_affiliation_request** | [**UpdateCustomerClientAffiliationRequest**](UpdateCustomerClientAffiliationRequest.md) |  | [required] |

### Return type

[**models::CustomerClientAffiliation**](CustomerClientAffiliation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
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


## update_reservation_resource

> models::ReservationResourceResponse update_reservation_resource(id, update_reservation_resource_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**update_reservation_resource_request** | [**UpdateReservationResourceRequest**](UpdateReservationResourceRequest.md) |  | [required] |

### Return type

[**models::ReservationResourceResponse**](ReservationResourceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_reservation_type

> models::ReservationType update_reservation_type(id, update_reservation_type_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation type ID | [required] |
**update_reservation_type_request** | [**UpdateReservationTypeRequest**](UpdateReservationTypeRequest.md) |  | [required] |

### Return type

[**models::ReservationType**](ReservationType.md)

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

