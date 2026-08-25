# StorefrontProfileApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getStorefrontProfile**](StorefrontProfileApi.md#getstorefrontprofile) | **GET** /v1/field/storefront-profile |  |
| [**saveStorefrontProfile**](StorefrontProfileApi.md#savestorefrontprofileoperation) | **PUT** /v1/field/storefront-profile |  |



## getStorefrontProfile

> StorefrontProfileResponse getStorefrontProfile()



### Example

```ts
import {
  Configuration,
  StorefrontProfileApi,
} from '@tachyon-sdk/field';
import type { GetStorefrontProfileRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorefrontProfileApi(config);

  try {
    const data = await api.getStorefrontProfile();
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

[**StorefrontProfileResponse**](StorefrontProfileResponse.md)

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


## saveStorefrontProfile

> StorefrontProfileResponse saveStorefrontProfile(saveStorefrontProfileRequest)



### Example

```ts
import {
  Configuration,
  StorefrontProfileApi,
} from '@tachyon-sdk/field';
import type { SaveStorefrontProfileOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorefrontProfileApi(config);

  const body = {
    // SaveStorefrontProfileRequest
    saveStorefrontProfileRequest: ...,
  } satisfies SaveStorefrontProfileOperationRequest;

  try {
    const data = await api.saveStorefrontProfile(body);
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
| **saveStorefrontProfileRequest** | [SaveStorefrontProfileRequest](SaveStorefrontProfileRequest.md) |  | |

### Return type

[**StorefrontProfileResponse**](StorefrontProfileResponse.md)

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

