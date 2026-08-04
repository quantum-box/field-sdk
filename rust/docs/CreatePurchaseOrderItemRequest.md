# CreatePurchaseOrderItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** |  | 
**quantity** | **i64** | Positive quantity within the portable JSON integer range. | 
**tax_amount** | Option<**i64**> | Manual tax in currency minor units. Taxable categories use this value when supplied; otherwise the server calculates and rounds down. Zero-rate categories only accept zero. | [optional]
**tax_category** | Option<**String**> | Item tax category; inherits the order category when omitted. | [optional]
**unit_cost** | **i64** | Unit cost in currency minor units. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


