# CustomersApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createConsumerCustomer**](CustomersApi.md#createconsumercustomeroperation) | **POST** /v1/erp/customers |  |



## createConsumerCustomer

> CreatedEntityResponse createConsumerCustomer(createConsumerCustomerRequest)



### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '@tachyon-sdk/field';
import type { CreateConsumerCustomerOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomersApi(config);

  const body = {
    // CreateConsumerCustomerRequest
    createConsumerCustomerRequest: ...,
  } satisfies CreateConsumerCustomerOperationRequest;

  try {
    const data = await api.createConsumerCustomer(body);
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
| **createConsumerCustomerRequest** | [CreateConsumerCustomerRequest](CreateConsumerCustomerRequest.md) |  | |

### Return type

[**CreatedEntityResponse**](CreatedEntityResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Replay of an earlier request with the same idempotencyKey |  -  |
| **201** |  |  -  |
| **400** | Malformed input |  -  |
| **401** | Authentication required |  -  |
| **403** | Insufficient permission |  -  |
| **422** | Membership activity snapshot exceeded its size limit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

