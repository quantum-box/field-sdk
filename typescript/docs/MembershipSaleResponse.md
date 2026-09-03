
# MembershipSaleResponse

What the counter sale recorded, or why it did not.  The customer, their consents and their membership are written before the sale, in different tables, and cannot be rolled back together. Failing the whole request when only the sale fails would leave the operator looking at an error with a registered customer behind it, and the obvious response — submit again — creates a second customer.  So the sale is best effort and says so out loud. `orderId` present means the money is recorded; `error` present means it is not and somebody has to ring it up. What must never happen is neither: silence would be the same unrecorded revenue this whole change exists to fix.

## Properties

Name | Type
------------ | -------------
`error` | string
`orderId` | string
`productId` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


