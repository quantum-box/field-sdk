# \MembershipApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archive_customer_subject**](MembershipApi.md#archive_customer_subject) | **DELETE** /v1/erp/membership/subjects/{id} | 
[**assign_membership_plan**](MembershipApi.md#assign_membership_plan) | **POST** /v1/erp/membership/customers/{customer_id}/plan-assignments | 
[**create_customer_credential**](MembershipApi.md#create_customer_credential) | **POST** /v1/erp/membership/customers/{customer_id}/credentials | 
[**create_customer_subject**](MembershipApi.md#create_customer_subject) | **POST** /v1/erp/membership/customers/{customer_id}/subjects | 
[**create_membership_consent_item**](MembershipApi.md#create_membership_consent_item) | **POST** /v1/erp/membership/consent-items | 
[**create_membership_plan**](MembershipApi.md#create_membership_plan) | **POST** /v1/erp/membership/plans | 
[**delete_membership_consent_item**](MembershipApi.md#delete_membership_consent_item) | **DELETE** /v1/erp/membership/consent-items/{id} | 
[**delete_membership_plan**](MembershipApi.md#delete_membership_plan) | **DELETE** /v1/erp/membership/plans/{id} | 
[**get_customer_membership**](MembershipApi.md#get_customer_membership) | **GET** /v1/erp/membership/customers/{customer_id} | 
[**list_membership_consent_items**](MembershipApi.md#list_membership_consent_items) | **GET** /v1/erp/membership/consent-items | 
[**list_membership_plans**](MembershipApi.md#list_membership_plans) | **GET** /v1/erp/membership/plans | 
[**record_customer_consents**](MembershipApi.md#record_customer_consents) | **POST** /v1/erp/membership/customers/{customer_id}/consents | 
[**register_membership**](MembershipApi.md#register_membership) | **POST** /v1/erp/membership/registrations | 
[**update_customer_credential**](MembershipApi.md#update_customer_credential) | **PUT** /v1/erp/membership/credentials/{id} | 
[**update_customer_subject**](MembershipApi.md#update_customer_subject) | **PUT** /v1/erp/membership/subjects/{id} | 
[**update_membership_consent_item**](MembershipApi.md#update_membership_consent_item) | **PUT** /v1/erp/membership/consent-items/{id} | 
[**update_membership_plan**](MembershipApi.md#update_membership_plan) | **PUT** /v1/erp/membership/plans/{id} | 



## archive_customer_subject

> archive_customer_subject(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## assign_membership_plan

> models::MembershipPlanAssignmentResponse assign_membership_plan(customer_id, assign_membership_plan_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** |  | [required] |
**assign_membership_plan_request** | [**AssignMembershipPlanRequest**](AssignMembershipPlanRequest.md) |  | [required] |

### Return type

[**models::MembershipPlanAssignmentResponse**](MembershipPlanAssignmentResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_customer_credential

> models::CustomerCredentialResponse create_customer_credential(customer_id, create_customer_credential_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** |  | [required] |
**create_customer_credential_request** | [**CreateCustomerCredentialRequest**](CreateCustomerCredentialRequest.md) |  | [required] |

### Return type

[**models::CustomerCredentialResponse**](CustomerCredentialResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_customer_subject

> models::CustomerSubjectResponse create_customer_subject(customer_id, create_customer_subject_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** |  | [required] |
**create_customer_subject_request** | [**CreateCustomerSubjectRequest**](CreateCustomerSubjectRequest.md) |  | [required] |

### Return type

[**models::CustomerSubjectResponse**](CustomerSubjectResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_membership_consent_item

> models::MembershipConsentItemResponse create_membership_consent_item(create_membership_consent_item_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_membership_consent_item_request** | [**CreateMembershipConsentItemRequest**](CreateMembershipConsentItemRequest.md) |  | [required] |

### Return type

[**models::MembershipConsentItemResponse**](MembershipConsentItemResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_membership_plan

> models::MembershipPlanResponse create_membership_plan(create_membership_plan_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_membership_plan_request** | [**CreateMembershipPlanRequest**](CreateMembershipPlanRequest.md) |  | [required] |

### Return type

[**models::MembershipPlanResponse**](MembershipPlanResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_membership_consent_item

> delete_membership_consent_item(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_membership_plan

> delete_membership_plan(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_customer_membership

> models::MembershipCustomerViewResponse get_customer_membership(customer_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** |  | [required] |

### Return type

[**models::MembershipCustomerViewResponse**](MembershipCustomerViewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_membership_consent_items

> models::MembershipConsentItemListResponse list_membership_consent_items(include_inactive)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**include_inactive** | Option<**bool**> | Include deactivated items |  |

### Return type

[**models::MembershipConsentItemListResponse**](MembershipConsentItemListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_membership_plans

> models::MembershipPlanListResponse list_membership_plans(include_inactive)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**include_inactive** | Option<**bool**> | Include deactivated plans |  |

### Return type

[**models::MembershipPlanListResponse**](MembershipPlanListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## record_customer_consents

> models::MembershipCustomerViewResponse record_customer_consents(customer_id, record_customer_consents_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**customer_id** | **String** |  | [required] |
**record_customer_consents_request** | [**RecordCustomerConsentsRequest**](RecordCustomerConsentsRequest.md) |  | [required] |

### Return type

[**models::MembershipCustomerViewResponse**](MembershipCustomerViewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## register_membership

> models::MembershipCustomerViewResponse register_membership(register_membership_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**register_membership_request** | [**RegisterMembershipRequest**](RegisterMembershipRequest.md) |  | [required] |

### Return type

[**models::MembershipCustomerViewResponse**](MembershipCustomerViewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_customer_credential

> models::CustomerCredentialResponse update_customer_credential(id, update_customer_credential_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_customer_credential_request** | [**UpdateCustomerCredentialRequest**](UpdateCustomerCredentialRequest.md) |  | [required] |

### Return type

[**models::CustomerCredentialResponse**](CustomerCredentialResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_customer_subject

> models::CustomerSubjectResponse update_customer_subject(id, update_customer_subject_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_customer_subject_request** | [**UpdateCustomerSubjectRequest**](UpdateCustomerSubjectRequest.md) |  | [required] |

### Return type

[**models::CustomerSubjectResponse**](CustomerSubjectResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_membership_consent_item

> models::MembershipConsentItemResponse update_membership_consent_item(id, update_membership_consent_item_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_membership_consent_item_request** | [**UpdateMembershipConsentItemRequest**](UpdateMembershipConsentItemRequest.md) |  | [required] |

### Return type

[**models::MembershipConsentItemResponse**](MembershipConsentItemResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_membership_plan

> models::MembershipPlanResponse update_membership_plan(id, update_membership_plan_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_membership_plan_request** | [**UpdateMembershipPlanRequest**](UpdateMembershipPlanRequest.md) |  | [required] |

### Return type

[**models::MembershipPlanResponse**](MembershipPlanResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

