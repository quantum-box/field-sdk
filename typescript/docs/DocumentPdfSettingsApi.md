# DocumentPdfSettingsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDocumentPdfSettings**](DocumentPdfSettingsApi.md#getdocumentpdfsettings) | **GET** /v1/field/document-pdf-settings |  |
| [**saveDocumentPdfSettings**](DocumentPdfSettingsApi.md#savedocumentpdfsettingsoperation) | **PUT** /v1/field/document-pdf-settings |  |



## getDocumentPdfSettings

> DocumentPdfSettingsResponse getDocumentPdfSettings()



### Example

```ts
import {
  Configuration,
  DocumentPdfSettingsApi,
} from '@tachyon-sdk/field';
import type { GetDocumentPdfSettingsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentPdfSettingsApi(config);

  try {
    const data = await api.getDocumentPdfSettings();
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

[**DocumentPdfSettingsResponse**](DocumentPdfSettingsResponse.md)

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


## saveDocumentPdfSettings

> DocumentPdfSettingsResponse saveDocumentPdfSettings(saveDocumentPdfSettingsRequest)



### Example

```ts
import {
  Configuration,
  DocumentPdfSettingsApi,
} from '@tachyon-sdk/field';
import type { SaveDocumentPdfSettingsOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentPdfSettingsApi(config);

  const body = {
    // SaveDocumentPdfSettingsRequest
    saveDocumentPdfSettingsRequest: ...,
  } satisfies SaveDocumentPdfSettingsOperationRequest;

  try {
    const data = await api.saveDocumentPdfSettings(body);
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
| **saveDocumentPdfSettingsRequest** | [SaveDocumentPdfSettingsRequest](SaveDocumentPdfSettingsRequest.md) |  | |

### Return type

[**DocumentPdfSettingsResponse**](DocumentPdfSettingsResponse.md)

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

