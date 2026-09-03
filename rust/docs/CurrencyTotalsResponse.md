# CurrencyTotalsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **String** | ISO 4217。`reservations.currency` の値。 | 
**first_purchase_date** | Option<**String**> | この通貨での初回購入日（Asia/Tokyo）。 | [optional]
**last_purchase_date** | Option<**String**> | この通貨での最終購入日（Asia/Tokyo）。 | [optional]
**paid_amount** | **i64** | うち回収済み。`total_amount - paid_amount` が未収。 | 
**purchase_count** | **i64** | この通貨での購入回数。 | 
**total_amount** | **i64** | 累計購入額。税込。金額未確定（0）の予約もそのまま 0 として入る。 | 
**unpriced_count** | **i64** | この通貨での購入のうち、金額が未確定（0）のもの。 | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


