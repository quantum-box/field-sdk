# PutReservationScheduleDateOverrideRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_revision** | Option<**i64**> | Omit on creation or restore; required on an active update. | [optional]
**kind** | [**models::ScheduleDateOverrideKind**](ScheduleDateOverrideKind.md) |  | 
**timezone** | **String** |  | 
**windows** | Option<[**Vec<models::ScheduleDateOverrideWindowRequest>**](ScheduleDateOverrideWindowRequest.md)> | Must be omitted for `closed` and non-empty for `replace`. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


