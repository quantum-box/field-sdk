# InvoiceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bill_to** | Option<[**models::InvoiceBillToResponse**](InvoiceBillToResponse.md)> |  | [optional]
**client_email** | Option<**String**> |  | [optional]
**client_id** | **String** |  | 
**client_name** | Option<**String**> |  | [optional]
**client_phone** | Option<**String**> | Recipient number the invoice SMS is addressed to. | [optional]
**created_at** | **String** |  | 
**currency** | **String** |  | 
**due_date** | **String** |  | 
**email_delivery_failure_code** | Option<**String**> | Why the last email delivery attempt failed. Present only while `emailDeliveryStatus` is `Failed`. | [optional]
**email_delivery_status** | Option<**String**> |  | [optional]
**id** | **String** |  | 
**invoice_number** | **String** |  | 
**line_items** | [**Vec<models::InvoiceLineItemResponse>**](InvoiceLineItemResponse.md) |  | 
**non_posting_reason** | Option<**String**> |  | [optional]
**notes** | Option<**String**> |  | [optional]
**paid_at** | Option<**String**> |  | [optional]
**payment_link_failure_code** | Option<**String**> |  | [optional]
**payment_link_status** | Option<**String**> |  | [optional]
**payment_link_url** | Option<**String**> |  | [optional]
**posting_disposition** | **String** |  | 
**sent_at** | Option<**String**> |  | [optional]
**sms_delivery_failure_code** | Option<**String**> | Why the last SMS delivery attempt failed. Present only while `smsDeliveryStatus` is `Failed`. | [optional]
**sms_delivery_status** | Option<**String**> |  | [optional]
**sources** | [**Vec<models::InvoiceSourceResponse>**](InvoiceSourceResponse.md) | What this invoice was raised for. Empty when no origin was declared. | 
**square_payment_link_id** | Option<**String**> |  | [optional]
**status** | **String** |  | 
**subtotal_amount** | **i64** |  | 
**tax_amount** | **i64** |  | 
**tax_category** | **String** |  | 
**tenant_id** | **String** |  | 
**total_amount** | **i64** |  | 
**updated_at** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


