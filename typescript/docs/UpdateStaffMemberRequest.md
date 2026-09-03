
# UpdateStaffMemberRequest

A partial update: an omitted field keeps whatever is stored.  The nullable fields take an explicit `null` to clear the stored value, which is why they are `Option<Option<_>>` — the previous shape wrote a default over every field the caller left out.

## Properties

Name | Type
------------ | -------------
`active` | boolean
`attributesJson` | any
`contractEndDate` | Date
`email` | string
`employmentStatus` | string
`employmentType` | string
`hiredAt` | Date
`jobTitle` | string
`name` | string
`phone` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


