# \TachyonFieldSalesForecastApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_sales_forecast**](TachyonFieldSalesForecastApi.md#get_sales_forecast) | **GET** /v1/erp/sales-forecast | 
[**list_stage_settings**](TachyonFieldSalesForecastApi.md#list_stage_settings) | **GET** /v1/erp/sales-forecast/stage-settings | 
[**update_stage_settings**](TachyonFieldSalesForecastApi.md#update_stage_settings) | **PUT** /v1/erp/sales-forecast/stage-settings | 



## get_sales_forecast

> models::ForecastResponse get_sales_forecast()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ForecastResponse**](ForecastResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_stage_settings

> models::StageSettingsResponse list_stage_settings()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::StageSettingsResponse**](StageSettingsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_stage_settings

> models::StageSettingsResponse update_stage_settings(update_stage_settings_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**update_stage_settings_request** | [**UpdateStageSettingsRequest**](UpdateStageSettingsRequest.md) |  | [required] |

### Return type

[**models::StageSettingsResponse**](StageSettingsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

