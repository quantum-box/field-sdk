# ConsumerConsentStateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted** | Option<**bool**> | 一度も記録が無ければ `null`。`false` は「拒否された」であって「未取得」 ではない。 | [optional]
**accepted_at** | Option<**String**> |  | [optional]
**accepted_terms_version** | Option<**String**> | 記録時点の約款バージョン。 | [optional]
**body** | Option<**String**> |  | [optional]
**channel** | Option<**String**> |  | [optional]
**consent_key** | **String** |  | 
**current_terms_version** | Option<**String**> | 定義側の現在の約款バージョン。 | [optional]
**evidence_record_id** | Option<**String**> | Source application document retained in the Evidence domain. | [optional]
**label** | Option<**String**> | 定義が無効化・削除済みの `consentKey` では `null`。証跡は残るので行は 消えない。 | [optional]
**outdated** | **bool** | 同意済みだが、そのときの約款バージョンが現在の定義と違う。再同意を 促す判断に使う。 | 
**recorded_by** | Option<**String**> |  | [optional]
**required** | Option<**bool**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


