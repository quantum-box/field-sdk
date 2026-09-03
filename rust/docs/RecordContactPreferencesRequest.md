# RecordContactPreferencesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preferences** | [**Vec<models::ContactPreferenceEntryRequest>**](ContactPreferenceEntryRequest.md) | 1回の申し出で複数チャネルをまとめて記録できる。同じチャネルを2つ 入れた要求は 400。同一時刻の2行のどちらが勝つかを呼び出し側の 並び順に委ねないため。 | 
**source** | Option<**String**> | 申し出を**受け取った経路**。`store`（既定）/ `web` / `kiosk`。 連絡手段ではない。 | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


