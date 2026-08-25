# UpdateReservationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_staff_ids** | Option<**Vec<String>**> |  | [optional]
**bill_to** | Option<[**models::ReservationBillToRequest**](ReservationBillToRequest.md)> |  | [optional]
**cancel_reason** | Option<**String**> | Reason recorded when this update is what cancels the reservation. Ignored unless `status` moves the reservation into `cancelled`. | [optional]
**custom_fields** | Option<**serde_json::Value**> |  | [optional]
**customer_email** | Option<**String**> |  | [optional]
**customer_name** | Option<**String**> |  | [optional]
**customer_phone** | Option<**String**> |  | [optional]
**ends_at** | Option<**String**> |  | [optional]
**internal_notes** | Option<**String**> |  | [optional]
**notes** | Option<**String**> |  | [optional]
**payment_status** | Option<**String**> |  | [optional]
**resource_id** | Option<**String**> |  | [optional]
**starts_at** | Option<**String**> |  | [optional]
**status** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


