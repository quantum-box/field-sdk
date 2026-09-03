# TACHYONFieldAnalyticsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCustomerPurchaseSummary**](TACHYONFieldAnalyticsApi.md#getcustomerpurchasesummary) | **GET** /v1/erp/analytics/customer-purchase-summary/{customer_id} | 顧客1件の購買サマリ。 |
| [**listCustomerPurchaseSummaries**](TACHYONFieldAnalyticsApi.md#listcustomerpurchasesummaries) | **GET** /v1/erp/analytics/customer-purchase-summary | 顧客ごとの購買サマリを横断で返す。 |



## getCustomerPurchaseSummary

> CustomerPurchaseSummaryResponse getCustomerPurchaseSummary(customerId, from, to)

顧客1件の購買サマリ。

1回 &#x3D; 予約1件。&#x60;confirmed&#x60; / &#x60;completed&#x60; で、かつ提供開始 (&#x60;startsAt&#x60;) が &#x60;computedAt&#x60; を過ぎたものだけを購入として数える。キャンセル・no-show・ 未提供・未確定は金額にも回数にも入れず、それぞれ件数だけを別項目で返す。 金額は税込で、&#x60;reservations.currency&#x60; ごとに &#x60;currencies&#x60; へ分けて返す。 集計はリクエストごとの都度計算で、いつ時点かは &#x60;computedAt&#x60;。  顧客台帳の存在確認はしない。予約を1件も持たない ID でも 404 ではなく、 すべて 0 のサマリを返す（「購入が無い」は正当な答えなので）。

### Example

```ts
import {
  Configuration,
  TACHYONFieldAnalyticsApi,
} from '@tachyon-sdk/field';
import type { GetCustomerPurchaseSummaryRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldAnalyticsApi(config);

  const body = {
    // string | 顧客台帳の ID（reservations.customer_id）
    customerId: customerId_example,
    // string | 提供日（Asia/Tokyo）の下限。`YYYY-MM-DD`。省略すると全期間。 (optional)
    from: from_example,
    // string | 提供日（Asia/Tokyo）の上限。`YYYY-MM-DD`。省略すると全期間。 (optional)
    to: to_example,
  } satisfies GetCustomerPurchaseSummaryRequest;

  try {
    const data = await api.getCustomerPurchaseSummary(body);
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
| **customerId** | `string` | 顧客台帳の ID（reservations.customer_id） | [Defaults to `undefined`] |
| **from** | `string` | 提供日（Asia/Tokyo）の下限。&#x60;YYYY-MM-DD&#x60;。省略すると全期間。 | [Optional] [Defaults to `undefined`] |
| **to** | `string` | 提供日（Asia/Tokyo）の上限。&#x60;YYYY-MM-DD&#x60;。省略すると全期間。 | [Optional] [Defaults to `undefined`] |

### Return type

[**CustomerPurchaseSummaryResponse**](CustomerPurchaseSummaryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 購買サマリ |  -  |
| **400** | クエリが不正 |  -  |
| **403** | field:ViewSalesAnalytics がない |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCustomerPurchaseSummaries

> CustomerPurchaseSummaryListResponse listCustomerPurchaseSummaries(from, to, currency, minPurchaseCount, dormantForDays, sort, order, limit, offset)

顧客ごとの購買サマリを横断で返す。

1回の数え方・キャンセル/no-show の扱い・金額未確定・税込は単票と同じ。 金額で並べ替えるため1ページは単一通貨で、&#x60;currency&#x60; を省略したときに対象へ 通貨が2つ以上あれば 400 にして選ばせる（黙って合算すると呼び出し側が 気づけないまま間違った合計を使う）。  &#x60;total&#x60; は絞り込み後の顧客数で、&#x60;limit&#x60; / &#x60;offset&#x60; とは独立している。 既定では購入が1件も無い顧客は出ない（&#x60;minPurchaseCount&#x60; の既定が 1）。

### Example

```ts
import {
  Configuration,
  TACHYONFieldAnalyticsApi,
} from '@tachyon-sdk/field';
import type { ListCustomerPurchaseSummariesRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TACHYONFieldAnalyticsApi(config);

  const body = {
    // string | 提供日（Asia/Tokyo）の下限。`YYYY-MM-DD`。 (optional)
    from: from_example,
    // string | 提供日（Asia/Tokyo）の上限。`YYYY-MM-DD`。 (optional)
    to: to_example,
    // string | 集計する通貨。対象に通貨が1つしか無ければ省略できる。2つ以上あるのに 省略すると、どれで並べたいのか決まらないので 400。 (optional)
    currency: currency_example,
    // number | 期間内の購入回数の下限。既定 1（購入が1件も無い顧客は出ない）。 0 を渡すと、キャンセルや no-show しかない顧客も出る。 (optional)
    minPurchaseCount: 789,
    // number | 最終購入からこの日数以上あいた顧客だけを返す（休眠の抽出）。 (optional)
    dormantForDays: 56,
    // string | `total_amount` / `purchase_count` / `last_purchase_date`。既定は `total_amount`。 (optional)
    sort: sort_example,
    // string | `asc` / `desc`。既定は `desc`。 (optional)
    order: order_example,
    // number | 既定 50、上限 200。 (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListCustomerPurchaseSummariesRequest;

  try {
    const data = await api.listCustomerPurchaseSummaries(body);
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
| **from** | `string` | 提供日（Asia/Tokyo）の下限。&#x60;YYYY-MM-DD&#x60;。 | [Optional] [Defaults to `undefined`] |
| **to** | `string` | 提供日（Asia/Tokyo）の上限。&#x60;YYYY-MM-DD&#x60;。 | [Optional] [Defaults to `undefined`] |
| **currency** | `string` | 集計する通貨。対象に通貨が1つしか無ければ省略できる。2つ以上あるのに 省略すると、どれで並べたいのか決まらないので 400。 | [Optional] [Defaults to `undefined`] |
| **minPurchaseCount** | `number` | 期間内の購入回数の下限。既定 1（購入が1件も無い顧客は出ない）。 0 を渡すと、キャンセルや no-show しかない顧客も出る。 | [Optional] [Defaults to `undefined`] |
| **dormantForDays** | `number` | 最終購入からこの日数以上あいた顧客だけを返す（休眠の抽出）。 | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | &#x60;total_amount&#x60; / &#x60;purchase_count&#x60; / &#x60;last_purchase_date&#x60;。既定は &#x60;total_amount&#x60;。 | [Optional] [Defaults to `undefined`] |
| **order** | `string` | &#x60;asc&#x60; / &#x60;desc&#x60;。既定は &#x60;desc&#x60;。 | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | 既定 50、上限 200。 | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CustomerPurchaseSummaryListResponse**](CustomerPurchaseSummaryListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 購買サマリの一覧 |  -  |
| **400** | クエリが不正、または通貨が一意に決まらない |  -  |
| **403** | field:ViewSalesAnalytics がない |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

