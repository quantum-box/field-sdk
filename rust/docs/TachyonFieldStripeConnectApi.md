# \TachyonFieldStripeConnectApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_stripe_connect_account**](TachyonFieldStripeConnectApi.md#create_stripe_connect_account) | **POST** /v1/erp/payments/stripe-connect/account | 
[**create_stripe_connect_onboarding_link**](TachyonFieldStripeConnectApi.md#create_stripe_connect_onboarding_link) | **POST** /v1/erp/payments/stripe-connect/onboarding-link | 
[**get_stripe_connect_account**](TachyonFieldStripeConnectApi.md#get_stripe_connect_account) | **GET** /v1/erp/payments/stripe-connect/account | 



## create_stripe_connect_account

> models::StripeConnectAccountResponse create_stripe_connect_account()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::StripeConnectAccountResponse**](StripeConnectAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_stripe_connect_onboarding_link

> models::StripeConnectOnboardingLinkResponse create_stripe_connect_onboarding_link(create_stripe_connect_onboarding_link_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_stripe_connect_onboarding_link_request** | [**CreateStripeConnectOnboardingLinkRequest**](CreateStripeConnectOnboardingLinkRequest.md) |  | [required] |

### Return type

[**models::StripeConnectOnboardingLinkResponse**](StripeConnectOnboardingLinkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_stripe_connect_account

> models::StripeConnectAccountResponse get_stripe_connect_account()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::StripeConnectAccountResponse**](StripeConnectAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

