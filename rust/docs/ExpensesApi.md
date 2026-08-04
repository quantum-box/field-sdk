# \ExpensesApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve_expense**](ExpensesApi.md#approve_expense) | **POST** /v1/erp/expenses/{id}/approve | 
[**create_category**](ExpensesApi.md#create_category) | **POST** /v1/erp/expense-categories | 
[**create_expense**](ExpensesApi.md#create_expense) | **POST** /v1/erp/expenses | 
[**delete_expense**](ExpensesApi.md#delete_expense) | **DELETE** /v1/erp/expenses/{id} | 
[**get_expense**](ExpensesApi.md#get_expense) | **GET** /v1/erp/expenses/{id} | 
[**list_categories**](ExpensesApi.md#list_categories) | **GET** /v1/erp/expense-categories | 
[**list_expenses**](ExpensesApi.md#list_expenses) | **GET** /v1/erp/expenses | 
[**reject_expense**](ExpensesApi.md#reject_expense) | **POST** /v1/erp/expenses/{id}/reject | 
[**update_category**](ExpensesApi.md#update_category) | **PATCH** /v1/erp/expense-categories/{id} | 
[**update_expense**](ExpensesApi.md#update_expense) | **PATCH** /v1/erp/expenses/{id} | 



## approve_expense

> models::ExpenseResponse approve_expense(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Expense ID | [required] |

### Return type

[**models::ExpenseResponse**](ExpenseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_category

> models::ExpenseCategoryResponse create_category(upsert_category_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**upsert_category_request** | [**UpsertCategoryRequest**](UpsertCategoryRequest.md) |  | [required] |

### Return type

[**models::ExpenseCategoryResponse**](ExpenseCategoryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_expense

> models::ExpenseResponse create_expense(create_expense_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_expense_request** | [**CreateExpenseRequest**](CreateExpenseRequest.md) |  | [required] |

### Return type

[**models::ExpenseResponse**](ExpenseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_expense

> delete_expense(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Expense ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_expense

> models::ExpenseResponse get_expense(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Expense ID | [required] |

### Return type

[**models::ExpenseResponse**](ExpenseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_categories

> models::ExpenseCategoryListResponse list_categories()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ExpenseCategoryListResponse**](ExpenseCategoryListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_expenses

> models::ExpenseListResponse list_expenses(status, category_id, from_date, to_date, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> |  |  |
**category_id** | Option<**String**> |  |  |
**from_date** | Option<**String**> |  |  |
**to_date** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::ExpenseListResponse**](ExpenseListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## reject_expense

> models::ExpenseResponse reject_expense(id, reject_expense_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Expense ID | [required] |
**reject_expense_request** | [**RejectExpenseRequest**](RejectExpenseRequest.md) |  | [required] |

### Return type

[**models::ExpenseResponse**](ExpenseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_category

> models::ExpenseCategoryResponse update_category(id, upsert_category_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Expense category ID | [required] |
**upsert_category_request** | [**UpsertCategoryRequest**](UpsertCategoryRequest.md) |  | [required] |

### Return type

[**models::ExpenseCategoryResponse**](ExpenseCategoryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_expense

> models::ExpenseResponse update_expense(id, update_expense_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Expense ID | [required] |
**update_expense_request** | [**UpdateExpenseRequest**](UpdateExpenseRequest.md) |  | [required] |

### Return type

[**models::ExpenseResponse**](ExpenseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

