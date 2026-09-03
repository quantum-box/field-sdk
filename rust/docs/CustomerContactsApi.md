# \CustomerContactsApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_customer_contact**](CustomerContactsApi.md#cancel_customer_contact) | **DELETE** /v1/erp/customer-contacts/{contact_id} | 取り消し。行は消さず `cancelledAt` / `cancelledBy` を立てて返す。
[**create_customer_contact**](CustomerContactsApi.md#create_customer_contact) | **POST** /v1/erp/customers/{customer_id}/contacts | 
[**list_all_customer_contacts**](CustomerContactsApi.md#list_all_customer_contacts) | **GET** /v1/erp/customer-contacts | 
[**list_customer_contacts**](CustomerContactsApi.md#list_customer_contacts) | **GET** /v1/erp/customers/{customer_id}/contacts | 
[**lookup_latest_customer_contacts**](CustomerContactsApi.md#lookup_latest_customer_contacts) | **POST** /v1/erp/customer-contacts/latest-lookup | 
[**update_customer_contact**](CustomerContactsApi.md#update_customer_contact) | **PATCH** /v1/erp/customer-contacts/{contact_id} | 



## cancel_customer_contact

> models::CustomerContactResponse cancel_customer_contact(contact_id)
取り消し。行は消さず `cancelledAt` / `cancelledBy` を立てて返す。

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**contact_id** | **String** | Customer contact ID (`cct_…`) | [required] |

### Return type

[**models::CustomerContactResponse**](CustomerContactResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_customer_contact

> models::CustomerContactResponse create_customer_contact(customer_id, create_customer_contact_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** | Customer ID (`cus_…`) | [required] |
**create_customer_contact_request** | [**CreateCustomerContactRequest**](CreateCustomerContactRequest.md) |  | [required] |

### Return type

[**models::CustomerContactResponse**](CustomerContactResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_all_customer_contacts

> models::CustomerContactListResponse list_all_customer_contacts(customer_id, channel, direction, outcome, performed_by, occurred_from, occurred_to, include_cancelled, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | Option<**String**> | 顧客で絞る。顧客配下の一覧では使わない（パスが決める）。 |  |
**channel** | Option<**String**> |  |  |
**direction** | Option<**String**> |  |  |
**outcome** | Option<**String**> |  |  |
**performed_by** | Option<**String**> |  |  |
**occurred_from** | Option<**String**> | `occurredAt >= from` |  |
**occurred_to** | Option<**String**> | `occurredAt <= to` |  |
**include_cancelled** | Option<**bool**> | 取り消し済みも含める。既定は除く。 |  |
**limit** | Option<**i32**> | 既定 50、上限 200。 |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::CustomerContactListResponse**](CustomerContactListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_customer_contacts

> models::CustomerContactListResponse list_customer_contacts(customer_id, customer_id2, channel, direction, outcome, performed_by, occurred_from, occurred_to, include_cancelled, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** | Customer ID (`cus_…`) | [required] |
**customer_id2** | Option<**String**> | 顧客で絞る。顧客配下の一覧では使わない（パスが決める）。 |  |
**channel** | Option<**String**> |  |  |
**direction** | Option<**String**> |  |  |
**outcome** | Option<**String**> |  |  |
**performed_by** | Option<**String**> |  |  |
**occurred_from** | Option<**String**> | `occurredAt >= from` |  |
**occurred_to** | Option<**String**> | `occurredAt <= to` |  |
**include_cancelled** | Option<**bool**> | 取り消し済みも含める。既定は除く。 |  |
**limit** | Option<**i32**> | 既定 50、上限 200。 |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::CustomerContactListResponse**](CustomerContactListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## lookup_latest_customer_contacts

> models::LatestCustomerContactListResponse lookup_latest_customer_contacts(latest_customer_contact_lookup_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**latest_customer_contact_lookup_request** | [**LatestCustomerContactLookupRequest**](LatestCustomerContactLookupRequest.md) |  | [required] |

### Return type

[**models::LatestCustomerContactListResponse**](LatestCustomerContactListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_customer_contact

> models::CustomerContactResponse update_customer_contact(contact_id, update_customer_contact_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**contact_id** | **String** | Customer contact ID (`cct_…`) | [required] |
**update_customer_contact_request** | [**UpdateCustomerContactRequest**](UpdateCustomerContactRequest.md) |  | [required] |

### Return type

[**models::CustomerContactResponse**](CustomerContactResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

