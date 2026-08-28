# OrderProductOptionGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | Option<**String**> | 省略すると採番する。更新で既存グループを指すときは必須。 | [optional]
**max_select** | Option<**i32**> | 最大選択数。`single` では 1 に丸められる。 | [optional]
**min_select** | Option<**i32**> | 最低選択数。`1` 以上で必須の選択になる。 | [optional]
**name** | **String** |  | 
**options** | Option<[**Vec<models::OrderProductOptionRequest>**](OrderProductOptionRequest.md)> |  | [optional]
**selection_type** | Option<**String**> | `single` (既定) か `multiple`。 | [optional]
**sort_order** | Option<**i32**> |  | [optional]
**status** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


