# ResourceTimeSlot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | 
**available_quantity** | **i32** | `capacity - reserved_quantity - held_quantity`, in groups. | 
**capacity** | **i32** | Count of reservation groups used by schedule capacity and slot counters.  This is intentionally distinct from reservation party size, which counts people or subjects. | 
**created_at** | **String** |  | 
**ends_at** | **String** |  | 
**generation_key** | **String** |  | 
**generation_range_from** | [**String**](String.md) |  | 
**generation_range_to** | [**String**](String.md) |  | 
**held_quantity** | **i32** | Count of reservation groups used by schedule capacity and slot counters.  This is intentionally distinct from reservation party size, which counts people or subjects. | 
**id** | **String** |  | 
**reserved_quantity** | **i32** | Count of reservation groups used by schedule capacity and slot counters.  This is intentionally distinct from reservation party size, which counts people or subjects. | 
**resource_id** | **String** |  | 
**source_availability_rule_id** | **String** | Compatibility alias retained for the v1 Field contract. | 
**source_availability_rule_revision** | **i64** | Compatibility alias retained for the v1 Field contract. | 
**source_schedule_date** | [**String**](String.md) | Local calendar date in the source schedule's timezone. | 
**source_schedule_id** | **String** |  | 
**source_schedule_kind** | [**models::ScheduleSourceKind**](ScheduleSourceKind.md) |  | 
**source_schedule_revision** | **i64** |  | 
**source_solar_algorithm** | Option<**String**> |  | [optional]
**source_solar_location_revision** | Option<**i64**> |  | [optional]
**starts_at** | **String** |  | 
**updated_at** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


