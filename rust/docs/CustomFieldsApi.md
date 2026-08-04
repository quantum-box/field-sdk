# \CustomFieldsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_custom_field_definition**](CustomFieldsApi.md#create_custom_field_definition) | **POST** /v1/erp/custom-fields/definitions | 
[**delete_custom_field_definition**](CustomFieldsApi.md#delete_custom_field_definition) | **DELETE** /v1/erp/custom-fields/definitions/{id} | 
[**get_custom_field_values**](CustomFieldsApi.md#get_custom_field_values) | **GET** /v1/erp/custom-fields/values/{entity_type}/{entity_id} | 
[**list_custom_field_definitions**](CustomFieldsApi.md#list_custom_field_definitions) | **GET** /v1/erp/custom-fields/definitions | 
[**set_custom_field_values**](CustomFieldsApi.md#set_custom_field_values) | **PUT** /v1/erp/custom-fields/values/{entity_type}/{entity_id} | 
[**update_custom_field_definition**](CustomFieldsApi.md#update_custom_field_definition) | **PUT** /v1/erp/custom-fields/definitions/{id} | 



## create_custom_field_definition

> models::CustomFieldDefinitionResponse create_custom_field_definition(create_custom_field_definition_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_custom_field_definition_request** | [**CreateCustomFieldDefinitionRequest**](CreateCustomFieldDefinitionRequest.md) |  | [required] |

### Return type

[**models::CustomFieldDefinitionResponse**](CustomFieldDefinitionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_custom_field_definition

> delete_custom_field_definition(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Custom field definition ID | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_custom_field_values

> models::CustomFieldValuesResponse get_custom_field_values(entity_type, entity_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**entity_type** | **String** | Entity type the custom field values belong to | [required] |
**entity_id** | **String** | Entity ID the custom field values belong to | [required] |

### Return type

[**models::CustomFieldValuesResponse**](CustomFieldValuesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_custom_field_definitions

> models::CustomFieldDefinitionListResponse list_custom_field_definitions(entity_type, include_inactive)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**entity_type** | Option<**String**> | Filter by entity type (client/product/order/invoice/reservation) |  |
**include_inactive** | Option<**bool**> | Include soft-deleted definitions (default false) |  |

### Return type

[**models::CustomFieldDefinitionListResponse**](CustomFieldDefinitionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## set_custom_field_values

> models::CustomFieldValuesResponse set_custom_field_values(entity_type, entity_id, set_custom_field_values_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**entity_type** | **String** | Entity type the custom field values belong to | [required] |
**entity_id** | **String** | Entity ID the custom field values belong to | [required] |
**set_custom_field_values_request** | [**SetCustomFieldValuesRequest**](SetCustomFieldValuesRequest.md) |  | [required] |

### Return type

[**models::CustomFieldValuesResponse**](CustomFieldValuesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_custom_field_definition

> models::CustomFieldDefinitionResponse update_custom_field_definition(id, update_custom_field_definition_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Custom field definition ID | [required] |
**update_custom_field_definition_request** | [**UpdateCustomFieldDefinitionRequest**](UpdateCustomFieldDefinitionRequest.md) |  | [required] |

### Return type

[**models::CustomFieldDefinitionResponse**](CustomFieldDefinitionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

