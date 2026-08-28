# \TachyonFieldCrmCustomersApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export_consumer_customers_csv**](TachyonFieldCrmCustomersApi.md#export_consumer_customers_csv) | **GET** /v1/erp/customers/export.csv | 
[**import_consumer_customers_csv**](TachyonFieldCrmCustomersApi.md#import_consumer_customers_csv) | **POST** /v1/erp/customers/import.csv | 



## export_consumer_customers_csv

> export_consumer_customers_csv()


### Parameters

This endpoint does not need any parameter.

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## import_consumer_customers_csv

> models::ConsumerCustomerCsvImportResponse import_consumer_customers_csv(body)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**body** | **String** | Raw CSV text of consumer customers (個人顧客) to import | [required] |

### Return type

[**models::ConsumerCustomerCsvImportResponse**](ConsumerCustomerCsvImportResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: text/csv
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

