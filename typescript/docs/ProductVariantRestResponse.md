
# ProductVariantRestResponse

REST-facing mirror of the GraphQL `ProductVariant` type (`order_model::ProductVariant`).  `ProductVariant.metadata` is an `Option<async_graphql::Json<serde_json::Value>>`, which has no `ToSchema` impl and is owned by the GraphQL schema. Since `async_graphql::Json<T>` serializes transparently as `T`, unwrapping it to a plain `Option<serde_json::Value>` here produces an identical JSON wire format while allowing `ToSchema` to be derived.

## Properties

Name | Type
------------ | -------------
`code` | string
`createdAt` | string
`id` | string
`metadata` | any
`name` | string
`productId` | string
`status` | string
`tenantId` | string
`updatedAt` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


