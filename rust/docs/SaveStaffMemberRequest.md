# SaveStaffMemberRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | Option<**bool**> | Superseded by `employmentStatus`; `false` still means retired. | [optional]
**attributes_json** | Option<**serde_json::Value**> |  | [optional]
**contract_end_date** | Option<[**String**](String.md)> |  | [optional]
**email** | Option<**String**> |  | [optional]
**employment_status** | Option<**String**> | active / on_leave / retired. Wins over `active` when both are sent. | [optional]
**employment_type** | Option<**String**> |  | [optional]
**hired_at** | Option<[**String**](String.md)> |  | [optional]
**name** | **String** |  | 
**phone** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


