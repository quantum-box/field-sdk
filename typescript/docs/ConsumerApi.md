# ConsumerApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getConsumerConsents**](ConsumerApi.md#getconsumerconsents) | **GET** /v1/erp/customers/{customer_id}/consents |  |
| [**getCustomerContactPreferences**](ConsumerApi.md#getcustomercontactpreferences) | **GET** /v1/erp/customers/{customer_id}/contact-preferences | チャネルごとの現在の連絡可否を1コールで返す。 |
| [**recordConsumerConsents**](ConsumerApi.md#recordconsumerconsentsoperation) | **POST** /v1/erp/customers/{customer_id}/consents |  |
| [**recordCustomerContactPreferences**](ConsumerApi.md#recordcustomercontactpreferences) | **POST** /v1/erp/customers/{customer_id}/contact-preferences | 連絡拒否の申し出、およびその撤回を記録する。 |



## getConsumerConsents

> ConsumerConsentStateListResponse getConsumerConsents(customerId)



### Example

```ts
import {
  Configuration,
  ConsumerApi,
} from '@tachyon-sdk/field';
import type { GetConsumerConsentsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsumerApi(config);

  const body = {
    // string | Consumer customer ID (`cus_…`)
    customerId: customerId_example,
  } satisfies GetConsumerConsentsRequest;

  try {
    const data = await api.getConsumerConsents(body);
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
| **customerId** | `string` | Consumer customer ID (&#x60;cus_…&#x60;) | [Defaults to `undefined`] |

### Return type

[**ConsumerConsentStateListResponse**](ConsumerConsentStateListResponse.md)

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


## getCustomerContactPreferences

> ContactPreferenceListResponse getCustomerContactPreferences(customerId)

チャネルごとの現在の連絡可否を1コールで返す。

申し出の記録が無いチャネルは &#x60;contactable: true&#x60; / &#x60;declared: false&#x60;。 「連絡してよい」が既定で、拒否は申し出があって初めて立つ。撤回された拒否は &#x60;contactable: true&#x60; に戻るが、証跡そのものは消えない。

### Example

```ts
import {
  Configuration,
  ConsumerApi,
} from '@tachyon-sdk/field';
import type { GetCustomerContactPreferencesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsumerApi(config);

  const body = {
    // string | Consumer customer ID (`cus_…`)
    customerId: customerId_example,
  } satisfies GetCustomerContactPreferencesRequest;

  try {
    const data = await api.getCustomerContactPreferences(body);
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
| **customerId** | `string` | Consumer customer ID (&#x60;cus_…&#x60;) | [Defaults to `undefined`] |

### Return type

[**ContactPreferenceListResponse**](ContactPreferenceListResponse.md)

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


## recordConsumerConsents

> ConsumerConsentStateListResponse recordConsumerConsents(customerId, recordConsumerConsentsRequest)



### Example

```ts
import {
  Configuration,
  ConsumerApi,
} from '@tachyon-sdk/field';
import type { RecordConsumerConsentsOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsumerApi(config);

  const body = {
    // string | Consumer customer ID (`cus_…`)
    customerId: customerId_example,
    // RecordConsumerConsentsRequest
    recordConsumerConsentsRequest: ...,
  } satisfies RecordConsumerConsentsOperationRequest;

  try {
    const data = await api.recordConsumerConsents(body);
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
| **customerId** | `string` | Consumer customer ID (&#x60;cus_…&#x60;) | [Defaults to `undefined`] |
| **recordConsumerConsentsRequest** | [RecordConsumerConsentsRequest](RecordConsumerConsentsRequest.md) |  | |

### Return type

[**ConsumerConsentStateListResponse**](ConsumerConsentStateListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **422** | Membership activity snapshot exceeded its size limit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## recordCustomerContactPreferences

> ContactPreferenceListResponse recordCustomerContactPreferences(customerId, recordContactPreferencesRequest)

連絡拒否の申し出、およびその撤回を記録する。

上書きはしない。拒否も撤回も証跡への追記で、以前の行は残る。応答は書き込み 後に畳み直した全チャネルの現在値。

### Example

```ts
import {
  Configuration,
  ConsumerApi,
} from '@tachyon-sdk/field';
import type { RecordCustomerContactPreferencesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsumerApi(config);

  const body = {
    // string | Consumer customer ID (`cus_…`)
    customerId: customerId_example,
    // RecordContactPreferencesRequest
    recordContactPreferencesRequest: ...,
  } satisfies RecordCustomerContactPreferencesRequest;

  try {
    const data = await api.recordCustomerContactPreferences(body);
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
| **customerId** | `string` | Consumer customer ID (&#x60;cus_…&#x60;) | [Defaults to `undefined`] |
| **recordContactPreferencesRequest** | [RecordContactPreferencesRequest](RecordContactPreferencesRequest.md) |  | |

### Return type

[**ContactPreferenceListResponse**](ContactPreferenceListResponse.md)

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

