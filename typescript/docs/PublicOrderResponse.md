
# PublicOrderResponse

What the caller needs to show a confirmation screen and, when a payment session was opened, to go pay. It is not an order read: the customer contact details the caller just submitted are not echoed back, so nothing here would help someone who guessed an order identifier.

## Properties

Name | Type
------------ | -------------
`checkoutUrl` | string
`createdAt` | string
`fulfillmentMethod` | string
`id` | string
`items` | [Array&lt;PublicOrderItemResponse&gt;](PublicOrderItemResponse.md)
`paymentStatus` | string
`pickupDeadline` | string
`pickupRequestedAt` | string
`shippingFeeNanodollar` | number
`status` | string
`subtotalNanodollar` | number
`tableNumber` | string
`totalNanodollar` | number


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


