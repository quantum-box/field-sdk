# ReservationCancellationEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor_id** | Option<**String**> |  | [optional]
**actor_type** | [**models::CancellationActorType**](CancellationActorType.md) |  | 
**cancellation_fee_amount** | Option<**i64**> |  | [optional]
**created_at** | **String** |  | 
**id** | **String** |  | 
**idempotency_key** | Option<**String**> | `Idempotency-Key` this cancellation was claimed under, when the caller opted in. Exposed so an operator can see which retry won the claim. | [optional]
**previous_status** | **String** | Status the reservation held immediately before it was cancelled. | 
**reason** | Option<**String**> |  | [optional]
**refund_amount** | Option<**i64**> |  | [optional]
**reservation_id** | **String** |  | 
**source** | **String** |  | 
**tenant_id** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


