# ReservationStatusLookupResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Vec<models::ReservationStatusSnapshot>**](ReservationStatusSnapshot.md) |  | 
**missing_ids** | **Vec<String>** | Ids this tenant has no reservation for. A caller referencing one of these is pointing at something that is gone or was never theirs; it is reported rather than silently omitted so the caller can tell that case apart from a reservation that is merely cancelled. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


