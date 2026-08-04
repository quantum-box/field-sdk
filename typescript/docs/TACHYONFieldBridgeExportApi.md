# TACHYONFieldBridgeExportApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBridgeExportDefinition**](TACHYONFieldBridgeExportApi.md#createbridgeexportdefinition) | **POST** /v1/bridge/exports/definitions |  |
| [**exportBridgeCsv**](TACHYONFieldBridgeExportApi.md#exportbridgecsv) | **GET** /v1/bridge/exports/definitions/{definition_id}/csv |  |
| [**listBridgeExportDefinitions**](TACHYONFieldBridgeExportApi.md#listbridgeexportdefinitions) | **GET** /v1/bridge/exports/definitions |  |
| [**listBridgeExportObjects**](TACHYONFieldBridgeExportApi.md#listbridgeexportobjects) | **GET** /v1/bridge/exports/objects |  |



## createBridgeExportDefinition

> BridgeExportDefinitionResponse createBridgeExportDefinition(bridgeExportDefinitionRequest)



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeExportApi,
} from '@tachyon/field-sdk';
import type { CreateBridgeExportDefinitionRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeExportApi(config);

  const body = {
    // BridgeExportDefinitionRequest
    bridgeExportDefinitionRequest: ...,
  } satisfies CreateBridgeExportDefinitionRequest;

  try {
    const data = await api.createBridgeExportDefinition(body);
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
| **bridgeExportDefinitionRequest** | [BridgeExportDefinitionRequest](BridgeExportDefinitionRequest.md) |  | |

### Return type

[**BridgeExportDefinitionResponse**](BridgeExportDefinitionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Bridge export definition created |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportBridgeCsv

> exportBridgeCsv(definitionId)



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeExportApi,
} from '@tachyon/field-sdk';
import type { ExportBridgeCsvRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeExportApi(config);

  const body = {
    // string | Bridge export definition ID
    definitionId: definitionId_example,
  } satisfies ExportBridgeCsvRequest;

  try {
    const data = await api.exportBridgeCsv(body);
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
| **definitionId** | `string` | Bridge export definition ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rendered CSV for the export definition |  -  |
| **400** | Bad request |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBridgeExportDefinitions

> BridgeExportDefinitionListResponse listBridgeExportDefinitions()



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeExportApi,
} from '@tachyon/field-sdk';
import type { ListBridgeExportDefinitionsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeExportApi(config);

  try {
    const data = await api.listBridgeExportDefinitions();
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

[**BridgeExportDefinitionListResponse**](BridgeExportDefinitionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bridge export definition list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBridgeExportObjects

> BridgeExportObjectListResponse listBridgeExportObjects()



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeExportApi,
} from '@tachyon/field-sdk';
import type { ListBridgeExportObjectsRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeExportApi(config);

  try {
    const data = await api.listBridgeExportObjects();
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

[**BridgeExportObjectListResponse**](BridgeExportObjectListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Exportable bridge source objects and their fields |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

