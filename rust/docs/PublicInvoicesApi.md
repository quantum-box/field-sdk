# \PublicInvoicesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirm_public_invoice_payment**](PublicInvoicesApi.md#confirm_public_invoice_payment) | **POST** /v1/public/invoices/{tenant_id}/{id}/payment-confirmation | 
[**confirm_short_public_invoice_payment**](PublicInvoicesApi.md#confirm_short_public_invoice_payment) | **POST** /v1/public/invoices/{id}/payment-confirmation | 
[**create_public_invoice_checkout**](PublicInvoicesApi.md#create_public_invoice_checkout) | **POST** /v1/public/invoices/{tenant_id}/{id}/checkout | 
[**create_public_invoice_payment_intent**](PublicInvoicesApi.md#create_public_invoice_payment_intent) | **POST** /v1/public/invoices/{tenant_id}/{id}/payment-intent | 
[**create_short_public_invoice_checkout**](PublicInvoicesApi.md#create_short_public_invoice_checkout) | **POST** /v1/public/invoices/{id}/checkout | 
[**create_short_public_invoice_payment_intent**](PublicInvoicesApi.md#create_short_public_invoice_payment_intent) | **POST** /v1/public/invoices/{id}/payment-intent | 
[**get_public_invoice**](PublicInvoicesApi.md#get_public_invoice) | **GET** /v1/public/invoices/{tenant_id}/{id} | 
[**get_public_invoice_stripe_publishable_key**](PublicInvoicesApi.md#get_public_invoice_stripe_publishable_key) | **GET** /v1/public/invoices/{tenant_id}/{id}/stripe-publishable-key | 
[**get_short_public_invoice**](PublicInvoicesApi.md#get_short_public_invoice) | **GET** /v1/public/invoices/{id} | 
[**get_short_public_invoice_stripe_publishable_key**](PublicInvoicesApi.md#get_short_public_invoice_stripe_publishable_key) | **GET** /v1/public/invoices/{id}/stripe-publishable-key | 



## confirm_public_invoice_payment

> models::PublicInvoicePaymentConfirmationResponse confirm_public_invoice_payment(tenant_id, id, public_invoice_payment_confirmation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** |  | [required] |
**id** | **String** |  | [required] |
**public_invoice_payment_confirmation_request** | [**PublicInvoicePaymentConfirmationRequest**](PublicInvoicePaymentConfirmationRequest.md) |  | [required] |

### Return type

[**models::PublicInvoicePaymentConfirmationResponse**](PublicInvoicePaymentConfirmationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## confirm_short_public_invoice_payment

> models::PublicInvoicePaymentConfirmationResponse confirm_short_public_invoice_payment(id, public_invoice_payment_confirmation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**public_invoice_payment_confirmation_request** | [**PublicInvoicePaymentConfirmationRequest**](PublicInvoicePaymentConfirmationRequest.md) |  | [required] |

### Return type

[**models::PublicInvoicePaymentConfirmationResponse**](PublicInvoicePaymentConfirmationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_public_invoice_checkout

> models::PublicInvoiceCheckoutResponse create_public_invoice_checkout(tenant_id, id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** |  | [required] |
**id** | **String** |  | [required] |

### Return type

[**models::PublicInvoiceCheckoutResponse**](PublicInvoiceCheckoutResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_public_invoice_payment_intent

> models::PublicInvoicePaymentIntentResponse create_public_invoice_payment_intent(tenant_id, id, api_key, public_api_key)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** |  | [required] |
**id** | **String** |  | [required] |
**api_key** | Option<**String**> | Optional public API key (legacy) |  |
**public_api_key** | Option<**String**> | Optional public API key |  |

### Return type

[**models::PublicInvoicePaymentIntentResponse**](PublicInvoicePaymentIntentResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_short_public_invoice_checkout

> models::PublicInvoiceCheckoutResponse create_short_public_invoice_checkout(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**models::PublicInvoiceCheckoutResponse**](PublicInvoiceCheckoutResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_short_public_invoice_payment_intent

> models::PublicInvoicePaymentIntentResponse create_short_public_invoice_payment_intent(id, api_key, public_api_key)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**api_key** | Option<**String**> | Optional public API key (legacy) |  |
**public_api_key** | Option<**String**> | Optional public API key |  |

### Return type

[**models::PublicInvoicePaymentIntentResponse**](PublicInvoicePaymentIntentResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_public_invoice

> models::PublicInvoiceResponse get_public_invoice(tenant_id, id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** |  | [required] |
**id** | **String** |  | [required] |

### Return type

[**models::PublicInvoiceResponse**](PublicInvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_public_invoice_stripe_publishable_key

> models::PublicInvoiceStripePublishableKeyResponse get_public_invoice_stripe_publishable_key(tenant_id, id, api_key, public_api_key)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tenant_id** | **String** |  | [required] |
**id** | **String** |  | [required] |
**api_key** | Option<**String**> | Optional public API key (legacy) |  |
**public_api_key** | Option<**String**> | Optional public API key |  |

### Return type

[**models::PublicInvoiceStripePublishableKeyResponse**](PublicInvoiceStripePublishableKeyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_short_public_invoice

> models::PublicInvoiceResponse get_short_public_invoice(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**models::PublicInvoiceResponse**](PublicInvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_short_public_invoice_stripe_publishable_key

> models::PublicInvoiceStripePublishableKeyResponse get_short_public_invoice_stripe_publishable_key(id, api_key, public_api_key)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**api_key** | Option<**String**> | Optional public API key (legacy) |  |
**public_api_key** | Option<**String**> | Optional public API key |  |

### Return type

[**models::PublicInvoiceStripePublishableKeyResponse**](PublicInvoiceStripePublishableKeyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

