# \ApprovalsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_approval_flow**](ApprovalsApi.md#create_approval_flow) | **POST** /v1/erp/approval-flows | 
[**delete_approval_flow**](ApprovalsApi.md#delete_approval_flow) | **DELETE** /v1/erp/approval-flows/{id} | 
[**get_approval_flow**](ApprovalsApi.md#get_approval_flow) | **GET** /v1/erp/approval-flows/{id} | 
[**list_approval_flows**](ApprovalsApi.md#list_approval_flows) | **GET** /v1/erp/approval-flows | 
[**list_approvals**](ApprovalsApi.md#list_approvals) | **GET** /api/approvals | 
[**mutate_approval**](ApprovalsApi.md#mutate_approval) | **POST** /api/approvals | 
[**update_approval_flow**](ApprovalsApi.md#update_approval_flow) | **PUT** /v1/erp/approval-flows/{id} | 



## create_approval_flow

> models::ApprovalFlowResponse create_approval_flow(create_approval_flow_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_approval_flow_request** | [**CreateApprovalFlowRequest**](CreateApprovalFlowRequest.md) |  | [required] |

### Return type

[**models::ApprovalFlowResponse**](ApprovalFlowResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_approval_flow

> delete_approval_flow(id)


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


## get_approval_flow

> models::ApprovalFlowResponse get_approval_flow(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**models::ApprovalFlowResponse**](ApprovalFlowResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_approval_flows

> models::ApprovalFlowListResponse list_approval_flows(resource_type, active, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**resource_type** | Option<**String**> |  |  |
**active** | Option<**bool**> |  |  |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::ApprovalFlowListResponse**](ApprovalFlowListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_approvals

> models::ApprovalWorkflowListResponse list_approvals(status, resource_type, resource_id, limit, offset)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> |  |  |
**resource_type** | Option<**String**> |  |  |
**resource_id** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |

### Return type

[**models::ApprovalWorkflowListResponse**](ApprovalWorkflowListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## mutate_approval

> models::ApprovalWorkflowResponse mutate_approval(approval_mutation_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**approval_mutation_request** | [**ApprovalMutationRequest**](ApprovalMutationRequest.md) |  | [required] |

### Return type

[**models::ApprovalWorkflowResponse**](ApprovalWorkflowResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_approval_flow

> models::ApprovalFlowResponse update_approval_flow(id, update_approval_flow_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_approval_flow_request** | [**UpdateApprovalFlowRequest**](UpdateApprovalFlowRequest.md) |  | [required] |

### Return type

[**models::ApprovalFlowResponse**](ApprovalFlowResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

