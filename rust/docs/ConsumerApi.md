# \ConsumerApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_consumer_consents**](ConsumerApi.md#get_consumer_consents) | **GET** /v1/erp/customers/{customer_id}/consents | 
[**get_customer_contact_preferences**](ConsumerApi.md#get_customer_contact_preferences) | **GET** /v1/erp/customers/{customer_id}/contact-preferences | チャネルごとの現在の連絡可否を1コールで返す。
[**record_consumer_consents**](ConsumerApi.md#record_consumer_consents) | **POST** /v1/erp/customers/{customer_id}/consents | 
[**record_customer_contact_preferences**](ConsumerApi.md#record_customer_contact_preferences) | **POST** /v1/erp/customers/{customer_id}/contact-preferences | 連絡拒否の申し出、およびその撤回を記録する。



## get_consumer_consents

> models::ConsumerConsentStateListResponse get_consumer_consents(customer_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** | Consumer customer ID (`cus_…`) | [required] |

### Return type

[**models::ConsumerConsentStateListResponse**](ConsumerConsentStateListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_customer_contact_preferences

> models::ContactPreferenceListResponse get_customer_contact_preferences(customer_id)
チャネルごとの現在の連絡可否を1コールで返す。

申し出の記録が無いチャネルは `contactable: true` / `declared: false`。 「連絡してよい」が既定で、拒否は申し出があって初めて立つ。撤回された拒否は `contactable: true` に戻るが、証跡そのものは消えない。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** | Consumer customer ID (`cus_…`) | [required] |

### Return type

[**models::ContactPreferenceListResponse**](ContactPreferenceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## record_consumer_consents

> models::ConsumerConsentStateListResponse record_consumer_consents(customer_id, record_consumer_consents_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** | Consumer customer ID (`cus_…`) | [required] |
**record_consumer_consents_request** | [**RecordConsumerConsentsRequest**](RecordConsumerConsentsRequest.md) |  | [required] |

### Return type

[**models::ConsumerConsentStateListResponse**](ConsumerConsentStateListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## record_customer_contact_preferences

> models::ContactPreferenceListResponse record_customer_contact_preferences(customer_id, record_contact_preferences_request)
連絡拒否の申し出、およびその撤回を記録する。

上書きはしない。拒否も撤回も証跡への追記で、以前の行は残る。応答は書き込み 後に畳み直した全チャネルの現在値。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** | Consumer customer ID (`cus_…`) | [required] |
**record_contact_preferences_request** | [**RecordContactPreferencesRequest**](RecordContactPreferencesRequest.md) |  | [required] |

### Return type

[**models::ContactPreferenceListResponse**](ContactPreferenceListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

