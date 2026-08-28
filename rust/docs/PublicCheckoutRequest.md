# PublicCheckoutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_url** | Option<**String**> |  | [optional]
**cart_id** | **String** |  | 
**coupon_code** | Option<**String**> | Applied to `cart_id` and re-priced server-side. | [optional]
**customer_email** | Option<**String**> |  | [optional]
**customer_name** | Option<**String**> |  | [optional]
**fulfillment_method** | Option<**String**> | `pickup`, `delivery`, or `dine_in`. | [optional]
**payment_method** | Option<**String**> |  | [optional]
**pickup_requested_at** | Option<**String**> |  | [optional]
**sales_channel** | Option<**String**> |  | [optional]
**sales_channel_detail** | Option<**String**> |  | [optional]
**shipping_address** | Option<**String**> |  | [optional]
**shipping_name** | Option<**String**> |  | [optional]
**shipping_phone** | Option<**String**> |  | [optional]
**source_campaign** | Option<**String**> |  | [optional]
**source_medium** | Option<**String**> |  | [optional]
**store_id** | Option<**String**> |  | [optional]
**success_url** | Option<**String**> |  | [optional]
**table_number** | Option<**String**> | Seat or table a dine-in order is served to (#1138). Free text a diner reads off the table, so it is length-bounded and trimmed rather than resolved: naming a seat claims nothing and grants nothing. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


