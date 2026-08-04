# \StoreKitApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_cart_item**](StoreKitApi.md#add_cart_item) | **POST** /v1/storekit/carts/{cart_id}/items | Add a cart item.
[**cancel_order**](StoreKitApi.md#cancel_order) | **POST** /v1/storekit/orders/{order_id}/cancel | Cancel order.
[**checkout**](StoreKitApi.md#checkout) | **POST** /v1/storekit/checkout_sessions | Create checkout session / order.
[**clear_cart**](StoreKitApi.md#clear_cart) | **POST** /v1/storekit/carts/{cart_id}/clear | Clear cart items.
[**confirm_checkout_session**](StoreKitApi.md#confirm_checkout_session) | **POST** /v1/storekit/checkout_sessions/{order_id}/confirm | Confirm checkout session.
[**create_cart**](StoreKitApi.md#create_cart) | **POST** /v1/storekit/carts | Create or retrieve a cart.
[**create_customer**](StoreKitApi.md#create_customer) | **POST** /v1/storekit/customers | Create customer.
[**delete_customer**](StoreKitApi.md#delete_customer) | **DELETE** /v1/storekit/customers/{customer_id} | Delete customer.
[**deliver_order**](StoreKitApi.md#deliver_order) | **POST** /v1/storekit/orders/{order_id}/deliver | Deliver order.
[**get_cart**](StoreKitApi.md#get_cart) | **GET** /v1/storekit/carts/{cart_id} | Get a cart.
[**get_customer**](StoreKitApi.md#get_customer) | **GET** /v1/storekit/customers/{customer_id} | Get customer.
[**get_order_receipt**](StoreKitApi.md#get_order_receipt) | **GET** /v1/storekit/consumer-orders/{order_id}/receipt | Get a printable receipt for a consumer order.
[**get_product**](StoreKitApi.md#get_product) | **GET** /v1/storekit/products/{product_id} | Get a storefront product.
[**get_product_stock**](StoreKitApi.md#get_product_stock) | **GET** /v1/storekit/products/{product_id}/stock | Get product stock.
[**list_customers**](StoreKitApi.md#list_customers) | **GET** /v1/storekit/customers | List customers.
[**list_fulfillment_methods**](StoreKitApi.md#list_fulfillment_methods) | **GET** /v1/storekit/fulfillment-methods | List supported fulfillment methods.
[**list_products**](StoreKitApi.md#list_products) | **GET** /v1/storekit/products | List storefront products.
[**pickup_order**](StoreKitApi.md#pickup_order) | **POST** /v1/storekit/orders/{order_id}/pickup | Mark pickup order as picked up.
[**prepare_order**](StoreKitApi.md#prepare_order) | **POST** /v1/storekit/orders/{order_id}/prepare | Prepare order for fulfillment.
[**ready_order**](StoreKitApi.md#ready_order) | **POST** /v1/storekit/orders/{order_id}/ready | Mark pickup order as ready.
[**refund_order**](StoreKitApi.md#refund_order) | **POST** /v1/storekit/orders/{order_id}/refund | Refund order.
[**remove_cart_item**](StoreKitApi.md#remove_cart_item) | **DELETE** /v1/storekit/carts/{cart_id}/items/{item_id} | Remove a cart item by item ID.
[**select_pickup_datetime**](StoreKitApi.md#select_pickup_datetime) | **POST** /v1/storekit/orders/{order_id}/select-pickup-datetime | Select pickup date-time.
[**ship_order**](StoreKitApi.md#ship_order) | **POST** /v1/storekit/orders/{order_id}/ship | Ship order.
[**storefront_create_reservation**](StoreKitApi.md#storefront_create_reservation) | **POST** /v1/storekit/reservations | 
[**storefront_list_reservation_products**](StoreKitApi.md#storefront_list_reservation_products) | **GET** /v1/storekit/reservation-products | 
[**storefront_list_reservation_types**](StoreKitApi.md#storefront_list_reservation_types) | **GET** /v1/storekit/reservation-types | 
[**storefront_list_reservations**](StoreKitApi.md#storefront_list_reservations) | **GET** /v1/storekit/reservations | 
[**storefront_list_resources**](StoreKitApi.md#storefront_list_resources) | **GET** /v1/storekit/resources | 
[**storefront_update_reservation**](StoreKitApi.md#storefront_update_reservation) | **PATCH** /v1/storekit/reservations/{id} | 
[**storekit_get_order**](StoreKitApi.md#storekit_get_order) | **GET** /v1/storekit/orders/{order_id} | Get order.
[**storekit_list_categories**](StoreKitApi.md#storekit_list_categories) | **GET** /v1/storekit/categories | List storefront categories.
[**storekit_list_orders**](StoreKitApi.md#storekit_list_orders) | **GET** /v1/storekit/orders | List orders.
[**update_cart_item**](StoreKitApi.md#update_cart_item) | **POST** /v1/storekit/carts/{cart_id}/items/{item_id} | Update a cart item by item ID.
[**update_customer**](StoreKitApi.md#update_customer) | **POST** /v1/storekit/customers/{customer_id} | Update customer.
[**validate_coupon**](StoreKitApi.md#validate_coupon) | **POST** /v1/storekit/coupons/validate | Validate coupon.



## add_cart_item

> models::CartResponse add_cart_item(cart_id, add_cart_item_request)
Add a cart item.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**cart_id** | **String** |  | [required] |
**add_cart_item_request** | [**AddCartItemRequest**](AddCartItemRequest.md) |  | [required] |

### Return type

[**models::CartResponse**](CartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## cancel_order

> models::OkResponse cancel_order(order_id)
Cancel order.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_id** | **String** |  | [required] |

### Return type

[**models::OkResponse**](OkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## checkout

> models::OrderResponse checkout(checkout_request)
Create checkout session / order.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**checkout_request** | [**CheckoutRequest**](CheckoutRequest.md) |  | [required] |

### Return type

[**models::OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## clear_cart

> models::OkResponse clear_cart(cart_id)
Clear cart items.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**cart_id** | **String** |  | [required] |

### Return type

[**models::OkResponse**](OkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## confirm_checkout_session

> models::OrderResponse confirm_checkout_session(order_id)
Confirm checkout session.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_id** | **String** |  | [required] |

### Return type

[**models::OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_cart

> models::CartResponse create_cart(create_cart_request)
Create or retrieve a cart.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_cart_request** | [**CreateCartRequest**](CreateCartRequest.md) |  | [required] |

### Return type

[**models::CartResponse**](CartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_customer

> models::CustomerResponse create_customer(create_customer_request)
Create customer.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_customer_request** | [**CreateCustomerRequest**](CreateCustomerRequest.md) |  | [required] |

### Return type

[**models::CustomerResponse**](CustomerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_customer

> models::DeletedResponse delete_customer(customer_id)
Delete customer.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** |  | [required] |

### Return type

[**models::DeletedResponse**](DeletedResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deliver_order

> models::OrderResponse deliver_order(order_id)
Deliver order.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_id** | **String** |  | [required] |

### Return type

[**models::OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_cart

> models::CartResponse get_cart(cart_id)
Get a cart.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**cart_id** | **String** |  | [required] |

### Return type

[**models::CartResponse**](CartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_customer

> models::CustomerResponse get_customer(customer_id)
Get customer.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** |  | [required] |

### Return type

[**models::CustomerResponse**](CustomerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_order_receipt

> get_order_receipt(order_id, format)
Get a printable receipt for a consumer order.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_id** | **String** |  | [required] |
**format** | **String** |  | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_product

> models::ProductResponse get_product(product_id)
Get a storefront product.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**product_id** | **String** |  | [required] |

### Return type

[**models::ProductResponse**](ProductResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_product_stock

> models::StockResponse get_product_stock(product_id)
Get product stock.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**product_id** | **String** |  | [required] |

### Return type

[**models::StockResponse**](StockResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_customers

> models::StoreKitListCustomerResponse list_customers(email, limit)
List customers.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**email** | Option<**String**> |  |  |
**limit** | Option<**i64**> |  |  |

### Return type

[**models::StoreKitListCustomerResponse**](StoreKitList_CustomerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_fulfillment_methods

> Vec<models::FulfillmentMethodResponse> list_fulfillment_methods()
List supported fulfillment methods.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::FulfillmentMethodResponse>**](FulfillmentMethodResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_products

> models::StoreKitListProductResponse list_products(category_id, search, limit, offset)
List storefront products.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**category_id** | Option<**String**> |  |  |
**search** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::StoreKitListProductResponse**](StoreKitList_ProductResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## pickup_order

> models::OrderResponse pickup_order(order_id)
Mark pickup order as picked up.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_id** | **String** |  | [required] |

### Return type

[**models::OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## prepare_order

> models::OrderResponse prepare_order(order_id)
Prepare order for fulfillment.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_id** | **String** |  | [required] |

### Return type

[**models::OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## ready_order

> models::OrderResponse ready_order(order_id)
Mark pickup order as ready.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_id** | **String** |  | [required] |

### Return type

[**models::OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## refund_order

> models::OrderResponse refund_order(order_id)
Refund order.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_id** | **String** |  | [required] |

### Return type

[**models::OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## remove_cart_item

> models::OkResponse remove_cart_item(cart_id, item_id)
Remove a cart item by item ID.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**cart_id** | **String** |  | [required] |
**item_id** | **String** |  | [required] |

### Return type

[**models::OkResponse**](OkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## select_pickup_datetime

> models::OrderResponse select_pickup_datetime(order_id, select_pickup_datetime_request)
Select pickup date-time.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_id** | **String** |  | [required] |
**select_pickup_datetime_request** | [**SelectPickupDatetimeRequest**](SelectPickupDatetimeRequest.md) |  | [required] |

### Return type

[**models::OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## ship_order

> models::OrderResponse ship_order(order_id)
Ship order.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_id** | **String** |  | [required] |

### Return type

[**models::OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## storefront_create_reservation

> models::CreateReservationResponse storefront_create_reservation(create_reservation_request)


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


## storefront_list_reservation_products

> models::ReservationProductListResponse storefront_list_reservation_products(date)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**date** | Option<**String**> | Filter/materialize slot-based products for this date |  |

### Return type

[**models::ReservationProductListResponse**](ReservationProductListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## storefront_list_reservation_types

> models::ReservationTypeListResponse storefront_list_reservation_types()


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


## storefront_list_reservations

> models::ReservationListResponse storefront_list_reservations(status, payment_status, reservation_type_id, resource_id, staff_id, customer_id, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> | Filter by reservation status |  |
**payment_status** | Option<**String**> | Filter by payment status |  |
**reservation_type_id** | Option<**String**> | Filter by reservation type ID |  |
**resource_id** | Option<**String**> | Filter by resource ID |  |
**staff_id** | Option<**String**> | Filter by assigned staff ID |  |
**customer_id** | Option<**String**> | Filter by customer ID |  |
**limit** | Option<**i32**> | Maximum number of reservations to return |  |
**offset** | Option<**i32**> | Number of reservations to skip |  |

### Return type

[**models::ReservationListResponse**](ReservationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## storefront_list_resources

> models::ResourceListResponse storefront_list_resources()


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


## storefront_update_reservation

> models::Reservation storefront_update_reservation(id, update_reservation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID to update | [required] |
**update_reservation_request** | [**UpdateReservationRequest**](UpdateReservationRequest.md) |  | [required] |

### Return type

[**models::Reservation**](Reservation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## storekit_get_order

> models::OrderResponse storekit_get_order(order_id)
Get order.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_id** | **String** |  | [required] |

### Return type

[**models::OrderResponse**](OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## storekit_list_categories

> Vec<models::CategoryResponse> storekit_list_categories()
List storefront categories.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::CategoryResponse>**](CategoryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## storekit_list_orders

> models::StoreKitListOrderResponse storekit_list_orders(user_id, session_id, customer_id, status, limit, offset)
List orders.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**user_id** | Option<**String**> |  |  |
**session_id** | Option<**String**> |  |  |
**customer_id** | Option<**String**> |  |  |
**status** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::StoreKitListOrderResponse**](StoreKitList_OrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_cart_item

> models::CartResponse update_cart_item(cart_id, item_id, update_cart_item_request)
Update a cart item by item ID.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**cart_id** | **String** |  | [required] |
**item_id** | **String** |  | [required] |
**update_cart_item_request** | [**UpdateCartItemRequest**](UpdateCartItemRequest.md) |  | [required] |

### Return type

[**models::CartResponse**](CartResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_customer

> models::CustomerResponse update_customer(customer_id, update_customer_request)
Update customer.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** |  | [required] |
**update_customer_request** | [**UpdateCustomerRequest**](UpdateCustomerRequest.md) |  | [required] |

### Return type

[**models::CustomerResponse**](CustomerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## validate_coupon

> models::CouponResponse validate_coupon(validate_coupon_request)
Validate coupon.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**validate_coupon_request** | [**ValidateCouponRequest**](ValidateCouponRequest.md) |  | [required] |

### Return type

[**models::CouponResponse**](CouponResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

