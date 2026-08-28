# PublicOrderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkout_url** | Option<**String**> |  | [optional]
**created_at** | **String** |  | 
**fulfillment_method** | Option<**String**> | `pickup`, `delivery`, or `dine_in`. | [optional]
**id** | **String** |  | 
**items** | [**Vec<models::PublicOrderItemResponse>**](PublicOrderItemResponse.md) |  | 
**payment_status** | **String** |  | 
**pickup_deadline** | Option<**String**> |  | [optional]
**pickup_requested_at** | Option<**String**> |  | [optional]
**shipping_fee_nanodollar** | **i64** |  | 
**status** | **String** |  | 
**subtotal_nanodollar** | **i64** |  | 
**table_number** | Option<**String**> |  | [optional]
**total_nanodollar** | **i64** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


