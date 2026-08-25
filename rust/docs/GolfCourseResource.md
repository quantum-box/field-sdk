# GolfCourseResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | 
**attributes_json** | Option<**serde_json::Value**> |  | [optional]
**capacity** | **i32** |  | 
**created_at** | **String** |  | 
**extension_key** | **String** |  | 
**golf_course_id** | Option<**String**> | どのコースの受付枠か。storefront はこれで「別コースの枠」を落とす。  列が空のときは `attributes_json` / `metadata_json` の `golfCourseId` から埋める（列が無かった頃に CourseBoard が使っていた規約）。 | [optional]
**hole_count** | Option<**i32**> |  | [optional]
**id** | **String** |  | 
**metadata_json** | Option<**serde_json::Value**> |  | [optional]
**name** | **String** |  | 
**par** | Option<**i32**> |  | [optional]
**reservation_resource_id** | Option<**String**> |  | [optional]
**resource_code** | **String** |  | 
**resource_kind** | [**models::GolfResourceKind**](GolfResourceKind.md) |  | 
**tenant_id** | **String** |  | 
**updated_at** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


