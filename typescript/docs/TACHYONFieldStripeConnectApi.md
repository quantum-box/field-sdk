# TACHYONFieldStripeConnectApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createStripeConnectAccount**](TACHYONFieldStripeConnectApi.md#createstripeconnectaccount) | **POST** /v1/erp/payments/stripe-connect/account |  |
| [**createStripeConnectOnboardingLink**](TACHYONFieldStripeConnectApi.md#createstripeconnectonboardinglinkoperation) | **POST** /v1/erp/payments/stripe-connect/onboarding-link |  |
| [**getStripeConnectAccount**](TACHYONFieldStripeConnectApi.md#getstripeconnectaccount) | **GET** /v1/erp/payments/stripe-connect/account |  |



## createStripeConnectAccount

> StripeConnectAccountResponse createStripeConnectAccount()



### Example

```ts
import {
  Configuration,
  TACHYONFieldStripeConnectApi,
} from '@tachyon-sdk/field';
import type { CreateStripeConnectAccountRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldStripeConnectApi(config);

  try {
    const data = await api.createStripeConnectAccount();
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

[**StripeConnectAccountResponse**](StripeConnectAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connect settlement state after creation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createStripeConnectOnboardingLink

> StripeConnectOnboardingLinkResponse createStripeConnectOnboardingLink(createStripeConnectOnboardingLinkRequest)



### Example

```ts
import {
  Configuration,
  TACHYONFieldStripeConnectApi,
} from '@tachyon-sdk/field';
import type { CreateStripeConnectOnboardingLinkOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldStripeConnectApi(config);

  const body = {
    // CreateStripeConnectOnboardingLinkRequest
    createStripeConnectOnboardingLinkRequest: ...,
  } satisfies CreateStripeConnectOnboardingLinkOperationRequest;

  try {
    const data = await api.createStripeConnectOnboardingLink(body);
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
| **createStripeConnectOnboardingLinkRequest** | [CreateStripeConnectOnboardingLinkRequest](CreateStripeConnectOnboardingLinkRequest.md) |  | |

### Return type

[**StripeConnectOnboardingLinkResponse**](StripeConnectOnboardingLinkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stripe-hosted onboarding URL |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStripeConnectAccount

> StripeConnectAccountResponse getStripeConnectAccount()



### Example

```ts
import {
  Configuration,
  TACHYONFieldStripeConnectApi,
} from '@tachyon-sdk/field';
import type { GetStripeConnectAccountRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldStripeConnectApi(config);

  try {
    const data = await api.getStripeConnectAccount();
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

[**StripeConnectAccountResponse**](StripeConnectAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connect settlement state |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

