
# CancelReservationRequest

`Serialize` is derived so the cancel handler can hash the request under an `Idempotency-Key`: the hash is what distinguishes a genuine retry from a key reused for a different cancellation.

## Properties

Name | Type
------------ | -------------
`cancellationFeeAmount` | number
`feeCancelUrl` | string
`feeSuccessUrl` | string
`reason` | string
`refundAmount` | number


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


