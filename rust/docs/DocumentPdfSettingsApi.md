# \DocumentPdfSettingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_document_pdf_settings**](DocumentPdfSettingsApi.md#get_document_pdf_settings) | **GET** /v1/field/document-pdf-settings | 
[**save_document_pdf_settings**](DocumentPdfSettingsApi.md#save_document_pdf_settings) | **PUT** /v1/field/document-pdf-settings | 



## get_document_pdf_settings

> models::DocumentPdfSettingsResponse get_document_pdf_settings()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::DocumentPdfSettingsResponse**](DocumentPdfSettingsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## save_document_pdf_settings

> models::DocumentPdfSettingsResponse save_document_pdf_settings(save_document_pdf_settings_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**save_document_pdf_settings_request** | [**SaveDocumentPdfSettingsRequest**](SaveDocumentPdfSettingsRequest.md) |  | [required] |

### Return type

[**models::DocumentPdfSettingsResponse**](DocumentPdfSettingsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

