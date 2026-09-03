# \TachyonFieldAnalyticsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_customer_purchase_summary**](TachyonFieldAnalyticsApi.md#get_customer_purchase_summary) | **GET** /v1/erp/analytics/customer-purchase-summary/{customer_id} | 顧客1件の購買サマリ。
[**list_customer_purchase_summaries**](TachyonFieldAnalyticsApi.md#list_customer_purchase_summaries) | **GET** /v1/erp/analytics/customer-purchase-summary | 顧客ごとの購買サマリを横断で返す。



## get_customer_purchase_summary

> models::CustomerPurchaseSummaryResponse get_customer_purchase_summary(customer_id, from, to)
顧客1件の購買サマリ。

1回 = 予約1件。`confirmed` / `completed` で、かつ提供開始 (`startsAt`) が `computedAt` を過ぎたものだけを購入として数える。キャンセル・no-show・ 未提供・未確定は金額にも回数にも入れず、それぞれ件数だけを別項目で返す。 金額は税込で、`reservations.currency` ごとに `currencies` へ分けて返す。 集計はリクエストごとの都度計算で、いつ時点かは `computedAt`。  顧客台帳の存在確認はしない。予約を1件も持たない ID でも 404 ではなく、 すべて 0 のサマリを返す（「購入が無い」は正当な答えなので）。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** | 顧客台帳の ID（reservations.customer_id） | [required] |
**from** | Option<**String**> | 提供日（Asia/Tokyo）の下限。`YYYY-MM-DD`。省略すると全期間。 |  |
**to** | Option<**String**> | 提供日（Asia/Tokyo）の上限。`YYYY-MM-DD`。省略すると全期間。 |  |

### Return type

[**models::CustomerPurchaseSummaryResponse**](CustomerPurchaseSummaryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_customer_purchase_summaries

> models::CustomerPurchaseSummaryListResponse list_customer_purchase_summaries(from, to, currency, min_purchase_count, dormant_for_days, sort, order, limit, offset)
顧客ごとの購買サマリを横断で返す。

1回の数え方・キャンセル/no-show の扱い・金額未確定・税込は単票と同じ。 金額で並べ替えるため1ページは単一通貨で、`currency` を省略したときに対象へ 通貨が2つ以上あれば 400 にして選ばせる（黙って合算すると呼び出し側が 気づけないまま間違った合計を使う）。  `total` は絞り込み後の顧客数で、`limit` / `offset` とは独立している。 既定では購入が1件も無い顧客は出ない（`minPurchaseCount` の既定が 1）。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**from** | Option<**String**> | 提供日（Asia/Tokyo）の下限。`YYYY-MM-DD`。 |  |
**to** | Option<**String**> | 提供日（Asia/Tokyo）の上限。`YYYY-MM-DD`。 |  |
**currency** | Option<**String**> | 集計する通貨。対象に通貨が1つしか無ければ省略できる。2つ以上あるのに 省略すると、どれで並べたいのか決まらないので 400。 |  |
**min_purchase_count** | Option<**i64**> | 期間内の購入回数の下限。既定 1（購入が1件も無い顧客は出ない）。 0 を渡すと、キャンセルや no-show しかない顧客も出る。 |  |
**dormant_for_days** | Option<**i32**> | 最終購入からこの日数以上あいた顧客だけを返す（休眠の抽出）。 |  |
**sort** | Option<**String**> | `total_amount` / `purchase_count` / `last_purchase_date`。既定は `total_amount`。 |  |
**order** | Option<**String**> | `asc` / `desc`。既定は `desc`。 |  |
**limit** | Option<**i32**> | 既定 50、上限 200。 |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::CustomerPurchaseSummaryListResponse**](CustomerPurchaseSummaryListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

