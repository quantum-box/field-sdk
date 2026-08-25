# \PublicStorefrontApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_public_custom_field_definitions**](PublicStorefrontApi.md#list_public_custom_field_definitions) | **GET** /v1/public/storefront/{tenant_id}/custom-field-definitions | 
[**public_storefront_create_reservation**](PublicStorefrontApi.md#public_storefront_create_reservation) | **POST** /v1/public/storefront/{tenant_id}/reservations | The booking submission.
[**public_storefront_get_storefront_profile**](PublicStorefrontApi.md#public_storefront_get_storefront_profile) | **GET** /v1/public/storefront/{tenant_id}/profile | The same read under the public shape; see `reservation_storefront_api::public_tenant` for why the tenant is a path segment rather than a header.
[**public_storefront_list_membership_plans**](PublicStorefrontApi.md#public_storefront_list_membership_plans) | **GET** /v1/public/storefront/{tenant_id}/membership-plans | The same read under the public shape; see `reservation_storefront_api::public_tenant` for why the tenant is a path segment rather than a header.
[**public_storefront_list_reservation_products**](PublicStorefrontApi.md#public_storefront_list_reservation_products) | **GET** /v1/public/storefront/{tenant_id}/reservation-products | 
[**public_storefront_list_reservation_types**](PublicStorefrontApi.md#public_storefront_list_reservation_types) | **GET** /v1/public/storefront/{tenant_id}/reservation-types | 
[**public_storefront_list_resources**](PublicStorefrontApi.md#public_storefront_list_resources) | **GET** /v1/public/storefront/{tenant_id}/resources | 
[**public_storefront_resource_availability_calendar**](PublicStorefrontApi.md#public_storefront_resource_availability_calendar) | **GET** /v1/public/storefront/{tenant_id}/resources/{id}/availability-calendar | 



## list_public_custom_field_definitions

> models::PublicCustomFieldDefinitionListResponse list_public_custom_field_definitions(tenant_id, entity_type)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being read | [required] |
**entity_type** | **String** | Public form entity type (reservation/customer_subject) | [required] |

### Return type

[**models::PublicCustomFieldDefinitionListResponse**](PublicCustomFieldDefinitionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_create_reservation

> models::CreateReservationResponse public_storefront_create_reservation(tenant_id, storefront_create_reservation_request)
The booking submission.

Anonymous by nature: a visitor filling in a public booking form is not signed in, on this page or on any other course's. It was reachable without a bearer before route classification existed, so this states the existing exposure rather than opening a new one. A shared tenant write budget now bounds its side effects. Because an attacker can spend that aggregate budget and lock out legitimate visitors, PLT-3683 still tracks the non-bypassable origin/client-level protection needed to prevent griefing.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being read | [required] |
**storefront_create_reservation_request** | [**StorefrontCreateReservationRequest**](StorefrontCreateReservationRequest.md) |  | [required] |

### Return type

[**models::CreateReservationResponse**](CreateReservationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_get_storefront_profile

> models::StorefrontProfileResponse public_storefront_get_storefront_profile(tenant_id)
The same read under the public shape; see `reservation_storefront_api::public_tenant` for why the tenant is a path segment rather than a header.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being read | [required] |

### Return type

[**models::StorefrontProfileResponse**](StorefrontProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_list_membership_plans

> models::StorefrontMembershipPlanListResponse public_storefront_list_membership_plans(tenant_id)
The same read under the public shape; see `reservation_storefront_api::public_tenant` for why the tenant is a path segment rather than a header.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose member classes are being read | [required] |

### Return type

[**models::StorefrontMembershipPlanListResponse**](StorefrontMembershipPlanListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_list_reservation_products

> models::ReservationProductListResponse public_storefront_list_reservation_products(tenant_id, date, resource_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being read | [required] |
**date** | Option<**String**> | Filter/materialize slot-based products for this date |  |
**resource_id** | Option<**String**> | Resource whose generated inventory supplies the bookable slots |  |

### Return type

[**models::ReservationProductListResponse**](ReservationProductListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_list_reservation_types

> models::ReservationTypeListResponse public_storefront_list_reservation_types(tenant_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being read | [required] |

### Return type

[**models::ReservationTypeListResponse**](ReservationTypeListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_list_resources

> models::ResourceListResponse public_storefront_list_resources(tenant_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being read | [required] |

### Return type

[**models::ResourceListResponse**](ResourceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_resource_availability_calendar

> models::StorefrontAvailabilityCalendarResponse public_storefront_resource_availability_calendar(tenant_id, id, from, to, timezone, few_left_threshold)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being read | [required] |
**id** | **String** | Resource whose month is being read | [required] |
**from** | **String** | First date of the range | [required] |
**to** | **String** | Last date of the range | [required] |
**timezone** | Option<**String**> | IANA timezone the days are grouped by |  |
**few_left_threshold** | Option<**i64**> | Remaining groups at or below which a day is marked few_left |  |

### Return type

[**models::StorefrontAvailabilityCalendarResponse**](StorefrontAvailabilityCalendarResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

