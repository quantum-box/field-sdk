
# LatestCustomerContactListResponse

一度も接触していない顧客は `items` に現れない。「まだ連絡していない」と 「連絡したが記録が無い」を利用側で取り違えないよう、問い合わせた ID を そのまま返して差分を取れるようにする。

## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;LatestCustomerContactResponse&gt;](LatestCustomerContactResponse.md)
`requestedCustomerIds` | Array&lt;string&gt;


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


