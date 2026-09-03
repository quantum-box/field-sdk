# ContactPreferenceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**models::ContactPreferenceChannel**](ContactPreferenceChannel.md) |  | 
**contactable** | **bool** | **いま**このチャネルへ連絡してよいか。申し出が一度も無ければ `true` （既定は連絡可）。 | 
**declared** | **bool** | 顧客からの申し出が記録されているか。`false` は「聞いていない」で あって「拒否されていない」ことの証明ではない。 | 
**declared_at** | Option<**String**> | 最新の申し出の日時 (RFC 3339)。未記録なら `null`。 | [optional]
**note** | Option<**String**> | 申し出に添えられたメモ。 | [optional]
**recorded_by** | Option<**String**> | 受け付けた担当。 | [optional]
**source** | Option<**String**> | 申し出を受け取った経路 (`store` / `web` / `kiosk`)。連絡手段ではない。 | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


