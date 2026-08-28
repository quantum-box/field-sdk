# \PublicStorefrontApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_public_custom_field_definitions**](PublicStorefrontApi.md#list_public_custom_field_definitions) | **GET** /v1/public/storefront/{tenant_id}/custom-field-definitions | 
[**public_storefront_add_cart_item**](PublicStorefrontApi.md#public_storefront_add_cart_item) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/items | Add a product to a cart.
[**public_storefront_checkout**](PublicStorefrontApi.md#public_storefront_checkout) | **POST** /v1/public/storefront/{tenant_id}/checkout_sessions | Place the order.
[**public_storefront_clear_cart**](PublicStorefrontApi.md#public_storefront_clear_cart) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/clear | Empty a cart.
[**public_storefront_create_cart**](PublicStorefrontApi.md#public_storefront_create_cart) | **POST** /v1/public/storefront/{tenant_id}/carts | Open a cart.
[**public_storefront_create_reservation**](PublicStorefrontApi.md#public_storefront_create_reservation) | **POST** /v1/public/storefront/{tenant_id}/reservations | The booking submission.
[**public_storefront_get_cart**](PublicStorefrontApi.md#public_storefront_get_cart) | **GET** /v1/public/storefront/{tenant_id}/carts/{cart_id} | Read a cart the caller holds the identifier of.
[**public_storefront_get_order_by_lookup_token**](PublicStorefrontApi.md#public_storefront_get_order_by_lookup_token) | **GET** /v1/public/storefront/{tenant_id}/orders/by-token/{lookup_token} | Read an order again with the token the lookup handed back.
[**public_storefront_get_product**](PublicStorefrontApi.md#public_storefront_get_product) | **GET** /v1/public/storefront/{tenant_id}/products/{product_id} | Read one published product.
[**public_storefront_get_product_selections**](PublicStorefrontApi.md#public_storefront_get_product_selections) | **GET** /v1/public/storefront/{tenant_id}/products/{product_id}/selections | List the variants and option groups a published product offers.
[**public_storefront_get_storefront_profile**](PublicStorefrontApi.md#public_storefront_get_storefront_profile) | **GET** /v1/public/storefront/{tenant_id}/profile | The same read under the public shape; see `reservation_storefront_api::public_tenant` for why the tenant is a path segment rather than a header.
[**public_storefront_list_categories**](PublicStorefrontApi.md#public_storefront_list_categories) | **GET** /v1/public/storefront/{tenant_id}/categories | List the categories the menu is grouped by.
[**public_storefront_list_membership_plans**](PublicStorefrontApi.md#public_storefront_list_membership_plans) | **GET** /v1/public/storefront/{tenant_id}/membership-plans | The same read under the public shape; see `reservation_storefront_api::public_tenant` for why the tenant is a path segment rather than a header.
[**public_storefront_list_products**](PublicStorefrontApi.md#public_storefront_list_products) | **GET** /v1/public/storefront/{tenant_id}/products | List the products a tenant publishes.
[**public_storefront_list_reservation_products**](PublicStorefrontApi.md#public_storefront_list_reservation_products) | **GET** /v1/public/storefront/{tenant_id}/reservation-products | 
[**public_storefront_list_reservation_types**](PublicStorefrontApi.md#public_storefront_list_reservation_types) | **GET** /v1/public/storefront/{tenant_id}/reservation-types | 
[**public_storefront_list_resources**](PublicStorefrontApi.md#public_storefront_list_resources) | **GET** /v1/public/storefront/{tenant_id}/resources | 
[**public_storefront_lookup_order**](PublicStorefrontApi.md#public_storefront_lookup_order) | **POST** /v1/public/storefront/{tenant_id}/orders/lookup | Find one order from what its customer knows.
[**public_storefront_preview_coupon**](PublicStorefrontApi.md#public_storefront_preview_coupon) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/coupon-preview | Price one code against one cart.
[**public_storefront_remove_cart_item**](PublicStorefrontApi.md#public_storefront_remove_cart_item) | **DELETE** /v1/public/storefront/{tenant_id}/carts/{cart_id}/items/{item_id} | Remove a cart line.
[**public_storefront_resource_availability_calendar**](PublicStorefrontApi.md#public_storefront_resource_availability_calendar) | **GET** /v1/public/storefront/{tenant_id}/resources/{id}/availability-calendar | 
[**public_storefront_update_cart_item**](PublicStorefrontApi.md#public_storefront_update_cart_item) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/items/{item_id} | Change the quantity of a cart line.



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


## public_storefront_add_cart_item

> models::PublicCartResponse public_storefront_add_cart_item(tenant_id, cart_id, public_add_cart_item_request)
Add a product to a cart.

The price is not an input. The service reads the product's list price for the named tenant and refuses anything that is not ACTIVE and PUBLIC, so a caller can neither set its own price nor put another tenant's product — or this tenant's unpublished one — into a cart.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**cart_id** | **String** | Cart the caller holds the identifier of | [required] |
**public_add_cart_item_request** | [**PublicAddCartItemRequest**](PublicAddCartItemRequest.md) |  | [required] |

### Return type

[**models::PublicCartResponse**](PublicCartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_checkout

> models::PublicOrderResponse public_storefront_checkout(tenant_id, public_checkout_request)
Place the order.

Anonymous by nature: someone reading a menu on their phone is not signed in, here or on any other store's page. The amounts are recomputed from the cart the caller names, which was itself priced from the tenant's own catalog, so nothing about the money is caller-supplied.  No confirmation email is sent from this route even when `customer_email` is given. The address is stored on the order for the store to use; sending from an unauthenticated route would make Field a mail relay pointed at any address a caller types. The authenticated StoreKit checkout still sends it, and the anonymous booking submission likewise sends nothing.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**public_checkout_request** | [**PublicCheckoutRequest**](PublicCheckoutRequest.md) |  | [required] |

### Return type

[**models::PublicOrderResponse**](PublicOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_clear_cart

> models::OkResponse public_storefront_clear_cart(tenant_id, cart_id)
Empty a cart.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**cart_id** | **String** | Cart the caller holds the identifier of | [required] |

### Return type

[**models::OkResponse**](OkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_create_cart

> models::PublicCartResponse public_storefront_create_cart(tenant_id)
Open a cart.

The StoreKit route takes a `user_id`/`session_id` and hands back whichever active cart already matches. That lookup is why this one takes no body at all: `find_active_by_user_id` would let an anonymous caller name a signed-in shopper and be given their cart, and a caller-chosen session id is a guess away from the same thing. The session identifier is minted here instead, so the returned `crt_`+ULID cart id is the only handle to this cart and the caller is the only party that has ever seen it.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |

### Return type

[**models::PublicCartResponse**](PublicCartResponse.md)

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


## public_storefront_get_cart

> models::PublicCartResponse public_storefront_get_cart(tenant_id, cart_id)
Read a cart the caller holds the identifier of.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**cart_id** | **String** | Cart the caller holds the identifier of | [required] |

### Return type

[**models::PublicCartResponse**](PublicCartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_get_order_by_lookup_token

> models::PublicOrderResponse public_storefront_get_order_by_lookup_token(tenant_id, lookup_token)
Read an order again with the token the lookup handed back.

This is the one order read on the public surface, and the token is what makes it one: it is server-minted, unguessable and short-lived, unlike the order identifier printed on the receipt. An expired or unknown token is a 404 like any other.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**lookup_token** | **String** | Token minted by the lookup | [required] |

### Return type

[**models::PublicOrderResponse**](PublicOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_get_product

> models::PublicProductResponse public_storefront_get_product(tenant_id, product_id)
Read one published product.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**product_id** | **String** | Published product being read | [required] |

### Return type

[**models::PublicProductResponse**](PublicProductResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_get_product_selections

> models::ProductSelectionsResponse public_storefront_get_product_selections(tenant_id, product_id)
List the variants and option groups a published product offers.

The StoreKit twin answers for any product the operator can see. This one must not: a caller that guessed an unpublished product's id would otherwise learn its choices and their prices, so the publication check runs first and an unpublished product is reported exactly as a missing one.  The response type is shared with StoreKit deliberately. It is the same menu the store prints — names and the amount each choice adds — and reusing it keeps one definition of what a choice costs, which is the number the cart resolves server-side.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**product_id** | **String** | Published product whose choices are being read | [required] |

### Return type

[**models::ProductSelectionsResponse**](ProductSelectionsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
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


## public_storefront_list_categories

> Vec<models::CategoryResponse> public_storefront_list_categories(tenant_id)
List the categories the menu is grouped by.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |

### Return type

[**Vec<models::CategoryResponse>**](CategoryResponse.md)

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


## public_storefront_list_products

> models::StoreKitListPublicProductResponse public_storefront_list_products(tenant_id, category_id, search, limit, offset)
List the products a tenant publishes.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**category_id** | Option<**String**> |  |  |
**search** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::StoreKitListPublicProductResponse**](StoreKitList_PublicProductResponse.md)

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


## public_storefront_lookup_order

> models::PublicOrderLookupResponse public_storefront_lookup_order(tenant_id, public_order_lookup_request)
Find one order from what its customer knows.

#1148 kept order reads off this surface because a caller-held identifier is not evidence of identity, and an order id alone still is not. This route does not take one: it takes the two things a customer has and a passer-by does not, and it is metered on the tightest budget here so the pair cannot be walked. A wrong pair and an unknown phone number are the same 404, so a failed attempt does not confirm the number exists.  The response carries no more than the confirmation screen already showed at checkout — no address, no email, no customer record.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**public_order_lookup_request** | [**PublicOrderLookupRequest**](PublicOrderLookupRequest.md) |  | [required] |

### Return type

[**models::PublicOrderLookupResponse**](PublicOrderLookupResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_preview_coupon

> models::PublicCouponPreviewResponse public_storefront_preview_coupon(tenant_id, cart_id, public_coupon_preview_request)
Price one code against one cart.

A discount has to be visible before it is submitted — a checkout screen that takes a code and reveals what it did only once the order exists is not one anybody will use. The oracle a bare `validate_coupon` would be is closed by what this route demands rather than by withholding the answer: the caller has to hold a cart identifier, which costs a `CartWrite` to mint, and the attempt is metered on its own budget on top of that. Every rejection is the same 404 whether the code does not exist, has expired, or does not clear the cart's minimum, so working through a code space learns nothing from the replies.  Nothing is persisted. A preview neither reserves the code nor commits the cart to it; `checkout` re-validates and re-prices server-side, and that result is the one the order is built from.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**cart_id** | **String** | Cart the caller holds the identifier of | [required] |
**public_coupon_preview_request** | [**PublicCouponPreviewRequest**](PublicCouponPreviewRequest.md) |  | [required] |

### Return type

[**models::PublicCouponPreviewResponse**](PublicCouponPreviewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## public_storefront_remove_cart_item

> models::OkResponse public_storefront_remove_cart_item(tenant_id, cart_id, item_id)
Remove a cart line.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**cart_id** | **String** | Cart the caller holds the identifier of | [required] |
**item_id** | **String** | Cart line being removed | [required] |

### Return type

[**models::OkResponse**](OkResponse.md)

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


## public_storefront_update_cart_item

> models::PublicCartResponse public_storefront_update_cart_item(tenant_id, cart_id, item_id, public_update_cart_item_request)
Change the quantity of a cart line.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** | Tenant whose public storefront is being ordered from | [required] |
**cart_id** | **String** | Cart the caller holds the identifier of | [required] |
**item_id** | **String** | Cart line being changed | [required] |
**public_update_cart_item_request** | [**PublicUpdateCartItemRequest**](PublicUpdateCartItemRequest.md) |  | [required] |

### Return type

[**models::PublicCartResponse**](PublicCartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

