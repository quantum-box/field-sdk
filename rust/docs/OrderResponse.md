# OrderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled_at** | Option<**String**> |  | [optional]
**cart_id** | Option<**String**> |  | [optional]
**checkout_url** | Option<**String**> |  | [optional]
**confirmed_at** | Option<**String**> |  | [optional]
**created_at** | **String** |  | 
**customer_email** | Option<**String**> |  | [optional]
**customer_id** | Option<**String**> |  | [optional]
**customer_name** | Option<**String**> |  | [optional]
**delivered_at** | Option<**String**> |  | [optional]
**discount_nanodollar** | **i64** |  | 
**fulfillment_method** | Option<**String**> | `pickup`, `delivery`, or `dine_in`. | [optional]
**id** | **String** |  | 
**items** | [**Vec<models::OrderItemResponse>**](OrderItemResponse.md) |  | 
**order_entry_mode** | Option<**String**> | How the order was entered: `qr`, `kiosk`, `staff`, or `online`.  Server-derived, and `None` on every order placed before the column existed. A staff board reads the route from here rather than taking apart an encoded `sales_channel_detail`. | [optional]
**payment_method** | Option<**String**> |  | [optional]
**payment_status** | **String** |  | 
**picked_up_at** | Option<**String**> |  | [optional]
**pickup_deadline** | Option<**String**> |  | [optional]
**pickup_requested_at** | Option<**String**> |  | [optional]
**ready_at** | Option<**String**> |  | [optional]
**refunded_at** | Option<**String**> |  | [optional]
**sales_channel** | **String** |  | 
**sales_channel_detail** | Option<**String**> |  | [optional]
**session_id** | Option<**String**> |  | [optional]
**shipped_at** | Option<**String**> |  | [optional]
**shipping_address** | Option<**String**> |  | [optional]
**shipping_fee_nanodollar** | **i64** |  | 
**shipping_name** | Option<**String**> |  | [optional]
**shipping_phone** | Option<**String**> |  | [optional]
**source_campaign** | Option<**String**> |  | [optional]
**source_medium** | Option<**String**> |  | [optional]
**status** | **String** |  | 
**subtotal_nanodollar** | **i64** |  | 
**table_number** | Option<**String**> | Seat or table the dine-in order is served to. | [optional]
**tenant_id** | **String** |  | 
**total_nanodollar** | **i64** |  | 
**updated_at** | **String** |  | 
**user_id** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


