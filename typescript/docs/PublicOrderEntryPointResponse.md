
# PublicOrderEntryPointResponse

What a printed QR is allowed to tell its reader.  The店舗 and seat appear as the names a human can check against the printed sticker. The tenant id, the store id and the entry point id do not appear at all: the caller has no use for them and publishing them would hand an anonymous reader the identifiers every other API is keyed by.

## Properties

Name | Type
------------ | -------------
`entryMode` | string
`idleTimeoutSecs` | number
`idleWarningSecs` | number
`sessionTtlSecs` | number
`storeName` | string
`tableName` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


