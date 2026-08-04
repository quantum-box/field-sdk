# OrderProductsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrderProduct**](OrderProductsApi.md#createorderproductoperation) | **POST** /v1/order/products |  |
| [**deleteOrderProduct**](OrderProductsApi.md#deleteorderproduct) | **DELETE** /v1/order/products/{product_id} |  |
| [**getOrderProduct**](OrderProductsApi.md#getorderproduct) | **GET** /v1/order/products/{product_id} |  |
| [**listOrderProductVariants**](OrderProductsApi.md#listorderproductvariants) | **GET** /v1/order/products/{product_id}/variants |  |
| [**listOrderProducts**](OrderProductsApi.md#listorderproducts) | **GET** /v1/order/products |  |
| [**updateOrderProduct**](OrderProductsApi.md#updateorderproductoperation) | **PATCH** /v1/order/products/{product_id} |  |



## createOrderProduct

> ProductRestResponse createOrderProduct(createOrderProductRequest)



### Example

```ts
import {
  Configuration,
  OrderProductsApi,
} from '@tachyon-sdk/field';
import type { CreateOrderProductOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderProductsApi(config);

  const body = {
    // CreateOrderProductRequest
    createOrderProductRequest: ...,
  } satisfies CreateOrderProductOperationRequest;

  try {
    const data = await api.createOrderProduct(body);
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
| **createOrderProductRequest** | [CreateOrderProductRequest](CreateOrderProductRequest.md) |  | |

### Return type

[**ProductRestResponse**](ProductRestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Order product created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteOrderProduct

> DeleteOrderProductResponse deleteOrderProduct(productId)



### Example

```ts
import {
  Configuration,
  OrderProductsApi,
} from '@tachyon-sdk/field';
import type { DeleteOrderProductRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderProductsApi(config);

  const body = {
    // string | Order product ID
    productId: productId_example,
  } satisfies DeleteOrderProductRequest;

  try {
    const data = await api.deleteOrderProduct(body);
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
| **productId** | `string` | Order product ID | [Defaults to `undefined`] |

### Return type

[**DeleteOrderProductResponse**](DeleteOrderProductResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Order product deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrderProduct

> ProductRestResponse getOrderProduct(productId)



### Example

```ts
import {
  Configuration,
  OrderProductsApi,
} from '@tachyon-sdk/field';
import type { GetOrderProductRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderProductsApi(config);

  const body = {
    // string | Order product ID
    productId: productId_example,
  } satisfies GetOrderProductRequest;

  try {
    const data = await api.getOrderProduct(body);
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
| **productId** | `string` | Order product ID | [Defaults to `undefined`] |

### Return type

[**ProductRestResponse**](ProductRestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Order product detail |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOrderProductVariants

> OrderProductVariantListResponse listOrderProductVariants(productId)



### Example

```ts
import {
  Configuration,
  OrderProductsApi,
} from '@tachyon-sdk/field';
import type { ListOrderProductVariantsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderProductsApi(config);

  const body = {
    // string | Order product ID
    productId: productId_example,
  } satisfies ListOrderProductVariantsRequest;

  try {
    const data = await api.listOrderProductVariants(body);
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
| **productId** | `string` | Order product ID | [Defaults to `undefined`] |

### Return type

[**OrderProductVariantListResponse**](OrderProductVariantListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List order product variants |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOrderProducts

> OrderProductListResponse listOrderProducts(limit, offset)



### Example

```ts
import {
  Configuration,
  OrderProductsApi,
} from '@tachyon-sdk/field';
import type { ListOrderProductsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderProductsApi(config);

  const body = {
    // number | Maximum number of items to return (default 25) (optional)
    limit: 56,
    // number | Number of items to skip (default 0) (optional)
    offset: 56,
  } satisfies ListOrderProductsRequest;

  try {
    const data = await api.listOrderProducts(body);
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
| **limit** | `number` | Maximum number of items to return (default 25) | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Number of items to skip (default 0) | [Optional] [Defaults to `undefined`] |

### Return type

[**OrderProductListResponse**](OrderProductListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List order products |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateOrderProduct

> ProductRestResponse updateOrderProduct(productId, updateOrderProductRequest)



### Example

```ts
import {
  Configuration,
  OrderProductsApi,
} from '@tachyon-sdk/field';
import type { UpdateOrderProductOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrderProductsApi(config);

  const body = {
    // string | Order product ID
    productId: productId_example,
    // UpdateOrderProductRequest
    updateOrderProductRequest: ...,
  } satisfies UpdateOrderProductOperationRequest;

  try {
    const data = await api.updateOrderProduct(body);
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
| **productId** | `string` | Order product ID | [Defaults to `undefined`] |
| **updateOrderProductRequest** | [UpdateOrderProductRequest](UpdateOrderProductRequest.md) |  | |

### Return type

[**ProductRestResponse**](ProductRestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Order product updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

