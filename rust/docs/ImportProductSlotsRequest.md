# ImportProductSlotsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clear_product_slots** | Option<**bool**> | Remove the migrated `slots` arrays from the tenant extension config. Availability already comes from the schedule at that point, so the declared list is redundant. | [optional]
**dry_run** | Option<**bool**> | Compute the plan without writing rules or touching the config. | [optional]
**extension_key** | Option<**String**> | Import only from this extension. Omit to read every enabled extension. | [optional]
**slot_interval_minutes** | Option<**i32**> | Start interval written to each imported rule: how often a booking may begin inside the declared window. Defaults to each declared slot's own `durationMinutes`. | [optional]
**timezone** | Option<**String**> | IANA timezone the declared local times are expressed in. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


