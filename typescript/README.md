# @tachyon/field-sdk@0.1.0

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install @tachyon/field-sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  AgentDocumentsApi,
} from '@tachyon/field-sdk';
import type { AgentCreateInvoiceRequest } from '@tachyon/field-sdk';

async function example() {
  console.log("🚀 Testing @tachyon/field-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentDocumentsApi(config);

  const body = {
    // CreateInvoiceRequest
    createInvoiceRequest: ...,
  } satisfies AgentCreateInvoiceRequest;

  try {
    const data = await api.agentCreateInvoice(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AgentDocumentsApi* | [**agentCreateInvoice**](docs/AgentDocumentsApi.md#agentcreateinvoice) | **POST** /api/agent/invoices | 
*AgentDocumentsApi* | [**agentCreateQuotation**](docs/AgentDocumentsApi.md#agentcreatequotation) | **POST** /api/agent/quotations | 
*AgentDocumentsApi* | [**agentGetInvoice**](docs/AgentDocumentsApi.md#agentgetinvoice) | **GET** /api/agent/invoices/{id} | 
*AgentDocumentsApi* | [**agentGetQuotation**](docs/AgentDocumentsApi.md#agentgetquotation) | **GET** /api/agent/quotations/{id} | 
*AgentDocumentsApi* | [**agentListInvoices**](docs/AgentDocumentsApi.md#agentlistinvoices) | **GET** /api/agent/invoices | 
*AgentDocumentsApi* | [**agentListQuotations**](docs/AgentDocumentsApi.md#agentlistquotations) | **GET** /api/agent/quotations | 
*AgentDocumentsApi* | [**agentSendInvoice**](docs/AgentDocumentsApi.md#agentsendinvoice) | **POST** /api/agent/invoices/{id}/send | 
*AgentDocumentsApi* | [**agentSendQuotation**](docs/AgentDocumentsApi.md#agentsendquotation) | **POST** /api/agent/quotations/{id}/send | 
*ApprovalsApi* | [**createApprovalFlow**](docs/ApprovalsApi.md#createapprovalflowoperation) | **POST** /v1/erp/approval-flows | 
*ApprovalsApi* | [**deleteApprovalFlow**](docs/ApprovalsApi.md#deleteapprovalflow) | **DELETE** /v1/erp/approval-flows/{id} | 
*ApprovalsApi* | [**getApprovalFlow**](docs/ApprovalsApi.md#getapprovalflow) | **GET** /v1/erp/approval-flows/{id} | 
*ApprovalsApi* | [**listApprovalFlows**](docs/ApprovalsApi.md#listapprovalflows) | **GET** /v1/erp/approval-flows | 
*ApprovalsApi* | [**listApprovals**](docs/ApprovalsApi.md#listapprovals) | **GET** /api/approvals | 
*ApprovalsApi* | [**mutateApproval**](docs/ApprovalsApi.md#mutateapproval) | **POST** /api/approvals | 
*ApprovalsApi* | [**updateApprovalFlow**](docs/ApprovalsApi.md#updateapprovalflowoperation) | **PUT** /v1/erp/approval-flows/{id} | 
*CustomFieldsApi* | [**createCustomFieldDefinition**](docs/CustomFieldsApi.md#createcustomfielddefinitionoperation) | **POST** /v1/erp/custom-fields/definitions | 
*CustomFieldsApi* | [**deleteCustomFieldDefinition**](docs/CustomFieldsApi.md#deletecustomfielddefinition) | **DELETE** /v1/erp/custom-fields/definitions/{id} | 
*CustomFieldsApi* | [**getCustomFieldValues**](docs/CustomFieldsApi.md#getcustomfieldvalues) | **GET** /v1/erp/custom-fields/values/{entity_type}/{entity_id} | 
*CustomFieldsApi* | [**listCustomFieldDefinitions**](docs/CustomFieldsApi.md#listcustomfielddefinitions) | **GET** /v1/erp/custom-fields/definitions | 
*CustomFieldsApi* | [**setCustomFieldValues**](docs/CustomFieldsApi.md#setcustomfieldvaluesoperation) | **PUT** /v1/erp/custom-fields/values/{entity_type}/{entity_id} | 
*CustomFieldsApi* | [**updateCustomFieldDefinition**](docs/CustomFieldsApi.md#updatecustomfielddefinitionoperation) | **PUT** /v1/erp/custom-fields/definitions/{id} | 
*DealsApi* | [**createDeal**](docs/DealsApi.md#createdealoperation) | **POST** /v1/erp/deals | 
*DealsApi* | [**getDeal**](docs/DealsApi.md#getdeal) | **GET** /v1/erp/deals/{id} | 
*DealsApi* | [**listDeals**](docs/DealsApi.md#listdeals) | **GET** /v1/erp/deals | 
*DealsApi* | [**updateDeal**](docs/DealsApi.md#updatedealoperation) | **PATCH** /v1/erp/deals/{id} | 
*DefaultApi* | [**healthCheck**](docs/DefaultApi.md#healthcheck) | **GET** /health | Lightweight liveness probe — always returns 200.
*DefaultApi* | [**readinessCheck**](docs/DefaultApi.md#readinesscheck) | **GET** /health/ready | Readiness probe — verifies database connectivity.
*DocumentPdfSettingsApi* | [**getDocumentPdfSettings**](docs/DocumentPdfSettingsApi.md#getdocumentpdfsettings) | **GET** /v1/field/document-pdf-settings | 
*DocumentPdfSettingsApi* | [**saveDocumentPdfSettings**](docs/DocumentPdfSettingsApi.md#savedocumentpdfsettingsoperation) | **PUT** /v1/field/document-pdf-settings | 
*ERPMastersApi* | [**listLibraryMasters**](docs/ERPMastersApi.md#listlibrarymasters) | **GET** /v1/erp/masters/library | 
*ERPMastersApi* | [**listProductCategories**](docs/ERPMastersApi.md#listproductcategories) | **GET** /v1/erp/masters/product-categories | 
*ERPMastersApi* | [**listResourceTypes**](docs/ERPMastersApi.md#listresourcetypes) | **GET** /v1/erp/masters/resource-types | 
*ExpensesApi* | [**approveExpense**](docs/ExpensesApi.md#approveexpense) | **POST** /v1/erp/expenses/{id}/approve | 
*ExpensesApi* | [**createCategory**](docs/ExpensesApi.md#createcategory) | **POST** /v1/erp/expense-categories | 
*ExpensesApi* | [**createExpense**](docs/ExpensesApi.md#createexpenseoperation) | **POST** /v1/erp/expenses | 
*ExpensesApi* | [**deleteExpense**](docs/ExpensesApi.md#deleteexpense) | **DELETE** /v1/erp/expenses/{id} | 
*ExpensesApi* | [**getExpense**](docs/ExpensesApi.md#getexpense) | **GET** /v1/erp/expenses/{id} | 
*ExpensesApi* | [**listCategories**](docs/ExpensesApi.md#listcategories) | **GET** /v1/erp/expense-categories | 
*ExpensesApi* | [**listExpenses**](docs/ExpensesApi.md#listexpenses) | **GET** /v1/erp/expenses | 
*ExpensesApi* | [**rejectExpense**](docs/ExpensesApi.md#rejectexpenseoperation) | **POST** /v1/erp/expenses/{id}/reject | 
*ExpensesApi* | [**updateCategory**](docs/ExpensesApi.md#updatecategory) | **PATCH** /v1/erp/expense-categories/{id} | 
*ExpensesApi* | [**updateExpense**](docs/ExpensesApi.md#updateexpenseoperation) | **PATCH** /v1/erp/expenses/{id} | 
*GolfCourseApi* | [**autoAssignGolfCaddies**](docs/GolfCourseApi.md#autoassigngolfcaddies) | **POST** /v1/erp/extensions/golf-course/caddie-auto-assignments | キャディ自動配置（T09）。 対象日のキャディ付き予約のうち未割当のものへ、以下を考慮して割り当てる: - 稼働可否（希望休・午前/午後のみ・軽勤務） - 1日の担当数（2ラウンドは can_two_rounds かつ two_round_request のときのみ） - 月間契約ラウンドの残数が多い順（生活基盤&#x3D;契約消化を優先） - 同点はレーティング順
*GolfCourseApi* | [**createGolfCaddieAssignment**](docs/GolfCourseApi.md#creategolfcaddieassignment) | **POST** /v1/erp/extensions/golf-course/caddie-assignments | 
*GolfCourseApi* | [**createGolfCaddieProfile**](docs/GolfCourseApi.md#creategolfcaddieprofile) | **POST** /v1/erp/extensions/golf-course/caddie-profiles | 
*GolfCourseApi* | [**createGolfCaddieRating**](docs/GolfCourseApi.md#creategolfcaddierating) | **POST** /v1/erp/extensions/golf-course/caddie-ratings | 
*GolfCourseApi* | [**createGolfCourse**](docs/GolfCourseApi.md#creategolfcourse) | **POST** /v1/erp/extensions/golf-course/courses | 
*GolfCourseApi* | [**createGolfCourseResource**](docs/GolfCourseApi.md#creategolfcourseresource) | **POST** /v1/erp/extensions/golf-course/resources | 
*GolfCourseApi* | [**deleteCaddieAvailability**](docs/GolfCourseApi.md#deletecaddieavailability) | **DELETE** /v1/erp/extensions/golf-course/caddie-availabilities/{caddie_id}/{date} | 
*GolfCourseApi* | [**deleteDailyBudget**](docs/GolfCourseApi.md#deletedailybudget) | **DELETE** /v1/erp/extensions/golf-course/daily-budgets/{course_id}/{date} | 
*GolfCourseApi* | [**deleteGolfCourse**](docs/GolfCourseApi.md#deletegolfcourse) | **DELETE** /v1/erp/extensions/golf-course/courses/{id} | 
*GolfCourseApi* | [**exportGolfCaddiePayrollCsv**](docs/GolfCourseApi.md#exportgolfcaddiepayrollcsv) | **GET** /v1/erp/extensions/golf-course/caddie-payroll-summary/export.csv | 
*GolfCourseApi* | [**exportGolfMonthlySettlementCsv**](docs/GolfCourseApi.md#exportgolfmonthlysettlementcsv) | **GET** /v1/erp/extensions/golf-course/monthly-settlement/export.csv | 
*GolfCourseApi* | [**getDailyBudgetAchievement**](docs/GolfCourseApi.md#getdailybudgetachievement) | **GET** /v1/erp/extensions/golf-course/daily-budgets/achievement | 
*GolfCourseApi* | [**getGolfCourse**](docs/GolfCourseApi.md#getgolfcourse) | **GET** /v1/erp/extensions/golf-course/courses/{id} | 
*GolfCourseApi* | [**getGolfMonthlySettlement**](docs/GolfCourseApi.md#getgolfmonthlysettlement) | **GET** /v1/erp/extensions/golf-course/monthly-settlement | 
*GolfCourseApi* | [**getGolfReservationPolicy**](docs/GolfCourseApi.md#getgolfreservationpolicy) | **GET** /v1/erp/extensions/golf-course/reservation-policy | 
*GolfCourseApi* | [**importDailyBudgetsCsv**](docs/GolfCourseApi.md#importdailybudgetscsv) | **POST** /v1/erp/extensions/golf-course/daily-budgets/import | CSV import: &#x60;golf_course_id,date,target_revenue,target_average_spend,target_caddy_attached_ratio&#x60;
*GolfCourseApi* | [**listCaddieAvailabilities**](docs/GolfCourseApi.md#listcaddieavailabilities) | **GET** /v1/erp/extensions/golf-course/caddie-availabilities | 
*GolfCourseApi* | [**listCaddieCourseMemberships**](docs/GolfCourseApi.md#listcaddiecoursememberships) | **GET** /v1/erp/extensions/golf-course/caddie-profiles/{id}/courses | 
*GolfCourseApi* | [**listDailyBudgets**](docs/GolfCourseApi.md#listdailybudgets) | **GET** /v1/erp/extensions/golf-course/daily-budgets | 
*GolfCourseApi* | [**listGolfCaddieAssignments**](docs/GolfCourseApi.md#listgolfcaddieassignments) | **GET** /v1/erp/extensions/golf-course/caddie-assignments | 
*GolfCourseApi* | [**listGolfCaddieAttendancePeriodSnapshots**](docs/GolfCourseApi.md#listgolfcaddieattendanceperiodsnapshots) | **GET** /v1/erp/extensions/golf-course/caddie-attendance-snapshots | 
*GolfCourseApi* | [**listGolfCaddieAttendanceSnapshot**](docs/GolfCourseApi.md#listgolfcaddieattendancesnapshot) | **GET** /v1/erp/extensions/golf-course/caddie-attendance-snapshot | 
*GolfCourseApi* | [**listGolfCaddiePayrollSummary**](docs/GolfCourseApi.md#listgolfcaddiepayrollsummary) | **GET** /v1/erp/extensions/golf-course/caddie-payroll-summary | 
*GolfCourseApi* | [**listGolfCaddieProfiles**](docs/GolfCourseApi.md#listgolfcaddieprofiles) | **GET** /v1/erp/extensions/golf-course/caddie-profiles | 
*GolfCourseApi* | [**listGolfCaddieRatings**](docs/GolfCourseApi.md#listgolfcaddieratings) | **GET** /v1/erp/extensions/golf-course/caddie-ratings | 
*GolfCourseApi* | [**listGolfCourseResources**](docs/GolfCourseApi.md#listgolfcourseresources) | **GET** /v1/erp/extensions/golf-course/resources | 
*GolfCourseApi* | [**listGolfCourses**](docs/GolfCourseApi.md#listgolfcourses) | **GET** /v1/erp/extensions/golf-course/courses | 
*GolfCourseApi* | [**listGolfCustomFields**](docs/GolfCourseApi.md#listgolfcustomfields) | **GET** /v1/erp/extensions/golf-course/custom-fields | 
*GolfCourseApi* | [**listGolfProductSlots**](docs/GolfCourseApi.md#listgolfproductslots) | **GET** /v1/erp/extensions/golf-course/reservation-products/{service_id}/slots | 
*GolfCourseApi* | [**listGolfReservationProducts**](docs/GolfCourseApi.md#listgolfreservationproducts) | **GET** /v1/erp/extensions/golf-course/reservation-products | 
*GolfCourseApi* | [**recommendGolfCaddies**](docs/GolfCourseApi.md#recommendgolfcaddies) | **GET** /v1/erp/extensions/golf-course/caddie-recommendations | 
*GolfCourseApi* | [**replaceCaddieCourseMemberships**](docs/GolfCourseApi.md#replacecaddiecoursemembershipsoperation) | **PUT** /v1/erp/extensions/golf-course/caddie-profiles/{id}/courses | 
*GolfCourseApi* | [**replaceGolfProductSlots**](docs/GolfCourseApi.md#replacegolfproductslotsoperation) | **PUT** /v1/erp/extensions/golf-course/reservation-products/{service_id}/slots | 
*GolfCourseApi* | [**updateGolfCaddieAssignment**](docs/GolfCourseApi.md#updategolfcaddieassignment) | **PATCH** /v1/erp/extensions/golf-course/caddie-assignments/{id} | 
*GolfCourseApi* | [**updateGolfCaddieProfile**](docs/GolfCourseApi.md#updategolfcaddieprofile) | **PATCH** /v1/erp/extensions/golf-course/caddie-profiles/{id} | 
*GolfCourseApi* | [**updateGolfCourse**](docs/GolfCourseApi.md#updategolfcourse) | **PATCH** /v1/erp/extensions/golf-course/courses/{id} | 
*GolfCourseApi* | [**updateGolfCourseResource**](docs/GolfCourseApi.md#updategolfcourseresource) | **PATCH** /v1/erp/extensions/golf-course/resources/{id} | 
*GolfCourseApi* | [**updateGolfCustomField**](docs/GolfCourseApi.md#updategolfcustomfield) | **PATCH** /v1/erp/extensions/golf-course/custom-fields | 
*GolfCourseApi* | [**updateGolfReservationPolicy**](docs/GolfCourseApi.md#updategolfreservationpolicyoperation) | **PATCH** /v1/erp/extensions/golf-course/reservation-policy | 
*GolfCourseApi* | [**upsertCaddieAvailability**](docs/GolfCourseApi.md#upsertcaddieavailability) | **POST** /v1/erp/extensions/golf-course/caddie-availabilities | 
*GolfCourseApi* | [**upsertDailyBudget**](docs/GolfCourseApi.md#upsertdailybudget) | **POST** /v1/erp/extensions/golf-course/daily-budgets | 
*GolfCourseApi* | [**upsertGolfReservationProduct**](docs/GolfCourseApi.md#upsertgolfreservationproduct) | **POST** /v1/erp/extensions/golf-course/reservation-products/{service_id} | 
*HRMApi* | [**clockInStaff**](docs/HRMApi.md#clockinstaff) | **POST** /v1/erp/hrm/staff/{id}/clock-in | 
*HRMApi* | [**clockInStaffLegacyPrefix**](docs/HRMApi.md#clockinstafflegacyprefix) | **POST** /v1/erp/staff/{id}/clock-in | 
*HRMApi* | [**clockOutStaff**](docs/HRMApi.md#clockoutstaff) | **POST** /v1/erp/hrm/staff/{id}/clock-out | 
*HRMApi* | [**clockOutStaffLegacyPrefix**](docs/HRMApi.md#clockoutstafflegacyprefix) | **POST** /v1/erp/staff/{id}/clock-out | 
*HRMApi* | [**createStaffLeaveRequest**](docs/HRMApi.md#createstaffleaverequestoperation) | **POST** /v1/erp/hrm/staff/{id}/leave-requests | 
*HRMApi* | [**createStaffLeaveRequestLegacyPrefix**](docs/HRMApi.md#createstaffleaverequestlegacyprefix) | **POST** /v1/erp/staff/{id}/leave-requests | 
*HRMApi* | [**createStaffMember**](docs/HRMApi.md#createstaffmember) | **POST** /v1/erp/hrm/staff | 
*HRMApi* | [**createStaffMemberLegacyPrefix**](docs/HRMApi.md#createstaffmemberlegacyprefix) | **POST** /v1/erp/staff | 
*HRMApi* | [**createStaffShift**](docs/HRMApi.md#createstaffshift) | **POST** /v1/erp/hrm/staff/{id}/shifts | 
*HRMApi* | [**createStaffShiftLegacyPrefix**](docs/HRMApi.md#createstaffshiftlegacyprefix) | **POST** /v1/erp/staff/{id}/shifts | 
*HRMApi* | [**decideStaffLeaveRequest**](docs/HRMApi.md#decidestaffleaverequestoperation) | **PATCH** /v1/erp/hrm/leave-requests/{id} | 
*HRMApi* | [**decideStaffLeaveRequestLegacyPrefix**](docs/HRMApi.md#decidestaffleaverequestlegacyprefix) | **PATCH** /v1/erp/staff/leave-requests/{id} | 
*HRMApi* | [**getStaffCompensationProfile**](docs/HRMApi.md#getstaffcompensationprofile) | **GET** /v1/erp/hrm/staff/{id}/compensation | 
*HRMApi* | [**getStaffCompensationProfileLegacyPrefix**](docs/HRMApi.md#getstaffcompensationprofilelegacyprefix) | **GET** /v1/erp/staff/{id}/compensation | 
*HRMApi* | [**getStaffPayrollEstimate**](docs/HRMApi.md#getstaffpayrollestimate) | **GET** /v1/erp/hrm/staff/{id}/payroll-estimate | 
*HRMApi* | [**getStaffPayrollEstimateLegacyPrefix**](docs/HRMApi.md#getstaffpayrollestimatelegacyprefix) | **GET** /v1/erp/staff/{id}/payroll-estimate | 
*HRMApi* | [**getStaffShiftPreference**](docs/HRMApi.md#getstaffshiftpreference) | **GET** /v1/erp/hrm/staff/{id}/shift-preference | 
*HRMApi* | [**getStaffShiftPreferenceLegacyPrefix**](docs/HRMApi.md#getstaffshiftpreferencelegacyprefix) | **GET** /v1/erp/staff/{id}/shift-preference | 
*HRMApi* | [**getStaffSkillProfile**](docs/HRMApi.md#getstaffskillprofile) | **GET** /v1/erp/hrm/staff/{id}/skills | 
*HRMApi* | [**getStaffSkillProfileLegacyPrefix**](docs/HRMApi.md#getstaffskillprofilelegacyprefix) | **GET** /v1/erp/staff/{id}/skills | 
*HRMApi* | [**getStaffUtilization**](docs/HRMApi.md#getstaffutilization) | **GET** /v1/erp/hrm/staff/{id}/utilization | 
*HRMApi* | [**getStaffUtilizationLegacyPrefix**](docs/HRMApi.md#getstaffutilizationlegacyprefix) | **GET** /v1/erp/staff/{id}/utilization | 
*HRMApi* | [**listStaffLeaveRequests**](docs/HRMApi.md#liststaffleaverequests) | **GET** /v1/erp/hrm/staff/{id}/leave-requests | 
*HRMApi* | [**listStaffLeaveRequestsLegacyPrefix**](docs/HRMApi.md#liststaffleaverequestslegacyprefix) | **GET** /v1/erp/staff/{id}/leave-requests | 
*HRMApi* | [**listStaffMembers**](docs/HRMApi.md#liststaffmembers) | **GET** /v1/erp/hrm/staff | 
*HRMApi* | [**listStaffMembersLegacyPrefix**](docs/HRMApi.md#liststaffmemberslegacyprefix) | **GET** /v1/erp/staff | 
*HRMApi* | [**listStaffShifts**](docs/HRMApi.md#liststaffshifts) | **GET** /v1/erp/hrm/staff/{id}/shifts | 
*HRMApi* | [**listStaffShiftsLegacyPrefix**](docs/HRMApi.md#liststaffshiftslegacyprefix) | **GET** /v1/erp/staff/{id}/shifts | 
*HRMApi* | [**updateStaffCompensationProfile**](docs/HRMApi.md#updatestaffcompensationprofile) | **PATCH** /v1/erp/hrm/staff/{id}/compensation | 
*HRMApi* | [**updateStaffCompensationProfileLegacyPrefix**](docs/HRMApi.md#updatestaffcompensationprofilelegacyprefix) | **PATCH** /v1/erp/staff/{id}/compensation | 
*HRMApi* | [**updateStaffMember**](docs/HRMApi.md#updatestaffmember) | **PATCH** /v1/erp/hrm/staff/{id} | 
*HRMApi* | [**updateStaffMemberLegacyPrefix**](docs/HRMApi.md#updatestaffmemberlegacyprefix) | **PATCH** /v1/erp/staff/{id} | 
*HRMApi* | [**updateStaffShiftPreference**](docs/HRMApi.md#updatestaffshiftpreference) | **PATCH** /v1/erp/hrm/staff/{id}/shift-preference | 
*HRMApi* | [**updateStaffShiftPreferenceLegacyPrefix**](docs/HRMApi.md#updatestaffshiftpreferencelegacyprefix) | **PATCH** /v1/erp/staff/{id}/shift-preference | 
*HRMApi* | [**updateStaffSkillProfile**](docs/HRMApi.md#updatestaffskillprofile) | **PATCH** /v1/erp/hrm/staff/{id}/skills | 
*HRMApi* | [**updateStaffSkillProfileLegacyPrefix**](docs/HRMApi.md#updatestaffskillprofilelegacyprefix) | **PATCH** /v1/erp/staff/{id}/skills | 
*InventoryApi* | [**createStockOutbound**](docs/InventoryApi.md#createstockoutboundoperation) | **POST** /v1/field/inventory/outbounds | 
*InventoryApi* | [**createStockTransfer**](docs/InventoryApi.md#createstocktransferoperation) | **POST** /v1/field/inventory/stock-transfers | 
*InventoryApi* | [**createStore**](docs/InventoryApi.md#createstore) | **POST** /v1/field/inventory/stores | 
*InventoryApi* | [**createWarehouse**](docs/InventoryApi.md#createwarehouse) | **POST** /v1/field/inventory/warehouses | 
*InventoryApi* | [**deleteStore**](docs/InventoryApi.md#deletestore) | **DELETE** /v1/field/inventory/stores/{id} | 
*InventoryApi* | [**deleteWarehouse**](docs/InventoryApi.md#deletewarehouse) | **DELETE** /v1/field/inventory/warehouses/{id} | 
*InventoryApi* | [**getStore**](docs/InventoryApi.md#getstore) | **GET** /v1/field/inventory/stores/{id} | 
*InventoryApi* | [**getWarehouse**](docs/InventoryApi.md#getwarehouse) | **GET** /v1/field/inventory/warehouses/{id} | 
*InventoryApi* | [**listInventoryLocations**](docs/InventoryApi.md#listinventorylocations) | **GET** /v1/field/inventory/locations | 
*InventoryApi* | [**listInventoryValuations**](docs/InventoryApi.md#listinventoryvaluations) | **GET** /v1/field/inventory/valuations | 
*InventoryApi* | [**listLowStockAlerts**](docs/InventoryApi.md#listlowstockalerts) | **GET** /v1/field/inventory/low-stock-alerts | 
*InventoryApi* | [**listStockLevels**](docs/InventoryApi.md#liststocklevels) | **GET** /v1/field/inventory/stock-levels | 
*InventoryApi* | [**listStockLotBalances**](docs/InventoryApi.md#liststocklotbalances) | **GET** /v1/field/inventory/lot-balances | 
*InventoryApi* | [**listStockMovements**](docs/InventoryApi.md#liststockmovements) | **GET** /v1/field/inventory/stock-movements | 
*InventoryApi* | [**listStockTransfers**](docs/InventoryApi.md#liststocktransfers) | **GET** /v1/field/inventory/stock-transfers | 
*InventoryApi* | [**listStores**](docs/InventoryApi.md#liststores) | **GET** /v1/field/inventory/stores | 
*InventoryApi* | [**listWarehouses**](docs/InventoryApi.md#listwarehouses) | **GET** /v1/field/inventory/warehouses | 
*InventoryApi* | [**startStockTracking**](docs/InventoryApi.md#startstocktrackingoperation) | **POST** /v1/field/inventory/stock-items | &#x60;POST /v1/field/inventory/stock-items&#x60;
*InventoryApi* | [**updateLowStockDecision**](docs/InventoryApi.md#updatelowstockdecisionoperation) | **PATCH** /v1/field/inventory/low-stock-alerts/{stock_item_id}/decision | 
*InventoryApi* | [**updateStore**](docs/InventoryApi.md#updatestore) | **PUT** /v1/field/inventory/stores/{id} | 
*InventoryApi* | [**updateWarehouse**](docs/InventoryApi.md#updatewarehouse) | **PUT** /v1/field/inventory/warehouses/{id} | 
*InventoryApi* | [**upsertReplenishmentPolicy**](docs/InventoryApi.md#upsertreplenishmentpolicyoperation) | **PUT** /v1/field/inventory/replenishment-policies | 
*InvoiceSchedulesApi* | [**createSchedule**](docs/InvoiceSchedulesApi.md#createscheduleoperation) | **POST** /v1/erp/invoice-schedules | 
*InvoiceSchedulesApi* | [**deactivateSchedule**](docs/InvoiceSchedulesApi.md#deactivateschedule) | **DELETE** /v1/erp/invoice-schedules/{id} | 
*InvoiceSchedulesApi* | [**listSchedules**](docs/InvoiceSchedulesApi.md#listschedules) | **GET** /v1/erp/invoice-schedules | 
*InvoiceSchedulesApi* | [**updateSchedule**](docs/InvoiceSchedulesApi.md#updatescheduleoperation) | **PUT** /v1/erp/invoice-schedules/{id} | 
*InvoicesApi* | [**createInvoice**](docs/InvoicesApi.md#createinvoiceoperation) | **POST** /v1/invoices | 
*InvoicesApi* | [**deleteInvoice**](docs/InvoicesApi.md#deleteinvoice) | **DELETE** /v1/invoices/{id} | 
*InvoicesApi* | [**fulfillInvoice**](docs/InvoicesApi.md#fulfillinvoice) | **POST** /v1/invoices/{id}/fulfill | 
*InvoicesApi* | [**getInvoice**](docs/InvoicesApi.md#getinvoice) | **GET** /v1/invoices/{id} | 
*InvoicesApi* | [**listInvoices**](docs/InvoicesApi.md#listinvoices) | **GET** /v1/invoices | 
*InvoicesApi* | [**listSquarePaymentReconciliations**](docs/InvoicesApi.md#listsquarepaymentreconciliations) | **GET** /v1/invoice-reconciliations/square-payments | 
*InvoicesApi* | [**reconcileSquarePayment**](docs/InvoicesApi.md#reconcilesquarepaymentoperation) | **POST** /v1/invoice-reconciliations/square-payments/{square_payment_id}/reconcile | 
*InvoicesApi* | [**resendInvoicePaymentLink**](docs/InvoicesApi.md#resendinvoicepaymentlink) | **POST** /v1/invoices/{id}/payment-link/resend | 
*InvoicesApi* | [**updateInvoice**](docs/InvoicesApi.md#updateinvoiceoperation) | **PATCH** /v1/invoices/{id} | 
*InvoicesApi* | [**updateInvoiceFollowUpStatus**](docs/InvoicesApi.md#updateinvoicefollowupstatusoperation) | **POST** /v1/invoices/{id}/follow-up-status | 
*OrderProductsApi* | [**createOrderProduct**](docs/OrderProductsApi.md#createorderproductoperation) | **POST** /v1/order/products | 
*OrderProductsApi* | [**deleteOrderProduct**](docs/OrderProductsApi.md#deleteorderproduct) | **DELETE** /v1/order/products/{product_id} | 
*OrderProductsApi* | [**getOrderProduct**](docs/OrderProductsApi.md#getorderproduct) | **GET** /v1/order/products/{product_id} | 
*OrderProductsApi* | [**listOrderProductVariants**](docs/OrderProductsApi.md#listorderproductvariants) | **GET** /v1/order/products/{product_id}/variants | 
*OrderProductsApi* | [**listOrderProducts**](docs/OrderProductsApi.md#listorderproducts) | **GET** /v1/order/products | 
*OrderProductsApi* | [**updateOrderProduct**](docs/OrderProductsApi.md#updateorderproductoperation) | **PATCH** /v1/order/products/{product_id} | 
*OrdersApi* | [**convertOrderToInvoice**](docs/OrdersApi.md#convertordertoinvoice) | **POST** /v1/erp/orders/{id}/convert-to-invoice | 
*OrdersApi* | [**createOrder**](docs/OrdersApi.md#createorderoperation) | **POST** /v1/erp/orders | 
*OrdersApi* | [**getOrder**](docs/OrdersApi.md#getorder) | **GET** /v1/erp/orders/{id} | 
*OrdersApi* | [**listOrders**](docs/OrdersApi.md#listorders) | **GET** /v1/erp/orders | 
*OrdersApi* | [**updateOrder**](docs/OrdersApi.md#updateorderoperation) | **PATCH** /v1/erp/orders/{id} | 
*PaymentLinksApi* | [**createPaymentLink**](docs/PaymentLinksApi.md#createpaymentlinkoperation) | **POST** /v1/payment-links | 
*PublicInvoicesApi* | [**confirmPublicInvoicePayment**](docs/PublicInvoicesApi.md#confirmpublicinvoicepayment) | **POST** /v1/public/invoices/{tenant_id}/{id}/payment-confirmation | 
*PublicInvoicesApi* | [**confirmShortPublicInvoicePayment**](docs/PublicInvoicesApi.md#confirmshortpublicinvoicepayment) | **POST** /v1/public/invoices/{id}/payment-confirmation | 
*PublicInvoicesApi* | [**createPublicInvoiceCheckout**](docs/PublicInvoicesApi.md#createpublicinvoicecheckout) | **POST** /v1/public/invoices/{tenant_id}/{id}/checkout | 
*PublicInvoicesApi* | [**createPublicInvoicePaymentIntent**](docs/PublicInvoicesApi.md#createpublicinvoicepaymentintent) | **POST** /v1/public/invoices/{tenant_id}/{id}/payment-intent | 
*PublicInvoicesApi* | [**createShortPublicInvoiceCheckout**](docs/PublicInvoicesApi.md#createshortpublicinvoicecheckout) | **POST** /v1/public/invoices/{id}/checkout | 
*PublicInvoicesApi* | [**createShortPublicInvoicePaymentIntent**](docs/PublicInvoicesApi.md#createshortpublicinvoicepaymentintent) | **POST** /v1/public/invoices/{id}/payment-intent | 
*PublicInvoicesApi* | [**getPublicInvoice**](docs/PublicInvoicesApi.md#getpublicinvoice) | **GET** /v1/public/invoices/{tenant_id}/{id} | 
*PublicInvoicesApi* | [**getPublicInvoiceStripePublishableKey**](docs/PublicInvoicesApi.md#getpublicinvoicestripepublishablekey) | **GET** /v1/public/invoices/{tenant_id}/{id}/stripe-publishable-key | 
*PublicInvoicesApi* | [**getShortPublicInvoice**](docs/PublicInvoicesApi.md#getshortpublicinvoice) | **GET** /v1/public/invoices/{id} | 
*PublicInvoicesApi* | [**getShortPublicInvoiceStripePublishableKey**](docs/PublicInvoicesApi.md#getshortpublicinvoicestripepublishablekey) | **GET** /v1/public/invoices/{id}/stripe-publishable-key | 
*PurchaseOrdersApi* | [**createPurchaseOrder**](docs/PurchaseOrdersApi.md#createpurchaseorderoperation) | **POST** /v1/erp/purchase-orders | 
*PurchaseOrdersApi* | [**getPurchaseOrder**](docs/PurchaseOrdersApi.md#getpurchaseorder) | **GET** /v1/erp/purchase-orders/{id} | 
*PurchaseOrdersApi* | [**listPurchaseOrders**](docs/PurchaseOrdersApi.md#listpurchaseorders) | **GET** /v1/erp/purchase-orders | 
*PurchaseOrdersApi* | [**updatePurchaseOrder**](docs/PurchaseOrdersApi.md#updatepurchaseorderoperation) | **PATCH** /v1/erp/purchase-orders/{id} | 
*QuotationsApi* | [**convertQuotationToInvoice**](docs/QuotationsApi.md#convertquotationtoinvoice) | **POST** /v1/erp/quotations/{id}/convert-to-invoice | 
*QuotationsApi* | [**createQuotation**](docs/QuotationsApi.md#createquotationoperation) | **POST** /v1/erp/quotations | 
*QuotationsApi* | [**getQuotation**](docs/QuotationsApi.md#getquotation) | **GET** /v1/erp/quotations/{id} | 
*QuotationsApi* | [**listQuotations**](docs/QuotationsApi.md#listquotations) | **GET** /v1/erp/quotations | 
*QuotationsApi* | [**updateQuotation**](docs/QuotationsApi.md#updatequotationoperation) | **PATCH** /v1/erp/quotations/{id} | 
*ReservationsApi* | [**assignReservationStaff**](docs/ReservationsApi.md#assignreservationstaff) | **POST** /v1/erp/reservations/{id}/staff-assignment | 
*ReservationsApi* | [**cancelReservationWithPolicy**](docs/ReservationsApi.md#cancelreservationwithpolicy) | **POST** /v1/erp/reservations/{id}/cancel | 
*ReservationsApi* | [**createReservation**](docs/ReservationsApi.md#createreservationoperation) | **POST** /v1/erp/reservations | 
*ReservationsApi* | [**createStaffAssignment**](docs/ReservationsApi.md#createstaffassignment) | **POST** /v1/erp/staff-assignments | 
*ReservationsApi* | [**createStaffProfile**](docs/ReservationsApi.md#createstaffprofile) | **POST** /v1/erp/staff-profiles | 
*ReservationsApi* | [**disableExtension**](docs/ReservationsApi.md#disableextension) | **POST** /v1/erp/extensions/{extension_key}/disable | 
*ReservationsApi* | [**enableExtension**](docs/ReservationsApi.md#enableextensionoperation) | **POST** /v1/erp/extensions/{extension_key}/enable | 
*ReservationsApi* | [**exportCancellationFeeReportCsv**](docs/ReservationsApi.md#exportcancellationfeereportcsv) | **GET** /v1/erp/reservation-reports/cancellation-fees.csv | 
*ReservationsApi* | [**exportReservationsCsv**](docs/ReservationsApi.md#exportreservationscsv) | **GET** /v1/erp/reservations/export.csv | 
*ReservationsApi* | [**getExtensionConfig**](docs/ReservationsApi.md#getextensionconfig) | **GET** /v1/erp/extensions/{extension_key}/config | 
*ReservationsApi* | [**getReservation**](docs/ReservationsApi.md#getreservation) | **GET** /v1/erp/reservations/{id} | 
*ReservationsApi* | [**issueReservationBillingLink**](docs/ReservationsApi.md#issuereservationbillinglinkoperation) | **POST** /v1/erp/reservations/{id}/billing-link | 
*ReservationsApi* | [**issueReservationSquareInvoice**](docs/ReservationsApi.md#issuereservationsquareinvoice) | **POST** /v1/erp/reservations/{id}/billing-invoice | 
*ReservationsApi* | [**listCancellationFeeReport**](docs/ReservationsApi.md#listcancellationfeereport) | **GET** /v1/erp/reservation-reports/cancellation-fees | 
*ReservationsApi* | [**listExtensionLifecycleAuditEvents**](docs/ReservationsApi.md#listextensionlifecycleauditevents) | **GET** /v1/erp/extensions/audit | 
*ReservationsApi* | [**listExtensions**](docs/ReservationsApi.md#listextensions) | **GET** /v1/erp/extensions | 
*ReservationsApi* | [**listReservationTypes**](docs/ReservationsApi.md#listreservationtypes) | **GET** /v1/erp/reservation-types | 
*ReservationsApi* | [**listReservations**](docs/ReservationsApi.md#listreservations) | **GET** /v1/erp/reservations | 
*ReservationsApi* | [**listResources**](docs/ReservationsApi.md#listresources) | **GET** /v1/erp/resources | 
*ReservationsApi* | [**listStaffAssignments**](docs/ReservationsApi.md#liststaffassignments) | **GET** /v1/erp/staff-assignments | 
*ReservationsApi* | [**listStaffAvailability**](docs/ReservationsApi.md#liststaffavailability) | **GET** /v1/erp/staff-availability | 
*ReservationsApi* | [**listStaffProfiles**](docs/ReservationsApi.md#liststaffprofiles) | **GET** /v1/erp/staff-profiles | 
*ReservationsApi* | [**listTenantExtensionStatuses**](docs/ReservationsApi.md#listtenantextensionstatuses) | **GET** /v1/erp/extensions/status | 
*ReservationsApi* | [**listTenantExtensionStatusesAppStore**](docs/ReservationsApi.md#listtenantextensionstatusesappstore) | **GET** /v1/erp/app-store/apps | Thin wrapper so the app-store mount (&#x60;/v1/erp/app-store/apps&#x60;) gets its own OpenAPI path entry; delegates entirely to &#x60;list_tenant_extension_statuses&#x60;.
*ReservationsApi* | [**listTenantExtensions**](docs/ReservationsApi.md#listtenantextensions) | **GET** /v1/erp/extensions/enabled | 
*ReservationsApi* | [**registerExtension**](docs/ReservationsApi.md#registerextensionoperation) | **POST** /v1/erp/extensions | 
*ReservationsApi* | [**releaseExpiredPaymentHolds**](docs/ReservationsApi.md#releaseexpiredpaymentholds) | **POST** /v1/erp/reservations/payment-holds/release-expired | 
*ReservationsApi* | [**releasePaymentIntentHold**](docs/ReservationsApi.md#releasepaymentintentholdoperation) | **POST** /v1/erp/reservations/payment-holds/release | 
*ReservationsApi* | [**sendReservationNotification**](docs/ReservationsApi.md#sendreservationnotificationoperation) | **POST** /v1/erp/reservations/{id}/notifications | 
*ReservationsApi* | [**unassignReservationStaff**](docs/ReservationsApi.md#unassignreservationstaff) | **POST** /v1/erp/reservations/{id}/staff-assignment/unassign | 
*ReservationsApi* | [**updateExtensionConfig**](docs/ReservationsApi.md#updateextensionconfigoperation) | **PATCH** /v1/erp/extensions/{extension_key}/config | 
*ReservationsApi* | [**updateReservation**](docs/ReservationsApi.md#updatereservationoperation) | **PATCH** /v1/erp/reservations/{id} | 
*ReservationsApi* | [**updateStaffAssignment**](docs/ReservationsApi.md#updatestaffassignment) | **PATCH** /v1/erp/staff-assignments/{id} | 
*ReservationsApi* | [**updateStaffProfile**](docs/ReservationsApi.md#updatestaffprofile) | **PATCH** /v1/erp/staff-profiles/{id} | 
*ReturnsApi* | [**authorizeReturnRequest**](docs/ReturnsApi.md#authorizereturnrequest) | **POST** /v1/erp/return-requests/{id}/authorize | 
*ReturnsApi* | [**cancelReturnRequest**](docs/ReturnsApi.md#cancelreturnrequest) | **POST** /v1/erp/return-requests/{id}/cancel | 
*ReturnsApi* | [**completeReturnRequest**](docs/ReturnsApi.md#completereturnrequest) | **POST** /v1/erp/return-requests/{id}/complete | 
*ReturnsApi* | [**createReturnRequest**](docs/ReturnsApi.md#createreturnrequest) | **POST** /v1/erp/return-requests | 
*ReturnsApi* | [**getReturnRequest**](docs/ReturnsApi.md#getreturnrequest) | **GET** /v1/erp/return-requests/{id} | 
*ReturnsApi* | [**listReturnRequests**](docs/ReturnsApi.md#listreturnrequests) | **GET** /v1/erp/return-requests | 
*ReturnsApi* | [**recordReturnInspectionDisposition**](docs/ReturnsApi.md#recordreturninspectiondisposition) | **POST** /v1/erp/return-requests/{id}/inspection-disposition | 
*ReturnsApi* | [**rejectReturnRequest**](docs/ReturnsApi.md#rejectreturnrequest) | **POST** /v1/erp/return-requests/{id}/reject | 
*ReturnsApi* | [**startReturnInspection**](docs/ReturnsApi.md#startreturninspection) | **POST** /v1/erp/return-requests/{id}/start-inspection | 
*SaaSSubscriptionsApi* | [**approveSaasChangeRequest**](docs/SaaSSubscriptionsApi.md#approvesaaschangerequest) | **POST** /v1/erp/saas-subscription-requests/{id}/approve | 
*SaaSSubscriptionsApi* | [**createSaasChangeRequest**](docs/SaaSSubscriptionsApi.md#createsaaschangerequestoperation) | **POST** /v1/erp/saas-subscription-requests | 
*SaaSSubscriptionsApi* | [**createSaasSubscription**](docs/SaaSSubscriptionsApi.md#createsaassubscriptionoperation) | **POST** /v1/erp/saas-subscriptions | 
*SaaSSubscriptionsApi* | [**listSaasChangeRequests**](docs/SaaSSubscriptionsApi.md#listsaaschangerequests) | **GET** /v1/erp/saas-subscription-requests | 
*SaaSSubscriptionsApi* | [**listSaasSubscriptions**](docs/SaaSSubscriptionsApi.md#listsaassubscriptions) | **GET** /v1/erp/saas-subscriptions | 
*SaaSSubscriptionsApi* | [**returnSaasChangeRequest**](docs/SaaSSubscriptionsApi.md#returnsaaschangerequest) | **POST** /v1/erp/saas-subscription-requests/{id}/return | 
*SaaSSubscriptionsApi* | [**updateSaasSubscription**](docs/SaaSSubscriptionsApi.md#updatesaassubscriptionoperation) | **PATCH** /v1/erp/saas-subscriptions/{id} | 
*StoreKitApi* | [**addCartItem**](docs/StoreKitApi.md#addcartitemoperation) | **POST** /v1/storekit/carts/{cart_id}/items | Add a cart item.
*StoreKitApi* | [**cancelOrder**](docs/StoreKitApi.md#cancelorder) | **POST** /v1/storekit/orders/{order_id}/cancel | Cancel order.
*StoreKitApi* | [**checkout**](docs/StoreKitApi.md#checkoutoperation) | **POST** /v1/storekit/checkout_sessions | Create checkout session / order.
*StoreKitApi* | [**clearCart**](docs/StoreKitApi.md#clearcart) | **POST** /v1/storekit/carts/{cart_id}/clear | Clear cart items.
*StoreKitApi* | [**confirmCheckoutSession**](docs/StoreKitApi.md#confirmcheckoutsession) | **POST** /v1/storekit/checkout_sessions/{order_id}/confirm | Confirm checkout session.
*StoreKitApi* | [**createCart**](docs/StoreKitApi.md#createcartoperation) | **POST** /v1/storekit/carts | Create or retrieve a cart.
*StoreKitApi* | [**createCustomer**](docs/StoreKitApi.md#createcustomeroperation) | **POST** /v1/storekit/customers | Create customer.
*StoreKitApi* | [**deleteCustomer**](docs/StoreKitApi.md#deletecustomer) | **DELETE** /v1/storekit/customers/{customer_id} | Delete customer.
*StoreKitApi* | [**deliverOrder**](docs/StoreKitApi.md#deliverorder) | **POST** /v1/storekit/orders/{order_id}/deliver | Deliver order.
*StoreKitApi* | [**getCart**](docs/StoreKitApi.md#getcart) | **GET** /v1/storekit/carts/{cart_id} | Get a cart.
*StoreKitApi* | [**getCustomer**](docs/StoreKitApi.md#getcustomer) | **GET** /v1/storekit/customers/{customer_id} | Get customer.
*StoreKitApi* | [**getOrderReceipt**](docs/StoreKitApi.md#getorderreceipt) | **GET** /v1/storekit/consumer-orders/{order_id}/receipt | Get a printable receipt for a consumer order.
*StoreKitApi* | [**getProduct**](docs/StoreKitApi.md#getproduct) | **GET** /v1/storekit/products/{product_id} | Get a storefront product.
*StoreKitApi* | [**getProductStock**](docs/StoreKitApi.md#getproductstock) | **GET** /v1/storekit/products/{product_id}/stock | Get product stock.
*StoreKitApi* | [**listCustomers**](docs/StoreKitApi.md#listcustomers) | **GET** /v1/storekit/customers | List customers.
*StoreKitApi* | [**listFulfillmentMethods**](docs/StoreKitApi.md#listfulfillmentmethods) | **GET** /v1/storekit/fulfillment-methods | List supported fulfillment methods.
*StoreKitApi* | [**listProducts**](docs/StoreKitApi.md#listproducts) | **GET** /v1/storekit/products | List storefront products.
*StoreKitApi* | [**pickupOrder**](docs/StoreKitApi.md#pickuporder) | **POST** /v1/storekit/orders/{order_id}/pickup | Mark pickup order as picked up.
*StoreKitApi* | [**prepareOrder**](docs/StoreKitApi.md#prepareorder) | **POST** /v1/storekit/orders/{order_id}/prepare | Prepare order for fulfillment.
*StoreKitApi* | [**readyOrder**](docs/StoreKitApi.md#readyorder) | **POST** /v1/storekit/orders/{order_id}/ready | Mark pickup order as ready.
*StoreKitApi* | [**refundOrder**](docs/StoreKitApi.md#refundorder) | **POST** /v1/storekit/orders/{order_id}/refund | Refund order.
*StoreKitApi* | [**removeCartItem**](docs/StoreKitApi.md#removecartitem) | **DELETE** /v1/storekit/carts/{cart_id}/items/{item_id} | Remove a cart item by item ID.
*StoreKitApi* | [**selectPickupDatetime**](docs/StoreKitApi.md#selectpickupdatetimeoperation) | **POST** /v1/storekit/orders/{order_id}/select-pickup-datetime | Select pickup date-time.
*StoreKitApi* | [**shipOrder**](docs/StoreKitApi.md#shiporder) | **POST** /v1/storekit/orders/{order_id}/ship | Ship order.
*StoreKitApi* | [**storefrontCreateReservation**](docs/StoreKitApi.md#storefrontcreatereservation) | **POST** /v1/storekit/reservations | 
*StoreKitApi* | [**storefrontListReservationProducts**](docs/StoreKitApi.md#storefrontlistreservationproducts) | **GET** /v1/storekit/reservation-products | 
*StoreKitApi* | [**storefrontListReservationTypes**](docs/StoreKitApi.md#storefrontlistreservationtypes) | **GET** /v1/storekit/reservation-types | 
*StoreKitApi* | [**storefrontListReservations**](docs/StoreKitApi.md#storefrontlistreservations) | **GET** /v1/storekit/reservations | 
*StoreKitApi* | [**storefrontListResources**](docs/StoreKitApi.md#storefrontlistresources) | **GET** /v1/storekit/resources | 
*StoreKitApi* | [**storefrontUpdateReservation**](docs/StoreKitApi.md#storefrontupdatereservation) | **PATCH** /v1/storekit/reservations/{id} | 
*StoreKitApi* | [**storekitGetOrder**](docs/StoreKitApi.md#storekitgetorder) | **GET** /v1/storekit/orders/{order_id} | Get order.
*StoreKitApi* | [**storekitListCategories**](docs/StoreKitApi.md#storekitlistcategories) | **GET** /v1/storekit/categories | List storefront categories.
*StoreKitApi* | [**storekitListOrders**](docs/StoreKitApi.md#storekitlistorders) | **GET** /v1/storekit/orders | List orders.
*StoreKitApi* | [**updateCartItem**](docs/StoreKitApi.md#updatecartitemoperation) | **POST** /v1/storekit/carts/{cart_id}/items/{item_id} | Update a cart item by item ID.
*StoreKitApi* | [**updateCustomer**](docs/StoreKitApi.md#updatecustomeroperation) | **POST** /v1/storekit/customers/{customer_id} | Update customer.
*StoreKitApi* | [**validateCoupon**](docs/StoreKitApi.md#validatecouponoperation) | **POST** /v1/storekit/coupons/validate | Validate coupon.
*TACHYONFieldAPIKeysApi* | [**createApiKey**](docs/TACHYONFieldAPIKeysApi.md#createapikeyoperation) | **POST** /v1/field/api-keys | 
*TACHYONFieldAPIKeysApi* | [**deleteApiKey**](docs/TACHYONFieldAPIKeysApi.md#deleteapikey) | **DELETE** /v1/field/api-keys/{id} | 
*TACHYONFieldAPIKeysApi* | [**getApiKey**](docs/TACHYONFieldAPIKeysApi.md#getapikey) | **GET** /v1/field/api-keys/{id} | 
*TACHYONFieldAPIKeysApi* | [**listApiKeys**](docs/TACHYONFieldAPIKeysApi.md#listapikeys) | **GET** /v1/field/api-keys | 
*TACHYONFieldAPIKeysApi* | [**revokeApiKey**](docs/TACHYONFieldAPIKeysApi.md#revokeapikey) | **POST** /v1/field/api-keys/{id}/revoke | 
*TACHYONFieldBillingAccountsApi* | [**addOperator**](docs/TACHYONFieldBillingAccountsApi.md#addoperatoroperation) | **POST** /v1/field/billing-accounts/{id}/operators | &#x60;POST /v1/field/billing-accounts/{id}/operators&#x60; — add an operator to a billing account.
*TACHYONFieldBillingAccountsApi* | [**createBillingAccount**](docs/TACHYONFieldBillingAccountsApi.md#createbillingaccountoperation) | **POST** /v1/field/billing-accounts | &#x60;POST /v1/field/billing-accounts&#x60; — create a new billing account.
*TACHYONFieldBillingAccountsApi* | [**getBillingAccount**](docs/TACHYONFieldBillingAccountsApi.md#getbillingaccount) | **GET** /v1/field/billing-accounts/{id} | &#x60;GET /v1/field/billing-accounts/{id}&#x60; — get a single billing account.
*TACHYONFieldBillingAccountsApi* | [**listBillingAccounts**](docs/TACHYONFieldBillingAccountsApi.md#listbillingaccounts) | **GET** /v1/field/billing-accounts | &#x60;GET /v1/field/billing-accounts&#x60; — list all billing accounts.
*TACHYONFieldBillingAccountsApi* | [**listOperators**](docs/TACHYONFieldBillingAccountsApi.md#listoperators) | **GET** /v1/field/billing-accounts/{id}/operators | &#x60;GET /v1/field/billing-accounts/{id}/operators&#x60; — list operators linked to a billing account.
*TACHYONFieldBillingAccountsApi* | [**removeOperator**](docs/TACHYONFieldBillingAccountsApi.md#removeoperator) | **DELETE** /v1/field/billing-accounts/{id}/operators/{operator_id} | &#x60;DELETE /v1/field/billing-accounts/{id}/operators/ {operator_id}&#x60; — remove an operator from a billing account.
*TACHYONFieldBillingAccountsApi* | [**updateBillingAccount**](docs/TACHYONFieldBillingAccountsApi.md#updatebillingaccountoperation) | **PUT** /v1/field/billing-accounts/{id} | &#x60;PUT /v1/field/billing-accounts/{id}&#x60; — update a billing account.
*TACHYONFieldBridgeApi* | [**createBridgeDefinition**](docs/TACHYONFieldBridgeApi.md#createbridgedefinition) | **POST** /v1/bridge/definitions | 
*TACHYONFieldBridgeApi* | [**executeBridgeRun**](docs/TACHYONFieldBridgeApi.md#executebridgerun) | **POST** /v1/bridge/runs/{run_id}/execute | 
*TACHYONFieldBridgeApi* | [**getBridgeRun**](docs/TACHYONFieldBridgeApi.md#getbridgerun) | **GET** /v1/bridge/runs/{run_id} | 
*TACHYONFieldBridgeApi* | [**invokeBridgeAction**](docs/TACHYONFieldBridgeApi.md#invokebridgeaction) | **POST** /v1/bridge/actions/{action} | 
*TACHYONFieldBridgeApi* | [**listBridgeDefinitions**](docs/TACHYONFieldBridgeApi.md#listbridgedefinitions) | **GET** /v1/bridge/definitions | 
*TACHYONFieldBridgeApi* | [**listBridgeRuns**](docs/TACHYONFieldBridgeApi.md#listbridgeruns) | **GET** /v1/bridge/runs | 
*TACHYONFieldBridgeApi* | [**previewBridgeRun**](docs/TACHYONFieldBridgeApi.md#previewbridgerun) | **POST** /v1/bridge/definitions/{definition_id}/runs/preview | 
*TACHYONFieldBridgeExportApi* | [**createBridgeExportDefinition**](docs/TACHYONFieldBridgeExportApi.md#createbridgeexportdefinition) | **POST** /v1/bridge/exports/definitions | 
*TACHYONFieldBridgeExportApi* | [**exportBridgeCsv**](docs/TACHYONFieldBridgeExportApi.md#exportbridgecsv) | **GET** /v1/bridge/exports/definitions/{definition_id}/csv | 
*TACHYONFieldBridgeExportApi* | [**listBridgeExportDefinitions**](docs/TACHYONFieldBridgeExportApi.md#listbridgeexportdefinitions) | **GET** /v1/bridge/exports/definitions | 
*TACHYONFieldBridgeExportApi* | [**listBridgeExportObjects**](docs/TACHYONFieldBridgeExportApi.md#listbridgeexportobjects) | **GET** /v1/bridge/exports/objects | 
*TACHYONFieldCRMClientsApi* | [**exportClientsCsv**](docs/TACHYONFieldCRMClientsApi.md#exportclientscsv) | **GET** /v1/erp/clients/export.csv | 
*TACHYONFieldCRMClientsApi* | [**importClientsCsv**](docs/TACHYONFieldCRMClientsApi.md#importclientscsv) | **POST** /v1/erp/clients/import.csv | 
*TACHYONFieldIAMApi* | [**deleteErpUserRole**](docs/TACHYONFieldIAMApi.md#deleteerpuserrole) | **DELETE** /v1/field/iam/users/{user_id} | 
*TACHYONFieldIAMApi* | [**inviteErpUser**](docs/TACHYONFieldIAMApi.md#inviteerpuseroperation) | **POST** /v1/field/iam/users/invite | 
*TACHYONFieldIAMApi* | [**listErpUsers**](docs/TACHYONFieldIAMApi.md#listerpusers) | **GET** /v1/field/iam/users | 
*TACHYONFieldIAMApi* | [**updateErpUserPolicies**](docs/TACHYONFieldIAMApi.md#updateerpuserpoliciesoperation) | **PUT** /v1/field/iam/users/{user_id}/policies | Replace a member\&#39;s ERP-managed policies with the given flat list.
*TACHYONFieldIAMApi* | [**updateErpUserRole**](docs/TACHYONFieldIAMApi.md#updateerpuserroleoperation) | **PUT** /v1/field/iam/users/{user_id}/role | 
*TACHYONFieldIdentityApi* | [**getClientCapabilities**](docs/TACHYONFieldIdentityApi.md#getclientcapabilities) | **GET** /v1/field/client-capabilities | Resolve tenant-scoped UI capabilities from the same policy actions enforced by the corresponding API handlers.
*TACHYONFieldIdentityApi* | [**getMe**](docs/TACHYONFieldIdentityApi.md#getme) | **GET** /v1/erp/me | Return the authenticated user\&#39;s Tachyon tenant memberships annotated with one Field extension\&#39;s enabled state.
*TACHYONFieldOrdersApi* | [**cancelExpiredOrders**](docs/TACHYONFieldOrdersApi.md#cancelexpiredorders) | **POST** /v1/field/orders/batch/cancel-expired | Cancel all READY orders whose pickup deadline has passed.
*TACHYONFieldReportsApi* | [**getPayoutReport**](docs/TACHYONFieldReportsApi.md#getpayoutreport) | **GET** /v1/field/reports/payout | &#x60;GET /v1/field/reports/payout&#x60; — JSON payout report.
*TACHYONFieldReportsApi* | [**getPayoutReportCsv**](docs/TACHYONFieldReportsApi.md#getpayoutreportcsv) | **GET** /v1/field/reports/payout.csv | &#x60;GET /v1/field/reports/payout.csv&#x60; — CSV payout report.
*TACHYONFieldSalesActivitiesApi* | [**createActivity**](docs/TACHYONFieldSalesActivitiesApi.md#createactivityoperation) | **POST** /v1/erp/sales-activities | 
*TACHYONFieldSalesActivitiesApi* | [**deleteActivity**](docs/TACHYONFieldSalesActivitiesApi.md#deleteactivity) | **DELETE** /v1/erp/sales-activities/{id} | 
*TACHYONFieldSalesActivitiesApi* | [**listActivities**](docs/TACHYONFieldSalesActivitiesApi.md#listactivities) | **GET** /v1/erp/sales-activities | 
*TACHYONFieldSalesForecastApi* | [**getSalesForecast**](docs/TACHYONFieldSalesForecastApi.md#getsalesforecast) | **GET** /v1/erp/sales-forecast | 
*TACHYONFieldSalesForecastApi* | [**listStageSettings**](docs/TACHYONFieldSalesForecastApi.md#liststagesettings) | **GET** /v1/erp/sales-forecast/stage-settings | 
*TACHYONFieldSalesForecastApi* | [**updateStageSettings**](docs/TACHYONFieldSalesForecastApi.md#updatestagesettingsoperation) | **PUT** /v1/erp/sales-forecast/stage-settings | 
*TACHYONFieldSalesTasksApi* | [**createSalesTask**](docs/TACHYONFieldSalesTasksApi.md#createsalestaskoperation) | **POST** /v1/erp/sales-tasks | 
*TACHYONFieldSalesTasksApi* | [**deleteSalesTask**](docs/TACHYONFieldSalesTasksApi.md#deletesalestask) | **DELETE** /v1/erp/sales-tasks/{id} | 
*TACHYONFieldSalesTasksApi* | [**listSalesTasks**](docs/TACHYONFieldSalesTasksApi.md#listsalestasks) | **GET** /v1/erp/sales-tasks | 
*TACHYONFieldSalesTasksApi* | [**updateSalesTask**](docs/TACHYONFieldSalesTasksApi.md#updatesalestaskoperation) | **PATCH** /v1/erp/sales-tasks/{id} | 
*VendorsApi* | [**createVendor**](docs/VendorsApi.md#createvendoroperation) | **POST** /v1/erp/vendors | 
*VendorsApi* | [**getVendor**](docs/VendorsApi.md#getvendor) | **GET** /v1/erp/vendors/{id} | 
*VendorsApi* | [**listVendors**](docs/VendorsApi.md#listvendors) | **GET** /v1/erp/vendors | 
*VendorsApi* | [**updateVendor**](docs/VendorsApi.md#updatevendoroperation) | **PATCH** /v1/erp/vendors/{id} | 


### Models

- [ActivityListResponse](docs/ActivityListResponse.md)
- [ActivityResponse](docs/ActivityResponse.md)
- [AddCartItemRequest](docs/AddCartItemRequest.md)
- [AddOperatorRequest](docs/AddOperatorRequest.md)
- [AgentDocumentCapabilities](docs/AgentDocumentCapabilities.md)
- [AgentDocumentQueueCapabilities](docs/AgentDocumentQueueCapabilities.md)
- [ApiKeyResponse](docs/ApiKeyResponse.md)
- [ApprovalFlowListResponse](docs/ApprovalFlowListResponse.md)
- [ApprovalFlowResponse](docs/ApprovalFlowResponse.md)
- [ApprovalFlowSnapshot](docs/ApprovalFlowSnapshot.md)
- [ApprovalFlowStep](docs/ApprovalFlowStep.md)
- [ApprovalMutationRequest](docs/ApprovalMutationRequest.md)
- [ApprovalWorkflowEventResponse](docs/ApprovalWorkflowEventResponse.md)
- [ApprovalWorkflowListResponse](docs/ApprovalWorkflowListResponse.md)
- [ApprovalWorkflowResponse](docs/ApprovalWorkflowResponse.md)
- [AutoAssignCaddiesRequest](docs/AutoAssignCaddiesRequest.md)
- [AutoAssignCaddiesResponse](docs/AutoAssignCaddiesResponse.md)
- [AutoAssignPlanItem](docs/AutoAssignPlanItem.md)
- [AutoAssignSkippedItem](docs/AutoAssignSkippedItem.md)
- [BillingAccountResponse](docs/BillingAccountResponse.md)
- [BridgeActionRequest](docs/BridgeActionRequest.md)
- [BridgeActionResponse](docs/BridgeActionResponse.md)
- [BridgeDefinitionListResponse](docs/BridgeDefinitionListResponse.md)
- [BridgeDefinitionRequest](docs/BridgeDefinitionRequest.md)
- [BridgeDefinitionResponse](docs/BridgeDefinitionResponse.md)
- [BridgeExportDefinitionListResponse](docs/BridgeExportDefinitionListResponse.md)
- [BridgeExportDefinitionRequest](docs/BridgeExportDefinitionRequest.md)
- [BridgeExportDefinitionResponse](docs/BridgeExportDefinitionResponse.md)
- [BridgeExportField](docs/BridgeExportField.md)
- [BridgeExportObjectListResponse](docs/BridgeExportObjectListResponse.md)
- [BridgeExportObjectResponse](docs/BridgeExportObjectResponse.md)
- [BridgeMapping](docs/BridgeMapping.md)
- [BridgeMappingField](docs/BridgeMappingField.md)
- [BridgeRunListResponse](docs/BridgeRunListResponse.md)
- [BridgeRunPreviewRequest](docs/BridgeRunPreviewRequest.md)
- [BridgeRunResponse](docs/BridgeRunResponse.md)
- [BridgeRunSummaryResponse](docs/BridgeRunSummaryResponse.md)
- [CaddieAvailability](docs/CaddieAvailability.md)
- [CaddieAvailabilityListResponse](docs/CaddieAvailabilityListResponse.md)
- [CaddieAvailabilityStatus](docs/CaddieAvailabilityStatus.md)
- [CaddieCourseMembership](docs/CaddieCourseMembership.md)
- [CaddieCourseMembershipListResponse](docs/CaddieCourseMembershipListResponse.md)
- [CancelExpiredResponse](docs/CancelExpiredResponse.md)
- [CancelReservationRequest](docs/CancelReservationRequest.md)
- [CancellationFeeReportResponse](docs/CancellationFeeReportResponse.md)
- [CancellationFeeReportRow](docs/CancellationFeeReportRow.md)
- [CartItemResponse](docs/CartItemResponse.md)
- [CartResponse](docs/CartResponse.md)
- [CategoryResponse](docs/CategoryResponse.md)
- [CheckoutRequest](docs/CheckoutRequest.md)
- [ClientCapabilitiesResponse](docs/ClientCapabilitiesResponse.md)
- [ClientCsvImportError](docs/ClientCsvImportError.md)
- [ClientCsvImportResponse](docs/ClientCsvImportResponse.md)
- [ClockInRequest](docs/ClockInRequest.md)
- [ClockOutRequest](docs/ClockOutRequest.md)
- [ConvertOrderToInvoiceResponse](docs/ConvertOrderToInvoiceResponse.md)
- [ConvertQuotationToInvoiceResponse](docs/ConvertQuotationToInvoiceResponse.md)
- [CouponResponse](docs/CouponResponse.md)
- [CrateOrderApiOrderItemResponse](docs/CrateOrderApiOrderItemResponse.md)
- [CrateOrderApiOrderResponse](docs/CrateOrderApiOrderResponse.md)
- [CreateActivityRequest](docs/CreateActivityRequest.md)
- [CreateApiKeyRequest](docs/CreateApiKeyRequest.md)
- [CreateApiKeyResponse](docs/CreateApiKeyResponse.md)
- [CreateApprovalFlowRequest](docs/CreateApprovalFlowRequest.md)
- [CreateBillingAccountRequest](docs/CreateBillingAccountRequest.md)
- [CreateCartRequest](docs/CreateCartRequest.md)
- [CreateCustomFieldDefinitionRequest](docs/CreateCustomFieldDefinitionRequest.md)
- [CreateCustomerRequest](docs/CreateCustomerRequest.md)
- [CreateDealRequest](docs/CreateDealRequest.md)
- [CreateExpenseRequest](docs/CreateExpenseRequest.md)
- [CreateInvoiceLineItemRequest](docs/CreateInvoiceLineItemRequest.md)
- [CreateInvoiceRequest](docs/CreateInvoiceRequest.md)
- [CreateOrderItemRequest](docs/CreateOrderItemRequest.md)
- [CreateOrderProductRequest](docs/CreateOrderProductRequest.md)
- [CreateOrderRequest](docs/CreateOrderRequest.md)
- [CreatePaymentLinkRequest](docs/CreatePaymentLinkRequest.md)
- [CreatePaymentLinkResponse](docs/CreatePaymentLinkResponse.md)
- [CreatePurchaseOrderItemRequest](docs/CreatePurchaseOrderItemRequest.md)
- [CreatePurchaseOrderRequest](docs/CreatePurchaseOrderRequest.md)
- [CreateQuotationItemRequest](docs/CreateQuotationItemRequest.md)
- [CreateQuotationRequest](docs/CreateQuotationRequest.md)
- [CreateReservationRequest](docs/CreateReservationRequest.md)
- [CreateReservationResponse](docs/CreateReservationResponse.md)
- [CreateReturnLineRequest](docs/CreateReturnLineRequest.md)
- [CreateReturnRequest](docs/CreateReturnRequest.md)
- [CreateSaasChangeRequestRequest](docs/CreateSaasChangeRequestRequest.md)
- [CreateSaasSubscriptionRequest](docs/CreateSaasSubscriptionRequest.md)
- [CreateSalesTaskRequest](docs/CreateSalesTaskRequest.md)
- [CreateScheduleRequest](docs/CreateScheduleRequest.md)
- [CreateStaffLeaveRequestRequest](docs/CreateStaffLeaveRequestRequest.md)
- [CreateStockOutboundRequest](docs/CreateStockOutboundRequest.md)
- [CreateStockOutboundResponse](docs/CreateStockOutboundResponse.md)
- [CreateStockTransferRequest](docs/CreateStockTransferRequest.md)
- [CreateVendorRequest](docs/CreateVendorRequest.md)
- [CustomFieldDefinitionListResponse](docs/CustomFieldDefinitionListResponse.md)
- [CustomFieldDefinitionResponse](docs/CustomFieldDefinitionResponse.md)
- [CustomFieldEntityType](docs/CustomFieldEntityType.md)
- [CustomFieldType](docs/CustomFieldType.md)
- [CustomFieldValuesResponse](docs/CustomFieldValuesResponse.md)
- [CustomerAddressRequest](docs/CustomerAddressRequest.md)
- [CustomerResponse](docs/CustomerResponse.md)
- [DailyBudget](docs/DailyBudget.md)
- [DailyBudgetAchievementItem](docs/DailyBudgetAchievementItem.md)
- [DailyBudgetAchievementResponse](docs/DailyBudgetAchievementResponse.md)
- [DailyBudgetListResponse](docs/DailyBudgetListResponse.md)
- [DealListResponse](docs/DealListResponse.md)
- [DealResponse](docs/DealResponse.md)
- [DecideSaasChangeRequestRequest](docs/DecideSaasChangeRequestRequest.md)
- [DecideStaffLeaveRequestRequest](docs/DecideStaffLeaveRequestRequest.md)
- [DeleteInvoiceResponse](docs/DeleteInvoiceResponse.md)
- [DeleteOrderProductResponse](docs/DeleteOrderProductResponse.md)
- [DeletedResponse](docs/DeletedResponse.md)
- [DocumentPdfImage](docs/DocumentPdfImage.md)
- [DocumentPdfSettingsResponse](docs/DocumentPdfSettingsResponse.md)
- [EmploymentType](docs/EmploymentType.md)
- [EnableExtensionRequest](docs/EnableExtensionRequest.md)
- [ErpCustomPolicyResponse](docs/ErpCustomPolicyResponse.md)
- [ErpRole](docs/ErpRole.md)
- [ErpUserListResponse](docs/ErpUserListResponse.md)
- [ErpUserResponse](docs/ErpUserResponse.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [ExpenseAttachment](docs/ExpenseAttachment.md)
- [ExpenseCategoryListResponse](docs/ExpenseCategoryListResponse.md)
- [ExpenseCategoryResponse](docs/ExpenseCategoryResponse.md)
- [ExpenseExternalRef](docs/ExpenseExternalRef.md)
- [ExpenseListResponse](docs/ExpenseListResponse.md)
- [ExpenseResponse](docs/ExpenseResponse.md)
- [ExtensionConfig](docs/ExtensionConfig.md)
- [ExtensionConfigScope](docs/ExtensionConfigScope.md)
- [ExtensionConfigValidation](docs/ExtensionConfigValidation.md)
- [ExtensionLifecycleAuditEvent](docs/ExtensionLifecycleAuditEvent.md)
- [ExtensionLifecycleAuditListResponse](docs/ExtensionLifecycleAuditListResponse.md)
- [ExtensionManifest](docs/ExtensionManifest.md)
- [ExtensionManifestListResponse](docs/ExtensionManifestListResponse.md)
- [ExtensionRegistryStatus](docs/ExtensionRegistryStatus.md)
- [ExternalProvider](docs/ExternalProvider.md)
- [ExternalSyncStatus](docs/ExternalSyncStatus.md)
- [FieldErpMasterCatalog](docs/FieldErpMasterCatalog.md)
- [FieldErpMasterItem](docs/FieldErpMasterItem.md)
- [ForecastBucket](docs/ForecastBucket.md)
- [ForecastResponse](docs/ForecastResponse.md)
- [FulfillmentMethodResponse](docs/FulfillmentMethodResponse.md)
- [GolfCaddieAssignment](docs/GolfCaddieAssignment.md)
- [GolfCaddieAssignmentListResponse](docs/GolfCaddieAssignmentListResponse.md)
- [GolfCaddieAttendancePeriodSnapshot](docs/GolfCaddieAttendancePeriodSnapshot.md)
- [GolfCaddieAttendancePeriodSnapshotResponse](docs/GolfCaddieAttendancePeriodSnapshotResponse.md)
- [GolfCaddieAttendanceSnapshot](docs/GolfCaddieAttendanceSnapshot.md)
- [GolfCaddieAttendanceSnapshotResponse](docs/GolfCaddieAttendanceSnapshotResponse.md)
- [GolfCaddiePayrollPeriod](docs/GolfCaddiePayrollPeriod.md)
- [GolfCaddiePayrollSummaryResponse](docs/GolfCaddiePayrollSummaryResponse.md)
- [GolfCaddiePayrollSummaryRow](docs/GolfCaddiePayrollSummaryRow.md)
- [GolfCaddieProfile](docs/GolfCaddieProfile.md)
- [GolfCaddieProfileListResponse](docs/GolfCaddieProfileListResponse.md)
- [GolfCaddieRank](docs/GolfCaddieRank.md)
- [GolfCaddieRating](docs/GolfCaddieRating.md)
- [GolfCaddieRatingListResponse](docs/GolfCaddieRatingListResponse.md)
- [GolfCaddieRecommendation](docs/GolfCaddieRecommendation.md)
- [GolfCaddieRecommendationResponse](docs/GolfCaddieRecommendationResponse.md)
- [GolfCaddieSkillLevel](docs/GolfCaddieSkillLevel.md)
- [GolfCaddieUnavailableReason](docs/GolfCaddieUnavailableReason.md)
- [GolfCourse](docs/GolfCourse.md)
- [GolfCourseListResponse](docs/GolfCourseListResponse.md)
- [GolfCourseResource](docs/GolfCourseResource.md)
- [GolfCourseResourceListResponse](docs/GolfCourseResourceListResponse.md)
- [GolfCustomField](docs/GolfCustomField.md)
- [GolfCustomFieldListResponse](docs/GolfCustomFieldListResponse.md)
- [GolfMonthlySettlementCaddieFees](docs/GolfMonthlySettlementCaddieFees.md)
- [GolfMonthlySettlementCancellations](docs/GolfMonthlySettlementCancellations.md)
- [GolfMonthlySettlementDrilldown](docs/GolfMonthlySettlementDrilldown.md)
- [GolfMonthlySettlementPeriod](docs/GolfMonthlySettlementPeriod.md)
- [GolfMonthlySettlementReport](docs/GolfMonthlySettlementReport.md)
- [GolfMonthlySettlementReservations](docs/GolfMonthlySettlementReservations.md)
- [GolfMonthlySettlementSquare](docs/GolfMonthlySettlementSquare.md)
- [GolfPlayType](docs/GolfPlayType.md)
- [GolfProductSlot](docs/GolfProductSlot.md)
- [GolfProductSlotBody](docs/GolfProductSlotBody.md)
- [GolfProductSlotListResponse](docs/GolfProductSlotListResponse.md)
- [GolfReservationPolicy](docs/GolfReservationPolicy.md)
- [GolfReservationProduct](docs/GolfReservationProduct.md)
- [GolfReservationProductListResponse](docs/GolfReservationProductListResponse.md)
- [GolfResourceKind](docs/GolfResourceKind.md)
- [GolfUnpaidCancellationItem](docs/GolfUnpaidCancellationItem.md)
- [InspectionDispositionLineRequest](docs/InspectionDispositionLineRequest.md)
- [InspectionDispositionRequest](docs/InspectionDispositionRequest.md)
- [InventoryLocationListResponse](docs/InventoryLocationListResponse.md)
- [InventoryLocationResponse](docs/InventoryLocationResponse.md)
- [InventoryValuationListResponse](docs/InventoryValuationListResponse.md)
- [InventoryValuationResponse](docs/InventoryValuationResponse.md)
- [InviteErpUserRequest](docs/InviteErpUserRequest.md)
- [InviteErpUserResponse](docs/InviteErpUserResponse.md)
- [InvoiceLineItemResponse](docs/InvoiceLineItemResponse.md)
- [InvoiceListResponse](docs/InvoiceListResponse.md)
- [InvoiceResponse](docs/InvoiceResponse.md)
- [IssueReservationBillingLinkRequest](docs/IssueReservationBillingLinkRequest.md)
- [IssueReservationBillingLinkResponse](docs/IssueReservationBillingLinkResponse.md)
- [IssueReservationSquareInvoiceResponse](docs/IssueReservationSquareInvoiceResponse.md)
- [LeaveRequestStatus](docs/LeaveRequestStatus.md)
- [LeaveRequestType](docs/LeaveRequestType.md)
- [LowStockAlertListResponse](docs/LowStockAlertListResponse.md)
- [LowStockAlertResponse](docs/LowStockAlertResponse.md)
- [MessageResponse](docs/MessageResponse.md)
- [OkResponse](docs/OkResponse.md)
- [OperatorBillingAccountResponse](docs/OperatorBillingAccountResponse.md)
- [OrderItemResponse](docs/OrderItemResponse.md)
- [OrderListResponse](docs/OrderListResponse.md)
- [OrderProductListResponse](docs/OrderProductListResponse.md)
- [OrderProductVariantListResponse](docs/OrderProductVariantListResponse.md)
- [OrderProductVariationRequest](docs/OrderProductVariationRequest.md)
- [OrderResponse](docs/OrderResponse.md)
- [PaymentIntent](docs/PaymentIntent.md)
- [PaymentIntentStatus](docs/PaymentIntentStatus.md)
- [PayoutReportItemResponse](docs/PayoutReportItemResponse.md)
- [PayoutReportResponse](docs/PayoutReportResponse.md)
- [ProductResponse](docs/ProductResponse.md)
- [ProductRestResponse](docs/ProductRestResponse.md)
- [ProductVariantRestResponse](docs/ProductVariantRestResponse.md)
- [ProfileResponse](docs/ProfileResponse.md)
- [ProfileTenant](docs/ProfileTenant.md)
- [ProfileTenantExtension](docs/ProfileTenantExtension.md)
- [ProfileUser](docs/ProfileUser.md)
- [PublicInvoiceCheckoutResponse](docs/PublicInvoiceCheckoutResponse.md)
- [PublicInvoicePaymentConfirmationRequest](docs/PublicInvoicePaymentConfirmationRequest.md)
- [PublicInvoicePaymentConfirmationResponse](docs/PublicInvoicePaymentConfirmationResponse.md)
- [PublicInvoicePaymentIntentResponse](docs/PublicInvoicePaymentIntentResponse.md)
- [PublicInvoiceResponse](docs/PublicInvoiceResponse.md)
- [PublicInvoiceStripePublishableKeyResponse](docs/PublicInvoiceStripePublishableKeyResponse.md)
- [PurchaseOrderItemResponse](docs/PurchaseOrderItemResponse.md)
- [PurchaseOrderListResponse](docs/PurchaseOrderListResponse.md)
- [PurchaseOrderResponse](docs/PurchaseOrderResponse.md)
- [QuotationItemResponse](docs/QuotationItemResponse.md)
- [QuotationListResponse](docs/QuotationListResponse.md)
- [QuotationResponse](docs/QuotationResponse.md)
- [ReconcileSquarePaymentRequest](docs/ReconcileSquarePaymentRequest.md)
- [RegisterExtensionRequest](docs/RegisterExtensionRequest.md)
- [RejectExpenseRequest](docs/RejectExpenseRequest.md)
- [ReleasePaymentHoldsRequest](docs/ReleasePaymentHoldsRequest.md)
- [ReleasePaymentHoldsResult](docs/ReleasePaymentHoldsResult.md)
- [ReleasePaymentIntentHoldRequest](docs/ReleasePaymentIntentHoldRequest.md)
- [ReplaceCaddieCourseMembershipsRequest](docs/ReplaceCaddieCourseMembershipsRequest.md)
- [ReplaceGolfProductSlotsRequest](docs/ReplaceGolfProductSlotsRequest.md)
- [ReplenishmentPolicyResponse](docs/ReplenishmentPolicyResponse.md)
- [ResendPaymentLinkRequest](docs/ResendPaymentLinkRequest.md)
- [Reservation](docs/Reservation.md)
- [ReservationListResponse](docs/ReservationListResponse.md)
- [ReservationPaymentStatus](docs/ReservationPaymentStatus.md)
- [ReservationProductListResponse](docs/ReservationProductListResponse.md)
- [ReservationResource](docs/ReservationResource.md)
- [ReservationStatus](docs/ReservationStatus.md)
- [ReservationType](docs/ReservationType.md)
- [ReservationTypeListResponse](docs/ReservationTypeListResponse.md)
- [ResourceListResponse](docs/ResourceListResponse.md)
- [ReturnLineRefRequest](docs/ReturnLineRefRequest.md)
- [ReturnLineRefResponse](docs/ReturnLineRefResponse.md)
- [ReturnLineResponse](docs/ReturnLineResponse.md)
- [ReturnOrderRefRequest](docs/ReturnOrderRefRequest.md)
- [ReturnOrderRefResponse](docs/ReturnOrderRefResponse.md)
- [ReturnRequestListResponse](docs/ReturnRequestListResponse.md)
- [ReturnRequestResponse](docs/ReturnRequestResponse.md)
- [SaasChangeRequestListResponse](docs/SaasChangeRequestListResponse.md)
- [SaasChangeRequestResponse](docs/SaasChangeRequestResponse.md)
- [SaasSubscriptionListResponse](docs/SaasSubscriptionListResponse.md)
- [SaasSubscriptionResponse](docs/SaasSubscriptionResponse.md)
- [SaasSubscriptionSummaryResponse](docs/SaasSubscriptionSummaryResponse.md)
- [SalesTaskListResponse](docs/SalesTaskListResponse.md)
- [SalesTaskResponse](docs/SalesTaskResponse.md)
- [SaveCaddieAvailabilityRequest](docs/SaveCaddieAvailabilityRequest.md)
- [SaveDailyBudgetRequest](docs/SaveDailyBudgetRequest.md)
- [SaveDocumentPdfSettingsRequest](docs/SaveDocumentPdfSettingsRequest.md)
- [SaveGolfCaddieAssignmentRequest](docs/SaveGolfCaddieAssignmentRequest.md)
- [SaveGolfCaddieProfileRequest](docs/SaveGolfCaddieProfileRequest.md)
- [SaveGolfCaddieRatingRequest](docs/SaveGolfCaddieRatingRequest.md)
- [SaveGolfCourseRequest](docs/SaveGolfCourseRequest.md)
- [SaveGolfCourseResourceRequest](docs/SaveGolfCourseResourceRequest.md)
- [SaveGolfCustomFieldRequest](docs/SaveGolfCustomFieldRequest.md)
- [SaveGolfReservationProductRequest](docs/SaveGolfReservationProductRequest.md)
- [SaveReservationStaffAssignmentRequest](docs/SaveReservationStaffAssignmentRequest.md)
- [SaveStaffAssignmentRequest](docs/SaveStaffAssignmentRequest.md)
- [SaveStaffCompensationProfileRequest](docs/SaveStaffCompensationProfileRequest.md)
- [SaveStaffMemberRequest](docs/SaveStaffMemberRequest.md)
- [SaveStaffProfileRequest](docs/SaveStaffProfileRequest.md)
- [SaveStaffShiftPreferenceRequest](docs/SaveStaffShiftPreferenceRequest.md)
- [SaveStaffShiftRequest](docs/SaveStaffShiftRequest.md)
- [SaveStaffSkillProfileRequest](docs/SaveStaffSkillProfileRequest.md)
- [SaveStoreRequest](docs/SaveStoreRequest.md)
- [SaveWarehouseRequest](docs/SaveWarehouseRequest.md)
- [ScheduleLineItemRequest](docs/ScheduleLineItemRequest.md)
- [ScheduleListResponse](docs/ScheduleListResponse.md)
- [ScheduleResponse](docs/ScheduleResponse.md)
- [SelectPickupDatetimeRequest](docs/SelectPickupDatetimeRequest.md)
- [SendReservationNotificationRequest](docs/SendReservationNotificationRequest.md)
- [SendReservationNotificationResponse](docs/SendReservationNotificationResponse.md)
- [SetCustomFieldValuesRequest](docs/SetCustomFieldValuesRequest.md)
- [SmsStatus](docs/SmsStatus.md)
- [SquarePaymentReconciliationListResponse](docs/SquarePaymentReconciliationListResponse.md)
- [SquarePaymentReconciliationResponse](docs/SquarePaymentReconciliationResponse.md)
- [StaffAssignmentListResponse](docs/StaffAssignmentListResponse.md)
- [StaffAssignmentView](docs/StaffAssignmentView.md)
- [StaffAttendance](docs/StaffAttendance.md)
- [StaffAvailabilityResponse](docs/StaffAvailabilityResponse.md)
- [StaffAvailabilityView](docs/StaffAvailabilityView.md)
- [StaffCompensationProfile](docs/StaffCompensationProfile.md)
- [StaffCompensationProfileResponse](docs/StaffCompensationProfileResponse.md)
- [StaffEmploymentType](docs/StaffEmploymentType.md)
- [StaffLeaveRequest](docs/StaffLeaveRequest.md)
- [StaffLeaveRequestListResponse](docs/StaffLeaveRequestListResponse.md)
- [StaffMember](docs/StaffMember.md)
- [StaffMemberListResponse](docs/StaffMemberListResponse.md)
- [StaffPayrollEstimate](docs/StaffPayrollEstimate.md)
- [StaffPreferredTimeBand](docs/StaffPreferredTimeBand.md)
- [StaffProfileListResponse](docs/StaffProfileListResponse.md)
- [StaffProfileView](docs/StaffProfileView.md)
- [StaffShift](docs/StaffShift.md)
- [StaffShiftListResponse](docs/StaffShiftListResponse.md)
- [StaffShiftPreference](docs/StaffShiftPreference.md)
- [StaffShiftPreferenceResponse](docs/StaffShiftPreferenceResponse.md)
- [StaffSkillProfile](docs/StaffSkillProfile.md)
- [StaffSkillProfileResponse](docs/StaffSkillProfileResponse.md)
- [StaffWorkload](docs/StaffWorkload.md)
- [StageSettingItem](docs/StageSettingItem.md)
- [StageSettingsResponse](docs/StageSettingsResponse.md)
- [StartStockTrackingRequest](docs/StartStockTrackingRequest.md)
- [StockLevelListResponse](docs/StockLevelListResponse.md)
- [StockLevelResponse](docs/StockLevelResponse.md)
- [StockLotAllocationResponse](docs/StockLotAllocationResponse.md)
- [StockLotBalanceListResponse](docs/StockLotBalanceListResponse.md)
- [StockLotBalanceResponse](docs/StockLotBalanceResponse.md)
- [StockMovementListResponse](docs/StockMovementListResponse.md)
- [StockMovementResponse](docs/StockMovementResponse.md)
- [StockResponse](docs/StockResponse.md)
- [StockTrackingResponse](docs/StockTrackingResponse.md)
- [StockTransferListResponse](docs/StockTransferListResponse.md)
- [StockTransferResponse](docs/StockTransferResponse.md)
- [StoreKitListCustomerResponse](docs/StoreKitListCustomerResponse.md)
- [StoreKitListCustomerResponseItemsInner](docs/StoreKitListCustomerResponseItemsInner.md)
- [StoreKitListOrderResponse](docs/StoreKitListOrderResponse.md)
- [StoreKitListOrderResponseItemsInner](docs/StoreKitListOrderResponseItemsInner.md)
- [StoreKitListProductResponse](docs/StoreKitListProductResponse.md)
- [StoreKitListProductResponseItemsInner](docs/StoreKitListProductResponseItemsInner.md)
- [StoreListResponse](docs/StoreListResponse.md)
- [StoreResponse](docs/StoreResponse.md)
- [TenantExtension](docs/TenantExtension.md)
- [TenantExtensionListResponse](docs/TenantExtensionListResponse.md)
- [TenantExtensionStatus](docs/TenantExtensionStatus.md)
- [TenantExtensionStatusListResponse](docs/TenantExtensionStatusListResponse.md)
- [TenantExtensionStatusView](docs/TenantExtensionStatusView.md)
- [UpdateApprovalFlowRequest](docs/UpdateApprovalFlowRequest.md)
- [UpdateBillingAccountRequest](docs/UpdateBillingAccountRequest.md)
- [UpdateCartItemRequest](docs/UpdateCartItemRequest.md)
- [UpdateCustomFieldDefinitionRequest](docs/UpdateCustomFieldDefinitionRequest.md)
- [UpdateCustomerRequest](docs/UpdateCustomerRequest.md)
- [UpdateDealRequest](docs/UpdateDealRequest.md)
- [UpdateErpUserPoliciesRequest](docs/UpdateErpUserPoliciesRequest.md)
- [UpdateErpUserRoleRequest](docs/UpdateErpUserRoleRequest.md)
- [UpdateExpenseRequest](docs/UpdateExpenseRequest.md)
- [UpdateExtensionConfigRequest](docs/UpdateExtensionConfigRequest.md)
- [UpdateGolfReservationPolicyRequest](docs/UpdateGolfReservationPolicyRequest.md)
- [UpdateInvoiceFollowUpStatusRequest](docs/UpdateInvoiceFollowUpStatusRequest.md)
- [UpdateInvoiceRequest](docs/UpdateInvoiceRequest.md)
- [UpdateLowStockDecisionRequest](docs/UpdateLowStockDecisionRequest.md)
- [UpdateOrderProductRequest](docs/UpdateOrderProductRequest.md)
- [UpdateOrderProductVariationRequest](docs/UpdateOrderProductVariationRequest.md)
- [UpdateOrderRequest](docs/UpdateOrderRequest.md)
- [UpdatePurchaseOrderRequest](docs/UpdatePurchaseOrderRequest.md)
- [UpdateQuotationRequest](docs/UpdateQuotationRequest.md)
- [UpdateReservationRequest](docs/UpdateReservationRequest.md)
- [UpdateSaasSubscriptionRequest](docs/UpdateSaasSubscriptionRequest.md)
- [UpdateSalesTaskRequest](docs/UpdateSalesTaskRequest.md)
- [UpdateScheduleRequest](docs/UpdateScheduleRequest.md)
- [UpdateStageSettingsRequest](docs/UpdateStageSettingsRequest.md)
- [UpdateVendorRequest](docs/UpdateVendorRequest.md)
- [UpsertCategoryRequest](docs/UpsertCategoryRequest.md)
- [UpsertReplenishmentPolicyRequest](docs/UpsertReplenishmentPolicyRequest.md)
- [ValidateCouponRequest](docs/ValidateCouponRequest.md)
- [VendorListResponse](docs/VendorListResponse.md)
- [VendorResponse](docs/VendorResponse.md)
- [WarehouseListResponse](docs/WarehouseListResponse.md)
- [WarehouseResponse](docs/WarehouseResponse.md)

### Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
#### bearerAuth


- **Type**: HTTP Bearer Token authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.1.7`
- Package version: `0.1.0`
- Generator version: `7.20.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
