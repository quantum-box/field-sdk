# CreateInvoiceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bill_to** | Option<[**models::InvoiceBillToRequest**](InvoiceBillToRequest.md)> |  | [optional]
**client_email** | Option<**String**> |  | [optional]
**client_id** | Option<**String**> | Legacy untyped counterparty. Existing callers may continue sending this without `billTo`; new callers should send typed `billTo` instead. At least one of `clientId` or `billTo` is required. | [optional]
**client_name** | Option<**String**> |  | [optional]
**client_phone** | Option<**String**> |  | [optional]
**create_payment_link** | Option<**bool**> |  | [optional]
**currency** | Option<**String**> |  | [optional]
**due_date** | **String** |  | 
**idempotency_key** | Option<**String**> | Retry key. When invoice_number is omitted this is mapped to the existing tenant + invoice_number unique key, so a lost response can be retried. | [optional]
**invoice_number** | Option<**String**> |  | [optional]
**line_items** | [**Vec<models::CreateInvoiceLineItemRequest>**](CreateInvoiceLineItemRequest.md) |  | 
**notes** | Option<**String**> |  | [optional]
**payment_link_provider** | Option<**String**> |  | [optional]
**send_email** | Option<**bool**> |  | [optional]
**send_sms** | Option<**bool**> |  | [optional]
**sms_message** | Option<**String**> |  | [optional]
**sources** | Option<[**Vec<models::InvoiceSourceRequest>**](InvoiceSourceRequest.md)> | Records this invoice is raised from. Optional and additive: an existing caller that omits it creates an invoice with no declared origin, exactly as before. | [optional]
**status** | Option<**String**> |  | [optional]
**tax_amount** | Option<**i64**> |  | [optional]
**tax_category** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


