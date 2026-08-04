
# StockTrackingResponse

Only fields the ERP context actually holds.  There is deliberately no `productName`, `quantityAvailable`, `quantityAllocated` or `sourceDeliveryId` here: the ERP context stores no product name and models no allocation, and this endpoint is new, so it does not inherit the synthesized values the stock-level list still returns.

## Properties

Name | Type
------------ | -------------
`alreadyStarted` | boolean
`lastUpdatedAt` | string
`quantityOnHand` | number
`sku` | string
`stockItemId` | string
`stockLevelId` | string
`warehouseId` | string
`warehouseName` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


