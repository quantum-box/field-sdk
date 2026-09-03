
# InvoiceSourceRequest

A record this invoice is being raised from.  `reason` is the caller\'s own classification. Field stores it verbatim, filters on it exactly, and attaches no meaning to any particular value, so one tenant\'s `cancellation_fee` and another\'s `no_show_fee` are the same kind of thing to Field.

## Properties

Name | Type
------------ | -------------
`reason` | string
`sourceId` | string
`sourceType` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


