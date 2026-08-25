
# ReservationProductCatalogItem

A tenant-owned, industry-neutral reservation product.  `attributes_json` is deliberately opaque to Field. Extensions may keep product-specific fields there while the columns remain the stable contract.

## Properties

Name | Type
------------ | -------------
`attributesJson` | any
`bookingMode` | string
`createdAt` | Date
`durationMinutes` | number
`eligibleResourceIds` | Array&lt;string&gt;
`enabled` | boolean
`id` | string
`name` | string
`ownerExtensionKey` | string
`slots` | [Array&lt;ReservationProductSlot&gt;](ReservationProductSlot.md)
`tenantId` | string
`updatedAt` | Date


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


