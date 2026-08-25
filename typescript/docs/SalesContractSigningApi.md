# SalesContractSigningApi

All URIs are relative to *https://tachyon-field-api.txcloud.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSigningRequest**](SalesContractSigningApi.md#createsigningrequest) | **POST** /v1/erp/sales-contracts/{contract_id}/signing-requests |  |
| [**downloadSigningArtifact**](SalesContractSigningApi.md#downloadsigningartifact) | **GET** /v1/erp/sales-contract-signing-requests/{request_id}/artifacts/{kind}/download |  |
| [**getSigningRequest**](SalesContractSigningApi.md#getsigningrequest) | **GET** /v1/erp/sales-contract-signing-requests/{request_id} |  |
| [**listSigningRequests**](SalesContractSigningApi.md#listsigningrequests) | **GET** /v1/erp/sales-contracts/{contract_id}/signing-requests |  |
| [**reissueSigningCapability**](SalesContractSigningApi.md#reissuesigningcapability) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/reissue |  |
| [**retrySigningFinalization**](SalesContractSigningApi.md#retrysigningfinalization) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/retry-finalization |  |
| [**revokeSigningRequest**](SalesContractSigningApi.md#revokesigningrequest) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/revoke |  |
| [**sendSigningRequest**](SalesContractSigningApi.md#sendsigningrequest) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/send |  |



## createSigningRequest

> SigningRequestDetailResponse createSigningRequest(contractId, idempotencyKey, createSigningRequestInput)



### Example

```ts
import {
  Configuration,
  SalesContractSigningApi,
} from '@tachyon-sdk/field';
import type { CreateSigningRequestRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: cognitoBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalesContractSigningApi(config);

  const body = {
    // string | Sales contract ID
    contractId: contractId_example,
    // string | Unique key for idempotent request creation
    idempotencyKey: idempotencyKey_example,
    // CreateSigningRequestInput
    createSigningRequestInput: ...,
  } satisfies CreateSigningRequestRequest;

  try {
    const data = await api.createSigningRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **contractId** | `string` | Sales contract ID | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Unique key for idempotent request creation | [Defaults to `undefined`] |
| **createSigningRequestInput** | [CreateSigningRequestInput](CreateSigningRequestInput.md) |  | |

### Return type

[**SigningRequestDetailResponse**](SigningRequestDetailResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Existing signing request returned for an idempotent replay |  -  |
| **201** | Signing request created |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication required |  -  |
| **403** | Insufficient permission |  -  |
| **404** | Sales contract not found |  -  |
| **409** | Signing request cannot be created in the current state |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadSigningArtifact

> ArtifactDownloadResponse downloadSigningArtifact(requestId, kind)



### Example

```ts
import {
  Configuration,
  SalesContractSigningApi,
} from '@tachyon-sdk/field';
import type { DownloadSigningArtifactRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: cognitoBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalesContractSigningApi(config);

  const body = {
    // string | Signing request ID
    requestId: requestId_example,
    // string | Artifact kind
    kind: kind_example,
  } satisfies DownloadSigningArtifactRequest;

  try {
    const data = await api.downloadSigningArtifact(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestId** | `string` | Signing request ID | [Defaults to `undefined`] |
| **kind** | `string` | Artifact kind | [Defaults to `undefined`] |

### Return type

[**ArtifactDownloadResponse**](ArtifactDownloadResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Short-lived authorized artifact download |  -  |
| **401** | Authentication required |  -  |
| **403** | Insufficient permission |  -  |
| **404** | Signing artifact not found |  -  |
| **503** | Artifact storage is temporarily unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSigningRequest

> SigningRequestDetailResponse getSigningRequest(requestId)



### Example

```ts
import {
  Configuration,
  SalesContractSigningApi,
} from '@tachyon-sdk/field';
import type { GetSigningRequestRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: cognitoBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalesContractSigningApi(config);

  const body = {
    // string | Signing request ID
    requestId: requestId_example,
  } satisfies GetSigningRequestRequest;

  try {
    const data = await api.getSigningRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestId** | `string` | Signing request ID | [Defaults to `undefined`] |

### Return type

[**SigningRequestDetailResponse**](SigningRequestDetailResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signing request detail |  -  |
| **401** | Authentication required |  -  |
| **403** | Insufficient permission |  -  |
| **404** | Signing request not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSigningRequests

> SigningRequestListResponse listSigningRequests(contractId, limit, offset)



### Example

```ts
import {
  Configuration,
  SalesContractSigningApi,
} from '@tachyon-sdk/field';
import type { ListSigningRequestsRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: cognitoBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalesContractSigningApi(config);

  const body = {
    // string | Sales contract ID
    contractId: contractId_example,
    // number | Maximum number of results, from 1 to 100 (optional)
    limit: 56,
    // number | Number of results to skip (optional)
    offset: 56,
  } satisfies ListSigningRequestsRequest;

  try {
    const data = await api.listSigningRequests(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **contractId** | `string` | Sales contract ID | [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of results, from 1 to 100 | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Number of results to skip | [Optional] [Defaults to `undefined`] |

### Return type

[**SigningRequestListResponse**](SigningRequestListResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signing request list |  -  |
| **400** | Invalid pagination |  -  |
| **401** | Authentication required |  -  |
| **403** | Insufficient permission |  -  |
| **404** | Sales contract not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reissueSigningCapability

> SendSigningRequestResponse reissueSigningCapability(requestId, origin)



### Example

```ts
import {
  Configuration,
  SalesContractSigningApi,
} from '@tachyon-sdk/field';
import type { ReissueSigningCapabilityRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: cognitoBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalesContractSigningApi(config);

  const body = {
    // string | Signing request ID
    requestId: requestId_example,
    // string | Required when ENVIRONMENT=preview. Must be the canonical HTTPS preview origin; ignored for fixed production and local signing URLs. (optional)
    origin: origin_example,
  } satisfies ReissueSigningCapabilityRequest;

  try {
    const data = await api.reissueSigningCapability(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestId** | `string` | Signing request ID | [Defaults to `undefined`] |
| **origin** | `string` | Required when ENVIRONMENT&#x3D;preview. Must be the canonical HTTPS preview origin; ignored for fixed production and local signing URLs. | [Optional] [Defaults to `undefined`] |

### Return type

[**SendSigningRequestResponse**](SendSigningRequestResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Replacement signing capability issued once; the previous capability is invalidated |  -  |
| **400** | Preview Origin header is missing or invalid |  -  |
| **401** | Authentication required |  -  |
| **403** | Insufficient permission |  -  |
| **404** | Signing request not found |  -  |
| **409** | Signing capability cannot be reissued in the current state |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## retrySigningFinalization

> SigningRequestDetailResponse retrySigningFinalization(requestId)



### Example

```ts
import {
  Configuration,
  SalesContractSigningApi,
} from '@tachyon-sdk/field';
import type { RetrySigningFinalizationRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: cognitoBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalesContractSigningApi(config);

  const body = {
    // string | Signing request ID
    requestId: requestId_example,
  } satisfies RetrySigningFinalizationRequest;

  try {
    const data = await api.retrySigningFinalization(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestId** | `string` | Signing request ID | [Defaults to `undefined`] |

### Return type

[**SigningRequestDetailResponse**](SigningRequestDetailResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Artifact finalization retried |  -  |
| **401** | Authentication required |  -  |
| **403** | Insufficient permission |  -  |
| **404** | Signing request not found |  -  |
| **409** | Finalization cannot be retried in the current state |  -  |
| **503** | Artifact storage is temporarily unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeSigningRequest

> SigningRequestDetailResponse revokeSigningRequest(requestId)



### Example

```ts
import {
  Configuration,
  SalesContractSigningApi,
} from '@tachyon-sdk/field';
import type { RevokeSigningRequestRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: cognitoBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalesContractSigningApi(config);

  const body = {
    // string | Signing request ID
    requestId: requestId_example,
  } satisfies RevokeSigningRequestRequest;

  try {
    const data = await api.revokeSigningRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestId** | `string` | Signing request ID | [Defaults to `undefined`] |

### Return type

[**SigningRequestDetailResponse**](SigningRequestDetailResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signing request revoked |  -  |
| **401** | Authentication required |  -  |
| **403** | Insufficient permission |  -  |
| **404** | Signing request not found |  -  |
| **409** | Signing request cannot be revoked in the current state |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendSigningRequest

> SendSigningRequestResponse sendSigningRequest(requestId, origin)



### Example

```ts
import {
  Configuration,
  SalesContractSigningApi,
} from '@tachyon-sdk/field';
import type { SendSigningRequestRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: cognitoBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalesContractSigningApi(config);

  const body = {
    // string | Signing request ID
    requestId: requestId_example,
    // string | Required when ENVIRONMENT=preview. Must be the canonical HTTPS preview origin; ignored for fixed production and local signing URLs. (optional)
    origin: origin_example,
  } satisfies SendSigningRequestRequest;

  try {
    const data = await api.sendSigningRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestId** | `string` | Signing request ID | [Defaults to `undefined`] |
| **origin** | `string` | Required when ENVIRONMENT&#x3D;preview. Must be the canonical HTTPS preview origin; ignored for fixed production and local signing URLs. | [Optional] [Defaults to `undefined`] |

### Return type

[**SendSigningRequestResponse**](SendSigningRequestResponse.md)

### Authorization

[cognitoBearer](../README.md#cognitoBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signing capability issued once for delivery to the signer |  -  |
| **400** | Preview Origin header is missing or invalid |  -  |
| **401** | Authentication required |  -  |
| **403** | Insufficient permission |  -  |
| **404** | Signing request not found |  -  |
| **409** | Signing request cannot be sent in the current state |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

