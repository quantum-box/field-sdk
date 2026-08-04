# TACHYONFieldBillingAccountsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addOperator**](TACHYONFieldBillingAccountsApi.md#addoperatoroperation) | **POST** /v1/field/billing-accounts/{id}/operators | &#x60;POST /v1/field/billing-accounts/{id}/operators&#x60; — add an operator to a billing account. |
| [**createBillingAccount**](TACHYONFieldBillingAccountsApi.md#createbillingaccountoperation) | **POST** /v1/field/billing-accounts | &#x60;POST /v1/field/billing-accounts&#x60; — create a new billing account. |
| [**getBillingAccount**](TACHYONFieldBillingAccountsApi.md#getbillingaccount) | **GET** /v1/field/billing-accounts/{id} | &#x60;GET /v1/field/billing-accounts/{id}&#x60; — get a single billing account. |
| [**listBillingAccounts**](TACHYONFieldBillingAccountsApi.md#listbillingaccounts) | **GET** /v1/field/billing-accounts | &#x60;GET /v1/field/billing-accounts&#x60; — list all billing accounts. |
| [**listOperators**](TACHYONFieldBillingAccountsApi.md#listoperators) | **GET** /v1/field/billing-accounts/{id}/operators | &#x60;GET /v1/field/billing-accounts/{id}/operators&#x60; — list operators linked to a billing account. |
| [**removeOperator**](TACHYONFieldBillingAccountsApi.md#removeoperator) | **DELETE** /v1/field/billing-accounts/{id}/operators/{operator_id} | &#x60;DELETE /v1/field/billing-accounts/{id}/operators/ {operator_id}&#x60; — remove an operator from a billing account. |
| [**updateBillingAccount**](TACHYONFieldBillingAccountsApi.md#updatebillingaccountoperation) | **PUT** /v1/field/billing-accounts/{id} | &#x60;PUT /v1/field/billing-accounts/{id}&#x60; — update a billing account. |



## addOperator

> OperatorBillingAccountResponse addOperator(id, addOperatorRequest)

&#x60;POST /v1/field/billing-accounts/{id}/operators&#x60; — add an operator to a billing account.

### Example

```ts
import {
  Configuration,
  TACHYONFieldBillingAccountsApi,
} from '@tachyon/field-sdk';
import type { AddOperatorOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBillingAccountsApi(config);

  const body = {
    // string | Billing account ID
    id: id_example,
    // AddOperatorRequest
    addOperatorRequest: ...,
  } satisfies AddOperatorOperationRequest;

  try {
    const data = await api.addOperator(body);
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
| **id** | `string` | Billing account ID | [Defaults to `undefined`] |
| **addOperatorRequest** | [AddOperatorRequest](AddOperatorRequest.md) |  | |

### Return type

[**OperatorBillingAccountResponse**](OperatorBillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Operator added |  -  |
| **400** | Bad request |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBillingAccount

> BillingAccountResponse createBillingAccount(createBillingAccountRequest)

&#x60;POST /v1/field/billing-accounts&#x60; — create a new billing account.

### Example

```ts
import {
  Configuration,
  TACHYONFieldBillingAccountsApi,
} from '@tachyon/field-sdk';
import type { CreateBillingAccountOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBillingAccountsApi(config);

  const body = {
    // CreateBillingAccountRequest
    createBillingAccountRequest: ...,
  } satisfies CreateBillingAccountOperationRequest;

  try {
    const data = await api.createBillingAccount(body);
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
| **createBillingAccountRequest** | [CreateBillingAccountRequest](CreateBillingAccountRequest.md) |  | |

### Return type

[**BillingAccountResponse**](BillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Billing account created |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBillingAccount

> BillingAccountResponse getBillingAccount(id)

&#x60;GET /v1/field/billing-accounts/{id}&#x60; — get a single billing account.

### Example

```ts
import {
  Configuration,
  TACHYONFieldBillingAccountsApi,
} from '@tachyon/field-sdk';
import type { GetBillingAccountRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBillingAccountsApi(config);

  const body = {
    // string | Billing account ID
    id: id_example,
  } satisfies GetBillingAccountRequest;

  try {
    const data = await api.getBillingAccount(body);
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
| **id** | `string` | Billing account ID | [Defaults to `undefined`] |

### Return type

[**BillingAccountResponse**](BillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Billing account detail |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBillingAccounts

> Array&lt;BillingAccountResponse&gt; listBillingAccounts()

&#x60;GET /v1/field/billing-accounts&#x60; — list all billing accounts.

### Example

```ts
import {
  Configuration,
  TACHYONFieldBillingAccountsApi,
} from '@tachyon/field-sdk';
import type { ListBillingAccountsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBillingAccountsApi(config);

  try {
    const data = await api.listBillingAccounts();
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

[**Array&lt;BillingAccountResponse&gt;**](BillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Billing account list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOperators

> Array&lt;OperatorBillingAccountResponse&gt; listOperators(id)

&#x60;GET /v1/field/billing-accounts/{id}/operators&#x60; — list operators linked to a billing account.

### Example

```ts
import {
  Configuration,
  TACHYONFieldBillingAccountsApi,
} from '@tachyon/field-sdk';
import type { ListOperatorsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBillingAccountsApi(config);

  const body = {
    // string | Billing account ID
    id: id_example,
  } satisfies ListOperatorsRequest;

  try {
    const data = await api.listOperators(body);
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
| **id** | `string` | Billing account ID | [Defaults to `undefined`] |

### Return type

[**Array&lt;OperatorBillingAccountResponse&gt;**](OperatorBillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operator list |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeOperator

> MessageResponse removeOperator(id, operatorId)

&#x60;DELETE /v1/field/billing-accounts/{id}/operators/ {operator_id}&#x60; — remove an operator from a billing account.

### Example

```ts
import {
  Configuration,
  TACHYONFieldBillingAccountsApi,
} from '@tachyon/field-sdk';
import type { RemoveOperatorRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBillingAccountsApi(config);

  const body = {
    // string | Billing account ID
    id: id_example,
    // string | Operator (tenant) ID to remove
    operatorId: operatorId_example,
  } satisfies RemoveOperatorRequest;

  try {
    const data = await api.removeOperator(body);
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
| **id** | `string` | Billing account ID | [Defaults to `undefined`] |
| **operatorId** | `string` | Operator (tenant) ID to remove | [Defaults to `undefined`] |

### Return type

[**MessageResponse**](MessageResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operator removed |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateBillingAccount

> BillingAccountResponse updateBillingAccount(id, updateBillingAccountRequest)

&#x60;PUT /v1/field/billing-accounts/{id}&#x60; — update a billing account.

### Example

```ts
import {
  Configuration,
  TACHYONFieldBillingAccountsApi,
} from '@tachyon/field-sdk';
import type { UpdateBillingAccountOperationRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBillingAccountsApi(config);

  const body = {
    // string | Billing account ID
    id: id_example,
    // UpdateBillingAccountRequest
    updateBillingAccountRequest: ...,
  } satisfies UpdateBillingAccountOperationRequest;

  try {
    const data = await api.updateBillingAccount(body);
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
| **id** | `string` | Billing account ID | [Defaults to `undefined`] |
| **updateBillingAccountRequest** | [UpdateBillingAccountRequest](UpdateBillingAccountRequest.md) |  | |

### Return type

[**BillingAccountResponse**](BillingAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Billing account updated |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

