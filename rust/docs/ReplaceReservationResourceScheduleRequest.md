# ReplaceReservationResourceScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rolling_window_days** | Option<**i32**> | 1-365. Omit to preserve the current setting; explicit null clears it. The hourly job acts only when at least one active ordinary rule exists. | [optional]
**rules** | [**Vec<models::ReservationAvailabilityRuleRequest>**](ReservationAvailabilityRuleRequest.md) | Complete desired set of active resource-level availability rules. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


