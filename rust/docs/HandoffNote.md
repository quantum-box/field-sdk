# HandoffNote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledged_at** | Option<**String**> | When someone took the handover over. `None` while it is still outstanding, which is what the reception board filters on. | [optional]
**acknowledged_by** | Option<**String**> |  | [optional]
**author_id** | Option<**String**> |  | [optional]
**author_type** | [**models::HandoffNoteAuthorType**](HandoffNoteAuthorType.md) |  | 
**body** | **String** |  | 
**category** | **String** |  | 
**created_at** | **String** |  | 
**id** | **String** |  | 
**retracted_at** | Option<**String**> | A note written in error stays readable and is marked retracted; it is never removed, or the log would no longer be a log. | [optional]
**retracted_by** | Option<**String**> |  | [optional]
**retraction_reason** | Option<**String**> |  | [optional]
**subject_id** | **String** |  | 
**subject_type** | **String** |  | 
**tenant_id** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


