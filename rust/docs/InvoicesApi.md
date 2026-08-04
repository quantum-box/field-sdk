# \InvoicesApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_invoice**](InvoicesApi.md#create_invoice) | **POST** /v1/invoices | 
[**delete_invoice**](InvoicesApi.md#delete_invoice) | **DELETE** /v1/invoices/{id} | 
[**fulfill_invoice**](InvoicesApi.md#fulfill_invoice) | **POST** /v1/invoices/{id}/fulfill | 
[**get_invoice**](InvoicesApi.md#get_invoice) | **GET** /v1/invoices/{id} | 
[**list_invoices**](InvoicesApi.md#list_invoices) | **GET** /v1/invoices | 
[**list_square_payment_reconciliations**](InvoicesApi.md#list_square_payment_reconciliations) | **GET** /v1/invoice-reconciliations/square-payments | 
[**reconcile_square_payment**](InvoicesApi.md#reconcile_square_payment) | **POST** /v1/invoice-reconciliations/square-payments/{square_payment_id}/reconcile | 
[**resend_invoice_payment_link**](InvoicesApi.md#resend_invoice_payment_link) | **POST** /v1/invoices/{id}/payment-link/resend | 
[**update_invoice**](InvoicesApi.md#update_invoice) | **PATCH** /v1/invoices/{id} | 
[**update_invoice_follow_up_status**](InvoicesApi.md#update_invoice_follow_up_status) | **POST** /v1/invoices/{id}/follow-up-status | 



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

> models::DeleteInvoiceResponse delete_invoice(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**models::DeleteInvoiceResponse**](DeleteInvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## fulfill_invoice

> models::InvoiceResponse fulfill_invoice(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

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
**id** | **String** |  | [required] |

### Return type

[**models::InvoiceResponse**](InvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_invoices

> models::InvoiceListResponse list_invoices()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::InvoiceListResponse**](InvoiceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_square_payment_reconciliations

> models::SquarePaymentReconciliationListResponse list_square_payment_reconciliations()


### Parameters

This endpoint does not need any parameter.

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
**square_payment_id** | **String** |  | [required] |
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
**id** | **String** |  | [required] |
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
**id** | **String** |  | [required] |
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
**id** | **String** |  | [required] |
**update_invoice_follow_up_status_request** | [**UpdateInvoiceFollowUpStatusRequest**](UpdateInvoiceFollowUpStatusRequest.md) |  | [required] |

### Return type

[**models::InvoiceResponse**](InvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

