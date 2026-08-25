# ReservationProductCatalogListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Vec<models::ReservationProductCatalogItem>**](ReservationProductCatalogItem.md) |  | 
**seeded** | **bool** | Whether this tenant has crossed the migration boundary.  An empty `items` is ambiguous without it: a tenant that never seeded and one that seeded and then deleted every product both list nothing, yet only the first still has the storefront reading extension config. A writer that cannot tell them apart saves to the side nobody reads. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


