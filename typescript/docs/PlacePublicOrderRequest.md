
# PlacePublicOrderRequest

Deliberately tiny.  Where the order goes, which seat serves it, how it is handed over and which channel it belongs to are all resolved from the entry point. `deny_unknown_fields` is what makes that enforceable: a client that tries to add `table_number` gets a 400 instead of being quietly ignored, which is the difference between a contract and a hope.

## Properties

Name | Type
------------ | -------------
`customerName` | string
`items` | [Array&lt;PublicOrderLine&gt;](PublicOrderLine.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


