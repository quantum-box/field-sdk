
# StockLevelResponse

A stock balance as the ERP context actually knows it.  The nullable fields below have **no source in this context** and are therefore always `null` (#724 W4). They are kept as explicit nulls rather than removed so a client can tell \"not provided\" from \"zero\"; previously they carried synthesized values that read as real data:  - `product_name` was the SKU. The ERP context stores no product name; the   SKU is the identity here. Resolving a name would mean joining   `order_products` by SKU, which spans two different tenant-scoping   regimes (this repository is bound to the process root tenant, that one   is per-request), so it is deliberately not done here. - `quantity_available` was `quantity_on_hand` and `quantity_allocated` was   `0`. The ERP context models no allocation at all, so neither can be   answered. Allocation lives in commerce `product_stocks`. - `source_delivery_id` was already always null. A balance is the sum of   many receipts, so a single delivery cannot identify it; the per-receipt   link lives on stock movements.  See `docs/domain/inventory-source-of-truth.md`.

## Properties

Name | Type
------------ | -------------
`id` | string
`lastUpdatedAt` | string
`productName` | string
`quantityAllocated` | number
`quantityAvailable` | number
`quantityOnHand` | number
`sku` | string
`skuCode` | string
`sourceDeliveryId` | string
`stockItemId` | string
`warehouseId` | string
`warehouseName` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


