
# ConsumerConsentStateResponse

`consent_key` ごとに解決した現在の同意状態。  定義側 (`membership_consent_items`) と証跡側 (`customer_consents`) を突き 合わせた結果を返す。片方にしか無い状態もあるので、どちらの欠落も `null` で表せる形にしてある。

## Properties

Name | Type
------------ | -------------
`accepted` | boolean
`acceptedAt` | string
`acceptedTermsVersion` | string
`body` | string
`channel` | string
`consentKey` | string
`currentTermsVersion` | string
`evidenceRecordId` | string
`label` | string
`outdated` | boolean
`recordedBy` | string
`required` | boolean


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


