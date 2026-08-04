# TACHYONFieldOrdersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelExpiredOrders**](TACHYONFieldOrdersApi.md#cancelexpiredorders) | **POST** /v1/field/orders/batch/cancel-expired | Cancel all READY orders whose pickup deadline has passed. |



## cancelExpiredOrders

> CancelExpiredResponse cancelExpiredOrders()

Cancel all READY orders whose pickup deadline has passed.

Returns the number of orders cancelled.

### Example

```ts
import {
  Configuration,
  TACHYONFieldOrdersApi,
} from '@tachyon/field-sdk';
import type { CancelExpiredOrdersRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldOrdersApi(config);

  try {
    const data = await api.cancelExpiredOrders();
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

[**CancelExpiredResponse**](CancelExpiredResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cancelled expired orders |  -  |
| **500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

