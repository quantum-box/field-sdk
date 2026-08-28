# \OrderEntryPointsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_order_entry_point**](OrderEntryPointsApi.md#create_order_entry_point) | **POST** /v1/field/order-entry-points | Provision a QR or kiosk and mint its public token.
[**disable_order_entry_point**](OrderEntryPointsApi.md#disable_order_entry_point) | **DELETE** /v1/field/order-entry-points/{id} | Retire an entry point.
[**get_order_entry_point**](OrderEntryPointsApi.md#get_order_entry_point) | **GET** /v1/field/order-entry-points/{id} | Read one entry point. The token is not part of the answer.
[**list_order_entry_points**](OrderEntryPointsApi.md#list_order_entry_points) | **GET** /v1/field/order-entry-points | List the tenant's QR and kiosk entry points.
[**rotate_order_entry_point_token**](OrderEntryPointsApi.md#rotate_order_entry_point_token) | **POST** /v1/field/order-entry-points/{id}/rotate-token | Reprint: mint a new public token and retire the old one at once.
[**update_order_entry_point**](OrderEntryPointsApi.md#update_order_entry_point) | **PATCH** /v1/field/order-entry-points/{id} | Edit an entry point's display, seat, timing, or enabled state.



## create_order_entry_point

> models::OrderEntryPointWithTokenResponse create_order_entry_point(create_order_entry_point_request)
Provision a QR or kiosk and mint its public token.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_order_entry_point_request** | [**CreateOrderEntryPointRequest**](CreateOrderEntryPointRequest.md) |  | [required] |

### Return type

[**models::OrderEntryPointWithTokenResponse**](OrderEntryPointWithTokenResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## disable_order_entry_point

> disable_order_entry_point(id)
Retire an entry point.

The row survives so the orders attributed to it still resolve in reporting; what stops is the token's ability to open a session.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_order_entry_point

> models::OrderEntryPointResponse get_order_entry_point(id)
Read one entry point. The token is not part of the answer.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**models::OrderEntryPointResponse**](OrderEntryPointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_order_entry_points

> Vec<models::OrderEntryPointResponse> list_order_entry_points()
List the tenant's QR and kiosk entry points.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::OrderEntryPointResponse>**](OrderEntryPointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## rotate_order_entry_point_token

> models::OrderEntryPointWithTokenResponse rotate_order_entry_point_token(id)
Reprint: mint a new public token and retire the old one at once.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**models::OrderEntryPointWithTokenResponse**](OrderEntryPointWithTokenResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_order_entry_point

> models::OrderEntryPointResponse update_order_entry_point(id, update_order_entry_point_request)
Edit an entry point's display, seat, timing, or enabled state.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_order_entry_point_request** | [**UpdateOrderEntryPointRequest**](UpdateOrderEntryPointRequest.md) |  | [required] |

### Return type

[**models::OrderEntryPointResponse**](OrderEntryPointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

