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
**name** | **String** |  | 
**phone** | Option<**String**> |  | [optional]
**tenant_id** | **String** |  | 
**updated_at** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


