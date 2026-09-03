# ReservationListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Vec<models::Reservation>**](Reservation.md) |  | 
**limit** | **i32** | The page size actually applied. A request above the documented maximum is capped rather than rejected, and this is where the cap shows up. | 
**offset** | **i32** | The offset actually applied. | 
**total** | **i64** | Reservations matching the filter across the whole tenant, ignoring `limit`/`offset`. Paging is done when `offset + items.len() >= total`. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


