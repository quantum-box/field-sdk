# \TachyonFieldBillingAccountsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_operator**](TachyonFieldBillingAccountsApi.md#add_operator) | **POST** /v1/field/billing-accounts/{id}/operators | `POST /v1/field/billing-accounts/{id}/operators` — add an operator to a billing account.
[**create_billing_account**](TachyonFieldBillingAccountsApi.md#create_billing_account) | **POST** /v1/field/billing-accounts | `POST /v1/field/billing-accounts` — create a new billing account.
[**get_billing_account**](TachyonFieldBillingAccountsApi.md#get_billing_account) | **GET** /v1/field/billing-accounts/{id} | `GET /v1/field/billing-accounts/{id}` — get a single billing account.
[**list_billing_accounts**](TachyonFieldBillingAccountsApi.md#list_billing_accounts) | **GET** /v1/field/billing-accounts | `GET /v1/field/billing-accounts` — list all billing accounts.
[**list_operators**](TachyonFieldBillingAccountsApi.md#list_operators) | **GET** /v1/field/billing-accounts/{id}/operators | `GET /v1/field/billing-accounts/{id}/operators` — list operators linked to a billing account.
[**remove_operator**](TachyonFieldBillingAccountsApi.md#remove_operator) | **DELETE** /v1/field/billing-accounts/{id}/operators/{operator_id} | `DELETE /v1/field/billing-accounts/{id}/operators/ {operator_id}` — remove an operator from a billing account.
[**update_billing_account**](TachyonFieldBillingAccountsApi.md#update_billing_account) | **PUT** /v1/field/billing-accounts/{id} | `PUT /v1/field/billing-accounts/{id}` — update a billing account.



## add_operator

> models::OperatorBillingAccountResponse add_operator(id, add_operator_request)
`POST /v1/field/billing-accounts/{id}/operators` — add an operator to a billing account.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Billing account ID | [required] |
**add_operator_request** | [**AddOperatorRequest**](AddOperatorRequest.md) |  | [required] |

### Return type

[**models::OperatorBillingAccountResponse**](OperatorBillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_billing_account

> models::BillingAccountResponse create_billing_account(create_billing_account_request)
`POST /v1/field/billing-accounts` — create a new billing account.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_billing_account_request** | [**CreateBillingAccountRequest**](CreateBillingAccountRequest.md) |  | [required] |

### Return type

[**models::BillingAccountResponse**](BillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_billing_account

> models::BillingAccountResponse get_billing_account(id)
`GET /v1/field/billing-accounts/{id}` — get a single billing account.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Billing account ID | [required] |

### Return type

[**models::BillingAccountResponse**](BillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_billing_accounts

> Vec<models::BillingAccountResponse> list_billing_accounts()
`GET /v1/field/billing-accounts` — list all billing accounts.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::BillingAccountResponse>**](BillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_operators

> Vec<models::OperatorBillingAccountResponse> list_operators(id)
`GET /v1/field/billing-accounts/{id}/operators` — list operators linked to a billing account.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Billing account ID | [required] |

### Return type

[**Vec<models::OperatorBillingAccountResponse>**](OperatorBillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## remove_operator

> models::MessageResponse remove_operator(id, operator_id)
`DELETE /v1/field/billing-accounts/{id}/operators/ {operator_id}` — remove an operator from a billing account.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Billing account ID | [required] |
**operator_id** | **String** | Operator (tenant) ID to remove | [required] |

### Return type

[**models::MessageResponse**](MessageResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_billing_account

> models::BillingAccountResponse update_billing_account(id, update_billing_account_request)
`PUT /v1/field/billing-accounts/{id}` — update a billing account.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Billing account ID | [required] |
**update_billing_account_request** | [**UpdateBillingAccountRequest**](UpdateBillingAccountRequest.md) |  | [required] |

### Return type

[**models::BillingAccountResponse**](BillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

