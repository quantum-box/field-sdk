# \TachyonFieldCrmCustomersApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export_consumer_customers_csv**](TachyonFieldCrmCustomersApi.md#export_consumer_customers_csv) | **GET** /v1/erp/customers/export.csv | 一覧と同じクエリ文字列（`segment` / `sort` / `min_order_total_nanodollar` など）を受け、絞り込んだ結果をそのまま CSV にする。画面で作ったリストを そのまま持ち出せるようにするためで、絞り込みを無視して全件を返すと、 「購入金額上位のリスト」を出したつもりの利用者に台帳全体が渡る。 `limit` / `offset` は無視して先頭から全件を読む。
[**import_consumer_customers_csv**](TachyonFieldCrmCustomersApi.md#import_consumer_customers_csv) | **POST** /v1/erp/customers/import.csv | 



## export_consumer_customers_csv

> export_consumer_customers_csv()
一覧と同じクエリ文字列（`segment` / `sort` / `min_order_total_nanodollar` など）を受け、絞り込んだ結果をそのまま CSV にする。画面で作ったリストを そのまま持ち出せるようにするためで、絞り込みを無視して全件を返すと、 「購入金額上位のリスト」を出したつもりの利用者に台帳全体が渡る。 `limit` / `offset` は無視して先頭から全件を読む。

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

