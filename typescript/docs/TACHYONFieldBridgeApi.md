# TACHYONFieldBridgeApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyzeBridgeTabular**](TACHYONFieldBridgeApi.md#analyzebridgetabular) | **POST** /v1/bridge/tabular/analyze |  |
| [**createBridgeDefinition**](TACHYONFieldBridgeApi.md#createbridgedefinition) | **POST** /v1/bridge/definitions |  |
| [**executeBridgeRun**](TACHYONFieldBridgeApi.md#executebridgerun) | **POST** /v1/bridge/runs/{run_id}/execute |  |
| [**getBridgeRun**](TACHYONFieldBridgeApi.md#getbridgerun) | **GET** /v1/bridge/runs/{run_id} |  |
| [**invokeBridgeAction**](TACHYONFieldBridgeApi.md#invokebridgeaction) | **POST** /v1/bridge/actions/{action} |  |
| [**listBridgeDefinitions**](TACHYONFieldBridgeApi.md#listbridgedefinitions) | **GET** /v1/bridge/definitions |  |
| [**listBridgeRuns**](TACHYONFieldBridgeApi.md#listbridgeruns) | **GET** /v1/bridge/runs |  |
| [**previewBridgeFile**](TACHYONFieldBridgeApi.md#previewbridgefile) | **POST** /v1/bridge/definitions/{definition_id}/runs/preview-file |  |
| [**previewBridgeRun**](TACHYONFieldBridgeApi.md#previewbridgerun) | **POST** /v1/bridge/definitions/{definition_id}/runs/preview |  |



## analyzeBridgeTabular

> TabularAnalyzeResponse analyzeBridgeTabular(file, context, headerRow, idempotencyKey, mappingMode, mappingProposal, sheetName, targetSchema)



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeApi,
} from '@tachyon-sdk/field';
import type { AnalyzeBridgeTabularRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeApi(config);

  const body = {
    // Blob
    file: BINARY_DATA_HERE,
    // string (optional)
    context: context_example,
    // number (optional)
    headerRow: 56,
    // string (optional)
    idempotencyKey: idempotencyKey_example,
    // string (optional)
    mappingMode: mappingMode_example,
    // string (optional)
    mappingProposal: mappingProposal_example,
    // string (optional)
    sheetName: sheetName_example,
    // string (optional)
    targetSchema: targetSchema_example,
  } satisfies AnalyzeBridgeTabularRequest;

  try {
    const data = await api.analyzeBridgeTabular(body);
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
| **file** | `Blob` |  | [Defaults to `undefined`] |
| **context** | `string` |  | [Optional] [Defaults to `undefined`] |
| **headerRow** | `number` |  | [Optional] [Defaults to `undefined`] |
| **idempotencyKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **mappingMode** | `string` |  | [Optional] [Defaults to `undefined`] |
| **mappingProposal** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sheetName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **targetSchema** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TabularAnalyzeResponse**](TabularAnalyzeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Parsed table and mapping candidates |  -  |
| **400** | Invalid file or mapping request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBridgeDefinition

> BridgeDefinitionResponse createBridgeDefinition(bridgeDefinitionRequest)



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeApi,
} from '@tachyon-sdk/field';
import type { CreateBridgeDefinitionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeApi(config);

  const body = {
    // BridgeDefinitionRequest
    bridgeDefinitionRequest: ...,
  } satisfies CreateBridgeDefinitionRequest;

  try {
    const data = await api.createBridgeDefinition(body);
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
| **bridgeDefinitionRequest** | [BridgeDefinitionRequest](BridgeDefinitionRequest.md) |  | |

### Return type

[**BridgeDefinitionResponse**](BridgeDefinitionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Bridge definition created |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## executeBridgeRun

> BridgeRunResponse executeBridgeRun(runId)



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeApi,
} from '@tachyon-sdk/field';
import type { ExecuteBridgeRunRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeApi(config);

  const body = {
    // string | Bridge run ID
    runId: runId_example,
  } satisfies ExecuteBridgeRunRequest;

  try {
    const data = await api.executeBridgeRun(body);
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
| **runId** | `string` | Bridge run ID | [Defaults to `undefined`] |

### Return type

[**BridgeRunResponse**](BridgeRunResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bridge run executed and draft targets created |  -  |
| **400** | Bad request |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Execution lease conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBridgeRun

> BridgeRunResponse getBridgeRun(runId)



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeApi,
} from '@tachyon-sdk/field';
import type { GetBridgeRunRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeApi(config);

  const body = {
    // string | Bridge run ID
    runId: runId_example,
  } satisfies GetBridgeRunRequest;

  try {
    const data = await api.getBridgeRun(body);
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
| **runId** | `string` | Bridge run ID | [Defaults to `undefined`] |

### Return type

[**BridgeRunResponse**](BridgeRunResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bridge run detail |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## invokeBridgeAction

> BridgeActionResponse invokeBridgeAction(action, bridgeActionRequest)



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeApi,
} from '@tachyon-sdk/field';
import type { InvokeBridgeActionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeApi(config);

  const body = {
    // string | Bridge action name
    action: action_example,
    // BridgeActionRequest
    bridgeActionRequest: ...,
  } satisfies InvokeBridgeActionRequest;

  try {
    const data = await api.invokeBridgeAction(body);
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
| **action** | `string` | Bridge action name | [Defaults to `undefined`] |
| **bridgeActionRequest** | [BridgeActionRequest](BridgeActionRequest.md) |  | |

### Return type

[**BridgeActionResponse**](BridgeActionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bridge action availability |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBridgeDefinitions

> BridgeDefinitionListResponse listBridgeDefinitions()



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeApi,
} from '@tachyon-sdk/field';
import type { ListBridgeDefinitionsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeApi(config);

  try {
    const data = await api.listBridgeDefinitions();
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

[**BridgeDefinitionListResponse**](BridgeDefinitionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bridge definition list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBridgeRuns

> BridgeRunListResponse listBridgeRuns(limit, offset)



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeApi,
} from '@tachyon-sdk/field';
import type { ListBridgeRunsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeApi(config);

  const body = {
    // number | Page size (1-100) (optional)
    limit: 56,
    // number | Zero-based history offset (optional)
    offset: 789,
  } satisfies ListBridgeRunsRequest;

  try {
    const data = await api.listBridgeRuns(body);
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
| **limit** | `number` | Page size (1-100) | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Zero-based history offset | [Optional] [Defaults to `undefined`] |

### Return type

[**BridgeRunListResponse**](BridgeRunListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tenant-scoped Bridge run history |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewBridgeFile

> BridgeRunResponse previewBridgeFile(definitionId, file, context, headerRow, idempotencyKey, mappingMode, mappingProposal, sheetName, targetSchema)



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeApi,
} from '@tachyon-sdk/field';
import type { PreviewBridgeFileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeApi(config);

  const body = {
    // string | Bridge definition ID
    definitionId: definitionId_example,
    // Blob
    file: BINARY_DATA_HERE,
    // string (optional)
    context: context_example,
    // number (optional)
    headerRow: 56,
    // string (optional)
    idempotencyKey: idempotencyKey_example,
    // string (optional)
    mappingMode: mappingMode_example,
    // string (optional)
    mappingProposal: mappingProposal_example,
    // string (optional)
    sheetName: sheetName_example,
    // string (optional)
    targetSchema: targetSchema_example,
  } satisfies PreviewBridgeFileRequest;

  try {
    const data = await api.previewBridgeFile(body);
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
| **definitionId** | `string` | Bridge definition ID | [Defaults to `undefined`] |
| **file** | `Blob` |  | [Defaults to `undefined`] |
| **context** | `string` |  | [Optional] [Defaults to `undefined`] |
| **headerRow** | `number` |  | [Optional] [Defaults to `undefined`] |
| **idempotencyKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **mappingMode** | `string` |  | [Optional] [Defaults to `undefined`] |
| **mappingProposal** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sheetName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **targetSchema** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**BridgeRunResponse**](BridgeRunResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Existing idempotent Bridge preview |  -  |
| **201** | Bridge file preview created |  -  |
| **400** | Invalid file or definition |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewBridgeRun

> BridgeRunResponse previewBridgeRun(definitionId, bridgeRunPreviewRequest)



### Example

```ts
import {
  Configuration,
  TACHYONFieldBridgeApi,
} from '@tachyon-sdk/field';
import type { PreviewBridgeRunRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldBridgeApi(config);

  const body = {
    // string | Bridge definition ID
    definitionId: definitionId_example,
    // BridgeRunPreviewRequest
    bridgeRunPreviewRequest: ...,
  } satisfies PreviewBridgeRunRequest;

  try {
    const data = await api.previewBridgeRun(body);
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
| **definitionId** | `string` | Bridge definition ID | [Defaults to `undefined`] |
| **bridgeRunPreviewRequest** | [BridgeRunPreviewRequest](BridgeRunPreviewRequest.md) |  | |

### Return type

[**BridgeRunResponse**](BridgeRunResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Existing idempotent Bridge run preview |  -  |
| **201** | Bridge run preview created |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

