# StaffMember

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Kept for the clients that predate `employment_status`; always `employment_status.is_active()`. | 
**attributes_json** | Option<**serde_json::Value**> |  | [optional]
**contract_end_date** | Option<[**String**](String.md)> |  | [optional]
**created_at** | **String** |  | 
**email** | Option<**String**> |  | [optional]
**employment_status** | [**models::EmploymentStatus**](EmploymentStatus.md) |  | 
**employment_type** | [**models::EmploymentType**](EmploymentType.md) |  | 
**hired_at** | Option<[**String**](String.md)> |  | [optional]
**id** | **String** |  | 
**job_title** | Option<**String**> | The position held, which is a different axis from how the person is engaged: a director is under a delegation contract rather than an employment one, and can serve either full time or not. Free text so a tenant can spell its own org chart; `None` when nothing was recorded. | [optional]
**name** | **String** |  | 
**phone** | Option<**String**> |  | [optional]
**tenant_id** | **String** |  | 
**updated_at** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


