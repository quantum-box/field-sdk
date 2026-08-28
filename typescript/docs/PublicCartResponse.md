
# PublicCartResponse

Deliberately narrower than `CartResponse`.  `user_id` and `session_id` are omitted: they name the shopper, and the only thing this route asks of its caller is possession of the cart identifier. `tenant_id` is omitted because the caller supplied it in the path.

## Properties

Name | Type
------------ | -------------
`createdAt` | string
`expiresAt` | string
`id` | string
`items` | [Array&lt;PublicCartItemResponse&gt;](PublicCartItemResponse.md)
`status` | string
`subtotalNanodollar` | number
`updatedAt` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


