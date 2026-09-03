# CustomerPurchaseSummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled_count** | **i64** | キャンセル（`cancelled` / `rejected`）。金額にも回数にも入れていない。 | 
**computed_at** | **String** | この集計がいつ時点かを表す UTC 時刻。都度計算なので常に「今」で、 「確定済みだが提供日がまだ来ていない」の判定基準もこの時刻。 | 
**currencies** | [**Vec<models::CurrencyTotalsResponse>**](CurrencyTotalsResponse.md) | 通貨ごとの金額の内訳。購入が無ければ空。 | 
**customer_id** | **String** |  | 
**first_purchase_date** | Option<**String**> | 初回購入日（Asia/Tokyo）。購入が無ければ `null`。 | [optional]
**last_purchase_date** | Option<**String**> | 最終購入日（Asia/Tokyo）。購入が無ければ `null`。 | [optional]
**no_show_count** | **i64** | no-show。金額にも回数にも入れていない。 | 
**pending_count** | **i64** | まだ確定していない予約（申込中・支払待ち・変更/キャンセル申請中など）。 | 
**period** | [**models::SummaryPeriodResponse**](SummaryPeriodResponse.md) |  | 
**purchase_count** | **i64** | 購入回数（通貨をまたいだ合計）。 | 
**unpriced_count** | **i64** | 購入のうち金額が未確定（0）のもの。0 を足しただけの回数が分かる。 | 
**upcoming_count** | **i64** | 確定済みだが提供日がまだ来ていない予約。購入には数えていない。 | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


