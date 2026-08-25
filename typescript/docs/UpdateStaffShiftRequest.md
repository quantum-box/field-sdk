
# UpdateStaffShiftRequest

A partial update of the mutable portion of a planned shift.  `staffId` and `date` are intentionally absent: changing either requires a DELETE followed by a new POST so the nested resource keeps its identity.

## Properties

Name | Type
------------ | -------------
`endTime` | string
`notes` | string
`shiftType` | string
`startTime` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


