# ReservationWaitlistEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed_at** | Option<**String**> |  | [optional]
**closed_by** | Option<**String**> |  | [optional]
**closed_reason** | Option<**String**> |  | [optional]
**converted_reservation_id** | Option<**String**> |  | [optional]
**created_at** | **String** |  | 
**customer_email** | Option<**String**> |  | [optional]
**customer_id** | Option<**String**> |  | [optional]
**customer_name** | Option<**String**> |  | [optional]
**customer_phone** | Option<**String**> |  | [optional]
**desired_ends_at** | **String** |  | 
**desired_starts_at** | **String** |  | 
**enqueued_at** | **String** | When the entry joined the queue. Distinct from `created_at` so that a re-queued request sorts by when it re-queued. | 
**id** | **String** |  | 
**notes** | Option<**String**> |  | [optional]
**quantity** | **i32** |  | 
**reservation_type_id** | **String** |  | 
**resource_id** | Option<**String**> | The resource the entry is waiting on. Stored as the empty string when unset, matching `reservation_time_slots`, but exposed as `None` so callers never have to know that. | [optional]
**service_id** | Option<**String**> |  | [optional]
**status** | [**models::ReservationWaitlistStatus**](ReservationWaitlistStatus.md) |  | 
**store_id** | Option<**String**> |  | [optional]
**tenant_id** | **String** |  | 
**updated_at** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


