/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AcceptOrderByQuotationResponse
 */
export interface AcceptOrderByQuotationResponse {
    /**
     * 
     * @type {string}
     * @memberof AcceptOrderByQuotationResponse
     */
    orderId: string;
}
/**
 * 
 * @export
 * @interface ActivityListResponse
 */
export interface ActivityListResponse {
    /**
     * 
     * @type {Array<ActivityResponse>}
     * @memberof ActivityListResponse
     */
    items: Array<ActivityResponse>;
}
/**
 * 
 * @export
 * @interface ActivityResponse
 */
export interface ActivityResponse {
    /**
     * 
     * @type {string}
     * @memberof ActivityResponse
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof ActivityResponse
     */
    content: string;
    /**
     * 
     * @type {Date}
     * @memberof ActivityResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ActivityResponse
     */
    createdBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ActivityResponse
     */
    dealId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ActivityResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ActivityResponse
     */
    kind: string;
    /**
     * 
     * @type {Date}
     * @memberof ActivityResponse
     */
    occurredAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ActivityResponse
     */
    tenantId: string;
}
/**
 * 
 * @export
 * @interface AddCartItemRequest
 */
export interface AddCartItemRequest {
    /**
     * Free-text note for this line, e.g. a kitchen instruction.
     * @type {string}
     * @memberof AddCartItemRequest
     */
    note?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AddCartItemRequest
     */
    optionIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof AddCartItemRequest
     */
    productId: string;
    /**
     * 
     * @type {number}
     * @memberof AddCartItemRequest
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof AddCartItemRequest
     */
    variantId?: string | null;
}
/**
 * 
 * @export
 * @interface AddOperatorRequest
 */
export interface AddOperatorRequest {
    /**
     * Operator (tenant) ID to associate.
     * @type {string}
     * @memberof AddOperatorRequest
     */
    operatorId: string;
}
/**
 * 
 * @export
 * @interface AgentDocumentCapabilities
 */
export interface AgentDocumentCapabilities {
    /**
     * 
     * @type {AgentDocumentQueueCapabilities}
     * @memberof AgentDocumentCapabilities
     */
    invoices: AgentDocumentQueueCapabilities;
    /**
     * 
     * @type {AgentDocumentQueueCapabilities}
     * @memberof AgentDocumentCapabilities
     */
    quotations: AgentDocumentQueueCapabilities;
}
/**
 * 
 * @export
 * @interface AgentDocumentQueueCapabilities
 */
export interface AgentDocumentQueueCapabilities {
    /**
     * 
     * @type {boolean}
     * @memberof AgentDocumentQueueCapabilities
     */
    list: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AgentDocumentQueueCapabilities
     */
    send: boolean;
}
/**
 * 
 * @export
 * @interface ApiKeyResponse
 */
export interface ApiKeyResponse {
    /**
     * 
     * @type {string}
     * @memberof ApiKeyResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyResponse
     */
    keyPrefix: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyResponse
     */
    lastUsedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyResponse
     */
    revokedAt?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiKeyResponse
     */
    scopes: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiKeyResponse
     */
    useCases: Array<string>;
}
/**
 * 
 * @export
 * @interface ApprovalFlowListResponse
 */
export interface ApprovalFlowListResponse {
    /**
     * 
     * @type {Array<ApprovalFlowResponse>}
     * @memberof ApprovalFlowListResponse
     */
    items: Array<ApprovalFlowResponse>;
}
/**
 * 
 * @export
 * @interface ApprovalFlowResponse
 */
export interface ApprovalFlowResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalFlowResponse
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApprovalFlowResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalFlowResponse
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalFlowResponse
     */
    minAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ApprovalFlowResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalFlowResponse
     */
    resourceType: string;
    /**
     * 
     * @type {Array<ApprovalFlowStep>}
     * @memberof ApprovalFlowResponse
     */
    steps: Array<ApprovalFlowStep>;
    /**
     * 
     * @type {string}
     * @memberof ApprovalFlowResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalFlowResponse
     */
    updatedAt: string;
}
/**
 * Frozen copy of the definition captured when a workflow is requested.
 * @export
 * @interface ApprovalFlowSnapshot
 */
export interface ApprovalFlowSnapshot {
    /**
     * 
     * @type {string}
     * @memberof ApprovalFlowSnapshot
     */
    definitionId: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalFlowSnapshot
     */
    name: string;
    /**
     * 
     * @type {Array<ApprovalFlowStep>}
     * @memberof ApprovalFlowSnapshot
     */
    steps: Array<ApprovalFlowStep>;
}
/**
 * One stage in a multi-step approval flow definition.
 * @export
 * @interface ApprovalFlowStep
 */
export interface ApprovalFlowStep {
    /**
     * Role expected to approve this step (informational for now).
     * @type {string}
     * @memberof ApprovalFlowStep
     */
    approverRole: string;
    /**
     * Number of approvals required to clear this step (>= 1).
     * @type {number}
     * @memberof ApprovalFlowStep
     */
    minApprovals: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalFlowStep
     */
    name: string;
    /**
     * 1-based, sequential order of the step.
     * @type {number}
     * @memberof ApprovalFlowStep
     */
    stepOrder: number;
}
/**
 * 
 * @export
 * @interface ApprovalMutationRequest
 */
export interface ApprovalMutationRequest {
    /**
     * 
     * @type {string}
     * @memberof ApprovalMutationRequest
     */
    action: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalMutationRequest
     */
    comment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApprovalMutationRequest
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApprovalMutationRequest
     */
    resourceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApprovalMutationRequest
     */
    resourceType?: string | null;
}
/**
 * 
 * @export
 * @interface ApprovalWorkflowEventResponse
 */
export interface ApprovalWorkflowEventResponse {
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowEventResponse
     */
    action: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowEventResponse
     */
    actorId: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowEventResponse
     */
    comment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowEventResponse
     */
    createdAt: string;
    /**
     * 1-based step the action was applied to. Absent for single-stage workflows.
     * @type {number}
     * @memberof ApprovalWorkflowEventResponse
     */
    step?: number | null;
}
/**
 * 
 * @export
 * @interface ApprovalWorkflowListResponse
 */
export interface ApprovalWorkflowListResponse {
    /**
     * 
     * @type {Array<ApprovalWorkflowResponse>}
     * @memberof ApprovalWorkflowListResponse
     */
    items: Array<ApprovalWorkflowResponse>;
}
/**
 * 
 * @export
 * @interface ApprovalWorkflowResponse
 */
export interface ApprovalWorkflowResponse {
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    cancelledAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    cancelledBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    comment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    createdAt: string;
    /**
     * 1-based current step for multi-stage workflows. `0` = single-stage.
     * @type {number}
     * @memberof ApprovalWorkflowResponse
     */
    currentStep: number;
    /**
     * Approval flow definition frozen at request time. Absent for single-stage workflows.
     * @type {ApprovalFlowSnapshot}
     * @memberof ApprovalWorkflowResponse
     */
    definitionSnapshot?: ApprovalFlowSnapshot | null;
    /**
     * 
     * @type {Array<ApprovalWorkflowEventResponse>}
     * @memberof ApprovalWorkflowResponse
     */
    history: Array<ApprovalWorkflowEventResponse>;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    requestedAt: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    requestedBy: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    resourceId: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    resourceType: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    reviewedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    reviewedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalWorkflowResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface ArtifactDownloadResponse
 */
export interface ArtifactDownloadResponse {
    /**
     * 
     * @type {string}
     * @memberof ArtifactDownloadResponse
     */
    contentType: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactDownloadResponse
     */
    expiresAt: string;
    /**
     * 
     * @type {number}
     * @memberof ArtifactDownloadResponse
     */
    fileSizeBytes: number;
    /**
     * 
     * @type {string}
     * @memberof ArtifactDownloadResponse
     */
    sha256: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactDownloadResponse
     */
    url: string;
}
/**
 * 
 * @export
 * @interface AssignMembershipPlanRequest
 */
export interface AssignMembershipPlanRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignMembershipPlanRequest
     */
    note?: string | null;
    /**
     * Class to join directly. Mutually exclusive with `productId`; one of
     * the two is required.
     * @type {string}
     * @memberof AssignMembershipPlanRequest
     */
    planId?: string | null;
    /**
     * Product being sold. Mutually exclusive with `planId`.
     * @type {string}
     * @memberof AssignMembershipPlanRequest
     */
    productId?: string | null;
    /**
     * YYYY-MM-DD (default today)
     * @type {string}
     * @memberof AssignMembershipPlanRequest
     */
    startedOn?: string | null;
}
/**
 * 
 * @export
 * @interface AutoAssignCaddiesRequest
 */
export interface AutoAssignCaddiesRequest {
    /**
     * 対象となるテナントローカル日付。
     * @type {Date}
     * @memberof AutoAssignCaddiesRequest
     */
    date: Date;
    /**
     * true なら計画のみ返し、割当は保存しない
     * @type {boolean}
     * @memberof AutoAssignCaddiesRequest
     */
    dryRun?: boolean;
    /**
     * `date` と午前・午後を定義する IANA timezone。省略時は従来の Asia/Tokyo。
     * @type {string}
     * @memberof AutoAssignCaddiesRequest
     */
    timezone?: string | null;
}
/**
 * 
 * @export
 * @interface AutoAssignCaddiesResponse
 */
export interface AutoAssignCaddiesResponse {
    /**
     * 
     * @type {Array<AutoAssignPlanItem>}
     * @memberof AutoAssignCaddiesResponse
     */
    assigned: Array<AutoAssignPlanItem>;
    /**
     * 
     * @type {boolean}
     * @memberof AutoAssignCaddiesResponse
     */
    dryRun: boolean;
    /**
     * 
     * @type {Array<AutoAssignSkippedItem>}
     * @memberof AutoAssignCaddiesResponse
     */
    skipped: Array<AutoAssignSkippedItem>;
}
/**
 * 
 * @export
 * @interface AutoAssignPlanItem
 */
export interface AutoAssignPlanItem {
    /**
     * 
     * @type {string}
     * @memberof AutoAssignPlanItem
     */
    caddieDisplayName: string;
    /**
     * 
     * @type {string}
     * @memberof AutoAssignPlanItem
     */
    caddieProfileId: string;
    /**
     * 選定理由（月間目標の残数・稼働状況など）
     * @type {Array<string>}
     * @memberof AutoAssignPlanItem
     */
    rationale: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof AutoAssignPlanItem
     */
    reservationId: string;
    /**
     * 
     * @type {Date}
     * @memberof AutoAssignPlanItem
     */
    scheduledAt: Date;
}
/**
 * 
 * @export
 * @interface AutoAssignSkippedItem
 */
export interface AutoAssignSkippedItem {
    /**
     * 
     * @type {string}
     * @memberof AutoAssignSkippedItem
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof AutoAssignSkippedItem
     */
    reservationId: string;
}
/**
 * 
 * @export
 * @interface BillingAccountResponse
 */
export interface BillingAccountResponse {
    /**
     * 
     * @type {string}
     * @memberof BillingAccountResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAccountResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAccountResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAccountResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface BridgeActionRequest
 */
export interface BridgeActionRequest {
    /**
     * 
     * @type {string}
     * @memberof BridgeActionRequest
     */
    definitionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeActionRequest
     */
    runId?: string | null;
}
/**
 * 
 * @export
 * @interface BridgeActionResponse
 */
export interface BridgeActionResponse {
    /**
     * 
     * @type {string}
     * @memberof BridgeActionResponse
     */
    action: string;
    /**
     * 
     * @type {boolean}
     * @memberof BridgeActionResponse
     */
    allowed: boolean;
    /**
     * 
     * @type {string}
     * @memberof BridgeActionResponse
     */
    reason: string;
}
/**
 * 
 * @export
 * @interface BridgeDefinitionListResponse
 */
export interface BridgeDefinitionListResponse {
    /**
     * 
     * @type {Array<BridgeDefinitionResponse>}
     * @memberof BridgeDefinitionListResponse
     */
    items: Array<BridgeDefinitionResponse>;
}
/**
 * 
 * @export
 * @interface BridgeDefinitionRequest
 */
export interface BridgeDefinitionRequest {
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionRequest
     */
    description?: string | null;
    /**
     * 
     * @type {BridgeMapping}
     * @memberof BridgeDefinitionRequest
     */
    mapping: BridgeMapping;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionRequest
     */
    sourceType: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionRequest
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionRequest
     */
    targetObject: string;
}
/**
 * 
 * @export
 * @interface BridgeDefinitionResponse
 */
export interface BridgeDefinitionResponse {
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    createdBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    id: string;
    /**
     * 
     * @type {BridgeMapping}
     * @memberof BridgeDefinitionResponse
     */
    mapping: BridgeMapping;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    schemaVersion: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    sourceType: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    targetObject: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeDefinitionResponse
     */
    updatedBy?: string | null;
}
/**
 * 
 * @export
 * @interface BridgeExportDefinitionListResponse
 */
export interface BridgeExportDefinitionListResponse {
    /**
     * 
     * @type {Array<BridgeExportDefinitionResponse>}
     * @memberof BridgeExportDefinitionListResponse
     */
    items: Array<BridgeExportDefinitionResponse>;
}
/**
 * 
 * @export
 * @interface BridgeExportDefinitionRequest
 */
export interface BridgeExportDefinitionRequest {
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionRequest
     */
    destinationType: string;
    /**
     * 
     * @type {BridgeMapping}
     * @memberof BridgeExportDefinitionRequest
     */
    mapping: BridgeMapping;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionRequest
     */
    sourceObject: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface BridgeExportDefinitionResponse
 */
export interface BridgeExportDefinitionResponse {
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    createdBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    destinationType: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    id: string;
    /**
     * 
     * @type {BridgeMapping}
     * @memberof BridgeExportDefinitionResponse
     */
    mapping: BridgeMapping;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    schemaVersion: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    sourceObject: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportDefinitionResponse
     */
    updatedBy?: string | null;
}
/**
 * One exportable property of a source object: the key `serde_json::to_value`
 * produces on the fetched row, plus an operator-facing label.
 * @export
 * @interface BridgeExportField
 */
export interface BridgeExportField {
    /**
     * 
     * @type {string}
     * @memberof BridgeExportField
     */
    field: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportField
     */
    label: string;
}
/**
 * 
 * @export
 * @interface BridgeExportObjectListResponse
 */
export interface BridgeExportObjectListResponse {
    /**
     * 
     * @type {Array<BridgeExportObjectResponse>}
     * @memberof BridgeExportObjectListResponse
     */
    items: Array<BridgeExportObjectResponse>;
}
/**
 * 
 * @export
 * @interface BridgeExportObjectResponse
 */
export interface BridgeExportObjectResponse {
    /**
     * 
     * @type {Array<BridgeExportField>}
     * @memberof BridgeExportObjectResponse
     */
    fields: Array<BridgeExportField>;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportObjectResponse
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeExportObjectResponse
     */
    label: string;
}
/**
 * 
 * @export
 * @interface BridgeMapping
 */
export interface BridgeMapping {
    /**
     * 
     * @type {Array<BridgeMappingField>}
     * @memberof BridgeMapping
     */
    fields: Array<BridgeMappingField>;
    /**
     * 
     * @type {any}
     * @memberof BridgeMapping
     */
    llmProposal?: any | null;
}
/**
 * 
 * @export
 * @interface BridgeMappingField
 */
export interface BridgeMappingField {
    /**
     * 
     * @type {boolean}
     * @memberof BridgeMappingField
     */
    approved?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BridgeMappingField
     */
    confidence?: number | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeMappingField
     */
    explanation?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BridgeMappingField
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BridgeMappingField
     */
    source: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeMappingField
     */
    target: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeMappingField
     */
    transform?: string | null;
}
/**
 * 
 * @export
 * @interface BridgeRunListResponse
 */
export interface BridgeRunListResponse {
    /**
     * 
     * @type {boolean}
     * @memberof BridgeRunListResponse
     */
    hasMore: boolean;
    /**
     * 
     * @type {Array<BridgeRunSummaryResponse>}
     * @memberof BridgeRunListResponse
     */
    items: Array<BridgeRunSummaryResponse>;
    /**
     * 
     * @type {number}
     * @memberof BridgeRunListResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof BridgeRunListResponse
     */
    offset: number;
}
/**
 * 
 * @export
 * @interface BridgeRunPreviewRequest
 */
export interface BridgeRunPreviewRequest {
    /**
     * 
     * @type {string}
     * @memberof BridgeRunPreviewRequest
     */
    idempotencyKey?: string | null;
    /**
     * 
     * @type {any}
     * @memberof BridgeRunPreviewRequest
     */
    llmProposal?: any | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunPreviewRequest
     */
    rawCsv: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunPreviewRequest
     */
    sourceFileName?: string | null;
}
/**
 * 
 * @export
 * @interface BridgeRunResponse
 */
export interface BridgeRunResponse {
    /**
     * 
     * @type {string}
     * @memberof BridgeRunResponse
     */
    actorId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunResponse
     */
    createdAt: string;
    /**
     * 
     * @type {number}
     * @memberof BridgeRunResponse
     */
    createdCount: number;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunResponse
     */
    definitionId: string;
    /**
     * 
     * @type {number}
     * @memberof BridgeRunResponse
     */
    errorCount: number;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunResponse
     */
    executedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunResponse
     */
    idempotencyKey: string;
    /**
     * 
     * @type {any}
     * @memberof BridgeRunResponse
     */
    llmProposal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof BridgeRunResponse
     */
    normalized: any | null;
    /**
     * 
     * @type {any}
     * @memberof BridgeRunResponse
     */
    rawSource: any | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunResponse
     */
    sourceFileHash: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunResponse
     */
    sourceFileName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunResponse
     */
    tenantId: string;
}
/**
 * 
 * @export
 * @interface BridgeRunSummaryResponse
 */
export interface BridgeRunSummaryResponse {
    /**
     * 
     * @type {string}
     * @memberof BridgeRunSummaryResponse
     */
    createdAt: string;
    /**
     * 
     * @type {number}
     * @memberof BridgeRunSummaryResponse
     */
    createdCount: number;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunSummaryResponse
     */
    definitionId: string;
    /**
     * 
     * @type {number}
     * @memberof BridgeRunSummaryResponse
     */
    errorCount: number;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunSummaryResponse
     */
    executedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunSummaryResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunSummaryResponse
     */
    sourceFileName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunSummaryResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeRunSummaryResponse
     */
    tenantId: string;
}
/**
 * The wire shape of one target property, shared by the API and the UI so the
 * browser never keeps its own copy of the field list.
 * @export
 * @interface BridgeTargetFieldView
 */
export interface BridgeTargetFieldView {
    /**
     * 
     * @type {Array<string>}
     * @memberof BridgeTargetFieldView
     */
    aliases: Array<string>;
    /**
     * Accepted spellings for `kind == "enum"`, otherwise empty.
     * @type {Array<string>}
     * @memberof BridgeTargetFieldView
     */
    allowed: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BridgeTargetFieldView
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeTargetFieldView
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeTargetFieldView
     */
    label: string;
    /**
     * 
     * @type {boolean}
     * @memberof BridgeTargetFieldView
     */
    required: boolean;
}
/**
 * 
 * @export
 * @interface BridgeTargetObjectListResponse
 */
export interface BridgeTargetObjectListResponse {
    /**
     * 
     * @type {Array<BridgeTargetObjectView>}
     * @memberof BridgeTargetObjectListResponse
     */
    items: Array<BridgeTargetObjectView>;
}
/**
 * 
 * @export
 * @interface BridgeTargetObjectView
 */
export interface BridgeTargetObjectView {
    /**
     * 
     * @type {Array<BridgeTargetFieldView>}
     * @memberof BridgeTargetObjectView
     */
    fields: Array<BridgeTargetFieldView>;
    /**
     * 
     * @type {string}
     * @memberof BridgeTargetObjectView
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof BridgeTargetObjectView
     */
    label: string;
    /**
     * Whether a previewed run of this target can be executed.
     * @type {boolean}
     * @memberof BridgeTargetObjectView
     */
    writable: boolean;
}
/**
 * 
 * @export
 * @interface CaddieAvailability
 */
export interface CaddieAvailability {
    /**
     * 
     * @type {string}
     * @memberof CaddieAvailability
     */
    caddieProfileId: string;
    /**
     * 
     * @type {Date}
     * @memberof CaddieAvailability
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof CaddieAvailability
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof CaddieAvailability
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof CaddieAvailability
     */
    healthNote?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CaddieAvailability
     */
    id: string;
    /**
     * 
     * @type {CaddieAvailabilityStatus}
     * @memberof CaddieAvailability
     */
    status: CaddieAvailabilityStatus;
    /**
     * 
     * @type {string}
     * @memberof CaddieAvailability
     */
    tenantId: string;
    /**
     * 
     * @type {boolean}
     * @memberof CaddieAvailability
     */
    twoRoundRequest: boolean;
    /**
     * 
     * @type {Date}
     * @memberof CaddieAvailability
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface CaddieAvailabilityListResponse
 */
export interface CaddieAvailabilityListResponse {
    /**
     * 
     * @type {Array<CaddieAvailability>}
     * @memberof CaddieAvailabilityListResponse
     */
    items: Array<CaddieAvailability>;
}

/**
 * キャディ日別勤務希望状態
 * @export
 */
export const CaddieAvailabilityStatus = {
    Available: 'available',
    Unavailable: 'unavailable',
    MorningOnly: 'morning_only',
    AfternoonOnly: 'afternoon_only',
    LightDuty: 'light_duty'
} as const;
export type CaddieAvailabilityStatus = typeof CaddieAvailabilityStatus[keyof typeof CaddieAvailabilityStatus];

/**
 * キャディの対応可能コース（多対多）
 * @export
 * @interface CaddieCourseMembership
 */
export interface CaddieCourseMembership {
    /**
     * 
     * @type {string}
     * @memberof CaddieCourseMembership
     */
    caddieProfileId: string;
    /**
     * 
     * @type {Date}
     * @memberof CaddieCourseMembership
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CaddieCourseMembership
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof CaddieCourseMembership
     */
    golfCourseId: string;
    /**
     * 
     * @type {string}
     * @memberof CaddieCourseMembership
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof CaddieCourseMembership
     */
    isPrimary: boolean;
    /**
     * 
     * @type {string}
     * @memberof CaddieCourseMembership
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof CaddieCourseMembership
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface CaddieCourseMembershipListResponse
 */
export interface CaddieCourseMembershipListResponse {
    /**
     * 
     * @type {Array<CaddieCourseMembership>}
     * @memberof CaddieCourseMembershipListResponse
     */
    items: Array<CaddieCourseMembership>;
}
/**
 * Response for the cancel-expired-orders batch operation.
 * @export
 * @interface CancelExpiredResponse
 */
export interface CancelExpiredResponse {
    /**
     * Number of orders cancelled.
     * @type {number}
     * @memberof CancelExpiredResponse
     */
    cancelledCount: number;
}
/**
 * `Serialize` is derived so the cancel handler can hash the request under an
 * `Idempotency-Key`: the hash is what distinguishes a genuine retry from a key
 * reused for a different cancellation.
 * @export
 * @interface CancelReservationRequest
 */
export interface CancelReservationRequest {
    /**
     * 
     * @type {number}
     * @memberof CancelReservationRequest
     */
    cancellationFeeAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CancelReservationRequest
     */
    feeCancelUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CancelReservationRequest
     */
    feeSuccessUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CancelReservationRequest
     */
    reason?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CancelReservationRequest
     */
    refundAmount?: number | null;
}

/**
 * What kind of principal performed a cancellation.
 * 
 * `System` is not a fallback for "we failed to resolve the actor": it names
 * cancellations that no human requested — an expired payment hold, a provider
 * webhook — and those legitimately have no `actor_id`.
 * @export
 */
export const CancellationActorType = {
    User: 'user',
    ServiceAccount: 'service_account',
    System: 'system'
} as const;
export type CancellationActorType = typeof CancellationActorType[keyof typeof CancellationActorType];

/**
 * 
 * @export
 * @interface CancellationFeeReportResponse
 */
export interface CancellationFeeReportResponse {
    /**
     * 
     * @type {Array<CancellationFeeReportRow>}
     * @memberof CancellationFeeReportResponse
     */
    items: Array<CancellationFeeReportRow>;
}
/**
 * 
 * @export
 * @interface CancellationFeeReportRow
 */
export interface CancellationFeeReportRow {
    /**
     * 
     * @type {number}
     * @memberof CancellationFeeReportRow
     */
    cancellationFeeAmount: number;
    /**
     * 
     * @type {string}
     * @memberof CancellationFeeReportRow
     */
    cancellationStatus: string;
    /**
     * 
     * @type {Date}
     * @memberof CancellationFeeReportRow
     */
    cancelledAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CancellationFeeReportRow
     */
    checkoutUrl?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CancellationFeeReportRow
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CancellationFeeReportRow
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof CancellationFeeReportRow
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CancellationFeeReportRow
     */
    customerName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CancellationFeeReportRow
     */
    paidAmount: number;
    /**
     * 
     * @type {ReservationPaymentStatus}
     * @memberof CancellationFeeReportRow
     */
    paymentStatus: ReservationPaymentStatus;
    /**
     * 
     * @type {number}
     * @memberof CancellationFeeReportRow
     */
    refundAmount: number;
    /**
     * 
     * @type {string}
     * @memberof CancellationFeeReportRow
     */
    reservationId: string;
    /**
     * 
     * @type {string}
     * @memberof CancellationFeeReportRow
     */
    reservationNumber: string;
    /**
     * 
     * @type {string}
     * @memberof CancellationFeeReportRow
     */
    squarePaymentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CancellationFeeReportRow
     */
    squarePaymentLinkId?: string | null;
}


/**
 * 
 * @export
 * @interface CartItemResponse
 */
export interface CartItemResponse {
    /**
     * The product's own price, before the variant and option adjustments.
     * @type {number}
     * @memberof CartItemResponse
     */
    baseUnitPriceNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof CartItemResponse
     */
    id: string;
    /**
     * Free-text note for this line, e.g. a kitchen instruction.
     * @type {string}
     * @memberof CartItemResponse
     */
    note?: string | null;
    /**
     * 
     * @type {Array<SelectedOptionResponse>}
     * @memberof CartItemResponse
     */
    options: Array<SelectedOptionResponse>;
    /**
     * Per-unit sum of the chosen options.
     * @type {number}
     * @memberof CartItemResponse
     */
    optionsTotalNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof CartItemResponse
     */
    productId: string;
    /**
     * 
     * @type {number}
     * @memberof CartItemResponse
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof CartItemResponse
     */
    reservedUntil?: string | null;
    /**
     * Effective price per unit: base + variant + options.
     * @type {number}
     * @memberof CartItemResponse
     */
    unitPriceNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof CartItemResponse
     */
    variantId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CartItemResponse
     */
    variantName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CartItemResponse
     */
    variantPriceDeltaNanodollar: number;
}
/**
 * 
 * @export
 * @interface CartResponse
 */
export interface CartResponse {
    /**
     * 
     * @type {string}
     * @memberof CartResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof CartResponse
     */
    expiresAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CartResponse
     */
    id: string;
    /**
     * 
     * @type {Array<CartItemResponse>}
     * @memberof CartResponse
     */
    items: Array<CartItemResponse>;
    /**
     * 
     * @type {string}
     * @memberof CartResponse
     */
    sessionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CartResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof CartResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof CartResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof CartResponse
     */
    userId?: string | null;
}
/**
 * 
 * @export
 * @interface CategoryResponse
 */
export interface CategoryResponse {
    /**
     * 
     * @type {string}
     * @memberof CategoryResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryResponse
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CategoryResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryResponse
     */
    parentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CategoryResponse
     */
    slug: string;
    /**
     * 
     * @type {number}
     * @memberof CategoryResponse
     */
    sortOrder: number;
}
/**
 * 
 * @export
 * @interface CheckoutRequest
 */
export interface CheckoutRequest {
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    cancelUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    cartId: string;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    couponCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    customerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    customerName?: string | null;
    /**
     * `pickup`, `delivery`, or `dine_in`.
     * @type {string}
     * @memberof CheckoutRequest
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    paymentMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    pickupRequestedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    salesChannel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    salesChannelDetail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    shippingAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    shippingName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    shippingPhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    sourceCampaign?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    sourceMedium?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    storeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutRequest
     */
    successUrl?: string | null;
    /**
     * Seat or table the dine-in order is served to, as the store labels it.
     * @type {string}
     * @memberof CheckoutRequest
     */
    tableNumber?: string | null;
}
/**
 * 
 * @export
 * @interface ClientCapabilitiesResponse
 */
export interface ClientCapabilitiesResponse {
    /**
     * 
     * @type {AgentDocumentCapabilities}
     * @memberof ClientCapabilitiesResponse
     */
    agentDocuments: AgentDocumentCapabilities;
}
/**
 * 
 * @export
 * @interface ClientCsvImportError
 */
export interface ClientCsvImportError {
    /**
     * 
     * @type {string}
     * @memberof ClientCsvImportError
     */
    message: string;
    /**
     * 
     * @type {number}
     * @memberof ClientCsvImportError
     */
    row: number;
}
/**
 * 
 * @export
 * @interface ClientCsvImportResponse
 */
export interface ClientCsvImportResponse {
    /**
     * 
     * @type {number}
     * @memberof ClientCsvImportResponse
     */
    created: number;
    /**
     * 
     * @type {Array<ClientCsvImportError>}
     * @memberof ClientCsvImportResponse
     */
    errors: Array<ClientCsvImportError>;
    /**
     * 
     * @type {number}
     * @memberof ClientCsvImportResponse
     */
    updated: number;
}
/**
 * 
 * @export
 * @interface ClockInRequest
 */
export interface ClockInRequest {
    /**
     * Working day this punch belongs to. Defaults to the UTC calendar date of
     * `clockIn`, which is only the same day for callers on UTC.
     * @type {Date}
     * @memberof ClockInRequest
     */
    businessDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ClockInRequest
     */
    clockIn?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ClockInRequest
     */
    notes?: string | null;
}
/**
 * 
 * @export
 * @interface ClockOutRequest
 */
export interface ClockOutRequest {
    /**
     * 
     * @type {number}
     * @memberof ClockOutRequest
     */
    breakMinutes?: number | null;
    /**
     * Working day the matching clock-in was filed under.
     * @type {Date}
     * @memberof ClockOutRequest
     */
    businessDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ClockOutRequest
     */
    clockOut?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ClockOutRequest
     */
    notes?: string | null;
}
/**
 * 
 * @export
 * @interface CloseCustomerClientAffiliationRequest
 */
export interface CloseCustomerClientAffiliationRequest {
    /**
     * 
     * @type {Date}
     * @memberof CloseCustomerClientAffiliationRequest
     */
    validTo: Date;
}
/**
 * 
 * @export
 * @interface CloseReservationWaitlistEntryRequest
 */
export interface CloseReservationWaitlistEntryRequest {
    /**
     * 
     * @type {string}
     * @memberof CloseReservationWaitlistEntryRequest
     */
    reason?: string | null;
    /**
     * `withdrawn` (the guest no longer wants it) or `expired` (the date
     * passed). `converted` is not accepted: that status is only reachable by
     * actually creating the reservation.
     * @type {string}
     * @memberof CloseReservationWaitlistEntryRequest
     */
    status: string;
}
/**
 * 
 * @export
 * @interface CompletePublicSigningInput
 */
export interface CompletePublicSigningInput {
    /**
     * 
     * @type {string}
     * @memberof CompletePublicSigningInput
     */
    idempotencyKey: string;
    /**
     * 
     * @type {Array<PublicSigningValueInput>}
     * @memberof CompletePublicSigningInput
     */
    values: Array<PublicSigningValueInput>;
}
/**
 * 
 * @export
 * @interface ConsumerConsentStateListResponse
 */
export interface ConsumerConsentStateListResponse {
    /**
     * 
     * @type {Array<ConsumerConsentStateResponse>}
     * @memberof ConsumerConsentStateListResponse
     */
    items: Array<ConsumerConsentStateResponse>;
}
/**
 * `consent_key` ごとに解決した現在の同意状態。
 * 
 * 定義側 (`membership_consent_items`) と証跡側 (`customer_consents`) を突き
 * 合わせた結果を返す。片方にしか無い状態もあるので、どちらの欠落も `null`
 * で表せる形にしてある。
 * @export
 * @interface ConsumerConsentStateResponse
 */
export interface ConsumerConsentStateResponse {
    /**
     * 一度も記録が無ければ `null`。`false` は「拒否された」であって「未取得」
     * ではない。
     * @type {boolean}
     * @memberof ConsumerConsentStateResponse
     */
    accepted?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ConsumerConsentStateResponse
     */
    acceptedAt?: string | null;
    /**
     * 記録時点の約款バージョン。
     * @type {string}
     * @memberof ConsumerConsentStateResponse
     */
    acceptedTermsVersion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsumerConsentStateResponse
     */
    body?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsumerConsentStateResponse
     */
    channel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsumerConsentStateResponse
     */
    consentKey: string;
    /**
     * 定義側の現在の約款バージョン。
     * @type {string}
     * @memberof ConsumerConsentStateResponse
     */
    currentTermsVersion?: string | null;
    /**
     * Source application document retained in the Evidence domain.
     * @type {string}
     * @memberof ConsumerConsentStateResponse
     */
    evidenceRecordId?: string | null;
    /**
     * 定義が無効化・削除済みの `consentKey` では `null`。証跡は残るので行は
     * 消えない。
     * @type {string}
     * @memberof ConsumerConsentStateResponse
     */
    label?: string | null;
    /**
     * 同意済みだが、そのときの約款バージョンが現在の定義と違う。再同意を
     * 促す判断に使う。
     * @type {boolean}
     * @memberof ConsumerConsentStateResponse
     */
    outdated: boolean;
    /**
     * 
     * @type {string}
     * @memberof ConsumerConsentStateResponse
     */
    recordedBy?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ConsumerConsentStateResponse
     */
    required?: boolean | null;
}
/**
 * 
 * @export
 * @interface ConsumerCustomerCsvImportError
 */
export interface ConsumerCustomerCsvImportError {
    /**
     * 
     * @type {string}
     * @memberof ConsumerCustomerCsvImportError
     */
    message: string;
    /**
     * 
     * @type {number}
     * @memberof ConsumerCustomerCsvImportError
     */
    row: number;
}
/**
 * 
 * @export
 * @interface ConsumerCustomerCsvImportResponse
 */
export interface ConsumerCustomerCsvImportResponse {
    /**
     * 
     * @type {number}
     * @memberof ConsumerCustomerCsvImportResponse
     */
    created: number;
    /**
     * 
     * @type {Array<ConsumerCustomerCsvImportError>}
     * @memberof ConsumerCustomerCsvImportResponse
     */
    errors: Array<ConsumerCustomerCsvImportError>;
    /**
     * 
     * @type {number}
     * @memberof ConsumerCustomerCsvImportResponse
     */
    updated: number;
}

/**
 * 顧客へ**連絡する手段**。連絡拒否 (do-not-contact) の単位 (PLT-4053)。
 * 
 * [`ConsentChannel`] とは別物。あちらは「窓口で取ったか web で取ったか」
 * という受け取り経路で、こちらは「電話してよいか、郵便を送ってよいか」。
 * 同じ列で2つの意味を持たせると、電話を拒否した顧客が「店頭で申し出た」
 * の意味の `store` として保存され、判定が壊れる。
 * 
 * テナント設定ではなく固定の集合にしてある。連絡可否を読む側（顧客を
 * 抽出して案内を送る Cloud App）が、テナントごとのキー体系を知らずに
 * 「連絡してよい相手」を求められることが要件そのもので、語彙が可変だと
 * 判定が呼び出し側に戻ってしまう。業種非依存の手段だけを並べる。
 * 
 * 接触履歴の [`crate::customer_contact::ContactChannel`] (PLT-4052) とも
 * 別物。あちらは「実際にどの手段で接触したか」の記録で `visit` / `chat` /
 * `other` を含み、こちらは「送ってよいか」を判定する到達手段だけに絞って
 * ある。両方を `ContactChannel` と呼ぶと `order` の re-export で名前が
 * 衝突するので、連絡可否側に接頭辞を付けている。
 * @export
 */
export const ContactPreferenceChannel = {
    Phone: 'Phone',
    Email: 'Email',
    Sms: 'Sms',
    Post: 'Post'
} as const;
export type ContactPreferenceChannel = typeof ContactPreferenceChannel[keyof typeof ContactPreferenceChannel];

/**
 * 
 * @export
 * @interface ContactPreferenceEntryRequest
 */
export interface ContactPreferenceEntryRequest {
    /**
     * 連絡手段。`phone` / `email` / `sms` / `post`。
     * @type {ContactPreferenceChannel}
     * @memberof ContactPreferenceEntryRequest
     */
    channel: ContactPreferenceChannel;
    /**
     * `false` で「このチャネルへは連絡しない」。`true` はその撤回。
     * どちらも証跡への追記で、前の行は残る。
     * @type {boolean}
     * @memberof ContactPreferenceEntryRequest
     */
    contactable: boolean;
    /**
     * 申し出の内容や受け付けた状況。省略可。
     * @type {string}
     * @memberof ContactPreferenceEntryRequest
     */
    note?: string | null;
}


/**
 * 
 * @export
 * @interface ContactPreferenceListResponse
 */
export interface ContactPreferenceListResponse {
    /**
     * 
     * @type {Array<ContactPreferenceResponse>}
     * @memberof ContactPreferenceListResponse
     */
    items: Array<ContactPreferenceResponse>;
}
/**
 * チャネルごとに解決した現在の連絡可否。
 * 
 * [`ContactPreferenceChannel::ALL`] の全チャネルを必ず返す。記録の無いチャネルを
 * 省くと、呼び出し側が「返ってこない = 不可」と読む余地が残る。
 * @export
 * @interface ContactPreferenceResponse
 */
export interface ContactPreferenceResponse {
    /**
     * 
     * @type {ContactPreferenceChannel}
     * @memberof ContactPreferenceResponse
     */
    channel: ContactPreferenceChannel;
    /**
     * **いま**このチャネルへ連絡してよいか。申し出が一度も無ければ `true`
     * （既定は連絡可）。
     * @type {boolean}
     * @memberof ContactPreferenceResponse
     */
    contactable: boolean;
    /**
     * 顧客からの申し出が記録されているか。`false` は「聞いていない」で
     * あって「拒否されていない」ことの証明ではない。
     * @type {boolean}
     * @memberof ContactPreferenceResponse
     */
    declared: boolean;
    /**
     * 最新の申し出の日時 (RFC 3339)。未記録なら `null`。
     * @type {string}
     * @memberof ContactPreferenceResponse
     */
    declaredAt?: string | null;
    /**
     * 申し出に添えられたメモ。
     * @type {string}
     * @memberof ContactPreferenceResponse
     */
    note?: string | null;
    /**
     * 受け付けた担当。
     * @type {string}
     * @memberof ContactPreferenceResponse
     */
    recordedBy?: string | null;
    /**
     * 申し出を受け取った経路 (`store` / `web` / `kiosk`)。連絡手段ではない。
     * @type {string}
     * @memberof ContactPreferenceResponse
     */
    source?: string | null;
}


/**
 * 契約明細 1 行。見積・受注からの引き継ぎ元と同じ形。
 * @export
 * @interface ContractLineItem
 */
export interface ContractLineItem {
    /**
     * 
     * @type {string}
     * @memberof ContractLineItem
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof ContractLineItem
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof ContractLineItem
     */
    unitPrice: number;
}
/**
 * 
 * @export
 * @interface ConvertOrderToInvoiceResponse
 */
export interface ConvertOrderToInvoiceResponse {
    /**
     * 
     * @type {string}
     * @memberof ConvertOrderToInvoiceResponse
     */
    invoiceId: string;
    /**
     * 
     * @type {CrateOrderApiOrderResponse}
     * @memberof ConvertOrderToInvoiceResponse
     */
    order: CrateOrderApiOrderResponse;
}
/**
 * 
 * @export
 * @interface ConvertQuotationToInvoiceResponse
 */
export interface ConvertQuotationToInvoiceResponse {
    /**
     * 
     * @type {string}
     * @memberof ConvertQuotationToInvoiceResponse
     */
    invoiceId: string;
    /**
     * 
     * @type {QuotationResponse}
     * @memberof ConvertQuotationToInvoiceResponse
     */
    quotation: QuotationResponse;
}
/**
 * Overrides for the reservation an entry becomes.
 * 
 * Everything is optional and defaults to what the entry recorded. The
 * overrides exist because the queue stores what the guest asked for weeks
 * ago, and the booking that finally happens may differ — a different resource
 * freed up, or the price was agreed on the phone.
 * @export
 * @interface ConvertReservationWaitlistEntryRequest
 */
export interface ConvertReservationWaitlistEntryRequest {
    /**
     * 
     * @type {string}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    cancelUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    depositAmount?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    endsAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    idempotencyKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    prepaymentPolicy?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    priceAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    resourceId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    startsAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    successUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConvertReservationWaitlistEntryRequest
     */
    timezone?: string | null;
}
/**
 * 
 * @export
 * @interface ConvertReservationWaitlistEntryResponse
 */
export interface ConvertReservationWaitlistEntryResponse {
    /**
     * 
     * @type {ReservationWaitlistEntry}
     * @memberof ConvertReservationWaitlistEntryResponse
     */
    entry: ReservationWaitlistEntry;
    /**
     * 
     * @type {CreateReservationResponse}
     * @memberof ConvertReservationWaitlistEntryResponse
     */
    reservation: CreateReservationResponse;
}
/**
 * 
 * @export
 * @interface CouponResponse
 */
export interface CouponResponse {
    /**
     * 
     * @type {string}
     * @memberof CouponResponse
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof CouponResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof CouponResponse
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof CouponResponse
     */
    discountType: string;
    /**
     * 
     * @type {number}
     * @memberof CouponResponse
     */
    discountValue: number;
    /**
     * 
     * @type {string}
     * @memberof CouponResponse
     */
    exclusionGroup?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CouponResponse
     */
    expiresAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CouponResponse
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof CouponResponse
     */
    isActive: boolean;
    /**
     * 
     * @type {number}
     * @memberof CouponResponse
     */
    minimumOrderAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CouponResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof CouponResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {number}
     * @memberof CouponResponse
     */
    usageLimit?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof CouponResponse
     */
    usePerUser: boolean;
    /**
     * 
     * @type {number}
     * @memberof CouponResponse
     */
    usedCount: number;
}
/**
 * 
 * @export
 * @interface CrateOrderApiOrderItemResponse
 */
export interface CrateOrderApiOrderItemResponse {
    /**
     * 
     * @type {number}
     * @memberof CrateOrderApiOrderItemResponse
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderItemResponse
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof CrateOrderApiOrderItemResponse
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderItemResponse
     */
    sku?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CrateOrderApiOrderItemResponse
     */
    unitPrice: number;
}
/**
 * 
 * @export
 * @interface CrateOrderApiOrderResponse
 */
export interface CrateOrderApiOrderResponse {
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    cancelledAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    clientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    clientName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    completedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    confirmedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    convertedInvoiceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    inventoryDecrementedAt?: string | null;
    /**
     * 
     * @type {Array<CrateOrderApiOrderItemResponse>}
     * @memberof CrateOrderApiOrderResponse
     */
    items: Array<CrateOrderApiOrderItemResponse>;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    orderNumber: string;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    shippedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    source: string;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    squareOrderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    squarePaymentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof CrateOrderApiOrderResponse
     */
    subtotalAmount: number;
    /**
     * 
     * @type {number}
     * @memberof CrateOrderApiOrderResponse
     */
    taxAmount: number;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    tenantId: string;
    /**
     * 
     * @type {number}
     * @memberof CrateOrderApiOrderResponse
     */
    totalAmount: number;
    /**
     * 
     * @type {string}
     * @memberof CrateOrderApiOrderResponse
     */
    updatedAt: string;
}

/**
 * 
 * @export
 */
export const CreatableCustomFieldTypeWire = {
    Text: 'text',
    Email: 'email',
    Tel: 'tel',
    Number: 'number',
    Date: 'date',
    Select: 'select',
    Boolean: 'boolean'
} as const;
export type CreatableCustomFieldTypeWire = typeof CreatableCustomFieldTypeWire[keyof typeof CreatableCustomFieldTypeWire];

/**
 * 
 * @export
 * @interface CreateActivityRequest
 */
export interface CreateActivityRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateActivityRequest
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateActivityRequest
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof CreateActivityRequest
     */
    createdBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateActivityRequest
     */
    dealId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateActivityRequest
     */
    kind: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateActivityRequest
     */
    occurredAt?: Date | null;
}
/**
 * 
 * @export
 * @interface CreateApiKeyRequest
 */
export interface CreateApiKeyRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateApiKeyRequest
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateApiKeyRequest
     */
    scopes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateApiKeyRequest
     */
    useCases?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface CreateApiKeyResponse
 */
export interface CreateApiKeyResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateApiKeyResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof CreateApiKeyResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CreateApiKeyResponse
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof CreateApiKeyResponse
     */
    keyPrefix: string;
    /**
     * 
     * @type {string}
     * @memberof CreateApiKeyResponse
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateApiKeyResponse
     */
    scopes: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateApiKeyResponse
     */
    useCases: Array<string>;
}
/**
 * 
 * @export
 * @interface CreateApprovalFlowRequest
 */
export interface CreateApprovalFlowRequest {
    /**
     * 
     * @type {boolean}
     * @memberof CreateApprovalFlowRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CreateApprovalFlowRequest
     */
    minAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateApprovalFlowRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateApprovalFlowRequest
     */
    resourceType: string;
    /**
     * 
     * @type {Array<ApprovalFlowStep>}
     * @memberof CreateApprovalFlowRequest
     */
    steps: Array<ApprovalFlowStep>;
}
/**
 * 
 * @export
 * @interface CreateBillingAccountRequest
 */
export interface CreateBillingAccountRequest {
    /**
     * Human-readable name for the billing account.
     * @type {string}
     * @memberof CreateBillingAccountRequest
     */
    name: string;
}
/**
 * 
 * @export
 * @interface CreateCartRequest
 */
export interface CreateCartRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateCartRequest
     */
    sessionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCartRequest
     */
    userId?: string | null;
}
/**
 * 
 * @export
 * @interface CreateConsumerCustomerRequest
 */
export interface CreateConsumerCustomerRequest {
    /**
     * 
     * @type {CreateOrderClientAddressRequest}
     * @memberof CreateConsumerCustomerRequest
     */
    address?: CreateOrderClientAddressRequest | null;
    /**
     * YYYY-MM-DD (PLT-4040)。省略可。
     * @type {string}
     * @memberof CreateConsumerCustomerRequest
     */
    birthDate?: string | null;
    /**
     * store / web / kiosk (default store)
     * @type {string}
     * @memberof CreateConsumerCustomerRequest
     */
    channel?: string | null;
    /**
     * 窓口で用紙にチェックをもらって登録する運用では、顧客の作成と同意の
     * 記録が同じ一枚から起きる (PLT-4041)。ここで一緒に渡せると、顧客だけ
     * できて同意が落ちる中途半端な状態を呼び出し側が後始末せずに済む。
     * @type {Array<RegistrationConsentRequest>}
     * @memberof CreateConsumerCustomerRequest
     */
    consents?: Array<RegistrationConsentRequest>;
    /**
     * 
     * @type {string}
     * @memberof CreateConsumerCustomerRequest
     */
    email?: string | null;
    /**
     * 再送鍵。同じ鍵の2回目以降は顧客を増やさず、最初に作った顧客を
     * `200 OK` で返す。
     * 
     * 窓口の二重クリックや、応答を取りこぼした呼び出し側のリトライで同姓
     * 同名の顧客が並ぶのを止めるために要る。鍵から顧客 ID を導くので、
     * 応答を見ていない呼び出し側でも同じ顧客に辿り着ける。
     * @type {string}
     * @memberof CreateConsumerCustomerRequest
     */
    idempotencyKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateConsumerCustomerRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateConsumerCustomerRequest
     */
    nameKana?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateConsumerCustomerRequest
     */
    phone?: string | null;
    /**
     * 語彙はテナントが決める。16 文字まで (PLT-4040)。
     * @type {string}
     * @memberof CreateConsumerCustomerRequest
     */
    sex?: string | null;
}
/**
 * 
 * @export
 * @interface CreateCustomFieldDefinitionRequest
 */
export interface CreateCustomFieldDefinitionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateCustomFieldDefinitionRequest
     */
    entityType: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomFieldDefinitionRequest
     */
    fieldKey: string;
    /**
     * 
     * @type {CreatableCustomFieldTypeWire}
     * @memberof CreateCustomFieldDefinitionRequest
     */
    fieldType: CreatableCustomFieldTypeWire;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomFieldDefinitionRequest
     */
    label: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateCustomFieldDefinitionRequest
     */
    options?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomFieldDefinitionRequest
     */
    placeholder?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateCustomFieldDefinitionRequest
     */
    required?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CreateCustomFieldDefinitionRequest
     */
    sortOrder?: number | null;
}


/**
 * 
 * @export
 * @interface CreateCustomerClientAffiliationRequest
 */
export interface CreateCustomerClientAffiliationRequest {
    /**
     * 
     * @type {boolean}
     * @memberof CreateCustomerClientAffiliationRequest
     */
    billingAllowed?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerClientAffiliationRequest
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerClientAffiliationRequest
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerClientAffiliationRequest
     */
    relationshipType: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateCustomerClientAffiliationRequest
     */
    validFrom: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateCustomerClientAffiliationRequest
     */
    validTo?: Date | null;
}
/**
 * 
 * @export
 * @interface CreateCustomerContactRequest
 */
export interface CreateCustomerContactRequest {
    /**
     * phone / email / visit / chat / sms / letter / other
     * @type {string}
     * @memberof CreateCustomerContactRequest
     */
    channel: string;
    /**
     * outbound / inbound
     * @type {string}
     * @memberof CreateCustomerContactRequest
     */
    direction: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateCustomerContactRequest
     */
    nextActionAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerContactRequest
     */
    note?: string | null;
    /**
     * 実際に接触した時刻。省略時はサーバの現在時刻。
     * @type {Date}
     * @memberof CreateCustomerContactRequest
     */
    occurredAt?: Date | null;
    /**
     * connected / no_answer / left_message / refused / callback_requested /
     * undeliverable / other。かけた時点で分からなければ省略してよく、あとで
     * `PATCH` で足せる。
     * @type {string}
     * @memberof CreateCustomerContactRequest
     */
    outcome?: string | null;
    /**
     * 実施した担当。省略時は呼び出した利用者。
     * @type {string}
     * @memberof CreateCustomerContactRequest
     */
    performedBy?: string | null;
}
/**
 * 
 * @export
 * @interface CreateCustomerCredentialRequest
 */
export interface CreateCustomerCredentialRequest {
    /**
     * YYYY-MM-DD
     * @type {string}
     * @memberof CreateCustomerCredentialRequest
     */
    expiresOn?: string | null;
    /**
     * YYYY-MM-DD
     * @type {string}
     * @memberof CreateCustomerCredentialRequest
     */
    issuedOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerCredentialRequest
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerCredentialRequest
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerCredentialRequest
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerCredentialRequest
     */
    subjectId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateCustomerCredentialRequest
     */
    verified?: boolean | null;
}
/**
 * 
 * @export
 * @interface CreateCustomerRequest
 */
export interface CreateCustomerRequest {
    /**
     * 
     * @type {CustomerAddressRequest}
     * @memberof CreateCustomerRequest
     */
    address?: CustomerAddressRequest | null;
    /**
     * Optional: customers taken by phone or at the counter often have
     * no email address.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    name: string;
    /**
     * Name reading in kana. Searched together with `name`.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    nameKana?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    phone?: string | null;
}
/**
 * 
 * @export
 * @interface CreateCustomerSubjectRequest
 */
export interface CreateCustomerSubjectRequest {
    /**
     * YYYY-MM-DD
     * @type {string}
     * @memberof CreateCustomerSubjectRequest
     */
    birthDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerSubjectRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerSubjectRequest
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerSubjectRequest
     */
    sex?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerSubjectRequest
     */
    subjectType: string;
}
/**
 * 
 * @export
 * @interface CreateDealRequest
 */
export interface CreateDealRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateDealRequest
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof CreateDealRequest
     */
    clientId: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateDealRequest
     */
    expectedCloseOn?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CreateDealRequest
     */
    memo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateDealRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateDealRequest
     */
    ownerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateDealRequest
     */
    pipeline: string;
    /**
     * 
     * @type {string}
     * @memberof CreateDealRequest
     */
    stage: string;
}
/**
 * 
 * @export
 * @interface CreateExpenseRequest
 */
export interface CreateExpenseRequest {
    /**
     * 
     * @type {number}
     * @memberof CreateExpenseRequest
     */
    amount: number;
    /**
     * 
     * @type {Array<ExpenseAttachment>}
     * @memberof CreateExpenseRequest
     */
    attachments?: Array<ExpenseAttachment> | null;
    /**
     * 
     * @type {string}
     * @memberof CreateExpenseRequest
     */
    categoryId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateExpenseRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateExpenseRequest
     */
    expenseDate: string;
    /**
     * 
     * @type {Array<ExpenseExternalRef>}
     * @memberof CreateExpenseRequest
     */
    externalRefs?: Array<ExpenseExternalRef> | null;
    /**
     * 
     * @type {string}
     * @memberof CreateExpenseRequest
     */
    memo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateExpenseRequest
     */
    payee: string;
    /**
     * 
     * @type {string}
     * @memberof CreateExpenseRequest
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateExpenseRequest
     */
    taxAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateExpenseRequest
     */
    taxCategory?: string | null;
}
/**
 * 
 * @export
 * @interface CreateHandoffNoteRequest
 */
export interface CreateHandoffNoteRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateHandoffNoteRequest
     */
    body: string;
    /**
     * Free label the tenant chooses. Defaults to `general`.
     * @type {string}
     * @memberof CreateHandoffNoteRequest
     */
    category?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateHandoffNoteRequest
     */
    subjectId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateHandoffNoteRequest
     */
    subjectType: string;
}
/**
 * 
 * @export
 * @interface CreateInvoiceLineItemRequest
 */
export interface CreateInvoiceLineItemRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceLineItemRequest
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof CreateInvoiceLineItemRequest
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceLineItemRequest
     */
    taxCategory?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateInvoiceLineItemRequest
     */
    unitPrice: number;
}
/**
 * 
 * @export
 * @interface CreateInvoiceRequest
 */
export interface CreateInvoiceRequest {
    /**
     * 
     * @type {InvoiceBillToRequest}
     * @memberof CreateInvoiceRequest
     */
    billTo?: InvoiceBillToRequest | null;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    clientEmail?: string | null;
    /**
     * Legacy untyped counterparty. Existing callers may continue sending this
     * without `billTo`; new callers should send typed `billTo` instead.
     * At least one of `clientId` or `billTo` is required.
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    clientId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    clientName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    clientPhone?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateInvoiceRequest
     */
    createPaymentLink?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    dueDate: string;
    /**
     * Retry key. When invoice_number is omitted this is mapped to the existing
     * tenant + invoice_number unique key, so a lost response can be retried.
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    idempotencyKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    invoiceNumber?: string | null;
    /**
     * 
     * @type {Array<CreateInvoiceLineItemRequest>}
     * @memberof CreateInvoiceRequest
     */
    lineItems: Array<CreateInvoiceLineItemRequest>;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    paymentLinkProvider?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateInvoiceRequest
     */
    sendEmail?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateInvoiceRequest
     */
    sendSms?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    smsMessage?: string | null;
    /**
     * Records this invoice is raised from. Optional and additive: an existing
     * caller that omits it creates an invoice with no declared origin,
     * exactly as before.
     * @type {Array<InvoiceSourceRequest>}
     * @memberof CreateInvoiceRequest
     */
    sources?: Array<InvoiceSourceRequest> | null;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateInvoiceRequest
     */
    taxAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    taxCategory?: string | null;
}
/**
 * 
 * @export
 * @interface CreateMembershipConsentItemRequest
 */
export interface CreateMembershipConsentItemRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateMembershipConsentItemRequest
     */
    body?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateMembershipConsentItemRequest
     */
    consentKey: string;
    /**
     * 
     * @type {string}
     * @memberof CreateMembershipConsentItemRequest
     */
    label: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateMembershipConsentItemRequest
     */
    required?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CreateMembershipConsentItemRequest
     */
    sortOrder?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateMembershipConsentItemRequest
     */
    termsVersion?: string | null;
}
/**
 * 
 * @export
 * @interface CreateMembershipEntitlementRequest
 */
export interface CreateMembershipEntitlementRequest {
    /**
     * `membership_plans.id` of the class the buyer joins.
     * @type {string}
     * @memberof CreateMembershipEntitlementRequest
     */
    membershipPlanId: string;
    /**
     * `order_products.id` of the product that grants the membership.
     * @type {string}
     * @memberof CreateMembershipEntitlementRequest
     */
    productId: string;
    /**
     * 
     * @type {number}
     * @memberof CreateMembershipEntitlementRequest
     */
    validDays?: number | null;
}
/**
 * 
 * @export
 * @interface CreateMembershipPlanRequest
 */
export interface CreateMembershipPlanRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateMembershipPlanRequest
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateMembershipPlanRequest
     */
    feeJpy?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateMembershipPlanRequest
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof CreateMembershipPlanRequest
     */
    sortOrder?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateMembershipPlanRequest
     */
    validDays?: number | null;
}
/**
 * 
 * @export
 * @interface CreateOrderClientAddressRequest
 */
export interface CreateOrderClientAddressRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateOrderClientAddressRequest
     */
    address1: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderClientAddressRequest
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderClientAddressRequest
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderClientAddressRequest
     */
    postalCode: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderClientAddressRequest
     */
    state: string;
}
/**
 * 
 * @export
 * @interface CreateOrderEntryPointRequest
 */
export interface CreateOrderEntryPointRequest {
    /**
     * 
     * @type {number}
     * @memberof CreateOrderEntryPointRequest
     */
    idleTimeoutSecs?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateOrderEntryPointRequest
     */
    idleWarningSecs?: number | null;
    /**
     * `qr`, `kiosk`, or `staff`.
     * @type {string}
     * @memberof CreateOrderEntryPointRequest
     */
    mode: string;
    /**
     * 
     * @type {number}
     * @memberof CreateOrderEntryPointRequest
     */
    sessionTtlSecs?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderEntryPointRequest
     */
    storeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderEntryPointRequest
     */
    storeName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderEntryPointRequest
     */
    tableName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderEntryPointRequest
     */
    tableNumber?: string | null;
}
/**
 * 
 * @export
 * @interface CreateOrderItemRequest
 */
export interface CreateOrderItemRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateOrderItemRequest
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof CreateOrderItemRequest
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderItemRequest
     */
    sku?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateOrderItemRequest
     */
    unitPrice: number;
}
/**
 * 
 * @export
 * @interface CreateOrderProductRequest
 */
export interface CreateOrderProductRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    billingCycle: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    category?: string | null;
    /**
     * Storefront category (`cat_…`, from `GET /v1/storekit/categories`).
     * 
     * Distinct from `category`, which is the ERP-side free-text classification
     * and has no storefront meaning.
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    categoryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    id?: string | null;
    /**
     * Optional client-supplied key to make creation idempotent across retries.
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    idempotencyKey?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateOrderProductRequest
     */
    imageStorageKeys?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    janCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    kind: string;
    /**
     * 
     * @type {number}
     * @memberof CreateOrderProductRequest
     */
    listPrice: number;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    name: string;
    /**
     * 選択肢 (トッピング等)。省略は「選択肢の話をしていない」。
     * @type {Array<OrderProductOptionGroupRequest>}
     * @memberof CreateOrderProductRequest
     */
    optionGroups?: Array<OrderProductOptionGroupRequest> | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    publicationDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    publicationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    publicationStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    skuCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    subcategory?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateOrderProductRequest
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderProductRequest
     */
    upcCode?: string | null;
    /**
     * 
     * @type {Array<OrderProductVariationRequest>}
     * @memberof CreateOrderProductRequest
     */
    variations?: Array<OrderProductVariationRequest> | null;
}
/**
 * 
 * @export
 * @interface CreateOrderRequest
 */
export interface CreateOrderRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequest
     */
    clientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequest
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequest
     */
    clientName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {Array<CreateOrderItemRequest>}
     * @memberof CreateOrderRequest
     */
    items: Array<CreateOrderItemRequest>;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequest
     */
    orderNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequest
     */
    source?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequest
     */
    squareOrderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequest
     */
    squarePaymentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequest
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateOrderRequest
     */
    taxAmount?: number | null;
}
/**
 * 
 * @export
 * @interface CreatePaymentLinkRequest
 */
export interface CreatePaymentLinkRequest {
    /**
     * 
     * @type {number}
     * @memberof CreatePaymentLinkRequest
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentLinkRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentLinkRequest
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentLinkRequest
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentLinkRequest
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentLinkRequest
     */
    smsMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentLinkRequest
     */
    successUrl?: string | null;
}
/**
 * 
 * @export
 * @interface CreatePaymentLinkResponse
 */
export interface CreatePaymentLinkResponse {
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentLinkResponse
     */
    paymentLinkId: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentLinkResponse
     */
    paymentUrl: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentLinkResponse
     */
    provider: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentLinkResponse
     */
    referenceId: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentLinkResponse
     */
    smsError?: string | null;
    /**
     * 
     * @type {SmsStatus}
     * @memberof CreatePaymentLinkResponse
     */
    smsStatus: SmsStatus;
}


/**
 * 
 * @export
 * @interface CreatePurchaseOrderItemRequest
 */
export interface CreatePurchaseOrderItemRequest {
    /**
     * 
     * @type {string}
     * @memberof CreatePurchaseOrderItemRequest
     */
    description: string;
    /**
     * Positive quantity within the portable JSON integer range.
     * @type {number}
     * @memberof CreatePurchaseOrderItemRequest
     */
    quantity: number;
    /**
     * Manual tax in currency minor units. Taxable categories use this value
     * when supplied; otherwise the server calculates and rounds down.
     * Zero-rate categories only accept zero.
     * @type {number}
     * @memberof CreatePurchaseOrderItemRequest
     */
    taxAmount?: number | null;
    /**
     * Item tax category; inherits the order category when omitted.
     * @type {string}
     * @memberof CreatePurchaseOrderItemRequest
     */
    taxCategory?: string | null;
    /**
     * Unit cost in currency minor units.
     * @type {number}
     * @memberof CreatePurchaseOrderItemRequest
     */
    unitCost: number;
}
/**
 * 
 * @export
 * @interface CreatePurchaseOrderRequest
 */
export interface CreatePurchaseOrderRequest {
    /**
     * 
     * @type {string}
     * @memberof CreatePurchaseOrderRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreatePurchaseOrderRequest
     */
    expectedDeliveryDate?: string | null;
    /**
     * 
     * @type {Array<CreatePurchaseOrderItemRequest>}
     * @memberof CreatePurchaseOrderRequest
     */
    items: Array<CreatePurchaseOrderItemRequest>;
    /**
     * 
     * @type {string}
     * @memberof CreatePurchaseOrderRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreatePurchaseOrderRequest
     */
    purchaseOrderNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreatePurchaseOrderRequest
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreatePurchaseOrderRequest
     */
    taxCategory?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreatePurchaseOrderRequest
     */
    vendorId: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePurchaseOrderRequest
     */
    vendorName?: string | null;
}
/**
 * 
 * @export
 * @interface CreateQuotationItemRequest
 */
export interface CreateQuotationItemRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateQuotationItemRequest
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof CreateQuotationItemRequest
     */
    discountAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateQuotationItemRequest
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof CreateQuotationItemRequest
     */
    unitPrice: number;
}
/**
 * 
 * @export
 * @interface CreateQuotationRequest
 */
export interface CreateQuotationRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateQuotationRequest
     */
    clientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateQuotationRequest
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateQuotationRequest
     */
    clientName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateQuotationRequest
     */
    createPaymentLink?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CreateQuotationRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {Array<CreateQuotationItemRequest>}
     * @memberof CreateQuotationRequest
     */
    items: Array<CreateQuotationItemRequest>;
    /**
     * 
     * @type {string}
     * @memberof CreateQuotationRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateQuotationRequest
     */
    quotationNumber?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateQuotationRequest
     */
    sendEmail?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CreateQuotationRequest
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateQuotationRequest
     */
    taxAmount?: number | null;
    /**
     * Omitted by clients that let the server pick the default validity
     * (30 days from today), so operators cannot skew it via device clock.
     * @type {string}
     * @memberof CreateQuotationRequest
     */
    validUntil?: string | null;
}
/**
 * 
 * @export
 * @interface CreateReservationRequest
 */
export interface CreateReservationRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateReservationRequest
     */
    assignedStaffIds?: Array<string> | null;
    /**
     * 
     * @type {ReservationBillToRequest}
     * @memberof CreateReservationRequest
     */
    billTo?: ReservationBillToRequest | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    cancelUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {any}
     * @memberof CreateReservationRequest
     */
    customFields?: any | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    customerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    customerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    customerPhone?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateReservationRequest
     */
    depositAmount?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateReservationRequest
     */
    endsAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    idempotencyKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    prepaymentPolicy?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateReservationRequest
     */
    priceAmount?: number | null;
    /**
     * Number of people or subjects; one reservation still consumes one inventory group.
     * @type {number}
     * @memberof CreateReservationRequest
     */
    quantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    reservationTypeId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    resourceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    serviceId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateReservationRequest
     */
    startsAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    storeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    successUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationRequest
     */
    timezone?: string | null;
}
/**
 * 
 * @export
 * @interface CreateReservationResourceRequest
 */
export interface CreateReservationResourceRequest {
    /**
     * 
     * @type {boolean}
     * @memberof CreateReservationResourceRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof CreateReservationResourceRequest
     */
    customFieldsJson?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreateReservationResourceRequest
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationResourceRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationResourceRequest
     */
    resourceModel?: string | null;
    /**
     * 
     * @type {ReservationResourceType}
     * @memberof CreateReservationResourceRequest
     */
    resourceType: ReservationResourceType;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationResourceRequest
     */
    storeId?: string | null;
}


/**
 * 
 * @export
 * @interface CreateReservationResponse
 */
export interface CreateReservationResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateReservationResponse
     */
    checkoutUrl?: string | null;
    /**
     * 
     * @type {PaymentIntent}
     * @memberof CreateReservationResponse
     */
    paymentIntent: PaymentIntent;
    /**
     * 
     * @type {Reservation}
     * @memberof CreateReservationResponse
     */
    reservation: Reservation;
}
/**
 * 
 * @export
 * @interface CreateReservationTypeRequest
 */
export interface CreateReservationTypeRequest {
    /**
     * 
     * @type {boolean}
     * @memberof CreateReservationTypeRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof CreateReservationTypeRequest
     */
    cancellationPolicyJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationTypeRequest
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationTypeRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationTypeRequest
     */
    name: string;
    /**
     * 
     * @type {any}
     * @memberof CreateReservationTypeRequest
     */
    paymentPolicyJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationTypeRequest
     */
    resourceModel?: string | null;
}
/**
 * 
 * @export
 * @interface CreateReservationWaitlistEntryRequest
 */
export interface CreateReservationWaitlistEntryRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    customerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    customerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    customerPhone?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    desiredEndsAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    desiredStartsAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    notes?: string | null;
    /**
     * Party size. Defaults to 1.
     * @type {number}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    quantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    reservationTypeId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    resourceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    serviceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReservationWaitlistEntryRequest
     */
    storeId?: string | null;
}
/**
 * 
 * @export
 * @interface CreateReturnLineRequest
 */
export interface CreateReturnLineRequest {
    /**
     * 
     * @type {number}
     * @memberof CreateReturnLineRequest
     */
    purchasedQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof CreateReturnLineRequest
     */
    requestedQuantity: number;
    /**
     * 
     * @type {string}
     * @memberof CreateReturnLineRequest
     */
    sku?: string | null;
    /**
     * 
     * @type {ReturnLineRefRequest}
     * @memberof CreateReturnLineRequest
     */
    sourceLine: ReturnLineRefRequest;
}
/**
 * 
 * @export
 * @interface CreateReturnRequest
 */
export interface CreateReturnRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateReturnRequest
     */
    customerNote?: string | null;
    /**
     * 
     * @type {Array<CreateReturnLineRequest>}
     * @memberof CreateReturnRequest
     */
    lines: Array<CreateReturnLineRequest>;
    /**
     * 
     * @type {ReturnOrderRefRequest}
     * @memberof CreateReturnRequest
     */
    orderRef: ReturnOrderRefRequest;
    /**
     * 
     * @type {string}
     * @memberof CreateReturnRequest
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof CreateReturnRequest
     */
    returnDueAt?: string | null;
}
/**
 * 
 * @export
 * @interface CreateSaasChangeRequestRequest
 */
export interface CreateSaasChangeRequestRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSaasChangeRequestRequest
     */
    approver: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasChangeRequestRequest
     */
    changeType: string;
    /**
     * 
     * @type {number}
     * @memberof CreateSaasChangeRequestRequest
     */
    estimatedDeltaYen: number;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasChangeRequestRequest
     */
    fromPlan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasChangeRequestRequest
     */
    reason: string;
    /**
     * Requested post-change seat count. Required (and must be positive) only
     * when `changeType` is `seat_change` (#717); ignored otherwise.
     * @type {number}
     * @memberof CreateSaasChangeRequestRequest
     */
    requestedSeats?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasChangeRequestRequest
     */
    requester?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasChangeRequestRequest
     */
    serviceName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasChangeRequestRequest
     */
    state?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasChangeRequestRequest
     */
    subscriptionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasChangeRequestRequest
     */
    toPlan?: string | null;
}
/**
 * 
 * @export
 * @interface CreateSaasSubscriptionRequest
 */
export interface CreateSaasSubscriptionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSaasSubscriptionRequest
     */
    approvalState?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasSubscriptionRequest
     */
    billingCycle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasSubscriptionRequest
     */
    currentPlan: string;
    /**
     * 
     * @type {number}
     * @memberof CreateSaasSubscriptionRequest
     */
    monthlyAmountYen: number;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasSubscriptionRequest
     */
    nextPlan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasSubscriptionRequest
     */
    ownerTeam: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasSubscriptionRequest
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasSubscriptionRequest
     */
    renewalDate: string;
    /**
     * 
     * @type {number}
     * @memberof CreateSaasSubscriptionRequest
     */
    seats: number;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasSubscriptionRequest
     */
    serviceName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSaasSubscriptionRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface CreateSalesTaskRequest
 */
export interface CreateSalesTaskRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSalesTaskRequest
     */
    assignee?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSalesTaskRequest
     */
    clientId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSalesTaskRequest
     */
    dealId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateSalesTaskRequest
     */
    dueAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSalesTaskRequest
     */
    title: string;
}
/**
 * 
 * @export
 * @interface CreateScheduleRequest
 */
export interface CreateScheduleRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateScheduleRequest
     */
    clientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateScheduleRequest
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateScheduleRequest
     */
    clientName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateScheduleRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateScheduleRequest
     */
    dueInDays?: number | null;
    /**
     * monthly / quarterly / yearly
     * @type {string}
     * @memberof CreateScheduleRequest
     */
    frequency: string;
    /**
     * 
     * @type {string}
     * @memberof CreateScheduleRequest
     */
    invoiceNumberPrefix: string;
    /**
     * 
     * @type {Array<ScheduleLineItemRequest>}
     * @memberof CreateScheduleRequest
     */
    lineItems: Array<ScheduleLineItemRequest>;
    /**
     * 
     * @type {string}
     * @memberof CreateScheduleRequest
     */
    name: string;
    /**
     * YYYY-MM-DD of the first issue.
     * @type {string}
     * @memberof CreateScheduleRequest
     */
    nextIssueDate: string;
    /**
     * 
     * @type {string}
     * @memberof CreateScheduleRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateScheduleRequest
     */
    taxCategory?: string | null;
}
/**
 * 
 * @export
 * @interface CreateSigningRequestInput
 */
export interface CreateSigningRequestInput {
    /**
     * 
     * @type {Date}
     * @memberof CreateSigningRequestInput
     */
    expiresAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSigningRequestInput
     */
    issuerName: string;
    /**
     * 
     * @type {CreateSigningSignerInput}
     * @memberof CreateSigningRequestInput
     */
    signer: CreateSigningSignerInput;
}
/**
 * 
 * @export
 * @interface CreateSigningSignerInput
 */
export interface CreateSigningSignerInput {
    /**
     * 
     * @type {string}
     * @memberof CreateSigningSignerInput
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSigningSignerInput
     */
    name: string;
}
/**
 * 
 * @export
 * @interface CreateStaffLeaveRequestRequest
 */
export interface CreateStaffLeaveRequestRequest {
    /**
     * 
     * @type {Date}
     * @memberof CreateStaffLeaveRequestRequest
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateStaffLeaveRequestRequest
     */
    reason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateStaffLeaveRequestRequest
     */
    requestType?: string | null;
}
/**
 * 
 * @export
 * @interface CreateStockOutboundRequest
 */
export interface CreateStockOutboundRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateStockOutboundRequest
     */
    operatorId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateStockOutboundRequest
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof CreateStockOutboundRequest
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateStockOutboundRequest
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateStockOutboundRequest
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof CreateStockOutboundRequest
     */
    warehouseId?: string | null;
}
/**
 * 
 * @export
 * @interface CreateStockOutboundResponse
 */
export interface CreateStockOutboundResponse {
    /**
     * 
     * @type {Array<StockLotAllocationResponse>}
     * @memberof CreateStockOutboundResponse
     */
    allocations: Array<StockLotAllocationResponse>;
    /**
     * 
     * @type {number}
     * @memberof CreateStockOutboundResponse
     */
    cogsAmount: number;
    /**
     * 
     * @type {string}
     * @memberof CreateStockOutboundResponse
     */
    journalEntryId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateStockOutboundResponse
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof CreateStockOutboundResponse
     */
    quantityOnHand: number;
    /**
     * 
     * @type {string}
     * @memberof CreateStockOutboundResponse
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof CreateStockOutboundResponse
     */
    warehouseId: string;
}
/**
 * 
 * @export
 * @interface CreateStockTransferRequest
 */
export interface CreateStockTransferRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateStockTransferRequest
     */
    fromLocationId: string;
    /**
     * 
     * @type {number}
     * @memberof CreateStockTransferRequest
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof CreateStockTransferRequest
     */
    reason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateStockTransferRequest
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof CreateStockTransferRequest
     */
    toLocationId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateStockTransferRequest
     */
    transferredAt?: string | null;
}
/**
 * 
 * @export
 * @interface CreateStripeConnectOnboardingLinkRequest
 */
export interface CreateStripeConnectOnboardingLinkRequest {
    /**
     * Stripe sends the user here if the link expires before they finish.
     * @type {string}
     * @memberof CreateStripeConnectOnboardingLinkRequest
     */
    refreshUrl: string;
    /**
     * Stripe sends the user here when onboarding finishes.
     * @type {string}
     * @memberof CreateStripeConnectOnboardingLinkRequest
     */
    returnUrl: string;
}
/**
 * 
 * @export
 * @interface CreateVendorRequest
 */
export interface CreateVendorRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateVendorRequest
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateVendorRequest
     */
    contactEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateVendorRequest
     */
    contactName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateVendorRequest
     */
    contactPhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateVendorRequest
     */
    defaultTaxCategory?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateVendorRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateVendorRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateVendorRequest
     */
    paymentTerms?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateVendorRequest
     */
    qualifiedInvoiceIssuerNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateVendorRequest
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateVendorRequest
     */
    taxRegistrationName?: string | null;
}
/**
 * 
 * @export
 * @interface CreateWebhookEndpointRequest
 */
export interface CreateWebhookEndpointRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateWebhookEndpointRequest
     */
    description?: string | null;
    /**
     * 省略時は購読可能な全 event type。
     * @type {Array<string>}
     * @memberof CreateWebhookEndpointRequest
     */
    eventTypes?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof CreateWebhookEndpointRequest
     */
    url: string;
}
/**
 * 
 * @export
 * @interface CreatedEntityResponse
 */
export interface CreatedEntityResponse {
    /**
     * 
     * @type {string}
     * @memberof CreatedEntityResponse
     */
    id: string;
}
/**
 * 通貨ごとの金額。1テナントに複数通貨が混ざりうるので合算しない。
 * @export
 * @interface CurrencyTotalsResponse
 */
export interface CurrencyTotalsResponse {
    /**
     * ISO 4217。`reservations.currency` の値。
     * @type {string}
     * @memberof CurrencyTotalsResponse
     */
    currency: string;
    /**
     * この通貨での初回購入日（Asia/Tokyo）。
     * @type {string}
     * @memberof CurrencyTotalsResponse
     */
    firstPurchaseDate?: string | null;
    /**
     * この通貨での最終購入日（Asia/Tokyo）。
     * @type {string}
     * @memberof CurrencyTotalsResponse
     */
    lastPurchaseDate?: string | null;
    /**
     * うち回収済み。`total_amount - paid_amount` が未収。
     * @type {number}
     * @memberof CurrencyTotalsResponse
     */
    paidAmount: number;
    /**
     * この通貨での購入回数。
     * @type {number}
     * @memberof CurrencyTotalsResponse
     */
    purchaseCount: number;
    /**
     * 累計購入額。税込。金額未確定（0）の予約もそのまま 0 として入る。
     * @type {number}
     * @memberof CurrencyTotalsResponse
     */
    totalAmount: number;
    /**
     * この通貨での購入のうち、金額が未確定（0）のもの。
     * @type {number}
     * @memberof CurrencyTotalsResponse
     */
    unpricedCount: number;
}
/**
 * 
 * @export
 * @interface CustomFieldDefinitionListResponse
 */
export interface CustomFieldDefinitionListResponse {
    /**
     * 
     * @type {Array<CustomFieldDefinitionResponse>}
     * @memberof CustomFieldDefinitionListResponse
     */
    items: Array<CustomFieldDefinitionResponse>;
}
/**
 * 
 * @export
 * @interface CustomFieldDefinitionResponse
 */
export interface CustomFieldDefinitionResponse {
    /**
     * 
     * @type {boolean}
     * @memberof CustomFieldDefinitionResponse
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldDefinitionResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldDefinitionResponse
     */
    entityType: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldDefinitionResponse
     */
    fieldKey: string;
    /**
     * Known values: text, email, tel, number, date, select, boolean. Clients must accept future custom field types.
     * @type {string}
     * @memberof CustomFieldDefinitionResponse
     */
    fieldType: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldDefinitionResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldDefinitionResponse
     */
    label: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CustomFieldDefinitionResponse
     */
    options?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldDefinitionResponse
     */
    placeholder?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomFieldDefinitionResponse
     */
    required: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomFieldDefinitionResponse
     */
    sortOrder: number;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldDefinitionResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldDefinitionResponse
     */
    updatedAt: string;
}

/**
 * 
 * @export
 */
export const CustomFieldEntityType = {
    Client: 'Client',
    Consumer: 'Consumer',
    Product: 'Product',
    Order: 'Order',
    Invoice: 'Invoice',
    Reservation: 'Reservation',
    CustomerSubject: 'CustomerSubject'
} as const;
export type CustomFieldEntityType = typeof CustomFieldEntityType[keyof typeof CustomFieldEntityType];

/**
 * 
 * @export
 * @interface CustomFieldValuesResponse
 */
export interface CustomFieldValuesResponse {
    /**
     * 
     * @type {string}
     * @memberof CustomFieldValuesResponse
     */
    entityId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldValuesResponse
     */
    entityType: string;
    /**
     * Map of fieldKey to stored JSON value.
     * @type {object}
     * @memberof CustomFieldValuesResponse
     */
    values: object;
}
/**
 * 
 * @export
 * @interface CustomerAddressRequest
 */
export interface CustomerAddressRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressRequest
     */
    address1: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressRequest
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressRequest
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressRequest
     */
    postalCode: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressRequest
     */
    state: string;
}
/**
 * 
 * @export
 * @interface CustomerClientAffiliation
 */
export interface CustomerClientAffiliation {
    /**
     * 
     * @type {boolean}
     * @memberof CustomerClientAffiliation
     */
    billingAllowed: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerClientAffiliation
     */
    clientId: string;
    /**
     * 
     * @type {Date}
     * @memberof CustomerClientAffiliation
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CustomerClientAffiliation
     */
    createdBy: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerClientAffiliation
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerClientAffiliation
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerClientAffiliation
     */
    relationshipType: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerClientAffiliation
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof CustomerClientAffiliation
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CustomerClientAffiliation
     */
    updatedBy: string;
    /**
     * 
     * @type {Date}
     * @memberof CustomerClientAffiliation
     */
    validFrom: Date;
    /**
     * 
     * @type {Date}
     * @memberof CustomerClientAffiliation
     */
    validTo?: Date | null;
}
/**
 * 
 * @export
 * @interface CustomerClientAffiliationListResponse
 */
export interface CustomerClientAffiliationListResponse {
    /**
     * 
     * @type {Array<CustomerClientAffiliation>}
     * @memberof CustomerClientAffiliationListResponse
     */
    items: Array<CustomerClientAffiliation>;
}
/**
 * 
 * @export
 * @interface CustomerConsentResponse
 */
export interface CustomerConsentResponse {
    /**
     * 
     * @type {boolean}
     * @memberof CustomerConsentResponse
     */
    accepted: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerConsentResponse
     */
    acceptedAt: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerConsentResponse
     */
    channel: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerConsentResponse
     */
    consentKey: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerConsentResponse
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerConsentResponse
     */
    evidenceRecordId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerConsentResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerConsentResponse
     */
    recordedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerConsentResponse
     */
    termsVersion: string;
}
/**
 * 
 * @export
 * @interface CustomerContactListResponse
 */
export interface CustomerContactListResponse {
    /**
     * 
     * @type {Array<CustomerContactResponse>}
     * @memberof CustomerContactListResponse
     */
    items: Array<CustomerContactResponse>;
    /**
     * 
     * @type {number}
     * @memberof CustomerContactListResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerContactListResponse
     */
    offset: number;
    /**
     * 絞り込んだ結果の総件数。返した `items` の数ではない。
     * @type {number}
     * @memberof CustomerContactListResponse
     */
    total: number;
}
/**
 * 
 * @export
 * @interface CustomerContactResponse
 */
export interface CustomerContactResponse {
    /**
     * 取り消されていなければ `null`。行は消えないので、監査では
     * `includeCancelled=true` で読み戻せる。
     * @type {Date}
     * @memberof CustomerContactResponse
     */
    cancelledAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContactResponse
     */
    cancelledBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContactResponse
     */
    channel: string;
    /**
     * 
     * @type {Date}
     * @memberof CustomerContactResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CustomerContactResponse
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerContactResponse
     */
    direction: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerContactResponse
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof CustomerContactResponse
     */
    nextActionAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContactResponse
     */
    note?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerContactResponse
     */
    occurredAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CustomerContactResponse
     */
    outcome?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContactResponse
     */
    performedBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerContactResponse
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface CustomerCredentialResponse
 */
export interface CustomerCredentialResponse {
    /**
     * 
     * @type {boolean}
     * @memberof CustomerCredentialResponse
     */
    archived: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    expiresOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    issuedOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    subjectId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    verifiedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerCredentialResponse
     */
    verifiedBy?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerPurchaseSummaryListResponse
 */
export interface CustomerPurchaseSummaryListResponse {
    /**
     * この集計がいつ時点かを表す UTC 時刻。
     * @type {string}
     * @memberof CustomerPurchaseSummaryListResponse
     */
    computedAt: string;
    /**
     * このページの金額がどの通貨のものか。対象に予約が1件も無ければ `null`。
     * @type {string}
     * @memberof CustomerPurchaseSummaryListResponse
     */
    currency?: string | null;
    /**
     * 
     * @type {Array<CustomerPurchaseSummaryRowResponse>}
     * @memberof CustomerPurchaseSummaryListResponse
     */
    items: Array<CustomerPurchaseSummaryRowResponse>;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseSummaryListResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseSummaryListResponse
     */
    offset: number;
    /**
     * 
     * @type {SummaryPeriodResponse}
     * @memberof CustomerPurchaseSummaryListResponse
     */
    period: SummaryPeriodResponse;
    /**
     * 絞り込み後の顧客数。ページに載った件数ではない。
     * @type {number}
     * @memberof CustomerPurchaseSummaryListResponse
     */
    total: number;
}
/**
 * 
 * @export
 * @interface CustomerPurchaseSummaryResponse
 */
export interface CustomerPurchaseSummaryResponse {
    /**
     * キャンセル（`cancelled` / `rejected`）。金額にも回数にも入れていない。
     * @type {number}
     * @memberof CustomerPurchaseSummaryResponse
     */
    cancelledCount: number;
    /**
     * この集計がいつ時点かを表す UTC 時刻。都度計算なので常に「今」で、
     * 「確定済みだが提供日がまだ来ていない」の判定基準もこの時刻。
     * @type {string}
     * @memberof CustomerPurchaseSummaryResponse
     */
    computedAt: string;
    /**
     * 通貨ごとの金額の内訳。購入が無ければ空。
     * @type {Array<CurrencyTotalsResponse>}
     * @memberof CustomerPurchaseSummaryResponse
     */
    currencies: Array<CurrencyTotalsResponse>;
    /**
     * 
     * @type {string}
     * @memberof CustomerPurchaseSummaryResponse
     */
    customerId: string;
    /**
     * 初回購入日（Asia/Tokyo）。購入が無ければ `null`。
     * @type {string}
     * @memberof CustomerPurchaseSummaryResponse
     */
    firstPurchaseDate?: string | null;
    /**
     * 最終購入日（Asia/Tokyo）。購入が無ければ `null`。
     * @type {string}
     * @memberof CustomerPurchaseSummaryResponse
     */
    lastPurchaseDate?: string | null;
    /**
     * no-show。金額にも回数にも入れていない。
     * @type {number}
     * @memberof CustomerPurchaseSummaryResponse
     */
    noShowCount: number;
    /**
     * まだ確定していない予約（申込中・支払待ち・変更/キャンセル申請中など）。
     * @type {number}
     * @memberof CustomerPurchaseSummaryResponse
     */
    pendingCount: number;
    /**
     * 
     * @type {SummaryPeriodResponse}
     * @memberof CustomerPurchaseSummaryResponse
     */
    period: SummaryPeriodResponse;
    /**
     * 購入回数（通貨をまたいだ合計）。
     * @type {number}
     * @memberof CustomerPurchaseSummaryResponse
     */
    purchaseCount: number;
    /**
     * 購入のうち金額が未確定（0）のもの。0 を足しただけの回数が分かる。
     * @type {number}
     * @memberof CustomerPurchaseSummaryResponse
     */
    unpricedCount: number;
    /**
     * 確定済みだが提供日がまだ来ていない予約。購入には数えていない。
     * @type {number}
     * @memberof CustomerPurchaseSummaryResponse
     */
    upcomingCount: number;
}
/**
 * 
 * @export
 * @interface CustomerPurchaseSummaryRowResponse
 */
export interface CustomerPurchaseSummaryRowResponse {
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    cancelledCount: number;
    /**
     * 
     * @type {string}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    firstPurchaseDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    lastPurchaseDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    noShowCount: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    paidAmount: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    pendingCount: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    purchaseCount: number;
    /**
     * 累計購入額。税込。
     * @type {number}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    totalAmount: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    unpricedCount: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseSummaryRowResponse
     */
    upcomingCount: number;
}
/**
 * 
 * @export
 * @interface CustomerResponse
 */
export interface CustomerResponse {
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    description?: string | null;
    /**
     * Empty string when the customer has no email address.
     * @type {string}
     * @memberof CustomerResponse
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    nameKana?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    phone?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerSubjectResponse
 */
export interface CustomerSubjectResponse {
    /**
     * 
     * @type {boolean}
     * @memberof CustomerSubjectResponse
     */
    archived: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubjectResponse
     */
    birthDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubjectResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubjectResponse
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubjectResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubjectResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubjectResponse
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubjectResponse
     */
    sex?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubjectResponse
     */
    subjectType: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubjectResponse
     */
    updatedAt: string;
}
/**
 * 日別予算マスタ
 * @export
 * @interface DailyBudget
 */
export interface DailyBudget {
    /**
     * 
     * @type {Date}
     * @memberof DailyBudget
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof DailyBudget
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof DailyBudget
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof DailyBudget
     */
    golfCourseId: string;
    /**
     * 
     * @type {string}
     * @memberof DailyBudget
     */
    id: string;
    /**
     * 目標客単価（円）
     * @type {number}
     * @memberof DailyBudget
     */
    targetAverageSpend: number;
    /**
     * キャディ付き比率目標 0.0〜1.0
     * @type {number}
     * @memberof DailyBudget
     */
    targetCaddyAttachedRatio: number;
    /**
     * 目標売上（円）
     * @type {number}
     * @memberof DailyBudget
     */
    targetRevenue: number;
    /**
     * 
     * @type {string}
     * @memberof DailyBudget
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof DailyBudget
     */
    updatedAt: Date;
}
/**
 * 日単位の目標 vs 実績。目標は該当日の予算行を合算（コース横断）。
 * @export
 * @interface DailyBudgetAchievementItem
 */
export interface DailyBudgetAchievementItem {
    /**
     * 実績客単価 = 実績売上 / プレーヤー数（0 人のときは None）
     * @type {number}
     * @memberof DailyBudgetAchievementItem
     */
    actualAverageSpend?: number | null;
    /**
     * キャディ付き予約比率（予約 0 件のときは None）
     * @type {number}
     * @memberof DailyBudgetAchievementItem
     */
    actualCaddyAttachedRatio?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DailyBudgetAchievementItem
     */
    actualRevenue: number;
    /**
     * 
     * @type {Date}
     * @memberof DailyBudgetAchievementItem
     */
    date: Date;
    /**
     * 
     * @type {number}
     * @memberof DailyBudgetAchievementItem
     */
    playerCount: number;
    /**
     * 
     * @type {number}
     * @memberof DailyBudgetAchievementItem
     */
    reservationCount: number;
    /**
     * 実績売上 / 目標売上（目標 0 のときは None）
     * @type {number}
     * @memberof DailyBudgetAchievementItem
     */
    revenueAchievementRate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DailyBudgetAchievementItem
     */
    targetAverageSpend: number;
    /**
     * 
     * @type {number}
     * @memberof DailyBudgetAchievementItem
     */
    targetCaddyAttachedRatio: number;
    /**
     * 
     * @type {number}
     * @memberof DailyBudgetAchievementItem
     */
    targetRevenue: number;
}
/**
 * 
 * @export
 * @interface DailyBudgetAchievementResponse
 */
export interface DailyBudgetAchievementResponse {
    /**
     * 
     * @type {Array<DailyBudgetAchievementItem>}
     * @memberof DailyBudgetAchievementResponse
     */
    items: Array<DailyBudgetAchievementItem>;
}
/**
 * 
 * @export
 * @interface DailyBudgetListResponse
 */
export interface DailyBudgetListResponse {
    /**
     * 
     * @type {Array<DailyBudget>}
     * @memberof DailyBudgetListResponse
     */
    items: Array<DailyBudget>;
}
/**
 * 
 * @export
 * @interface DealListResponse
 */
export interface DealListResponse {
    /**
     * 
     * @type {Array<DealResponse>}
     * @memberof DealListResponse
     */
    items: Array<DealResponse>;
}
/**
 * 
 * @export
 * @interface DealResponse
 */
export interface DealResponse {
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    expectedCloseOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    memo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    ownerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    pipeline: string;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    providerPrimaryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    stage: string;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof DealResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface DecideSaasChangeRequestRequest
 */
export interface DecideSaasChangeRequestRequest {
    /**
     * 
     * @type {string}
     * @memberof DecideSaasChangeRequestRequest
     */
    note?: string | null;
}
/**
 * 
 * @export
 * @interface DecideStaffLeaveRequestRequest
 */
export interface DecideStaffLeaveRequestRequest {
    /**
     * 
     * @type {string}
     * @memberof DecideStaffLeaveRequestRequest
     */
    decidedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DecideStaffLeaveRequestRequest
     */
    decisionNote?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DecideStaffLeaveRequestRequest
     */
    status: string;
}
/**
 * 
 * @export
 * @interface DeleteInvoiceResponse
 */
export interface DeleteInvoiceResponse {
    /**
     * 
     * @type {boolean}
     * @memberof DeleteInvoiceResponse
     */
    deleted: boolean;
    /**
     * 
     * @type {string}
     * @memberof DeleteInvoiceResponse
     */
    id: string;
}
/**
 * 
 * @export
 * @interface DeleteOrderProductResponse
 */
export interface DeleteOrderProductResponse {
    /**
     * 
     * @type {string}
     * @memberof DeleteOrderProductResponse
     */
    id: string;
}
/**
 * 
 * @export
 * @interface DeletedResponse
 */
export interface DeletedResponse {
    /**
     * 
     * @type {boolean}
     * @memberof DeletedResponse
     */
    deleted: boolean;
    /**
     * 
     * @type {string}
     * @memberof DeletedResponse
     */
    id: string;
}
/**
 * 
 * @export
 * @interface DocumentPdfImage
 */
export interface DocumentPdfImage {
    /**
     * 
     * @type {string}
     * @memberof DocumentPdfImage
     */
    contentType: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentPdfImage
     */
    dataBase64: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentPdfImage
     */
    filename: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentPdfImage
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface DocumentPdfSettingsResponse
 */
export interface DocumentPdfSettingsResponse {
    /**
     * 
     * @type {string}
     * @memberof DocumentPdfSettingsResponse
     */
    defaultTemplate: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentPdfSettingsResponse
     */
    includeSealByDefault: boolean;
    /**
     * 
     * @type {DocumentPdfImage}
     * @memberof DocumentPdfSettingsResponse
     */
    logoImage?: DocumentPdfImage | null;
    /**
     * 
     * @type {DocumentPdfImage}
     * @memberof DocumentPdfSettingsResponse
     */
    sealImage?: DocumentPdfImage | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentPdfSettingsResponse
     */
    updatedAt?: string | null;
}

/**
 * Where a staff member stands with the employer, independent of industry.
 * 
 * This is not the same axis as a leave request: a leave request is one day off
 * with a decision on it, while `OnLeave` is a months-long absence the roster
 * has to plan around.
 * @export
 */
export const EmploymentStatus = {
    Active: 'active',
    OnLeave: 'on_leave',
    Retired: 'retired'
} as const;
export type EmploymentStatus = typeof EmploymentStatus[keyof typeof EmploymentStatus];


/**
 * 
 * @export
 */
export const EmploymentType = {
    FullTime: 'full_time',
    PartTime: 'part_time',
    Contract: 'contract'
} as const;
export type EmploymentType = typeof EmploymentType[keyof typeof EmploymentType];

/**
 * 
 * @export
 * @interface EnableExtensionRequest
 */
export interface EnableExtensionRequest {
    /**
     * 
     * @type {any}
     * @memberof EnableExtensionRequest
     */
    configJson?: any | null;
    /**
     * 
     * @type {number}
     * @memberof EnableExtensionRequest
     */
    enableOrder?: number | null;
    /**
     * 
     * @type {string}
     * @memberof EnableExtensionRequest
     */
    version?: string | null;
}
/**
 * 
 * @export
 * @interface ErpCustomPolicyResponse
 */
export interface ErpCustomPolicyResponse {
    /**
     * 
     * @type {string}
     * @memberof ErpCustomPolicyResponse
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ErpCustomPolicyResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ErpCustomPolicyResponse
     */
    name: string;
}

/**
 * 
 * @export
 */
export const ErpRole = {
    Admin: 'admin',
    Staff: 'staff',
    Viewer: 'viewer'
} as const;
export type ErpRole = typeof ErpRole[keyof typeof ErpRole];

/**
 * 
 * @export
 * @interface ErpUserListResponse
 */
export interface ErpUserListResponse {
    /**
     * 
     * @type {Array<ErpCustomPolicyResponse>}
     * @memberof ErpUserListResponse
     */
    customPolicies: Array<ErpCustomPolicyResponse>;
    /**
     * 
     * @type {Array<ErpUserResponse>}
     * @memberof ErpUserListResponse
     */
    users: Array<ErpUserResponse>;
}
/**
 * 
 * @export
 * @interface ErpUserResponse
 */
export interface ErpUserResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof ErpUserResponse
     */
    customPolicyIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ErpUserResponse
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ErpUserResponse
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof ErpUserResponse
     */
    isOwner: boolean;
    /**
     * 
     * @type {string}
     * @memberof ErpUserResponse
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ErpUserResponse
     */
    role?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ErpUserResponse
     */
    tenants: Array<string>;
}
/**
 * Common error response body for REST APIs
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * Error code (e.g., "BAD_REQUEST", "NOT_FOUND")
     * @type {string}
     * @memberof ErrorResponse
     */
    code: string;
    /**
     * Error message.
     * 
     * For 4xx this describes the client-side problem. For 500 it is always
     * "Internal server error": the underlying detail is withheld from the
     * response and recorded server-side instead, so clients must not parse it.
     * @type {string}
     * @memberof ErrorResponse
     */
    message: string;
    /**
     * Correlation ID for a server error. It matches the `x-request-id`
     * response header and the structured server-side error log.
     * @type {string}
     * @memberof ErrorResponse
     */
    requestId?: string | null;
}
/**
 * 
 * @export
 * @interface EvaluateFeatureFlagsRequest
 */
export interface EvaluateFeatureFlagsRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof EvaluateFeatureFlagsRequest
     */
    keys: Array<string>;
}
/**
 * 
 * @export
 * @interface EvaluateFeatureFlagsResponse
 */
export interface EvaluateFeatureFlagsResponse {
    /**
     * 
     * @type {Array<FeatureFlagValue>}
     * @memberof EvaluateFeatureFlagsResponse
     */
    values: Array<FeatureFlagValue>;
}
/**
 * 
 * @export
 * @interface ExpenseAttachment
 */
export interface ExpenseAttachment {
    /**
     * 
     * @type {string}
     * @memberof ExpenseAttachment
     */
    contentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseAttachment
     */
    fileName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseAttachment
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ExpenseAttachment
     */
    storageKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseAttachment
     */
    url?: string | null;
}
/**
 * 
 * @export
 * @interface ExpenseCategoryListResponse
 */
export interface ExpenseCategoryListResponse {
    /**
     * 
     * @type {Array<ExpenseCategoryResponse>}
     * @memberof ExpenseCategoryListResponse
     */
    items: Array<ExpenseCategoryResponse>;
}
/**
 * 
 * @export
 * @interface ExpenseCategoryResponse
 */
export interface ExpenseCategoryResponse {
    /**
     * 
     * @type {string}
     * @memberof ExpenseCategoryResponse
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseCategoryResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof ExpenseCategoryResponse
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseCategoryResponse
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExpenseCategoryResponse
     */
    isActive: boolean;
    /**
     * 
     * @type {string}
     * @memberof ExpenseCategoryResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ExpenseCategoryResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof ExpenseCategoryResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface ExpenseExternalRef
 */
export interface ExpenseExternalRef {
    /**
     * 
     * @type {string}
     * @memberof ExpenseExternalRef
     */
    errorMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseExternalRef
     */
    externalId: string;
    /**
     * 
     * @type {Date}
     * @memberof ExpenseExternalRef
     */
    lastSyncedAt?: Date | null;
    /**
     * 
     * @type {ExternalProvider}
     * @memberof ExpenseExternalRef
     */
    provider: ExternalProvider;
    /**
     * 
     * @type {string}
     * @memberof ExpenseExternalRef
     */
    source: string;
    /**
     * 
     * @type {ExternalSyncStatus}
     * @memberof ExpenseExternalRef
     */
    status: ExternalSyncStatus;
}


/**
 * 
 * @export
 * @interface ExpenseListResponse
 */
export interface ExpenseListResponse {
    /**
     * 
     * @type {Array<ExpenseResponse>}
     * @memberof ExpenseListResponse
     */
    items: Array<ExpenseResponse>;
}
/**
 * 
 * @export
 * @interface ExpenseResponse
 */
export interface ExpenseResponse {
    /**
     * 
     * @type {number}
     * @memberof ExpenseResponse
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    approvedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    approvedBy?: string | null;
    /**
     * 
     * @type {Array<ExpenseAttachment>}
     * @memberof ExpenseResponse
     */
    attachments: Array<ExpenseAttachment>;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    cancelledAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    categoryId: string;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    expenseDate: string;
    /**
     * 
     * @type {Array<ExpenseExternalRef>}
     * @memberof ExpenseResponse
     */
    externalRefs: Array<ExpenseExternalRef>;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    memo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    payee: string;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    rejectedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    rejectedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    rejectionReason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    requestedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof ExpenseResponse
     */
    taxAmount: number;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    taxCategory: string;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof ExpenseResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface ExtensionConfig
 */
export interface ExtensionConfig {
    /**
     * 
     * @type {any}
     * @memberof ExtensionConfig
     */
    configJson: any | null;
    /**
     * 
     * @type {number}
     * @memberof ExtensionConfig
     */
    configVersion: number;
    /**
     * 
     * @type {Date}
     * @memberof ExtensionConfig
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ExtensionConfig
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionConfig
     */
    scopeId: string;
    /**
     * 
     * @type {ExtensionConfigScope}
     * @memberof ExtensionConfig
     */
    scopeType: ExtensionConfigScope;
    /**
     * 
     * @type {string}
     * @memberof ExtensionConfig
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof ExtensionConfig
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ExtensionConfig
     */
    updatedBy?: string | null;
}



/**
 * 
 * @export
 */
export const ExtensionConfigScope = {
    Tenant: 'tenant',
    ReservationType: 'reservation_type',
    Service: 'service',
    Resource: 'resource'
} as const;
export type ExtensionConfigScope = typeof ExtensionConfigScope[keyof typeof ExtensionConfigScope];

/**
 * 
 * @export
 * @interface ExtensionConfigValidation
 */
export interface ExtensionConfigValidation {
    /**
     * 
     * @type {Array<string>}
     * @memberof ExtensionConfigValidation
     */
    errors: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ExtensionConfigValidation
     */
    valid: boolean;
}
/**
 * 
 * @export
 * @interface ExtensionLifecycleAuditEvent
 */
export interface ExtensionLifecycleAuditEvent {
    /**
     * 
     * @type {string}
     * @memberof ExtensionLifecycleAuditEvent
     */
    actorId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ExtensionLifecycleAuditEvent
     */
    configVersion?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof ExtensionLifecycleAuditEvent
     */
    createdAt: Date;
    /**
     * 
     * @type {any}
     * @memberof ExtensionLifecycleAuditEvent
     */
    detailJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensionLifecycleAuditEvent
     */
    eventType: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionLifecycleAuditEvent
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionLifecycleAuditEvent
     */
    id: string;
    /**
     * 
     * @type {TenantExtensionStatus}
     * @memberof ExtensionLifecycleAuditEvent
     */
    statusAfter: TenantExtensionStatus;
    /**
     * 
     * @type {string}
     * @memberof ExtensionLifecycleAuditEvent
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionLifecycleAuditEvent
     */
    version?: string | null;
}


/**
 * 
 * @export
 * @interface ExtensionLifecycleAuditListResponse
 */
export interface ExtensionLifecycleAuditListResponse {
    /**
     * 
     * @type {Array<ExtensionLifecycleAuditEvent>}
     * @memberof ExtensionLifecycleAuditListResponse
     */
    items: Array<ExtensionLifecycleAuditEvent>;
}
/**
 * 
 * @export
 * @interface ExtensionManifest
 */
export interface ExtensionManifest {
    /**
     * 
     * @type {any}
     * @memberof ExtensionManifest
     */
    capabilitiesJson?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExtensionManifest
     */
    configSchemaJson?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof ExtensionManifest
     */
    createdAt: Date;
    /**
     * 
     * @type {any}
     * @memberof ExtensionManifest
     */
    defaultConfigJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensionManifest
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ExtensionManifest
     */
    deterministicOrder: number;
    /**
     * 
     * @type {string}
     * @memberof ExtensionManifest
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionManifest
     */
    industry: string;
    /**
     * 
     * @type {any}
     * @memberof ExtensionManifest
     */
    manifestJson: any | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensionManifest
     */
    name: string;
    /**
     * 
     * @type {any}
     * @memberof ExtensionManifest
     */
    policyHooksJson?: any | null;
    /**
     * 
     * @type {ExtensionRegistryStatus}
     * @memberof ExtensionManifest
     */
    status: ExtensionRegistryStatus;
    /**
     * 
     * @type {any}
     * @memberof ExtensionManifest
     */
    uiContributionsJson?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof ExtensionManifest
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ExtensionManifest
     */
    version: string;
}


/**
 * 
 * @export
 * @interface ExtensionManifestListResponse
 */
export interface ExtensionManifestListResponse {
    /**
     * 
     * @type {Array<ExtensionManifest>}
     * @memberof ExtensionManifestListResponse
     */
    items: Array<ExtensionManifest>;
}

/**
 * 
 * @export
 */
export const ExtensionRegistryStatus = {
    Registered: 'registered',
    Deprecated: 'deprecated'
} as const;
export type ExtensionRegistryStatus = typeof ExtensionRegistryStatus[keyof typeof ExtensionRegistryStatus];


/**
 * 
 * @export
 */
export const ExternalProvider = {
    Square: 'square',
    Freee: 'freee',
    Manual: 'manual',
    Other: 'other'
} as const;
export type ExternalProvider = typeof ExternalProvider[keyof typeof ExternalProvider];


/**
 * 
 * @export
 */
export const ExternalSyncStatus = {
    Pending: 'pending',
    Synced: 'synced',
    Failed: 'failed',
    Ignored: 'ignored'
} as const;
export type ExternalSyncStatus = typeof ExternalSyncStatus[keyof typeof ExternalSyncStatus];

/**
 * 
 * @export
 * @interface FeatureFlagValue
 */
export interface FeatureFlagValue {
    /**
     * 
     * @type {boolean}
     * @memberof FeatureFlagValue
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof FeatureFlagValue
     */
    key: string;
}
/**
 * 
 * @export
 * @interface FieldErpMasterCatalog
 */
export interface FieldErpMasterCatalog {
    /**
     * 
     * @type {Array<FieldErpMasterItem>}
     * @memberof FieldErpMasterCatalog
     */
    productCategories: Array<FieldErpMasterItem>;
    /**
     * 
     * @type {Array<FieldErpMasterItem>}
     * @memberof FieldErpMasterCatalog
     */
    resourceTypes: Array<FieldErpMasterItem>;
}
/**
 * 
 * @export
 * @interface FieldErpMasterItem
 */
export interface FieldErpMasterItem {
    /**
     * 
     * @type {string}
     * @memberof FieldErpMasterItem
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FieldErpMasterItem
     */
    name: string;
    /**
     * 
     * @type {object}
     * @memberof FieldErpMasterItem
     */
    properties: object;
}
/**
 * 
 * @export
 * @interface ForecastBucket
 */
export interface ForecastBucket {
    /**
     * 
     * @type {number}
     * @memberof ForecastBucket
     */
    dealCount: number;
    /**
     * 
     * @type {number}
     * @memberof ForecastBucket
     */
    grossAmount: number;
    /**
     * 
     * @type {string}
     * @memberof ForecastBucket
     */
    month?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ForecastBucket
     */
    weightedAmount: number;
}
/**
 * 
 * @export
 * @interface ForecastResponse
 */
export interface ForecastResponse {
    /**
     * 
     * @type {Array<ForecastBucket>}
     * @memberof ForecastResponse
     */
    months: Array<ForecastBucket>;
    /**
     * 
     * @type {ForecastBucket}
     * @memberof ForecastResponse
     */
    unscheduled?: ForecastBucket | null;
}
/**
 * 
 * @export
 * @interface FulfillmentMethodResponse
 */
export interface FulfillmentMethodResponse {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentMethodResponse
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentMethodResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentMethodResponse
     */
    name: string;
}
/**
 * 
 * @export
 * @interface GenerateResourceTimeSlotsRequest
 */
export interface GenerateResourceTimeSlotsRequest {
    /**
     * Run the complete lock, validation, and conflict plan without writes.
     * @type {boolean}
     * @memberof GenerateResourceTimeSlotsRequest
     */
    dryRun?: boolean;
    /**
     * Inclusive local date in each matching schedule rule's timezone.
     * @type {Date}
     * @memberof GenerateResourceTimeSlotsRequest
     */
    from: Date;
    /**
     * Inclusive local date in each matching schedule rule's timezone.
     * @type {Date}
     * @memberof GenerateResourceTimeSlotsRequest
     */
    to: Date;
}
/**
 * 
 * @export
 * @interface GolfCaddieAssignment
 */
export interface GolfCaddieAssignment {
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAssignment
     */
    assignmentRole: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAssignment
     */
    caddieProfileId: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfCaddieAssignment
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAssignment
     */
    extensionKey: string;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieAssignment
     */
    feeAmount: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAssignment
     */
    feeCurrency: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAssignment
     */
    id: string;
    /**
     * 
     * @type {any}
     * @memberof GolfCaddieAssignment
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAssignment
     */
    nominatedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAssignment
     */
    notes?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieAssignment
     */
    recommendationScore?: number | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAssignment
     */
    reservationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAssignment
     */
    roundReference?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof GolfCaddieAssignment
     */
    scheduledAt: Date;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAssignment
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAssignment
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfCaddieAssignment
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface GolfCaddieAssignmentListResponse
 */
export interface GolfCaddieAssignmentListResponse {
    /**
     * 
     * @type {Array<GolfCaddieAssignment>}
     * @memberof GolfCaddieAssignmentListResponse
     */
    items: Array<GolfCaddieAssignment>;
}
/**
 * 
 * @export
 * @interface GolfCaddieAttendancePeriodSnapshot
 */
export interface GolfCaddieAttendancePeriodSnapshot {
    /**
     * not_linked | not_clocked | working | clocked_out
     * @type {string}
     * @memberof GolfCaddieAttendancePeriodSnapshot
     */
    attendanceStatus: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAttendancePeriodSnapshot
     */
    caddieProfileId: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfCaddieAttendancePeriodSnapshot
     */
    date: Date;
}
/**
 * 
 * @export
 * @interface GolfCaddieAttendancePeriodSnapshotResponse
 */
export interface GolfCaddieAttendancePeriodSnapshotResponse {
    /**
     * 
     * @type {Array<GolfCaddieAttendancePeriodSnapshot>}
     * @memberof GolfCaddieAttendancePeriodSnapshotResponse
     */
    items: Array<GolfCaddieAttendancePeriodSnapshot>;
}
/**
 * 
 * @export
 * @interface GolfCaddieAttendanceSnapshot
 */
export interface GolfCaddieAttendanceSnapshot {
    /**
     * not_linked | not_clocked | working | clocked_out
     * @type {string}
     * @memberof GolfCaddieAttendanceSnapshot
     */
    attendanceStatus: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAttendanceSnapshot
     */
    caddieProfileId: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAttendanceSnapshot
     */
    displayName: string;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieAttendanceSnapshot
     */
    roundsWithoutClockInToday: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieAttendanceSnapshot
     */
    staffId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieAttendanceSnapshot
     */
    todayAssignments: number;
}
/**
 * 
 * @export
 * @interface GolfCaddieAttendanceSnapshotResponse
 */
export interface GolfCaddieAttendanceSnapshotResponse {
    /**
     * 
     * @type {Date}
     * @memberof GolfCaddieAttendanceSnapshotResponse
     */
    date: Date;
    /**
     * 
     * @type {Array<GolfCaddieAttendanceSnapshot>}
     * @memberof GolfCaddieAttendanceSnapshotResponse
     */
    items: Array<GolfCaddieAttendanceSnapshot>;
}
/**
 * 
 * @export
 * @interface GolfCaddiePayrollPeriod
 */
export interface GolfCaddiePayrollPeriod {
    /**
     * 
     * @type {Date}
     * @memberof GolfCaddiePayrollPeriod
     */
    endDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof GolfCaddiePayrollPeriod
     */
    startDate: Date;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddiePayrollPeriod
     */
    yearMonth: string;
}
/**
 * 
 * @export
 * @interface GolfCaddiePayrollSummaryResponse
 */
export interface GolfCaddiePayrollSummaryResponse {
    /**
     * 
     * @type {Array<GolfCaddiePayrollSummaryRow>}
     * @memberof GolfCaddiePayrollSummaryResponse
     */
    items: Array<GolfCaddiePayrollSummaryRow>;
    /**
     * 
     * @type {GolfCaddiePayrollPeriod}
     * @memberof GolfCaddiePayrollSummaryResponse
     */
    period: GolfCaddiePayrollPeriod;
}
/**
 * 
 * @export
 * @interface GolfCaddiePayrollSummaryRow
 */
export interface GolfCaddiePayrollSummaryRow {
    /**
     * 
     * @type {number}
     * @memberof GolfCaddiePayrollSummaryRow
     */
    assignedRounds: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddiePayrollSummaryRow
     */
    caddieProfileId: string;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddiePayrollSummaryRow
     */
    confirmedFeeTotal: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddiePayrollSummaryRow
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddiePayrollSummaryRow
     */
    displayName: string;
    /**
     * 
     * @type {boolean}
     * @memberof GolfCaddiePayrollSummaryRow
     */
    openClockIn: boolean;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddiePayrollSummaryRow
     */
    roundsWithoutClockIn: number;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddiePayrollSummaryRow
     */
    shiftedMinutes: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddiePayrollSummaryRow
     */
    staffId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddiePayrollSummaryRow
     */
    workedMinutes: number;
}
/**
 * 
 * @export
 * @interface GolfCaddieProfile
 */
export interface GolfCaddieProfile {
    /**
     * 
     * @type {boolean}
     * @memberof GolfCaddieProfile
     */
    active: boolean;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieProfile
     */
    baseFeeAmount: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieProfile
     */
    caddieCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof GolfCaddieProfile
     */
    canTwoRounds: boolean;
    /**
     * 
     * @type {any}
     * @memberof GolfCaddieProfile
     */
    courseKnowledge?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof GolfCaddieProfile
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieProfile
     */
    currency: string;
    /**
     * 削除された日時。削除済みは既定の一覧に出ないので、値が入って返るのは
     * `includeDeleted=true` で索いたときだけ。
     * @type {Date}
     * @memberof GolfCaddieProfile
     */
    deletedAt?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieProfile
     */
    desiredIncome: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieProfile
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieProfile
     */
    employmentStatus: string;
    /**
     * 
     * @type {StaffEmploymentType}
     * @memberof GolfCaddieProfile
     */
    employmentType?: StaffEmploymentType | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieProfile
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieProfile
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GolfCaddieProfile
     */
    languages: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieProfile
     */
    maxRoundsPerDay: number;
    /**
     * 
     * @type {any}
     * @memberof GolfCaddieProfile
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieProfile
     */
    monthlyContractRounds: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieProfile
     */
    notes?: string | null;
    /**
     * 
     * @type {GolfCaddieRank}
     * @memberof GolfCaddieProfile
     */
    rank: GolfCaddieRank;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieProfile
     */
    ratingAverage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieProfile
     */
    ratingCount: number;
    /**
     * 
     * @type {GolfCaddieSkillLevel}
     * @memberof GolfCaddieProfile
     */
    skillLevel: GolfCaddieSkillLevel;
    /**
     * 
     * @type {any}
     * @memberof GolfCaddieProfile
     */
    specialtiesJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieProfile
     */
    staffId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieProfile
     */
    staffReferenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieProfile
     */
    staffReferenceType: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieProfile
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfCaddieProfile
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface GolfCaddieProfileListResponse
 */
export interface GolfCaddieProfileListResponse {
    /**
     * 
     * @type {Array<GolfCaddieProfile>}
     * @memberof GolfCaddieProfileListResponse
     */
    items: Array<GolfCaddieProfile>;
}

/**
 * 
 * @export
 */
export const GolfCaddieRank = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D'
} as const;
export type GolfCaddieRank = typeof GolfCaddieRank[keyof typeof GolfCaddieRank];

/**
 * 
 * @export
 * @interface GolfCaddieRating
 */
export interface GolfCaddieRating {
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRating
     */
    assignmentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRating
     */
    caddieProfileId: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRating
     */
    comment?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof GolfCaddieRating
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRating
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRating
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRating
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRating
     */
    reservationId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieRating
     */
    score: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRating
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfCaddieRating
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface GolfCaddieRatingListResponse
 */
export interface GolfCaddieRatingListResponse {
    /**
     * 
     * @type {Array<GolfCaddieRating>}
     * @memberof GolfCaddieRatingListResponse
     */
    items: Array<GolfCaddieRating>;
}
/**
 * 
 * @export
 * @interface GolfCaddieRecommendation
 */
export interface GolfCaddieRecommendation {
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRecommendation
     */
    caddieCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRecommendation
     */
    caddieProfileId: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRecommendation
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRecommendation
     */
    pairingCaddieProfileId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRecommendation
     */
    pairingDisplayName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieRecommendation
     */
    ratingAverage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieRecommendation
     */
    ratingCount: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof GolfCaddieRecommendation
     */
    rationale: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieRecommendation
     */
    recommendationScore: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCaddieRecommendation
     */
    recommendedRole: string;
    /**
     * 
     * @type {number}
     * @memberof GolfCaddieRecommendation
     */
    roundsAssigned: number;
    /**
     * 
     * @type {GolfCaddieSkillLevel}
     * @memberof GolfCaddieRecommendation
     */
    skillLevel: GolfCaddieSkillLevel;
}


/**
 * 
 * @export
 * @interface GolfCaddieRecommendationResponse
 */
export interface GolfCaddieRecommendationResponse {
    /**
     * 
     * @type {Array<GolfCaddieRecommendation>}
     * @memberof GolfCaddieRecommendationResponse
     */
    items: Array<GolfCaddieRecommendation>;
}

/**
 * 
 * @export
 */
export const GolfCaddieSkillLevel = {
    Rookie: 'rookie',
    Regular: 'regular',
    Veteran: 'veteran'
} as const;
export type GolfCaddieSkillLevel = typeof GolfCaddieSkillLevel[keyof typeof GolfCaddieSkillLevel];


/**
 * 
 * @export
 */
export const GolfCaddieUnavailableReason = {
    Inactive: 'inactive',
    NoStaffMember: 'no_staff_member',
    NoShift: 'no_shift',
    AlreadyAssigned: 'already_assigned'
} as const;
export type GolfCaddieUnavailableReason = typeof GolfCaddieUnavailableReason[keyof typeof GolfCaddieUnavailableReason];

/**
 * 
 * @export
 * @interface GolfCourse
 */
export interface GolfCourse {
    /**
     * 
     * @type {any}
     * @memberof GolfCourse
     */
    businessHoursJson?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof GolfCourse
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof GolfCourse
     */
    extensionKey: string;
    /**
     * 
     * @type {number}
     * @memberof GolfCourse
     */
    holeCount: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCourse
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof GolfCourse
     */
    isActive: boolean;
    /**
     * 
     * @type {string}
     * @memberof GolfCourse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCourse
     */
    shortName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCourse
     */
    startIntervalMinutes: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCourse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCourse
     */
    timezone: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfCourse
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface GolfCourseListResponse
 */
export interface GolfCourseListResponse {
    /**
     * 
     * @type {Array<GolfCourse>}
     * @memberof GolfCourseListResponse
     */
    items: Array<GolfCourse>;
}
/**
 * 
 * @export
 * @interface GolfCourseResource
 */
export interface GolfCourseResource {
    /**
     * 
     * @type {boolean}
     * @memberof GolfCourseResource
     */
    active: boolean;
    /**
     * 
     * @type {any}
     * @memberof GolfCourseResource
     */
    attributesJson?: any | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCourseResource
     */
    capacity: number;
    /**
     * 
     * @type {Date}
     * @memberof GolfCourseResource
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof GolfCourseResource
     */
    extensionKey: string;
    /**
     * どのコースの受付枠か。storefront はこれで「別コースの枠」を落とす。
     * 
     * 列が空のときは `attributes_json` / `metadata_json` の `golfCourseId`
     * から埋める（列が無かった頃に CourseBoard が使っていた規約）。
     * @type {string}
     * @memberof GolfCourseResource
     */
    golfCourseId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GolfCourseResource
     */
    holeCount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCourseResource
     */
    id: string;
    /**
     * 
     * @type {any}
     * @memberof GolfCourseResource
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCourseResource
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof GolfCourseResource
     */
    par?: number | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCourseResource
     */
    reservationResourceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCourseResource
     */
    resourceCode: string;
    /**
     * 
     * @type {GolfResourceKind}
     * @memberof GolfCourseResource
     */
    resourceKind: GolfResourceKind;
    /**
     * 
     * @type {string}
     * @memberof GolfCourseResource
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfCourseResource
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface GolfCourseResourceListResponse
 */
export interface GolfCourseResourceListResponse {
    /**
     * 
     * @type {Array<GolfCourseResource>}
     * @memberof GolfCourseResourceListResponse
     */
    items: Array<GolfCourseResource>;
}
/**
 * 
 * @export
 * @interface GolfCustomField
 */
export interface GolfCustomField {
    /**
     * 
     * @type {boolean}
     * @memberof GolfCustomField
     */
    active: boolean;
    /**
     * 
     * @type {Date}
     * @memberof GolfCustomField
     */
    createdAt: Date;
    /**
     * 
     * @type {number}
     * @memberof GolfCustomField
     */
    displayOrder: number;
    /**
     * 
     * @type {string}
     * @memberof GolfCustomField
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCustomField
     */
    fieldKey: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCustomField
     */
    fieldType: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCustomField
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof GolfCustomField
     */
    label: string;
    /**
     * 
     * @type {boolean}
     * @memberof GolfCustomField
     */
    required: boolean;
    /**
     * 
     * @type {string}
     * @memberof GolfCustomField
     */
    reservationTypeId: string;
    /**
     * 
     * @type {any}
     * @memberof GolfCustomField
     */
    schemaJson: any | null;
    /**
     * 
     * @type {string}
     * @memberof GolfCustomField
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfCustomField
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface GolfCustomFieldListResponse
 */
export interface GolfCustomFieldListResponse {
    /**
     * 
     * @type {Array<GolfCustomField>}
     * @memberof GolfCustomFieldListResponse
     */
    items: Array<GolfCustomField>;
}
/**
 * 
 * @export
 * @interface GolfMonthlySettlementCaddieFees
 */
export interface GolfMonthlySettlementCaddieFees {
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementCaddieFees
     */
    assignmentCount: number;
    /**
     * 
     * @type {string}
     * @memberof GolfMonthlySettlementCaddieFees
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementCaddieFees
     */
    total: number;
}
/**
 * 
 * @export
 * @interface GolfMonthlySettlementCancellations
 */
export interface GolfMonthlySettlementCancellations {
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementCancellations
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementCancellations
     */
    feeOutstandingAmount: number;
}
/**
 * 
 * @export
 * @interface GolfMonthlySettlementDrilldown
 */
export interface GolfMonthlySettlementDrilldown {
    /**
     * 
     * @type {Array<string>}
     * @memberof GolfMonthlySettlementDrilldown
     */
    reservationIds: Array<string>;
    /**
     * 
     * @type {Array<GolfUnpaidCancellationItem>}
     * @memberof GolfMonthlySettlementDrilldown
     */
    unpaidCancellationItems: Array<GolfUnpaidCancellationItem>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GolfMonthlySettlementDrilldown
     */
    unpaidCancellationReservationIds: Array<string>;
}
/**
 * 
 * @export
 * @interface GolfMonthlySettlementPeriod
 */
export interface GolfMonthlySettlementPeriod {
    /**
     * 
     * @type {Date}
     * @memberof GolfMonthlySettlementPeriod
     */
    endDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof GolfMonthlySettlementPeriod
     */
    startDate: Date;
    /**
     * 
     * @type {string}
     * @memberof GolfMonthlySettlementPeriod
     */
    yearMonth: string;
}
/**
 * 
 * @export
 * @interface GolfMonthlySettlementReport
 */
export interface GolfMonthlySettlementReport {
    /**
     * 
     * @type {GolfMonthlySettlementCaddieFees}
     * @memberof GolfMonthlySettlementReport
     */
    caddieFees: GolfMonthlySettlementCaddieFees;
    /**
     * 
     * @type {GolfMonthlySettlementCancellations}
     * @memberof GolfMonthlySettlementReport
     */
    cancellations: GolfMonthlySettlementCancellations;
    /**
     * 
     * @type {GolfMonthlySettlementDrilldown}
     * @memberof GolfMonthlySettlementReport
     */
    drilldown: GolfMonthlySettlementDrilldown;
    /**
     * 
     * @type {GolfMonthlySettlementPeriod}
     * @memberof GolfMonthlySettlementReport
     */
    period: GolfMonthlySettlementPeriod;
    /**
     * 
     * @type {GolfMonthlySettlementReservations}
     * @memberof GolfMonthlySettlementReport
     */
    reservations: GolfMonthlySettlementReservations;
    /**
     * 
     * @type {GolfMonthlySettlementSquare}
     * @memberof GolfMonthlySettlementReport
     */
    square: GolfMonthlySettlementSquare;
}
/**
 * 
 * @export
 * @interface GolfMonthlySettlementReservations
 */
export interface GolfMonthlySettlementReservations {
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementReservations
     */
    collectedAmount: number;
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementReservations
     */
    grossAmount: number;
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementReservations
     */
    paymentPendingAmount: number;
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementReservations
     */
    refundedAmount: number;
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementReservations
     */
    reservationCount: number;
}
/**
 * 
 * @export
 * @interface GolfMonthlySettlementSquare
 */
export interface GolfMonthlySettlementSquare {
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementSquare
     */
    paymentsTotal: number;
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementSquare
     */
    refundsTotal: number;
    /**
     * 
     * @type {number}
     * @memberof GolfMonthlySettlementSquare
     */
    unreconciledLines: number;
    /**
     * 
     * @type {string}
     * @memberof GolfMonthlySettlementSquare
     */
    warning?: string | null;
}

/**
 * プレー区分（キャディ付き or セルフ）
 * @export
 */
export const GolfPlayType = {
    Caddie: 'caddie',
    Self: 'self'
} as const;
export type GolfPlayType = typeof GolfPlayType[keyof typeof GolfPlayType];


/**
 * 
 * @export
 */
export const GolfPolicyHooksStatus = {
    Applied: 'applied',
    PartiallyApplied: 'partially_applied',
    NotApplied: 'not_applied',
    Inactive: 'inactive',
    NotConfigured: 'not_configured'
} as const;
export type GolfPolicyHooksStatus = typeof GolfPolicyHooksStatus[keyof typeof GolfPolicyHooksStatus];

/**
 * 
 * @export
 * @interface GolfPolicyWarning
 */
export interface GolfPolicyWarning {
    /**
     * 
     * @type {string}
     * @memberof GolfPolicyWarning
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof GolfPolicyWarning
     */
    message: string;
}
/**
 * ゴルフ予約商品の時間帯×曜日×枠数上限スロット
 * @export
 * @interface GolfProductSlot
 */
export interface GolfProductSlot {
    /**
     * 
     * @type {Date}
     * @memberof GolfProductSlot
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof GolfProductSlot
     */
    endTime: string;
    /**
     * 
     * @type {string}
     * @memberof GolfProductSlot
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof GolfProductSlot
     */
    golfReservationProductId: string;
    /**
     * 
     * @type {string}
     * @memberof GolfProductSlot
     */
    id: string;
    /**
     * 最大グループ数 (0=制限なし)
     * @type {number}
     * @memberof GolfProductSlot
     */
    maxGroups: number;
    /**
     * 最大プレーヤー数 (0=制限なし)
     * @type {number}
     * @memberof GolfProductSlot
     */
    maxPlayers: number;
    /**
     * 
     * @type {string}
     * @memberof GolfProductSlot
     */
    startTime: string;
    /**
     * 
     * @type {string}
     * @memberof GolfProductSlot
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfProductSlot
     */
    updatedAt: Date;
    /**
     * 0=日曜, 1=月曜, ..., 6=土曜
     * @type {number}
     * @memberof GolfProductSlot
     */
    weekday: number;
}
/**
 * 
 * @export
 * @interface GolfProductSlotBody
 */
export interface GolfProductSlotBody {
    /**
     * 
     * @type {string}
     * @memberof GolfProductSlotBody
     */
    endTime: string;
    /**
     * 
     * @type {number}
     * @memberof GolfProductSlotBody
     */
    maxGroups?: number | null;
    /**
     * 
     * @type {number}
     * @memberof GolfProductSlotBody
     */
    maxPlayers?: number | null;
    /**
     * 
     * @type {string}
     * @memberof GolfProductSlotBody
     */
    startTime: string;
    /**
     * 
     * @type {number}
     * @memberof GolfProductSlotBody
     */
    weekday: number;
}
/**
 * 
 * @export
 * @interface GolfProductSlotListResponse
 */
export interface GolfProductSlotListResponse {
    /**
     * 
     * @type {Array<GolfProductSlot>}
     * @memberof GolfProductSlotListResponse
     */
    items: Array<GolfProductSlot>;
}
/**
 * 
 * @export
 * @interface GolfReservationPolicy
 */
export interface GolfReservationPolicy {
    /**
     * 
     * @type {string}
     * @memberof GolfReservationPolicy
     */
    cartPolicy: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfReservationPolicy
     */
    createdAt: Date;
    /**
     * 
     * @type {number}
     * @memberof GolfReservationPolicy
     */
    cutoffHours: number;
    /**
     * 
     * @type {number}
     * @memberof GolfReservationPolicy
     */
    defaultHoles: number;
    /**
     * 
     * @type {string}
     * @memberof GolfReservationPolicy
     */
    extensionKey: string;
    /**
     * 
     * @type {number}
     * @memberof GolfReservationPolicy
     */
    guestDepositBps: number;
    /**
     * 
     * @type {number}
     * @memberof GolfReservationPolicy
     */
    maxPlayersPerTeeTime: number;
    /**
     * 
     * @type {number}
     * @memberof GolfReservationPolicy
     */
    memberDepositBps: number;
    /**
     * 
     * @type {any}
     * @memberof GolfReservationPolicy
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GolfReservationPolicy
     */
    policyHooksJson?: any | null;
    /**
     * 
     * @type {GolfPolicyHooksStatus}
     * @memberof GolfReservationPolicy
     */
    policyHooksStatus: GolfPolicyHooksStatus;
    /**
     * 
     * @type {string}
     * @memberof GolfReservationPolicy
     */
    reservationTypeId: string;
    /**
     * 
     * @type {string}
     * @memberof GolfReservationPolicy
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfReservationPolicy
     */
    updatedAt: Date;
    /**
     * 
     * @type {Array<GolfPolicyWarning>}
     * @memberof GolfReservationPolicy
     */
    warnings: Array<GolfPolicyWarning>;
}


/**
 * ゴルフ予約商品の拡張設定（reservation_services のサイドテーブル）
 * @export
 * @interface GolfReservationProduct
 */
export interface GolfReservationProduct {
    /**
     * 
     * @type {Date}
     * @memberof GolfReservationProduct
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof GolfReservationProduct
     */
    displayName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GolfReservationProduct
     */
    expectedDurationMinutes: number;
    /**
     * 
     * @type {string}
     * @memberof GolfReservationProduct
     */
    extensionKey: string;
    /**
     * 
     * @type {number}
     * @memberof GolfReservationProduct
     */
    holeCount: number;
    /**
     * 
     * @type {string}
     * @memberof GolfReservationProduct
     */
    id: string;
    /**
     * 
     * @type {GolfPlayType}
     * @memberof GolfReservationProduct
     */
    playType: GolfPlayType;
    /**
     * 
     * @type {string}
     * @memberof GolfReservationProduct
     */
    reservationServiceId: string;
    /**
     * 
     * @type {string}
     * @memberof GolfReservationProduct
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof GolfReservationProduct
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface GolfReservationProductListResponse
 */
export interface GolfReservationProductListResponse {
    /**
     * 
     * @type {Array<GolfReservationProduct>}
     * @memberof GolfReservationProductListResponse
     */
    items: Array<GolfReservationProduct>;
}

/**
 * 
 * @export
 */
export const GolfResourceKind = {
    Course: 'course',
    Nine: 'nine',
    Hole: 'hole',
    TeeBox: 'tee_box',
    Cart: 'cart',
    Other: 'other'
} as const;
export type GolfResourceKind = typeof GolfResourceKind[keyof typeof GolfResourceKind];

/**
 * 
 * @export
 * @interface GolfUnpaidCancellationItem
 */
export interface GolfUnpaidCancellationItem {
    /**
     * 
     * @type {number}
     * @memberof GolfUnpaidCancellationItem
     */
    cancellationFeeAmount: number;
    /**
     * 
     * @type {string}
     * @memberof GolfUnpaidCancellationItem
     */
    checkoutUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GolfUnpaidCancellationItem
     */
    invoiceId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof GolfUnpaidCancellationItem
     */
    linkIssued: boolean;
    /**
     * 
     * @type {string}
     * @memberof GolfUnpaidCancellationItem
     */
    paymentStatus: string;
    /**
     * 
     * @type {string}
     * @memberof GolfUnpaidCancellationItem
     */
    reservationId: string;
    /**
     * 
     * @type {string}
     * @memberof GolfUnpaidCancellationItem
     */
    reservationNumber: string;
}
/**
 * One handover note, as it was written. Rows are never edited or deleted:
 * acknowledgement and retraction are the only mutations, and both are
 * additive stamps rather than rewrites of the body.
 * @export
 * @interface HandoffNote
 */
export interface HandoffNote {
    /**
     * When someone took the handover over. `None` while it is still
     * outstanding, which is what the reception board filters on.
     * @type {Date}
     * @memberof HandoffNote
     */
    acknowledgedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof HandoffNote
     */
    acknowledgedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HandoffNote
     */
    authorId?: string | null;
    /**
     * 
     * @type {HandoffNoteAuthorType}
     * @memberof HandoffNote
     */
    authorType: HandoffNoteAuthorType;
    /**
     * 
     * @type {string}
     * @memberof HandoffNote
     */
    body: string;
    /**
     * 
     * @type {string}
     * @memberof HandoffNote
     */
    category: string;
    /**
     * 
     * @type {Date}
     * @memberof HandoffNote
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof HandoffNote
     */
    id: string;
    /**
     * A note written in error stays readable and is marked retracted; it is
     * never removed, or the log would no longer be a log.
     * @type {Date}
     * @memberof HandoffNote
     */
    retractedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof HandoffNote
     */
    retractedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HandoffNote
     */
    retractionReason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HandoffNote
     */
    subjectId: string;
    /**
     * 
     * @type {string}
     * @memberof HandoffNote
     */
    subjectType: string;
    /**
     * 
     * @type {string}
     * @memberof HandoffNote
     */
    tenantId: string;
}



/**
 * What kind of principal wrote a note. Mirrors the cancellation trail's
 * actor classification so both trails name the same actor kind for the
 * same request.
 * @export
 */
export const HandoffNoteAuthorType = {
    User: 'User',
    ServiceAccount: 'ServiceAccount',
    System: 'System'
} as const;
export type HandoffNoteAuthorType = typeof HandoffNoteAuthorType[keyof typeof HandoffNoteAuthorType];

/**
 * 
 * @export
 * @interface HandoffNoteListResponse
 */
export interface HandoffNoteListResponse {
    /**
     * 
     * @type {Array<HandoffNote>}
     * @memberof HandoffNoteListResponse
     */
    items: Array<HandoffNote>;
}
/**
 * 
 * @export
 * @interface ImportProductSlotsRequest
 */
export interface ImportProductSlotsRequest {
    /**
     * Remove the migrated `slots` arrays from the tenant extension config.
     * Availability already comes from the schedule at that point, so the
     * declared list is redundant.
     * @type {boolean}
     * @memberof ImportProductSlotsRequest
     */
    clearProductSlots?: boolean;
    /**
     * Compute the plan without writing rules or touching the config.
     * @type {boolean}
     * @memberof ImportProductSlotsRequest
     */
    dryRun?: boolean;
    /**
     * Import only from this extension. Omit to read every enabled extension.
     * @type {string}
     * @memberof ImportProductSlotsRequest
     */
    extensionKey?: string | null;
    /**
     * Start interval written to each imported rule: how often a booking may
     * begin inside the declared window. Defaults to each declared slot's own
     * `durationMinutes`.
     * @type {number}
     * @memberof ImportProductSlotsRequest
     */
    slotIntervalMinutes?: number | null;
    /**
     * IANA timezone the declared local times are expressed in.
     * @type {string}
     * @memberof ImportProductSlotsRequest
     */
    timezone?: string;
}
/**
 * 
 * @export
 * @interface ImportProductSlotsResponse
 */
export interface ImportProductSlotsResponse {
    /**
     * Products whose declared `slots` list was removed from the config.
     * @type {number}
     * @memberof ImportProductSlotsResponse
     */
    clearedProducts: number;
    /**
     * 
     * @type {boolean}
     * @memberof ImportProductSlotsResponse
     */
    dryRun: boolean;
    /**
     * Declared slots turned into a new availability rule.
     * @type {number}
     * @memberof ImportProductSlotsResponse
     */
    imported: number;
    /**
     * 
     * @type {string}
     * @memberof ImportProductSlotsResponse
     */
    resourceId: string;
    /**
     * 
     * @type {Array<ReservationAvailabilityRuleResponse>}
     * @memberof ImportProductSlotsResponse
     */
    rules: Array<ReservationAvailabilityRuleResponse>;
    /**
     * Declared slots an existing rule already covers.
     * @type {number}
     * @memberof ImportProductSlotsResponse
     */
    skipped: number;
}
/**
 * 
 * @export
 * @interface InspectionDispositionLineRequest
 */
export interface InspectionDispositionLineRequest {
    /**
     * 
     * @type {string}
     * @memberof InspectionDispositionLineRequest
     */
    disposition: string;
    /**
     * 
     * @type {string}
     * @memberof InspectionDispositionLineRequest
     */
    lineId: string;
    /**
     * 
     * @type {string}
     * @memberof InspectionDispositionLineRequest
     */
    note?: string | null;
}
/**
 * 
 * @export
 * @interface InspectionDispositionRequest
 */
export interface InspectionDispositionRequest {
    /**
     * 
     * @type {Array<InspectionDispositionLineRequest>}
     * @memberof InspectionDispositionRequest
     */
    lines: Array<InspectionDispositionLineRequest>;
}
/**
 * 
 * @export
 * @interface InventoryLocationListResponse
 */
export interface InventoryLocationListResponse {
    /**
     * 
     * @type {Array<InventoryLocationResponse>}
     * @memberof InventoryLocationListResponse
     */
    items: Array<InventoryLocationResponse>;
}
/**
 * 
 * @export
 * @interface InventoryLocationResponse
 */
export interface InventoryLocationResponse {
    /**
     * 
     * @type {string}
     * @memberof InventoryLocationResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryLocationResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryLocationResponse
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryLocationResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryLocationResponse
     */
    referenceId: string;
    /**
     * 
     * @type {boolean}
     * @memberof InventoryLocationResponse
     */
    stockHolding: boolean;
    /**
     * 
     * @type {string}
     * @memberof InventoryLocationResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface InventoryValuationListResponse
 */
export interface InventoryValuationListResponse {
    /**
     * 
     * @type {Array<InventoryValuationResponse>}
     * @memberof InventoryValuationListResponse
     */
    items: Array<InventoryValuationResponse>;
}
/**
 * 
 * @export
 * @interface InventoryValuationResponse
 */
export interface InventoryValuationResponse {
    /**
     * 
     * @type {string}
     * @memberof InventoryValuationResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryValuationResponse
     */
    periodStart: string;
    /**
     * 
     * @type {number}
     * @memberof InventoryValuationResponse
     */
    quantityOnHand: number;
    /**
     * 
     * @type {string}
     * @memberof InventoryValuationResponse
     */
    sku: string;
    /**
     * 
     * @type {number}
     * @memberof InventoryValuationResponse
     */
    valuationAmount: number;
    /**
     * 
     * @type {string}
     * @memberof InventoryValuationResponse
     */
    warehouseId: string;
    /**
     * 
     * @type {number}
     * @memberof InventoryValuationResponse
     */
    weightedAverageUnitCost: number;
}

/**
 * 
 * @export
 */
export const InvitationDeliveryStatus = {
    Accepted: 'accepted',
    AcceptanceUnconfirmed: 'acceptance_unconfirmed'
} as const;
export type InvitationDeliveryStatus = typeof InvitationDeliveryStatus[keyof typeof InvitationDeliveryStatus];

/**
 * 
 * @export
 * @interface InviteErpUserRequest
 */
export interface InviteErpUserRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof InviteErpUserRequest
     */
    customPolicyIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof InviteErpUserRequest
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof InviteErpUserRequest
     */
    notifyUser?: boolean | null;
    /**
     * Flat policy list (see [`UpdateErpUserPoliciesRequest`]). Takes
     * precedence over `role` / `custom_policy_ids` when present.
     * @type {Array<string>}
     * @memberof InviteErpUserRequest
     */
    policyIds?: Array<string> | null;
    /**
     * Legacy pair: exclusive role + custom policies. Either this or
     * `policy_ids` must be provided.
     * @type {ErpRole}
     * @memberof InviteErpUserRequest
     */
    role?: ErpRole | null;
}


/**
 * 
 * @export
 * @interface InviteErpUserResponse
 */
export interface InviteErpUserResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof InviteErpUserResponse
     */
    customPolicyIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof InviteErpUserResponse
     */
    email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof InviteErpUserResponse
     */
    invitationSent: boolean;
    /**
     * 
     * @type {ErpUserResponse}
     * @memberof InviteErpUserResponse
     */
    user?: ErpUserResponse | null;
}
/**
 * @type InvoiceBillToEvidenceResponse
 * 
 * @export
 */
export type InvoiceBillToEvidenceResponse = { kind: 'direct' } & InvoiceBillToEvidenceResponseDirect | { kind: 'reservation_affiliation' } & InvoiceBillToEvidenceResponseReservationAffiliation;
/**
 * 
 * @export
 * @interface InvoiceBillToEvidenceResponseDirect
 */
export interface InvoiceBillToEvidenceResponseDirect {
    /**
     * 
     * @type {InvoiceBillToEvidenceResponseDirectKindEnum}
     * @memberof InvoiceBillToEvidenceResponseDirect
     */
    kind?: InvoiceBillToEvidenceResponseDirectKindEnum;
}


/**
 * @export
 */
export const InvoiceBillToEvidenceResponseDirectKindEnum = {
    Direct: 'direct'
} as const;
export type InvoiceBillToEvidenceResponseDirectKindEnum = typeof InvoiceBillToEvidenceResponseDirectKindEnum[keyof typeof InvoiceBillToEvidenceResponseDirectKindEnum];

/**
 * 
 * @export
 * @interface InvoiceBillToEvidenceResponseReservationAffiliation
 */
export interface InvoiceBillToEvidenceResponseReservationAffiliation {
    /**
     * 
     * @type {string}
     * @memberof InvoiceBillToEvidenceResponseReservationAffiliation
     */
    affiliationId: string;
}
/**
 * @type InvoiceBillToRequest
 * 
 * @export
 */
export type InvoiceBillToRequest = { kind: 'client' } & InvoiceBillToRequestClient | { kind: 'customer' } & InvoiceBillToRequestCustomer | { kind: 'unregistered' } & InvoiceBillToRequestUnregistered;
/**
 * 
 * @export
 * @interface InvoiceBillToRequestClient
 */
export interface InvoiceBillToRequestClient {
    /**
     * 
     * @type {string}
     * @memberof InvoiceBillToRequestClient
     */
    affiliationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceBillToRequestClient
     */
    clientId: string;
}
/**
 * 
 * @export
 * @interface InvoiceBillToRequestCustomer
 */
export interface InvoiceBillToRequestCustomer {
    /**
     * 
     * @type {string}
     * @memberof InvoiceBillToRequestCustomer
     */
    customerId: string;
}
/**
 * 顧客台帳にも取引先にも無い相手への単発請求。
 * 
 * 識別子を求めず、宛名と連絡先だけで請求先を決める。台帳に載せたい
 * ときは顧客を作ってから `customer` を送る — Field はここから勝手に
 * 顧客を作らない。
 * @export
 * @interface InvoiceBillToRequestUnregistered
 */
export interface InvoiceBillToRequestUnregistered {
    /**
     * 
     * @type {string}
     * @memberof InvoiceBillToRequestUnregistered
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceBillToRequestUnregistered
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceBillToRequestUnregistered
     */
    phone?: string | null;
}
/**
 * @type InvoiceBillToResponse
 * 
 * @export
 */
export type InvoiceBillToResponse = { kind: 'client' } & InvoiceBillToResponseClient | { kind: 'customer' } & InvoiceBillToResponseCustomer | { kind: 'legacy_unresolved' } & InvoiceBillToResponseLegacyUnresolved | { kind: 'unregistered' } & InvoiceBillToResponseUnregistered;
/**
 * 
 * @export
 * @interface InvoiceBillToResponseClient
 */
export interface InvoiceBillToResponseClient {
    /**
     * 
     * @type {string}
     * @memberof InvoiceBillToResponseClient
     */
    clientId: string;
    /**
     * 
     * @type {InvoiceBillToEvidenceResponse}
     * @memberof InvoiceBillToResponseClient
     */
    evidence: InvoiceBillToEvidenceResponse;
    /**
     * 
     * @type {any}
     * @memberof InvoiceBillToResponseClient
     */
    snapshot: any | null;
}
/**
 * 
 * @export
 * @interface InvoiceBillToResponseCustomer
 */
export interface InvoiceBillToResponseCustomer {
    /**
     * 
     * @type {string}
     * @memberof InvoiceBillToResponseCustomer
     */
    customerId: string;
    /**
     * 
     * @type {any}
     * @memberof InvoiceBillToResponseCustomer
     */
    snapshot: any | null;
}
/**
 * 
 * @export
 * @interface InvoiceBillToResponseLegacyUnresolved
 */
export interface InvoiceBillToResponseLegacyUnresolved {
    /**
     * 
     * @type {string}
     * @memberof InvoiceBillToResponseLegacyUnresolved
     */
    legacyReferenceId: string;
    /**
     * 
     * @type {any}
     * @memberof InvoiceBillToResponseLegacyUnresolved
     */
    snapshot: any | null;
}
/**
 * 台帳に無い相手。識別子は無く、発行時の写しだけが相手を表す。
 * @export
 * @interface InvoiceBillToResponseUnregistered
 */
export interface InvoiceBillToResponseUnregistered {
    /**
     * 
     * @type {any}
     * @memberof InvoiceBillToResponseUnregistered
     */
    snapshot: any | null;
}
/**
 * 
 * @export
 * @interface InvoiceLineItemResponse
 */
export interface InvoiceLineItemResponse {
    /**
     * 
     * @type {number}
     * @memberof InvoiceLineItemResponse
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineItemResponse
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceLineItemResponse
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineItemResponse
     */
    taxCategory: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceLineItemResponse
     */
    unitPrice: number;
}
/**
 * 
 * @export
 * @interface InvoiceListResponse
 */
export interface InvoiceListResponse {
    /**
     * 
     * @type {Array<InvoiceResponse>}
     * @memberof InvoiceListResponse
     */
    items: Array<InvoiceResponse>;
}
/**
 * 
 * @export
 * @interface InvoiceResponse
 */
export interface InvoiceResponse {
    /**
     * 
     * @type {InvoiceBillToResponse}
     * @memberof InvoiceResponse
     */
    billTo?: InvoiceBillToResponse | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    clientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    clientName?: string | null;
    /**
     * Recipient number the invoice SMS is addressed to.
     * @type {string}
     * @memberof InvoiceResponse
     */
    clientPhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    dueDate: string;
    /**
     * Why the last email delivery attempt failed. Present only while
     * `emailDeliveryStatus` is `Failed`.
     * @type {string}
     * @memberof InvoiceResponse
     */
    emailDeliveryFailureCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    emailDeliveryStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    invoiceNumber: string;
    /**
     * 
     * @type {Array<InvoiceLineItemResponse>}
     * @memberof InvoiceResponse
     */
    lineItems: Array<InvoiceLineItemResponse>;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    nonPostingReason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    paidAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    paymentLinkFailureCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    paymentLinkStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    paymentLinkUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    postingDisposition: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    sentAt?: string | null;
    /**
     * Why the last SMS delivery attempt failed. Present only while
     * `smsDeliveryStatus` is `Failed`.
     * @type {string}
     * @memberof InvoiceResponse
     */
    smsDeliveryFailureCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    smsDeliveryStatus?: string | null;
    /**
     * What this invoice was raised for. Empty when no origin was declared.
     * @type {Array<InvoiceSourceResponse>}
     * @memberof InvoiceResponse
     */
    sources: Array<InvoiceSourceResponse>;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    squarePaymentLinkId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceResponse
     */
    subtotalAmount: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceResponse
     */
    taxAmount: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    taxCategory: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    tenantId: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceResponse
     */
    totalAmount: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    updatedAt: string;
}
/**
 * A record this invoice is being raised from.
 * 
 * `reason` is the caller's own classification. Field stores it verbatim,
 * filters on it exactly, and attaches no meaning to any particular value, so
 * one tenant's `cancellation_fee` and another's `no_show_fee` are the same
 * kind of thing to Field.
 * @export
 * @interface InvoiceSourceRequest
 */
export interface InvoiceSourceRequest {
    /**
     * 
     * @type {string}
     * @memberof InvoiceSourceRequest
     */
    reason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceSourceRequest
     */
    sourceId: string;
    /**
     * One of `reservation`, `order`, `subscription`, `quotation`, `contract`.
     * @type {string}
     * @memberof InvoiceSourceRequest
     */
    sourceType: string;
}
/**
 * 
 * @export
 * @interface InvoiceSourceResponse
 */
export interface InvoiceSourceResponse {
    /**
     * 
     * @type {string}
     * @memberof InvoiceSourceResponse
     */
    reason: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceSourceResponse
     */
    sourceId: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceSourceResponse
     */
    sourceType: string;
}
/**
 * 
 * @export
 * @interface InvoiceVoidEligibilityResponse
 */
export interface InvoiceVoidEligibilityResponse {
    /**
     * 
     * @type {boolean}
     * @memberof InvoiceVoidEligibilityResponse
     */
    eligible: boolean;
    /**
     * 
     * @type {InvoiceVoidPeriodResponse}
     * @memberof InvoiceVoidEligibilityResponse
     */
    period: InvoiceVoidPeriodResponse | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceVoidEligibilityResponse
     */
    plannedReversalOn: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceVoidEligibilityResponse
     */
    reasonCode: string | null;
    /**
     * 
     * @type {number}
     * @memberof InvoiceVoidEligibilityResponse
     */
    reversedJournalCount: number;
}
/**
 * 
 * @export
 * @interface InvoiceVoidErrorResponse
 */
export interface InvoiceVoidErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof InvoiceVoidErrorResponse
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceVoidErrorResponse
     */
    message: string;
}
/**
 * 
 * @export
 * @interface InvoiceVoidPeriodResponse
 */
export interface InvoiceVoidPeriodResponse {
    /**
     * 
     * @type {string}
     * @memberof InvoiceVoidPeriodResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceVoidPeriodResponse
     */
    periodEnd: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceVoidPeriodResponse
     */
    periodStart: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceVoidPeriodResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceVoidPeriodResponse
     */
    yearMonth: string;
}
/**
 * 
 * @export
 * @interface IssueReservationBillingLinkRequest
 */
export interface IssueReservationBillingLinkRequest {
    /**
     * 
     * @type {string}
     * @memberof IssueReservationBillingLinkRequest
     */
    cancelUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IssueReservationBillingLinkRequest
     */
    successUrl?: string | null;
}
/**
 * 
 * @export
 * @interface IssueReservationBillingLinkResponse
 */
export interface IssueReservationBillingLinkResponse {
    /**
     * 
     * @type {string}
     * @memberof IssueReservationBillingLinkResponse
     */
    checkoutUrl: string;
    /**
     * 
     * @type {PaymentIntent}
     * @memberof IssueReservationBillingLinkResponse
     */
    paymentIntent: PaymentIntent;
    /**
     * 
     * @type {Reservation}
     * @memberof IssueReservationBillingLinkResponse
     */
    reservation: Reservation;
    /**
     * 
     * @type {boolean}
     * @memberof IssueReservationBillingLinkResponse
     */
    reusedExistingLink: boolean;
}
/**
 * 
 * @export
 * @interface IssueReservationSquareInvoiceResponse
 */
export interface IssueReservationSquareInvoiceResponse {
    /**
     * 
     * @type {string}
     * @memberof IssueReservationSquareInvoiceResponse
     */
    checkoutUrl: string;
    /**
     * 
     * @type {string}
     * @memberof IssueReservationSquareInvoiceResponse
     */
    fieldInvoiceId: string;
    /**
     * 
     * @type {PaymentIntent}
     * @memberof IssueReservationSquareInvoiceResponse
     */
    paymentIntent: PaymentIntent;
    /**
     * 
     * @type {Reservation}
     * @memberof IssueReservationSquareInvoiceResponse
     */
    reservation: Reservation;
    /**
     * 
     * @type {boolean}
     * @memberof IssueReservationSquareInvoiceResponse
     */
    reusedExistingInvoice: boolean;
    /**
     * 
     * @type {string}
     * @memberof IssueReservationSquareInvoiceResponse
     */
    squareInvoiceId: string;
}
/**
 * 一度も接触していない顧客は `items` に現れない。「まだ連絡していない」と
 * 「連絡したが記録が無い」を利用側で取り違えないよう、問い合わせた ID を
 * そのまま返して差分を取れるようにする。
 * @export
 * @interface LatestCustomerContactListResponse
 */
export interface LatestCustomerContactListResponse {
    /**
     * 
     * @type {Array<LatestCustomerContactResponse>}
     * @memberof LatestCustomerContactListResponse
     */
    items: Array<LatestCustomerContactResponse>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LatestCustomerContactListResponse
     */
    requestedCustomerIds: Array<string>;
}
/**
 * 
 * @export
 * @interface LatestCustomerContactLookupRequest
 */
export interface LatestCustomerContactLookupRequest {
    /**
     * 最終接触を知りたい顧客 ID。顧客一覧の1ページぶんをそのまま渡す想定。
     * @type {Array<string>}
     * @memberof LatestCustomerContactLookupRequest
     */
    customerIds: Array<string>;
}
/**
 * 
 * @export
 * @interface LatestCustomerContactResponse
 */
export interface LatestCustomerContactResponse {
    /**
     * 取り消し済みを除いた接触回数。
     * @type {number}
     * @memberof LatestCustomerContactResponse
     */
    contactCount: number;
    /**
     * 
     * @type {string}
     * @memberof LatestCustomerContactResponse
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof LatestCustomerContactResponse
     */
    lastChannel: string;
    /**
     * 
     * @type {string}
     * @memberof LatestCustomerContactResponse
     */
    lastContactId: string;
    /**
     * 
     * @type {Date}
     * @memberof LatestCustomerContactResponse
     */
    lastContactedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof LatestCustomerContactResponse
     */
    lastDirection: string;
    /**
     * 
     * @type {string}
     * @memberof LatestCustomerContactResponse
     */
    lastOutcome?: string | null;
}

/**
 * 
 * @export
 */
export const LeaveRequestStatus = {
    Requested: 'requested',
    Approved: 'approved',
    Rejected: 'rejected',
    Cancelled: 'cancelled'
} as const;
export type LeaveRequestStatus = typeof LeaveRequestStatus[keyof typeof LeaveRequestStatus];


/**
 * 
 * @export
 */
export const LeaveRequestType = {
    DayOff: 'day_off',
    PaidLeave: 'paid_leave',
    Unavailable: 'unavailable'
} as const;
export type LeaveRequestType = typeof LeaveRequestType[keyof typeof LeaveRequestType];

/**
 * 
 * @export
 * @interface LowStockAlertListResponse
 */
export interface LowStockAlertListResponse {
    /**
     * 
     * @type {Array<LowStockAlertResponse>}
     * @memberof LowStockAlertListResponse
     */
    items: Array<LowStockAlertResponse>;
}
/**
 * 
 * @export
 * @interface LowStockAlertResponse
 */
export interface LowStockAlertResponse {
    /**
     * 
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    decidedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    decidedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    decisionNote?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    decisionStatus: string;
    /**
     * 
     * @type {number}
     * @memberof LowStockAlertResponse
     */
    preferredOrderQuantity?: number | null;
    /**
     * Always `null`, for the same reason as
     * [`StockLevelResponse::product_name`]: this context stores no product
     * name, and the SKU is the identity here (#724 W4).
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    productName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LowStockAlertResponse
     */
    quantityOnHand: number;
    /**
     * 
     * @type {number}
     * @memberof LowStockAlertResponse
     */
    recommendedOrderQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof LowStockAlertResponse
     */
    reorderPointQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof LowStockAlertResponse
     */
    replenishmentTargetQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof LowStockAlertResponse
     */
    safetyStockQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof LowStockAlertResponse
     */
    shortageQuantity: number;
    /**
     * 
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    skuCode: string;
    /**
     * 
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    stockItemId: string;
    /**
     * 
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    stockLevelId: string;
    /**
     * 
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    warehouseId: string;
    /**
     * 
     * @type {string}
     * @memberof LowStockAlertResponse
     */
    warehouseName: string;
}
/**
 * 
 * @export
 * @interface MembershipActivityActorResponse
 */
export interface MembershipActivityActorResponse {
    /**
     * 
     * @type {string}
     * @memberof MembershipActivityActorResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipActivityActorResponse
     */
    type: string;
}
/**
 * 
 * @export
 * @interface MembershipActivityListResponse
 */
export interface MembershipActivityListResponse {
    /**
     * 
     * @type {Array<MembershipActivityResponse>}
     * @memberof MembershipActivityListResponse
     */
    items: Array<MembershipActivityResponse>;
    /**
     * 
     * @type {string}
     * @memberof MembershipActivityListResponse
     */
    nextCursor?: string | null;
}
/**
 * 
 * @export
 * @interface MembershipActivityResponse
 */
export interface MembershipActivityResponse {
    /**
     * 
     * @type {MembershipActivityActorResponse}
     * @memberof MembershipActivityResponse
     */
    actor: MembershipActivityActorResponse;
    /**
     * 
     * @type {any}
     * @memberof MembershipActivityResponse
     */
    after?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MembershipActivityResponse
     */
    before?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof MembershipActivityResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof MembershipActivityResponse
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipActivityResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipActivityResponse
     */
    kind: string;
    /**
     * 
     * @type {Date}
     * @memberof MembershipActivityResponse
     */
    occurredAt: Date;
    /**
     * 
     * @type {number}
     * @memberof MembershipActivityResponse
     */
    schemaVersion: number;
    /**
     * 
     * @type {number}
     * @memberof MembershipActivityResponse
     */
    seq?: number | null;
    /**
     * 
     * @type {MembershipActivitySourceResponse}
     * @memberof MembershipActivityResponse
     */
    source?: MembershipActivitySourceResponse | null;
    /**
     * 
     * @type {MembershipActivityTargetResponse}
     * @memberof MembershipActivityResponse
     */
    target?: MembershipActivityTargetResponse | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipActivityResponse
     */
    tenantId: string;
}
/**
 * 
 * @export
 * @interface MembershipActivitySourceResponse
 */
export interface MembershipActivitySourceResponse {
    /**
     * 
     * @type {string}
     * @memberof MembershipActivitySourceResponse
     */
    application?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipActivitySourceResponse
     */
    channel?: string | null;
}
/**
 * 
 * @export
 * @interface MembershipActivityTargetResponse
 */
export interface MembershipActivityTargetResponse {
    /**
     * 
     * @type {string}
     * @memberof MembershipActivityTargetResponse
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipActivityTargetResponse
     */
    type: string;
}
/**
 * 
 * @export
 * @interface MembershipConsentItemListResponse
 */
export interface MembershipConsentItemListResponse {
    /**
     * 
     * @type {Array<MembershipConsentItemResponse>}
     * @memberof MembershipConsentItemListResponse
     */
    items: Array<MembershipConsentItemResponse>;
}
/**
 * 
 * @export
 * @interface MembershipConsentItemResponse
 */
export interface MembershipConsentItemResponse {
    /**
     * 
     * @type {boolean}
     * @memberof MembershipConsentItemResponse
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof MembershipConsentItemResponse
     */
    body?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipConsentItemResponse
     */
    consentKey: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipConsentItemResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipConsentItemResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipConsentItemResponse
     */
    label: string;
    /**
     * 
     * @type {boolean}
     * @memberof MembershipConsentItemResponse
     */
    required: boolean;
    /**
     * 
     * @type {number}
     * @memberof MembershipConsentItemResponse
     */
    sortOrder: number;
    /**
     * 
     * @type {string}
     * @memberof MembershipConsentItemResponse
     */
    termsVersion: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipConsentItemResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface MembershipCustomerResponse
 */
export interface MembershipCustomerResponse {
    /**
     * Empty string when the customer has no email address.
     * @type {string}
     * @memberof MembershipCustomerResponse
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipCustomerResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipCustomerResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipCustomerResponse
     */
    phone?: string | null;
}
/**
 * Aggregated membership view for one customer.
 * @export
 * @interface MembershipCustomerViewResponse
 */
export interface MembershipCustomerViewResponse {
    /**
     * 
     * @type {MembershipPlanAssignmentResponse}
     * @memberof MembershipCustomerViewResponse
     */
    activeAssignment?: MembershipPlanAssignmentResponse | null;
    /**
     * 
     * @type {MembershipPlanResponse}
     * @memberof MembershipCustomerViewResponse
     */
    activePlan?: MembershipPlanResponse | null;
    /**
     * 
     * @type {Array<CustomerConsentResponse>}
     * @memberof MembershipCustomerViewResponse
     */
    consents: Array<CustomerConsentResponse>;
    /**
     * 
     * @type {Array<CustomerCredentialResponse>}
     * @memberof MembershipCustomerViewResponse
     */
    credentials: Array<CustomerCredentialResponse>;
    /**
     * 
     * @type {MembershipCustomerResponse}
     * @memberof MembershipCustomerViewResponse
     */
    customer: MembershipCustomerResponse;
    /**
     * The counter sale this registration produced, when a product was sold.
     * @type {MembershipSaleResponse}
     * @memberof MembershipCustomerViewResponse
     */
    sale?: MembershipSaleResponse | null;
    /**
     * 
     * @type {Array<CustomerSubjectResponse>}
     * @memberof MembershipCustomerViewResponse
     */
    subjects: Array<CustomerSubjectResponse>;
}
/**
 * 
 * @export
 * @interface MembershipEntitlementListResponse
 */
export interface MembershipEntitlementListResponse {
    /**
     * 
     * @type {Array<MembershipEntitlementResponse>}
     * @memberof MembershipEntitlementListResponse
     */
    items: Array<MembershipEntitlementResponse>;
}
/**
 * 
 * @export
 * @interface MembershipEntitlementResponse
 */
export interface MembershipEntitlementResponse {
    /**
     * 
     * @type {boolean}
     * @memberof MembershipEntitlementResponse
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof MembershipEntitlementResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipEntitlementResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipEntitlementResponse
     */
    membershipPlanId: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipEntitlementResponse
     */
    productId: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipEntitlementResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {number}
     * @memberof MembershipEntitlementResponse
     */
    validDays?: number | null;
}
/**
 * 
 * @export
 * @interface MembershipOfferingListResponse
 */
export interface MembershipOfferingListResponse {
    /**
     * 
     * @type {Array<MembershipOfferingResponse>}
     * @memberof MembershipOfferingListResponse
     */
    items: Array<MembershipOfferingResponse>;
}
/**
 * 
 * @export
 * @interface MembershipOfferingResponse
 */
export interface MembershipOfferingResponse {
    /**
     * 
     * @type {string}
     * @memberof MembershipOfferingResponse
     */
    billingCycle: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipOfferingResponse
     */
    entitlementId: string;
    /**
     * 
     * @type {number}
     * @memberof MembershipOfferingResponse
     */
    listPrice: number;
    /**
     * 
     * @type {string}
     * @memberof MembershipOfferingResponse
     */
    membershipPlanId: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipOfferingResponse
     */
    membershipPlanName: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipOfferingResponse
     */
    productId: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipOfferingResponse
     */
    productName: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipOfferingResponse
     */
    productStatus: string;
    /**
     * 
     * @type {boolean}
     * @memberof MembershipOfferingResponse
     */
    sellable: boolean;
    /**
     * 
     * @type {number}
     * @memberof MembershipOfferingResponse
     */
    validDays?: number | null;
}
/**
 * 
 * @export
 * @interface MembershipPlanAssignmentResponse
 */
export interface MembershipPlanAssignmentResponse {
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanAssignmentResponse
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanAssignmentResponse
     */
    endedOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanAssignmentResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanAssignmentResponse
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanAssignmentResponse
     */
    planId: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanAssignmentResponse
     */
    startedOn: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanAssignmentResponse
     */
    status: string;
}
/**
 * 
 * @export
 * @interface MembershipPlanListResponse
 */
export interface MembershipPlanListResponse {
    /**
     * 
     * @type {Array<MembershipPlanResponse>}
     * @memberof MembershipPlanListResponse
     */
    items: Array<MembershipPlanResponse>;
}
/**
 * 
 * @export
 * @interface MembershipPlanResponse
 */
export interface MembershipPlanResponse {
    /**
     * 
     * @type {boolean}
     * @memberof MembershipPlanResponse
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanResponse
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof MembershipPlanResponse
     */
    feeJpy?: number | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanResponse
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof MembershipPlanResponse
     */
    sortOrder: number;
    /**
     * 
     * @type {string}
     * @memberof MembershipPlanResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {number}
     * @memberof MembershipPlanResponse
     */
    validDays?: number | null;
}
/**
 * 
 * @export
 * @interface MembershipRosterEntryResponse
 */
export interface MembershipRosterEntryResponse {
    /**
     * 
     * @type {string}
     * @memberof MembershipRosterEntryResponse
     */
    assignmentStatus: string;
    /**
     * 今日この割り当てが有効か。`assignmentStatus` だけでは判定できない。
     * @type {boolean}
     * @memberof MembershipRosterEntryResponse
     */
    current: boolean;
    /**
     * 
     * @type {string}
     * @memberof MembershipRosterEntryResponse
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipRosterEntryResponse
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipRosterEntryResponse
     */
    endedOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipRosterEntryResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipRosterEntryResponse
     */
    nameKana?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipRosterEntryResponse
     */
    phone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipRosterEntryResponse
     */
    planId: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipRosterEntryResponse
     */
    planName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipRosterEntryResponse
     */
    startedOn: string;
    /**
     * 
     * @type {number}
     * @memberof MembershipRosterEntryResponse
     */
    subjectCount: number;
}
/**
 * 
 * @export
 * @interface MembershipRosterResponse
 */
export interface MembershipRosterResponse {
    /**
     * 
     * @type {boolean}
     * @memberof MembershipRosterResponse
     */
    hasMore: boolean;
    /**
     * 
     * @type {Array<MembershipRosterEntryResponse>}
     * @memberof MembershipRosterResponse
     */
    items: Array<MembershipRosterEntryResponse>;
}
/**
 * What the counter sale recorded, or why it did not.
 * 
 * The customer, their consents and their membership are written before the
 * sale, in different tables, and cannot be rolled back together. Failing the
 * whole request when only the sale fails would leave the operator looking at
 * an error with a registered customer behind it, and the obvious response —
 * submit again — creates a second customer.
 * 
 * So the sale is best effort and says so out loud. `orderId` present means
 * the money is recorded; `error` present means it is not and somebody has to
 * ring it up. What must never happen is neither: silence would be the same
 * unrecorded revenue this whole change exists to fix.
 * @export
 * @interface MembershipSaleResponse
 */
export interface MembershipSaleResponse {
    /**
     * 
     * @type {string}
     * @memberof MembershipSaleResponse
     */
    error?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipSaleResponse
     */
    orderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipSaleResponse
     */
    productId: string;
}
/**
 * 
 * @export
 * @interface MessageResponse
 */
export interface MessageResponse {
    /**
     * 
     * @type {string}
     * @memberof MessageResponse
     */
    message: string;
}
/**
 * 
 * @export
 * @interface OkResponse
 */
export interface OkResponse {
    /**
     * 
     * @type {boolean}
     * @memberof OkResponse
     */
    ok: boolean;
}
/**
 * 
 * @export
 * @interface OperatorBillingAccountResponse
 */
export interface OperatorBillingAccountResponse {
    /**
     * 
     * @type {string}
     * @memberof OperatorBillingAccountResponse
     */
    billingAccountId: string;
    /**
     * 
     * @type {string}
     * @memberof OperatorBillingAccountResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof OperatorBillingAccountResponse
     */
    operatorId: string;
}
/**
 * 
 * @export
 * @interface OrderEntryPointResponse
 */
export interface OrderEntryPointResponse {
    /**
     * 
     * @type {boolean}
     * @memberof OrderEntryPointResponse
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderEntryPointResponse
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof OrderEntryPointResponse
     */
    idleTimeoutSecs: number;
    /**
     * 
     * @type {number}
     * @memberof OrderEntryPointResponse
     */
    idleWarningSecs: number;
    /**
     * `qr`, `kiosk`, or `staff`.
     * @type {string}
     * @memberof OrderEntryPointResponse
     */
    mode: string;
    /**
     * 
     * @type {number}
     * @memberof OrderEntryPointResponse
     */
    sessionTtlSecs: number;
    /**
     * 
     * @type {string}
     * @memberof OrderEntryPointResponse
     */
    storeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntryPointResponse
     */
    storeName: string;
    /**
     * 
     * @type {string}
     * @memberof OrderEntryPointResponse
     */
    tableName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntryPointResponse
     */
    tableNumber?: string | null;
}
/**
 * The create and rotate responses, and only those, carry the token.
 * @export
 * @interface OrderEntryPointWithTokenResponse
 */
export interface OrderEntryPointWithTokenResponse {
    /**
     * 
     * @type {boolean}
     * @memberof OrderEntryPointWithTokenResponse
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderEntryPointWithTokenResponse
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof OrderEntryPointWithTokenResponse
     */
    idleTimeoutSecs: number;
    /**
     * 
     * @type {number}
     * @memberof OrderEntryPointWithTokenResponse
     */
    idleWarningSecs: number;
    /**
     * `qr`, `kiosk`, or `staff`.
     * @type {string}
     * @memberof OrderEntryPointWithTokenResponse
     */
    mode: string;
    /**
     * 
     * @type {number}
     * @memberof OrderEntryPointWithTokenResponse
     */
    sessionTtlSecs: number;
    /**
     * 
     * @type {string}
     * @memberof OrderEntryPointWithTokenResponse
     */
    storeId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderEntryPointWithTokenResponse
     */
    storeName: string;
    /**
     * 
     * @type {string}
     * @memberof OrderEntryPointWithTokenResponse
     */
    tableName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderEntryPointWithTokenResponse
     */
    tableNumber?: string;
    /**
     * Printed into the QR. Shown once and never readable again.
     * @type {string}
     * @memberof OrderEntryPointWithTokenResponse
     */
    publicToken: string;
}
/**
 * 
 * @export
 * @interface OrderItemResponse
 */
export interface OrderItemResponse {
    /**
     * The product's own price, before the variant and option adjustments.
     * @type {number}
     * @memberof OrderItemResponse
     */
    baseUnitPriceNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof OrderItemResponse
     */
    id: string;
    /**
     * Free-text note for this line, e.g. a kitchen instruction.
     * @type {string}
     * @memberof OrderItemResponse
     */
    note?: string | null;
    /**
     * 
     * @type {Array<SelectedOptionResponse>}
     * @memberof OrderItemResponse
     */
    options: Array<SelectedOptionResponse>;
    /**
     * Per-unit sum of the chosen options.
     * @type {number}
     * @memberof OrderItemResponse
     */
    optionsTotalNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof OrderItemResponse
     */
    productId: string;
    /**
     * 
     * @type {string}
     * @memberof OrderItemResponse
     */
    productName: string;
    /**
     * 
     * @type {number}
     * @memberof OrderItemResponse
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof OrderItemResponse
     */
    subtotalNanodollar: number;
    /**
     * Effective price per unit: base + variant + options.
     * @type {number}
     * @memberof OrderItemResponse
     */
    unitPriceNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof OrderItemResponse
     */
    variantId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderItemResponse
     */
    variantName?: string | null;
}
/**
 * 
 * @export
 * @interface OrderListResponse
 */
export interface OrderListResponse {
    /**
     * 
     * @type {Array<CrateOrderApiOrderResponse>}
     * @memberof OrderListResponse
     */
    items: Array<CrateOrderApiOrderResponse>;
}
/**
 * 
 * @export
 * @interface OrderProductListResponse
 */
export interface OrderProductListResponse {
    /**
     * 
     * @type {boolean}
     * @memberof OrderProductListResponse
     */
    hasNextPage: boolean;
    /**
     * 
     * @type {Array<ProductRestResponse>}
     * @memberof OrderProductListResponse
     */
    items: Array<ProductRestResponse>;
    /**
     * 
     * @type {number}
     * @memberof OrderProductListResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof OrderProductListResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof OrderProductListResponse
     */
    totalCount: number;
}
/**
 * 商品ごとの選択肢のまとまり (#1137)。
 * 
 * 変種が「同じ商品の別の姿」なのに対し、こちらは「その姿に足すもの」。
 * 値段は差分で述べる (「エスプレッソショット +100円」)。
 * @export
 * @interface OrderProductOptionGroupRequest
 */
export interface OrderProductOptionGroupRequest {
    /**
     * 省略すると採番する。更新で既存グループを指すときは必須。
     * @type {string}
     * @memberof OrderProductOptionGroupRequest
     */
    id?: string | null;
    /**
     * 最大選択数。`single` では 1 に丸められる。
     * @type {number}
     * @memberof OrderProductOptionGroupRequest
     */
    maxSelect?: number | null;
    /**
     * 最低選択数。`1` 以上で必須の選択になる。
     * @type {number}
     * @memberof OrderProductOptionGroupRequest
     */
    minSelect?: number | null;
    /**
     * 
     * @type {string}
     * @memberof OrderProductOptionGroupRequest
     */
    name: string;
    /**
     * 
     * @type {Array<OrderProductOptionRequest>}
     * @memberof OrderProductOptionGroupRequest
     */
    options?: Array<OrderProductOptionRequest> | null;
    /**
     * `single` (既定) か `multiple`。
     * @type {string}
     * @memberof OrderProductOptionGroupRequest
     */
    selectionType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderProductOptionGroupRequest
     */
    sortOrder?: number | null;
    /**
     * 
     * @type {string}
     * @memberof OrderProductOptionGroupRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface OrderProductOptionRequest
 */
export interface OrderProductOptionRequest {
    /**
     * 
     * @type {string}
     * @memberof OrderProductOptionRequest
     */
    currency?: string | null;
    /**
     * 省略すると採番する。
     * @type {string}
     * @memberof OrderProductOptionRequest
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderProductOptionRequest
     */
    name: string;
    /**
     * 単価に足す額。負値も許す。
     * @type {number}
     * @memberof OrderProductOptionRequest
     */
    priceDelta?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderProductOptionRequest
     */
    sortOrder?: number | null;
    /**
     * 
     * @type {string}
     * @memberof OrderProductOptionRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface OrderProductVariantListResponse
 */
export interface OrderProductVariantListResponse {
    /**
     * 
     * @type {Array<ProductVariantRestResponse>}
     * @memberof OrderProductVariantListResponse
     */
    items: Array<ProductVariantRestResponse>;
}
/**
 * 
 * @export
 * @interface OrderProductVariationRequest
 */
export interface OrderProductVariationRequest {
    /**
     * 
     * @type {string}
     * @memberof OrderProductVariationRequest
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderProductVariationRequest
     */
    currency: string;
    /**
     * 
     * @type {any}
     * @memberof OrderProductVariationRequest
     */
    metadata?: any | null;
    /**
     * 
     * @type {string}
     * @memberof OrderProductVariationRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OrderProductVariationRequest
     */
    publicationDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderProductVariationRequest
     */
    publicationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderProductVariationRequest
     */
    recurring?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderProductVariationRequest
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderProductVariationRequest
     */
    unitAmount: number;
}
/**
 * 
 * @export
 * @interface OrderResponse
 */
export interface OrderResponse {
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    cancelledAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    cartId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    checkoutUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    confirmedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    customerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    customerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    deliveredAt?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderResponse
     */
    discountNanodollar: number;
    /**
     * `pickup`, `delivery`, or `dine_in`.
     * @type {string}
     * @memberof OrderResponse
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    id: string;
    /**
     * 
     * @type {Array<OrderItemResponse>}
     * @memberof OrderResponse
     */
    items: Array<OrderItemResponse>;
    /**
     * How the order was entered: `qr`, `kiosk`, `staff`, or `online`.
     * 
     * Server-derived, and `None` on every order placed before the column
     * existed. A staff board reads the route from here rather than taking
     * apart an encoded `sales_channel_detail`.
     * @type {string}
     * @memberof OrderResponse
     */
    orderEntryMode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    paymentMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    paymentStatus: string;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    pickedUpAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    pickupDeadline?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    pickupRequestedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    readyAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    refundedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    salesChannel: string;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    salesChannelDetail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    sessionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    shippedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    shippingAddress?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderResponse
     */
    shippingFeeNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    shippingName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    shippingPhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    sourceCampaign?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    sourceMedium?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof OrderResponse
     */
    subtotalNanodollar: number;
    /**
     * Seat or table the dine-in order is served to.
     * @type {string}
     * @memberof OrderResponse
     */
    tableNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    tenantId: string;
    /**
     * 
     * @type {number}
     * @memberof OrderResponse
     */
    totalNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    userId?: string | null;
}
/**
 * What a caller may learn about the session it already holds.
 * @export
 * @interface OrderSessionResponse
 */
export interface OrderSessionResponse {
    /**
     * 
     * @type {PublicOrderEntryPointResponse}
     * @memberof OrderSessionResponse
     */
    entryPoint: PublicOrderEntryPointResponse;
    /**
     * 
     * @type {string}
     * @memberof OrderSessionResponse
     */
    expiresAt: string;
    /**
     * Present once this session has placed an order.
     * @type {string}
     * @memberof OrderSessionResponse
     */
    orderId?: string | null;
    /**
     * `active`, `submitting`, `placed`, or `unknown`.
     * @type {string}
     * @memberof OrderSessionResponse
     */
    state: string;
}
/**
 * 
 * @export
 * @interface PaymentIntent
 */
export interface PaymentIntent {
    /**
     * 
     * @type {number}
     * @memberof PaymentIntent
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    checkoutUrl?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PaymentIntent
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    currency: string;
    /**
     * 
     * @type {Date}
     * @memberof PaymentIntent
     */
    expiresAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    holdId: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    idempotencyKey: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    intentType: string;
    /**
     * 
     * @type {Date}
     * @memberof PaymentIntent
     */
    paidAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    provider: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    providerFlow: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    referenceId: string;
    /**
     * 
     * @type {Date}
     * @memberof PaymentIntent
     */
    refundedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    reservationId: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    squareOrderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    squarePaymentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    squarePaymentLinkId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    squareRefundId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    squareWebhookEventId?: string | null;
    /**
     * 
     * @type {PaymentIntentStatus}
     * @memberof PaymentIntent
     */
    status: PaymentIntentStatus;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof PaymentIntent
     */
    updatedAt: Date;
}



/**
 * 
 * @export
 */
export const PaymentIntentStatus = {
    RequiresPayment: 'requires_payment',
    CheckoutCreated: 'checkout_created',
    Paid: 'paid',
    Expired: 'expired',
    Cancelled: 'cancelled',
    Failed: 'failed',
    RefundPending: 'refund_pending',
    Refunded: 'refunded',
    PartiallyRefunded: 'partially_refunded'
} as const;
export type PaymentIntentStatus = typeof PaymentIntentStatus[keyof typeof PaymentIntentStatus];

/**
 * 
 * @export
 * @interface PayoutReportItemResponse
 */
export interface PayoutReportItemResponse {
    /**
     * Coupon code applied.
     * @type {string}
     * @memberof PayoutReportItemResponse
     */
    couponCode: string;
    /**
     * Discount amount.
     * @type {number}
     * @memberof PayoutReportItemResponse
     */
    discountAmount: number;
    /**
     * Net amount after discount.
     * @type {number}
     * @memberof PayoutReportItemResponse
     */
    netAmount: number;
    /**
     * Order ID.
     * @type {string}
     * @memberof PayoutReportItemResponse
     */
    orderId: string;
    /**
     * Payout amount.
     * @type {number}
     * @memberof PayoutReportItemResponse
     */
    payoutAmount: number;
    /**
     * Subtotal before discount.
     * @type {number}
     * @memberof PayoutReportItemResponse
     */
    subtotal: number;
}
/**
 * 
 * @export
 * @interface PayoutReportResponse
 */
export interface PayoutReportResponse {
    /**
     * Report ID.
     * @type {string}
     * @memberof PayoutReportResponse
     */
    id: string;
    /**
     * Number of items in the report.
     * @type {number}
     * @memberof PayoutReportResponse
     */
    itemCount: number;
    /**
     * Individual payout items.
     * @type {Array<PayoutReportItemResponse>}
     * @memberof PayoutReportResponse
     */
    items: Array<PayoutReportItemResponse>;
    /**
     * Period end date.
     * @type {string}
     * @memberof PayoutReportResponse
     */
    periodEnd: string;
    /**
     * Period start date.
     * @type {string}
     * @memberof PayoutReportResponse
     */
    periodStart: string;
    /**
     * Total payout amount.
     * @type {number}
     * @memberof PayoutReportResponse
     */
    totalPayout: number;
    /**
     * Total sales amount.
     * @type {number}
     * @memberof PayoutReportResponse
     */
    totalSales: number;
}
/**
 * Deliberately tiny.
 * 
 * Where the order goes, which seat serves it, how it is handed over and which
 * channel it belongs to are all resolved from the entry point. `deny_unknown_fields`
 * is what makes that enforceable: a client that tries to add `table_number`
 * gets a 400 instead of being quietly ignored, which is the difference
 * between a contract and a hope.
 * @export
 * @interface PlacePublicOrderRequest
 */
export interface PlacePublicOrderRequest {
    /**
     * The name called out when the order is ready. Optional, and the only
     * personal data this surface accepts.
     * @type {string}
     * @memberof PlacePublicOrderRequest
     */
    customerName?: string | null;
    /**
     * 
     * @type {Array<PublicOrderLine>}
     * @memberof PlacePublicOrderRequest
     */
    items: Array<PublicOrderLine>;
}
/**
 * A named set of choices on a product, e.g. "Size" or "Toppings".
 * @export
 * @interface ProductOptionGroupResponse
 */
export interface ProductOptionGroupResponse {
    /**
     * 
     * @type {string}
     * @memberof ProductOptionGroupResponse
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof ProductOptionGroupResponse
     */
    maxSelect: number;
    /**
     * 
     * @type {number}
     * @memberof ProductOptionGroupResponse
     */
    minSelect: number;
    /**
     * 
     * @type {string}
     * @memberof ProductOptionGroupResponse
     */
    name: string;
    /**
     * 
     * @type {Array<ProductOptionResponse>}
     * @memberof ProductOptionGroupResponse
     */
    options: Array<ProductOptionResponse>;
    /**
     * 
     * @type {boolean}
     * @memberof ProductOptionGroupResponse
     */
    required: boolean;
    /**
     * `single` or `multiple`.
     * @type {string}
     * @memberof ProductOptionGroupResponse
     */
    selectionType: string;
    /**
     * 
     * @type {number}
     * @memberof ProductOptionGroupResponse
     */
    sortOrder: number;
}
/**
 * One choice within an option group.
 * @export
 * @interface ProductOptionResponse
 */
export interface ProductOptionResponse {
    /**
     * 
     * @type {string}
     * @memberof ProductOptionResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProductOptionResponse
     */
    name: string;
    /**
     * Amount this option adds to the unit price.
     * @type {number}
     * @memberof ProductOptionResponse
     */
    priceDeltaNanodollar: number;
    /**
     * 
     * @type {number}
     * @memberof ProductOptionResponse
     */
    sortOrder: number;
}
/**
 * 
 * @export
 * @interface ProductResponse
 */
export interface ProductResponse {
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    billingCycle: string;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    categoryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductResponse
     */
    imageIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    kind: string;
    /**
     * 
     * @type {number}
     * @memberof ProductResponse
     */
    listPrice: number;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    publicationDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    publicationName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductResponse
     */
    weightGrams?: number | null;
}
/**
 * REST response for an order product.
 * 
 * This mirrors the GraphQL `Product` type (`order_model::Product`) field for
 * field, because the two surfaces describe the same row and clients read them
 * interchangeably. It is a separate type because that file is
 * GraphQL-schema-owned and cannot derive `utoipa::ToSchema`.
 * 
 * REST additionally carries `categoryId` and `storefrontProductId` (#1136).
 * Both belong to the storefront projection, which has no GraphQL surface
 * (`/v1/graphql` is quarantined), so REST builds this straight from the
 * `OrderProduct` row.
 * @export
 * @interface ProductRestResponse
 */
export interface ProductRestResponse {
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    billingCycle: string;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    category?: string | null;
    /**
     * Storefront category this product is filed under, when it has one.
     * @type {string}
     * @memberof ProductRestResponse
     */
    categoryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductRestResponse
     */
    imageFileIds: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductRestResponse
     */
    imageStorageKeys: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    janCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    kind: string;
    /**
     * 
     * @type {number}
     * @memberof ProductRestResponse
     */
    listPrice: number;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    publicationDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    publicationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    publicationStatus: string;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    skuCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    status: string;
    /**
     * Storefront catalog product this product is published as.
     * 
     * `null` until the product is first created or updated with
     * `publicationStatus: "PUBLIC"`. This is the id `/v1/storekit/products`
     * lists it under and the id carts take, so consumers can link the two
     * stores by id instead of matching on name (#1136).
     * @type {string}
     * @memberof ProductRestResponse
     */
    storefrontProductId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    subcategory?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductRestResponse
     */
    tags: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    upcCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductRestResponse
     */
    updatedAt: string;
}
/**
 * Everything a storefront needs to render a product's choices.
 * @export
 * @interface ProductSelectionsResponse
 */
export interface ProductSelectionsResponse {
    /**
     * 
     * @type {Array<ProductOptionGroupResponse>}
     * @memberof ProductSelectionsResponse
     */
    optionGroups: Array<ProductOptionGroupResponse>;
    /**
     * 
     * @type {string}
     * @memberof ProductSelectionsResponse
     */
    productId: string;
    /**
     * 
     * @type {Array<ProductVariantOptionResponse>}
     * @memberof ProductSelectionsResponse
     */
    variants: Array<ProductVariantOptionResponse>;
}
/**
 * A variant a customer may pick, e.g. hot or iced.
 * @export
 * @interface ProductVariantOptionResponse
 */
export interface ProductVariantOptionResponse {
    /**
     * 
     * @type {string}
     * @memberof ProductVariantOptionResponse
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof ProductVariantOptionResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProductVariantOptionResponse
     */
    name: string;
    /**
     * Amount this variant adds to the product's list price.
     * @type {number}
     * @memberof ProductVariantOptionResponse
     */
    priceDeltaNanodollar: number;
}
/**
 * REST-facing mirror of the GraphQL `ProductVariant` type
 * (`order_model::ProductVariant`).
 * 
 * `ProductVariant.metadata` is an `Option<async_graphql::Json<serde_json::Value>>`,
 * which has no `ToSchema` impl and is owned by the GraphQL schema. Since
 * `async_graphql::Json<T>` serializes transparently as `T`, unwrapping it to
 * a plain `Option<serde_json::Value>` here produces an identical JSON wire
 * format while allowing `ToSchema` to be derived.
 * @export
 * @interface ProductVariantRestResponse
 */
export interface ProductVariantRestResponse {
    /**
     * 
     * @type {string}
     * @memberof ProductVariantRestResponse
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof ProductVariantRestResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof ProductVariantRestResponse
     */
    id: string;
    /**
     * 
     * @type {any}
     * @memberof ProductVariantRestResponse
     */
    metadata?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ProductVariantRestResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProductVariantRestResponse
     */
    productId: string;
    /**
     * 
     * @type {string}
     * @memberof ProductVariantRestResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof ProductVariantRestResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof ProductVariantRestResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse {
    /**
     * 
     * @type {string}
     * @memberof ProfileResponse
     */
    defaultTenantId?: string | null;
    /**
     * 
     * @type {Array<ProfileTenant>}
     * @memberof ProfileResponse
     */
    tenants: Array<ProfileTenant>;
    /**
     * 
     * @type {ProfileUser}
     * @memberof ProfileResponse
     */
    user: ProfileUser;
}
/**
 * 
 * @export
 * @interface ProfileTenant
 */
export interface ProfileTenant {
    /**
     * 
     * @type {ProfileTenantExtension}
     * @memberof ProfileTenant
     */
    extension: ProfileTenantExtension;
    /**
     * 
     * @type {string}
     * @memberof ProfileTenant
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileTenant
     */
    name: string;
}
/**
 * 
 * @export
 * @interface ProfileTenantExtension
 */
export interface ProfileTenantExtension {
    /**
     * 
     * @type {boolean}
     * @memberof ProfileTenantExtension
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProfileTenantExtension
     */
    key: string;
}
/**
 * 
 * @export
 * @interface ProfileUser
 */
export interface ProfileUser {
    /**
     * 
     * @type {string}
     * @memberof ProfileUser
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProfileUser
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProfileUser
     */
    onboardingCompleted?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ProfileUser
     */
    sub?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProfileUser
     */
    username: string;
}
/**
 * The variant and options are named by identifier only.
 * 
 * This is what makes the selection safe to accept from an anonymous caller:
 * the amount each choice adds is read from the catalog master server-side, so
 * a request states *what* was chosen and never *what it costs*.
 * @export
 * @interface PublicAddCartItemRequest
 */
export interface PublicAddCartItemRequest {
    /**
     * Free-text note for this line, e.g. a kitchen instruction.
     * @type {string}
     * @memberof PublicAddCartItemRequest
     */
    note?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PublicAddCartItemRequest
     */
    optionIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof PublicAddCartItemRequest
     */
    productId: string;
    /**
     * 
     * @type {number}
     * @memberof PublicAddCartItemRequest
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof PublicAddCartItemRequest
     */
    variantId?: string | null;
}
/**
 * 
 * @export
 * @interface PublicCartItemResponse
 */
export interface PublicCartItemResponse {
    /**
     * The product's own price, before the variant and option adjustments.
     * @type {number}
     * @memberof PublicCartItemResponse
     */
    baseUnitPriceNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof PublicCartItemResponse
     */
    id: string;
    /**
     * Free-text note for this line, e.g. a kitchen instruction.
     * @type {string}
     * @memberof PublicCartItemResponse
     */
    note?: string | null;
    /**
     * 
     * @type {Array<PublicSelectedOptionResponse>}
     * @memberof PublicCartItemResponse
     */
    options: Array<PublicSelectedOptionResponse>;
    /**
     * Per-unit sum of the chosen options.
     * @type {number}
     * @memberof PublicCartItemResponse
     */
    optionsTotalNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof PublicCartItemResponse
     */
    productId: string;
    /**
     * 
     * @type {number}
     * @memberof PublicCartItemResponse
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof PublicCartItemResponse
     */
    subtotalNanodollar: number;
    /**
     * Effective price per unit: base + variant + options, all resolved from
     * the catalog. The request never states what a choice costs.
     * @type {number}
     * @memberof PublicCartItemResponse
     */
    unitPriceNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof PublicCartItemResponse
     */
    variantId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCartItemResponse
     */
    variantName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PublicCartItemResponse
     */
    variantPriceDeltaNanodollar: number;
}
/**
 * Deliberately narrower than `CartResponse`.
 * 
 * `user_id` and `session_id` are omitted: they name the shopper, and the only
 * thing this route asks of its caller is possession of the cart identifier.
 * `tenant_id` is omitted because the caller supplied it in the path.
 * @export
 * @interface PublicCartResponse
 */
export interface PublicCartResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicCartResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof PublicCartResponse
     */
    expiresAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCartResponse
     */
    id: string;
    /**
     * 
     * @type {Array<PublicCartItemResponse>}
     * @memberof PublicCartResponse
     */
    items: Array<PublicCartItemResponse>;
    /**
     * 
     * @type {string}
     * @memberof PublicCartResponse
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof PublicCartResponse
     */
    subtotalNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof PublicCartResponse
     */
    updatedAt: string;
}
/**
 * Deliberately narrower than `CheckoutRequest`.
 * 
 * - No `customer_id`. The StoreKit field is stamped onto the order without
 *   being resolved, so an anonymous caller could file its order under
 *   somebody else's customer record and put it in that customer's history.
 * 
 * `coupon_code` is accepted. It is re-validated and re-priced against
 * `cart_id` server-side, so submitting one here is worth no more to a
 * guesser than the preview route already allows, and a code that does not
 * apply fails the checkout rather than quietly going through at full price.
 * 
 * `customer_id` remains available on the authenticated StoreKit route, where
 * the caller is a known operator.
 * @export
 * @interface PublicCheckoutRequest
 */
export interface PublicCheckoutRequest {
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    cancelUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    cartId: string;
    /**
     * Applied to `cart_id` and re-priced server-side.
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    couponCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    customerName?: string | null;
    /**
     * `pickup`, `delivery`, or `dine_in`.
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    paymentMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    pickupRequestedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    salesChannel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    salesChannelDetail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    shippingAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    shippingName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    shippingPhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    sourceCampaign?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    sourceMedium?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    storeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    successUrl?: string | null;
    /**
     * Seat or table a dine-in order is served to (#1138). Free text a diner
     * reads off the table, so it is length-bounded and trimmed rather than
     * resolved: naming a seat claims nothing and grants nothing.
     * @type {string}
     * @memberof PublicCheckoutRequest
     */
    tableNumber?: string | null;
}
/**
 * What a shopper types in, checked against the cart they are holding.
 * @export
 * @interface PublicCouponPreviewRequest
 */
export interface PublicCouponPreviewRequest {
    /**
     * 
     * @type {string}
     * @memberof PublicCouponPreviewRequest
     */
    code: string;
}
/**
 * Deliberately narrower than `CouponResponse`.
 * 
 * The discount table is not published: no coupon id, no discount type or
 * value, no usage counters, no expiry. What comes back is the arithmetic for
 * *this* cart — what it costs now, what comes off, what it would cost — which
 * is what a checkout screen has to show, and not something a caller could
 * reassemble the table from.
 * @export
 * @interface PublicCouponPreviewResponse
 */
export interface PublicCouponPreviewResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicCouponPreviewResponse
     */
    code: string;
    /**
     * 
     * @type {number}
     * @memberof PublicCouponPreviewResponse
     */
    discountNanodollar: number;
    /**
     * 
     * @type {number}
     * @memberof PublicCouponPreviewResponse
     */
    subtotalNanodollar: number;
    /**
     * 
     * @type {number}
     * @memberof PublicCouponPreviewResponse
     */
    totalNanodollar: number;
}
/**
 * 
 * @export
 * @interface PublicCustomFieldDefinitionListResponse
 */
export interface PublicCustomFieldDefinitionListResponse {
    /**
     * 
     * @type {Array<PublicCustomFieldDefinitionResponse>}
     * @memberof PublicCustomFieldDefinitionListResponse
     */
    items: Array<PublicCustomFieldDefinitionResponse>;
}
/**
 * 
 * @export
 * @interface PublicCustomFieldDefinitionResponse
 */
export interface PublicCustomFieldDefinitionResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicCustomFieldDefinitionResponse
     */
    fieldKey: string;
    /**
     * Known values: text, email, tel, number, date, select, boolean. Clients must accept future custom field types.
     * @type {string}
     * @memberof PublicCustomFieldDefinitionResponse
     */
    fieldType: string;
    /**
     * 
     * @type {string}
     * @memberof PublicCustomFieldDefinitionResponse
     */
    label: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PublicCustomFieldDefinitionResponse
     */
    options?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof PublicCustomFieldDefinitionResponse
     */
    placeholder?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PublicCustomFieldDefinitionResponse
     */
    required: boolean;
    /**
     * 
     * @type {number}
     * @memberof PublicCustomFieldDefinitionResponse
     */
    sortOrder: number;
}
/**
 * 
 * @export
 * @interface PublicInvoiceCheckoutResponse
 */
export interface PublicInvoiceCheckoutResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceCheckoutResponse
     */
    checkoutUrl: string;
}
/**
 * 
 * @export
 * @interface PublicInvoicePaymentConfirmationRequest
 */
export interface PublicInvoicePaymentConfirmationRequest {
    /**
     * 
     * @type {string}
     * @memberof PublicInvoicePaymentConfirmationRequest
     */
    paymentIntentId: string;
}
/**
 * 
 * @export
 * @interface PublicInvoicePaymentConfirmationResponse
 */
export interface PublicInvoicePaymentConfirmationResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicInvoicePaymentConfirmationResponse
     */
    invoiceId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoicePaymentConfirmationResponse
     */
    status: string;
}
/**
 * 
 * @export
 * @interface PublicInvoicePaymentIntentResponse
 */
export interface PublicInvoicePaymentIntentResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicInvoicePaymentIntentResponse
     */
    clientSecret: string;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoicePaymentIntentResponse
     */
    paymentIntentId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoicePaymentIntentResponse
     */
    publishableKey: string;
    /**
     * Connect connected account to initialise Stripe Elements against.
     * Absent while the tenant settles on the platform account.
     * @type {string}
     * @memberof PublicInvoicePaymentIntentResponse
     */
    stripeAccount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoicePaymentIntentResponse
     */
    stripeEnvironment: string;
}
/**
 * 
 * @export
 * @interface PublicInvoiceResponse
 */
export interface PublicInvoiceResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceResponse
     */
    clientName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceResponse
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceResponse
     */
    dueDate: string;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceResponse
     */
    invoiceNumber: string;
    /**
     * 
     * @type {Array<InvoiceLineItemResponse>}
     * @memberof PublicInvoiceResponse
     */
    lineItems: Array<InvoiceLineItemResponse>;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceResponse
     */
    nonPostingReason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceResponse
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceResponse
     */
    paymentLinkUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceResponse
     */
    postingDisposition: string;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceResponse
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof PublicInvoiceResponse
     */
    subtotalAmount: number;
    /**
     * 
     * @type {number}
     * @memberof PublicInvoiceResponse
     */
    taxAmount: number;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceResponse
     */
    tenantId: string;
    /**
     * 
     * @type {number}
     * @memberof PublicInvoiceResponse
     */
    totalAmount: number;
}
/**
 * 
 * @export
 * @interface PublicInvoiceStripePublishableKeyResponse
 */
export interface PublicInvoiceStripePublishableKeyResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceStripePublishableKeyResponse
     */
    publishableKey: string;
    /**
     * Connect connected account to initialise Stripe Elements against.
     * Absent while the tenant settles on the platform account.
     * @type {string}
     * @memberof PublicInvoiceStripePublishableKeyResponse
     */
    stripeAccount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicInvoiceStripePublishableKeyResponse
     */
    stripeEnvironment: string;
}
/**
 * 
 * @export
 * @interface PublicMembershipConsentItemResponse
 */
export interface PublicMembershipConsentItemResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicMembershipConsentItemResponse
     */
    body?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicMembershipConsentItemResponse
     */
    consentKey: string;
    /**
     * 
     * @type {string}
     * @memberof PublicMembershipConsentItemResponse
     */
    label: string;
    /**
     * 
     * @type {boolean}
     * @memberof PublicMembershipConsentItemResponse
     */
    required: boolean;
    /**
     * 
     * @type {string}
     * @memberof PublicMembershipConsentItemResponse
     */
    termsVersion: string;
}
/**
 * 
 * @export
 * @interface PublicMembershipRegistrationFormResponse
 */
export interface PublicMembershipRegistrationFormResponse {
    /**
     * 
     * @type {Array<PublicMembershipConsentItemResponse>}
     * @memberof PublicMembershipRegistrationFormResponse
     */
    consentItems: Array<PublicMembershipConsentItemResponse>;
}
/**
 * Public input is intentionally closed: credentials, verification flags,
 * plan assignments, channels, and actor IDs are not accepted.
 * @export
 * @interface PublicMembershipRegistrationRequest
 */
export interface PublicMembershipRegistrationRequest {
    /**
     * 
     * @type {Array<PublicRegistrationConsentRequest>}
     * @memberof PublicMembershipRegistrationRequest
     */
    consents?: Array<PublicRegistrationConsentRequest>;
    /**
     * 
     * @type {PublicRegistrationCustomerRequest}
     * @memberof PublicMembershipRegistrationRequest
     */
    customer: PublicRegistrationCustomerRequest;
    /**
     * 
     * @type {Array<PublicRegistrationSubjectRequest>}
     * @memberof PublicMembershipRegistrationRequest
     */
    subjects: Array<PublicRegistrationSubjectRequest>;
}
/**
 * 
 * @export
 * @interface PublicMembershipRegistrationResponse
 */
export interface PublicMembershipRegistrationResponse {
    /**
     * 
     * @type {number}
     * @memberof PublicMembershipRegistrationResponse
     */
    consentCount: number;
    /**
     * 
     * @type {string}
     * @memberof PublicMembershipRegistrationResponse
     */
    customerId: string;
    /**
     * Public submissions are pre-registrations until staff confirm them in store.
     * @type {string}
     * @memberof PublicMembershipRegistrationResponse
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof PublicMembershipRegistrationResponse
     */
    subjectCount: number;
}
/**
 * What a printed QR is allowed to tell its reader.
 * 
 * The店舗 and seat appear as the names a human can check against the printed
 * sticker. The tenant id, the store id and the entry point id do not appear
 * at all: the caller has no use for them and publishing them would hand an
 * anonymous reader the identifiers every other API is keyed by.
 * @export
 * @interface PublicOrderEntryPointResponse
 */
export interface PublicOrderEntryPointResponse {
    /**
     * `qr` or `kiosk`.
     * @type {string}
     * @memberof PublicOrderEntryPointResponse
     */
    entryMode: string;
    /**
     * 
     * @type {number}
     * @memberof PublicOrderEntryPointResponse
     */
    idleTimeoutSecs: number;
    /**
     * 
     * @type {number}
     * @memberof PublicOrderEntryPointResponse
     */
    idleWarningSecs: number;
    /**
     * 
     * @type {number}
     * @memberof PublicOrderEntryPointResponse
     */
    sessionTtlSecs: number;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderEntryPointResponse
     */
    storeName: string;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderEntryPointResponse
     */
    tableName?: string | null;
}
/**
 * 
 * @export
 * @interface PublicOrderItemResponse
 */
export interface PublicOrderItemResponse {
    /**
     * 
     * @type {number}
     * @memberof PublicOrderItemResponse
     */
    baseUnitPriceNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderItemResponse
     */
    id: string;
    /**
     * Free-text note for this line, e.g. a kitchen instruction.
     * @type {string}
     * @memberof PublicOrderItemResponse
     */
    note?: string | null;
    /**
     * 
     * @type {Array<PublicSelectedOptionResponse>}
     * @memberof PublicOrderItemResponse
     */
    options: Array<PublicSelectedOptionResponse>;
    /**
     * 
     * @type {number}
     * @memberof PublicOrderItemResponse
     */
    optionsTotalNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderItemResponse
     */
    productId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderItemResponse
     */
    productName: string;
    /**
     * 
     * @type {number}
     * @memberof PublicOrderItemResponse
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof PublicOrderItemResponse
     */
    subtotalNanodollar: number;
    /**
     * 
     * @type {number}
     * @memberof PublicOrderItemResponse
     */
    unitPriceNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderItemResponse
     */
    variantId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderItemResponse
     */
    variantName?: string | null;
}
/**
 * One line as the diner chose it.
 * 
 * Ids and a note only. Every amount on the resulting order is priced from the
 * catalog, so there is nothing here for a caller to misstate.
 * @export
 * @interface PublicOrderLine
 */
export interface PublicOrderLine {
    /**
     * Free-text note for this line, e.g. a kitchen instruction.
     * @type {string}
     * @memberof PublicOrderLine
     */
    note?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PublicOrderLine
     */
    optionIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderLine
     */
    productId: string;
    /**
     * 
     * @type {number}
     * @memberof PublicOrderLine
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderLine
     */
    variantId?: string | null;
}
/**
 * What a customer knows about their own order without holding a token.
 * 
 * The pair is the evidence: a phone number alone names a person, and four
 * digits alone name nothing. Together they are what a shop asks at the
 * counter, and the budget on this route is what keeps them from being
 * guessed rather than known.
 * @export
 * @interface PublicOrderLookupRequest
 */
export interface PublicOrderLookupRequest {
    /**
     * Last digits of the order identifier, as printed on the receipt.
     * @type {string}
     * @memberof PublicOrderLookupRequest
     */
    lastDigits: string;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderLookupRequest
     */
    phone: string;
}
/**
 * The order, plus a short-lived handle for reading it again.
 * 
 * The token exists so a confirmation page can refresh without asking for the
 * phone number a second time. It expires, and it is the only thing that
 * opens the by-token read, so it is never put in a URL the caller did not
 * already have to hold.
 * @export
 * @interface PublicOrderLookupResponse
 */
export interface PublicOrderLookupResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicOrderLookupResponse
     */
    expiresAt: string;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderLookupResponse
     */
    lookupToken: string;
    /**
     * 
     * @type {PublicOrderResponse}
     * @memberof PublicOrderLookupResponse
     */
    order: PublicOrderResponse;
}
/**
 * The menu as one answer, because a diner who opened a QR wants the whole
 * board and not a page of it plus a second round trip for its groupings.
 * @export
 * @interface PublicOrderMenuResponse
 */
export interface PublicOrderMenuResponse {
    /**
     * 
     * @type {Array<CategoryResponse>}
     * @memberof PublicOrderMenuResponse
     */
    categories: Array<CategoryResponse>;
    /**
     * 
     * @type {StoreKitListProductResponse}
     * @memberof PublicOrderMenuResponse
     */
    products: StoreKitListProductResponse;
}
/**
 * What the caller needs to show a confirmation screen and, when a payment
 * session was opened, to go pay. It is not an order read: the customer
 * contact details the caller just submitted are not echoed back, so nothing
 * here would help someone who guessed an order identifier.
 * @export
 * @interface PublicOrderResponse
 */
export interface PublicOrderResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicOrderResponse
     */
    checkoutUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderResponse
     */
    createdAt: string;
    /**
     * `pickup`, `delivery`, or `dine_in`.
     * @type {string}
     * @memberof PublicOrderResponse
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderResponse
     */
    id: string;
    /**
     * 
     * @type {Array<PublicOrderItemResponse>}
     * @memberof PublicOrderResponse
     */
    items: Array<PublicOrderItemResponse>;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderResponse
     */
    paymentStatus: string;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderResponse
     */
    pickupDeadline?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderResponse
     */
    pickupRequestedAt?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PublicOrderResponse
     */
    shippingFeeNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderResponse
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof PublicOrderResponse
     */
    subtotalNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof PublicOrderResponse
     */
    tableNumber?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PublicOrderResponse
     */
    totalNanodollar: number;
}
/**
 * A menu row, and whether it can be ordered right now.
 * 
 * Wider than `ProductResponse` by exactly one bit, and narrower than the
 * stock route by everything else: no quantity on hand, no reservation count,
 * no low-stock threshold. A shopper needs to know an item is unavailable
 * before adding it to a cart; how much of it exists is the store's business.
 * @export
 * @interface PublicProductResponse
 */
export interface PublicProductResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicProductResponse
     */
    billingCycle: string;
    /**
     * 
     * @type {string}
     * @memberof PublicProductResponse
     */
    categoryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicProductResponse
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicProductResponse
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PublicProductResponse
     */
    imageIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PublicProductResponse
     */
    kind: string;
    /**
     * 
     * @type {number}
     * @memberof PublicProductResponse
     */
    listPrice: number;
    /**
     * 
     * @type {string}
     * @memberof PublicProductResponse
     */
    name: string;
    /**
     * False only when the product is inventory-tracked and has nothing
     * available. A product with no stock row is not tracked, and a store
     * that does not count an item is always willing to sell it.
     * @type {boolean}
     * @memberof PublicProductResponse
     */
    orderable: boolean;
    /**
     * 
     * @type {string}
     * @memberof PublicProductResponse
     */
    publicationDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicProductResponse
     */
    publicationName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PublicProductResponse
     */
    weightGrams?: number | null;
}
/**
 * 
 * @export
 * @interface PublicRegistrationConsentRequest
 */
export interface PublicRegistrationConsentRequest {
    /**
     * 
     * @type {boolean}
     * @memberof PublicRegistrationConsentRequest
     */
    accepted: boolean;
    /**
     * 
     * @type {string}
     * @memberof PublicRegistrationConsentRequest
     */
    consentKey: string;
}
/**
 * Customer input accepted by the public pre-registration endpoint.
 * @export
 * @interface PublicRegistrationCustomerRequest
 */
export interface PublicRegistrationCustomerRequest {
    /**
     * 
     * @type {string}
     * @memberof PublicRegistrationCustomerRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof PublicRegistrationCustomerRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PublicRegistrationCustomerRequest
     */
    phone: string;
}
/**
 * One subject that will use the membership (pet, child, vehicle, etc.).
 * @export
 * @interface PublicRegistrationSubjectRequest
 */
export interface PublicRegistrationSubjectRequest {
    /**
     * YYYY-MM-DD
     * @type {string}
     * @memberof PublicRegistrationSubjectRequest
     */
    birthDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicRegistrationSubjectRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PublicRegistrationSubjectRequest
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicRegistrationSubjectRequest
     */
    sex?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicRegistrationSubjectRequest
     */
    subjectType: string;
}
/**
 * One chosen option, priced from the catalog master rather than the request.
 * @export
 * @interface PublicSelectedOptionResponse
 */
export interface PublicSelectedOptionResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicSelectedOptionResponse
     */
    groupId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicSelectedOptionResponse
     */
    groupName: string;
    /**
     * 
     * @type {string}
     * @memberof PublicSelectedOptionResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PublicSelectedOptionResponse
     */
    optionId: string;
    /**
     * 
     * @type {number}
     * @memberof PublicSelectedOptionResponse
     */
    priceDeltaNanodollar: number;
}
/**
 * 
 * @export
 * @interface PublicSigningDocumentResponse
 */
export interface PublicSigningDocumentResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicSigningDocumentResponse
     */
    clientName: string;
    /**
     * 
     * @type {string}
     * @memberof PublicSigningDocumentResponse
     */
    contractNumber: string;
    /**
     * 
     * @type {string}
     * @memberof PublicSigningDocumentResponse
     */
    expiresAt: string;
    /**
     * 
     * @type {string}
     * @memberof PublicSigningDocumentResponse
     */
    issuerName: string;
    /**
     * 
     * @type {Array<ContractLineItem>}
     * @memberof PublicSigningDocumentResponse
     */
    lineItems: Array<ContractLineItem>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PublicSigningDocumentResponse
     */
    renderedBodySegments: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PublicSigningDocumentResponse
     */
    title: string;
}
/**
 * 
 * @export
 * @interface PublicSigningErrorResponse
 */
export interface PublicSigningErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicSigningErrorResponse
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof PublicSigningErrorResponse
     */
    message: string;
}
/**
 * 
 * @export
 * @interface PublicSigningSessionResponse
 */
export interface PublicSigningSessionResponse {
    /**
     * 
     * @type {PublicSigningDocumentResponse}
     * @memberof PublicSigningSessionResponse
     */
    document: PublicSigningDocumentResponse;
    /**
     * 
     * @type {PublicSigningSignerResponse}
     * @memberof PublicSigningSessionResponse
     */
    signer: PublicSigningSignerResponse;
    /**
     * 
     * @type {string}
     * @memberof PublicSigningSessionResponse
     */
    status: string;
    /**
     * 
     * @type {Array<SigningFieldDefinition>}
     * @memberof PublicSigningSessionResponse
     */
    values: Array<SigningFieldDefinition>;
}
/**
 * 
 * @export
 * @interface PublicSigningSignerResponse
 */
export interface PublicSigningSignerResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicSigningSignerResponse
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof PublicSigningSignerResponse
     */
    name: string;
}
/**
 * 
 * @export
 * @interface PublicSigningValueInput
 */
export interface PublicSigningValueInput {
    /**
     * 
     * @type {string}
     * @memberof PublicSigningValueInput
     */
    fieldKey: string;
    /**
     * 
     * @type {string}
     * @memberof PublicSigningValueInput
     */
    fieldType: string;
    /**
     * 
     * @type {any}
     * @memberof PublicSigningValueInput
     */
    value: any | null;
}
/**
 * 
 * @export
 * @interface PublicUpdateCartItemRequest
 */
export interface PublicUpdateCartItemRequest {
    /**
     * 
     * @type {string}
     * @memberof PublicUpdateCartItemRequest
     */
    note?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PublicUpdateCartItemRequest
     */
    optionIds?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof PublicUpdateCartItemRequest
     */
    quantity: number;
    /**
     * Omit `variant_id`, `option_ids` and `note` together to change only the
     * quantity; the line then keeps the selection and the price it was added
     * with.
     * @type {string}
     * @memberof PublicUpdateCartItemRequest
     */
    variantId?: string | null;
}
/**
 * 
 * @export
 * @interface PurchaseOrderItemResponse
 */
export interface PurchaseOrderItemResponse {
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderItemResponse
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderItemResponse
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderItemResponse
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderItemResponse
     */
    taxAmount: number;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderItemResponse
     */
    taxCategory: string;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderItemResponse
     */
    unitCost: number;
}
/**
 * 
 * @export
 * @interface PurchaseOrderListResponse
 */
export interface PurchaseOrderListResponse {
    /**
     * 
     * @type {Array<PurchaseOrderResponse>}
     * @memberof PurchaseOrderListResponse
     */
    items: Array<PurchaseOrderResponse>;
}
/**
 * 
 * @export
 * @interface PurchaseOrderResponse
 */
export interface PurchaseOrderResponse {
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    expectedDeliveryDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    invoicedAt?: string | null;
    /**
     * 
     * @type {Array<PurchaseOrderItemResponse>}
     * @memberof PurchaseOrderResponse
     */
    items: Array<PurchaseOrderItemResponse>;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    purchaseOrderNumber: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    receivedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    sentAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderResponse
     */
    subtotalAmount: number;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderResponse
     */
    taxAmount: number;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    taxCategory: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    tenantId: string;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderResponse
     */
    totalAmount: number;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    vendorId: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderResponse
     */
    vendorName: string;
}
/**
 * 
 * @export
 * @interface PurgeResourceTimeSlotsResponse
 */
export interface PurgeResourceTimeSlotsResponse {
    /**
     * 
     * @type {number}
     * @memberof PurgeResourceTimeSlotsResponse
     */
    deleted: number;
    /**
     * 
     * @type {boolean}
     * @memberof PurgeResourceTimeSlotsResponse
     */
    dryRun: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PurgeResourceTimeSlotsResponse
     */
    from: Date;
    /**
     * 
     * @type {string}
     * @memberof PurgeResourceTimeSlotsResponse
     */
    resourceId: string;
    /**
     * 
     * @type {Date}
     * @memberof PurgeResourceTimeSlotsResponse
     */
    to: Date;
}
/**
 * Outcome of a purge run, in rows.
 * @export
 * @interface PurgeResourceTimeSlotsResult
 */
export interface PurgeResourceTimeSlotsResult {
    /**
     * 
     * @type {number}
     * @memberof PurgeResourceTimeSlotsResult
     */
    deleted: number;
    /**
     * 
     * @type {boolean}
     * @memberof PurgeResourceTimeSlotsResult
     */
    dryRun: boolean;
}
/**
 * 
 * @export
 * @interface PutReservationScheduleDateOverrideRequest
 */
export interface PutReservationScheduleDateOverrideRequest {
    /**
     * Omit on creation or restore; required on an active update.
     * @type {number}
     * @memberof PutReservationScheduleDateOverrideRequest
     */
    expectedRevision?: number;
    /**
     * 
     * @type {ScheduleDateOverrideKind}
     * @memberof PutReservationScheduleDateOverrideRequest
     */
    kind: ScheduleDateOverrideKind;
    /**
     * 
     * @type {string}
     * @memberof PutReservationScheduleDateOverrideRequest
     */
    timezone: string;
    /**
     * Must be omitted for `closed` and non-empty for `replace`.
     * @type {Array<ScheduleDateOverrideWindowRequest>}
     * @memberof PutReservationScheduleDateOverrideRequest
     */
    windows?: Array<ScheduleDateOverrideWindowRequest>;
}


/**
 * 
 * @export
 * @interface PutReservationScheduleLocationRequest
 */
export interface PutReservationScheduleLocationRequest {
    /**
     * Omit on creation; required and matched optimistically on update.
     * @type {number}
     * @memberof PutReservationScheduleLocationRequest
     */
    expectedRevision?: number;
    /**
     * 
     * @type {number}
     * @memberof PutReservationScheduleLocationRequest
     */
    latitude: number;
    /**
     * 
     * @type {number}
     * @memberof PutReservationScheduleLocationRequest
     */
    longitude: number;
}
/**
 * 
 * @export
 * @interface QuotationItemResponse
 */
export interface QuotationItemResponse {
    /**
     * 
     * @type {number}
     * @memberof QuotationItemResponse
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof QuotationItemResponse
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof QuotationItemResponse
     */
    discountAmount: number;
    /**
     * 
     * @type {number}
     * @memberof QuotationItemResponse
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof QuotationItemResponse
     */
    unitPrice: number;
}
/**
 * 
 * @export
 * @interface QuotationListResponse
 */
export interface QuotationListResponse {
    /**
     * 
     * @type {Array<QuotationResponse>}
     * @memberof QuotationListResponse
     */
    items: Array<QuotationResponse>;
}
/**
 * 
 * @export
 * @interface QuotationPdfResponse
 */
export interface QuotationPdfResponse {
    /**
     * 
     * @type {string}
     * @memberof QuotationPdfResponse
     */
    expiresAt: string;
    /**
     * 
     * @type {string}
     * @memberof QuotationPdfResponse
     */
    signedUrl: string;
}
/**
 * 
 * @export
 * @interface QuotationResponse
 */
export interface QuotationResponse {
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    acceptedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    clientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    clientName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    convertedInvoiceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof QuotationResponse
     */
    discountAmount: number;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    id: string;
    /**
     * 
     * @type {Array<QuotationItemResponse>}
     * @memberof QuotationResponse
     */
    items: Array<QuotationItemResponse>;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    paymentLinkUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    quotationNumber: string;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    sentAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    squarePaymentLinkId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof QuotationResponse
     */
    subtotalAmount: number;
    /**
     * 
     * @type {number}
     * @memberof QuotationResponse
     */
    taxAmount: number;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    tenantId: string;
    /**
     * 
     * @type {number}
     * @memberof QuotationResponse
     */
    totalAmount: number;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof QuotationResponse
     */
    validUntil: string;
}

/**
 * A box that has a built-in column behind it.
 * 
 * The customer's name is not here: the ledger cannot store a row without
 * one, so no tenant may switch it off or make it optional.
 * @export
 */
export const ReceptionFieldKey = {
    CustomerNameKana: 'CustomerNameKana',
    CustomerEmail: 'CustomerEmail',
    CustomerPhone: 'CustomerPhone',
    CustomerBirthDate: 'CustomerBirthDate',
    CustomerSex: 'CustomerSex',
    CustomerAddress: 'CustomerAddress',
    SubjectName: 'SubjectName',
    SubjectType: 'SubjectType',
    SubjectBirthDate: 'SubjectBirthDate',
    SubjectSex: 'SubjectSex',
    SubjectNote: 'SubjectNote',
    Plan: 'Plan',
    Credential: 'Credential'
} as const;
export type ReceptionFieldKey = typeof ReceptionFieldKey[keyof typeof ReceptionFieldKey];

/**
 * 
 * @export
 * @interface ReceptionFieldListResponse
 */
export interface ReceptionFieldListResponse {
    /**
     * 
     * @type {Array<ReceptionFieldResponse>}
     * @memberof ReceptionFieldListResponse
     */
    items: Array<ReceptionFieldResponse>;
}
/**
 * A reception box as the counter screen should draw it.
 * @export
 * @interface ReceptionFieldResponse
 */
export interface ReceptionFieldResponse {
    /**
     * True when `label` is the tenant's own wording. The settings screen
     * needs this to offer "back to the default".
     * @type {boolean}
     * @memberof ReceptionFieldResponse
     */
    customLabel: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReceptionFieldResponse
     */
    enabled: boolean;
    /**
     * 
     * @type {ReceptionFieldKey}
     * @memberof ReceptionFieldResponse
     */
    fieldKey: ReceptionFieldKey;
    /**
     * What to print beside the box: the tenant's wording when it renamed
     * the box, the built-in wording otherwise.
     * @type {string}
     * @memberof ReceptionFieldResponse
     */
    label: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReceptionFieldResponse
     */
    required: boolean;
}


/**
 * One box on the tenant's reception sheet.
 * @export
 * @interface ReceptionFieldSettingRequest
 */
export interface ReceptionFieldSettingRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ReceptionFieldSettingRequest
     */
    enabled: boolean;
    /**
     * 
     * @type {ReceptionFieldKey}
     * @memberof ReceptionFieldSettingRequest
     */
    fieldKey: ReceptionFieldKey;
    /**
     * Blank or omitted keeps the built-in wording for the box.
     * @type {string}
     * @memberof ReceptionFieldSettingRequest
     */
    label?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReceptionFieldSettingRequest
     */
    required: boolean;
}


/**
 * 
 * @export
 * @interface ReconcileSquarePaymentRequest
 */
export interface ReconcileSquarePaymentRequest {
    /**
     * 
     * @type {string}
     * @memberof ReconcileSquarePaymentRequest
     */
    invoiceId: string;
    /**
     * 
     * @type {string}
     * @memberof ReconcileSquarePaymentRequest
     */
    note?: string | null;
}
/**
 * 
 * @export
 * @interface RecordConsumerConsentsRequest
 */
export interface RecordConsumerConsentsRequest {
    /**
     * store / web / kiosk (default store)
     * @type {string}
     * @memberof RecordConsumerConsentsRequest
     */
    channel?: string | null;
    /**
     * 記録する同意項目。テナントが定義済みの `consentKey` だけを受け付ける。
     * @type {Array<RegistrationConsentRequest>}
     * @memberof RecordConsumerConsentsRequest
     */
    consents: Array<RegistrationConsentRequest>;
}
/**
 * 
 * @export
 * @interface RecordContactPreferencesRequest
 */
export interface RecordContactPreferencesRequest {
    /**
     * 1回の申し出で複数チャネルをまとめて記録できる。同じチャネルを2つ
     * 入れた要求は 400。同一時刻の2行のどちらが勝つかを呼び出し側の
     * 並び順に委ねないため。
     * @type {Array<ContactPreferenceEntryRequest>}
     * @memberof RecordContactPreferencesRequest
     */
    preferences: Array<ContactPreferenceEntryRequest>;
    /**
     * 申し出を**受け取った経路**。`store`（既定）/ `web` / `kiosk`。
     * 連絡手段ではない。
     * @type {string}
     * @memberof RecordContactPreferencesRequest
     */
    source?: string | null;
}
/**
 * 
 * @export
 * @interface RecordCustomerConsentsRequest
 */
export interface RecordCustomerConsentsRequest {
    /**
     * store / web / kiosk (default store)
     * @type {string}
     * @memberof RecordCustomerConsentsRequest
     */
    channel?: string | null;
    /**
     * 
     * @type {Array<RegistrationConsentRequest>}
     * @memberof RecordCustomerConsentsRequest
     */
    consents: Array<RegistrationConsentRequest>;
}
/**
 * 
 * @export
 * @interface RegisterExtensionRequest
 */
export interface RegisterExtensionRequest {
    /**
     * 
     * @type {any}
     * @memberof RegisterExtensionRequest
     */
    capabilitiesJson?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RegisterExtensionRequest
     */
    configSchemaJson?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RegisterExtensionRequest
     */
    defaultConfigJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterExtensionRequest
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RegisterExtensionRequest
     */
    deterministicOrder?: number | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterExtensionRequest
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterExtensionRequest
     */
    industry: string;
    /**
     * 
     * @type {any}
     * @memberof RegisterExtensionRequest
     */
    manifestJson: any | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterExtensionRequest
     */
    name: string;
    /**
     * 
     * @type {any}
     * @memberof RegisterExtensionRequest
     */
    policyHooksJson?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RegisterExtensionRequest
     */
    uiContributionsJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterExtensionRequest
     */
    version: string;
}
/**
 * 
 * @export
 * @interface RegisterMembershipRequest
 */
export interface RegisterMembershipRequest {
    /**
     * store / web / kiosk (default store)
     * @type {string}
     * @memberof RegisterMembershipRequest
     */
    channel?: string | null;
    /**
     * Immutable Evidence record for the application document used to record
     * these consent answers. Validated in the tenant before customer writes.
     * @type {string}
     * @memberof RegisterMembershipRequest
     */
    consentEvidenceRecordId?: string | null;
    /**
     * 
     * @type {Array<RegistrationConsentRequest>}
     * @memberof RegisterMembershipRequest
     */
    consents?: Array<RegistrationConsentRequest>;
    /**
     * 
     * @type {Array<RegistrationCredentialRequest>}
     * @memberof RegisterMembershipRequest
     */
    credentials?: Array<RegistrationCredentialRequest>;
    /**
     * New customer to create. Mutually exclusive with `customerId`.
     * @type {RegistrationCustomerRequest}
     * @memberof RegisterMembershipRequest
     */
    customer?: RegistrationCustomerRequest | null;
    /**
     * Trade-specific boxes for the customer, keyed by
     * `custom_field_definitions.field_key` under the `consumer` entity type.
     * 
     * Accepted only alongside `customer`. Registering an existing customer
     * carries no values: this endpoint would have to write the whole set,
     * and a reception sheet that happens not to ask for a box would erase
     * what that customer answered the last time it did.
     * @type {object}
     * @memberof RegisterMembershipRequest
     */
    customerCustomFields?: object;
    /**
     * Existing customer to register. Mutually exclusive with `customer`.
     * @type {string}
     * @memberof RegisterMembershipRequest
     */
    customerId?: string | null;
    /**
     * Class to join directly, without a sale. Kept so a client deployed
     * before the product switch keeps working; mutually exclusive with
     * `productId`.
     * @type {string}
     * @memberof RegisterMembershipRequest
     */
    planId?: string | null;
    /**
     * Product being sold at the counter. Its grant decides which class the
     * customer joins and for how long.
     * @type {string}
     * @memberof RegisterMembershipRequest
     */
    productId?: string | null;
    /**
     * 
     * @type {Array<RegistrationSubjectRequest>}
     * @memberof RegisterMembershipRequest
     */
    subjects?: Array<RegistrationSubjectRequest>;
}
/**
 * Address written on a reception sheet.
 * @export
 * @interface RegistrationAddressRequest
 */
export interface RegistrationAddressRequest {
    /**
     * 
     * @type {string}
     * @memberof RegistrationAddressRequest
     */
    address1: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAddressRequest
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAddressRequest
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAddressRequest
     */
    postalCode: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAddressRequest
     */
    state: string;
}
/**
 * 
 * @export
 * @interface RegistrationConsentRequest
 */
export interface RegistrationConsentRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RegistrationConsentRequest
     */
    accepted: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegistrationConsentRequest
     */
    consentKey: string;
}
/**
 * 
 * @export
 * @interface RegistrationCredentialRequest
 */
export interface RegistrationCredentialRequest {
    /**
     * YYYY-MM-DD
     * @type {string}
     * @memberof RegistrationCredentialRequest
     */
    expiresOn?: string | null;
    /**
     * YYYY-MM-DD
     * @type {string}
     * @memberof RegistrationCredentialRequest
     */
    issuedOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegistrationCredentialRequest
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationCredentialRequest
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationCredentialRequest
     */
    note?: string | null;
    /**
     * Index into `subjects` when the credential belongs to a subject.
     * @type {number}
     * @memberof RegistrationCredentialRequest
     */
    subjectIndex?: number | null;
    /**
     * True when staff verified the physical document at reception.
     * @type {boolean}
     * @memberof RegistrationCredentialRequest
     */
    verified?: boolean | null;
}
/**
 * The customer half of a reception sheet.
 * 
 * Every field but the name is optional here. Which of them a given tenant
 * actually demands is decided by its reception field settings, not by this
 * type: a dog run asks for an address, a bar asks for nothing but a name,
 * and the customer ledger already stores every one of these as nullable.
 * @export
 * @interface RegistrationCustomerRequest
 */
export interface RegistrationCustomerRequest {
    /**
     * 
     * @type {RegistrationAddressRequest}
     * @memberof RegistrationCustomerRequest
     */
    address?: RegistrationAddressRequest | null;
    /**
     * YYYY-MM-DD
     * @type {string}
     * @memberof RegistrationCustomerRequest
     */
    birthDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegistrationCustomerRequest
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegistrationCustomerRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationCustomerRequest
     */
    nameKana?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegistrationCustomerRequest
     */
    phone?: string | null;
    /**
     * 語彙はテナントが決める。16 文字まで。
     * @type {string}
     * @memberof RegistrationCustomerRequest
     */
    sex?: string | null;
}
/**
 * 
 * @export
 * @interface RegistrationSubjectRequest
 */
export interface RegistrationSubjectRequest {
    /**
     * YYYY-MM-DD
     * @type {string}
     * @memberof RegistrationSubjectRequest
     */
    birthDate?: string | null;
    /**
     * Trade-specific boxes for this subject — breed, size, plate number —
     * keyed by `custom_field_definitions.field_key` under the
     * `customer_subject` entity type. Every active required definition must
     * be present, as on the values endpoint.
     * @type {object}
     * @memberof RegistrationSubjectRequest
     */
    customFields?: object;
    /**
     * 
     * @type {string}
     * @memberof RegistrationSubjectRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationSubjectRequest
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegistrationSubjectRequest
     */
    sex?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegistrationSubjectRequest
     */
    subjectType: string;
}
/**
 * 
 * @export
 * @interface RejectExpenseRequest
 */
export interface RejectExpenseRequest {
    /**
     * 
     * @type {string}
     * @memberof RejectExpenseRequest
     */
    reason?: string | null;
}
/**
 * 
 * @export
 * @interface ReleasePaymentHoldsRequest
 */
export interface ReleasePaymentHoldsRequest {
    /**
     * 
     * @type {number}
     * @memberof ReleasePaymentHoldsRequest
     */
    limit?: number | null;
}
/**
 * 
 * @export
 * @interface ReleasePaymentHoldsResult
 */
export interface ReleasePaymentHoldsResult {
    /**
     * 
     * @type {Array<string>}
     * @memberof ReleasePaymentHoldsResult
     */
    paymentIntentIds: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ReleasePaymentHoldsResult
     */
    releasedCount: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReleasePaymentHoldsResult
     */
    reservationIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ReleasePaymentHoldsResult
     */
    tenantId: string;
}
/**
 * 
 * @export
 * @interface ReleasePaymentIntentHoldRequest
 */
export interface ReleasePaymentIntentHoldRequest {
    /**
     * 
     * @type {string}
     * @memberof ReleasePaymentIntentHoldRequest
     */
    paymentIntentId: string;
}
/**
 * 
 * @export
 * @interface ReplaceCaddieCourseMembershipsRequest
 */
export interface ReplaceCaddieCourseMembershipsRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof ReplaceCaddieCourseMembershipsRequest
     */
    courseIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ReplaceCaddieCourseMembershipsRequest
     */
    primaryCourseId?: string | null;
}
/**
 * 
 * @export
 * @interface ReplaceGolfProductSlotsRequest
 */
export interface ReplaceGolfProductSlotsRequest {
    /**
     * 
     * @type {Array<GolfProductSlotBody>}
     * @memberof ReplaceGolfProductSlotsRequest
     */
    slots: Array<GolfProductSlotBody>;
}
/**
 * The whole sheet. Boxes left out of the list keep whatever they had, so a
 * screen that only knows about some of them cannot silently reset the rest.
 * @export
 * @interface ReplaceReceptionFieldsRequest
 */
export interface ReplaceReceptionFieldsRequest {
    /**
     * 
     * @type {Array<ReceptionFieldSettingRequest>}
     * @memberof ReplaceReceptionFieldsRequest
     */
    items: Array<ReceptionFieldSettingRequest>;
}
/**
 * 
 * @export
 * @interface ReplaceReservationProductSlotsRequest
 */
export interface ReplaceReservationProductSlotsRequest {
    /**
     * 
     * @type {Array<any>}
     * @memberof ReplaceReservationProductSlotsRequest
     */
    slots: Array<any>;
}
/**
 * 
 * @export
 * @interface ReplaceReservationResourceScheduleRequest
 */
export interface ReplaceReservationResourceScheduleRequest {
    /**
     * 1-365. Omit to preserve the current setting; explicit null clears it.
     * The hourly job acts only when at least one active ordinary rule exists.
     * @type {number}
     * @memberof ReplaceReservationResourceScheduleRequest
     */
    rollingWindowDays?: number | null;
    /**
     * Complete desired set of active resource-level availability rules.
     * @type {Array<ReservationAvailabilityRuleRequest>}
     * @memberof ReplaceReservationResourceScheduleRequest
     */
    rules: Array<ReservationAvailabilityRuleRequest>;
}
/**
 * 
 * @export
 * @interface ReplenishmentPolicyResponse
 */
export interface ReplenishmentPolicyResponse {
    /**
     * 
     * @type {string}
     * @memberof ReplenishmentPolicyResponse
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof ReplenishmentPolicyResponse
     */
    preferredOrderQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ReplenishmentPolicyResponse
     */
    reorderPointQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof ReplenishmentPolicyResponse
     */
    replenishmentTargetQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof ReplenishmentPolicyResponse
     */
    safetyStockQuantity: number;
    /**
     * 
     * @type {string}
     * @memberof ReplenishmentPolicyResponse
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof ReplenishmentPolicyResponse
     */
    stockItemId: string;
    /**
     * 
     * @type {string}
     * @memberof ReplenishmentPolicyResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof ReplenishmentPolicyResponse
     */
    warehouseId: string;
}
/**
 * 
 * @export
 * @interface ResendPaymentLinkRequest
 */
export interface ResendPaymentLinkRequest {
    /**
     * 
     * @type {string}
     * @memberof ResendPaymentLinkRequest
     */
    clientPhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResendPaymentLinkRequest
     */
    paymentLinkProvider?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ResendPaymentLinkRequest
     */
    sendEmail?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ResendPaymentLinkRequest
     */
    sendSms?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ResendPaymentLinkRequest
     */
    smsMessage?: string | null;
}
/**
 * 
 * @export
 * @interface Reservation
 */
export interface Reservation {
    /**
     * 
     * @type {Date}
     * @memberof Reservation
     */
    approvedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    approvedBy?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Reservation
     */
    assignedStaffIds: Array<string>;
    /**
     * 
     * @type {ReservationBillTo}
     * @memberof Reservation
     */
    billTo?: ReservationBillTo | null;
    /**
     * Why the reservation currently in `cancelled` was cancelled. `None` both
     * for a live reservation and for one cancelled without a stated reason;
     * `cancelled_at` is what distinguishes those two.
     * @type {string}
     * @memberof Reservation
     */
    cancelReason?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Reservation
     */
    cancelledAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    checkoutUrl?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Reservation
     */
    completedAt?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Reservation
     */
    confirmedAt?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Reservation
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    currency: string;
    /**
     * 
     * @type {any}
     * @memberof Reservation
     */
    customFieldsJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    customerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    customerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    customerPhone?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Reservation
     */
    depositAmount: number;
    /**
     * 
     * @type {Date}
     * @memberof Reservation
     */
    endsAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    industryExtensionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    internalNotes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    invoiceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    orderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Reservation
     */
    paidAmount: number;
    /**
     * 
     * @type {ReservationPaymentStatus}
     * @memberof Reservation
     */
    paymentStatus: ReservationPaymentStatus;
    /**
     * 
     * @type {any}
     * @memberof Reservation
     */
    policyContextJson?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Reservation
     */
    policySnapshotJson?: any | null;
    /**
     * 
     * @type {number}
     * @memberof Reservation
     */
    priceAmount: number;
    /**
     * Number of people or subjects in the reservation; not slot inventory groups.
     * @type {number}
     * @memberof Reservation
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    reservationNumber: string;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    reservationTypeId: string;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    resourceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    salesLedgerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    serviceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    sourceChannel: string;
    /**
     * 
     * @type {Date}
     * @memberof Reservation
     */
    startsAt: Date;
    /**
     * 
     * @type {ReservationStatus}
     * @memberof Reservation
     */
    status: ReservationStatus;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    storeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    timezone: string;
    /**
     * 
     * @type {Date}
     * @memberof Reservation
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface ReservationAvailabilityRuleRequest
 */
export interface ReservationAvailabilityRuleRequest {
    /**
     * Number of groups that can start concurrently. This is not party size.
     * @type {number}
     * @memberof ReservationAvailabilityRuleRequest
     */
    capacity: number;
    /**
     * Monday is 0 and Sunday is 6.
     * @type {number}
     * @memberof ReservationAvailabilityRuleRequest
     */
    dayOfWeek: number;
    /**
     * 
     * @type {Date}
     * @memberof ReservationAvailabilityRuleRequest
     */
    effectiveFrom?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ReservationAvailabilityRuleRequest
     */
    effectiveTo?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationAvailabilityRuleRequest
     */
    endTime: string;
    /**
     * Existing rule ID. Omit when adding a new schedule window.
     * @type {string}
     * @memberof ReservationAvailabilityRuleRequest
     */
    id?: string | null;
    /**
     * Inclusive end of the annual season, as `MM-DD`. A value earlier than
     * `seasonStartMonthDay` describes a season that wraps the new year.
     * @type {string}
     * @memberof ReservationAvailabilityRuleRequest
     */
    seasonEndMonthDay?: string | null;
    /**
     * Inclusive start of a season that repeats every year, as `MM-DD`.
     * Set together with `seasonEndMonthDay`; omit both to operate all year.
     * @type {string}
     * @memberof ReservationAvailabilityRuleRequest
     */
    seasonStartMonthDay?: string | null;
    /**
     * Start interval in minutes; independent from service duration.
     * @type {number}
     * @memberof ReservationAvailabilityRuleRequest
     */
    slotIntervalMinutes: number;
    /**
     * Omit to preserve an existing rule policy; null explicitly clears it.
     * @type {SolarWindow}
     * @memberof ReservationAvailabilityRuleRequest
     */
    solarWindow?: SolarWindow | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationAvailabilityRuleRequest
     */
    startTime: string;
    /**
     * IANA timezone such as `Asia/Tokyo`.
     * @type {string}
     * @memberof ReservationAvailabilityRuleRequest
     */
    timezone: string;
}
/**
 * 
 * @export
 * @interface ReservationAvailabilityRuleResponse
 */
export interface ReservationAvailabilityRuleResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ReservationAvailabilityRuleResponse
     */
    active: boolean;
    /**
     * Number of groups that can start concurrently. This is not party size.
     * @type {number}
     * @memberof ReservationAvailabilityRuleResponse
     */
    capacity: number;
    /**
     * 
     * @type {Date}
     * @memberof ReservationAvailabilityRuleResponse
     */
    createdAt: Date;
    /**
     * Monday is 0 and Sunday is 6.
     * @type {number}
     * @memberof ReservationAvailabilityRuleResponse
     */
    dayOfWeek: number;
    /**
     * 
     * @type {Date}
     * @memberof ReservationAvailabilityRuleResponse
     */
    effectiveFrom?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ReservationAvailabilityRuleResponse
     */
    effectiveTo?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationAvailabilityRuleResponse
     */
    endTime: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationAvailabilityRuleResponse
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof ReservationAvailabilityRuleResponse
     */
    revision: number;
    /**
     * Inclusive end of the annual operating season as `MM-DD`.
     * @type {string}
     * @memberof ReservationAvailabilityRuleResponse
     */
    seasonEndMonthDay?: string | null;
    /**
     * Inclusive start of the annual operating season as `MM-DD`, or null when
     * the rule operates all year.
     * @type {string}
     * @memberof ReservationAvailabilityRuleResponse
     */
    seasonStartMonthDay?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationAvailabilityRuleResponse
     */
    slotIntervalMinutes: number;
    /**
     * Null means this remains a fixed rule.
     * @type {SolarWindow}
     * @memberof ReservationAvailabilityRuleResponse
     */
    solarWindow: SolarWindow | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationAvailabilityRuleResponse
     */
    startTime: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationAvailabilityRuleResponse
     */
    timezone: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationAvailabilityRuleResponse
     */
    updatedAt: Date;
}
/**
 * @type ReservationBillTo
 * 
 * @export
 */
export type ReservationBillTo = { kind: 'client' } & ReservationBillToClient | { kind: 'customer' } & ReservationBillToCustomer;
/**
 * 
 * @export
 * @interface ReservationBillToClient
 */
export interface ReservationBillToClient {
    /**
     * 
     * @type {string}
     * @memberof ReservationBillToClient
     */
    affiliationId: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationBillToClient
     */
    clientId: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationBillToClient
     */
    selectedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ReservationBillToClient
     */
    selectedBy: string;
}
/**
 * 
 * @export
 * @interface ReservationBillToCustomer
 */
export interface ReservationBillToCustomer {
    /**
     * 
     * @type {string}
     * @memberof ReservationBillToCustomer
     */
    customerId: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationBillToCustomer
     */
    selectedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ReservationBillToCustomer
     */
    selectedBy: string;
}
/**
 * @type ReservationBillToRequest
 * 
 * @export
 */
export type ReservationBillToRequest = { kind: 'client' } & ReservationBillToRequestClient | { kind: 'customer' } & ReservationBillToRequestCustomer;
/**
 * 
 * @export
 * @interface ReservationBillToRequestClient
 */
export interface ReservationBillToRequestClient {
    /**
     * 
     * @type {string}
     * @memberof ReservationBillToRequestClient
     */
    affiliationId: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationBillToRequestClient
     */
    clientId: string;
}
/**
 * 
 * @export
 * @interface ReservationBillToRequestCustomer
 */
export interface ReservationBillToRequestCustomer {
    /**
     * 
     * @type {string}
     * @memberof ReservationBillToRequestCustomer
     */
    customerId: string;
}
/**
 * One cancellation, as it happened. Rows are never updated or deleted.
 * @export
 * @interface ReservationCancellationEvent
 */
export interface ReservationCancellationEvent {
    /**
     * 
     * @type {string}
     * @memberof ReservationCancellationEvent
     */
    actorId?: string | null;
    /**
     * 
     * @type {CancellationActorType}
     * @memberof ReservationCancellationEvent
     */
    actorType: CancellationActorType;
    /**
     * 
     * @type {number}
     * @memberof ReservationCancellationEvent
     */
    cancellationFeeAmount?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof ReservationCancellationEvent
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ReservationCancellationEvent
     */
    id: string;
    /**
     * `Idempotency-Key` this cancellation was claimed under, when the caller
     * opted in. Exposed so an operator can see which retry won the claim.
     * @type {string}
     * @memberof ReservationCancellationEvent
     */
    idempotencyKey?: string | null;
    /**
     * Status the reservation held immediately before it was cancelled.
     * @type {string}
     * @memberof ReservationCancellationEvent
     */
    previousStatus: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationCancellationEvent
     */
    reason?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationCancellationEvent
     */
    refundAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationCancellationEvent
     */
    reservationId: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationCancellationEvent
     */
    source: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationCancellationEvent
     */
    tenantId: string;
}


/**
 * 
 * @export
 * @interface ReservationCancellationListResponse
 */
export interface ReservationCancellationListResponse {
    /**
     * 
     * @type {Array<ReservationCancellationEvent>}
     * @memberof ReservationCancellationListResponse
     */
    items: Array<ReservationCancellationEvent>;
}
/**
 * 
 * @export
 * @interface ReservationListResponse
 */
export interface ReservationListResponse {
    /**
     * 
     * @type {Array<Reservation>}
     * @memberof ReservationListResponse
     */
    items: Array<Reservation>;
    /**
     * The page size actually applied. A request above the documented maximum
     * is capped rather than rejected, and this is where the cap shows up.
     * @type {number}
     * @memberof ReservationListResponse
     */
    limit: number;
    /**
     * The offset actually applied.
     * @type {number}
     * @memberof ReservationListResponse
     */
    offset: number;
    /**
     * Reservations matching the filter across the whole tenant, ignoring
     * `limit`/`offset`. Paging is done when `offset + items.len() >= total`.
     * @type {number}
     * @memberof ReservationListResponse
     */
    total: number;
}
/**
 * The editable half of a template, as the editor submits it.
 * @export
 * @interface ReservationNotificationTemplateContent
 */
export interface ReservationNotificationTemplateContent {
    /**
     * 
     * @type {string}
     * @memberof ReservationNotificationTemplateContent
     */
    body: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReservationNotificationTemplateContent
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReservationNotificationTemplateContent
     */
    subject: string;
}
/**
 * Templates keyed by kind, the shape the editor holds them in.
 * @export
 * @interface ReservationNotificationTemplatesResponse
 */
export interface ReservationNotificationTemplatesResponse {
    /**
     * 
     * @type {{ [key: string]: ReservationNotificationTemplateContent; }}
     * @memberof ReservationNotificationTemplatesResponse
     */
    items: { [key: string]: ReservationNotificationTemplateContent; };
}

/**
 * 
 * @export
 */
export const ReservationPaymentStatus = {
    NotRequired: 'not_required',
    Unpaid: 'unpaid',
    Partial: 'partial',
    Paid: 'paid',
    RefundPending: 'refund_pending',
    Refunded: 'refunded',
    FeeDue: 'fee_due',
    FeePaid: 'fee_paid'
} as const;
export type ReservationPaymentStatus = typeof ReservationPaymentStatus[keyof typeof ReservationPaymentStatus];

/**
 * A tenant-owned, industry-neutral reservation product.
 * 
 * `attributes_json` is deliberately opaque to Field. Extensions may keep
 * product-specific fields there while the columns remain the stable contract.
 * @export
 * @interface ReservationProductCatalogItem
 */
export interface ReservationProductCatalogItem {
    /**
     * 
     * @type {any}
     * @memberof ReservationProductCatalogItem
     */
    attributesJson: any | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationProductCatalogItem
     */
    bookingMode: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationProductCatalogItem
     */
    createdAt: Date;
    /**
     * 
     * @type {number}
     * @memberof ReservationProductCatalogItem
     */
    durationMinutes: number;
    /**
     * `None` is undeclared; `Some(vec![])` is an explicit empty allowlist.
     * @type {Array<string>}
     * @memberof ReservationProductCatalogItem
     */
    eligibleResourceIds?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReservationProductCatalogItem
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReservationProductCatalogItem
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationProductCatalogItem
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationProductCatalogItem
     */
    ownerExtensionKey: string;
    /**
     * 
     * @type {Array<ReservationProductSlot>}
     * @memberof ReservationProductCatalogItem
     */
    slots: Array<ReservationProductSlot>;
    /**
     * 
     * @type {string}
     * @memberof ReservationProductCatalogItem
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationProductCatalogItem
     */
    updatedAt: Date;
}
/**
 * The management view of the catalog.
 * 
 * Named apart from the StoreKit `ReservationProductListResponse` on purpose:
 * utoipa derives schema names from the struct, so two `ToSchema` types sharing
 * one name collapse into a single OpenAPI component and generated clients get
 * the wrong shape for whichever route loses.
 * @export
 * @interface ReservationProductCatalogListResponse
 */
export interface ReservationProductCatalogListResponse {
    /**
     * 
     * @type {Array<ReservationProductCatalogItem>}
     * @memberof ReservationProductCatalogListResponse
     */
    items: Array<ReservationProductCatalogItem>;
    /**
     * Whether this tenant has crossed the migration boundary.
     * 
     * An empty `items` is ambiguous without it: a tenant that never seeded and
     * one that seeded and then deleted every product both list nothing, yet
     * only the first still has the storefront reading extension config. A
     * writer that cannot tell them apart saves to the side nobody reads.
     * @type {boolean}
     * @memberof ReservationProductCatalogListResponse
     */
    seeded: boolean;
}
/**
 * 
 * @export
 * @interface ReservationProductListResponse
 */
export interface ReservationProductListResponse {
    /**
     * 
     * @type {Array<any>}
     * @memberof ReservationProductListResponse
     */
    items: Array<any>;
    /**
     * IANA timezone attached to the extension config that supplied the
     * storefront products.
     * @type {string}
     * @memberof ReservationProductListResponse
     */
    timezone: string;
}
/**
 * One ordered, opaque slot declaration belonging to a reservation product.
 * @export
 * @interface ReservationProductSlot
 */
export interface ReservationProductSlot {
    /**
     * 
     * @type {Date}
     * @memberof ReservationProductSlot
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ReservationProductSlot
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof ReservationProductSlot
     */
    position: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationProductSlot
     */
    reservationProductId: string;
    /**
     * 
     * @type {any}
     * @memberof ReservationProductSlot
     */
    slotJson: any | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationProductSlot
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationProductSlot
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface ReservationProductSlotListResponse
 */
export interface ReservationProductSlotListResponse {
    /**
     * 
     * @type {Array<ReservationProductSlot>}
     * @memberof ReservationProductSlotListResponse
     */
    items: Array<ReservationProductSlot>;
}
/**
 * 
 * @export
 * @interface ReservationResource
 */
export interface ReservationResource {
    /**
     * 
     * @type {boolean}
     * @memberof ReservationResource
     */
    active: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReservationResource
     */
    capacity: number;
    /**
     * 
     * @type {Date}
     * @memberof ReservationResource
     */
    createdAt: Date;
    /**
     * 
     * @type {any}
     * @memberof ReservationResource
     */
    customFieldsJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationResource
     */
    id: string;
    /**
     * 
     * @type {any}
     * @memberof ReservationResource
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationResource
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationResource
     */
    resourceModel: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationResource
     */
    resourceType: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationResource
     */
    storeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationResource
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationResource
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface ReservationResourceListResponse
 */
export interface ReservationResourceListResponse {
    /**
     * 
     * @type {Array<ReservationResourceResponse>}
     * @memberof ReservationResourceListResponse
     */
    items: Array<ReservationResourceResponse>;
}
/**
 * Canonical generic resource representation.
 * 
 * The legacy `reservation_resources.capacity` column is deliberately not
 * exposed. Slot capacity is owned by resource-scoped availability rules.
 * @export
 * @interface ReservationResourceResponse
 */
export interface ReservationResourceResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ReservationResourceResponse
     */
    active: boolean;
    /**
     * 
     * @type {Date}
     * @memberof ReservationResourceResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {any}
     * @memberof ReservationResourceResponse
     */
    customFieldsJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationResourceResponse
     */
    id: string;
    /**
     * 
     * @type {any}
     * @memberof ReservationResourceResponse
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationResourceResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationResourceResponse
     */
    resourceModel: string;
    /**
     * 
     * @type {ReservationResourceType}
     * @memberof ReservationResourceResponse
     */
    resourceType: ReservationResourceType;
    /**
     * 
     * @type {string}
     * @memberof ReservationResourceResponse
     */
    storeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationResourceResponse
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationResourceResponse
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface ReservationResourceScheduleResponse
 */
export interface ReservationResourceScheduleResponse {
    /**
     * 
     * @type {string}
     * @memberof ReservationResourceScheduleResponse
     */
    resourceId: string;
    /**
     * Null means that this resource is not opted in to rolling generation.
     * @type {number}
     * @memberof ReservationResourceScheduleResponse
     */
    rollingWindowDays: number | null;
    /**
     * 
     * @type {Array<ReservationAvailabilityRuleResponse>}
     * @memberof ReservationResourceScheduleResponse
     */
    rules: Array<ReservationAvailabilityRuleResponse>;
}

/**
 * 
 * @export
 */
export const ReservationResourceType = {
    Staff: 'staff',
    Room: 'room',
    Equipment: 'equipment',
    Vehicle: 'vehicle',
    Other: 'other'
} as const;
export type ReservationResourceType = typeof ReservationResourceType[keyof typeof ReservationResourceType];

/**
 * 
 * @export
 * @interface ReservationScheduleDateOverride
 */
export interface ReservationScheduleDateOverride {
    /**
     * 
     * @type {boolean}
     * @memberof ReservationScheduleDateOverride
     */
    active: boolean;
    /**
     * 
     * @type {Date}
     * @memberof ReservationScheduleDateOverride
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ReservationScheduleDateOverride
     */
    id: string;
    /**
     * 
     * @type {ScheduleDateOverrideKind}
     * @memberof ReservationScheduleDateOverride
     */
    kind: ScheduleDateOverrideKind;
    /**
     * 
     * @type {Date}
     * @memberof ReservationScheduleDateOverride
     */
    localDate: Date;
    /**
     * 
     * @type {string}
     * @memberof ReservationScheduleDateOverride
     */
    resourceId: string;
    /**
     * 
     * @type {number}
     * @memberof ReservationScheduleDateOverride
     */
    revision: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationScheduleDateOverride
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationScheduleDateOverride
     */
    timezone: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationScheduleDateOverride
     */
    updatedAt: Date;
    /**
     * 
     * @type {Array<ScheduleDateOverrideWindow>}
     * @memberof ReservationScheduleDateOverride
     */
    windows: Array<ScheduleDateOverrideWindow>;
}


/**
 * 
 * @export
 * @interface ReservationScheduleDateOverrideListResponse
 */
export interface ReservationScheduleDateOverrideListResponse {
    /**
     * 
     * @type {Array<ReservationScheduleDateOverride>}
     * @memberof ReservationScheduleDateOverrideListResponse
     */
    overrides: Array<ReservationScheduleDateOverride>;
    /**
     * 
     * @type {string}
     * @memberof ReservationScheduleDateOverrideListResponse
     */
    resourceId: string;
}
/**
 * 
 * @export
 * @interface ReservationScheduleLocationResponse
 */
export interface ReservationScheduleLocationResponse {
    /**
     * 
     * @type {Date}
     * @memberof ReservationScheduleLocationResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {number}
     * @memberof ReservationScheduleLocationResponse
     */
    latitude: number;
    /**
     * 
     * @type {number}
     * @memberof ReservationScheduleLocationResponse
     */
    longitude: number;
    /**
     * 
     * @type {number}
     * @memberof ReservationScheduleLocationResponse
     */
    revision: number;
    /**
     * 
     * @type {ScheduleLocationScope}
     * @memberof ReservationScheduleLocationResponse
     */
    scopeType: ScheduleLocationScope;
    /**
     * 
     * @type {Date}
     * @memberof ReservationScheduleLocationResponse
     */
    updatedAt: Date;
}



/**
 * 
 * @export
 */
export const ReservationStatus = {
    Requested: 'requested',
    PaymentPending: 'payment_pending',
    Confirmed: 'confirmed',
    ChangeRequested: 'change_requested',
    CancelRequested: 'cancel_requested',
    Cancelled: 'cancelled',
    Rejected: 'rejected',
    NoShow: 'no_show',
    Completed: 'completed',
    Waiting: 'waiting',
    AdminReview: 'admin_review',
    Suspended: 'suspended'
} as const;
export type ReservationStatus = typeof ReservationStatus[keyof typeof ReservationStatus];

/**
 * 
 * @export
 * @interface ReservationStatusLookupRequest
 */
export interface ReservationStatusLookupRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof ReservationStatusLookupRequest
     */
    reservationIds: Array<string>;
}
/**
 * 
 * @export
 * @interface ReservationStatusLookupResponse
 */
export interface ReservationStatusLookupResponse {
    /**
     * 
     * @type {Array<ReservationStatusSnapshot>}
     * @memberof ReservationStatusLookupResponse
     */
    items: Array<ReservationStatusSnapshot>;
    /**
     * Ids this tenant has no reservation for. A caller referencing one of
     * these is pointing at something that is gone or was never theirs; it is
     * reported rather than silently omitted so the caller can tell that case
     * apart from a reservation that is merely cancelled.
     * @type {Array<string>}
     * @memberof ReservationStatusLookupResponse
     */
    missingIds: Array<string>;
}
/**
 * The current state of one reservation, without the booking detail around it.
 * 
 * This is what a caller that already holds reservation ids needs in order to
 * reconcile its own records against Field: whether the reservation is still
 * live, and when it last moved. Keeping it separate from [`Reservation`] is
 * deliberate — the reconciliation contract stays stable even as the booking
 * payload grows, and it carries no customer PII.
 * @export
 * @interface ReservationStatusSnapshot
 */
export interface ReservationStatusSnapshot {
    /**
     * 
     * @type {Date}
     * @memberof ReservationStatusSnapshot
     */
    cancelledAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationStatusSnapshot
     */
    id: string;
    /**
     * 
     * @type {ReservationStatus}
     * @memberof ReservationStatusSnapshot
     */
    status: ReservationStatus;
    /**
     * 
     * @type {Date}
     * @memberof ReservationStatusSnapshot
     */
    updatedAt: Date;
}


/**
 * A booking menu: what a tenant sells and how it is paid for and cancelled.
 * @export
 * @interface ReservationType
 */
export interface ReservationType {
    /**
     * 
     * @type {boolean}
     * @memberof ReservationType
     */
    active: boolean;
    /**
     * 
     * @type {any}
     * @memberof ReservationType
     */
    cancellationPolicyJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationType
     */
    code: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationType
     */
    createdAt: Date;
    /**
     * 
     * @type {any}
     * @memberof ReservationType
     */
    customFieldsSchemaJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationType
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationType
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationType
     */
    industryExtensionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationType
     */
    name: string;
    /**
     * 
     * @type {any}
     * @memberof ReservationType
     */
    paymentPolicyJson?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReservationType
     */
    policyHooksJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationType
     */
    resourceModel: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationType
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationType
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface ReservationTypeListResponse
 */
export interface ReservationTypeListResponse {
    /**
     * 
     * @type {Array<ReservationType>}
     * @memberof ReservationTypeListResponse
     */
    items: Array<ReservationType>;
}
/**
 * A queue entry together with what an operator needs to decide about it.
 * 
 * The two extra fields are computed per read rather than stored: both go
 * stale the moment any other reservation on the slot changes, so a stored
 * copy would be wrong more often than right.
 * @export
 * @interface ReservationWaitlistCandidate
 */
export interface ReservationWaitlistCandidate {
    /**
     * 
     * @type {Date}
     * @memberof ReservationWaitlistCandidate
     */
    closedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    closedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    closedReason?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    convertedReservationId?: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationWaitlistCandidate
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    customerEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    customerId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    customerPhone?: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationWaitlistCandidate
     */
    desiredEndsAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ReservationWaitlistCandidate
     */
    desiredStartsAt: Date;
    /**
     * When the entry joined the queue. Distinct from `created_at` so that a
     * re-queued request sorts by when it re-queued.
     * @type {Date}
     * @memberof ReservationWaitlistCandidate
     */
    enqueuedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    notes?: string;
    /**
     * 
     * @type {number}
     * @memberof ReservationWaitlistCandidate
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    reservationTypeId: string;
    /**
     * The resource the entry is waiting on. Stored as the empty string when
     * unset, matching `reservation_time_slots`, but exposed as `None` so
     * callers never have to know that.
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    resourceId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    serviceId?: string;
    /**
     * 
     * @type {ReservationWaitlistStatus}
     * @memberof ReservationWaitlistCandidate
     */
    status: ReservationWaitlistStatus;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    storeId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistCandidate
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationWaitlistCandidate
     */
    updatedAt: Date;
    /**
     * Free groups left on the slot right now, or `None` when no slot row
     * exists for the requested time — an unopened slot is not the same answer
     * as a full one, and only the second is something an operator can wait
     * out.
     * 
     * Groups, not people: `reservation_time_slots.capacity` counts inventory
     * groups and one reservation consumes exactly one of them whatever its
     * party size (`slot_consumption::hold_one_group`). A party of four
     * therefore needs one free group, not four.
     * @type {number}
     * @memberof ReservationWaitlistCandidate
     */
    availableSlotGroups?: number | null;
    /**
     * 1-based place in the queue for this entry's slot, counting only entries
     * still waiting.
     * @type {number}
     * @memberof ReservationWaitlistCandidate
     */
    queuePosition: number;
}


/**
 * One request waiting for a slot.
 * @export
 * @interface ReservationWaitlistEntry
 */
export interface ReservationWaitlistEntry {
    /**
     * 
     * @type {Date}
     * @memberof ReservationWaitlistEntry
     */
    closedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    closedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    closedReason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    convertedReservationId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ReservationWaitlistEntry
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    customerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    customerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    customerPhone?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ReservationWaitlistEntry
     */
    desiredEndsAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ReservationWaitlistEntry
     */
    desiredStartsAt: Date;
    /**
     * When the entry joined the queue. Distinct from `created_at` so that a
     * re-queued request sorts by when it re-queued.
     * @type {Date}
     * @memberof ReservationWaitlistEntry
     */
    enqueuedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    notes?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationWaitlistEntry
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    reservationTypeId: string;
    /**
     * The resource the entry is waiting on. Stored as the empty string when
     * unset, matching `reservation_time_slots`, but exposed as `None` so
     * callers never have to know that.
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    resourceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    serviceId?: string | null;
    /**
     * 
     * @type {ReservationWaitlistStatus}
     * @memberof ReservationWaitlistEntry
     */
    status: ReservationWaitlistStatus;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    storeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWaitlistEntry
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof ReservationWaitlistEntry
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface ReservationWaitlistListResponse
 */
export interface ReservationWaitlistListResponse {
    /**
     * 
     * @type {Array<ReservationWaitlistCandidate>}
     * @memberof ReservationWaitlistListResponse
     */
    items: Array<ReservationWaitlistCandidate>;
}

/**
 * Where an entry stands. Only `Waiting` is in the queue; the other three
 * are terminal and differ in *why* the entry left it, which is what a
 * later "how often do we actually seat waitlisted guests" question needs.
 * @export
 */
export const ReservationWaitlistStatus = {
    Waiting: 'Waiting',
    Converted: 'Converted',
    Withdrawn: 'Withdrawn',
    Expired: 'Expired'
} as const;
export type ReservationWaitlistStatus = typeof ReservationWaitlistStatus[keyof typeof ReservationWaitlistStatus];

/**
 * 
 * @export
 * @interface ResourceListResponse
 */
export interface ResourceListResponse {
    /**
     * 
     * @type {Array<ReservationResource>}
     * @memberof ResourceListResponse
     */
    items: Array<ReservationResource>;
}
/**
 * One generated resource inventory row. Every numeric counter is a number of
 * reservation groups, never a party-size/person count.
 * @export
 * @interface ResourceTimeSlot
 */
export interface ResourceTimeSlot {
    /**
     * 
     * @type {boolean}
     * @memberof ResourceTimeSlot
     */
    active: boolean;
    /**
     * `capacity - reserved_quantity - held_quantity`, in groups.
     * @type {number}
     * @memberof ResourceTimeSlot
     */
    availableQuantity: number;
    /**
     * Count of reservation groups used by schedule capacity and slot counters.
     * 
     * This is intentionally distinct from reservation party size, which counts
     * people or subjects.
     * @type {number}
     * @memberof ResourceTimeSlot
     */
    capacity: number;
    /**
     * 
     * @type {Date}
     * @memberof ResourceTimeSlot
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ResourceTimeSlot
     */
    endsAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ResourceTimeSlot
     */
    generationKey: string;
    /**
     * 
     * @type {Date}
     * @memberof ResourceTimeSlot
     */
    generationRangeFrom: Date;
    /**
     * 
     * @type {Date}
     * @memberof ResourceTimeSlot
     */
    generationRangeTo: Date;
    /**
     * Count of reservation groups used by schedule capacity and slot counters.
     * 
     * This is intentionally distinct from reservation party size, which counts
     * people or subjects.
     * @type {number}
     * @memberof ResourceTimeSlot
     */
    heldQuantity: number;
    /**
     * 
     * @type {string}
     * @memberof ResourceTimeSlot
     */
    id: string;
    /**
     * Count of reservation groups used by schedule capacity and slot counters.
     * 
     * This is intentionally distinct from reservation party size, which counts
     * people or subjects.
     * @type {number}
     * @memberof ResourceTimeSlot
     */
    reservedQuantity: number;
    /**
     * 
     * @type {string}
     * @memberof ResourceTimeSlot
     */
    resourceId: string;
    /**
     * Compatibility alias retained for the v1 Field contract.
     * @type {string}
     * @memberof ResourceTimeSlot
     */
    sourceAvailabilityRuleId: string;
    /**
     * Compatibility alias retained for the v1 Field contract.
     * @type {number}
     * @memberof ResourceTimeSlot
     */
    sourceAvailabilityRuleRevision: number;
    /**
     * Local calendar date in the source schedule's timezone.
     * @type {Date}
     * @memberof ResourceTimeSlot
     */
    sourceScheduleDate: Date;
    /**
     * 
     * @type {string}
     * @memberof ResourceTimeSlot
     */
    sourceScheduleId: string;
    /**
     * 
     * @type {ScheduleSourceKind}
     * @memberof ResourceTimeSlot
     */
    sourceScheduleKind: ScheduleSourceKind;
    /**
     * 
     * @type {number}
     * @memberof ResourceTimeSlot
     */
    sourceScheduleRevision: number;
    /**
     * 
     * @type {string}
     * @memberof ResourceTimeSlot
     */
    sourceSolarAlgorithm?: string;
    /**
     * 
     * @type {number}
     * @memberof ResourceTimeSlot
     */
    sourceSolarLocationRevision?: number;
    /**
     * 
     * @type {Date}
     * @memberof ResourceTimeSlot
     */
    startsAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ResourceTimeSlot
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface ResourceTimeSlotGenerationResponse
 */
export interface ResourceTimeSlotGenerationResponse {
    /**
     * 
     * @type {number}
     * @memberof ResourceTimeSlotGenerationResponse
     */
    created: number;
    /**
     * 
     * @type {number}
     * @memberof ResourceTimeSlotGenerationResponse
     */
    deactivated: number;
    /**
     * 
     * @type {boolean}
     * @memberof ResourceTimeSlotGenerationResponse
     */
    dryRun: boolean;
    /**
     * 
     * @type {number}
     * @memberof ResourceTimeSlotGenerationResponse
     */
    unchanged: number;
    /**
     * 
     * @type {number}
     * @memberof ResourceTimeSlotGenerationResponse
     */
    updated: number;
    /**
     * 
     * @type {Date}
     * @memberof ResourceTimeSlotGenerationResponse
     */
    from: Date;
    /**
     * 
     * @type {string}
     * @memberof ResourceTimeSlotGenerationResponse
     */
    resourceId: string;
    /**
     * 
     * @type {Date}
     * @memberof ResourceTimeSlotGenerationResponse
     */
    to: Date;
}
/**
 * Counts of rows in a complete generation plan.
 * @export
 * @interface ResourceTimeSlotGenerationResult
 */
export interface ResourceTimeSlotGenerationResult {
    /**
     * 
     * @type {number}
     * @memberof ResourceTimeSlotGenerationResult
     */
    created: number;
    /**
     * 
     * @type {number}
     * @memberof ResourceTimeSlotGenerationResult
     */
    deactivated: number;
    /**
     * 
     * @type {boolean}
     * @memberof ResourceTimeSlotGenerationResult
     */
    dryRun: boolean;
    /**
     * 
     * @type {number}
     * @memberof ResourceTimeSlotGenerationResult
     */
    unchanged: number;
    /**
     * 
     * @type {number}
     * @memberof ResourceTimeSlotGenerationResult
     */
    updated: number;
}
/**
 * 
 * @export
 * @interface ResourceTimeSlotListResponse
 */
export interface ResourceTimeSlotListResponse {
    /**
     * 
     * @type {string}
     * @memberof ResourceTimeSlotListResponse
     */
    resourceId: string;
    /**
     * 
     * @type {Array<ResourceTimeSlot>}
     * @memberof ResourceTimeSlotListResponse
     */
    slots: Array<ResourceTimeSlot>;
}
/**
 * 
 * @export
 * @interface RetractHandoffNoteRequest
 */
export interface RetractHandoffNoteRequest {
    /**
     * 
     * @type {string}
     * @memberof RetractHandoffNoteRequest
     */
    reason?: string | null;
}
/**
 * 
 * @export
 * @interface ReturnLineRefRequest
 */
export interface ReturnLineRefRequest {
    /**
     * 
     * @type {string}
     * @memberof ReturnLineRefRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnLineRefRequest
     */
    kind: string;
}
/**
 * 
 * @export
 * @interface ReturnLineRefResponse
 */
export interface ReturnLineRefResponse {
    /**
     * 
     * @type {string}
     * @memberof ReturnLineRefResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnLineRefResponse
     */
    kind: string;
}
/**
 * 
 * @export
 * @interface ReturnLineResponse
 */
export interface ReturnLineResponse {
    /**
     * 
     * @type {string}
     * @memberof ReturnLineResponse
     */
    disposition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnLineResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnLineResponse
     */
    inspectionNote?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReturnLineResponse
     */
    purchasedQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof ReturnLineResponse
     */
    requestedQuantity: number;
    /**
     * 
     * @type {string}
     * @memberof ReturnLineResponse
     */
    sku?: string | null;
    /**
     * 
     * @type {ReturnLineRefResponse}
     * @memberof ReturnLineResponse
     */
    sourceLine: ReturnLineRefResponse;
}
/**
 * 
 * @export
 * @interface ReturnOrderRefRequest
 */
export interface ReturnOrderRefRequest {
    /**
     * 
     * @type {string}
     * @memberof ReturnOrderRefRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnOrderRefRequest
     */
    kind: string;
}
/**
 * 
 * @export
 * @interface ReturnOrderRefResponse
 */
export interface ReturnOrderRefResponse {
    /**
     * 
     * @type {string}
     * @memberof ReturnOrderRefResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnOrderRefResponse
     */
    kind: string;
}
/**
 * 
 * @export
 * @interface ReturnRequestListResponse
 */
export interface ReturnRequestListResponse {
    /**
     * 
     * @type {Array<ReturnRequestResponse>}
     * @memberof ReturnRequestListResponse
     */
    items: Array<ReturnRequestResponse>;
}
/**
 * 
 * @export
 * @interface ReturnRequestResponse
 */
export interface ReturnRequestResponse {
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    authorizedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    cancelledAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    completedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    customerNote?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    inspectedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    inspectionStartedAt?: string | null;
    /**
     * 
     * @type {Array<ReturnLineResponse>}
     * @memberof ReturnRequestResponse
     */
    lines: Array<ReturnLineResponse>;
    /**
     * 
     * @type {ReturnOrderRefResponse}
     * @memberof ReturnRequestResponse
     */
    orderRef: ReturnOrderRefResponse;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    rejectedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    requestedAt: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    returnDueAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface SaasChangeRequestListResponse
 */
export interface SaasChangeRequestListResponse {
    /**
     * 
     * @type {Array<SaasChangeRequestResponse>}
     * @memberof SaasChangeRequestListResponse
     */
    items: Array<SaasChangeRequestResponse>;
}
/**
 * 
 * @export
 * @interface SaasChangeRequestResponse
 */
export interface SaasChangeRequestResponse {
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    approver: string;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    changeType: string;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    decidedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    decidedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    decisionNote?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaasChangeRequestResponse
     */
    estimatedDeltaYen: number;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    fromPlan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    requestedAt: string;
    /**
     * 
     * @type {number}
     * @memberof SaasChangeRequestResponse
     */
    requestedSeats?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    requester: string;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    serviceName: string;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    subscriptionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    toPlan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaasChangeRequestResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface SaasSubscriptionListResponse
 */
export interface SaasSubscriptionListResponse {
    /**
     * 
     * @type {Array<SaasSubscriptionResponse>}
     * @memberof SaasSubscriptionListResponse
     */
    items: Array<SaasSubscriptionResponse>;
    /**
     * 
     * @type {SaasSubscriptionSummaryResponse}
     * @memberof SaasSubscriptionListResponse
     */
    summary: SaasSubscriptionSummaryResponse;
}
/**
 * 
 * @export
 * @interface SaasSubscriptionResponse
 */
export interface SaasSubscriptionResponse {
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    approvalState: string;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    approvedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    approvedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    billingCycle: string;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    createdBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    currentPlan: string;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof SaasSubscriptionResponse
     */
    monthlyAmountYen: number;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    nextPlan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    ownerTeam: string;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    renewalDate: string;
    /**
     * 
     * @type {number}
     * @memberof SaasSubscriptionResponse
     */
    seats: number;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    serviceName: string;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof SaasSubscriptionResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface SaasSubscriptionSummaryResponse
 */
export interface SaasSubscriptionSummaryResponse {
    /**
     * 
     * @type {number}
     * @memberof SaasSubscriptionSummaryResponse
     */
    monthlyTotalYen: number;
    /**
     * 
     * @type {number}
     * @memberof SaasSubscriptionSummaryResponse
     */
    pendingDeltaYen: number;
    /**
     * 
     * @type {number}
     * @memberof SaasSubscriptionSummaryResponse
     */
    renewalReviewCount: number;
    /**
     * 
     * @type {number}
     * @memberof SaasSubscriptionSummaryResponse
     */
    subscriptionCount: number;
}
/**
 * 
 * @export
 * @interface SalesTaskListResponse
 */
export interface SalesTaskListResponse {
    /**
     * 
     * @type {Array<SalesTaskResponse>}
     * @memberof SalesTaskListResponse
     */
    items: Array<SalesTaskResponse>;
}
/**
 * 
 * @export
 * @interface SalesTaskResponse
 */
export interface SalesTaskResponse {
    /**
     * 
     * @type {string}
     * @memberof SalesTaskResponse
     */
    assignee?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SalesTaskResponse
     */
    clientId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof SalesTaskResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof SalesTaskResponse
     */
    dealId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof SalesTaskResponse
     */
    dueAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof SalesTaskResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SalesTaskResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof SalesTaskResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof SalesTaskResponse
     */
    title: string;
    /**
     * 
     * @type {Date}
     * @memberof SalesTaskResponse
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface SaveCaddieAvailabilityRequest
 */
export interface SaveCaddieAvailabilityRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveCaddieAvailabilityRequest
     */
    caddieProfileId: string;
    /**
     * 
     * @type {Date}
     * @memberof SaveCaddieAvailabilityRequest
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof SaveCaddieAvailabilityRequest
     */
    healthNote?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveCaddieAvailabilityRequest
     */
    status?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SaveCaddieAvailabilityRequest
     */
    twoRoundRequest?: boolean | null;
}
/**
 * 
 * @export
 * @interface SaveDailyBudgetRequest
 */
export interface SaveDailyBudgetRequest {
    /**
     * 
     * @type {Date}
     * @memberof SaveDailyBudgetRequest
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof SaveDailyBudgetRequest
     */
    golfCourseId: string;
    /**
     * 
     * @type {number}
     * @memberof SaveDailyBudgetRequest
     */
    targetAverageSpend: number;
    /**
     * 
     * @type {number}
     * @memberof SaveDailyBudgetRequest
     */
    targetCaddyAttachedRatio: number;
    /**
     * 
     * @type {number}
     * @memberof SaveDailyBudgetRequest
     */
    targetRevenue: number;
}
/**
 * 
 * @export
 * @interface SaveDocumentPdfSettingsRequest
 */
export interface SaveDocumentPdfSettingsRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveDocumentPdfSettingsRequest
     */
    defaultTemplate: string;
    /**
     * 
     * @type {boolean}
     * @memberof SaveDocumentPdfSettingsRequest
     */
    includeSealByDefault: boolean;
    /**
     * 
     * @type {DocumentPdfImage}
     * @memberof SaveDocumentPdfSettingsRequest
     */
    logoImage?: DocumentPdfImage | null;
    /**
     * 
     * @type {DocumentPdfImage}
     * @memberof SaveDocumentPdfSettingsRequest
     */
    sealImage?: DocumentPdfImage | null;
}
/**
 * 
 * @export
 * @interface SaveGolfCaddieAssignmentRequest
 */
export interface SaveGolfCaddieAssignmentRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    assignmentRole?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    caddieProfileId: string;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    feeAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    feeCurrency?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    holes?: number | null;
    /**
     * 
     * @type {any}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    playerCount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    recommendationScore?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    reservationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    roundReference?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    scheduledAt: Date;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieAssignmentRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface SaveGolfCaddieProfileRequest
 */
export interface SaveGolfCaddieProfileRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SaveGolfCaddieProfileRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCaddieProfileRequest
     */
    baseFeeAmount: number;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieProfileRequest
     */
    caddieCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SaveGolfCaddieProfileRequest
     */
    canTwoRounds?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof SaveGolfCaddieProfileRequest
     */
    courseKnowledge?: any | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieProfileRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCaddieProfileRequest
     */
    desiredIncome?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieProfileRequest
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieProfileRequest
     */
    employmentStatus?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SaveGolfCaddieProfileRequest
     */
    languages?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCaddieProfileRequest
     */
    maxRoundsPerDay?: number | null;
    /**
     * 
     * @type {any}
     * @memberof SaveGolfCaddieProfileRequest
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCaddieProfileRequest
     */
    monthlyContractRounds?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieProfileRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieProfileRequest
     */
    rank?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieProfileRequest
     */
    skillLevel: string;
    /**
     * 
     * @type {any}
     * @memberof SaveGolfCaddieProfileRequest
     */
    specialtiesJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieProfileRequest
     */
    staffId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieProfileRequest
     */
    staffReferenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieProfileRequest
     */
    staffReferenceType?: string | null;
}
/**
 * 
 * @export
 * @interface SaveGolfCaddieRatingRequest
 */
export interface SaveGolfCaddieRatingRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieRatingRequest
     */
    assignmentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieRatingRequest
     */
    caddieProfileId: string;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieRatingRequest
     */
    comment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieRatingRequest
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCaddieRatingRequest
     */
    reservationId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCaddieRatingRequest
     */
    score: number;
}
/**
 * 
 * @export
 * @interface SaveGolfCourseRequest
 */
export interface SaveGolfCourseRequest {
    /**
     * 
     * @type {any}
     * @memberof SaveGolfCourseRequest
     */
    businessHoursJson?: any | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCourseRequest
     */
    holeCount?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof SaveGolfCourseRequest
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCourseRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCourseRequest
     */
    shortName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCourseRequest
     */
    startIntervalMinutes?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCourseRequest
     */
    timezone?: string | null;
}
/**
 * 
 * @export
 * @interface SaveGolfCourseResourceRequest
 */
export interface SaveGolfCourseResourceRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SaveGolfCourseResourceRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof SaveGolfCourseResourceRequest
     */
    attributesJson?: any | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCourseResourceRequest
     */
    capacity?: number | null;
    /**
     * この resource が受け付けるコース（`golf_courses.id`）。
     * @type {string}
     * @memberof SaveGolfCourseResourceRequest
     */
    golfCourseId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCourseResourceRequest
     */
    holeCount?: number | null;
    /**
     * 
     * @type {any}
     * @memberof SaveGolfCourseResourceRequest
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCourseResourceRequest
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCourseResourceRequest
     */
    par?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCourseResourceRequest
     */
    reservationResourceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCourseResourceRequest
     */
    resourceCode: string;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCourseResourceRequest
     */
    resourceKind: string;
}
/**
 * 
 * @export
 * @interface SaveGolfCustomFieldRequest
 */
export interface SaveGolfCustomFieldRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SaveGolfCustomFieldRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfCustomFieldRequest
     */
    displayOrder?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCustomFieldRequest
     */
    fieldKey: string;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCustomFieldRequest
     */
    fieldType: string;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCustomFieldRequest
     */
    label: string;
    /**
     * 
     * @type {boolean}
     * @memberof SaveGolfCustomFieldRequest
     */
    required?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfCustomFieldRequest
     */
    reservationTypeId?: string | null;
    /**
     * 
     * @type {any}
     * @memberof SaveGolfCustomFieldRequest
     */
    schemaJson: any | null;
}
/**
 * 
 * @export
 * @interface SaveGolfReservationProductRequest
 */
export interface SaveGolfReservationProductRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveGolfReservationProductRequest
     */
    displayName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfReservationProductRequest
     */
    expectedDurationMinutes?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SaveGolfReservationProductRequest
     */
    holeCount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveGolfReservationProductRequest
     */
    playType: string;
}
/**
 * 
 * @export
 * @interface SaveReservationNotificationTemplatesRequest
 */
export interface SaveReservationNotificationTemplatesRequest {
    /**
     * Every kind the caller wants to write, keyed by kind.
     * @type {{ [key: string]: ReservationNotificationTemplateContent; }}
     * @memberof SaveReservationNotificationTemplatesRequest
     */
    items: { [key: string]: ReservationNotificationTemplateContent; };
}
/**
 * 
 * @export
 * @interface SaveReservationProductRequest
 */
export interface SaveReservationProductRequest {
    /**
     * 
     * @type {any}
     * @memberof SaveReservationProductRequest
     */
    attributesJson: any | null;
    /**
     * 
     * @type {string}
     * @memberof SaveReservationProductRequest
     */
    bookingMode: string;
    /**
     * 
     * @type {number}
     * @memberof SaveReservationProductRequest
     */
    durationMinutes: number;
    /**
     * `null`/missing means unrestricted. An explicit empty array means the
     * product is offered on no resource.
     * @type {Array<string>}
     * @memberof SaveReservationProductRequest
     */
    eligibleResourceIds?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof SaveReservationProductRequest
     */
    enabled: boolean;
    /**
     * Stable, tenant-local product id. Omit on create to let Field generate it.
     * @type {string}
     * @memberof SaveReservationProductRequest
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveReservationProductRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SaveReservationProductRequest
     */
    ownerExtensionKey: string;
}
/**
 * 
 * @export
 * @interface SaveReservationStaffAssignmentRequest
 */
export interface SaveReservationStaffAssignmentRequest {
    /**
     * 
     * @type {any}
     * @memberof SaveReservationStaffAssignmentRequest
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof SaveReservationStaffAssignmentRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveReservationStaffAssignmentRequest
     */
    staffProfileId: string;
}
/**
 * 
 * @export
 * @interface SaveStaffAssignmentRequest
 */
export interface SaveStaffAssignmentRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveStaffAssignmentRequest
     */
    assignmentReference?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffAssignmentRequest
     */
    assignmentRole?: string | null;
    /**
     * 
     * @type {any}
     * @memberof SaveStaffAssignmentRequest
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffAssignmentRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaveStaffAssignmentRequest
     */
    rateAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffAssignmentRequest
     */
    rateCurrency?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffAssignmentRequest
     */
    reservationId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof SaveStaffAssignmentRequest
     */
    scheduledAt: Date;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffAssignmentRequest
     */
    staffProfileId: string;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffAssignmentRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface SaveStaffCompensationProfileRequest
 */
export interface SaveStaffCompensationProfileRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveStaffCompensationProfileRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaveStaffCompensationProfileRequest
     */
    dailyRateYen?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SaveStaffCompensationProfileRequest
     */
    hourlyRateYen?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SaveStaffCompensationProfileRequest
     */
    nominationFeeYen?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffCompensationProfileRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaveStaffCompensationProfileRequest
     */
    roundRateYen?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SaveStaffCompensationProfileRequest
     */
    transportAllowanceYen?: number | null;
}
/**
 * 
 * @export
 * @interface SaveStaffMemberRequest
 */
export interface SaveStaffMemberRequest {
    /**
     * Superseded by `employmentStatus`; `false` still means retired.
     * @type {boolean}
     * @memberof SaveStaffMemberRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof SaveStaffMemberRequest
     */
    attributesJson?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof SaveStaffMemberRequest
     */
    contractEndDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffMemberRequest
     */
    email?: string | null;
    /**
     * active / on_leave / retired. Wins over `active` when both are sent.
     * @type {string}
     * @memberof SaveStaffMemberRequest
     */
    employmentStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffMemberRequest
     */
    employmentType?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof SaveStaffMemberRequest
     */
    hiredAt?: Date | null;
    /**
     * The office or post held, kept apart from `employmentType` because a
     * director is engaged under a delegation contract rather than employment.
     * @type {string}
     * @memberof SaveStaffMemberRequest
     */
    jobTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffMemberRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffMemberRequest
     */
    phone?: string | null;
}
/**
 * 
 * @export
 * @interface SaveStaffProfileRequest
 */
export interface SaveStaffProfileRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SaveStaffProfileRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof SaveStaffProfileRequest
     */
    capabilities?: any | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffProfileRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SaveStaffProfileRequest
     */
    defaultRateAmount: number;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffProfileRequest
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffProfileRequest
     */
    employmentStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffProfileRequest
     */
    experienceLevel: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SaveStaffProfileRequest
     */
    languages?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof SaveStaffProfileRequest
     */
    maxAssignmentsPerDay?: number | null;
    /**
     * 
     * @type {any}
     * @memberof SaveStaffProfileRequest
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffProfileRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffProfileRequest
     */
    profileCode?: string | null;
    /**
     * 
     * @type {any}
     * @memberof SaveStaffProfileRequest
     */
    specialtiesJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffProfileRequest
     */
    staffId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffProfileRequest
     */
    staffReferenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffProfileRequest
     */
    staffReferenceType?: string | null;
}
/**
 * 
 * @export
 * @interface SaveStaffShiftPreferenceRequest
 */
export interface SaveStaffShiftPreferenceRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof SaveStaffShiftPreferenceRequest
     */
    availableLocations?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof SaveStaffShiftPreferenceRequest
     */
    desiredWorkDaysPerWeek?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SaveStaffShiftPreferenceRequest
     */
    monthlyIncomeTargetYen?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffShiftPreferenceRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SaveStaffShiftPreferenceRequest
     */
    preferredDays?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffShiftPreferenceRequest
     */
    preferredTimeBand?: string | null;
    /**
     * 
     * @type {Array<Date>}
     * @memberof SaveStaffShiftPreferenceRequest
     */
    unavailableDates?: Array<Date> | null;
}
/**
 * 
 * @export
 * @interface SaveStaffShiftRequest
 */
export interface SaveStaffShiftRequest {
    /**
     * 
     * @type {Date}
     * @memberof SaveStaffShiftRequest
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffShiftRequest
     */
    endTime: string;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffShiftRequest
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffShiftRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffShiftRequest
     */
    shiftType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffShiftRequest
     */
    startTime: string;
}
/**
 * 
 * @export
 * @interface SaveStaffSkillProfileRequest
 */
export interface SaveStaffSkillProfileRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof SaveStaffSkillProfileRequest
     */
    certifications?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SaveStaffSkillProfileRequest
     */
    languages?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof SaveStaffSkillProfileRequest
     */
    maxRoundsPerDay?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStaffSkillProfileRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SaveStaffSkillProfileRequest
     */
    skillTags?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface SaveStoreRequest
 */
export interface SaveStoreRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveStoreRequest
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStoreRequest
     */
    businessHours?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStoreRequest
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStoreRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SaveStoreRequest
     */
    posLocationId?: string | null;
}
/**
 * 
 * @export
 * @interface SaveStorefrontProfileRequest
 */
export interface SaveStorefrontProfileRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    contactEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    legalName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    legalNotice?: string | null;
    /**
     * 
     * @type {StorefrontLogo}
     * @memberof SaveStorefrontProfileRequest
     */
    logo?: StorefrontLogo | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    representativeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    subName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    tagline?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    themeColor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveStorefrontProfileRequest
     */
    websiteUrl?: string | null;
}
/**
 * 
 * @export
 * @interface SaveWarehouseRequest
 */
export interface SaveWarehouseRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveWarehouseRequest
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveWarehouseRequest
     */
    name: string;
}

/**
 * 
 * @export
 */
export const ScheduleDateOverrideKind = {
    Closed: 'closed',
    Replace: 'replace'
} as const;
export type ScheduleDateOverrideKind = typeof ScheduleDateOverrideKind[keyof typeof ScheduleDateOverrideKind];

/**
 * 
 * @export
 * @interface ScheduleDateOverrideWindow
 */
export interface ScheduleDateOverrideWindow {
    /**
     * Count of reservation groups used by schedule capacity and slot counters.
     * 
     * This is intentionally distinct from reservation party size, which counts
     * people or subjects.
     * @type {number}
     * @memberof ScheduleDateOverrideWindow
     */
    capacity: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduleDateOverrideWindow
     */
    endTime: string;
    /**
     * 
     * @type {number}
     * @memberof ScheduleDateOverrideWindow
     */
    slotIntervalMinutes: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduleDateOverrideWindow
     */
    startTime: string;
}
/**
 * 
 * @export
 * @interface ScheduleDateOverrideWindowRequest
 */
export interface ScheduleDateOverrideWindowRequest {
    /**
     * 
     * @type {number}
     * @memberof ScheduleDateOverrideWindowRequest
     */
    capacity: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduleDateOverrideWindowRequest
     */
    endTime: string;
    /**
     * 
     * @type {number}
     * @memberof ScheduleDateOverrideWindowRequest
     */
    slotIntervalMinutes: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduleDateOverrideWindowRequest
     */
    startTime: string;
}
/**
 * 
 * @export
 * @interface ScheduleLineItemRequest
 */
export interface ScheduleLineItemRequest {
    /**
     * 
     * @type {string}
     * @memberof ScheduleLineItemRequest
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof ScheduleLineItemRequest
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduleLineItemRequest
     */
    taxCategory?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ScheduleLineItemRequest
     */
    unitPrice: number;
}
/**
 * 
 * @export
 * @interface ScheduleListResponse
 */
export interface ScheduleListResponse {
    /**
     * 
     * @type {Array<ScheduleResponse>}
     * @memberof ScheduleListResponse
     */
    items: Array<ScheduleResponse>;
}

/**
 * 
 * @export
 */
export const ScheduleLocationScope = {
    Tenant: 'tenant'
} as const;
export type ScheduleLocationScope = typeof ScheduleLocationScope[keyof typeof ScheduleLocationScope];

/**
 * 
 * @export
 * @interface ScheduleResponse
 */
export interface ScheduleResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ScheduleResponse
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    clientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    clientName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof ScheduleResponse
     */
    dueInDays: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    frequency: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    invoiceNumberPrefix: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    lastIssuedAt?: string | null;
    /**
     * Recurring line items (description, quantity, unit price, tax category).
     * @type {Array<object>}
     * @memberof ScheduleResponse
     */
    lineItems: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    nextIssueDate: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduleResponse
     */
    taxCategory: string;
}

/**
 * 
 * @export
 */
export const ScheduleSourceKind = {
    AvailabilityRule: 'availability_rule',
    DateOverride: 'date_override'
} as const;
export type ScheduleSourceKind = typeof ScheduleSourceKind[keyof typeof ScheduleSourceKind];

/**
 * 
 * @export
 * @interface SeedReservationProductsRequest
 */
export interface SeedReservationProductsRequest {
    /**
     * 
     * @type {string}
     * @memberof SeedReservationProductsRequest
     */
    extensionKey: string;
}
/**
 * 
 * @export
 * @interface SeedReservationProductsResponse
 */
export interface SeedReservationProductsResponse {
    /**
     * 
     * @type {boolean}
     * @memberof SeedReservationProductsResponse
     */
    alreadySeeded: boolean;
    /**
     * 
     * @type {Array<ReservationProductCatalogItem>}
     * @memberof SeedReservationProductsResponse
     */
    items: Array<ReservationProductCatalogItem>;
}
/**
 * 
 * @export
 * @interface SelectPickupDatetimeRequest
 */
export interface SelectPickupDatetimeRequest {
    /**
     * 
     * @type {string}
     * @memberof SelectPickupDatetimeRequest
     */
    pickupRequestedAt?: string | null;
}
/**
 * One option chosen on a line, as it was priced when the line was written.
 * @export
 * @interface SelectedOptionResponse
 */
export interface SelectedOptionResponse {
    /**
     * 
     * @type {string}
     * @memberof SelectedOptionResponse
     */
    groupId: string;
    /**
     * 
     * @type {string}
     * @memberof SelectedOptionResponse
     */
    groupName: string;
    /**
     * 
     * @type {string}
     * @memberof SelectedOptionResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SelectedOptionResponse
     */
    optionId: string;
    /**
     * 
     * @type {number}
     * @memberof SelectedOptionResponse
     */
    priceDeltaNanodollar: number;
}
/**
 * 
 * @export
 * @interface SendReservationNotificationRequest
 */
export interface SendReservationNotificationRequest {
    /**
     * 
     * @type {string}
     * @memberof SendReservationNotificationRequest
     */
    bodyTemplate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SendReservationNotificationRequest
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof SendReservationNotificationRequest
     */
    subjectTemplate?: string | null;
}
/**
 * 
 * @export
 * @interface SendReservationNotificationResponse
 */
export interface SendReservationNotificationResponse {
    /**
     * 
     * @type {Reservation}
     * @memberof SendReservationNotificationResponse
     */
    reservation: Reservation;
    /**
     * 
     * @type {Date}
     * @memberof SendReservationNotificationResponse
     */
    sentAt: Date;
}
/**
 * 
 * @export
 * @interface SendSigningRequestResponse
 */
export interface SendSigningRequestResponse {
    /**
     * 
     * @type {InvitationDeliveryStatus}
     * @memberof SendSigningRequestResponse
     */
    deliveryStatus: InvitationDeliveryStatus;
    /**
     * 
     * @type {Date}
     * @memberof SendSigningRequestResponse
     */
    expiresAt: Date;
    /**
     * Canonical public URL used for both email delivery and manual copy.
     * @type {string}
     * @memberof SendSigningRequestResponse
     */
    invitationUrl: string;
    /**
     * 
     * @type {SigningRequestDetailResponse}
     * @memberof SendSigningRequestResponse
     */
    request: SigningRequestDetailResponse;
    /**
     * Returned only by this send call. The raw token is never persisted.
     * @type {string}
     * @memberof SendSigningRequestResponse
     */
    signingToken: string;
}


/**
 * 
 * @export
 * @interface SetCustomFieldValuesRequest
 */
export interface SetCustomFieldValuesRequest {
    /**
     * Map of fieldKey to JSON value. `null` clears a stored value.
     * @type {object}
     * @memberof SetCustomFieldValuesRequest
     */
    values: object;
}
/**
 * 
 * @export
 * @interface SigningArtifactResponse
 */
export interface SigningArtifactResponse {
    /**
     * 
     * @type {string}
     * @memberof SigningArtifactResponse
     */
    artifactSlot: string;
    /**
     * 
     * @type {number}
     * @memberof SigningArtifactResponse
     */
    attemptCount: number;
    /**
     * 
     * @type {string}
     * @memberof SigningArtifactResponse
     */
    contentType?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof SigningArtifactResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof SigningArtifactResponse
     */
    evidenceRecordId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SigningArtifactResponse
     */
    failureCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SigningArtifactResponse
     */
    fileSizeBytes?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SigningArtifactResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SigningArtifactResponse
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof SigningArtifactResponse
     */
    sha256?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SigningArtifactResponse
     */
    signerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SigningArtifactResponse
     */
    status: string;
    /**
     * 
     * @type {Date}
     * @memberof SigningArtifactResponse
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface SigningEventResponse
 */
export interface SigningEventResponse {
    /**
     * 
     * @type {string}
     * @memberof SigningEventResponse
     */
    actorId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SigningEventResponse
     */
    actorIp?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SigningEventResponse
     */
    actorType: string;
    /**
     * 
     * @type {string}
     * @memberof SigningEventResponse
     */
    eventHash: string;
    /**
     * 
     * @type {string}
     * @memberof SigningEventResponse
     */
    eventType: string;
    /**
     * 
     * @type {number}
     * @memberof SigningEventResponse
     */
    hashVersion: number;
    /**
     * 
     * @type {string}
     * @memberof SigningEventResponse
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof SigningEventResponse
     */
    occurredAt: Date;
    /**
     * 
     * @type {any}
     * @memberof SigningEventResponse
     */
    payload: any | null;
    /**
     * 
     * @type {string}
     * @memberof SigningEventResponse
     */
    previousEventHash?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SigningEventResponse
     */
    sequenceNo: number;
    /**
     * 
     * @type {string}
     * @memberof SigningEventResponse
     */
    signerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SigningEventResponse
     */
    userAgent?: string | null;
}
/**
 * 
 * @export
 * @interface SigningFieldDefinition
 */
export interface SigningFieldDefinition {
    /**
     * 
     * @type {string}
     * @memberof SigningFieldDefinition
     */
    fieldKey: string;
    /**
     * 
     * @type {string}
     * @memberof SigningFieldDefinition
     */
    fieldType: string;
    /**
     * 
     * @type {string}
     * @memberof SigningFieldDefinition
     */
    label: string;
    /**
     * 
     * @type {boolean}
     * @memberof SigningFieldDefinition
     */
    required: boolean;
}
/**
 * 
 * @export
 * @interface SigningRequestDetailResponse
 */
export interface SigningRequestDetailResponse {
    /**
     * 
     * @type {Array<SigningArtifactResponse>}
     * @memberof SigningRequestDetailResponse
     */
    artifacts: Array<SigningArtifactResponse>;
    /**
     * 
     * @type {any}
     * @memberof SigningRequestDetailResponse
     */
    documentSnapshot: any | null;
    /**
     * 
     * @type {Array<SigningEventResponse>}
     * @memberof SigningRequestDetailResponse
     */
    events: Array<SigningEventResponse>;
    /**
     * 
     * @type {SigningRequestSummary}
     * @memberof SigningRequestDetailResponse
     */
    request: SigningRequestSummary;
    /**
     * 
     * @type {Array<SigningSignerResponse>}
     * @memberof SigningRequestDetailResponse
     */
    signers: Array<SigningSignerResponse>;
    /**
     * 
     * @type {Array<SigningValueResponse>}
     * @memberof SigningRequestDetailResponse
     */
    values: Array<SigningValueResponse>;
}
/**
 * 
 * @export
 * @interface SigningRequestListResponse
 */
export interface SigningRequestListResponse {
    /**
     * 
     * @type {Array<SigningRequestSummary>}
     * @memberof SigningRequestListResponse
     */
    items: Array<SigningRequestSummary>;
    /**
     * 
     * @type {number}
     * @memberof SigningRequestListResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof SigningRequestListResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof SigningRequestListResponse
     */
    total: number;
}
/**
 * 
 * @export
 * @interface SigningRequestSummary
 */
export interface SigningRequestSummary {
    /**
     * 
     * @type {Date}
     * @memberof SigningRequestSummary
     */
    completedAt?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof SigningRequestSummary
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof SigningRequestSummary
     */
    createdBy: string;
    /**
     * 
     * @type {Date}
     * @memberof SigningRequestSummary
     */
    expiresAt: Date;
    /**
     * 
     * @type {string}
     * @memberof SigningRequestSummary
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof SigningRequestSummary
     */
    revokedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof SigningRequestSummary
     */
    salesContractId: string;
    /**
     * 
     * @type {Date}
     * @memberof SigningRequestSummary
     */
    sentAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof SigningRequestSummary
     */
    snapshotSha256: string;
    /**
     * 
     * @type {string}
     * @memberof SigningRequestSummary
     */
    status: string;
    /**
     * 
     * @type {Date}
     * @memberof SigningRequestSummary
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface SigningSignerResponse
 */
export interface SigningSignerResponse {
    /**
     * 
     * @type {Date}
     * @memberof SigningSignerResponse
     */
    completedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof SigningSignerResponse
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof SigningSignerResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SigningSignerResponse
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof SigningSignerResponse
     */
    revokedAt?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof SigningSignerResponse
     */
    sentAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof SigningSignerResponse
     */
    signerRole: string;
    /**
     * 
     * @type {number}
     * @memberof SigningSignerResponse
     */
    signingOrder: number;
    /**
     * 
     * @type {string}
     * @memberof SigningSignerResponse
     */
    status: string;
    /**
     * 
     * @type {Date}
     * @memberof SigningSignerResponse
     */
    tokenExpiresAt?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof SigningSignerResponse
     */
    viewedAt?: Date | null;
}
/**
 * 
 * @export
 * @interface SigningValueResponse
 */
export interface SigningValueResponse {
    /**
     * 
     * @type {Date}
     * @memberof SigningValueResponse
     */
    completedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof SigningValueResponse
     */
    fieldKey: string;
    /**
     * 
     * @type {string}
     * @memberof SigningValueResponse
     */
    fieldType: string;
    /**
     * 
     * @type {string}
     * @memberof SigningValueResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SigningValueResponse
     */
    label: string;
    /**
     * 
     * @type {boolean}
     * @memberof SigningValueResponse
     */
    required: boolean;
    /**
     * 
     * @type {string}
     * @memberof SigningValueResponse
     */
    signerId: string;
    /**
     * 
     * @type {any}
     * @memberof SigningValueResponse
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof SigningValueResponse
     */
    valueSha256?: string | null;
}

/**
 * 
 * @export
 */
export const SmsStatus = {
    NotRequested: 'not_requested',
    Sent: 'sent',
    Failed: 'failed'
} as const;
export type SmsStatus = typeof SmsStatus[keyof typeof SmsStatus];

/**
 * 
 * @export
 * @interface SolarBoundary
 */
export interface SolarBoundary {
    /**
     * 
     * @type {SolarEventKind}
     * @memberof SolarBoundary
     */
    event: SolarEventKind;
    /**
     * 
     * @type {number}
     * @memberof SolarBoundary
     */
    offsetMinutes: number;
}



/**
 * 
 * @export
 */
export const SolarEventKind = {
    Sunrise: 'sunrise',
    Sunset: 'sunset'
} as const;
export type SolarEventKind = typeof SolarEventKind[keyof typeof SolarEventKind];

/**
 * 
 * @export
 * @interface SolarWindow
 */
export interface SolarWindow {
    /**
     * 
     * @type {SolarBoundary}
     * @memberof SolarWindow
     */
    earliestStart?: SolarBoundary | null;
    /**
     * 
     * @type {SolarBoundary}
     * @memberof SolarWindow
     */
    latestStart?: SolarBoundary | null;
    /**
     * 
     * @type {ScheduleLocationScope}
     * @memberof SolarWindow
     */
    locationScope: ScheduleLocationScope;
}


/**
 * 
 * @export
 * @interface SquarePaymentReconciliationListResponse
 */
export interface SquarePaymentReconciliationListResponse {
    /**
     * 
     * @type {Array<SquarePaymentReconciliationResponse>}
     * @memberof SquarePaymentReconciliationListResponse
     */
    items: Array<SquarePaymentReconciliationResponse>;
}
/**
 * 
 * @export
 * @interface SquarePaymentReconciliationResponse
 */
export interface SquarePaymentReconciliationResponse {
    /**
     * 
     * @type {number}
     * @memberof SquarePaymentReconciliationResponse
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    matchReason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    matchedInvoiceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    payerHint?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    receiptEmailSentAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    receivedAt: string;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    squareEventId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    squarePaymentId: string;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof SquarePaymentReconciliationResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface StaffAssignmentListResponse
 */
export interface StaffAssignmentListResponse {
    /**
     * 
     * @type {Array<StaffAssignmentView>}
     * @memberof StaffAssignmentListResponse
     */
    items: Array<StaffAssignmentView>;
}
/**
 * 
 * @export
 * @interface StaffAssignmentView
 */
export interface StaffAssignmentView {
    /**
     * 
     * @type {string}
     * @memberof StaffAssignmentView
     */
    assignmentReference?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffAssignmentView
     */
    assignmentRole: string;
    /**
     * 
     * @type {Date}
     * @memberof StaffAssignmentView
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof StaffAssignmentView
     */
    id: string;
    /**
     * 
     * @type {any}
     * @memberof StaffAssignmentView
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof StaffAssignmentView
     */
    notes?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StaffAssignmentView
     */
    rateAmount: number;
    /**
     * 
     * @type {string}
     * @memberof StaffAssignmentView
     */
    rateCurrency: string;
    /**
     * 
     * @type {string}
     * @memberof StaffAssignmentView
     */
    reservationId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof StaffAssignmentView
     */
    scheduledAt: Date;
    /**
     * 
     * @type {string}
     * @memberof StaffAssignmentView
     */
    staffProfileId: string;
    /**
     * 
     * @type {string}
     * @memberof StaffAssignmentView
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof StaffAssignmentView
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof StaffAssignmentView
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface StaffAttendance
 */
export interface StaffAttendance {
    /**
     * 
     * @type {number}
     * @memberof StaffAttendance
     */
    breakMinutes: number;
    /**
     * 
     * @type {Date}
     * @memberof StaffAttendance
     */
    clockIn: Date;
    /**
     * 
     * @type {Date}
     * @memberof StaffAttendance
     */
    clockOut?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof StaffAttendance
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof StaffAttendance
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof StaffAttendance
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StaffAttendance
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffAttendance
     */
    staffId: string;
    /**
     * 
     * @type {string}
     * @memberof StaffAttendance
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof StaffAttendance
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface StaffAvailabilityResponse
 */
export interface StaffAvailabilityResponse {
    /**
     * 
     * @type {Array<StaffAvailabilityView>}
     * @memberof StaffAvailabilityResponse
     */
    items: Array<StaffAvailabilityView>;
}
/**
 * 
 * @export
 * @interface StaffAvailabilityView
 */
export interface StaffAvailabilityView {
    /**
     * 
     * @type {boolean}
     * @memberof StaffAvailabilityView
     */
    active: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StaffAvailabilityView
     */
    available: boolean;
    /**
     * 
     * @type {string}
     * @memberof StaffAvailabilityView
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof StaffAvailabilityView
     */
    overlappingAssignmentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffAvailabilityView
     */
    overlappingReservationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffAvailabilityView
     */
    profileCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffAvailabilityView
     */
    shiftEndTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffAvailabilityView
     */
    shiftId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffAvailabilityView
     */
    shiftStartTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffAvailabilityView
     */
    staffId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffAvailabilityView
     */
    staffProfileId: string;
    /**
     * 
     * @type {Array<GolfCaddieUnavailableReason>}
     * @memberof StaffAvailabilityView
     */
    unavailableReasons: Array<GolfCaddieUnavailableReason>;
}
/**
 * 
 * @export
 * @interface StaffCompensationProfile
 */
export interface StaffCompensationProfile {
    /**
     * 
     * @type {Date}
     * @memberof StaffCompensationProfile
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof StaffCompensationProfile
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof StaffCompensationProfile
     */
    dailyRateYen?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StaffCompensationProfile
     */
    hourlyRateYen?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StaffCompensationProfile
     */
    nominationFeeYen?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StaffCompensationProfile
     */
    notes?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StaffCompensationProfile
     */
    roundRateYen?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StaffCompensationProfile
     */
    staffId: string;
    /**
     * 
     * @type {string}
     * @memberof StaffCompensationProfile
     */
    tenantId: string;
    /**
     * 
     * @type {number}
     * @memberof StaffCompensationProfile
     */
    transportAllowanceYen?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof StaffCompensationProfile
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface StaffCompensationProfileResponse
 */
export interface StaffCompensationProfileResponse {
    /**
     * 
     * @type {StaffCompensationProfile}
     * @memberof StaffCompensationProfileResponse
     */
    item?: StaffCompensationProfile | null;
}

/**
 * Field v1 compatibility vocabulary: the HRM domain value `contract` is exposed as `contractor` until the CERP-25 migration tracked by PLT-3344.
 * @export
 */
export const StaffEmploymentType = {
    FullTime: 'full_time',
    PartTime: 'part_time',
    Contractor: 'contractor'
} as const;
export type StaffEmploymentType = typeof StaffEmploymentType[keyof typeof StaffEmploymentType];

/**
 * 
 * @export
 * @interface StaffLeaveRequest
 */
export interface StaffLeaveRequest {
    /**
     * 
     * @type {Date}
     * @memberof StaffLeaveRequest
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof StaffLeaveRequest
     */
    date: Date;
    /**
     * 
     * @type {Date}
     * @memberof StaffLeaveRequest
     */
    decidedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof StaffLeaveRequest
     */
    decidedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffLeaveRequest
     */
    decisionNote?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffLeaveRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StaffLeaveRequest
     */
    reason?: string | null;
    /**
     * 
     * @type {LeaveRequestType}
     * @memberof StaffLeaveRequest
     */
    requestType: LeaveRequestType;
    /**
     * 
     * @type {string}
     * @memberof StaffLeaveRequest
     */
    staffId: string;
    /**
     * 
     * @type {LeaveRequestStatus}
     * @memberof StaffLeaveRequest
     */
    status: LeaveRequestStatus;
    /**
     * 
     * @type {string}
     * @memberof StaffLeaveRequest
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof StaffLeaveRequest
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface StaffLeaveRequestListResponse
 */
export interface StaffLeaveRequestListResponse {
    /**
     * 
     * @type {Array<StaffLeaveRequest>}
     * @memberof StaffLeaveRequestListResponse
     */
    items: Array<StaffLeaveRequest>;
}
/**
 * 
 * @export
 * @interface StaffMember
 */
export interface StaffMember {
    /**
     * Kept for the clients that predate `employment_status`; always
     * `employment_status.is_active()`.
     * @type {boolean}
     * @memberof StaffMember
     */
    active: boolean;
    /**
     * 
     * @type {any}
     * @memberof StaffMember
     */
    attributesJson?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof StaffMember
     */
    contractEndDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof StaffMember
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof StaffMember
     */
    email?: string | null;
    /**
     * 
     * @type {EmploymentStatus}
     * @memberof StaffMember
     */
    employmentStatus: EmploymentStatus;
    /**
     * 
     * @type {EmploymentType}
     * @memberof StaffMember
     */
    employmentType: EmploymentType;
    /**
     * 
     * @type {Date}
     * @memberof StaffMember
     */
    hiredAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof StaffMember
     */
    id: string;
    /**
     * The position held, which is a different axis from how the person is
     * engaged: a director is under a delegation contract rather than an
     * employment one, and can serve either full time or not. Free text so a
     * tenant can spell its own org chart; `None` when nothing was recorded.
     * @type {string}
     * @memberof StaffMember
     */
    jobTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffMember
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StaffMember
     */
    phone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffMember
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof StaffMember
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface StaffMemberListResponse
 */
export interface StaffMemberListResponse {
    /**
     * 
     * @type {Array<StaffMember>}
     * @memberof StaffMemberListResponse
     */
    items: Array<StaffMember>;
}
/**
 * 
 * @export
 * @interface StaffPayrollEstimate
 */
export interface StaffPayrollEstimate {
    /**
     * 
     * @type {string}
     * @memberof StaffPayrollEstimate
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof StaffPayrollEstimate
     */
    estimatedAmountYen: number;
    /**
     * 
     * @type {number}
     * @memberof StaffPayrollEstimate
     */
    monthlyIncomeTargetYen?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StaffPayrollEstimate
     */
    period: string;
    /**
     * 
     * @type {number}
     * @memberof StaffPayrollEstimate
     */
    shiftedDays: number;
    /**
     * 
     * @type {string}
     * @memberof StaffPayrollEstimate
     */
    staffId: string;
    /**
     * 
     * @type {number}
     * @memberof StaffPayrollEstimate
     */
    targetGapYen?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StaffPayrollEstimate
     */
    tenantId: string;
    /**
     * 
     * @type {number}
     * @memberof StaffPayrollEstimate
     */
    workedDays: number;
    /**
     * 
     * @type {number}
     * @memberof StaffPayrollEstimate
     */
    workedMinutes: number;
}

/**
 * 
 * @export
 */
export const StaffPreferredTimeBand = {
    Any: 'any',
    Morning: 'morning',
    Afternoon: 'afternoon',
    Evening: 'evening'
} as const;
export type StaffPreferredTimeBand = typeof StaffPreferredTimeBand[keyof typeof StaffPreferredTimeBand];

/**
 * 
 * @export
 * @interface StaffProfileListResponse
 */
export interface StaffProfileListResponse {
    /**
     * 
     * @type {Array<StaffProfileView>}
     * @memberof StaffProfileListResponse
     */
    items: Array<StaffProfileView>;
}
/**
 * 
 * @export
 * @interface StaffProfileView
 */
export interface StaffProfileView {
    /**
     * 
     * @type {boolean}
     * @memberof StaffProfileView
     */
    active: boolean;
    /**
     * 
     * @type {any}
     * @memberof StaffProfileView
     */
    capabilities?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof StaffProfileView
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof StaffProfileView
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof StaffProfileView
     */
    defaultRateAmount: number;
    /**
     * 
     * @type {string}
     * @memberof StaffProfileView
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof StaffProfileView
     */
    employmentStatus: string;
    /**
     * 
     * @type {StaffEmploymentType}
     * @memberof StaffProfileView
     */
    employmentType?: StaffEmploymentType | null;
    /**
     * 
     * @type {string}
     * @memberof StaffProfileView
     */
    experienceLevel: string;
    /**
     * 
     * @type {string}
     * @memberof StaffProfileView
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StaffProfileView
     */
    languages: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof StaffProfileView
     */
    maxAssignmentsPerDay: number;
    /**
     * 
     * @type {any}
     * @memberof StaffProfileView
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof StaffProfileView
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffProfileView
     */
    profileCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StaffProfileView
     */
    ratingAverage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StaffProfileView
     */
    ratingCount: number;
    /**
     * 
     * @type {any}
     * @memberof StaffProfileView
     */
    specialtiesJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof StaffProfileView
     */
    staffId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffProfileView
     */
    staffReferenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffProfileView
     */
    staffReferenceType: string;
    /**
     * 
     * @type {string}
     * @memberof StaffProfileView
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof StaffProfileView
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface StaffShift
 */
export interface StaffShift {
    /**
     * 
     * @type {Date}
     * @memberof StaffShift
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof StaffShift
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof StaffShift
     */
    endTime: string;
    /**
     * 
     * @type {string}
     * @memberof StaffShift
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StaffShift
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StaffShift
     */
    shiftType: string;
    /**
     * 
     * @type {string}
     * @memberof StaffShift
     */
    staffId: string;
    /**
     * 
     * @type {string}
     * @memberof StaffShift
     */
    startTime: string;
    /**
     * 
     * @type {string}
     * @memberof StaffShift
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof StaffShift
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface StaffShiftListResponse
 */
export interface StaffShiftListResponse {
    /**
     * 
     * @type {Array<StaffShift>}
     * @memberof StaffShiftListResponse
     */
    items: Array<StaffShift>;
}
/**
 * 
 * @export
 * @interface StaffShiftPreference
 */
export interface StaffShiftPreference {
    /**
     * 
     * @type {Array<string>}
     * @memberof StaffShiftPreference
     */
    availableLocations: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof StaffShiftPreference
     */
    createdAt: Date;
    /**
     * 
     * @type {number}
     * @memberof StaffShiftPreference
     */
    desiredWorkDaysPerWeek?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StaffShiftPreference
     */
    monthlyIncomeTargetYen?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StaffShiftPreference
     */
    notes?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof StaffShiftPreference
     */
    preferredDays: Array<string>;
    /**
     * 
     * @type {StaffPreferredTimeBand}
     * @memberof StaffShiftPreference
     */
    preferredTimeBand: StaffPreferredTimeBand;
    /**
     * 
     * @type {string}
     * @memberof StaffShiftPreference
     */
    staffId: string;
    /**
     * 
     * @type {string}
     * @memberof StaffShiftPreference
     */
    tenantId: string;
    /**
     * 
     * @type {Array<Date>}
     * @memberof StaffShiftPreference
     */
    unavailableDates: Array<Date>;
    /**
     * 
     * @type {Date}
     * @memberof StaffShiftPreference
     */
    updatedAt: Date;
}


/**
 * 
 * @export
 * @interface StaffShiftPreferenceResponse
 */
export interface StaffShiftPreferenceResponse {
    /**
     * 
     * @type {StaffShiftPreference}
     * @memberof StaffShiftPreferenceResponse
     */
    item?: StaffShiftPreference | null;
}
/**
 * 
 * @export
 * @interface StaffSkillProfile
 */
export interface StaffSkillProfile {
    /**
     * 
     * @type {Array<string>}
     * @memberof StaffSkillProfile
     */
    certifications: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof StaffSkillProfile
     */
    createdAt: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof StaffSkillProfile
     */
    languages: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof StaffSkillProfile
     */
    maxRoundsPerDay?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StaffSkillProfile
     */
    notes?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof StaffSkillProfile
     */
    skillTags: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StaffSkillProfile
     */
    staffId: string;
    /**
     * 
     * @type {string}
     * @memberof StaffSkillProfile
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof StaffSkillProfile
     */
    updatedAt: Date;
}
/**
 * 
 * @export
 * @interface StaffSkillProfileResponse
 */
export interface StaffSkillProfileResponse {
    /**
     * 
     * @type {StaffSkillProfile}
     * @memberof StaffSkillProfileResponse
     */
    item?: StaffSkillProfile | null;
}
/**
 * 
 * @export
 * @interface StaffWorkload
 */
export interface StaffWorkload {
    /**
     * 
     * @type {string}
     * @memberof StaffWorkload
     */
    period: string;
    /**
     * 
     * @type {number}
     * @memberof StaffWorkload
     */
    shiftedMinutes: number;
    /**
     * 
     * @type {string}
     * @memberof StaffWorkload
     */
    staffId: string;
    /**
     * 
     * @type {string}
     * @memberof StaffWorkload
     */
    tenantId: string;
    /**
     * 
     * @type {number}
     * @memberof StaffWorkload
     */
    utilizationRate: number;
    /**
     * 
     * @type {number}
     * @memberof StaffWorkload
     */
    workedMinutes: number;
}
/**
 * 
 * @export
 * @interface StaffWorkloadListResponse
 */
export interface StaffWorkloadListResponse {
    /**
     * 
     * @type {Array<StaffWorkload>}
     * @memberof StaffWorkloadListResponse
     */
    items: Array<StaffWorkload>;
}
/**
 * 
 * @export
 * @interface StageSettingItem
 */
export interface StageSettingItem {
    /**
     * 
     * @type {string}
     * @memberof StageSettingItem
     */
    pipeline: string;
    /**
     * 
     * @type {string}
     * @memberof StageSettingItem
     */
    stage: string;
    /**
     * 
     * @type {number}
     * @memberof StageSettingItem
     */
    winProbability: number;
}
/**
 * 
 * @export
 * @interface StageSettingsResponse
 */
export interface StageSettingsResponse {
    /**
     * 
     * @type {Array<StageSettingItem>}
     * @memberof StageSettingsResponse
     */
    items: Array<StageSettingItem>;
}
/**
 * 
 * @export
 * @interface StartOrderSessionRequest
 */
export interface StartOrderSessionRequest {
    /**
     * The value printed in the QR. Never logged.
     * @type {string}
     * @memberof StartOrderSessionRequest
     */
    publicToken: string;
}
/**
 * The session token appears here and nowhere else — not in a later read, not
 * in a log line. A caller that loses it starts a new session.
 * @export
 * @interface StartOrderSessionResponse
 */
export interface StartOrderSessionResponse {
    /**
     * 
     * @type {PublicOrderEntryPointResponse}
     * @memberof StartOrderSessionResponse
     */
    entryPoint: PublicOrderEntryPointResponse;
    /**
     * 
     * @type {string}
     * @memberof StartOrderSessionResponse
     */
    expiresAt: string;
    /**
     * 
     * @type {string}
     * @memberof StartOrderSessionResponse
     */
    sessionToken: string;
    /**
     * 
     * @type {string}
     * @memberof StartOrderSessionResponse
     */
    state: string;
}
/**
 * 
 * @export
 * @interface StartStockTrackingRequest
 */
export interface StartStockTrackingRequest {
    /**
     * 
     * @type {string}
     * @memberof StartStockTrackingRequest
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof StartStockTrackingRequest
     */
    warehouseId: string;
}
/**
 * 
 * @export
 * @interface StockLevelListResponse
 */
export interface StockLevelListResponse {
    /**
     * 
     * @type {Array<StockLevelResponse>}
     * @memberof StockLevelListResponse
     */
    items: Array<StockLevelResponse>;
}
/**
 * A stock balance as the ERP context actually knows it.
 * 
 * The nullable fields below have **no source in this context** and are
 * therefore always `null` (#724 W4). They are kept as explicit nulls rather
 * than removed so a client can tell "not provided" from "zero"; previously
 * they carried synthesized values that read as real data:
 * 
 * - `product_name` was the SKU. The ERP context stores no product name; the
 *   SKU is the identity here. Resolving a name would mean joining
 *   `order_products` by SKU, which spans two different tenant-scoping
 *   regimes (this repository is bound to the process root tenant, that one
 *   is per-request), so it is deliberately not done here.
 * - `quantity_available` was `quantity_on_hand` and `quantity_allocated` was
 *   `0`. The ERP context models no allocation at all, so neither can be
 *   answered. Allocation lives in commerce `product_stocks`.
 * - `source_delivery_id` was already always null. A balance is the sum of
 *   many receipts, so a single delivery cannot identify it; the per-receipt
 *   link lives on stock movements.
 * 
 * See `docs/domain/inventory-source-of-truth.md`.
 * @export
 * @interface StockLevelResponse
 */
export interface StockLevelResponse {
    /**
     * 
     * @type {string}
     * @memberof StockLevelResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StockLevelResponse
     */
    lastUpdatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof StockLevelResponse
     */
    productName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StockLevelResponse
     */
    quantityAllocated?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StockLevelResponse
     */
    quantityAvailable?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StockLevelResponse
     */
    quantityOnHand: number;
    /**
     * 
     * @type {string}
     * @memberof StockLevelResponse
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof StockLevelResponse
     */
    skuCode: string;
    /**
     * 
     * @type {string}
     * @memberof StockLevelResponse
     */
    sourceDeliveryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StockLevelResponse
     */
    stockItemId: string;
    /**
     * 
     * @type {string}
     * @memberof StockLevelResponse
     */
    warehouseId: string;
    /**
     * 
     * @type {string}
     * @memberof StockLevelResponse
     */
    warehouseName: string;
}
/**
 * 
 * @export
 * @interface StockLotAllocationResponse
 */
export interface StockLotAllocationResponse {
    /**
     * 
     * @type {string}
     * @memberof StockLotAllocationResponse
     */
    expiresAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StockLotAllocationResponse
     */
    lotNo: string;
    /**
     * 
     * @type {number}
     * @memberof StockLotAllocationResponse
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof StockLotAllocationResponse
     */
    receivedAt: string;
    /**
     * 
     * @type {number}
     * @memberof StockLotAllocationResponse
     */
    remainingQuantityOnHand: number;
    /**
     * 
     * @type {string}
     * @memberof StockLotAllocationResponse
     */
    stockLotId: string;
}
/**
 * 
 * @export
 * @interface StockLotBalanceListResponse
 */
export interface StockLotBalanceListResponse {
    /**
     * 
     * @type {Array<StockLotBalanceResponse>}
     * @memberof StockLotBalanceListResponse
     */
    items: Array<StockLotBalanceResponse>;
}
/**
 * 
 * @export
 * @interface StockLotBalanceResponse
 */
export interface StockLotBalanceResponse {
    /**
     * 
     * @type {string}
     * @memberof StockLotBalanceResponse
     */
    expiresAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StockLotBalanceResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StockLotBalanceResponse
     */
    lotNo: string;
    /**
     * 
     * @type {number}
     * @memberof StockLotBalanceResponse
     */
    quantityOnHand: number;
    /**
     * 
     * @type {string}
     * @memberof StockLotBalanceResponse
     */
    receivedAt: string;
    /**
     * 
     * @type {string}
     * @memberof StockLotBalanceResponse
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof StockLotBalanceResponse
     */
    stockItemId: string;
    /**
     * 
     * @type {string}
     * @memberof StockLotBalanceResponse
     */
    stockLotId: string;
    /**
     * 
     * @type {string}
     * @memberof StockLotBalanceResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof StockLotBalanceResponse
     */
    warehouseId: string;
    /**
     * 
     * @type {string}
     * @memberof StockLotBalanceResponse
     */
    warehouseName: string;
}
/**
 * 
 * @export
 * @interface StockMovementListResponse
 */
export interface StockMovementListResponse {
    /**
     * 
     * @type {Array<StockMovementResponse>}
     * @memberof StockMovementListResponse
     */
    items: Array<StockMovementResponse>;
}
/**
 * 
 * @export
 * @interface StockMovementResponse
 */
export interface StockMovementResponse {
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    direction: string;
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    occurredAt: string;
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    operatorId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StockMovementResponse
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    referenceType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StockMovementResponse
     */
    signedQuantity: number;
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    sourceEvent: string;
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    sourceEventLabel: string;
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    stockItemId: string;
    /**
     * 
     * @type {number}
     * @memberof StockMovementResponse
     */
    unitCostAmount: number;
    /**
     * 
     * @type {number}
     * @memberof StockMovementResponse
     */
    valueAmount: number;
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    warehouseId: string;
    /**
     * 
     * @type {string}
     * @memberof StockMovementResponse
     */
    warehouseName: string;
}
/**
 * 
 * @export
 * @interface StockResponse
 */
export interface StockResponse {
    /**
     * 
     * @type {string}
     * @memberof StockResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof StockResponse
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof StockResponse
     */
    lowStockThreshold: number;
    /**
     * 
     * @type {string}
     * @memberof StockResponse
     */
    productId: string;
    /**
     * 
     * @type {number}
     * @memberof StockResponse
     */
    quantityAvailable: number;
    /**
     * 
     * @type {number}
     * @memberof StockResponse
     */
    quantityOnHand: number;
    /**
     * 
     * @type {number}
     * @memberof StockResponse
     */
    quantityReserved: number;
    /**
     * 
     * @type {boolean}
     * @memberof StockResponse
     */
    trackInventory: boolean;
    /**
     * 
     * @type {string}
     * @memberof StockResponse
     */
    updatedAt: string;
}
/**
 * Only fields the ERP context actually holds.
 * 
 * There is deliberately no `productName`, `quantityAvailable`,
 * `quantityAllocated` or `sourceDeliveryId` here: the ERP context stores no
 * product name and models no allocation, and this endpoint is new, so it does
 * not inherit the synthesized values the stock-level list still returns.
 * @export
 * @interface StockTrackingResponse
 */
export interface StockTrackingResponse {
    /**
     * `false` when this request started tracking, `true` when it was already
     * started. The request succeeds either way — it is idempotent.
     * @type {boolean}
     * @memberof StockTrackingResponse
     */
    alreadyStarted: boolean;
    /**
     * 
     * @type {string}
     * @memberof StockTrackingResponse
     */
    lastUpdatedAt: string;
    /**
     * 
     * @type {number}
     * @memberof StockTrackingResponse
     */
    quantityOnHand: number;
    /**
     * 
     * @type {string}
     * @memberof StockTrackingResponse
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof StockTrackingResponse
     */
    stockItemId: string;
    /**
     * 
     * @type {string}
     * @memberof StockTrackingResponse
     */
    stockLevelId: string;
    /**
     * 
     * @type {string}
     * @memberof StockTrackingResponse
     */
    warehouseId: string;
    /**
     * 
     * @type {string}
     * @memberof StockTrackingResponse
     */
    warehouseName: string;
}
/**
 * 
 * @export
 * @interface StockTransferListResponse
 */
export interface StockTransferListResponse {
    /**
     * 
     * @type {Array<StockTransferResponse>}
     * @memberof StockTransferListResponse
     */
    items: Array<StockTransferResponse>;
}
/**
 * 
 * @export
 * @interface StockTransferResponse
 */
export interface StockTransferResponse {
    /**
     * 
     * @type {string}
     * @memberof StockTransferResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof StockTransferResponse
     */
    createdBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StockTransferResponse
     */
    fromLocationId: string;
    /**
     * 
     * @type {string}
     * @memberof StockTransferResponse
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof StockTransferResponse
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof StockTransferResponse
     */
    reason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StockTransferResponse
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof StockTransferResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof StockTransferResponse
     */
    toLocationId: string;
    /**
     * 
     * @type {string}
     * @memberof StockTransferResponse
     */
    transferredAt: string;
}
/**
 * 
 * @export
 * @interface StoreKitListCustomerResponse
 */
export interface StoreKitListCustomerResponse {
    /**
     * 
     * @type {boolean}
     * @memberof StoreKitListCustomerResponse
     */
    hasMore: boolean;
    /**
     * 
     * @type {Array<StoreKitListCustomerResponseItemsInner>}
     * @memberof StoreKitListCustomerResponse
     */
    items: Array<StoreKitListCustomerResponseItemsInner>;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListCustomerResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListCustomerResponse
     */
    offset: number;
    /**
     * 絞り込み後の総件数。ページの件数ではない (PLT-4050)。
     * 
     * `null` は「この一覧は総件数を数えていない」であって 0 ではない。総件
     * 数には母集合を1回余分に数える COUNT が要るので、必要とする一覧だけが
     * 値を載せる。今のところ載るのは `GET /v1/storekit/customers` だけ。
     * @type {number}
     * @memberof StoreKitListCustomerResponse
     */
    total?: number | null;
}
/**
 * 
 * @export
 * @interface StoreKitListCustomerResponseItemsInner
 */
export interface StoreKitListCustomerResponseItemsInner {
    /**
     * 
     * @type {string}
     * @memberof StoreKitListCustomerResponseItemsInner
     */
    description?: string | null;
    /**
     * Empty string when the customer has no email address.
     * @type {string}
     * @memberof StoreKitListCustomerResponseItemsInner
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListCustomerResponseItemsInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListCustomerResponseItemsInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListCustomerResponseItemsInner
     */
    nameKana?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListCustomerResponseItemsInner
     */
    phone?: string | null;
}
/**
 * 
 * @export
 * @interface StoreKitListOrderResponse
 */
export interface StoreKitListOrderResponse {
    /**
     * 
     * @type {boolean}
     * @memberof StoreKitListOrderResponse
     */
    hasMore: boolean;
    /**
     * 
     * @type {Array<StoreKitListOrderResponseItemsInner>}
     * @memberof StoreKitListOrderResponse
     */
    items: Array<StoreKitListOrderResponseItemsInner>;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListOrderResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListOrderResponse
     */
    offset: number;
    /**
     * 絞り込み後の総件数。ページの件数ではない (PLT-4050)。
     * 
     * `null` は「この一覧は総件数を数えていない」であって 0 ではない。総件
     * 数には母集合を1回余分に数える COUNT が要るので、必要とする一覧だけが
     * 値を載せる。今のところ載るのは `GET /v1/storekit/customers` だけ。
     * @type {number}
     * @memberof StoreKitListOrderResponse
     */
    total?: number | null;
}
/**
 * 
 * @export
 * @interface StoreKitListOrderResponseItemsInner
 */
export interface StoreKitListOrderResponseItemsInner {
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    cancelledAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    cartId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    checkoutUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    confirmedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    customerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    customerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    deliveredAt?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    discountNanodollar: number;
    /**
     * `pickup`, `delivery`, or `dine_in`.
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    id: string;
    /**
     * 
     * @type {Array<OrderItemResponse>}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    items: Array<OrderItemResponse>;
    /**
     * How the order was entered: `qr`, `kiosk`, `staff`, or `online`.
     * 
     * Server-derived, and `None` on every order placed before the column
     * existed. A staff board reads the route from here rather than taking
     * apart an encoded `sales_channel_detail`.
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    orderEntryMode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    paymentMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    paymentStatus: string;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    pickedUpAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    pickupDeadline?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    pickupRequestedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    readyAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    refundedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    salesChannel: string;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    salesChannelDetail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    sessionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    shippedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    shippingAddress?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    shippingFeeNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    shippingName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    shippingPhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    sourceCampaign?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    sourceMedium?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    subtotalNanodollar: number;
    /**
     * Seat or table the dine-in order is served to.
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    tableNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    tenantId: string;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    totalNanodollar: number;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListOrderResponseItemsInner
     */
    userId?: string | null;
}
/**
 * 
 * @export
 * @interface StoreKitListProductResponse
 */
export interface StoreKitListProductResponse {
    /**
     * 
     * @type {boolean}
     * @memberof StoreKitListProductResponse
     */
    hasMore: boolean;
    /**
     * 
     * @type {Array<StoreKitListProductResponseItemsInner>}
     * @memberof StoreKitListProductResponse
     */
    items: Array<StoreKitListProductResponseItemsInner>;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListProductResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListProductResponse
     */
    offset: number;
    /**
     * 絞り込み後の総件数。ページの件数ではない (PLT-4050)。
     * 
     * `null` は「この一覧は総件数を数えていない」であって 0 ではない。総件
     * 数には母集合を1回余分に数える COUNT が要るので、必要とする一覧だけが
     * 値を載せる。今のところ載るのは `GET /v1/storekit/customers` だけ。
     * @type {number}
     * @memberof StoreKitListProductResponse
     */
    total?: number | null;
}
/**
 * 
 * @export
 * @interface StoreKitListProductResponseItemsInner
 */
export interface StoreKitListProductResponseItemsInner {
    /**
     * 
     * @type {string}
     * @memberof StoreKitListProductResponseItemsInner
     */
    billingCycle: string;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListProductResponseItemsInner
     */
    categoryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListProductResponseItemsInner
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListProductResponseItemsInner
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoreKitListProductResponseItemsInner
     */
    imageIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListProductResponseItemsInner
     */
    kind: string;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListProductResponseItemsInner
     */
    listPrice: number;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListProductResponseItemsInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListProductResponseItemsInner
     */
    publicationDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListProductResponseItemsInner
     */
    publicationName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListProductResponseItemsInner
     */
    weightGrams?: number | null;
}
/**
 * 
 * @export
 * @interface StoreKitListPublicProductResponse
 */
export interface StoreKitListPublicProductResponse {
    /**
     * 
     * @type {boolean}
     * @memberof StoreKitListPublicProductResponse
     */
    hasMore: boolean;
    /**
     * 
     * @type {Array<StoreKitListPublicProductResponseItemsInner>}
     * @memberof StoreKitListPublicProductResponse
     */
    items: Array<StoreKitListPublicProductResponseItemsInner>;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListPublicProductResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListPublicProductResponse
     */
    offset: number;
    /**
     * 絞り込み後の総件数。ページの件数ではない (PLT-4050)。
     * 
     * `null` は「この一覧は総件数を数えていない」であって 0 ではない。総件
     * 数には母集合を1回余分に数える COUNT が要るので、必要とする一覧だけが
     * 値を載せる。今のところ載るのは `GET /v1/storekit/customers` だけ。
     * @type {number}
     * @memberof StoreKitListPublicProductResponse
     */
    total?: number | null;
}
/**
 * A menu row, and whether it can be ordered right now.
 * 
 * Wider than `ProductResponse` by exactly one bit, and narrower than the
 * stock route by everything else: no quantity on hand, no reservation count,
 * no low-stock threshold. A shopper needs to know an item is unavailable
 * before adding it to a cart; how much of it exists is the store's business.
 * @export
 * @interface StoreKitListPublicProductResponseItemsInner
 */
export interface StoreKitListPublicProductResponseItemsInner {
    /**
     * 
     * @type {string}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    billingCycle: string;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    categoryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    imageIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    kind: string;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    listPrice: number;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    name: string;
    /**
     * False only when the product is inventory-tracked and has nothing
     * available. A product with no stock row is not tracked, and a store
     * that does not count an item is always willing to sell it.
     * @type {boolean}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    orderable: boolean;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    publicationDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    publicationName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StoreKitListPublicProductResponseItemsInner
     */
    weightGrams?: number | null;
}
/**
 * 
 * @export
 * @interface StoreListResponse
 */
export interface StoreListResponse {
    /**
     * 
     * @type {Array<StoreResponse>}
     * @memberof StoreListResponse
     */
    items: Array<StoreResponse>;
}
/**
 * 
 * @export
 * @interface StoreResponse
 */
export interface StoreResponse {
    /**
     * 
     * @type {string}
     * @memberof StoreResponse
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreResponse
     */
    businessHours?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof StoreResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StoreResponse
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof StoreResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StoreResponse
     */
    posLocationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StoreResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface StorefrontAvailabilityCalendarResponse
 */
export interface StorefrontAvailabilityCalendarResponse {
    /**
     * One entry per date in `[from, to]`, ascending, with no gaps. A month grid
     * needs every cell; reconstructing gaps from a sparse array is where
     * off-by-one bugs live.
     * @type {Array<StorefrontAvailabilityDay>}
     * @memberof StorefrontAvailabilityCalendarResponse
     */
    days: Array<StorefrontAvailabilityDay>;
    /**
     * 
     * @type {number}
     * @memberof StorefrontAvailabilityCalendarResponse
     */
    fewLeftThreshold: number;
    /**
     * 
     * @type {Date}
     * @memberof StorefrontAvailabilityCalendarResponse
     */
    from: Date;
    /**
     * 
     * @type {string}
     * @memberof StorefrontAvailabilityCalendarResponse
     */
    resourceId: string;
    /**
     * 
     * @type {string}
     * @memberof StorefrontAvailabilityCalendarResponse
     */
    timezone: string;
    /**
     * 
     * @type {Date}
     * @memberof StorefrontAvailabilityCalendarResponse
     */
    to: Date;
}
/**
 * 
 * @export
 * @interface StorefrontAvailabilityDay
 */
export interface StorefrontAvailabilityDay {
    /**
     * 
     * @type {number}
     * @memberof StorefrontAvailabilityDay
     */
    capacityGroups: number;
    /**
     * 
     * @type {Date}
     * @memberof StorefrontAvailabilityDay
     */
    date: Date;
    /**
     * 
     * @type {Date}
     * @memberof StorefrontAvailabilityDay
     */
    earliestAvailableAt?: Date | null;
    /**
     * Slots that still have room.
     * @type {number}
     * @memberof StorefrontAvailabilityDay
     */
    openSlotCount: number;
    /**
     * Remaining groups summed across the day's slots.
     * @type {number}
     * @memberof StorefrontAvailabilityDay
     */
    remainingGroups: number;
    /**
     * 
     * @type {number}
     * @memberof StorefrontAvailabilityDay
     */
    slotCount: number;
    /**
     * 
     * @type {StorefrontDayAvailability}
     * @memberof StorefrontAvailabilityDay
     */
    status: StorefrontDayAvailability;
}


/**
 * 
 * @export
 * @interface StorefrontCreateReservationRequest
 */
export interface StorefrontCreateReservationRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof StorefrontCreateReservationRequest
     */
    assignedStaffIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    cancelUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {any}
     * @memberof StorefrontCreateReservationRequest
     */
    customFields?: any | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    customerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    customerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    customerPhone?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StorefrontCreateReservationRequest
     */
    depositAmount?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof StorefrontCreateReservationRequest
     */
    endsAt: Date;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    idempotencyKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    prepaymentPolicy?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StorefrontCreateReservationRequest
     */
    priceAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StorefrontCreateReservationRequest
     */
    quantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    reservationTypeId: string;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    resourceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    serviceId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof StorefrontCreateReservationRequest
     */
    startsAt: Date;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    storeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    successUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontCreateReservationRequest
     */
    timezone?: string | null;
}

/**
 * How a day should read on a calendar.
 * 
 * The glyphs (〇 / △ / × …) deliberately live in the storefront, not here.
 * They are locale- and design-specific, and baking them into the wire format
 * would turn every visual tweak into an API change plus a codegen run.
 * @export
 */
export const StorefrontDayAvailability = {
    Available: 'available',
    FewLeft: 'few_left',
    Full: 'full',
    Closed: 'closed',
    NotPublished: 'not_published'
} as const;
export type StorefrontDayAvailability = typeof StorefrontDayAvailability[keyof typeof StorefrontDayAvailability];

/**
 * 
 * @export
 * @interface StorefrontLogo
 */
export interface StorefrontLogo {
    /**
     * 
     * @type {string}
     * @memberof StorefrontLogo
     */
    contentType: string;
    /**
     * 
     * @type {string}
     * @memberof StorefrontLogo
     */
    dataBase64: string;
    /**
     * 
     * @type {string}
     * @memberof StorefrontLogo
     */
    filename: string;
    /**
     * 
     * @type {string}
     * @memberof StorefrontLogo
     */
    updatedAt: string;
}
/**
 * Deliberately narrower than the staff shape.
 * 
 * `feeJpy` and `validDays` are what a member pays to *join*, which has
 * nothing to do with booking a tee time; publishing them here would put the
 * tenant's membership pricing on a page that only needed a label.
 * @export
 * @interface StorefrontMembershipPlan
 */
export interface StorefrontMembershipPlan {
    /**
     * 
     * @type {string}
     * @memberof StorefrontMembershipPlan
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontMembershipPlan
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StorefrontMembershipPlan
     */
    name: string;
}
/**
 * 
 * @export
 * @interface StorefrontMembershipPlanListResponse
 */
export interface StorefrontMembershipPlanListResponse {
    /**
     * 
     * @type {Array<StorefrontMembershipPlan>}
     * @memberof StorefrontMembershipPlanListResponse
     */
    items: Array<StorefrontMembershipPlan>;
}
/**
 * 
 * @export
 * @interface StorefrontProfileResponse
 */
export interface StorefrontProfileResponse {
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    contactEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    legalName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    legalNotice?: string | null;
    /**
     * 
     * @type {StorefrontLogo}
     * @memberof StorefrontProfileResponse
     */
    logo?: StorefrontLogo | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    representativeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    subName: string;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    tagline: string;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    themeColor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    updatedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontProfileResponse
     */
    websiteUrl?: string | null;
}
/**
 * 
 * @export
 * @interface StorefrontResourceTimeSlotListResponse
 */
export interface StorefrontResourceTimeSlotListResponse {
    /**
     * 
     * @type {Date}
     * @memberof StorefrontResourceTimeSlotListResponse
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof StorefrontResourceTimeSlotListResponse
     */
    resourceId: string;
    /**
     * 
     * @type {Array<ResourceTimeSlot>}
     * @memberof StorefrontResourceTimeSlotListResponse
     */
    slots: Array<ResourceTimeSlot>;
    /**
     * 
     * @type {string}
     * @memberof StorefrontResourceTimeSlotListResponse
     */
    timezone: string;
}
/**
 * 
 * @export
 * @interface StorefrontUpdateReservationRequest
 */
export interface StorefrontUpdateReservationRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof StorefrontUpdateReservationRequest
     */
    assignedStaffIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontUpdateReservationRequest
     */
    cancelReason?: string | null;
    /**
     * 
     * @type {any}
     * @memberof StorefrontUpdateReservationRequest
     */
    customFields?: any | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontUpdateReservationRequest
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontUpdateReservationRequest
     */
    customerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontUpdateReservationRequest
     */
    customerPhone?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof StorefrontUpdateReservationRequest
     */
    endsAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontUpdateReservationRequest
     */
    internalNotes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontUpdateReservationRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontUpdateReservationRequest
     */
    paymentStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontUpdateReservationRequest
     */
    resourceId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof StorefrontUpdateReservationRequest
     */
    startsAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof StorefrontUpdateReservationRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface StripeConnectAccountResponse
 */
export interface StripeConnectAccountResponse {
    /**
     * `merchant_managed` or `platform_managed`. `null` when no account exists.
     * @type {string}
     * @memberof StripeConnectAccountResponse
     */
    accountMode?: string | null;
    /**
     * Whether Stripe accepts charges on this account right now. This flag —
     * not the presence of `connectedAccountId` — decides whether direct
     * charges work.
     * @type {boolean}
     * @memberof StripeConnectAccountResponse
     */
    chargesEnabled: boolean;
    /**
     * `null` while the tenant's charges still settle on the platform account.
     * @type {string}
     * @memberof StripeConnectAccountResponse
     */
    connectedAccountId?: string | null;
    /**
     * Whether the hosted onboarding form was completed. Verification may
     * still be pending, so this can be true while `chargesEnabled` is false.
     * @type {boolean}
     * @memberof StripeConnectAccountResponse
     */
    detailsSubmitted: boolean;
}
/**
 * 
 * @export
 * @interface StripeConnectOnboardingLinkResponse
 */
export interface StripeConnectOnboardingLinkResponse {
    /**
     * 
     * @type {string}
     * @memberof StripeConnectOnboardingLinkResponse
     */
    url: string;
}
/**
 * 集計対象の期間。絞り込みを指定しなかった軸は `null` で返す。
 * @export
 * @interface SummaryPeriodResponse
 */
export interface SummaryPeriodResponse {
    /**
     * 提供日（Asia/Tokyo）の下限。含む。
     * @type {string}
     * @memberof SummaryPeriodResponse
     */
    from?: string | null;
    /**
     * 提供日（Asia/Tokyo）の上限。含む。
     * @type {string}
     * @memberof SummaryPeriodResponse
     */
    to?: string | null;
}
/**
 * 
 * @export
 * @interface TabularAnalyzeResponse
 */
export interface TabularAnalyzeResponse {
    /**
     * 
     * @type {number}
     * @memberof TabularAnalyzeResponse
     */
    headerRow: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TabularAnalyzeResponse
     */
    headers: Array<string>;
    /**
     * 
     * @type {TabularMappingResponse}
     * @memberof TabularAnalyzeResponse
     */
    mapping: TabularMappingResponse;
    /**
     * 
     * @type {number}
     * @memberof TabularAnalyzeResponse
     */
    rowCount: number;
    /**
     * 
     * @type {Array<TabularRowResponse>}
     * @memberof TabularAnalyzeResponse
     */
    rows: Array<TabularRowResponse>;
    /**
     * 
     * @type {string}
     * @memberof TabularAnalyzeResponse
     */
    selectedSheet?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TabularAnalyzeResponse
     */
    sheetNames: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TabularAnalyzeResponse
     */
    sourceType: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TabularAnalyzeResponse
     */
    warnings: Array<string>;
}
/**
 * 
 * @export
 * @interface TabularMappingFieldResponse
 */
export interface TabularMappingFieldResponse {
    /**
     * 
     * @type {boolean}
     * @memberof TabularMappingFieldResponse
     */
    approved: boolean;
    /**
     * 
     * @type {number}
     * @memberof TabularMappingFieldResponse
     */
    confidence: number;
    /**
     * 
     * @type {string}
     * @memberof TabularMappingFieldResponse
     */
    explanation: string;
    /**
     * 
     * @type {boolean}
     * @memberof TabularMappingFieldResponse
     */
    required: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof TabularMappingFieldResponse
     */
    samples: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TabularMappingFieldResponse
     */
    source: string;
    /**
     * 
     * @type {string}
     * @memberof TabularMappingFieldResponse
     */
    target: string;
}
/**
 * 
 * @export
 * @interface TabularMappingResponse
 */
export interface TabularMappingResponse {
    /**
     * 
     * @type {Array<TabularMappingFieldResponse>}
     * @memberof TabularMappingResponse
     */
    fields: Array<TabularMappingFieldResponse>;
    /**
     * 
     * @type {string}
     * @memberof TabularMappingResponse
     */
    mode: string;
    /**
     * 
     * @type {string}
     * @memberof TabularMappingResponse
     */
    notes?: string | null;
}
/**
 * 
 * @export
 * @interface TabularRowResponse
 */
export interface TabularRowResponse {
    /**
     * 
     * @type {number}
     * @memberof TabularRowResponse
     */
    sourceRowNumber: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TabularRowResponse
     */
    values: Array<string>;
}
/**
 * 
 * @export
 * @interface TabularTargetFieldRequest
 */
export interface TabularTargetFieldRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof TabularTargetFieldRequest
     */
    aliases?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TabularTargetFieldRequest
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof TabularTargetFieldRequest
     */
    key: string;
    /**
     * 
     * @type {boolean}
     * @memberof TabularTargetFieldRequest
     */
    required?: boolean;
}
/**
 * 
 * @export
 * @interface TenantExtension
 */
export interface TenantExtension {
    /**
     * 
     * @type {any}
     * @memberof TenantExtension
     */
    configJson?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof TenantExtension
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof TenantExtension
     */
    disabledAt?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof TenantExtension
     */
    enableOrder: number;
    /**
     * 
     * @type {Date}
     * @memberof TenantExtension
     */
    enabledAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtension
     */
    extensionKey: string;
    /**
     * 
     * @type {TenantExtensionStatus}
     * @memberof TenantExtension
     */
    status: TenantExtensionStatus;
    /**
     * 
     * @type {string}
     * @memberof TenantExtension
     */
    tenantId: string;
    /**
     * 
     * @type {Date}
     * @memberof TenantExtension
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof TenantExtension
     */
    version: string;
}


/**
 * 
 * @export
 * @interface TenantExtensionListResponse
 */
export interface TenantExtensionListResponse {
    /**
     * 
     * @type {Array<TenantExtension>}
     * @memberof TenantExtensionListResponse
     */
    items: Array<TenantExtension>;
}

/**
 * 
 * @export
 */
export const TenantExtensionStatus = {
    Enabled: 'enabled',
    Disabled: 'disabled'
} as const;
export type TenantExtensionStatus = typeof TenantExtensionStatus[keyof typeof TenantExtensionStatus];

/**
 * 
 * @export
 * @interface TenantExtensionStatusListResponse
 */
export interface TenantExtensionStatusListResponse {
    /**
     * 
     * @type {Array<TenantExtensionStatusView>}
     * @memberof TenantExtensionStatusListResponse
     */
    items: Array<TenantExtensionStatusView>;
}
/**
 * 
 * @export
 * @interface TenantExtensionStatusView
 */
export interface TenantExtensionStatusView {
    /**
     * 
     * @type {any}
     * @memberof TenantExtensionStatusView
     */
    capabilitiesJson?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TenantExtensionStatusView
     */
    configJson?: any | null;
    /**
     * 
     * @type {number}
     * @memberof TenantExtensionStatusView
     */
    configVersion?: number | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtensionStatusView
     */
    description?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TenantExtensionStatusView
     */
    disabledAt?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof TenantExtensionStatusView
     */
    enabledAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtensionStatusView
     */
    extensionKey: string;
    /**
     * 
     * @type {string}
     * @memberof TenantExtensionStatusView
     */
    industry: string;
    /**
     * 
     * @type {any}
     * @memberof TenantExtensionStatusView
     */
    manifestJson: any | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtensionStatusView
     */
    name: string;
    /**
     * 
     * @type {any}
     * @memberof TenantExtensionStatusView
     */
    policyHooksJson?: any | null;
    /**
     * 
     * @type {ExtensionRegistryStatus}
     * @memberof TenantExtensionStatusView
     */
    registryStatus: ExtensionRegistryStatus;
    /**
     * 
     * @type {string}
     * @memberof TenantExtensionStatusView
     */
    tenantId: string;
    /**
     * 
     * @type {TenantExtensionStatus}
     * @memberof TenantExtensionStatusView
     */
    tenantStatus?: TenantExtensionStatus | null;
    /**
     * 
     * @type {any}
     * @memberof TenantExtensionStatusView
     */
    uiContributionsJson?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof TenantExtensionStatusView
     */
    updatedAt?: Date | null;
    /**
     * 
     * @type {ExtensionConfigValidation}
     * @memberof TenantExtensionStatusView
     */
    validation: ExtensionConfigValidation;
    /**
     * 
     * @type {string}
     * @memberof TenantExtensionStatusView
     */
    version: string;
}


/**
 * 
 * @export
 * @interface UpdateApprovalFlowRequest
 */
export interface UpdateApprovalFlowRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateApprovalFlowRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateApprovalFlowRequest
     */
    minAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateApprovalFlowRequest
     */
    name: string;
    /**
     * 
     * @type {Array<ApprovalFlowStep>}
     * @memberof UpdateApprovalFlowRequest
     */
    steps: Array<ApprovalFlowStep>;
}
/**
 * 
 * @export
 * @interface UpdateBillingAccountRequest
 */
export interface UpdateBillingAccountRequest {
    /**
     * Updated name for the billing account.
     * @type {string}
     * @memberof UpdateBillingAccountRequest
     */
    name: string;
}
/**
 * 
 * @export
 * @interface UpdateCartItemRequest
 */
export interface UpdateCartItemRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateCartItemRequest
     */
    note?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateCartItemRequest
     */
    optionIds?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateCartItemRequest
     */
    quantity: number;
    /**
     * Omit `variant_id`, `option_ids` and `note` together to change only the
     * quantity; the line then keeps the selection and the price it was added
     * with.
     * @type {string}
     * @memberof UpdateCartItemRequest
     */
    variantId?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateCustomFieldDefinitionRequest
 */
export interface UpdateCustomFieldDefinitionRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateCustomFieldDefinitionRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomFieldDefinitionRequest
     */
    label?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateCustomFieldDefinitionRequest
     */
    options?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomFieldDefinitionRequest
     */
    placeholder?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateCustomFieldDefinitionRequest
     */
    required?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateCustomFieldDefinitionRequest
     */
    sortOrder?: number | null;
}
/**
 * 
 * @export
 * @interface UpdateCustomerClientAffiliationRequest
 */
export interface UpdateCustomerClientAffiliationRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateCustomerClientAffiliationRequest
     */
    billingAllowed: boolean;
}
/**
 * 
 * @export
 * @interface UpdateCustomerContactRequest
 */
export interface UpdateCustomerContactRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerContactRequest
     */
    channel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerContactRequest
     */
    nextActionAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerContactRequest
     */
    note?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof UpdateCustomerContactRequest
     */
    occurredAt?: Date | null;
    /**
     * Explicit null clears the stored value.
     * @type {string}
     * @memberof UpdateCustomerContactRequest
     */
    outcome?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerContactRequest
     */
    performedBy?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateCustomerCredentialRequest
 */
export interface UpdateCustomerCredentialRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateCustomerCredentialRequest
     */
    archived?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerCredentialRequest
     */
    expiresOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerCredentialRequest
     */
    issuedOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerCredentialRequest
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerCredentialRequest
     */
    note?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateCustomerCredentialRequest
     */
    verified?: boolean | null;
}
/**
 * 
 * @export
 * @interface UpdateCustomerRequest
 */
export interface UpdateCustomerRequest {
    /**
     * 
     * @type {CustomerAddressRequest}
     * @memberof UpdateCustomerRequest
     */
    address?: CustomerAddressRequest | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerRequest
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerRequest
     */
    nameKana?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerRequest
     */
    phone?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateCustomerSubjectRequest
 */
export interface UpdateCustomerSubjectRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerSubjectRequest
     */
    birthDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerSubjectRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerSubjectRequest
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerSubjectRequest
     */
    sex?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerSubjectRequest
     */
    subjectType?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateDealRequest
 */
export interface UpdateDealRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateDealRequest
     */
    amount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateDealRequest
     */
    clientId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof UpdateDealRequest
     */
    expectedCloseOn?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateDealRequest
     */
    memo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateDealRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateDealRequest
     */
    ownerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateDealRequest
     */
    pipeline?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateDealRequest
     */
    stage?: string | null;
}
/**
 * Full replacement of the ERP-managed policy set as one flat list. Role
 * policies (`pol_erp_admin` / `pol_erp_staff` / `pol_erp_viewer`) and tenant
 * custom policies are given together; at most one role policy is accepted.
 * An empty list detaches every ERP-managed policy (same as DELETE).
 * @export
 * @interface UpdateErpUserPoliciesRequest
 */
export interface UpdateErpUserPoliciesRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateErpUserPoliciesRequest
     */
    policyIds: Array<string>;
}
/**
 * 
 * @export
 * @interface UpdateErpUserRoleRequest
 */
export interface UpdateErpUserRoleRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateErpUserRoleRequest
     */
    customPolicyIds?: Array<string>;
    /**
     * 
     * @type {ErpRole}
     * @memberof UpdateErpUserRoleRequest
     */
    role: ErpRole;
}


/**
 * 
 * @export
 * @interface UpdateExpenseRequest
 */
export interface UpdateExpenseRequest {
    /**
     * 
     * @type {number}
     * @memberof UpdateExpenseRequest
     */
    amount?: number | null;
    /**
     * 
     * @type {Array<ExpenseAttachment>}
     * @memberof UpdateExpenseRequest
     */
    attachments?: Array<ExpenseAttachment> | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateExpenseRequest
     */
    categoryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateExpenseRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateExpenseRequest
     */
    expenseDate?: string | null;
    /**
     * 
     * @type {Array<ExpenseExternalRef>}
     * @memberof UpdateExpenseRequest
     */
    externalRefs?: Array<ExpenseExternalRef> | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateExpenseRequest
     */
    memo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateExpenseRequest
     */
    payee?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateExpenseRequest
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateExpenseRequest
     */
    taxAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateExpenseRequest
     */
    taxCategory?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateExtensionConfigRequest
 */
export interface UpdateExtensionConfigRequest {
    /**
     * 
     * @type {any}
     * @memberof UpdateExtensionConfigRequest
     */
    configJson: any | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateExtensionConfigRequest
     */
    scopeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateExtensionConfigRequest
     */
    scopeType?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateGolfReservationPolicyRequest
 */
export interface UpdateGolfReservationPolicyRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateGolfReservationPolicyRequest
     */
    cartPolicy?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateGolfReservationPolicyRequest
     */
    cutoffHours?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateGolfReservationPolicyRequest
     */
    defaultHoles?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateGolfReservationPolicyRequest
     */
    guestDepositBps?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateGolfReservationPolicyRequest
     */
    maxPlayersPerTeeTime?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateGolfReservationPolicyRequest
     */
    memberDepositBps?: number | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGolfReservationPolicyRequest
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGolfReservationPolicyRequest
     */
    policyHooksJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateGolfReservationPolicyRequest
     */
    reservationTypeId?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateInvoiceFollowUpStatusRequest
 */
export interface UpdateInvoiceFollowUpStatusRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateInvoiceFollowUpStatusRequest
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateInvoiceFollowUpStatusRequest
     */
    status: string;
}
/**
 * 
 * @export
 * @interface UpdateInvoiceRequest
 */
export interface UpdateInvoiceRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateInvoiceRequest
     */
    clientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateInvoiceRequest
     */
    clientPhone?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateInvoiceRequest
     */
    createPaymentLink?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateInvoiceRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateInvoiceRequest
     */
    paymentLinkProvider?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateInvoiceRequest
     */
    sendEmail?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateInvoiceRequest
     */
    sendSms?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateInvoiceRequest
     */
    smsMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateInvoiceRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateLowStockDecisionRequest
 */
export interface UpdateLowStockDecisionRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateLowStockDecisionRequest
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateLowStockDecisionRequest
     */
    status: string;
}
/**
 * 
 * @export
 * @interface UpdateMembershipConsentItemRequest
 */
export interface UpdateMembershipConsentItemRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateMembershipConsentItemRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateMembershipConsentItemRequest
     */
    body?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateMembershipConsentItemRequest
     */
    label?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateMembershipConsentItemRequest
     */
    required?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateMembershipConsentItemRequest
     */
    sortOrder?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateMembershipConsentItemRequest
     */
    termsVersion?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateMembershipEntitlementRequest
 */
export interface UpdateMembershipEntitlementRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateMembershipEntitlementRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateMembershipEntitlementRequest
     */
    membershipPlanId?: string | null;
    /**
     * Explicit null makes the grant open-ended.
     * @type {number}
     * @memberof UpdateMembershipEntitlementRequest
     */
    validDays?: number | null;
}
/**
 * 
 * @export
 * @interface UpdateMembershipPlanRequest
 */
export interface UpdateMembershipPlanRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateMembershipPlanRequest
     */
    active?: boolean | null;
    /**
     * Explicit null clears the stored value.
     * @type {string}
     * @memberof UpdateMembershipPlanRequest
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateMembershipPlanRequest
     */
    feeJpy?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateMembershipPlanRequest
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateMembershipPlanRequest
     */
    sortOrder?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateMembershipPlanRequest
     */
    validDays?: number | null;
}
/**
 * A partial edit.
 * 
 * An absent field is left alone. The three optional labels are cleared by
 * sending an empty string rather than `null`: a `null` that means "clear" and
 * an absent field that means "leave" are the same value to `Option`, and the
 * distinction is not worth a wrapper type on a form with three of them.
 * @export
 * @interface UpdateOrderEntryPointRequest
 */
export interface UpdateOrderEntryPointRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateOrderEntryPointRequest
     */
    enabled?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateOrderEntryPointRequest
     */
    idleTimeoutSecs?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateOrderEntryPointRequest
     */
    idleWarningSecs?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateOrderEntryPointRequest
     */
    sessionTtlSecs?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderEntryPointRequest
     */
    storeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderEntryPointRequest
     */
    storeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderEntryPointRequest
     */
    tableName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderEntryPointRequest
     */
    tableNumber?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateOrderProductRequest
 */
export interface UpdateOrderProductRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    billingCycle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    category?: string | null;
    /**
     * Storefront category (`cat_…`, from `GET /v1/storekit/categories`).
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    categoryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    expectedUpdatedAt?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateOrderProductRequest
     */
    imageStorageKeys?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    janCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    kind?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateOrderProductRequest
     */
    listPrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    name?: string | null;
    /**
     * 選択肢。省略は据え置き、空配列は「選択肢を無くす」。
     * @type {Array<OrderProductOptionGroupRequest>}
     * @memberof UpdateOrderProductRequest
     */
    optionGroups?: Array<OrderProductOptionGroupRequest> | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    publicationDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    publicationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    publicationStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    skuCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    subcategory?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateOrderProductRequest
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductRequest
     */
    upcCode?: string | null;
    /**
     * 
     * @type {Array<UpdateOrderProductVariationRequest>}
     * @memberof UpdateOrderProductRequest
     */
    variations?: Array<UpdateOrderProductVariationRequest> | null;
}
/**
 * 
 * @export
 * @interface UpdateOrderProductVariationRequest
 */
export interface UpdateOrderProductVariationRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductVariationRequest
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductVariationRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductVariationRequest
     */
    id: string;
    /**
     * 
     * @type {any}
     * @memberof UpdateOrderProductVariationRequest
     */
    metadata?: any | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductVariationRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductVariationRequest
     */
    publicationDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductVariationRequest
     */
    publicationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductVariationRequest
     */
    recurring?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderProductVariationRequest
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateOrderProductVariationRequest
     */
    unitAmount?: number | null;
}
/**
 * 
 * @export
 * @interface UpdateOrderRequest
 */
export interface UpdateOrderRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateOrderRequest
     */
    decrementInventory?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface UpdatePurchaseOrderRequest
 */
export interface UpdatePurchaseOrderRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdatePurchaseOrderRequest
     */
    currency?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdatePurchaseOrderRequest
     */
    expectedDeliveryDate?: string | null;
    /**
     * 
     * @type {Array<CreatePurchaseOrderItemRequest>}
     * @memberof UpdatePurchaseOrderRequest
     */
    items?: Array<CreatePurchaseOrderItemRequest> | null;
    /**
     * 
     * @type {string}
     * @memberof UpdatePurchaseOrderRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdatePurchaseOrderRequest
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdatePurchaseOrderRequest
     */
    taxCategory?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdatePurchaseOrderRequest
     */
    vendorId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdatePurchaseOrderRequest
     */
    vendorName?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateQuotationRequest
 */
export interface UpdateQuotationRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateQuotationRequest
     */
    clientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateQuotationRequest
     */
    clientId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateQuotationRequest
     */
    createPaymentLink?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateQuotationRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateQuotationRequest
     */
    sendEmail?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateQuotationRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateReservationRequest
 */
export interface UpdateReservationRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateReservationRequest
     */
    assignedStaffIds?: Array<string> | null;
    /**
     * 
     * @type {ReservationBillToRequest}
     * @memberof UpdateReservationRequest
     */
    billTo?: ReservationBillToRequest | null;
    /**
     * Reason recorded when this update is what cancels the reservation.
     * Ignored unless `status` moves the reservation into `cancelled`.
     * @type {string}
     * @memberof UpdateReservationRequest
     */
    cancelReason?: string | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateReservationRequest
     */
    customFields?: any | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationRequest
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationRequest
     */
    customerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationRequest
     */
    customerPhone?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof UpdateReservationRequest
     */
    endsAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationRequest
     */
    internalNotes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationRequest
     */
    paymentStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationRequest
     */
    resourceId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof UpdateReservationRequest
     */
    startsAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateReservationResourceRequest
 */
export interface UpdateReservationResourceRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateReservationResourceRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateReservationResourceRequest
     */
    customFieldsJson?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateReservationResourceRequest
     */
    metadataJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationResourceRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationResourceRequest
     */
    resourceModel?: string | null;
    /**
     * 
     * @type {ReservationResourceType}
     * @memberof UpdateReservationResourceRequest
     */
    resourceType?: ReservationResourceType | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationResourceRequest
     */
    storeId?: string | null;
}


/**
 * 
 * @export
 * @interface UpdateReservationTypeRequest
 */
export interface UpdateReservationTypeRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateReservationTypeRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateReservationTypeRequest
     */
    cancellationPolicyJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationTypeRequest
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationTypeRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationTypeRequest
     */
    name?: string | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateReservationTypeRequest
     */
    paymentPolicyJson?: any | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateReservationTypeRequest
     */
    resourceModel?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateSaasSubscriptionRequest
 */
export interface UpdateSaasSubscriptionRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateSaasSubscriptionRequest
     */
    approvalState?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateSaasSubscriptionRequest
     */
    billingCycle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateSaasSubscriptionRequest
     */
    currentPlan?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateSaasSubscriptionRequest
     */
    monthlyAmountYen?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateSaasSubscriptionRequest
     */
    nextPlan?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateSaasSubscriptionRequest
     */
    ownerTeam?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateSaasSubscriptionRequest
     */
    reason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateSaasSubscriptionRequest
     */
    renewalDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateSaasSubscriptionRequest
     */
    seats?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateSaasSubscriptionRequest
     */
    serviceName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateSaasSubscriptionRequest
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateSalesTaskRequest
 */
export interface UpdateSalesTaskRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateSalesTaskRequest
     */
    assignee?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof UpdateSalesTaskRequest
     */
    dueAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateSalesTaskRequest
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateSalesTaskRequest
     */
    title?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateScheduleRequest
 */
export interface UpdateScheduleRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateScheduleRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateScheduleRequest
     */
    dueInDays?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateScheduleRequest
     */
    frequency?: string | null;
    /**
     * 
     * @type {Array<ScheduleLineItemRequest>}
     * @memberof UpdateScheduleRequest
     */
    lineItems?: Array<ScheduleLineItemRequest> | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateScheduleRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateScheduleRequest
     */
    nextIssueDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateScheduleRequest
     */
    notes?: string | null;
}
/**
 * A partial update: an omitted field keeps whatever is stored.
 * 
 * The nullable fields take an explicit `null` to clear the stored value, which
 * is why they are `Option<Option<_>>` — the previous shape wrote a default over
 * every field the caller left out.
 * @export
 * @interface UpdateStaffMemberRequest
 */
export interface UpdateStaffMemberRequest {
    /**
     * Superseded by `employmentStatus`; `false` still means retired.
     * @type {boolean}
     * @memberof UpdateStaffMemberRequest
     */
    active?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateStaffMemberRequest
     */
    attributesJson?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof UpdateStaffMemberRequest
     */
    contractEndDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStaffMemberRequest
     */
    email?: string | null;
    /**
     * active / on_leave / retired. Wins over `active` when both are sent.
     * @type {string}
     * @memberof UpdateStaffMemberRequest
     */
    employmentStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStaffMemberRequest
     */
    employmentType?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof UpdateStaffMemberRequest
     */
    hiredAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStaffMemberRequest
     */
    jobTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStaffMemberRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStaffMemberRequest
     */
    phone?: string | null;
}
/**
 * A partial update of the mutable portion of a planned shift.
 * 
 * `staffId` and `date` are intentionally absent: changing either requires a
 * DELETE followed by a new POST so the nested resource keeps its identity.
 * @export
 * @interface UpdateStaffShiftRequest
 */
export interface UpdateStaffShiftRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateStaffShiftRequest
     */
    endTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStaffShiftRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStaffShiftRequest
     */
    shiftType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStaffShiftRequest
     */
    startTime?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateStageSettingsRequest
 */
export interface UpdateStageSettingsRequest {
    /**
     * 
     * @type {Array<StageSettingItem>}
     * @memberof UpdateStageSettingsRequest
     */
    items: Array<StageSettingItem>;
}
/**
 * 
 * @export
 * @interface UpdateVendorRequest
 */
export interface UpdateVendorRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    contactEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    contactName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    contactPhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    defaultTaxCategory?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    paymentTerms?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    qualifiedInvoiceIssuerNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    taxRegistrationName?: string | null;
}
/**
 * 部分更新。absent は「触らない」。`description` は空文字で消す。
 * @export
 * @interface UpdateWebhookEndpointRequest
 */
export interface UpdateWebhookEndpointRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateWebhookEndpointRequest
     */
    description?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateWebhookEndpointRequest
     */
    eventTypes?: Array<string> | null;
    /**
     * `active` または `paused`。`blocked` は運用の結果であって指定できない。
     * @type {string}
     * @memberof UpdateWebhookEndpointRequest
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateWebhookEndpointRequest
     */
    url?: string | null;
}
/**
 * 
 * @export
 * @interface UpsertCategoryRequest
 */
export interface UpsertCategoryRequest {
    /**
     * 
     * @type {string}
     * @memberof UpsertCategoryRequest
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpsertCategoryRequest
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpsertCategoryRequest
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpsertCategoryRequest
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface UpsertReplenishmentPolicyRequest
 */
export interface UpsertReplenishmentPolicyRequest {
    /**
     * 
     * @type {number}
     * @memberof UpsertReplenishmentPolicyRequest
     */
    preferredOrderQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpsertReplenishmentPolicyRequest
     */
    reorderPointQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof UpsertReplenishmentPolicyRequest
     */
    replenishmentTargetQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof UpsertReplenishmentPolicyRequest
     */
    safetyStockQuantity: number;
    /**
     * 
     * @type {string}
     * @memberof UpsertReplenishmentPolicyRequest
     */
    sku: string;
    /**
     * 
     * @type {string}
     * @memberof UpsertReplenishmentPolicyRequest
     */
    warehouseId: string;
}
/**
 * 
 * @export
 * @interface ValidateCouponRequest
 */
export interface ValidateCouponRequest {
    /**
     * 
     * @type {string}
     * @memberof ValidateCouponRequest
     */
    code: string;
    /**
     * 
     * @type {number}
     * @memberof ValidateCouponRequest
     */
    subtotalNanodollar?: number | null;
}
/**
 * 
 * @export
 * @interface VendorListResponse
 */
export interface VendorListResponse {
    /**
     * 
     * @type {Array<VendorResponse>}
     * @memberof VendorListResponse
     */
    items: Array<VendorResponse>;
}
/**
 * 
 * @export
 * @interface VendorResponse
 */
export interface VendorResponse {
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    contactEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    contactName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    contactPhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    defaultTaxCategory: string;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    notes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    paymentTerms?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    qualifiedInvoiceIssuerNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    taxRegistrationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    tenantId: string;
    /**
     * 
     * @type {string}
     * @memberof VendorResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface VoidInvoiceRequest
 */
export interface VoidInvoiceRequest {
    /**
     * 
     * @type {string}
     * @memberof VoidInvoiceRequest
     */
    reason: string;
}
/**
 * 
 * @export
 * @interface VoidInvoiceResponse
 */
export interface VoidInvoiceResponse {
    /**
     * 
     * @type {string}
     * @memberof VoidInvoiceResponse
     */
    correctionId: string;
    /**
     * 
     * @type {InvoiceResponse}
     * @memberof VoidInvoiceResponse
     */
    invoice: InvoiceResponse;
    /**
     * 
     * @type {boolean}
     * @memberof VoidInvoiceResponse
     */
    replayed: boolean;
    /**
     * 
     * @type {string}
     * @memberof VoidInvoiceResponse
     */
    reversalOn: string | null;
    /**
     * 
     * @type {number}
     * @memberof VoidInvoiceResponse
     */
    reversedJournalCount: number;
}
/**
 * 
 * @export
 * @interface WarehouseListResponse
 */
export interface WarehouseListResponse {
    /**
     * 
     * @type {Array<WarehouseResponse>}
     * @memberof WarehouseListResponse
     */
    items: Array<WarehouseResponse>;
}
/**
 * 
 * @export
 * @interface WarehouseResponse
 */
export interface WarehouseResponse {
    /**
     * 
     * @type {string}
     * @memberof WarehouseResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof WarehouseResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof WarehouseResponse
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof WarehouseResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof WarehouseResponse
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface WebhookDeliveryResponse
 */
export interface WebhookDeliveryResponse {
    /**
     * 
     * @type {number}
     * @memberof WebhookDeliveryResponse
     */
    attemptCount: number;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryResponse
     */
    deadAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryResponse
     */
    eventId: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryResponse
     */
    eventType: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryResponse
     */
    lastErrorCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof WebhookDeliveryResponse
     */
    lastStatusCode?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryResponse
     */
    nextAttemptAt: string;
    /**
     * `pending`, `in_flight`, `succeeded`, or `dead`.
     * @type {string}
     * @memberof WebhookDeliveryResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryResponse
     */
    succeededAt?: string | null;
}
/**
 * 
 * @export
 * @interface WebhookEndpointResponse
 */
export interface WebhookEndpointResponse {
    /**
     * 
     * @type {string}
     * @memberof WebhookEndpointResponse
     */
    blockedAt?: string | null;
    /**
     * 連続して恒久失敗した配信の数。`blocked` の理由を読むための値。
     * @type {number}
     * @memberof WebhookEndpointResponse
     */
    consecutiveFailures: number;
    /**
     * 
     * @type {string}
     * @memberof WebhookEndpointResponse
     */
    description?: string | null;
    /**
     * 購読している versioned event type。
     * @type {Array<string>}
     * @memberof WebhookEndpointResponse
     */
    eventTypes: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof WebhookEndpointResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookEndpointResponse
     */
    lastErrorCode?: string | null;
    /**
     * 旧世代の署名を併記しなくなる時刻。
     * @type {string}
     * @memberof WebhookEndpointResponse
     */
    previousSecretExpiresAt?: string | null;
    /**
     * ローテーション猶予中だけ入る。この世代の署名もまだ併記されている。
     * @type {number}
     * @memberof WebhookEndpointResponse
     */
    previousSecretVersion?: number | null;
    /**
     * 導出シークレットの世代。値そのものは返さない。
     * @type {number}
     * @memberof WebhookEndpointResponse
     */
    secretVersion: number;
    /**
     * `active`, `paused`, or `blocked`.
     * @type {string}
     * @memberof WebhookEndpointResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookEndpointResponse
     */
    url: string;
}
/**
 * 作成とローテーションの応答**だけ**がシークレットを載せる。
 * @export
 * @interface WebhookEndpointWithSecretResponse
 */
export interface WebhookEndpointWithSecretResponse {
    /**
     * 
     * @type {string}
     * @memberof WebhookEndpointWithSecretResponse
     */
    blockedAt?: string;
    /**
     * 連続して恒久失敗した配信の数。`blocked` の理由を読むための値。
     * @type {number}
     * @memberof WebhookEndpointWithSecretResponse
     */
    consecutiveFailures: number;
    /**
     * 
     * @type {string}
     * @memberof WebhookEndpointWithSecretResponse
     */
    description?: string;
    /**
     * 購読している versioned event type。
     * @type {Array<string>}
     * @memberof WebhookEndpointWithSecretResponse
     */
    eventTypes: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof WebhookEndpointWithSecretResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookEndpointWithSecretResponse
     */
    lastErrorCode?: string;
    /**
     * 旧世代の署名を併記しなくなる時刻。
     * @type {string}
     * @memberof WebhookEndpointWithSecretResponse
     */
    previousSecretExpiresAt?: string;
    /**
     * ローテーション猶予中だけ入る。この世代の署名もまだ併記されている。
     * @type {number}
     * @memberof WebhookEndpointWithSecretResponse
     */
    previousSecretVersion?: number;
    /**
     * 導出シークレットの世代。値そのものは返さない。
     * @type {number}
     * @memberof WebhookEndpointWithSecretResponse
     */
    secretVersion: number;
    /**
     * `active`, `paused`, or `blocked`.
     * @type {string}
     * @memberof WebhookEndpointWithSecretResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookEndpointWithSecretResponse
     */
    url: string;
    /**
     * 一度だけ返る。サーバは平文を保存しないので、後から読み出せない。
     * @type {string}
     * @memberof WebhookEndpointWithSecretResponse
     */
    signingSecret: string;
}
/**
 * 疎通確認の結果。応答本文は返さない（secret や PII が混ざりうる）。
 * @export
 * @interface WebhookTestResponse
 */
export interface WebhookTestResponse {
    /**
     * 
     * @type {boolean}
     * @memberof WebhookTestResponse
     */
    delivered: boolean;
    /**
     * 有界な失敗理由。`TIMEOUT` / `BLOCKED_ADDRESS` / `CLIENT_ERROR` など。
     * @type {string}
     * @memberof WebhookTestResponse
     */
    errorCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof WebhookTestResponse
     */
    statusCode?: number | null;
}
