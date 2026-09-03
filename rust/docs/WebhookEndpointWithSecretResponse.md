# WebhookEndpointWithSecretResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked_at** | Option<**String**> |  | [optional]
**consecutive_failures** | **i32** | 連続して恒久失敗した配信の数。`blocked` の理由を読むための値。 | 
**description** | Option<**String**> |  | [optional]
**event_types** | **Vec<String>** | 購読している versioned event type。 | 
**id** | **String** |  | 
**last_error_code** | Option<**String**> |  | [optional]
**previous_secret_expires_at** | Option<**String**> | 旧世代の署名を併記しなくなる時刻。 | [optional]
**previous_secret_version** | Option<**i32**> | ローテーション猶予中だけ入る。この世代の署名もまだ併記されている。 | [optional]
**secret_version** | **i32** | 導出シークレットの世代。値そのものは返さない。 | 
**status** | **String** | `active`, `paused`, or `blocked`. | 
**url** | **String** |  | 
**signing_secret** | **String** | 一度だけ返る。サーバは平文を保存しないので、後から読み出せない。 | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


