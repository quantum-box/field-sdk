# GolfCourseExtensionApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyzeGolfCourseTabular**](GolfCourseExtensionApi.md#analyzegolfcoursetabular) | **POST** /v1/erp/extensions/golf-course/tabular/analyze | Deprecated authorization-compatible alias of [&#x60;analyze_bridge_tabular&#x60;]. |



## analyzeGolfCourseTabular

> TabularAnalyzeResponse analyzeGolfCourseTabular(file, context, headerRow, idempotencyKey, mappingMode, mappingProposal, rotation, sheetName, targetSchema)

Deprecated authorization-compatible alias of [&#x60;analyze_bridge_tabular&#x60;].

Deprecated. Use POST /v1/bridge/tabular/analyze, which runs the same analyzer and requires field:PreviewBridgeRun. This alias exists only so CourseBoard can roll back to it, and is not removed because /v1/ endpoints are not deleted in place.

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
    // string | Clockwise degrees to turn a scanned PDF by before it is read: `0`, `90`, `180`, or `270`. (optional)
    rotation: rotation_example,
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
| **rotation** | `string` | Clockwise degrees to turn a scanned PDF by before it is read: &#x60;0&#x60;, &#x60;90&#x60;, &#x60;180&#x60;, or &#x60;270&#x60;. | [Optional] [Defaults to `undefined`] |
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

