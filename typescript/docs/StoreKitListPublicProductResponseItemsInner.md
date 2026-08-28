
# StoreKitListPublicProductResponseItemsInner

A menu row, and whether it can be ordered right now.  Wider than `ProductResponse` by exactly one bit, and narrower than the stock route by everything else: no quantity on hand, no reservation count, no low-stock threshold. A shopper needs to know an item is unavailable before adding it to a cart; how much of it exists is the store\'s business.

## Properties

Name | Type
------------ | -------------
`billingCycle` | string
`categoryId` | string
`description` | string
`id` | string
`imageIds` | Array&lt;string&gt;
`kind` | string
`listPrice` | number
`name` | string
`orderable` | boolean
`publicationDescription` | string
`publicationName` | string
`weightGrams` | number


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


