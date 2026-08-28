
# PublicAddCartItemRequest

The variant and options are named by identifier only.  This is what makes the selection safe to accept from an anonymous caller: the amount each choice adds is read from the catalog master server-side, so a request states *what* was chosen and never *what it costs*.

## Properties

Name | Type
------------ | -------------
`note` | string
`optionIds` | Array&lt;string&gt;
`productId` | string
`quantity` | number
`variantId` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


