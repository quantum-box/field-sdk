# LowStockAlertResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decided_at** | Option<**String**> |  | [optional]
**decided_by** | Option<**String**> |  | [optional]
**decision_note** | Option<**String**> |  | [optional]
**decision_status** | **String** |  | 
**preferred_order_quantity** | Option<**i64**> |  | [optional]
**product_name** | Option<**String**> | Always `null`, for the same reason as [`StockLevelResponse::product_name`]: this context stores no product name, and the SKU is the identity here (#724 W4). | [optional]
**quantity_on_hand** | **i64** |  | 
**recommended_order_quantity** | **i64** |  | 
**reorder_point_quantity** | **i64** |  | 
**replenishment_target_quantity** | **i64** |  | 
**safety_stock_quantity** | **i64** |  | 
**shortage_quantity** | **i64** |  | 
**sku** | **String** |  | 
**sku_code** | **String** |  | 
**stock_item_id** | **String** |  | 
**stock_level_id** | **String** |  | 
**updated_at** | **String** |  | 
**warehouse_id** | **String** |  | 
**warehouse_name** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


