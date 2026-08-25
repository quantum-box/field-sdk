# ReservationAvailabilityRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **i32** | Number of groups that can start concurrently. This is not party size. | 
**day_of_week** | **i32** | Monday is 0 and Sunday is 6. | 
**effective_from** | Option<[**String**](String.md)> |  | [optional]
**effective_to** | Option<[**String**](String.md)> |  | [optional]
**end_time** | **String** |  | 
**id** | Option<**String**> | Existing rule ID. Omit when adding a new schedule window. | [optional]
**season_end_month_day** | Option<**String**> | Inclusive end of the annual season, as `MM-DD`. A value earlier than `seasonStartMonthDay` describes a season that wraps the new year. | [optional]
**season_start_month_day** | Option<**String**> | Inclusive start of a season that repeats every year, as `MM-DD`. Set together with `seasonEndMonthDay`; omit both to operate all year. | [optional]
**slot_interval_minutes** | **i32** | Start interval in minutes; independent from service duration. | 
**solar_window** | Option<[**models::SolarWindow**](SolarWindow.md)> | Omit to preserve an existing rule policy; null explicitly clears it. | [optional]
**start_time** | **String** |  | 
**timezone** | **String** | IANA timezone such as `Asia/Tokyo`. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


