# RegistrationSubjectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**birth_date** | Option<**String**> | YYYY-MM-DD | [optional]
**custom_fields** | Option<**serde_json::Value**> | Trade-specific boxes for this subject — breed, size, plate number — keyed by `custom_field_definitions.field_key` under the `customer_subject` entity type. Every active required definition must be present, as on the values endpoint. | [optional]
**name** | **String** |  | 
**note** | Option<**String**> |  | [optional]
**sex** | Option<**String**> |  | [optional]
**subject_type** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


