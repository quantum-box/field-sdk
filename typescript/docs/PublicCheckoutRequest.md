
# PublicCheckoutRequest

Deliberately narrower than `CheckoutRequest`.  - No `customer_id`. The StoreKit field is stamped onto the order without   being resolved, so an anonymous caller could file its order under   somebody else\'s customer record and put it in that customer\'s history.  `coupon_code` is accepted. It is re-validated and re-priced against `cart_id` server-side, so submitting one here is worth no more to a guesser than the preview route already allows, and a code that does not apply fails the checkout rather than quietly going through at full price.  `customer_id` remains available on the authenticated StoreKit route, where the caller is a known operator.

## Properties

Name | Type
------------ | -------------
`cancelUrl` | string
`cartId` | string
`couponCode` | string
`customerEmail` | string
`customerName` | string
`fulfillmentMethod` | string
`paymentMethod` | string
`pickupRequestedAt` | string
`salesChannel` | string
`salesChannelDetail` | string
`shippingAddress` | string
`shippingName` | string
`shippingPhone` | string
`sourceCampaign` | string
`sourceMedium` | string
`storeId` | string
`successUrl` | string
`tableNumber` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


