# CreateScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_email** | Option<**String**> |  | [optional]
**client_id** | **String** |  | 
**client_name** | Option<**String**> |  | [optional]
**currency** | Option<**String**> |  | [optional]
**due_in_days** | Option<**i64**> |  | [optional]
**frequency** | **String** | monthly / quarterly / yearly | 
**invoice_number_prefix** | **String** |  | 
**line_items** | [**Vec<models::ScheduleLineItemRequest>**](ScheduleLineItemRequest.md) |  | 
**name** | **String** |  | 
**next_issue_date** | **String** | YYYY-MM-DD of the first issue. | 
**notes** | Option<**String**> |  | [optional]
**tax_category** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


