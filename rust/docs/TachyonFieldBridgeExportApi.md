# \TachyonFieldBridgeExportApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_bridge_export_definition**](TachyonFieldBridgeExportApi.md#create_bridge_export_definition) | **POST** /v1/bridge/exports/definitions | 
[**export_bridge_csv**](TachyonFieldBridgeExportApi.md#export_bridge_csv) | **GET** /v1/bridge/exports/definitions/{definition_id}/csv | 
[**list_bridge_export_definitions**](TachyonFieldBridgeExportApi.md#list_bridge_export_definitions) | **GET** /v1/bridge/exports/definitions | 
[**list_bridge_export_objects**](TachyonFieldBridgeExportApi.md#list_bridge_export_objects) | **GET** /v1/bridge/exports/objects | 



## create_bridge_export_definition

> models::BridgeExportDefinitionResponse create_bridge_export_definition(bridge_export_definition_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**bridge_export_definition_request** | [**BridgeExportDefinitionRequest**](BridgeExportDefinitionRequest.md) |  | [required] |

### Return type

[**models::BridgeExportDefinitionResponse**](BridgeExportDefinitionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## export_bridge_csv

> export_bridge_csv(definition_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**definition_id** | **String** | Bridge export definition ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_bridge_export_definitions

> models::BridgeExportDefinitionListResponse list_bridge_export_definitions()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::BridgeExportDefinitionListResponse**](BridgeExportDefinitionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_bridge_export_objects

> models::BridgeExportObjectListResponse list_bridge_export_objects()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::BridgeExportObjectListResponse**](BridgeExportObjectListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

