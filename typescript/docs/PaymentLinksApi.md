# PaymentLinksApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPaymentLink**](PaymentLinksApi.md#createpaymentlinkoperation) | **POST** /v1/payment-links |  |



## createPaymentLink

> CreatePaymentLinkResponse createPaymentLink(createPaymentLinkRequest)



### Example

```ts
import {
  Configuration,
  PaymentLinksApi,
} from '@tachyon-sdk/field';
import type { CreatePaymentLinkOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PaymentLinksApi(config);

  const body = {
    // CreatePaymentLinkRequest
    createPaymentLinkRequest: ...,
  } satisfies CreatePaymentLinkOperationRequest;

  try {
    const data = await api.createPaymentLink(body);
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
| **createPaymentLinkRequest** | [CreatePaymentLinkRequest](CreatePaymentLinkRequest.md) |  | |

### Return type

[**CreatePaymentLinkResponse**](CreatePaymentLinkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

