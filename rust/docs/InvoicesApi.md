# \InvoicesApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_invoice**](InvoicesApi.md#create_invoice) | **POST** /v1/invoices | 
[**delete_invoice**](InvoicesApi.md#delete_invoice) | **DELETE** /v1/invoices/{id} | 
[**fulfill_invoice**](InvoicesApi.md#fulfill_invoice) | **POST** /v1/invoices/{id}/fulfill | 
[**get_invoice**](InvoicesApi.md#get_invoice) | **GET** /v1/invoices/{id} | 
[**get_invoice_void_eligibility**](InvoicesApi.md#get_invoice_void_eligibility) | **GET** /v1/invoices/{invoice_id}/void-eligibility | 
[**list_invoices**](InvoicesApi.md#list_invoices) | **GET** /v1/invoices | 
[**list_square_payment_reconciliations**](InvoicesApi.md#list_square_payment_reconciliations) | **GET** /v1/invoice-reconciliations/square-payments | 
[**reconcile_square_payment**](InvoicesApi.md#reconcile_square_payment) | **POST** /v1/invoice-reconciliations/square-payments/{square_payment_id}/reconcile | 
[**resend_invoice_payment_link**](InvoicesApi.md#resend_invoice_payment_link) | **POST** /v1/invoices/{id}/payment-link/resend | 
[**update_invoice**](InvoicesApi.md#update_invoice) | **PATCH** /v1/invoices/{id} | 
[**update_invoice_follow_up_status**](InvoicesApi.md#update_invoice_follow_up_status) | **POST** /v1/invoices/{id}/follow-up-status | 
[**void_invoice**](InvoicesApi.md#void_invoice) | **POST** /v1/invoices/{invoice_id}/void | 



## create_invoice

> models::InvoiceResponse create_invoice(create_invoice_request)


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


## delete_invoice

> delete_invoice(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Invoice ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## fulfill_invoice

> models::InvoiceResponse fulfill_invoice(id)


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


## get_invoice

> models::InvoiceResponse get_invoice(id)


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


## get_invoice_void_eligibility

> models::InvoiceVoidEligibilityResponse get_invoice_void_eligibility(invoice_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**invoice_id** | **String** | Invoice ID | [required] |

### Return type

[**models::InvoiceVoidEligibilityResponse**](InvoiceVoidEligibilityResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_invoices

> models::InvoiceListResponse list_invoices(status, client_id, source_type, source_id, reason, limit, offset)


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


## list_square_payment_reconciliations

> models::SquarePaymentReconciliationListResponse list_square_payment_reconciliations(status, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> | Filter by reconciliation status. |  |
**limit** | Option<**i32**> | Maximum number of reconciliations to return. |  |
**offset** | Option<**i32**> | Number of reconciliations to skip. |  |

### Return type

[**models::SquarePaymentReconciliationListResponse**](SquarePaymentReconciliationListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## reconcile_square_payment

> models::SquarePaymentReconciliationResponse reconcile_square_payment(square_payment_id, reconcile_square_payment_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**square_payment_id** | **String** | Square payment ID to reconcile | [required] |
**reconcile_square_payment_request** | [**ReconcileSquarePaymentRequest**](ReconcileSquarePaymentRequest.md) |  | [required] |

### Return type

[**models::SquarePaymentReconciliationResponse**](SquarePaymentReconciliationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## resend_invoice_payment_link

> models::InvoiceResponse resend_invoice_payment_link(id, resend_payment_link_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Invoice ID | [required] |
**resend_payment_link_request** | [**ResendPaymentLinkRequest**](ResendPaymentLinkRequest.md) |  | [required] |

### Return type

[**models::InvoiceResponse**](InvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_invoice

> models::InvoiceResponse update_invoice(id, update_invoice_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Invoice ID | [required] |
**update_invoice_request** | [**UpdateInvoiceRequest**](UpdateInvoiceRequest.md) |  | [required] |

### Return type

[**models::InvoiceResponse**](InvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_invoice_follow_up_status

> models::InvoiceResponse update_invoice_follow_up_status(id, update_invoice_follow_up_status_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Invoice ID | [required] |
**update_invoice_follow_up_status_request** | [**UpdateInvoiceFollowUpStatusRequest**](UpdateInvoiceFollowUpStatusRequest.md) |  | [required] |

### Return type

[**models::InvoiceResponse**](InvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## void_invoice

> models::VoidInvoiceResponse void_invoice(invoice_id, idempotency_key, void_invoice_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**invoice_id** | **String** | Invoice ID | [required] |
**idempotency_key** | **String** | Required retry key (1-128 bytes after trimming) | [required] |
**void_invoice_request** | [**VoidInvoiceRequest**](VoidInvoiceRequest.md) |  | [required] |

### Return type

[**models::VoidInvoiceResponse**](VoidInvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

