# CreateCustomerContactRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **String** | phone / email / visit / chat / sms / letter / other | 
**direction** | **String** | outbound / inbound | 
**next_action_at** | Option<**String**> |  | [optional]
**note** | Option<**String**> |  | [optional]
**occurred_at** | Option<**String**> | 実際に接触した時刻。省略時はサーバの現在時刻。 | [optional]
**outcome** | Option<**String**> | connected / no_answer / left_message / refused / callback_requested / undeliverable / other。かけた時点で分からなければ省略してよく、あとで `PATCH` で足せる。 | [optional]
**performed_by** | Option<**String**> | 実施した担当。省略時は呼び出した利用者。 | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


