
# ProductRestResponse

REST response for an order product.  This mirrors the GraphQL `Product` type (`order_model::Product`) field for field, because the two surfaces describe the same row and clients read them interchangeably. It is a separate type because that file is GraphQL-schema-owned and cannot derive `utoipa::ToSchema`.  REST additionally carries `categoryId` and `storefrontProductId` (#1136). Both belong to the storefront projection, which has no GraphQL surface (`/v1/graphql` is quarantined), so REST builds this straight from the `OrderProduct` row.

## Properties

Name | Type
------------ | -------------
`billingCycle` | string
`category` | string
`categoryId` | string
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
`storefrontProductId` | string
`subcategory` | string
`tags` | Array&lt;string&gt;
`tenantId` | string
`upcCode` | string
`updatedAt` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


