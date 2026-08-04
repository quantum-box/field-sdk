# TACHYONFieldReportsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPayoutReport**](TACHYONFieldReportsApi.md#getpayoutreport) | **GET** /v1/field/reports/payout | &#x60;GET /v1/field/reports/payout&#x60; — JSON payout report. |
| [**getPayoutReportCsv**](TACHYONFieldReportsApi.md#getpayoutreportcsv) | **GET** /v1/field/reports/payout.csv | &#x60;GET /v1/field/reports/payout.csv&#x60; — CSV payout report. |



## getPayoutReport

> PayoutReportResponse getPayoutReport(from, to)

&#x60;GET /v1/field/reports/payout&#x60; — JSON payout report.

### Example

```ts
import {
  Configuration,
  TACHYONFieldReportsApi,
} from '@tachyon-sdk/field';
import type { GetPayoutReportRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldReportsApi(config);

  const body = {
    // string | Period start date (inclusive), e.g. `2026-01-01`.
    from: from_example,
    // string | Period end date (inclusive), e.g. `2026-01-31`.
    to: to_example,
  } satisfies GetPayoutReportRequest;

  try {
    const data = await api.getPayoutReport(body);
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
| **from** | `string` | Period start date (inclusive), e.g. &#x60;2026-01-01&#x60;. | [Defaults to `undefined`] |
| **to** | `string` | Period end date (inclusive), e.g. &#x60;2026-01-31&#x60;. | [Defaults to `undefined`] |

### Return type

[**PayoutReportResponse**](PayoutReportResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payout report |  -  |
| **400** | Invalid query parameters |  -  |
| **500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPayoutReportCsv

> getPayoutReportCsv(from, to)

&#x60;GET /v1/field/reports/payout.csv&#x60; — CSV payout report.

### Example

```ts
import {
  Configuration,
  TACHYONFieldReportsApi,
} from '@tachyon-sdk/field';
import type { GetPayoutReportCsvRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldReportsApi(config);

  const body = {
    // string | Period start date (inclusive), e.g. `2026-01-01`.
    from: from_example,
    // string | Period end date (inclusive), e.g. `2026-01-31`.
    to: to_example,
  } satisfies GetPayoutReportCsvRequest;

  try {
    const data = await api.getPayoutReportCsv(body);
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
| **from** | `string` | Period start date (inclusive), e.g. &#x60;2026-01-01&#x60;. | [Defaults to `undefined`] |
| **to** | `string` | Period end date (inclusive), e.g. &#x60;2026-01-31&#x60;. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CSV file download |  -  |
| **400** | Invalid query parameters |  -  |
| **500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

