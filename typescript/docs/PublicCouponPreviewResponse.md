
# PublicCouponPreviewResponse

Deliberately narrower than `CouponResponse`.  The discount table is not published: no coupon id, no discount type or value, no usage counters, no expiry. What comes back is the arithmetic for *this* cart — what it costs now, what comes off, what it would cost — which is what a checkout screen has to show, and not something a caller could reassemble the table from.

## Properties

Name | Type
------------ | -------------
`code` | string
`discountNanodollar` | number
`subtotalNanodollar` | number
`totalNanodollar` | number


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


