/* tslint:disable */
/* eslint-disable */
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
 * @interface AutoAssignCaddiesRequest
 */
export interface AutoAssignCaddiesRequest {
    /**
     * 対象日（テナントローカル＝JST 基準の日付）
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
 * 
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
     * 
     * @type {string}
     * @memberof CartItemResponse
     */
    id: string;
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
     * 
     * @type {number}
     * @memberof CartItemResponse
     */
    unitPriceNanodollar: number;
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
     * 
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
}
/**
 * 
 * @export
 * @interface ClockInRequest
 */
export interface ClockInRequest {
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
     * @type {string}
     * @memberof CreateCustomFieldDefinitionRequest
     */
    fieldType: string;
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
     * 
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    name: string;
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
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    clientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateInvoiceRequest
     */
    clientId: string;
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
     * 
     * @type {string}
     * @memberof CreateQuotationRequest
     */
    validUntil: string;
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
     * 
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
     * 
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
    Product: 'Product',
    Order: 'Order',
    Invoice: 'Invoice',
    Reservation: 'Reservation'
} as const;
export type CustomFieldEntityType = typeof CustomFieldEntityType[keyof typeof CustomFieldEntityType];


/**
 * 
 * @export
 */
export const CustomFieldType = {
    Text: 'Text',
    Number: 'Number',
    Date: 'Date',
    Select: 'Select',
    Boolean: 'Boolean'
} as const;
export type CustomFieldType = typeof CustomFieldType[keyof typeof CustomFieldType];

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
     * 
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
    phone?: string | null;
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
    sentAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    smsDeliveryStatus?: string | null;
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
 * @interface OrderItemResponse
 */
export interface OrderItemResponse {
    /**
     * 
     * @type {string}
     * @memberof OrderItemResponse
     */
    id: string;
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
     * 
     * @type {number}
     * @memberof OrderItemResponse
     */
    unitPriceNanodollar: number;
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
     * 
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
 * REST-facing mirror of the GraphQL `Product` type (`order_model::Product`).
 * 
 * `Product` derives `async_graphql::SimpleObject` and is reused directly as a
 * REST response body by these handlers. We avoid deriving `utoipa::ToSchema`
 * on the GraphQL type itself (that file is GraphQL-schema-owned) and instead
 * mirror every field here for OpenAPI documentation purposes. The JSON wire
 * format produced by this wrapper is byte-for-byte identical to serializing
 * `Product` directly, since every field is copied verbatim.
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
     * 
     * @type {string}
     * @memberof PublicInvoiceStripePublishableKeyResponse
     */
    stripeEnvironment: string;
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
     * 
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
 * @interface ReservationListResponse
 */
export interface ReservationListResponse {
    /**
     * 
     * @type {Array<Reservation>}
     * @memberof ReservationListResponse
     */
    items: Array<Reservation>;
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
     * 
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
 * 
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
     * 
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
     * 
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
     * 
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
     * @type {number}
     * @memberof UpdateCartItemRequest
     */
    quantity: number;
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
    phone?: string | null;
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
