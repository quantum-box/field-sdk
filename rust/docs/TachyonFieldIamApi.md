# \TachyonFieldIamApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_erp_user_role**](TachyonFieldIamApi.md#delete_erp_user_role) | **DELETE** /v1/field/iam/users/{user_id} | 
[**invite_erp_user**](TachyonFieldIamApi.md#invite_erp_user) | **POST** /v1/field/iam/users/invite | 
[**list_erp_users**](TachyonFieldIamApi.md#list_erp_users) | **GET** /v1/field/iam/users | 
[**update_erp_user_policies**](TachyonFieldIamApi.md#update_erp_user_policies) | **PUT** /v1/field/iam/users/{user_id}/policies | Replace a member's ERP-managed policies with the given flat list.
[**update_erp_user_role**](TachyonFieldIamApi.md#update_erp_user_role) | **PUT** /v1/field/iam/users/{user_id}/role | 



## delete_erp_user_role

> delete_erp_user_role(user_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**user_id** | **String** | Field IAM member user id | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## invite_erp_user

> models::InviteErpUserResponse invite_erp_user(invite_erp_user_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**invite_erp_user_request** | [**InviteErpUserRequest**](InviteErpUserRequest.md) |  | [required] |

### Return type

[**models::InviteErpUserResponse**](InviteErpUserResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_erp_users

> models::ErpUserListResponse list_erp_users()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ErpUserListResponse**](ErpUserListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_erp_user_policies

> models::ErpUserResponse update_erp_user_policies(user_id, update_erp_user_policies_request)
Replace a member's ERP-managed policies with the given flat list.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**user_id** | **String** | Field IAM member user id | [required] |
**update_erp_user_policies_request** | [**UpdateErpUserPoliciesRequest**](UpdateErpUserPoliciesRequest.md) |  | [required] |

### Return type

[**models::ErpUserResponse**](ErpUserResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_erp_user_role

> models::ErpUserResponse update_erp_user_role(user_id, update_erp_user_role_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**user_id** | **String** | Field IAM member user id | [required] |
**update_erp_user_role_request** | [**UpdateErpUserRoleRequest**](UpdateErpUserRoleRequest.md) |  | [required] |

### Return type

[**models::ErpUserResponse**](ErpUserResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

