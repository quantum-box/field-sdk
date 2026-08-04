# \OrderProductsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_order_product**](OrderProductsApi.md#create_order_product) | **POST** /v1/order/products | 
[**delete_order_product**](OrderProductsApi.md#delete_order_product) | **DELETE** /v1/order/products/{product_id} | 
[**get_order_product**](OrderProductsApi.md#get_order_product) | **GET** /v1/order/products/{product_id} | 
[**list_order_product_variants**](OrderProductsApi.md#list_order_product_variants) | **GET** /v1/order/products/{product_id}/variants | 
[**list_order_products**](OrderProductsApi.md#list_order_products) | **GET** /v1/order/products | 
[**update_order_product**](OrderProductsApi.md#update_order_product) | **PATCH** /v1/order/products/{product_id} | 



## create_order_product

> models::ProductRestResponse create_order_product(create_order_product_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_order_product_request** | [**CreateOrderProductRequest**](CreateOrderProductRequest.md) |  | [required] |

### Return type

[**models::ProductRestResponse**](ProductRestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_order_product

> models::DeleteOrderProductResponse delete_order_product(product_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**product_id** | **String** | Order product ID | [required] |

### Return type

[**models::DeleteOrderProductResponse**](DeleteOrderProductResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_order_product

> models::ProductRestResponse get_order_product(product_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**product_id** | **String** | Order product ID | [required] |

### Return type

[**models::ProductRestResponse**](ProductRestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_order_product_variants

> models::OrderProductVariantListResponse list_order_product_variants(product_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**product_id** | **String** | Order product ID | [required] |

### Return type

[**models::OrderProductVariantListResponse**](OrderProductVariantListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_order_products

> models::OrderProductListResponse list_order_products(limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**limit** | Option<**i32**> | Maximum number of items to return (default 25) |  |
**offset** | Option<**i32**> | Number of items to skip (default 0) |  |

### Return type

[**models::OrderProductListResponse**](OrderProductListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_order_product

> models::ProductRestResponse update_order_product(product_id, update_order_product_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**product_id** | **String** | Order product ID | [required] |
**update_order_product_request** | [**UpdateOrderProductRequest**](UpdateOrderProductRequest.md) |  | [required] |

### Return type

[**models::ProductRestResponse**](ProductRestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

