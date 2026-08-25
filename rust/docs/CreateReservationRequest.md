# CreateReservationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_staff_ids** | Option<**Vec<String>**> |  | [optional]
**bill_to** | Option<[**models::ReservationBillToRequest**](ReservationBillToRequest.md)> |  | [optional]
**cancel_url** | Option<**String**> |  | [optional]
**currency** | Option<**String**> |  | [optional]
**custom_fields** | Option<**serde_json::Value**> |  | [optional]
**customer_email** | Option<**String**> |  | [optional]
**customer_id** | Option<**String**> |  | [optional]
**customer_name** | Option<**String**> |  | [optional]
**customer_phone** | Option<**String**> |  | [optional]
**deposit_amount** | Option<**i64**> |  | [optional]
**ends_at** | **String** |  | 
**idempotency_key** | Option<**String**> |  | [optional]
**notes** | Option<**String**> |  | [optional]
**prepayment_policy** | Option<**String**> |  | [optional]
**price_amount** | Option<**i64**> |  | [optional]
**quantity** | Option<**i32**> | Number of people or subjects; one reservation still consumes one inventory group. | [optional]
**reservation_type_id** | **String** |  | 
**resource_id** | Option<**String**> |  | [optional]
**service_id** | Option<**String**> |  | [optional]
**starts_at** | **String** |  | 
**store_id** | Option<**String**> |  | [optional]
**success_url** | Option<**String**> |  | [optional]
**timezone** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


