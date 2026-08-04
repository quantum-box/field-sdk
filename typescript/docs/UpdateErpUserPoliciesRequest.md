
# UpdateErpUserPoliciesRequest

Full replacement of the ERP-managed policy set as one flat list. Role policies (`pol_erp_admin` / `pol_erp_staff` / `pol_erp_viewer`) and tenant custom policies are given together; at most one role policy is accepted. An empty list detaches every ERP-managed policy (same as DELETE).

## Properties

Name | Type
------------ | -------------
`policyIds` | Array&lt;string&gt;


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


