# ImportProductSlotsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleared_products** | **i32** | Products whose declared `slots` list was removed from the config. | 
**dry_run** | **bool** |  | 
**imported** | **i32** | Declared slots turned into a new availability rule. | 
**resource_id** | **String** |  | 
**rules** | [**Vec<models::ReservationAvailabilityRuleResponse>**](ReservationAvailabilityRuleResponse.md) |  | 
**skipped** | **i32** | Declared slots an existing rule already covers. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


