# ScheduleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | 
**client_email** | Option<**String**> |  | [optional]
**client_id** | **String** |  | 
**client_name** | Option<**String**> |  | [optional]
**currency** | **String** |  | 
**due_in_days** | **i64** |  | 
**frequency** | **String** |  | 
**id** | **String** |  | 
**invoice_number_prefix** | **String** |  | 
**last_issued_at** | Option<**String**> |  | [optional]
**line_items** | **Vec<serde_json::Value>** | Recurring line items (description, quantity, unit price, tax category). | 
**name** | **String** |  | 
**next_issue_date** | **String** |  | 
**notes** | Option<**String**> |  | [optional]
**tax_category** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


