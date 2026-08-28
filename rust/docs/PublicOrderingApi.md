# \PublicOrderingApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_current_session**](PublicOrderingApi.md#get_current_session) | **GET** /v1/public/order-sessions/current | Report the state of the session the caller holds.
[**get_entry_point**](PublicOrderingApi.md#get_entry_point) | **GET** /v1/public/order-entry-points/{public_token} | Resolve a printed token to the page a diner should see.
[**get_menu**](PublicOrderingApi.md#get_menu) | **GET** /v1/public/order-sessions/current/menu | The menu this entry point can order from.
[**get_menu_product_selections**](PublicOrderingApi.md#get_menu_product_selections) | **GET** /v1/public/order-sessions/current/menu/products/{product_id}/selections | The variants and options one menu item offers.
[**get_own_order**](PublicOrderingApi.md#get_own_order) | **GET** /v1/public/order-sessions/current/order | Read back the order this session placed.
[**place_order**](PublicOrderingApi.md#place_order) | **POST** /v1/public/order-sessions/current/orders | Place the order this session has been assembling.
[**reset_session**](PublicOrderingApi.md#reset_session) | **POST** /v1/public/order-sessions/current/reset | End the session and make its token useless.
[**start_session**](PublicOrderingApi.md#start_session) | **POST** /v1/public/order-sessions | Open a guest session on an entry point.



## get_current_session

> models::OrderSessionResponse get_current_session()
Report the state of the session the caller holds.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::OrderSessionResponse**](OrderSessionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_entry_point

> models::PublicOrderEntryPointResponse get_entry_point(public_token)
Resolve a printed token to the page a diner should see.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**public_token** | **String** | Opaque value printed in the QR | [required] |

### Return type

[**models::PublicOrderEntryPointResponse**](PublicOrderEntryPointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_menu

> models::PublicOrderMenuResponse get_menu(category_id, search, limit, offset)
The menu this entry point can order from.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**category_id** | Option<**String**> |  |  |
**search** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::PublicOrderMenuResponse**](PublicOrderMenuResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_menu_product_selections

> models::ProductSelectionsResponse get_menu_product_selections(product_id)
The variants and options one menu item offers.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**product_id** | **String** | Menu item whose choices are being read | [required] |

### Return type

[**models::ProductSelectionsResponse**](ProductSelectionsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_own_order

> models::PublicOrderResponse get_own_order()
Read back the order this session placed.

Scoped to the session's own order id, so possession of a session is not a way to enumerate the store's orders. The response is the same narrow shape the submission returned: no customer contact details come back out.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::PublicOrderResponse**](PublicOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## place_order

> models::PublicOrderResponse place_order(idempotency_key, place_public_order_request)
Place the order this session has been assembling.

`Idempotency-Key` is required, not optional. A diner taps twice, a phone loses signal mid-request and the app retries, a kiosk reloads: all three arrive here as a second identical POST, and the key is what makes the second one return the first one's order instead of creating another.  Failure is handled the same way and for the same reason. When the checkout call does not come back with an answer, the key is marked `failed` and the session is marked `unknown`, which refuses every later attempt on that session rather than risking a duplicate. Staff resolve it; the software does not guess.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**idempotency_key** | **String** | Required; replays return the first result | [required] |
**place_public_order_request** | [**PlacePublicOrderRequest**](PlacePublicOrderRequest.md) |  | [required] |

### Return type

[**models::PublicOrderResponse**](PublicOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## reset_session

> reset_session()
End the session and make its token useless.

Idempotent on purpose: a kiosk that clears itself after an abandoned order should not have to know whether it still holds a live session.

### Parameters

This endpoint does not need any parameter.

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## start_session

> models::StartOrderSessionResponse start_session(start_order_session_request)
Open a guest session on an entry point.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**start_order_session_request** | [**StartOrderSessionRequest**](StartOrderSessionRequest.md) |  | [required] |

### Return type

[**models::StartOrderSessionResponse**](StartOrderSessionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

