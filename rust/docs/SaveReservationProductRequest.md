# SaveReservationProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes_json** | Option<**serde_json::Value**> |  | 
**booking_mode** | **String** |  | 
**duration_minutes** | **i32** |  | 
**eligible_resource_ids** | Option<**Vec<String>**> | `null`/missing means unrestricted. An explicit empty array means the product is offered on no resource. | [optional]
**enabled** | **bool** |  | 
**id** | Option<**String**> | Stable, tenant-local product id. Omit on create to let Field generate it. | [optional]
**name** | **String** |  | 
**owner_extension_key** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


