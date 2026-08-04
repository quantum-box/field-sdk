
# ProductRestResponse

REST-facing mirror of the GraphQL `Product` type (`order_model::Product`).  `Product` derives `async_graphql::SimpleObject` and is reused directly as a REST response body by these handlers. We avoid deriving `utoipa::ToSchema` on the GraphQL type itself (that file is GraphQL-schema-owned) and instead mirror every field here for OpenAPI documentation purposes. The JSON wire format produced by this wrapper is byte-for-byte identical to serializing `Product` directly, since every field is copied verbatim.

## Properties

Name | Type
------------ | -------------
`billingCycle` | string
`category` | string
`createdAt` | string
`description` | string
`id` | string
`imageFileIds` | Array&lt;string&gt;
`imageStorageKeys` | Array&lt;string&gt;
`janCode` | string
`kind` | string
`listPrice` | number
`name` | string
`publicationDescription` | string
`publicationName` | string
`publicationStatus` | string
`skuCode` | string
`status` | string
`subcategory` | string
`tags` | Array&lt;string&gt;
`tenantId` | string
`upcCode` | string
`updatedAt` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


