# CartItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_unit_price_nanodollar** | **i64** | The product's own price, before the variant and option adjustments. | 
**id** | **String** |  | 
**note** | Option<**String**> | Free-text note for this line, e.g. a kitchen instruction. | [optional]
**options** | [**Vec<models::SelectedOptionResponse>**](SelectedOptionResponse.md) |  | 
**options_total_nanodollar** | **i64** | Per-unit sum of the chosen options. | 
**product_id** | **String** |  | 
**quantity** | **i32** |  | 
**reserved_until** | Option<**String**> |  | [optional]
**unit_price_nanodollar** | **i64** | Effective price per unit: base + variant + options. | 
**variant_id** | Option<**String**> |  | [optional]
**variant_name** | Option<**String**> |  | [optional]
**variant_price_delta_nanodollar** | **i64** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


