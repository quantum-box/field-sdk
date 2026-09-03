# ContactPreferenceEntryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**models::ContactPreferenceChannel**](ContactPreferenceChannel.md) | 連絡手段。`phone` / `email` / `sms` / `post`。 | 
**contactable** | **bool** | `false` で「このチャネルへは連絡しない」。`true` はその撤回。 どちらも証跡への追記で、前の行は残る。 | 
**note** | Option<**String**> | 申し出の内容や受け付けた状況。省略可。 | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


