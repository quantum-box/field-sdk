# \QuotationsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convert_quotation_to_invoice**](QuotationsApi.md#convert_quotation_to_invoice) | **POST** /v1/erp/quotations/{id}/convert-to-invoice | 
[**create_quotation**](QuotationsApi.md#create_quotation) | **POST** /v1/erp/quotations | 
[**get_quotation**](QuotationsApi.md#get_quotation) | **GET** /v1/erp/quotations/{id} | 
[**list_quotations**](QuotationsApi.md#list_quotations) | **GET** /v1/erp/quotations | 
[**update_quotation**](QuotationsApi.md#update_quotation) | **PATCH** /v1/erp/quotations/{id} | 



## convert_quotation_to_invoice

> models::ConvertQuotationToInvoiceResponse convert_quotation_to_invoice(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Quotation ID | [required] |

### Return type

[**models::ConvertQuotationToInvoiceResponse**](ConvertQuotationToInvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_quotation

> models::QuotationResponse create_quotation(create_quotation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_quotation_request** | [**CreateQuotationRequest**](CreateQuotationRequest.md) |  | [required] |

### Return type

[**models::QuotationResponse**](QuotationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_quotation

> models::QuotationResponse get_quotation(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Quotation ID | [required] |

### Return type

[**models::QuotationResponse**](QuotationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_quotations

> models::QuotationListResponse list_quotations()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::QuotationListResponse**](QuotationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_quotation

> models::QuotationResponse update_quotation(id, update_quotation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Quotation ID | [required] |
**update_quotation_request** | [**UpdateQuotationRequest**](UpdateQuotationRequest.md) |  | [required] |

### Return type

[**models::QuotationResponse**](QuotationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

