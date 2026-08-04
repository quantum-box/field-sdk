# \SaaSSubscriptionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve_saas_change_request**](SaaSSubscriptionsApi.md#approve_saas_change_request) | **POST** /v1/erp/saas-subscription-requests/{id}/approve | 
[**create_saas_change_request**](SaaSSubscriptionsApi.md#create_saas_change_request) | **POST** /v1/erp/saas-subscription-requests | 
[**create_saas_subscription**](SaaSSubscriptionsApi.md#create_saas_subscription) | **POST** /v1/erp/saas-subscriptions | 
[**list_saas_change_requests**](SaaSSubscriptionsApi.md#list_saas_change_requests) | **GET** /v1/erp/saas-subscription-requests | 
[**list_saas_subscriptions**](SaaSSubscriptionsApi.md#list_saas_subscriptions) | **GET** /v1/erp/saas-subscriptions | 
[**return_saas_change_request**](SaaSSubscriptionsApi.md#return_saas_change_request) | **POST** /v1/erp/saas-subscription-requests/{id}/return | 
[**update_saas_subscription**](SaaSSubscriptionsApi.md#update_saas_subscription) | **PATCH** /v1/erp/saas-subscriptions/{id} | 



## approve_saas_change_request

> models::SaasChangeRequestResponse approve_saas_change_request(id, decide_saas_change_request_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | SaaS change request ID | [required] |
**decide_saas_change_request_request** | [**DecideSaasChangeRequestRequest**](DecideSaasChangeRequestRequest.md) |  | [required] |

### Return type

[**models::SaasChangeRequestResponse**](SaasChangeRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_saas_change_request

> models::SaasChangeRequestResponse create_saas_change_request(create_saas_change_request_request, idempotency_key)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_saas_change_request_request** | [**CreateSaasChangeRequestRequest**](CreateSaasChangeRequestRequest.md) |  | [required] |
**idempotency_key** | Option<**String**> | Optional idempotency key; a retried request with the same key and payload replays the original result |  |

### Return type

[**models::SaasChangeRequestResponse**](SaasChangeRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_saas_subscription

> models::SaasSubscriptionResponse create_saas_subscription(create_saas_subscription_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_saas_subscription_request** | [**CreateSaasSubscriptionRequest**](CreateSaasSubscriptionRequest.md) |  | [required] |

### Return type

[**models::SaasSubscriptionResponse**](SaasSubscriptionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_saas_change_requests

> models::SaasChangeRequestListResponse list_saas_change_requests(state)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**state** | Option<**String**> | Filter by change request state. |  |

### Return type

[**models::SaasChangeRequestListResponse**](SaasChangeRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_saas_subscriptions

> models::SaasSubscriptionListResponse list_saas_subscriptions(status)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> | Filter by subscription status. |  |

### Return type

[**models::SaasSubscriptionListResponse**](SaasSubscriptionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## return_saas_change_request

> models::SaasChangeRequestResponse return_saas_change_request(id, decide_saas_change_request_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | SaaS change request ID | [required] |
**decide_saas_change_request_request** | [**DecideSaasChangeRequestRequest**](DecideSaasChangeRequestRequest.md) |  | [required] |

### Return type

[**models::SaasChangeRequestResponse**](SaasChangeRequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_saas_subscription

> models::SaasSubscriptionResponse update_saas_subscription(id, update_saas_subscription_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | SaaS subscription ID | [required] |
**update_saas_subscription_request** | [**UpdateSaasSubscriptionRequest**](UpdateSaasSubscriptionRequest.md) |  | [required] |

### Return type

[**models::SaasSubscriptionResponse**](SaasSubscriptionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

