# \TachyonFieldOrdersApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_expired_orders**](TachyonFieldOrdersApi.md#cancel_expired_orders) | **POST** /v1/field/orders/batch/cancel-expired | Cancel all READY orders whose pickup deadline has passed.



## cancel_expired_orders

> models::CancelExpiredResponse cancel_expired_orders()
Cancel all READY orders whose pickup deadline has passed.

Returns the number of orders cancelled.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::CancelExpiredResponse**](CancelExpiredResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

