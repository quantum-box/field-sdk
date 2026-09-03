
# ConvertReservationWaitlistEntryRequest

Overrides for the reservation an entry becomes.  Everything is optional and defaults to what the entry recorded. The overrides exist because the queue stores what the guest asked for weeks ago, and the booking that finally happens may differ — a different resource freed up, or the price was agreed on the phone.

## Properties

Name | Type
------------ | -------------
`cancelUrl` | string
`currency` | string
`depositAmount` | number
`endsAt` | Date
`idempotencyKey` | string
`notes` | string
`prepaymentPolicy` | string
`priceAmount` | number
`resourceId` | string
`startsAt` | Date
`successUrl` | string
`timezone` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


