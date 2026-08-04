# \TachyonFieldReportsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_payout_report**](TachyonFieldReportsApi.md#get_payout_report) | **GET** /v1/field/reports/payout | `GET /v1/field/reports/payout` — JSON payout report.
[**get_payout_report_csv**](TachyonFieldReportsApi.md#get_payout_report_csv) | **GET** /v1/field/reports/payout.csv | `GET /v1/field/reports/payout.csv` — CSV payout report.



## get_payout_report

> models::PayoutReportResponse get_payout_report(from, to)
`GET /v1/field/reports/payout` — JSON payout report.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**from** | **String** | Period start date (inclusive), e.g. `2026-01-01`. | [required] |
**to** | **String** | Period end date (inclusive), e.g. `2026-01-31`. | [required] |

### Return type

[**models::PayoutReportResponse**](PayoutReportResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_payout_report_csv

> get_payout_report_csv(from, to)
`GET /v1/field/reports/payout.csv` — CSV payout report.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**from** | **String** | Period start date (inclusive), e.g. `2026-01-01`. | [required] |
**to** | **String** | Period end date (inclusive), e.g. `2026-01-31`. | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

