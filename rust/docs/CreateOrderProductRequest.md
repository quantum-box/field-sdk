# CreateOrderProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_cycle** | **String** |  | 
**category** | Option<**String**> |  | [optional]
**category_id** | Option<**String**> | Storefront category (`cat_…`, from `GET /v1/storekit/categories`).  Distinct from `category`, which is the ERP-side free-text classification and has no storefront meaning. | [optional]
**description** | Option<**String**> |  | [optional]
**id** | Option<**String**> |  | [optional]
**idempotency_key** | Option<**String**> | Optional client-supplied key to make creation idempotent across retries. | [optional]
**image_storage_keys** | Option<**Vec<String>**> |  | [optional]
**jan_code** | Option<**String**> |  | [optional]
**kind** | **String** |  | 
**list_price** | **i32** |  | 
**name** | **String** |  | 
**option_groups** | Option<[**Vec<models::OrderProductOptionGroupRequest>**](OrderProductOptionGroupRequest.md)> | 選択肢 (トッピング等)。省略は「選択肢の話をしていない」。 | [optional]
**publication_description** | Option<**String**> |  | [optional]
**publication_name** | Option<**String**> |  | [optional]
**publication_status** | Option<**String**> |  | [optional]
**sku_code** | Option<**String**> |  | [optional]
**status** | **String** |  | 
**subcategory** | Option<**String**> |  | [optional]
**tags** | Option<**Vec<String>**> |  | [optional]
**upc_code** | Option<**String**> |  | [optional]
**variations** | Option<[**Vec<models::OrderProductVariationRequest>**](OrderProductVariationRequest.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


