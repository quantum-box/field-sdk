# CreateSaasChangeRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver** | **String** |  | 
**change_type** | **String** |  | 
**estimated_delta_yen** | **i64** |  | 
**from_plan** | Option<**String**> |  | [optional]
**reason** | **String** |  | 
**requested_seats** | Option<**i32**> | Requested post-change seat count. Required (and must be positive) only when `changeType` is `seat_change` (#717); ignored otherwise. | [optional]
**requester** | Option<**String**> |  | [optional]
**service_name** | **String** |  | 
**state** | Option<**String**> |  | [optional]
**subscription_id** | Option<**String**> |  | [optional]
**to_plan** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


