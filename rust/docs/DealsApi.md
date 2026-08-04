# \DealsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_deal**](DealsApi.md#create_deal) | **POST** /v1/erp/deals | 
[**get_deal**](DealsApi.md#get_deal) | **GET** /v1/erp/deals/{id} | 
[**list_deals**](DealsApi.md#list_deals) | **GET** /v1/erp/deals | 
[**update_deal**](DealsApi.md#update_deal) | **PATCH** /v1/erp/deals/{id} | 



## create_deal

> models::DealResponse create_deal(create_deal_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_deal_request** | [**CreateDealRequest**](CreateDealRequest.md) |  | [required] |

### Return type

[**models::DealResponse**](DealResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_deal

> models::DealResponse get_deal(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Deal ID | [required] |

### Return type

[**models::DealResponse**](DealResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_deals

> models::DealListResponse list_deals(pipeline, stage, client_id, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**pipeline** | Option<**String**> | Filter by pipeline name. |  |
**stage** | Option<**String**> | Filter by stage name. |  |
**client_id** | Option<**String**> | Filter by client ID. |  |
**limit** | Option<**i32**> | Max number of results (default 200, capped at 500). |  |
**offset** | Option<**i32**> | Pagination offset (default 0). |  |

### Return type

[**models::DealListResponse**](DealListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_deal

> models::DealResponse update_deal(id, update_deal_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Deal ID | [required] |
**update_deal_request** | [**UpdateDealRequest**](UpdateDealRequest.md) |  | [required] |

### Return type

[**models::DealResponse**](DealResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

