# \TachyonFieldCrmClientsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export_clients_csv**](TachyonFieldCrmClientsApi.md#export_clients_csv) | **GET** /v1/erp/clients/export.csv | 
[**import_clients_csv**](TachyonFieldCrmClientsApi.md#import_clients_csv) | **POST** /v1/erp/clients/import.csv | 



## export_clients_csv

> export_clients_csv()


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


## import_clients_csv

> models::ClientCsvImportResponse import_clients_csv(body)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**body** | **String** | Raw CSV text of order clients (取引先) to import | [required] |

### Return type

[**models::ClientCsvImportResponse**](ClientCsvImportResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: text/csv
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

