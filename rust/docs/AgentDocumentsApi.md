# \AgentDocumentsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agent_create_invoice**](AgentDocumentsApi.md#agent_create_invoice) | **POST** /api/agent/invoices | 
[**agent_create_quotation**](AgentDocumentsApi.md#agent_create_quotation) | **POST** /api/agent/quotations | 
[**agent_get_invoice**](AgentDocumentsApi.md#agent_get_invoice) | **GET** /api/agent/invoices/{id} | 
[**agent_get_quotation**](AgentDocumentsApi.md#agent_get_quotation) | **GET** /api/agent/quotations/{id} | 
[**agent_list_invoices**](AgentDocumentsApi.md#agent_list_invoices) | **GET** /api/agent/invoices | 
[**agent_list_quotations**](AgentDocumentsApi.md#agent_list_quotations) | **GET** /api/agent/quotations | 
[**agent_send_invoice**](AgentDocumentsApi.md#agent_send_invoice) | **POST** /api/agent/invoices/{id}/send | 
[**agent_send_quotation**](AgentDocumentsApi.md#agent_send_quotation) | **POST** /api/agent/quotations/{id}/send | 



## agent_create_invoice

> models::InvoiceResponse agent_create_invoice(create_invoice_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_invoice_request** | [**CreateInvoiceRequest**](CreateInvoiceRequest.md) |  | [required] |

### Return type

[**models::InvoiceResponse**](InvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## agent_create_quotation

> models::QuotationResponse agent_create_quotation(create_quotation_request)


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


## agent_get_invoice

> models::InvoiceResponse agent_get_invoice(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Invoice ID | [required] |

### Return type

[**models::InvoiceResponse**](InvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## agent_get_quotation

> models::QuotationResponse agent_get_quotation(id)


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


## agent_list_invoices

> models::InvoiceListResponse agent_list_invoices(status, client_id, source_type, source_id, reason, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> | Filter by invoice status. |  |
**client_id** | Option<**String**> | Filter by client ID. |  |
**source_type** | Option<**String**> | Return invoices raised from this record kind. One of `reservation`, `order`, `subscription`, `quotation`, `contract`.  Named in camelCase to match the JSON bodies, with the endpoint's older snake_case spelling accepted as an alias so both conventions work. |  |
**source_id** | Option<**String**> | Return invoices raised from this record. Combine with `sourceType` to answer whether a given record has already been billed. |  |
**reason** | Option<**String**> | Return invoices carrying this caller-defined classification on any of their sources. Matched exactly. |  |
**limit** | Option<**i32**> | Maximum number of invoices to return. |  |
**offset** | Option<**i32**> | Number of invoices to skip. |  |

### Return type

[**models::InvoiceListResponse**](InvoiceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## agent_list_quotations

> models::QuotationListResponse agent_list_quotations(status, client_id, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> | Filter by quotation status. |  |
**client_id** | Option<**String**> | Filter by client ID. |  |
**limit** | Option<**i32**> | Maximum number of quotations to return. |  |
**offset** | Option<**i32**> | Number of quotations to skip. |  |

### Return type

[**models::QuotationListResponse**](QuotationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## agent_send_invoice

> models::InvoiceResponse agent_send_invoice(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Invoice ID | [required] |

### Return type

[**models::InvoiceResponse**](InvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## agent_send_quotation

> models::QuotationResponse agent_send_quotation(id)


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

