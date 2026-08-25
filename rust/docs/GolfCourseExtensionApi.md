# \GolfCourseExtensionApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyze_golf_course_tabular**](GolfCourseExtensionApi.md#analyze_golf_course_tabular) | **POST** /v1/erp/extensions/golf-course/tabular/analyze | 



## analyze_golf_course_tabular

> models::TabularAnalyzeResponse analyze_golf_course_tabular(file, context, header_row, idempotency_key, mapping_mode, mapping_proposal, sheet_name, target_schema)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**file** | **std::path::PathBuf** |  | [required] |
**context** | Option<**String**> |  |  |
**header_row** | Option<**i32**> |  |  |
**idempotency_key** | Option<**String**> |  |  |
**mapping_mode** | Option<**String**> |  |  |
**mapping_proposal** | Option<**String**> |  |  |
**sheet_name** | Option<**String**> |  |  |
**target_schema** | Option<**String**> |  |  |

### Return type

[**models::TabularAnalyzeResponse**](TabularAnalyzeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

