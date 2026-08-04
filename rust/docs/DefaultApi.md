# \DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**health_check**](DefaultApi.md#health_check) | **GET** /health | Lightweight liveness probe — always returns 200.
[**readiness_check**](DefaultApi.md#readiness_check) | **GET** /health/ready | Readiness probe — verifies database connectivity.



## health_check

> health_check()
Lightweight liveness probe — always returns 200.

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


## readiness_check

> readiness_check()
Readiness probe — verifies database connectivity.

Returns 200 when all dependencies are healthy, 503 otherwise.

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

