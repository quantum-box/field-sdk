
# ReservationResourceResponse

Canonical generic resource representation.  The legacy `reservation_resources.capacity` column is deliberately not exposed. Slot capacity is owned by resource-scoped availability rules.

## Properties

Name | Type
------------ | -------------
`active` | boolean
`createdAt` | Date
`customFieldsJson` | any
`id` | string
`metadataJson` | any
`name` | string
`resourceModel` | string
`resourceType` | [ReservationResourceType](ReservationResourceType.md)
`storeId` | string
`tenantId` | string
`updatedAt` | Date


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


