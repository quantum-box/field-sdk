# CustomerPurchaseSummaryListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computed_at** | **String** | この集計がいつ時点かを表す UTC 時刻。 | 
**currency** | Option<**String**> | このページの金額がどの通貨のものか。対象に予約が1件も無ければ `null`。 | [optional]
**items** | [**Vec<models::CustomerPurchaseSummaryRowResponse>**](CustomerPurchaseSummaryRowResponse.md) |  | 
**limit** | **i32** |  | 
**offset** | **i32** |  | 
**period** | [**models::SummaryPeriodResponse**](SummaryPeriodResponse.md) |  | 
**total** | **i64** | 絞り込み後の顧客数。ページに載った件数ではない。 | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


