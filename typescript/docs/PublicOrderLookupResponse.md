
# PublicOrderLookupResponse

The order, plus a short-lived handle for reading it again.  The token exists so a confirmation page can refresh without asking for the phone number a second time. It expires, and it is the only thing that opens the by-token read, so it is never put in a URL the caller did not already have to hold.

## Properties

Name | Type
------------ | -------------
`expiresAt` | string
`lookupToken` | string
`order` | [PublicOrderResponse](PublicOrderResponse.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


