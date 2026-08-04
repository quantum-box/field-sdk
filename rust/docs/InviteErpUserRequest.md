# InviteErpUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_policy_ids** | Option<**Vec<String>**> |  | [optional]
**email** | **String** |  | 
**notify_user** | Option<**bool**> |  | [optional]
**policy_ids** | Option<**Vec<String>**> | Flat policy list (see [`UpdateErpUserPoliciesRequest`]). Takes precedence over `role` / `custom_policy_ids` when present. | [optional]
**role** | Option<[**models::ErpRole**](ErpRole.md)> | Legacy pair: exclusive role + custom policies. Either this or `policy_ids` must be provided. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


