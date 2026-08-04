# ApprovalWorkflowResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled_at** | Option<**String**> |  | [optional]
**cancelled_by** | Option<**String**> |  | [optional]
**comment** | Option<**String**> |  | [optional]
**created_at** | **String** |  | 
**current_step** | **i32** | 1-based current step for multi-stage workflows. `0` = single-stage. | 
**definition_snapshot** | Option<[**models::ApprovalFlowSnapshot**](ApprovalFlowSnapshot.md)> | Approval flow definition frozen at request time. Absent for single-stage workflows. | [optional]
**history** | [**Vec<models::ApprovalWorkflowEventResponse>**](ApprovalWorkflowEventResponse.md) |  | 
**id** | **String** |  | 
**requested_at** | **String** |  | 
**requested_by** | **String** |  | 
**resource_id** | **String** |  | 
**resource_type** | **String** |  | 
**reviewed_at** | Option<**String**> |  | [optional]
**reviewed_by** | Option<**String**> |  | [optional]
**status** | **String** |  | 
**tenant_id** | **String** |  | 
**updated_at** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


