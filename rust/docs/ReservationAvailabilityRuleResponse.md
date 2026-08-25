# ReservationAvailabilityRuleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | 
**capacity** | **i32** | Number of groups that can start concurrently. This is not party size. | 
**created_at** | **String** |  | 
**day_of_week** | **i32** | Monday is 0 and Sunday is 6. | 
**effective_from** | Option<[**String**](String.md)> |  | [optional]
**effective_to** | Option<[**String**](String.md)> |  | [optional]
**end_time** | **String** |  | 
**id** | **String** |  | 
**revision** | **i64** |  | 
**season_end_month_day** | Option<**String**> | Inclusive end of the annual operating season as `MM-DD`. | [optional]
**season_start_month_day** | Option<**String**> | Inclusive start of the annual operating season as `MM-DD`, or null when the rule operates all year. | [optional]
**slot_interval_minutes** | **i32** |  | 
**solar_window** | Option<[**models::SolarWindow**](SolarWindow.md)> | Null means this remains a fixed rule. | 
**start_time** | **String** |  | 
**timezone** | **String** |  | 
**updated_at** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


