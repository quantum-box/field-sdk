# TACHYONFieldSalesForecastApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSalesForecast**](TACHYONFieldSalesForecastApi.md#getsalesforecast) | **GET** /v1/erp/sales-forecast |  |
| [**listStageSettings**](TACHYONFieldSalesForecastApi.md#liststagesettings) | **GET** /v1/erp/sales-forecast/stage-settings |  |
| [**updateStageSettings**](TACHYONFieldSalesForecastApi.md#updatestagesettingsoperation) | **PUT** /v1/erp/sales-forecast/stage-settings |  |



## getSalesForecast

> ForecastResponse getSalesForecast()



### Example

```ts
import {
  Configuration,
  TACHYONFieldSalesForecastApi,
} from '@tachyon-sdk/field';
import type { GetSalesForecastRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldSalesForecastApi(config);

  try {
    const data = await api.getSalesForecast();
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

[**ForecastResponse**](ForecastResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline-probability-weighted sales forecast |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStageSettings

> StageSettingsResponse listStageSettings()



### Example

```ts
import {
  Configuration,
  TACHYONFieldSalesForecastApi,
} from '@tachyon-sdk/field';
import type { ListStageSettingsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldSalesForecastApi(config);

  try {
    const data = await api.listStageSettings();
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

[**StageSettingsResponse**](StageSettingsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline/stage win-probability settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStageSettings

> StageSettingsResponse updateStageSettings(updateStageSettingsRequest)



### Example

```ts
import {
  Configuration,
  TACHYONFieldSalesForecastApi,
} from '@tachyon-sdk/field';
import type { UpdateStageSettingsOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldSalesForecastApi(config);

  const body = {
    // UpdateStageSettingsRequest
    updateStageSettingsRequest: ...,
  } satisfies UpdateStageSettingsOperationRequest;

  try {
    const data = await api.updateStageSettings(body);
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
| **updateStageSettingsRequest** | [UpdateStageSettingsRequest](UpdateStageSettingsRequest.md) |  | |

### Return type

[**StageSettingsResponse**](StageSettingsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline/stage win-probability settings updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

