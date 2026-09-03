
# InvoiceBillToRequestOneOf2

顧客台帳にも取引先にも無い相手への単発請求。  識別子を求めず、宛名と連絡先だけで請求先を決める。台帳に載せたい ときは顧客を作ってから `customer` を送る — Field はここから勝手に 顧客を作らない。

## Properties

Name | Type
------------ | -------------
`email` | string
`kind` | string
`name` | string
`phone` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


