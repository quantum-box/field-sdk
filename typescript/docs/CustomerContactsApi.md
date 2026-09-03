# CustomerContactsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelCustomerContact**](CustomerContactsApi.md#cancelcustomercontact) | **DELETE** /v1/erp/customer-contacts/{contact_id} | 取り消し。行は消さず &#x60;cancelledAt&#x60; / &#x60;cancelledBy&#x60; を立てて返す。 |
| [**createCustomerContact**](CustomerContactsApi.md#createcustomercontactoperation) | **POST** /v1/erp/customers/{customer_id}/contacts |  |
| [**listAllCustomerContacts**](CustomerContactsApi.md#listallcustomercontacts) | **GET** /v1/erp/customer-contacts |  |
| [**listCustomerContacts**](CustomerContactsApi.md#listcustomercontacts) | **GET** /v1/erp/customers/{customer_id}/contacts |  |
| [**lookupLatestCustomerContacts**](CustomerContactsApi.md#lookuplatestcustomercontacts) | **POST** /v1/erp/customer-contacts/latest-lookup |  |
| [**updateCustomerContact**](CustomerContactsApi.md#updatecustomercontactoperation) | **PATCH** /v1/erp/customer-contacts/{contact_id} |  |



## cancelCustomerContact

> CustomerContactResponse cancelCustomerContact(contactId)

取り消し。行は消さず &#x60;cancelledAt&#x60; / &#x60;cancelledBy&#x60; を立てて返す。

### Example

```ts
import {
  Configuration,
  CustomerContactsApi,
} from '@tachyon-sdk/field';
import type { CancelCustomerContactRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomerContactsApi(config);

  const body = {
    // string | Customer contact ID (`cct_…`)
    contactId: contactId_example,
  } satisfies CancelCustomerContactRequest;

  try {
    const data = await api.cancelCustomerContact(body);
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
| **contactId** | `string` | Customer contact ID (&#x60;cct_…&#x60;) | [Defaults to `undefined`] |

### Return type

[**CustomerContactResponse**](CustomerContactResponse.md)

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


## createCustomerContact

> CustomerContactResponse createCustomerContact(customerId, createCustomerContactRequest)



### Example

```ts
import {
  Configuration,
  CustomerContactsApi,
} from '@tachyon-sdk/field';
import type { CreateCustomerContactOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomerContactsApi(config);

  const body = {
    // string | Customer ID (`cus_…`)
    customerId: customerId_example,
    // CreateCustomerContactRequest
    createCustomerContactRequest: ...,
  } satisfies CreateCustomerContactOperationRequest;

  try {
    const data = await api.createCustomerContact(body);
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
| **customerId** | `string` | Customer ID (&#x60;cus_…&#x60;) | [Defaults to `undefined`] |
| **createCustomerContactRequest** | [CreateCustomerContactRequest](CreateCustomerContactRequest.md) |  | |

### Return type

[**CustomerContactResponse**](CustomerContactResponse.md)

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


## listAllCustomerContacts

> CustomerContactListResponse listAllCustomerContacts(customerId, channel, direction, outcome, performedBy, occurredFrom, occurredTo, includeCancelled, limit, offset)



### Example

```ts
import {
  Configuration,
  CustomerContactsApi,
} from '@tachyon-sdk/field';
import type { ListAllCustomerContactsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomerContactsApi(config);

  const body = {
    // string | 顧客で絞る。顧客配下の一覧では使わない（パスが決める）。 (optional)
    customerId: customerId_example,
    // string (optional)
    channel: channel_example,
    // string (optional)
    direction: direction_example,
    // string (optional)
    outcome: outcome_example,
    // string (optional)
    performedBy: performedBy_example,
    // Date | `occurredAt >= from` (optional)
    occurredFrom: 2013-10-20T19:20:30+01:00,
    // Date | `occurredAt <= to` (optional)
    occurredTo: 2013-10-20T19:20:30+01:00,
    // boolean | 取り消し済みも含める。既定は除く。 (optional)
    includeCancelled: true,
    // number | 既定 50、上限 200。 (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListAllCustomerContactsRequest;

  try {
    const data = await api.listAllCustomerContacts(body);
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
| **customerId** | `string` | 顧客で絞る。顧客配下の一覧では使わない（パスが決める）。 | [Optional] [Defaults to `undefined`] |
| **channel** | `string` |  | [Optional] [Defaults to `undefined`] |
| **direction** | `string` |  | [Optional] [Defaults to `undefined`] |
| **outcome** | `string` |  | [Optional] [Defaults to `undefined`] |
| **performedBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **occurredFrom** | `Date` | &#x60;occurredAt &gt;&#x3D; from&#x60; | [Optional] [Defaults to `undefined`] |
| **occurredTo** | `Date` | &#x60;occurredAt &lt;&#x3D; to&#x60; | [Optional] [Defaults to `undefined`] |
| **includeCancelled** | `boolean` | 取り消し済みも含める。既定は除く。 | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | 既定 50、上限 200。 | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CustomerContactListResponse**](CustomerContactListResponse.md)

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


## listCustomerContacts

> CustomerContactListResponse listCustomerContacts(customerId, customerId2, channel, direction, outcome, performedBy, occurredFrom, occurredTo, includeCancelled, limit, offset)



### Example

```ts
import {
  Configuration,
  CustomerContactsApi,
} from '@tachyon-sdk/field';
import type { ListCustomerContactsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomerContactsApi(config);

  const body = {
    // string | Customer ID (`cus_…`)
    customerId: customerId_example,
    // string | 顧客で絞る。顧客配下の一覧では使わない（パスが決める）。 (optional)
    customerId2: customerId_example,
    // string (optional)
    channel: channel_example,
    // string (optional)
    direction: direction_example,
    // string (optional)
    outcome: outcome_example,
    // string (optional)
    performedBy: performedBy_example,
    // Date | `occurredAt >= from` (optional)
    occurredFrom: 2013-10-20T19:20:30+01:00,
    // Date | `occurredAt <= to` (optional)
    occurredTo: 2013-10-20T19:20:30+01:00,
    // boolean | 取り消し済みも含める。既定は除く。 (optional)
    includeCancelled: true,
    // number | 既定 50、上限 200。 (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListCustomerContactsRequest;

  try {
    const data = await api.listCustomerContacts(body);
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
| **customerId** | `string` | Customer ID (&#x60;cus_…&#x60;) | [Defaults to `undefined`] |
| **customerId2** | `string` | 顧客で絞る。顧客配下の一覧では使わない（パスが決める）。 | [Optional] [Defaults to `undefined`] |
| **channel** | `string` |  | [Optional] [Defaults to `undefined`] |
| **direction** | `string` |  | [Optional] [Defaults to `undefined`] |
| **outcome** | `string` |  | [Optional] [Defaults to `undefined`] |
| **performedBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **occurredFrom** | `Date` | &#x60;occurredAt &gt;&#x3D; from&#x60; | [Optional] [Defaults to `undefined`] |
| **occurredTo** | `Date` | &#x60;occurredAt &lt;&#x3D; to&#x60; | [Optional] [Defaults to `undefined`] |
| **includeCancelled** | `boolean` | 取り消し済みも含める。既定は除く。 | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | 既定 50、上限 200。 | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CustomerContactListResponse**](CustomerContactListResponse.md)

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


## lookupLatestCustomerContacts

> LatestCustomerContactListResponse lookupLatestCustomerContacts(latestCustomerContactLookupRequest)



### Example

```ts
import {
  Configuration,
  CustomerContactsApi,
} from '@tachyon-sdk/field';
import type { LookupLatestCustomerContactsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomerContactsApi(config);

  const body = {
    // LatestCustomerContactLookupRequest
    latestCustomerContactLookupRequest: ...,
  } satisfies LookupLatestCustomerContactsRequest;

  try {
    const data = await api.lookupLatestCustomerContacts(body);
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
| **latestCustomerContactLookupRequest** | [LatestCustomerContactLookupRequest](LatestCustomerContactLookupRequest.md) |  | |

### Return type

[**LatestCustomerContactListResponse**](LatestCustomerContactListResponse.md)

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


## updateCustomerContact

> CustomerContactResponse updateCustomerContact(contactId, updateCustomerContactRequest)



### Example

```ts
import {
  Configuration,
  CustomerContactsApi,
} from '@tachyon-sdk/field';
import type { UpdateCustomerContactOperationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomerContactsApi(config);

  const body = {
    // string | Customer contact ID (`cct_…`)
    contactId: contactId_example,
    // UpdateCustomerContactRequest
    updateCustomerContactRequest: ...,
  } satisfies UpdateCustomerContactOperationRequest;

  try {
    const data = await api.updateCustomerContact(body);
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
| **contactId** | `string` | Customer contact ID (&#x60;cct_…&#x60;) | [Defaults to `undefined`] |
| **updateCustomerContactRequest** | [UpdateCustomerContactRequest](UpdateCustomerContactRequest.md) |  | |

### Return type

[**CustomerContactResponse**](CustomerContactResponse.md)

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

