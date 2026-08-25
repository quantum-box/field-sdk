# PublicSalesContractSigningApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**completePublicSigningSession**](PublicSalesContractSigningApi.md#completepublicsigningsession) | **POST** /v1/public/sales-contract-signing/session/complete |  |
| [**getPublicSigningSession**](PublicSalesContractSigningApi.md#getpublicsigningsession) | **GET** /v1/public/sales-contract-signing/session |  |



## completePublicSigningSession

> completePublicSigningSession(completePublicSigningInput)



### Example

```ts
import {
  Configuration,
  PublicSalesContractSigningApi,
} from '@tachyon-sdk/field';
import type { CompletePublicSigningSessionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: signingCapability
    apiKey: "YOUR API KEY",
  });
  const api = new PublicSalesContractSigningApi(config);

  const body = {
    // CompletePublicSigningInput
    completePublicSigningInput: ...,
  } satisfies CompletePublicSigningSessionRequest;

  try {
    const data = await api.completePublicSigningSession(body);
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
| **completePublicSigningInput** | [CompletePublicSigningInput](CompletePublicSigningInput.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[signingCapability](../README.md#signingCapability)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Signing session completed or an identical completion replay accepted |  -  |
| **400** | Validation failed. The response code is SIGNING_VALUES_INVALID or SIGNATURE_UNRENDERABLE. |  -  |
| **401** | Invalid signing capability |  -  |
| **409** | Signing session state or idempotency conflict |  -  |
| **410** | Signing session expired or revoked |  -  |
| **503** | Signing service is temporarily unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicSigningSession

> PublicSigningSessionResponse getPublicSigningSession()



### Example

```ts
import {
  Configuration,
  PublicSalesContractSigningApi,
} from '@tachyon-sdk/field';
import type { GetPublicSigningSessionRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: signingCapability
    apiKey: "YOUR API KEY",
  });
  const api = new PublicSalesContractSigningApi(config);

  try {
    const data = await api.getPublicSigningSession();
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

[**PublicSigningSessionResponse**](PublicSigningSessionResponse.md)

### Authorization

[signingCapability](../README.md#signingCapability)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Capability-scoped signing session |  -  |
| **401** | Invalid signing capability |  -  |
| **410** | Signing session expired, revoked, or completed |  -  |
| **503** | Signing service is temporarily unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

