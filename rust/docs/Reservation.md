# Reservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_at** | Option<**String**> |  | [optional]
**approved_by** | Option<**String**> |  | [optional]
**assigned_staff_ids** | **Vec<String>** |  | 
**bill_to** | Option<[**models::ReservationBillTo**](ReservationBillTo.md)> |  | [optional]
**cancel_reason** | Option<**String**> | Why the reservation currently in `cancelled` was cancelled. `None` both for a live reservation and for one cancelled without a stated reason; `cancelled_at` is what distinguishes those two. | [optional]
**cancelled_at** | Option<**String**> |  | [optional]
**checkout_url** | Option<**String**> |  | [optional]
**completed_at** | Option<**String**> |  | [optional]
**confirmed_at** | Option<**String**> |  | [optional]
**created_at** | **String** |  | 
**currency** | **String** |  | 
**custom_fields_json** | Option<**serde_json::Value**> |  | [optional]
**customer_email** | Option<**String**> |  | [optional]
**customer_id** | Option<**String**> |  | [optional]
**customer_name** | Option<**String**> |  | [optional]
**customer_phone** | Option<**String**> |  | [optional]
**deposit_amount** | **i64** |  | 
**ends_at** | **String** |  | 
**id** | **String** |  | 
**industry_extension_id** | Option<**String**> |  | [optional]
**internal_notes** | Option<**String**> |  | [optional]
**invoice_id** | Option<**String**> |  | [optional]
**notes** | Option<**String**> |  | [optional]
**order_id** | Option<**String**> |  | [optional]
**paid_amount** | **i64** |  | 
**payment_status** | [**models::ReservationPaymentStatus**](ReservationPaymentStatus.md) |  | 
**policy_context_json** | Option<**serde_json::Value**> |  | [optional]
**policy_snapshot_json** | Option<**serde_json::Value**> |  | [optional]
**price_amount** | **i64** |  | 
**quantity** | **i32** | Number of people or subjects in the reservation; not slot inventory groups. | 
**reservation_number** | **String** |  | 
**reservation_type_id** | **String** |  | 
**resource_id** | Option<**String**> |  | [optional]
**sales_ledger_id** | Option<**String**> |  | [optional]
**service_id** | Option<**String**> |  | [optional]
**source_channel** | **String** |  | 
**starts_at** | **String** |  | 
**status** | [**models::ReservationStatus**](ReservationStatus.md) |  | 
**store_id** | Option<**String**> |  | [optional]
**tenant_id** | **String** |  | 
**timezone** | **String** |  | 
**updated_at** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


