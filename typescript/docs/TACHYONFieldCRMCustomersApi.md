# TACHYONFieldCRMCustomersApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportConsumerCustomersCsv**](TACHYONFieldCRMCustomersApi.md#exportconsumercustomerscsv) | **GET** /v1/erp/customers/export.csv | 一覧と同じクエリ文字列（&#x60;segment&#x60; / &#x60;sort&#x60; / &#x60;min_order_total_nanodollar&#x60; など）を受け、絞り込んだ結果をそのまま CSV にする。画面で作ったリストを そのまま持ち出せるようにするためで、絞り込みを無視して全件を返すと、 「購入金額上位のリスト」を出したつもりの利用者に台帳全体が渡る。 &#x60;limit&#x60; / &#x60;offset&#x60; は無視して先頭から全件を読む。 |
| [**importConsumerCustomersCsv**](TACHYONFieldCRMCustomersApi.md#importconsumercustomerscsv) | **POST** /v1/erp/customers/import.csv |  |



## exportConsumerCustomersCsv

> exportConsumerCustomersCsv()

一覧と同じクエリ文字列（&#x60;segment&#x60; / &#x60;sort&#x60; / &#x60;min_order_total_nanodollar&#x60; など）を受け、絞り込んだ結果をそのまま CSV にする。画面で作ったリストを そのまま持ち出せるようにするためで、絞り込みを無視して全件を返すと、 「購入金額上位のリスト」を出したつもりの利用者に台帳全体が渡る。 &#x60;limit&#x60; / &#x60;offset&#x60; は無視して先頭から全件を読む。

### Example

```ts
import {
  Configuration,
  TACHYONFieldCRMCustomersApi,
} from '@tachyon-sdk/field';
import type { ExportConsumerCustomersCsvRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldCRMCustomersApi(config);

  try {
    const data = await api.exportConsumerCustomersCsv();
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
| **200** | Rendered CSV of consumer customers (個人顧客) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importConsumerCustomersCsv

> ConsumerCustomerCsvImportResponse importConsumerCustomersCsv(body)



### Example

```ts
import {
  Configuration,
  TACHYONFieldCRMCustomersApi,
} from '@tachyon-sdk/field';
import type { ImportConsumerCustomersCsvRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldCRMCustomersApi(config);

  const body = {
    // string | Raw CSV text of consumer customers (個人顧客) to import
    body: body_example,
  } satisfies ImportConsumerCustomersCsvRequest;

  try {
    const data = await api.importConsumerCustomersCsv(body);
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
| **body** | `string` | Raw CSV text of consumer customers (個人顧客) to import | |

### Return type

[**ConsumerCustomerCsvImportResponse**](ConsumerCustomerCsvImportResponse.md)

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

