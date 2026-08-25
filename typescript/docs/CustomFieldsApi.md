# CustomFieldsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCustomFieldDefinition**](CustomFieldsApi.md#createcustomfielddefinitionoperation) | **POST** /v1/erp/custom-fields/definitions |  |
| [**deleteCustomFieldDefinition**](CustomFieldsApi.md#deletecustomfielddefinition) | **DELETE** /v1/erp/custom-fields/definitions/{id} |  |
| [**getCustomFieldValues**](CustomFieldsApi.md#getcustomfieldvalues) | **GET** /v1/erp/custom-fields/values/{entity_type}/{entity_id} |  |
| [**listCustomFieldDefinitions**](CustomFieldsApi.md#listcustomfielddefinitions) | **GET** /v1/erp/custom-fields/definitions |  |
| [**setCustomFieldValues**](CustomFieldsApi.md#setcustomfieldvaluesoperation) | **PUT** /v1/erp/custom-fields/values/{entity_type}/{entity_id} |  |
| [**updateCustomFieldDefinition**](CustomFieldsApi.md#updatecustomfielddefinitionoperation) | **PUT** /v1/erp/custom-fields/definitions/{id} |  |



## createCustomFieldDefinition

> CustomFieldDefinitionResponse createCustomFieldDefinition(createCustomFieldDefinitionRequest)



### Example

```ts
import {
  Configuration,
  CustomFieldsApi,
} from '@tachyon-sdk/field';
import type { CreateCustomFieldDefinitionOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomFieldsApi(config);

  const body = {
    // CreateCustomFieldDefinitionRequest
    createCustomFieldDefinitionRequest: ...,
  } satisfies CreateCustomFieldDefinitionOperationRequest;

  try {
    const data = await api.createCustomFieldDefinition(body);
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
| **createCustomFieldDefinitionRequest** | [CreateCustomFieldDefinitionRequest](CreateCustomFieldDefinitionRequest.md) |  | |

### Return type

[**CustomFieldDefinitionResponse**](CustomFieldDefinitionResponse.md)

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


## deleteCustomFieldDefinition

> deleteCustomFieldDefinition(id)



### Example

```ts
import {
  Configuration,
  CustomFieldsApi,
} from '@tachyon-sdk/field';
import type { DeleteCustomFieldDefinitionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomFieldsApi(config);

  const body = {
    // string | Custom field definition ID
    id: id_example,
  } satisfies DeleteCustomFieldDefinitionRequest;

  try {
    const data = await api.deleteCustomFieldDefinition(body);
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
| **id** | `string` | Custom field definition ID | [Defaults to `undefined`] |

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


## getCustomFieldValues

> CustomFieldValuesResponse getCustomFieldValues(entityType, entityId)



### Example

```ts
import {
  Configuration,
  CustomFieldsApi,
} from '@tachyon-sdk/field';
import type { GetCustomFieldValuesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomFieldsApi(config);

  const body = {
    // string | Entity type the custom field values belong to (client/consumer/product/order/invoice/reservation/customer_subject)
    entityType: entityType_example,
    // string | Entity ID the custom field values belong to
    entityId: entityId_example,
  } satisfies GetCustomFieldValuesRequest;

  try {
    const data = await api.getCustomFieldValues(body);
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
| **entityType** | `string` | Entity type the custom field values belong to (client/consumer/product/order/invoice/reservation/customer_subject) | [Defaults to `undefined`] |
| **entityId** | `string` | Entity ID the custom field values belong to | [Defaults to `undefined`] |

### Return type

[**CustomFieldValuesResponse**](CustomFieldValuesResponse.md)

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


## listCustomFieldDefinitions

> CustomFieldDefinitionListResponse listCustomFieldDefinitions(entityType, includeInactive)



### Example

```ts
import {
  Configuration,
  CustomFieldsApi,
} from '@tachyon-sdk/field';
import type { ListCustomFieldDefinitionsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomFieldsApi(config);

  const body = {
    // string | Filter by entity type (client/consumer/product/order/invoice/reservation/customer_subject) (optional)
    entityType: entityType_example,
    // boolean | Include soft-deleted definitions (default false) (optional)
    includeInactive: true,
  } satisfies ListCustomFieldDefinitionsRequest;

  try {
    const data = await api.listCustomFieldDefinitions(body);
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
| **entityType** | `string` | Filter by entity type (client/consumer/product/order/invoice/reservation/customer_subject) | [Optional] [Defaults to `undefined`] |
| **includeInactive** | `boolean` | Include soft-deleted definitions (default false) | [Optional] [Defaults to `undefined`] |

### Return type

[**CustomFieldDefinitionListResponse**](CustomFieldDefinitionListResponse.md)

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


## setCustomFieldValues

> CustomFieldValuesResponse setCustomFieldValues(entityType, entityId, setCustomFieldValuesRequest)



### Example

```ts
import {
  Configuration,
  CustomFieldsApi,
} from '@tachyon-sdk/field';
import type { SetCustomFieldValuesOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomFieldsApi(config);

  const body = {
    // string | Entity type the custom field values belong to (client/consumer/product/order/invoice/reservation/customer_subject)
    entityType: entityType_example,
    // string | Entity ID the custom field values belong to
    entityId: entityId_example,
    // SetCustomFieldValuesRequest
    setCustomFieldValuesRequest: ...,
  } satisfies SetCustomFieldValuesOperationRequest;

  try {
    const data = await api.setCustomFieldValues(body);
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
| **entityType** | `string` | Entity type the custom field values belong to (client/consumer/product/order/invoice/reservation/customer_subject) | [Defaults to `undefined`] |
| **entityId** | `string` | Entity ID the custom field values belong to | [Defaults to `undefined`] |
| **setCustomFieldValuesRequest** | [SetCustomFieldValuesRequest](SetCustomFieldValuesRequest.md) |  | |

### Return type

[**CustomFieldValuesResponse**](CustomFieldValuesResponse.md)

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


## updateCustomFieldDefinition

> CustomFieldDefinitionResponse updateCustomFieldDefinition(id, updateCustomFieldDefinitionRequest)



### Example

```ts
import {
  Configuration,
  CustomFieldsApi,
} from '@tachyon-sdk/field';
import type { UpdateCustomFieldDefinitionOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomFieldsApi(config);

  const body = {
    // string | Custom field definition ID
    id: id_example,
    // UpdateCustomFieldDefinitionRequest
    updateCustomFieldDefinitionRequest: ...,
  } satisfies UpdateCustomFieldDefinitionOperationRequest;

  try {
    const data = await api.updateCustomFieldDefinition(body);
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
| **id** | `string` | Custom field definition ID | [Defaults to `undefined`] |
| **updateCustomFieldDefinitionRequest** | [UpdateCustomFieldDefinitionRequest](UpdateCustomFieldDefinitionRequest.md) |  | |

### Return type

[**CustomFieldDefinitionResponse**](CustomFieldDefinitionResponse.md)

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

