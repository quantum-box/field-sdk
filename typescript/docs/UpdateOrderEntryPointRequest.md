
# UpdateOrderEntryPointRequest

A partial edit.  An absent field is left alone. The three optional labels are cleared by sending an empty string rather than `null`: a `null` that means \"clear\" and an absent field that means \"leave\" are the same value to `Option`, and the distinction is not worth a wrapper type on a form with three of them.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`idleTimeoutSecs` | number
`idleWarningSecs` | number
`sessionTtlSecs` | number
`storeId` | string
`storeName` | string
`tableName` | string
`tableNumber` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


