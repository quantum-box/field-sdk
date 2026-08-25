# GolfCourseExtensionApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyzeGolfCourseTabular**](GolfCourseExtensionApi.md#analyzegolfcoursetabular) | **POST** /v1/erp/extensions/golf-course/tabular/analyze |  |



## analyzeGolfCourseTabular

> TabularAnalyzeResponse analyzeGolfCourseTabular(file, context, headerRow, idempotencyKey, mappingMode, mappingProposal, sheetName, targetSchema)



### Example

```ts
import {
  Configuration,
  GolfCourseExtensionApi,
} from '@tachyon-sdk/field';
import type { AnalyzeGolfCourseTabularRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GolfCourseExtensionApi(config);

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
  } satisfies AnalyzeGolfCourseTabularRequest;

  try {
    const data = await api.analyzeGolfCourseTabular(body);
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
| **200** | Parsed golf source table and mapping candidates |  -  |
| **400** | Invalid file or mapping request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

