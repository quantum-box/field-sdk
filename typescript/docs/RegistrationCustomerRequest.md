
# RegistrationCustomerRequest

The customer half of a reception sheet.  Every field but the name is optional here. Which of them a given tenant actually demands is decided by its reception field settings, not by this type: a dog run asks for an address, a bar asks for nothing but a name, and the customer ledger already stores every one of these as nullable.

## Properties

Name | Type
------------ | -------------
`address` | [RegistrationAddressRequest](RegistrationAddressRequest.md)
`birthDate` | string
`email` | string
`name` | string
`nameKana` | string
`phone` | string
`sex` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


