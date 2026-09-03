# CreateConsumerCustomerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | Option<[**models::CreateOrderClientAddressRequest**](CreateOrderClientAddressRequest.md)> |  | [optional]
**birth_date** | Option<**String**> | YYYY-MM-DD (PLT-4040)。省略可。 | [optional]
**channel** | Option<**String**> | store / web / kiosk (default store) | [optional]
**consents** | Option<[**Vec<models::RegistrationConsentRequest>**](RegistrationConsentRequest.md)> | 窓口で用紙にチェックをもらって登録する運用では、顧客の作成と同意の 記録が同じ一枚から起きる (PLT-4041)。ここで一緒に渡せると、顧客だけ できて同意が落ちる中途半端な状態を呼び出し側が後始末せずに済む。 | [optional]
**email** | Option<**String**> |  | [optional]
**idempotency_key** | Option<**String**> | 再送鍵。同じ鍵の2回目以降は顧客を増やさず、最初に作った顧客を `200 OK` で返す。  窓口の二重クリックや、応答を取りこぼした呼び出し側のリトライで同姓 同名の顧客が並ぶのを止めるために要る。鍵から顧客 ID を導くので、 応答を見ていない呼び出し側でも同じ顧客に辿り着ける。 | [optional]
**name** | **String** |  | 
**name_kana** | Option<**String**> |  | [optional]
**phone** | Option<**String**> |  | [optional]
**sex** | Option<**String**> | 語彙はテナントが決める。16 文字まで (PLT-4040)。 | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


