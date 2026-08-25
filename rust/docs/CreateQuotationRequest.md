# CreateQuotationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_email** | Option<**String**> |  | [optional]
**client_id** | **String** |  | 
**client_name** | Option<**String**> |  | [optional]
**create_payment_link** | Option<**bool**> |  | [optional]
**currency** | Option<**String**> |  | [optional]
**items** | [**Vec<models::CreateQuotationItemRequest>**](CreateQuotationItemRequest.md) |  | 
**notes** | Option<**String**> |  | [optional]
**quotation_number** | Option<**String**> |  | [optional]
**send_email** | Option<**bool**> |  | [optional]
**status** | Option<**String**> |  | [optional]
**tax_amount** | Option<**i64**> |  | [optional]
**valid_until** | Option<**String**> | Omitted by clients that let the server pick the default validity (30 days from today), so operators cannot skew it via device clock. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


