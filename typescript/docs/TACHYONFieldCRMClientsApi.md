# TACHYONFieldCRMClientsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportClientsCsv**](TACHYONFieldCRMClientsApi.md#exportclientscsv) | **GET** /v1/erp/clients/export.csv |  |
| [**importClientsCsv**](TACHYONFieldCRMClientsApi.md#importclientscsv) | **POST** /v1/erp/clients/import.csv |  |



## exportClientsCsv

> exportClientsCsv()



### Example

```ts
import {
  Configuration,
  TACHYONFieldCRMClientsApi,
} from '@tachyon/field-sdk';
import type { ExportClientsCsvRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldCRMClientsApi(config);

  try {
    const data = await api.exportClientsCsv();
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

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rendered CSV of order clients (取引先) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importClientsCsv

> ClientCsvImportResponse importClientsCsv(body)



### Example

```ts
import {
  Configuration,
  TACHYONFieldCRMClientsApi,
} from '@tachyon/field-sdk';
import type { ImportClientsCsvRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldCRMClientsApi(config);

  const body = {
    // string | Raw CSV text of order clients (取引先) to import
    body: body_example,
  } satisfies ImportClientsCsvRequest;

  try {
    const data = await api.importClientsCsv(body);
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
| **body** | `string` | Raw CSV text of order clients (取引先) to import | |

### Return type

[**ClientCsvImportResponse**](ClientCsvImportResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `text/csv`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Import result summary |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

