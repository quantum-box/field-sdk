
# ContactPreferenceResponse

チャネルごとに解決した現在の連絡可否。  [`ContactPreferenceChannel::ALL`] の全チャネルを必ず返す。記録の無いチャネルを 省くと、呼び出し側が「返ってこない = 不可」と読む余地が残る。

## Properties

Name | Type
------------ | -------------
`channel` | [ContactPreferenceChannel](ContactPreferenceChannel.md)
`contactable` | boolean
`declared` | boolean
`declaredAt` | string
`note` | string
`recordedBy` | string
`source` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


