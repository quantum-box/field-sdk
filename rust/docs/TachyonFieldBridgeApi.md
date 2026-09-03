# \TachyonFieldBridgeApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyze_bridge_tabular**](TachyonFieldBridgeApi.md#analyze_bridge_tabular) | **POST** /v1/bridge/tabular/analyze | 
[**create_bridge_definition**](TachyonFieldBridgeApi.md#create_bridge_definition) | **POST** /v1/bridge/definitions | 
[**execute_bridge_run**](TachyonFieldBridgeApi.md#execute_bridge_run) | **POST** /v1/bridge/runs/{run_id}/execute | 
[**get_bridge_run**](TachyonFieldBridgeApi.md#get_bridge_run) | **GET** /v1/bridge/runs/{run_id} | 
[**invoke_bridge_action**](TachyonFieldBridgeApi.md#invoke_bridge_action) | **POST** /v1/bridge/actions/{action} | 
[**list_bridge_definitions**](TachyonFieldBridgeApi.md#list_bridge_definitions) | **GET** /v1/bridge/definitions | 
[**list_bridge_runs**](TachyonFieldBridgeApi.md#list_bridge_runs) | **GET** /v1/bridge/runs | 
[**list_bridge_target_objects**](TachyonFieldBridgeApi.md#list_bridge_target_objects) | **GET** /v1/bridge/objects | The objects a definition may target, with the properties each one accepts.
[**preview_bridge_file**](TachyonFieldBridgeApi.md#preview_bridge_file) | **POST** /v1/bridge/definitions/{definition_id}/runs/preview-file | 
[**preview_bridge_run**](TachyonFieldBridgeApi.md#preview_bridge_run) | **POST** /v1/bridge/definitions/{definition_id}/runs/preview | 



## analyze_bridge_tabular

> models::TabularAnalyzeResponse analyze_bridge_tabular(file, context, header_row, idempotency_key, mapping_mode, mapping_proposal, rotation, sheet_name, target_schema)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**file** | **std::path::PathBuf** |  | [required] |
**context** | Option<**String**> |  |  |
**header_row** | Option<**i32**> |  |  |
**idempotency_key** | Option<**String**> |  |  |
**mapping_mode** | Option<**String**> |  |  |
**mapping_proposal** | Option<**String**> |  |  |
**rotation** | Option<**String**> | Clockwise degrees to turn a scanned PDF by before it is read: `0`, `90`, `180`, or `270`. |  |
**sheet_name** | Option<**String**> |  |  |
**target_schema** | Option<**String**> |  |  |

### Return type

[**models::TabularAnalyzeResponse**](TabularAnalyzeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_bridge_definition

> models::BridgeDefinitionResponse create_bridge_definition(bridge_definition_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**bridge_definition_request** | [**BridgeDefinitionRequest**](BridgeDefinitionRequest.md) |  | [required] |

### Return type

[**models::BridgeDefinitionResponse**](BridgeDefinitionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## execute_bridge_run

> models::BridgeRunResponse execute_bridge_run(run_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**run_id** | **String** | Bridge run ID | [required] |

### Return type

[**models::BridgeRunResponse**](BridgeRunResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_bridge_run

> models::BridgeRunResponse get_bridge_run(run_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**run_id** | **String** | Bridge run ID | [required] |

### Return type

[**models::BridgeRunResponse**](BridgeRunResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## invoke_bridge_action

> models::BridgeActionResponse invoke_bridge_action(action, bridge_action_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**action** | **String** | Bridge action name | [required] |
**bridge_action_request** | [**BridgeActionRequest**](BridgeActionRequest.md) |  | [required] |

### Return type

[**models::BridgeActionResponse**](BridgeActionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_bridge_definitions

> models::BridgeDefinitionListResponse list_bridge_definitions()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::BridgeDefinitionListResponse**](BridgeDefinitionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_bridge_runs

> models::BridgeRunListResponse list_bridge_runs(limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**limit** | Option<**i32**> | Page size (1-100) |  |
**offset** | Option<**i64**> | Zero-based history offset |  |

### Return type

[**models::BridgeRunListResponse**](BridgeRunListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_bridge_target_objects

> models::BridgeTargetObjectListResponse list_bridge_target_objects()
The objects a definition may target, with the properties each one accepts.

The browser builds its mapping UI from this instead of keeping a second copy of the field lists: a target added to the registry shows up in the UI with no client change, and the two can no longer disagree about what is required.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::BridgeTargetObjectListResponse**](BridgeTargetObjectListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## preview_bridge_file

> models::BridgeRunResponse preview_bridge_file(definition_id, file, context, header_row, idempotency_key, mapping_mode, mapping_proposal, rotation, sheet_name, target_schema)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**definition_id** | **String** | Bridge definition ID | [required] |
**file** | **std::path::PathBuf** |  | [required] |
**context** | Option<**String**> |  |  |
**header_row** | Option<**i32**> |  |  |
**idempotency_key** | Option<**String**> |  |  |
**mapping_mode** | Option<**String**> |  |  |
**mapping_proposal** | Option<**String**> |  |  |
**rotation** | Option<**String**> | Clockwise degrees to turn a scanned PDF by before it is read: `0`, `90`, `180`, or `270`. |  |
**sheet_name** | Option<**String**> |  |  |
**target_schema** | Option<**String**> |  |  |

### Return type

[**models::BridgeRunResponse**](BridgeRunResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## preview_bridge_run

> models::BridgeRunResponse preview_bridge_run(definition_id, bridge_run_preview_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**definition_id** | **String** | Bridge definition ID | [required] |
**bridge_run_preview_request** | [**BridgeRunPreviewRequest**](BridgeRunPreviewRequest.md) |  | [required] |

### Return type

[**models::BridgeRunResponse**](BridgeRunResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

