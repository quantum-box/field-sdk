# ERPMastersApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listLibraryMasters**](ERPMastersApi.md#listlibrarymasters) | **GET** /v1/erp/masters/library |  |
| [**listProductCategories**](ERPMastersApi.md#listproductcategories) | **GET** /v1/erp/masters/product-categories |  |
| [**listResourceTypes**](ERPMastersApi.md#listresourcetypes) | **GET** /v1/erp/masters/resource-types |  |



## listLibraryMasters

> FieldErpMasterCatalog listLibraryMasters()



### Example

```ts
import {
  Configuration,
  ERPMastersApi,
} from '@tachyon-sdk/field';
import type { ListLibraryMastersRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ERPMastersApi(config);

  try {
    const data = await api.listLibraryMasters();
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

[**FieldErpMasterCatalog**](FieldErpMasterCatalog.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Field ERP master catalog |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listProductCategories

> Array&lt;FieldErpMasterItem&gt; listProductCategories()



### Example

```ts
import {
  Configuration,
  ERPMastersApi,
} from '@tachyon-sdk/field';
import type { ListProductCategoriesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ERPMastersApi(config);

  try {
    const data = await api.listProductCategories();
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

[**Array&lt;FieldErpMasterItem&gt;**](FieldErpMasterItem.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Product category master items |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listResourceTypes

> Array&lt;FieldErpMasterItem&gt; listResourceTypes()



### Example

```ts
import {
  Configuration,
  ERPMastersApi,
} from '@tachyon-sdk/field';
import type { ListResourceTypesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ERPMastersApi(config);

  try {
    const data = await api.listResourceTypes();
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

[**Array&lt;FieldErpMasterItem&gt;**](FieldErpMasterItem.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resource type master items |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

