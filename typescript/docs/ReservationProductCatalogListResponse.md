
# ReservationProductCatalogListResponse

The management view of the catalog.  Named apart from the StoreKit `ReservationProductListResponse` on purpose: utoipa derives schema names from the struct, so two `ToSchema` types sharing one name collapse into a single OpenAPI component and generated clients get the wrong shape for whichever route loses.

## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;ReservationProductCatalogItem&gt;](ReservationProductCatalogItem.md)
`seeded` | boolean


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


