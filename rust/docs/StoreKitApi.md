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
[**create_webhook_endpoint**](StoreKitApi.md#create_webhook_endpoint) | **POST** /v1/storekit/webhook-endpoints | webhook 宛先を登録し、署名シークレットを一度だけ返す。
[**delete_customer**](StoreKitApi.md#delete_customer) | **DELETE** /v1/storekit/customers/{customer_id} | Delete customer.
[**delete_webhook_endpoint**](StoreKitApi.md#delete_webhook_endpoint) | **DELETE** /v1/storekit/webhook-endpoints/{endpoint_id} | webhook 宛先を削除する。
[**deliver_order**](StoreKitApi.md#deliver_order) | **POST** /v1/storekit/orders/{order_id}/deliver | Deliver order.
[**get_cart**](StoreKitApi.md#get_cart) | **GET** /v1/storekit/carts/{cart_id} | Get a cart.
[**get_customer**](StoreKitApi.md#get_customer) | **GET** /v1/storekit/customers/{customer_id} | Get customer.
[**get_order_receipt**](StoreKitApi.md#get_order_receipt) | **GET** /v1/storekit/consumer-orders/{order_id}/receipt | Get a printable receipt for a consumer order.
[**get_product**](StoreKitApi.md#get_product) | **GET** /v1/storekit/products/{product_id} | Get a storefront product.
[**get_product_selections**](StoreKitApi.md#get_product_selections) | **GET** /v1/storekit/products/{product_id}/selections | List the variants and option groups a product offers.
[**get_product_stock**](StoreKitApi.md#get_product_stock) | **GET** /v1/storekit/products/{product_id}/stock | Get product stock.
[**get_webhook_endpoint**](StoreKitApi.md#get_webhook_endpoint) | **GET** /v1/storekit/webhook-endpoints/{endpoint_id} | webhook 宛先を1件取得する。
[**list_customers**](StoreKitApi.md#list_customers) | **GET** /v1/storekit/customers | List customers.
[**list_fulfillment_methods**](StoreKitApi.md#list_fulfillment_methods) | **GET** /v1/storekit/fulfillment-methods | List supported fulfillment methods.
[**list_products**](StoreKitApi.md#list_products) | **GET** /v1/storekit/products | List storefront products.
[**list_webhook_deliveries**](StoreKitApi.md#list_webhook_deliveries) | **GET** /v1/storekit/webhook-endpoints/{endpoint_id}/deliveries | 宛先の配送履歴を新しい順に返す。
[**list_webhook_endpoints**](StoreKitApi.md#list_webhook_endpoints) | **GET** /v1/storekit/webhook-endpoints | テナントの webhook 宛先を一覧する。
[**pickup_order**](StoreKitApi.md#pickup_order) | **POST** /v1/storekit/orders/{order_id}/pickup | Mark pickup order as picked up.
[**prepare_order**](StoreKitApi.md#prepare_order) | **POST** /v1/storekit/orders/{order_id}/prepare | Prepare order for fulfillment.
[**ready_order**](StoreKitApi.md#ready_order) | **POST** /v1/storekit/orders/{order_id}/ready | Mark pickup order as ready.
[**refund_order**](StoreKitApi.md#refund_order) | **POST** /v1/storekit/orders/{order_id}/refund | Refund order.
[**remove_cart_item**](StoreKitApi.md#remove_cart_item) | **DELETE** /v1/storekit/carts/{cart_id}/items/{item_id} | Remove a cart item by item ID.
[**rotate_webhook_endpoint_secret**](StoreKitApi.md#rotate_webhook_endpoint_secret) | **POST** /v1/storekit/webhook-endpoints/{endpoint_id}/rotate-secret | 署名シークレットを更新し、新しい値を一度だけ返す。
[**select_pickup_datetime**](StoreKitApi.md#select_pickup_datetime) | **POST** /v1/storekit/orders/{order_id}/select-pickup-datetime | Select pickup date-time.
[**ship_order**](StoreKitApi.md#ship_order) | **POST** /v1/storekit/orders/{order_id}/ship | Ship order.
[**storefront_create_reservation**](StoreKitApi.md#storefront_create_reservation) | **POST** /v1/storekit/reservations | 
[**storefront_get_storefront_profile**](StoreKitApi.md#storefront_get_storefront_profile) | **GET** /v1/storekit/storefront-profile | Anonymous read for the public storefront.
[**storefront_list_membership_plans**](StoreKitApi.md#storefront_list_membership_plans) | **GET** /v1/storekit/membership-plans | The member classes on offer.
[**storefront_list_reservation_products**](StoreKitApi.md#storefront_list_reservation_products) | **GET** /v1/storekit/reservation-products | 
[**storefront_list_reservation_types**](StoreKitApi.md#storefront_list_reservation_types) | **GET** /v1/storekit/reservation-types | 
[**storefront_list_reservations**](StoreKitApi.md#storefront_list_reservations) | **GET** /v1/storekit/reservations | 
[**storefront_list_resource_time_slots**](StoreKitApi.md#storefront_list_resource_time_slots) | **GET** /v1/storekit/resources/{id}/time-slots | 
[**storefront_list_resources**](StoreKitApi.md#storefront_list_resources) | **GET** /v1/storekit/resources | 
[**storefront_resource_availability_calendar**](StoreKitApi.md#storefront_resource_availability_calendar) | **GET** /v1/storekit/resources/{id}/availability-calendar | 
[**storefront_update_reservation**](StoreKitApi.md#storefront_update_reservation) | **PATCH** /v1/storekit/reservations/{id} | 
[**storekit_get_order**](StoreKitApi.md#storekit_get_order) | **GET** /v1/storekit/orders/{order_id} | Get order.
[**storekit_list_categories**](StoreKitApi.md#storekit_list_categories) | **GET** /v1/storekit/categories | List storefront categories.
[**storekit_list_orders**](StoreKitApi.md#storekit_list_orders) | **GET** /v1/storekit/orders | List orders.
[**test_webhook_endpoint**](StoreKitApi.md#test_webhook_endpoint) | **POST** /v1/storekit/webhook-endpoints/{endpoint_id}/test | 宛先へ署名付きの疎通確認イベントを1回送る。
[**update_cart_item**](StoreKitApi.md#update_cart_item) | **POST** /v1/storekit/carts/{cart_id}/items/{item_id} | Update a cart item by item ID.
[**update_customer**](StoreKitApi.md#update_customer) | **POST** /v1/storekit/customers/{customer_id} | Update customer.
[**update_webhook_endpoint**](StoreKitApi.md#update_webhook_endpoint) | **PATCH** /v1/storekit/webhook-endpoints/{endpoint_id} | webhook 宛先を部分更新する。
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

`email` is optional. Customers taken by phone or at the counter often have none, and they still need a ledger entry so their visit history can be aggregated.

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


## create_webhook_endpoint

> models::WebhookEndpointWithSecretResponse create_webhook_endpoint(create_webhook_endpoint_request)
webhook 宛先を登録し、署名シークレットを一度だけ返す。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_webhook_endpoint_request** | [**CreateWebhookEndpointRequest**](CreateWebhookEndpointRequest.md) |  | [required] |

### Return type

[**models::WebhookEndpointWithSecretResponse**](WebhookEndpointWithSecretResponse.md)

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


## delete_webhook_endpoint

> delete_webhook_endpoint(endpoint_id)
webhook 宛先を削除する。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**endpoint_id** | **String** |  | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

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
**format** | Option<**String**> |  |  |

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


## get_product_selections

> models::ProductSelectionsResponse get_product_selections(product_id)
List the variants and option groups a product offers.

Prices live here, not in the cart request: a client renders these choices and then sends back IDs only.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**product_id** | **String** |  | [required] |

### Return type

[**models::ProductSelectionsResponse**](ProductSelectionsResponse.md)

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


## get_webhook_endpoint

> models::WebhookEndpointResponse get_webhook_endpoint(endpoint_id)
webhook 宛先を1件取得する。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**endpoint_id** | **String** |  | [required] |

### Return type

[**models::WebhookEndpointResponse**](WebhookEndpointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_customers

> models::StoreKitListCustomerResponse list_customers(email, name, phone, ids, limit, offset)
List customers.

`email` matches exactly; `name` (display name or kana reading) and `phone` match partially. Results are candidates: customers are never merged or deduplicated, so two people sharing a name or a household phone number stay separate records. Picking the right candidate — or registering a new customer — is the caller's decision.  `ids` fetches a known set of customers in one call, for callers that already hold customer IDs and only need the names and phone numbers to display alongside them. It is ANDed with the other filters, is capped at 100 IDs per request (more is a 400, never a silent truncation), and drops IDs that do not exist instead of failing the request.  `offset` pages through the filtered set, and `total` on the response is that set's size — not the size of the returned page. The order is stable for a given filter, so paging neither repeats nor skips a row.  `limit` and `offset` on the response body are always `0` here: the legacy upstream list carried no pagination metadata and StoreKit has exposed zeroes since. Read `has_more` and `total` instead.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**email** | Option<**String**> | Exact email match. |  |
**name** | Option<**String**> | Partial match against the display name or its kana reading. |  |
**phone** | Option<**String**> | Partial match against the phone number. Separators are ignored on both sides, so `090-1234-5678` and `09012345678` match. |  |
**ids** | Option<**String**> | Comma-separated customer IDs, at most 100 per request (`ids=cus_a,cus_b`). Combines with `email`, `name` and `phone` as AND, and does not widen `limit`: pass a `limit` big enough for the set you asked for. IDs that do not exist are dropped from the result rather than reported. More than 100 IDs is a 400; the list is never silently truncated. An `ids` that parses to no ID at all matches nothing, so an empty page stays empty. |  |
**limit** | Option<**i64**> |  |  |
**offset** | Option<**i32**> | Rows to skip, applied after the filters above. Defaults to 0. |  |

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


## list_webhook_deliveries

> Vec<models::WebhookDeliveryResponse> list_webhook_deliveries(endpoint_id, limit)
宛先の配送履歴を新しい順に返す。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**endpoint_id** | **String** |  | [required] |
**limit** | Option<**i32**> |  |  |

### Return type

[**Vec<models::WebhookDeliveryResponse>**](WebhookDeliveryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_webhook_endpoints

> Vec<models::WebhookEndpointResponse> list_webhook_endpoints()
テナントの webhook 宛先を一覧する。

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::WebhookEndpointResponse>**](WebhookEndpointResponse.md)

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


## rotate_webhook_endpoint_secret

> models::WebhookEndpointWithSecretResponse rotate_webhook_endpoint_secret(endpoint_id)
署名シークレットを更新し、新しい値を一度だけ返す。

旧世代は24時間だけ併記される。受信側はその間に値を差し替える。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**endpoint_id** | **String** |  | [required] |

### Return type

[**models::WebhookEndpointWithSecretResponse**](WebhookEndpointWithSecretResponse.md)

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

> models::CreateReservationResponse storefront_create_reservation(storefront_create_reservation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**storefront_create_reservation_request** | [**StorefrontCreateReservationRequest**](StorefrontCreateReservationRequest.md) |  | [required] |

### Return type

[**models::CreateReservationResponse**](CreateReservationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## storefront_get_storefront_profile

> models::StorefrontProfileResponse storefront_get_storefront_profile()
Anonymous read for the public storefront.

`/v1/storekit/_*` is reachable without a bearer token because `erp_authz::erp_action_for_request` has no branch for it and falls through to `None`. The tenant comes from `x-operator-id`, exactly as it does for the other storefront reads the page already makes.  This handler takes neither an `Executor` nor an `AuthApp`, so it structurally cannot perform a staff action — the same narrowing the public membership router expresses through a reduced use-case trait.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::StorefrontProfileResponse**](StorefrontProfileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## storefront_list_membership_plans

> models::StorefrontMembershipPlanListResponse storefront_list_membership_plans()
The member classes on offer.

Reached anonymously through the public route below. This `/v1/storekit/` path is *not* anonymous: fail-closed classification quarantines the whole StoreKit prefix, so it answers only callers that already carry an operator header and a bearer.  This handler takes neither an `Executor` nor an `AuthApp`, so it structurally cannot perform a staff action, and it only ever asks the repository for active plans.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::StorefrontMembershipPlanListResponse**](StorefrontMembershipPlanListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## storefront_list_reservation_products

> models::ReservationProductListResponse storefront_list_reservation_products(date, resource_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**date** | Option<**String**> | Filter/materialize slot-based products for this date |  |
**resource_id** | Option<**String**> | Resource whose generated inventory supplies the bookable slots, and whose membership in a product's eligibleResourceIds decides whether that product is offered |  |

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
**limit** | Option<**i32**> | Page size; defaults to 100, maximum 500. A larger value is capped rather than rejected, and the applied value comes back as `limit` in the response. |  |
**offset** | Option<**i32**> | Number of reservations to skip |  |

### Return type

[**models::ReservationListResponse**](ReservationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## storefront_list_resource_time_slots

> models::StorefrontResourceTimeSlotListResponse storefront_list_resource_time_slots(id, date, timezone, include_sold_out)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**date** | **String** | Tenant-local calendar date to list bookable slots for. | [required] |
**timezone** | Option<**String**> | IANA timezone defining `date`. Omitted keeps the legacy Asia/Tokyo day. |  |
**include_sold_out** | Option<**bool**> | Include slots with no remaining groups. Defaults to hiding them. |  |

### Return type

[**models::StorefrontResourceTimeSlotListResponse**](StorefrontResourceTimeSlotListResponse.md)

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


## storefront_resource_availability_calendar

> models::StorefrontAvailabilityCalendarResponse storefront_resource_availability_calendar(id, from, to, timezone, few_left_threshold)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation resource ID | [required] |
**from** | **String** | First tenant-local calendar date, inclusive. | [required] |
**to** | **String** | Last tenant-local calendar date, inclusive. | [required] |
**timezone** | Option<**String**> | IANA timezone defining `from`/`to`. Omitted keeps Asia/Tokyo. |  |
**few_left_threshold** | Option<**i32**> | Remaining groups at or below which a day reads as \"few left\". |  |

### Return type

[**models::StorefrontAvailabilityCalendarResponse**](StorefrontAvailabilityCalendarResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## storefront_update_reservation

> models::Reservation storefront_update_reservation(id, storefront_update_reservation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Reservation ID to update | [required] |
**storefront_update_reservation_request** | [**StorefrontUpdateReservationRequest**](StorefrontUpdateReservationRequest.md) |  | [required] |

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

> models::StoreKitListOrderResponse storekit_list_orders(user_id, session_id, customer_id, status, updated_after, limit, offset)
List orders.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**user_id** | Option<**String**> |  |  |
**session_id** | Option<**String**> |  |  |
**customer_id** | Option<**String**> |  |  |
**status** | Option<**String**> | Order status to keep. Accepts a comma-separated list (`confirmed,preparing,ready`) so a kitchen board can watch every in-progress status in one request. |  |
**updated_after** | Option<**String**> | RFC 3339 lower bound on `updated_at`, for delta polling.  The bound is **inclusive**: `consumer_orders.updated_at` has second precision, so an exclusive bound would permanently drop a row updated later in the same second as the caller's cursor. Poll with the largest `updated_at` of the previous response and de-duplicate on order ID; the overlap is at most one second of rows.  Supplying it also switches the result order to `updated_at` ascending, so a backlog longer than one page drains in order. |  |
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


## test_webhook_endpoint

> models::WebhookTestResponse test_webhook_endpoint(endpoint_id)
宛先へ署名付きの疎通確認イベントを1回送る。

実配送とまったく同じ経路（SSRF ガード・接続先の固定・署名・timeout）を 通る。注文イベントも配送行も作らないので、履歴には残らない。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**endpoint_id** | **String** |  | [required] |

### Return type

[**models::WebhookTestResponse**](WebhookTestResponse.md)

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


## update_webhook_endpoint

> models::WebhookEndpointResponse update_webhook_endpoint(endpoint_id, update_webhook_endpoint_request)
webhook 宛先を部分更新する。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**endpoint_id** | **String** |  | [required] |
**update_webhook_endpoint_request** | [**UpdateWebhookEndpointRequest**](UpdateWebhookEndpointRequest.md) |  | [required] |

### Return type

[**models::WebhookEndpointResponse**](WebhookEndpointResponse.md)

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

