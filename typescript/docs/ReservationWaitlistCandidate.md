
# ReservationWaitlistCandidate

A queue entry together with what an operator needs to decide about it.  The two extra fields are computed per read rather than stored: both go stale the moment any other reservation on the slot changes, so a stored copy would be wrong more often than right.

## Properties

Name | Type
------------ | -------------
`closedAt` | Date
`closedBy` | string
`closedReason` | string
`convertedReservationId` | string
`createdAt` | Date
`customerEmail` | string
`customerId` | string
`customerName` | string
`customerPhone` | string
`desiredEndsAt` | Date
`desiredStartsAt` | Date
`enqueuedAt` | Date
`id` | string
`notes` | string
`quantity` | number
`reservationTypeId` | string
`resourceId` | string
`serviceId` | string
`status` | [ReservationWaitlistStatus](ReservationWaitlistStatus.md)
`storeId` | string
`tenantId` | string
`updatedAt` | Date
`availableSlotGroups` | number
`queuePosition` | number


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


