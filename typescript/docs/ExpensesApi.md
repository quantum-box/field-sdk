# ExpensesApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**approveExpense**](ExpensesApi.md#approveexpense) | **POST** /v1/erp/expenses/{id}/approve |  |
| [**createCategory**](ExpensesApi.md#createcategory) | **POST** /v1/erp/expense-categories |  |
| [**createExpense**](ExpensesApi.md#createexpenseoperation) | **POST** /v1/erp/expenses |  |
| [**deleteExpense**](ExpensesApi.md#deleteexpense) | **DELETE** /v1/erp/expenses/{id} |  |
| [**getExpense**](ExpensesApi.md#getexpense) | **GET** /v1/erp/expenses/{id} |  |
| [**listCategories**](ExpensesApi.md#listcategories) | **GET** /v1/erp/expense-categories |  |
| [**listExpenses**](ExpensesApi.md#listexpenses) | **GET** /v1/erp/expenses |  |
| [**rejectExpense**](ExpensesApi.md#rejectexpenseoperation) | **POST** /v1/erp/expenses/{id}/reject |  |
| [**updateCategory**](ExpensesApi.md#updatecategory) | **PATCH** /v1/erp/expense-categories/{id} |  |
| [**updateExpense**](ExpensesApi.md#updateexpenseoperation) | **PATCH** /v1/erp/expenses/{id} |  |



## approveExpense

> ExpenseResponse approveExpense(id)



### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@tachyon-sdk/field';
import type { ApproveExpenseRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExpensesApi(config);

  const body = {
    // string | Expense ID
    id: id_example,
  } satisfies ApproveExpenseRequest;

  try {
    const data = await api.approveExpense(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Expense ID | [Defaults to `undefined`] |

### Return type

[**ExpenseResponse**](ExpenseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCategory

> ExpenseCategoryResponse createCategory(upsertCategoryRequest)



### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@tachyon-sdk/field';
import type { CreateCategoryRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExpensesApi(config);

  const body = {
    // UpsertCategoryRequest
    upsertCategoryRequest: ...,
  } satisfies CreateCategoryRequest;

  try {
    const data = await api.createCategory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **upsertCategoryRequest** | [UpsertCategoryRequest](UpsertCategoryRequest.md) |  | |

### Return type

[**ExpenseCategoryResponse**](ExpenseCategoryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createExpense

> ExpenseResponse createExpense(createExpenseRequest)



### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@tachyon-sdk/field';
import type { CreateExpenseOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExpensesApi(config);

  const body = {
    // CreateExpenseRequest
    createExpenseRequest: ...,
  } satisfies CreateExpenseOperationRequest;

  try {
    const data = await api.createExpense(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createExpenseRequest** | [CreateExpenseRequest](CreateExpenseRequest.md) |  | |

### Return type

[**ExpenseResponse**](ExpenseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteExpense

> deleteExpense(id)



### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@tachyon-sdk/field';
import type { DeleteExpenseRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExpensesApi(config);

  const body = {
    // string | Expense ID
    id: id_example,
  } satisfies DeleteExpenseRequest;

  try {
    const data = await api.deleteExpense(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Expense ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getExpense

> ExpenseResponse getExpense(id)



### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@tachyon-sdk/field';
import type { GetExpenseRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExpensesApi(config);

  const body = {
    // string | Expense ID
    id: id_example,
  } satisfies GetExpenseRequest;

  try {
    const data = await api.getExpense(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Expense ID | [Defaults to `undefined`] |

### Return type

[**ExpenseResponse**](ExpenseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCategories

> ExpenseCategoryListResponse listCategories()



### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@tachyon-sdk/field';
import type { ListCategoriesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExpensesApi(config);

  try {
    const data = await api.listCategories();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ExpenseCategoryListResponse**](ExpenseCategoryListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listExpenses

> ExpenseListResponse listExpenses(status, categoryId, fromDate, toDate, limit, offset)



### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@tachyon-sdk/field';
import type { ListExpensesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExpensesApi(config);

  const body = {
    // string (optional)
    status: status_example,
    // string (optional)
    categoryId: categoryId_example,
    // string (optional)
    fromDate: fromDate_example,
    // string (optional)
    toDate: toDate_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListExpensesRequest;

  try {
    const data = await api.listExpenses(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **categoryId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **fromDate** | `string` |  | [Optional] [Defaults to `undefined`] |
| **toDate** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ExpenseListResponse**](ExpenseListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rejectExpense

> ExpenseResponse rejectExpense(id, rejectExpenseRequest)



### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@tachyon-sdk/field';
import type { RejectExpenseOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExpensesApi(config);

  const body = {
    // string | Expense ID
    id: id_example,
    // RejectExpenseRequest
    rejectExpenseRequest: ...,
  } satisfies RejectExpenseOperationRequest;

  try {
    const data = await api.rejectExpense(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Expense ID | [Defaults to `undefined`] |
| **rejectExpenseRequest** | [RejectExpenseRequest](RejectExpenseRequest.md) |  | |

### Return type

[**ExpenseResponse**](ExpenseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCategory

> ExpenseCategoryResponse updateCategory(id, upsertCategoryRequest)



### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@tachyon-sdk/field';
import type { UpdateCategoryRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExpensesApi(config);

  const body = {
    // string | Expense category ID
    id: id_example,
    // UpsertCategoryRequest
    upsertCategoryRequest: ...,
  } satisfies UpdateCategoryRequest;

  try {
    const data = await api.updateCategory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Expense category ID | [Defaults to `undefined`] |
| **upsertCategoryRequest** | [UpsertCategoryRequest](UpsertCategoryRequest.md) |  | |

### Return type

[**ExpenseCategoryResponse**](ExpenseCategoryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateExpense

> ExpenseResponse updateExpense(id, updateExpenseRequest)



### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@tachyon-sdk/field';
import type { UpdateExpenseOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExpensesApi(config);

  const body = {
    // string | Expense ID
    id: id_example,
    // UpdateExpenseRequest
    updateExpenseRequest: ...,
  } satisfies UpdateExpenseOperationRequest;

  try {
    const data = await api.updateExpense(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Expense ID | [Defaults to `undefined`] |
| **updateExpenseRequest** | [UpdateExpenseRequest](UpdateExpenseRequest.md) |  | |

### Return type

[**ExpenseResponse**](ExpenseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

