# OrderItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_unit_price_nanodollar** | **i64** | The product's own price, before the variant and option adjustments. | 
**id** | **String** |  | 
**note** | Option<**String**> | Free-text note for this line, e.g. a kitchen instruction. | [optional]
**options** | [**Vec<models::SelectedOptionResponse>**](SelectedOptionResponse.md) |  | 
**options_total_nanodollar** | **i64** | Per-unit sum of the chosen options. | 
**product_id** | **String** |  | 
**product_name** | **String** |  | 
**quantity** | **i32** |  | 
**subtotal_nanodollar** | **i64** |  | 
**unit_price_nanodollar** | **i64** | Effective price per unit: base + variant + options. | 
**variant_id** | Option<**String**> |  | [optional]
**variant_name** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


