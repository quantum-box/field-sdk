# StoreKitListProductResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more** | **bool** |  | 
**items** | [**Vec<models::StoreKitListProductResponseItemsInner>**](StoreKitListProductResponseItemsInner.md) |  | 
**limit** | **i32** |  | 
**offset** | **i32** |  | 
**total** | Option<**i32**> | 絞り込み後の総件数。ページの件数ではない (PLT-4050)。  `null` は「この一覧は総件数を数えていない」であって 0 ではない。総件 数には母集合を1回余分に数える COUNT が要るので、必要とする一覧だけが 値を載せる。今のところ載るのは `GET /v1/storekit/customers` だけ。 | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


