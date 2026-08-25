# ProductRestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_cycle** | **String** |  | 
**category** | Option<**String**> |  | [optional]
**category_id** | Option<**String**> | Storefront category this product is filed under, when it has one. | [optional]
**created_at** | **String** |  | 
**description** | Option<**String**> |  | [optional]
**id** | **String** |  | 
**image_file_ids** | **Vec<String>** |  | 
**image_storage_keys** | **Vec<String>** |  | 
**jan_code** | Option<**String**> |  | [optional]
**kind** | **String** |  | 
**list_price** | **i32** |  | 
**name** | **String** |  | 
**publication_description** | Option<**String**> |  | [optional]
**publication_name** | Option<**String**> |  | [optional]
**publication_status** | **String** |  | 
**sku_code** | Option<**String**> |  | [optional]
**status** | **String** |  | 
**storefront_product_id** | Option<**String**> | Storefront catalog product this product is published as.  `null` until the product is first created or updated with `publicationStatus: \"PUBLIC\"`. This is the id `/v1/storekit/products` lists it under and the id carts take, so consumers can link the two stores by id instead of matching on name (#1136). | [optional]
**subcategory** | Option<**String**> |  | [optional]
**tags** | **Vec<String>** |  | 
**tenant_id** | **String** |  | 
**upc_code** | Option<**String**> |  | [optional]
**updated_at** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


