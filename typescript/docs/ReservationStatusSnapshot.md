
# ReservationStatusSnapshot

The current state of one reservation, without the booking detail around it.  This is what a caller that already holds reservation ids needs in order to reconcile its own records against Field: whether the reservation is still live, and when it last moved. Keeping it separate from [`Reservation`] is deliberate — the reconciliation contract stays stable even as the booking payload grows, and it carries no customer PII.

## Properties

Name | Type
------------ | -------------
`cancelledAt` | Date
`id` | string
`status` | [ReservationStatus](ReservationStatus.md)
`updatedAt` | Date


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


