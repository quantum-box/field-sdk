# StripeConnectAccountResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_mode** | Option<**String**> | `merchant_managed` or `platform_managed`. `null` when no account exists. | [optional]
**charges_enabled** | **bool** | Whether Stripe accepts charges on this account right now. This flag — not the presence of `connectedAccountId` — decides whether direct charges work. | 
**connected_account_id** | Option<**String**> | `null` while the tenant's charges still settle on the platform account. | [optional]
**details_submitted** | **bool** | Whether the hosted onboarding form was completed. Verification may still be pending, so this can be true while `chargesEnabled` is false. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


