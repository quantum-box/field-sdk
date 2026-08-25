# StorefrontAvailabilityCalendarResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | [**Vec<models::StorefrontAvailabilityDay>**](StorefrontAvailabilityDay.md) | One entry per date in `[from, to]`, ascending, with no gaps. A month grid needs every cell; reconstructing gaps from a sparse array is where off-by-one bugs live. | 
**few_left_threshold** | **i32** |  | 
**from** | [**String**](String.md) |  | 
**resource_id** | **String** |  | 
**timezone** | **String** |  | 
**to** | [**String**](String.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


