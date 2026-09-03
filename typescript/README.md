# @tachyon-sdk/field@0.1.0

A TypeScript SDK client for the tachyon-field-api.txcloud.app API.

## Usage

First, install the SDK from npm.

```bash
npm install @tachyon-sdk/field --save
```

Next, try it out.


```ts
import {
  Configuration,
  AgentDocumentsApi,
} from '@tachyon-sdk/field';
import type { AgentCreateInvoiceRequest } from '@tachyon-sdk/field';

async function example() {
  console.log("🚀 Testing @tachyon-sdk/field SDK...");
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

All URIs are relative to *https://tachyon-field-api.txcloud.app*

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
*ConsumerApi* | [**getConsumerConsents**](docs/ConsumerApi.md#getconsumerconsents) | **GET** /v1/erp/customers/{customer_id}/consents | 
*ConsumerApi* | [**getCustomerContactPreferences**](docs/ConsumerApi.md#getcustomercontactpreferences) | **GET** /v1/erp/customers/{customer_id}/contact-preferences | チャネルごとの現在の連絡可否を1コールで返す。
*ConsumerApi* | [**recordConsumerConsents**](docs/ConsumerApi.md#recordconsumerconsentsoperation) | **POST** /v1/erp/customers/{customer_id}/consents | 
*ConsumerApi* | [**recordCustomerContactPreferences**](docs/ConsumerApi.md#recordcustomercontactpreferences) | **POST** /v1/erp/customers/{customer_id}/contact-preferences | 連絡拒否の申し出、およびその撤回を記録する。
*CustomFieldsApi* | [**createCustomFieldDefinition**](docs/CustomFieldsApi.md#createcustomfielddefinitionoperation) | **POST** /v1/erp/custom-fields/definitions | 
*CustomFieldsApi* | [**deleteCustomFieldDefinition**](docs/CustomFieldsApi.md#deletecustomfielddefinition) | **DELETE** /v1/erp/custom-fields/definitions/{id} | 
*CustomFieldsApi* | [**getCustomFieldValues**](docs/CustomFieldsApi.md#getcustomfieldvalues) | **GET** /v1/erp/custom-fields/values/{entity_type}/{entity_id} | 
*CustomFieldsApi* | [**listCustomFieldDefinitions**](docs/CustomFieldsApi.md#listcustomfielddefinitions) | **GET** /v1/erp/custom-fields/definitions | 
*CustomFieldsApi* | [**setCustomFieldValues**](docs/CustomFieldsApi.md#setcustomfieldvaluesoperation) | **PUT** /v1/erp/custom-fields/values/{entity_type}/{entity_id} | 
*CustomFieldsApi* | [**updateCustomFieldDefinition**](docs/CustomFieldsApi.md#updatecustomfielddefinitionoperation) | **PUT** /v1/erp/custom-fields/definitions/{id} | 
*CustomerContactsApi* | [**cancelCustomerContact**](docs/CustomerContactsApi.md#cancelcustomercontact) | **DELETE** /v1/erp/customer-contacts/{contact_id} | 取り消し。行は消さず &#x60;cancelledAt&#x60; / &#x60;cancelledBy&#x60; を立てて返す。
*CustomerContactsApi* | [**createCustomerContact**](docs/CustomerContactsApi.md#createcustomercontactoperation) | **POST** /v1/erp/customers/{customer_id}/contacts | 
*CustomerContactsApi* | [**listAllCustomerContacts**](docs/CustomerContactsApi.md#listallcustomercontacts) | **GET** /v1/erp/customer-contacts | 
*CustomerContactsApi* | [**listCustomerContacts**](docs/CustomerContactsApi.md#listcustomercontacts) | **GET** /v1/erp/customers/{customer_id}/contacts | 
*CustomerContactsApi* | [**lookupLatestCustomerContacts**](docs/CustomerContactsApi.md#lookuplatestcustomercontacts) | **POST** /v1/erp/customer-contacts/latest-lookup | 
*CustomerContactsApi* | [**updateCustomerContact**](docs/CustomerContactsApi.md#updatecustomercontactoperation) | **PATCH** /v1/erp/customer-contacts/{contact_id} | 
*CustomersApi* | [**createConsumerCustomer**](docs/CustomersApi.md#createconsumercustomeroperation) | **POST** /v1/erp/customers | 
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
*GolfCourseApi* | [**deleteGolfCaddieProfile**](docs/GolfCourseApi.md#deletegolfcaddieprofile) | **DELETE** /v1/erp/extensions/golf-course/caddie-profiles/{id} | 
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
*GolfCourseApi* | [**listGolfProductSlots**](docs/GolfCourseApi.md#listgolfproductslots) | **GET** /v1/erp/extensions/golf-course/reservation-products/{service_id}/slots | Deprecated by PLT-3199: availability is the resource\&#39;s generated inventory, so these product-scoped slots no longer decide what a storefront can book. Migrate with &#x60;POST /v1/erp/reservation-resources/{id}/schedule/import-product-slots&#x60;. CERP-25 forbids removing a &#x60;/v1/&#x60; endpoint, so removal waits for &#x60;/v2/&#x60;.
*GolfCourseApi* | [**listGolfReservationProducts**](docs/GolfCourseApi.md#listgolfreservationproducts) | **GET** /v1/erp/extensions/golf-course/reservation-products | 
*GolfCourseApi* | [**recommendGolfCaddies**](docs/GolfCourseApi.md#recommendgolfcaddies) | **GET** /v1/erp/extensions/golf-course/caddie-recommendations | 
*GolfCourseApi* | [**replaceCaddieCourseMemberships**](docs/GolfCourseApi.md#replacecaddiecoursemembershipsoperation) | **PUT** /v1/erp/extensions/golf-course/caddie-profiles/{id}/courses | 
*GolfCourseApi* | [**replaceGolfProductSlots**](docs/GolfCourseApi.md#replacegolfproductslotsoperation) | **PUT** /v1/erp/extensions/golf-course/reservation-products/{service_id}/slots | Deprecated by PLT-3199; see &#x60;list_golf_product_slots&#x60;. Writing here no longer changes what a storefront offers.
*GolfCourseApi* | [**updateGolfCaddieAssignment**](docs/GolfCourseApi.md#updategolfcaddieassignment) | **PATCH** /v1/erp/extensions/golf-course/caddie-assignments/{id} | 
*GolfCourseApi* | [**updateGolfCaddieProfile**](docs/GolfCourseApi.md#updategolfcaddieprofile) | **PATCH** /v1/erp/extensions/golf-course/caddie-profiles/{id} | 
*GolfCourseApi* | [**updateGolfCourse**](docs/GolfCourseApi.md#updategolfcourse) | **PATCH** /v1/erp/extensions/golf-course/courses/{id} | 
*GolfCourseApi* | [**updateGolfCourseResource**](docs/GolfCourseApi.md#updategolfcourseresource) | **PATCH** /v1/erp/extensions/golf-course/resources/{id} | 
*GolfCourseApi* | [**updateGolfCustomField**](docs/GolfCourseApi.md#updategolfcustomfield) | **PATCH** /v1/erp/extensions/golf-course/custom-fields | 
*GolfCourseApi* | [**updateGolfReservationPolicy**](docs/GolfCourseApi.md#updategolfreservationpolicyoperation) | **PATCH** /v1/erp/extensions/golf-course/reservation-policy | 
*GolfCourseApi* | [**upsertCaddieAvailability**](docs/GolfCourseApi.md#upsertcaddieavailability) | **POST** /v1/erp/extensions/golf-course/caddie-availabilities | 
*GolfCourseApi* | [**upsertDailyBudget**](docs/GolfCourseApi.md#upsertdailybudget) | **POST** /v1/erp/extensions/golf-course/daily-budgets | 
*GolfCourseApi* | [**upsertGolfReservationProduct**](docs/GolfCourseApi.md#upsertgolfreservationproduct) | **POST** /v1/erp/extensions/golf-course/reservation-products/{service_id} | 
*GolfCourseExtensionApi* | [**analyzeGolfCourseTabular**](docs/GolfCourseExtensionApi.md#analyzegolfcoursetabular) | **POST** /v1/erp/extensions/golf-course/tabular/analyze | Deprecated authorization-compatible alias of [&#x60;analyze_bridge_tabular&#x60;].
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
*HRMApi* | [**deleteStaffMember**](docs/HRMApi.md#deletestaffmember) | **DELETE** /v1/erp/hrm/staff/{id} | 
*HRMApi* | [**deleteStaffMemberLegacyPrefix**](docs/HRMApi.md#deletestaffmemberlegacyprefix) | **DELETE** /v1/erp/staff/{id} | 
*HRMApi* | [**deleteStaffShift**](docs/HRMApi.md#deletestaffshift) | **DELETE** /v1/erp/hrm/staff/{staffId}/shifts/{shiftId} | 
*HRMApi* | [**deleteStaffShiftLegacyPrefix**](docs/HRMApi.md#deletestaffshiftlegacyprefix) | **DELETE** /v1/erp/staff/{staffId}/shifts/{shiftId} | 
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
*HRMApi* | [**listStaffUtilization**](docs/HRMApi.md#liststaffutilization) | **GET** /v1/erp/hrm/staff-utilization | 
*HRMApi* | [**listStaffUtilizationLegacyPrefix**](docs/HRMApi.md#liststaffutilizationlegacyprefix) | **GET** /v1/erp/staff-utilization | 
*HRMApi* | [**updateStaffCompensationProfile**](docs/HRMApi.md#updatestaffcompensationprofile) | **PATCH** /v1/erp/hrm/staff/{id}/compensation | 
*HRMApi* | [**updateStaffCompensationProfileLegacyPrefix**](docs/HRMApi.md#updatestaffcompensationprofilelegacyprefix) | **PATCH** /v1/erp/staff/{id}/compensation | 
*HRMApi* | [**updateStaffMember**](docs/HRMApi.md#updatestaffmemberoperation) | **PATCH** /v1/erp/hrm/staff/{id} | 
*HRMApi* | [**updateStaffMemberLegacyPrefix**](docs/HRMApi.md#updatestaffmemberlegacyprefix) | **PATCH** /v1/erp/staff/{id} | 
*HRMApi* | [**updateStaffShift**](docs/HRMApi.md#updatestaffshiftoperation) | **PATCH** /v1/erp/hrm/staff/{staffId}/shifts/{shiftId} | 
*HRMApi* | [**updateStaffShiftLegacyPrefix**](docs/HRMApi.md#updatestaffshiftlegacyprefix) | **PATCH** /v1/erp/staff/{staffId}/shifts/{shiftId} | 
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
*InvoicesApi* | [**getInvoiceVoidEligibility**](docs/InvoicesApi.md#getinvoicevoideligibility) | **GET** /v1/invoices/{invoice_id}/void-eligibility | 
*InvoicesApi* | [**listInvoices**](docs/InvoicesApi.md#listinvoices) | **GET** /v1/invoices | 
*InvoicesApi* | [**listSquarePaymentReconciliations**](docs/InvoicesApi.md#listsquarepaymentreconciliations) | **GET** /v1/invoice-reconciliations/square-payments | 
*InvoicesApi* | [**reconcileSquarePayment**](docs/InvoicesApi.md#reconcilesquarepaymentoperation) | **POST** /v1/invoice-reconciliations/square-payments/{square_payment_id}/reconcile | 
*InvoicesApi* | [**resendInvoicePaymentLink**](docs/InvoicesApi.md#resendinvoicepaymentlink) | **POST** /v1/invoices/{id}/payment-link/resend | 
*InvoicesApi* | [**updateInvoice**](docs/InvoicesApi.md#updateinvoiceoperation) | **PATCH** /v1/invoices/{id} | 
*InvoicesApi* | [**updateInvoiceFollowUpStatus**](docs/InvoicesApi.md#updateinvoicefollowupstatusoperation) | **POST** /v1/invoices/{id}/follow-up-status | 
*InvoicesApi* | [**voidInvoice**](docs/InvoicesApi.md#voidinvoiceoperation) | **POST** /v1/invoices/{invoice_id}/void | 
*MembershipApi* | [**archiveCustomerSubject**](docs/MembershipApi.md#archivecustomersubject) | **DELETE** /v1/erp/membership/subjects/{id} | 
*MembershipApi* | [**assignMembershipPlan**](docs/MembershipApi.md#assignmembershipplanoperation) | **POST** /v1/erp/membership/customers/{customer_id}/plan-assignments | 
*MembershipApi* | [**createCustomerCredential**](docs/MembershipApi.md#createcustomercredentialoperation) | **POST** /v1/erp/membership/customers/{customer_id}/credentials | 
*MembershipApi* | [**createCustomerSubject**](docs/MembershipApi.md#createcustomersubjectoperation) | **POST** /v1/erp/membership/customers/{customer_id}/subjects | 
*MembershipApi* | [**createMembershipConsentItem**](docs/MembershipApi.md#createmembershipconsentitemoperation) | **POST** /v1/erp/membership/consent-items | 
*MembershipApi* | [**createMembershipEntitlement**](docs/MembershipApi.md#createmembershipentitlementoperation) | **POST** /v1/erp/membership/entitlements | 
*MembershipApi* | [**createMembershipPlan**](docs/MembershipApi.md#createmembershipplanoperation) | **POST** /v1/erp/membership/plans | 
*MembershipApi* | [**deleteMembershipConsentItem**](docs/MembershipApi.md#deletemembershipconsentitem) | **DELETE** /v1/erp/membership/consent-items/{id} | 
*MembershipApi* | [**deleteMembershipEntitlement**](docs/MembershipApi.md#deletemembershipentitlement) | **DELETE** /v1/erp/membership/entitlements/{id} | 
*MembershipApi* | [**deleteMembershipPlan**](docs/MembershipApi.md#deletemembershipplan) | **DELETE** /v1/erp/membership/plans/{id} | 
*MembershipApi* | [**getCustomerMembership**](docs/MembershipApi.md#getcustomermembership) | **GET** /v1/erp/membership/customers/{customer_id} | 
*MembershipApi* | [**listMembershipActivities**](docs/MembershipApi.md#listmembershipactivities) | **GET** /v1/erp/membership/customers/{customer_id}/activities | 
*MembershipApi* | [**listMembershipConsentItems**](docs/MembershipApi.md#listmembershipconsentitems) | **GET** /v1/erp/membership/consent-items | 
*MembershipApi* | [**listMembershipEntitlements**](docs/MembershipApi.md#listmembershipentitlements) | **GET** /v1/erp/membership/entitlements | 
*MembershipApi* | [**listMembershipOfferings**](docs/MembershipApi.md#listmembershipofferings) | **GET** /v1/erp/membership/offerings | 
*MembershipApi* | [**listMembershipPlans**](docs/MembershipApi.md#listmembershipplans) | **GET** /v1/erp/membership/plans | 
*MembershipApi* | [**listMembershipRoster**](docs/MembershipApi.md#listmembershiproster) | **GET** /v1/erp/membership/customers | 
*MembershipApi* | [**listReceptionFields**](docs/MembershipApi.md#listreceptionfields) | **GET** /v1/erp/membership/reception-fields | Every box on this tenant\&#39;s reception sheet.
*MembershipApi* | [**recordCustomerConsents**](docs/MembershipApi.md#recordcustomerconsentsoperation) | **POST** /v1/erp/membership/customers/{customer_id}/consents | 
*MembershipApi* | [**registerMembership**](docs/MembershipApi.md#registermembershipoperation) | **POST** /v1/erp/membership/registrations | 
*MembershipApi* | [**replaceReceptionFields**](docs/MembershipApi.md#replacereceptionfieldsoperation) | **PUT** /v1/erp/membership/reception-fields | Saves the boxes named in the request. Boxes left out keep their current setting, so a screen that shows a subset cannot reset the rest.
*MembershipApi* | [**updateCustomerCredential**](docs/MembershipApi.md#updatecustomercredentialoperation) | **PUT** /v1/erp/membership/credentials/{id} | 
*MembershipApi* | [**updateCustomerSubject**](docs/MembershipApi.md#updatecustomersubjectoperation) | **PUT** /v1/erp/membership/subjects/{id} | 
*MembershipApi* | [**updateMembershipConsentItem**](docs/MembershipApi.md#updatemembershipconsentitemoperation) | **PUT** /v1/erp/membership/consent-items/{id} | 
*MembershipApi* | [**updateMembershipEntitlement**](docs/MembershipApi.md#updatemembershipentitlementoperation) | **PATCH** /v1/erp/membership/entitlements/{id} | 
*MembershipApi* | [**updateMembershipPlan**](docs/MembershipApi.md#updatemembershipplanoperation) | **PUT** /v1/erp/membership/plans/{id} | 
*OrderEntryPointsApi* | [**createOrderEntryPoint**](docs/OrderEntryPointsApi.md#createorderentrypointoperation) | **POST** /v1/field/order-entry-points | Provision a QR or kiosk and mint its public token.
*OrderEntryPointsApi* | [**disableOrderEntryPoint**](docs/OrderEntryPointsApi.md#disableorderentrypoint) | **DELETE** /v1/field/order-entry-points/{id} | Retire an entry point.
*OrderEntryPointsApi* | [**getOrderEntryPoint**](docs/OrderEntryPointsApi.md#getorderentrypoint) | **GET** /v1/field/order-entry-points/{id} | Read one entry point. The token is not part of the answer.
*OrderEntryPointsApi* | [**listOrderEntryPoints**](docs/OrderEntryPointsApi.md#listorderentrypoints) | **GET** /v1/field/order-entry-points | List the tenant\&#39;s QR and kiosk entry points.
*OrderEntryPointsApi* | [**rotateOrderEntryPointToken**](docs/OrderEntryPointsApi.md#rotateorderentrypointtoken) | **POST** /v1/field/order-entry-points/{id}/rotate-token | Reprint: mint a new public token and retire the old one at once.
*OrderEntryPointsApi* | [**updateOrderEntryPoint**](docs/OrderEntryPointsApi.md#updateorderentrypointoperation) | **PATCH** /v1/field/order-entry-points/{id} | Edit an entry point\&#39;s display, seat, timing, or enabled state.
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
*PublicMembershipApi* | [**getPublicMembershipRegistrationForm**](docs/PublicMembershipApi.md#getpublicmembershipregistrationform) | **GET** /v1/public/membership/{tenant_id}/registration-form | 
*PublicMembershipApi* | [**registerPublicMembership**](docs/PublicMembershipApi.md#registerpublicmembership) | **POST** /v1/public/membership/{tenant_id}/registrations | 
*PublicOrderingApi* | [**getCurrentSession**](docs/PublicOrderingApi.md#getcurrentsession) | **GET** /v1/public/order-sessions/current | Report the state of the session the caller holds.
*PublicOrderingApi* | [**getEntryPoint**](docs/PublicOrderingApi.md#getentrypoint) | **GET** /v1/public/order-entry-points/{public_token} | Resolve a printed token to the page a diner should see.
*PublicOrderingApi* | [**getMenu**](docs/PublicOrderingApi.md#getmenu) | **GET** /v1/public/order-sessions/current/menu | The menu this entry point can order from.
*PublicOrderingApi* | [**getMenuProductSelections**](docs/PublicOrderingApi.md#getmenuproductselections) | **GET** /v1/public/order-sessions/current/menu/products/{product_id}/selections | The variants and options one menu item offers.
*PublicOrderingApi* | [**getOwnOrder**](docs/PublicOrderingApi.md#getownorder) | **GET** /v1/public/order-sessions/current/order | Read back the order this session placed.
*PublicOrderingApi* | [**placeOrder**](docs/PublicOrderingApi.md#placeorder) | **POST** /v1/public/order-sessions/current/orders | Place the order this session has been assembling.
*PublicOrderingApi* | [**resetSession**](docs/PublicOrderingApi.md#resetsession) | **POST** /v1/public/order-sessions/current/reset | End the session and make its token useless.
*PublicOrderingApi* | [**startSession**](docs/PublicOrderingApi.md#startsession) | **POST** /v1/public/order-sessions | Open a guest session on an entry point.
*PublicSalesContractSigningApi* | [**completePublicSigningSession**](docs/PublicSalesContractSigningApi.md#completepublicsigningsession) | **POST** /v1/public/sales-contract-signing/session/complete | 
*PublicSalesContractSigningApi* | [**getPublicSigningSession**](docs/PublicSalesContractSigningApi.md#getpublicsigningsession) | **GET** /v1/public/sales-contract-signing/session | 
*PublicStorefrontApi* | [**listPublicCustomFieldDefinitions**](docs/PublicStorefrontApi.md#listpubliccustomfielddefinitions) | **GET** /v1/public/storefront/{tenant_id}/custom-field-definitions | 
*PublicStorefrontApi* | [**publicStorefrontAddCartItem**](docs/PublicStorefrontApi.md#publicstorefrontaddcartitem) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/items | Add a product to a cart.
*PublicStorefrontApi* | [**publicStorefrontCancelOrderByLookupToken**](docs/PublicStorefrontApi.md#publicstorefrontcancelorderbylookuptoken) | **POST** /v1/public/storefront/{tenant_id}/orders/by-token/{lookup_token}/cancel | Cancel the one order represented by a lookup token.
*PublicStorefrontApi* | [**publicStorefrontCheckout**](docs/PublicStorefrontApi.md#publicstorefrontcheckout) | **POST** /v1/public/storefront/{tenant_id}/checkout_sessions | Place the order.
*PublicStorefrontApi* | [**publicStorefrontClearCart**](docs/PublicStorefrontApi.md#publicstorefrontclearcart) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/clear | Empty a cart.
*PublicStorefrontApi* | [**publicStorefrontCreateCart**](docs/PublicStorefrontApi.md#publicstorefrontcreatecart) | **POST** /v1/public/storefront/{tenant_id}/carts | Open a cart.
*PublicStorefrontApi* | [**publicStorefrontCreateReservation**](docs/PublicStorefrontApi.md#publicstorefrontcreatereservation) | **POST** /v1/public/storefront/{tenant_id}/reservations | The booking submission.
*PublicStorefrontApi* | [**publicStorefrontGetCart**](docs/PublicStorefrontApi.md#publicstorefrontgetcart) | **GET** /v1/public/storefront/{tenant_id}/carts/{cart_id} | Read a cart the caller holds the identifier of.
*PublicStorefrontApi* | [**publicStorefrontGetOrderByLookupToken**](docs/PublicStorefrontApi.md#publicstorefrontgetorderbylookuptoken) | **GET** /v1/public/storefront/{tenant_id}/orders/by-token/{lookup_token} | Read an order again with the token the lookup handed back.
*PublicStorefrontApi* | [**publicStorefrontGetProduct**](docs/PublicStorefrontApi.md#publicstorefrontgetproduct) | **GET** /v1/public/storefront/{tenant_id}/products/{product_id} | Read one published product.
*PublicStorefrontApi* | [**publicStorefrontGetProductSelections**](docs/PublicStorefrontApi.md#publicstorefrontgetproductselections) | **GET** /v1/public/storefront/{tenant_id}/products/{product_id}/selections | List the variants and option groups a published product offers.
*PublicStorefrontApi* | [**publicStorefrontGetStorefrontProfile**](docs/PublicStorefrontApi.md#publicstorefrontgetstorefrontprofile) | **GET** /v1/public/storefront/{tenant_id}/profile | The same read under the public shape; see &#x60;reservation_storefront_api::public_tenant&#x60; for why the tenant is a path segment rather than a header.
*PublicStorefrontApi* | [**publicStorefrontListCategories**](docs/PublicStorefrontApi.md#publicstorefrontlistcategories) | **GET** /v1/public/storefront/{tenant_id}/categories | List the categories the menu is grouped by.
*PublicStorefrontApi* | [**publicStorefrontListMembershipPlans**](docs/PublicStorefrontApi.md#publicstorefrontlistmembershipplans) | **GET** /v1/public/storefront/{tenant_id}/membership-plans | The same read under the public shape; see &#x60;reservation_storefront_api::public_tenant&#x60; for why the tenant is a path segment rather than a header.
*PublicStorefrontApi* | [**publicStorefrontListProducts**](docs/PublicStorefrontApi.md#publicstorefrontlistproducts) | **GET** /v1/public/storefront/{tenant_id}/products | List the products a tenant publishes.
*PublicStorefrontApi* | [**publicStorefrontListReservationProducts**](docs/PublicStorefrontApi.md#publicstorefrontlistreservationproducts) | **GET** /v1/public/storefront/{tenant_id}/reservation-products | 
*PublicStorefrontApi* | [**publicStorefrontListReservationTypes**](docs/PublicStorefrontApi.md#publicstorefrontlistreservationtypes) | **GET** /v1/public/storefront/{tenant_id}/reservation-types | 
*PublicStorefrontApi* | [**publicStorefrontListResources**](docs/PublicStorefrontApi.md#publicstorefrontlistresources) | **GET** /v1/public/storefront/{tenant_id}/resources | 
*PublicStorefrontApi* | [**publicStorefrontLookupOrder**](docs/PublicStorefrontApi.md#publicstorefrontlookuporder) | **POST** /v1/public/storefront/{tenant_id}/orders/lookup | Find one order from what its customer knows.
*PublicStorefrontApi* | [**publicStorefrontPreviewCoupon**](docs/PublicStorefrontApi.md#publicstorefrontpreviewcoupon) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/coupon-preview | Price one code against one cart.
*PublicStorefrontApi* | [**publicStorefrontRemoveCartItem**](docs/PublicStorefrontApi.md#publicstorefrontremovecartitem) | **DELETE** /v1/public/storefront/{tenant_id}/carts/{cart_id}/items/{item_id} | Remove a cart line.
*PublicStorefrontApi* | [**publicStorefrontResourceAvailabilityCalendar**](docs/PublicStorefrontApi.md#publicstorefrontresourceavailabilitycalendar) | **GET** /v1/public/storefront/{tenant_id}/resources/{id}/availability-calendar | 
*PublicStorefrontApi* | [**publicStorefrontUpdateCartItem**](docs/PublicStorefrontApi.md#publicstorefrontupdatecartitem) | **POST** /v1/public/storefront/{tenant_id}/carts/{cart_id}/items/{item_id} | Change the quantity of a cart line.
*PurchaseOrdersApi* | [**createPurchaseOrder**](docs/PurchaseOrdersApi.md#createpurchaseorderoperation) | **POST** /v1/erp/purchase-orders | 
*PurchaseOrdersApi* | [**getPurchaseOrder**](docs/PurchaseOrdersApi.md#getpurchaseorder) | **GET** /v1/erp/purchase-orders/{id} | 
*PurchaseOrdersApi* | [**listPurchaseOrders**](docs/PurchaseOrdersApi.md#listpurchaseorders) | **GET** /v1/erp/purchase-orders | 
*PurchaseOrdersApi* | [**updatePurchaseOrder**](docs/PurchaseOrdersApi.md#updatepurchaseorderoperation) | **PATCH** /v1/erp/purchase-orders/{id} | 
*QuotationsApi* | [**acceptOrderByQuotation**](docs/QuotationsApi.md#acceptorderbyquotation) | **POST** /v1/erp/quotations/{id}/accept-order | REST fallback for the quarantined &#x60;acceptOrderByQuotes&#x60; GraphQL mutation (PLT-3424): accept a quotation and idempotently create the matching order.
*QuotationsApi* | [**convertQuotationToInvoice**](docs/QuotationsApi.md#convertquotationtoinvoice) | **POST** /v1/erp/quotations/{id}/convert-to-invoice | 
*QuotationsApi* | [**createQuotation**](docs/QuotationsApi.md#createquotationoperation) | **POST** /v1/erp/quotations | 
*QuotationsApi* | [**createQuotationPdf**](docs/QuotationsApi.md#createquotationpdf) | **POST** /v1/erp/quotations/{id}/pdf | REST fallback for the quarantined &#x60;createQuotePdf&#x60; GraphQL mutation (PLT-3424): generate a quotation PDF and return a signed URL.
*QuotationsApi* | [**getQuotation**](docs/QuotationsApi.md#getquotation) | **GET** /v1/erp/quotations/{id} | 
*QuotationsApi* | [**listQuotations**](docs/QuotationsApi.md#listquotations) | **GET** /v1/erp/quotations | 
*QuotationsApi* | [**updateQuotation**](docs/QuotationsApi.md#updatequotationoperation) | **PATCH** /v1/erp/quotations/{id} | 
*ReservationsApi* | [**acknowledgeHandoffNote**](docs/ReservationsApi.md#acknowledgehandoffnote) | **POST** /v1/erp/handoff-notes/{id}/acknowledge | 
*ReservationsApi* | [**assignReservationStaff**](docs/ReservationsApi.md#assignreservationstaff) | **POST** /v1/erp/reservations/{id}/staff-assignment | 
*ReservationsApi* | [**cancelReservationWithPolicy**](docs/ReservationsApi.md#cancelreservationwithpolicy) | **POST** /v1/erp/reservations/{id}/cancel | 
*ReservationsApi* | [**closeCustomerClientAffiliation**](docs/ReservationsApi.md#closecustomerclientaffiliationoperation) | **POST** /v1/erp/customer-client-affiliations/{id}/close | 
*ReservationsApi* | [**closeReservationWaitlistEntry**](docs/ReservationsApi.md#closereservationwaitlistentryoperation) | **POST** /v1/erp/reservation-waitlist/{id}/close | 
*ReservationsApi* | [**convertReservationWaitlistEntry**](docs/ReservationsApi.md#convertreservationwaitlistentryoperation) | **POST** /v1/erp/reservation-waitlist/{id}/convert | 
*ReservationsApi* | [**createCustomerClientAffiliation**](docs/ReservationsApi.md#createcustomerclientaffiliationoperation) | **POST** /v1/erp/customer-client-affiliations | 
*ReservationsApi* | [**createHandoffNote**](docs/ReservationsApi.md#createhandoffnoteoperation) | **POST** /v1/erp/handoff-notes | 
*ReservationsApi* | [**createReservation**](docs/ReservationsApi.md#createreservationoperation) | **POST** /v1/erp/reservations | 
*ReservationsApi* | [**createReservationProduct**](docs/ReservationsApi.md#createreservationproduct) | **POST** /v1/erp/reservation-products | 
*ReservationsApi* | [**createReservationResource**](docs/ReservationsApi.md#createreservationresourceoperation) | **POST** /v1/erp/reservation-resources | 
*ReservationsApi* | [**createReservationType**](docs/ReservationsApi.md#createreservationtypeoperation) | **POST** /v1/erp/reservation-types | 
*ReservationsApi* | [**createReservationWaitlistEntry**](docs/ReservationsApi.md#createreservationwaitlistentryoperation) | **POST** /v1/erp/reservation-waitlist | 
*ReservationsApi* | [**createStaffAssignment**](docs/ReservationsApi.md#createstaffassignment) | **POST** /v1/erp/staff-assignments | 
*ReservationsApi* | [**createStaffProfile**](docs/ReservationsApi.md#createstaffprofile) | **POST** /v1/erp/staff-profiles | 
*ReservationsApi* | [**deleteReservationProduct**](docs/ReservationsApi.md#deletereservationproduct) | **DELETE** /v1/erp/reservation-products/{id} | 
*ReservationsApi* | [**deleteReservationResource**](docs/ReservationsApi.md#deletereservationresource) | **DELETE** /v1/erp/reservation-resources/{id} | 
*ReservationsApi* | [**deleteReservationScheduleDateOverride**](docs/ReservationsApi.md#deletereservationscheduledateoverride) | **DELETE** /v1/erp/reservation-resources/{id}/schedule/overrides/{localDate} | 
*ReservationsApi* | [**deleteReservationScheduleLocation**](docs/ReservationsApi.md#deletereservationschedulelocation) | **DELETE** /v1/erp/reservation-schedule-location | 
*ReservationsApi* | [**deleteReservationType**](docs/ReservationsApi.md#deletereservationtype) | **DELETE** /v1/erp/reservation-types/{id} | 
*ReservationsApi* | [**disableExtension**](docs/ReservationsApi.md#disableextension) | **POST** /v1/erp/extensions/{extension_key}/disable | 
*ReservationsApi* | [**enableExtension**](docs/ReservationsApi.md#enableextensionoperation) | **POST** /v1/erp/extensions/{extension_key}/enable | 
*ReservationsApi* | [**exportCancellationFeeReportCsv**](docs/ReservationsApi.md#exportcancellationfeereportcsv) | **GET** /v1/erp/reservation-reports/cancellation-fees.csv | 
*ReservationsApi* | [**exportReservationsCsv**](docs/ReservationsApi.md#exportreservationscsv) | **GET** /v1/erp/reservations/export.csv | 
*ReservationsApi* | [**generateReservationResourceTimeSlots**](docs/ReservationsApi.md#generatereservationresourcetimeslots) | **POST** /v1/erp/reservation-resources/{id}/time-slots/generate | 
*ReservationsApi* | [**getExtensionConfig**](docs/ReservationsApi.md#getextensionconfig) | **GET** /v1/erp/extensions/{extension_key}/config | 
*ReservationsApi* | [**getReservation**](docs/ReservationsApi.md#getreservation) | **GET** /v1/erp/reservations/{id} | 
*ReservationsApi* | [**getReservationProduct**](docs/ReservationsApi.md#getreservationproduct) | **GET** /v1/erp/reservation-products/{id} | 
*ReservationsApi* | [**getReservationResource**](docs/ReservationsApi.md#getreservationresource) | **GET** /v1/erp/reservation-resources/{id} | 
*ReservationsApi* | [**getReservationResourceSchedule**](docs/ReservationsApi.md#getreservationresourceschedule) | **GET** /v1/erp/reservation-resources/{id}/schedule | 
*ReservationsApi* | [**getReservationScheduleLocation**](docs/ReservationsApi.md#getreservationschedulelocation) | **GET** /v1/erp/reservation-schedule-location | 
*ReservationsApi* | [**getReservationWaitlistEntry**](docs/ReservationsApi.md#getreservationwaitlistentry) | **GET** /v1/erp/reservation-waitlist/{id} | 
*ReservationsApi* | [**importProductSlotsIntoResourceSchedule**](docs/ReservationsApi.md#importproductslotsintoresourceschedule) | **POST** /v1/erp/reservation-resources/{id}/schedule/import-product-slots | 
*ReservationsApi* | [**issueReservationBillingLink**](docs/ReservationsApi.md#issuereservationbillinglinkoperation) | **POST** /v1/erp/reservations/{id}/billing-link | 
*ReservationsApi* | [**issueReservationSquareInvoice**](docs/ReservationsApi.md#issuereservationsquareinvoice) | **POST** /v1/erp/reservations/{id}/billing-invoice | 
*ReservationsApi* | [**listCancellationFeeReport**](docs/ReservationsApi.md#listcancellationfeereport) | **GET** /v1/erp/reservation-reports/cancellation-fees | 
*ReservationsApi* | [**listCustomerClientAffiliations**](docs/ReservationsApi.md#listcustomerclientaffiliations) | **GET** /v1/erp/customer-client-affiliations | 
*ReservationsApi* | [**listExtensionLifecycleAuditEvents**](docs/ReservationsApi.md#listextensionlifecycleauditevents) | **GET** /v1/erp/extensions/audit | 
*ReservationsApi* | [**listExtensions**](docs/ReservationsApi.md#listextensions) | **GET** /v1/erp/extensions | 
*ReservationsApi* | [**listHandoffNotes**](docs/ReservationsApi.md#listhandoffnotes) | **GET** /v1/erp/handoff-notes | 
*ReservationsApi* | [**listReservationCancellations**](docs/ReservationsApi.md#listreservationcancellations) | **GET** /v1/erp/reservations/{id}/cancellations | 
*ReservationsApi* | [**listReservationNotificationTemplates**](docs/ReservationsApi.md#listreservationnotificationtemplates) | **GET** /v1/erp/reservation-notification-templates | 
*ReservationsApi* | [**listReservationProducts**](docs/ReservationsApi.md#listreservationproducts) | **GET** /v1/erp/reservation-products | 
*ReservationsApi* | [**listReservationResourceTimeSlots**](docs/ReservationsApi.md#listreservationresourcetimeslots) | **GET** /v1/erp/reservation-resources/{id}/time-slots | 
*ReservationsApi* | [**listReservationResources**](docs/ReservationsApi.md#listreservationresources) | **GET** /v1/erp/reservation-resources | 
*ReservationsApi* | [**listReservationScheduleDateOverrides**](docs/ReservationsApi.md#listreservationscheduledateoverrides) | **GET** /v1/erp/reservation-resources/{id}/schedule/overrides | 
*ReservationsApi* | [**listReservationTypes**](docs/ReservationsApi.md#listreservationtypes) | **GET** /v1/erp/reservation-types | 
*ReservationsApi* | [**listReservationTypesForManagement**](docs/ReservationsApi.md#listreservationtypesformanagement) | **GET** /v1/erp/reservation-types/manage | 
*ReservationsApi* | [**listReservationWaitlist**](docs/ReservationsApi.md#listreservationwaitlist) | **GET** /v1/erp/reservation-waitlist | 
*ReservationsApi* | [**listReservations**](docs/ReservationsApi.md#listreservations) | **GET** /v1/erp/reservations | 
*ReservationsApi* | [**listResources**](docs/ReservationsApi.md#listresources) | **GET** /v1/erp/resources | 
*ReservationsApi* | [**listStaffAssignments**](docs/ReservationsApi.md#liststaffassignments) | **GET** /v1/erp/staff-assignments | 
*ReservationsApi* | [**listStaffAvailability**](docs/ReservationsApi.md#liststaffavailability) | **GET** /v1/erp/staff-availability | 
*ReservationsApi* | [**listStaffProfiles**](docs/ReservationsApi.md#liststaffprofiles) | **GET** /v1/erp/staff-profiles | 
*ReservationsApi* | [**listTenantExtensionStatuses**](docs/ReservationsApi.md#listtenantextensionstatuses) | **GET** /v1/erp/extensions/status | 
*ReservationsApi* | [**listTenantExtensionStatusesAppStore**](docs/ReservationsApi.md#listtenantextensionstatusesappstore) | **GET** /v1/erp/app-store/apps | Thin wrapper so the app-store mount (&#x60;/v1/erp/app-store/apps&#x60;) gets its own OpenAPI path entry; delegates entirely to &#x60;list_tenant_extension_statuses&#x60;.
*ReservationsApi* | [**listTenantExtensions**](docs/ReservationsApi.md#listtenantextensions) | **GET** /v1/erp/extensions/enabled | 
*ReservationsApi* | [**listTenantReservationCancellations**](docs/ReservationsApi.md#listtenantreservationcancellations) | **GET** /v1/erp/reservation-cancellations | 
*ReservationsApi* | [**lookupReservationStatuses**](docs/ReservationsApi.md#lookupreservationstatuses) | **POST** /v1/erp/reservations/status-lookup | Resolves the current state of reservations the caller already references.
*ReservationsApi* | [**purgeManualReservationResourceTimeSlots**](docs/ReservationsApi.md#purgemanualreservationresourcetimeslots) | **DELETE** /v1/erp/reservation-resources/{id}/time-slots/manual | 
*ReservationsApi* | [**purgeReservationResourceTimeSlots**](docs/ReservationsApi.md#purgereservationresourcetimeslots) | **DELETE** /v1/erp/reservation-resources/{id}/time-slots | 
*ReservationsApi* | [**putReservationScheduleDateOverride**](docs/ReservationsApi.md#putreservationscheduledateoverrideoperation) | **PUT** /v1/erp/reservation-resources/{id}/schedule/overrides/{localDate} | 
*ReservationsApi* | [**putReservationScheduleLocation**](docs/ReservationsApi.md#putreservationschedulelocationoperation) | **PUT** /v1/erp/reservation-schedule-location | 
*ReservationsApi* | [**registerExtension**](docs/ReservationsApi.md#registerextensionoperation) | **POST** /v1/erp/extensions | 
*ReservationsApi* | [**releaseExpiredPaymentHolds**](docs/ReservationsApi.md#releaseexpiredpaymentholds) | **POST** /v1/erp/reservations/payment-holds/release-expired | 
*ReservationsApi* | [**releasePaymentIntentHold**](docs/ReservationsApi.md#releasepaymentintentholdoperation) | **POST** /v1/erp/reservations/payment-holds/release | 
*ReservationsApi* | [**replaceReservationProduct**](docs/ReservationsApi.md#replacereservationproduct) | **PUT** /v1/erp/reservation-products/{id} | 
*ReservationsApi* | [**replaceReservationProductSlots**](docs/ReservationsApi.md#replacereservationproductslotsoperation) | **PUT** /v1/erp/reservation-products/{id}/slots | 
*ReservationsApi* | [**replaceReservationResourceSchedule**](docs/ReservationsApi.md#replacereservationresourcescheduleoperation) | **PUT** /v1/erp/reservation-resources/{id}/schedule | 
*ReservationsApi* | [**retractHandoffNote**](docs/ReservationsApi.md#retracthandoffnoteoperation) | **POST** /v1/erp/handoff-notes/{id}/retract | 
*ReservationsApi* | [**saveReservationNotificationTemplates**](docs/ReservationsApi.md#savereservationnotificationtemplatesoperation) | **PUT** /v1/erp/reservation-notification-templates | 
*ReservationsApi* | [**seedReservationProductsFromExtensionConfig**](docs/ReservationsApi.md#seedreservationproductsfromextensionconfig) | **POST** /v1/erp/reservation-products/seed-from-extension-config | 
*ReservationsApi* | [**sendReservationNotification**](docs/ReservationsApi.md#sendreservationnotificationoperation) | **POST** /v1/erp/reservations/{id}/notifications | 
*ReservationsApi* | [**unassignReservationStaff**](docs/ReservationsApi.md#unassignreservationstaff) | **POST** /v1/erp/reservations/{id}/staff-assignment/unassign | 
*ReservationsApi* | [**updateCustomerClientAffiliation**](docs/ReservationsApi.md#updatecustomerclientaffiliationoperation) | **PATCH** /v1/erp/customer-client-affiliations/{id} | 
*ReservationsApi* | [**updateExtensionConfig**](docs/ReservationsApi.md#updateextensionconfigoperation) | **PATCH** /v1/erp/extensions/{extension_key}/config | 
*ReservationsApi* | [**updateReservation**](docs/ReservationsApi.md#updatereservationoperation) | **PATCH** /v1/erp/reservations/{id} | 
*ReservationsApi* | [**updateReservationResource**](docs/ReservationsApi.md#updatereservationresourceoperation) | **PATCH** /v1/erp/reservation-resources/{id} | 
*ReservationsApi* | [**updateReservationType**](docs/ReservationsApi.md#updatereservationtypeoperation) | **PATCH** /v1/erp/reservation-types/{id} | 
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
*SalesContractSigningApi* | [**createSigningRequest**](docs/SalesContractSigningApi.md#createsigningrequest) | **POST** /v1/erp/sales-contracts/{contract_id}/signing-requests | 
*SalesContractSigningApi* | [**downloadSigningArtifact**](docs/SalesContractSigningApi.md#downloadsigningartifact) | **GET** /v1/erp/sales-contract-signing-requests/{request_id}/artifacts/{kind}/download | 
*SalesContractSigningApi* | [**getSigningRequest**](docs/SalesContractSigningApi.md#getsigningrequest) | **GET** /v1/erp/sales-contract-signing-requests/{request_id} | 
*SalesContractSigningApi* | [**listSigningRequests**](docs/SalesContractSigningApi.md#listsigningrequests) | **GET** /v1/erp/sales-contracts/{contract_id}/signing-requests | 
*SalesContractSigningApi* | [**reissueSigningCapability**](docs/SalesContractSigningApi.md#reissuesigningcapability) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/reissue | 
*SalesContractSigningApi* | [**retrySigningFinalization**](docs/SalesContractSigningApi.md#retrysigningfinalization) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/retry-finalization | 
*SalesContractSigningApi* | [**revokeSigningRequest**](docs/SalesContractSigningApi.md#revokesigningrequest) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/revoke | 
*SalesContractSigningApi* | [**sendSigningRequest**](docs/SalesContractSigningApi.md#sendsigningrequest) | **POST** /v1/erp/sales-contract-signing-requests/{request_id}/send | 
*StoreKitApi* | [**addCartItem**](docs/StoreKitApi.md#addcartitemoperation) | **POST** /v1/storekit/carts/{cart_id}/items | Add a cart item.
*StoreKitApi* | [**cancelOrder**](docs/StoreKitApi.md#cancelorder) | **POST** /v1/storekit/orders/{order_id}/cancel | Cancel order.
*StoreKitApi* | [**checkout**](docs/StoreKitApi.md#checkoutoperation) | **POST** /v1/storekit/checkout_sessions | Create checkout session / order.
*StoreKitApi* | [**clearCart**](docs/StoreKitApi.md#clearcart) | **POST** /v1/storekit/carts/{cart_id}/clear | Clear cart items.
*StoreKitApi* | [**confirmCheckoutSession**](docs/StoreKitApi.md#confirmcheckoutsession) | **POST** /v1/storekit/checkout_sessions/{order_id}/confirm | Confirm checkout session.
*StoreKitApi* | [**createCart**](docs/StoreKitApi.md#createcartoperation) | **POST** /v1/storekit/carts | Create or retrieve a cart.
*StoreKitApi* | [**createCustomer**](docs/StoreKitApi.md#createcustomeroperation) | **POST** /v1/storekit/customers | Create customer.
*StoreKitApi* | [**createWebhookEndpoint**](docs/StoreKitApi.md#createwebhookendpointoperation) | **POST** /v1/storekit/webhook-endpoints | webhook 宛先を登録し、署名シークレットを一度だけ返す。
*StoreKitApi* | [**deleteCustomer**](docs/StoreKitApi.md#deletecustomer) | **DELETE** /v1/storekit/customers/{customer_id} | Delete customer.
*StoreKitApi* | [**deleteWebhookEndpoint**](docs/StoreKitApi.md#deletewebhookendpoint) | **DELETE** /v1/storekit/webhook-endpoints/{endpoint_id} | webhook 宛先を削除する。
*StoreKitApi* | [**deliverOrder**](docs/StoreKitApi.md#deliverorder) | **POST** /v1/storekit/orders/{order_id}/deliver | Deliver order.
*StoreKitApi* | [**getCart**](docs/StoreKitApi.md#getcart) | **GET** /v1/storekit/carts/{cart_id} | Get a cart.
*StoreKitApi* | [**getCustomer**](docs/StoreKitApi.md#getcustomer) | **GET** /v1/storekit/customers/{customer_id} | Get customer.
*StoreKitApi* | [**getOrderReceipt**](docs/StoreKitApi.md#getorderreceipt) | **GET** /v1/storekit/consumer-orders/{order_id}/receipt | Get a printable receipt for a consumer order.
*StoreKitApi* | [**getProduct**](docs/StoreKitApi.md#getproduct) | **GET** /v1/storekit/products/{product_id} | Get a storefront product.
*StoreKitApi* | [**getProductSelections**](docs/StoreKitApi.md#getproductselections) | **GET** /v1/storekit/products/{product_id}/selections | List the variants and option groups a product offers.
*StoreKitApi* | [**getProductStock**](docs/StoreKitApi.md#getproductstock) | **GET** /v1/storekit/products/{product_id}/stock | Get product stock.
*StoreKitApi* | [**getWebhookEndpoint**](docs/StoreKitApi.md#getwebhookendpoint) | **GET** /v1/storekit/webhook-endpoints/{endpoint_id} | webhook 宛先を1件取得する。
*StoreKitApi* | [**listCustomers**](docs/StoreKitApi.md#listcustomers) | **GET** /v1/storekit/customers | List customers.
*StoreKitApi* | [**listFulfillmentMethods**](docs/StoreKitApi.md#listfulfillmentmethods) | **GET** /v1/storekit/fulfillment-methods | List supported fulfillment methods.
*StoreKitApi* | [**listProducts**](docs/StoreKitApi.md#listproducts) | **GET** /v1/storekit/products | List storefront products.
*StoreKitApi* | [**listWebhookDeliveries**](docs/StoreKitApi.md#listwebhookdeliveries) | **GET** /v1/storekit/webhook-endpoints/{endpoint_id}/deliveries | 宛先の配送履歴を新しい順に返す。
*StoreKitApi* | [**listWebhookEndpoints**](docs/StoreKitApi.md#listwebhookendpoints) | **GET** /v1/storekit/webhook-endpoints | テナントの webhook 宛先を一覧する。
*StoreKitApi* | [**pickupOrder**](docs/StoreKitApi.md#pickuporder) | **POST** /v1/storekit/orders/{order_id}/pickup | Mark pickup order as picked up.
*StoreKitApi* | [**prepareOrder**](docs/StoreKitApi.md#prepareorder) | **POST** /v1/storekit/orders/{order_id}/prepare | Prepare order for fulfillment.
*StoreKitApi* | [**readyOrder**](docs/StoreKitApi.md#readyorder) | **POST** /v1/storekit/orders/{order_id}/ready | Mark pickup order as ready.
*StoreKitApi* | [**refundOrder**](docs/StoreKitApi.md#refundorder) | **POST** /v1/storekit/orders/{order_id}/refund | Refund order.
*StoreKitApi* | [**removeCartItem**](docs/StoreKitApi.md#removecartitem) | **DELETE** /v1/storekit/carts/{cart_id}/items/{item_id} | Remove a cart item by item ID.
*StoreKitApi* | [**rotateWebhookEndpointSecret**](docs/StoreKitApi.md#rotatewebhookendpointsecret) | **POST** /v1/storekit/webhook-endpoints/{endpoint_id}/rotate-secret | 署名シークレットを更新し、新しい値を一度だけ返す。
*StoreKitApi* | [**selectPickupDatetime**](docs/StoreKitApi.md#selectpickupdatetimeoperation) | **POST** /v1/storekit/orders/{order_id}/select-pickup-datetime | Select pickup date-time.
*StoreKitApi* | [**shipOrder**](docs/StoreKitApi.md#shiporder) | **POST** /v1/storekit/orders/{order_id}/ship | Ship order.
*StoreKitApi* | [**storefrontCreateReservation**](docs/StoreKitApi.md#storefrontcreatereservationoperation) | **POST** /v1/storekit/reservations | 
*StoreKitApi* | [**storefrontGetStorefrontProfile**](docs/StoreKitApi.md#storefrontgetstorefrontprofile) | **GET** /v1/storekit/storefront-profile | Anonymous read for the public storefront.
*StoreKitApi* | [**storefrontListMembershipPlans**](docs/StoreKitApi.md#storefrontlistmembershipplans) | **GET** /v1/storekit/membership-plans | The member classes on offer.
*StoreKitApi* | [**storefrontListReservationProducts**](docs/StoreKitApi.md#storefrontlistreservationproducts) | **GET** /v1/storekit/reservation-products | 
*StoreKitApi* | [**storefrontListReservationTypes**](docs/StoreKitApi.md#storefrontlistreservationtypes) | **GET** /v1/storekit/reservation-types | 
*StoreKitApi* | [**storefrontListReservations**](docs/StoreKitApi.md#storefrontlistreservations) | **GET** /v1/storekit/reservations | 
*StoreKitApi* | [**storefrontListResourceTimeSlots**](docs/StoreKitApi.md#storefrontlistresourcetimeslots) | **GET** /v1/storekit/resources/{id}/time-slots | 
*StoreKitApi* | [**storefrontListResources**](docs/StoreKitApi.md#storefrontlistresources) | **GET** /v1/storekit/resources | 
*StoreKitApi* | [**storefrontResourceAvailabilityCalendar**](docs/StoreKitApi.md#storefrontresourceavailabilitycalendar) | **GET** /v1/storekit/resources/{id}/availability-calendar | 
*StoreKitApi* | [**storefrontUpdateReservation**](docs/StoreKitApi.md#storefrontupdatereservationoperation) | **PATCH** /v1/storekit/reservations/{id} | 
*StoreKitApi* | [**storekitGetOrder**](docs/StoreKitApi.md#storekitgetorder) | **GET** /v1/storekit/orders/{order_id} | Get order.
*StoreKitApi* | [**storekitListCategories**](docs/StoreKitApi.md#storekitlistcategories) | **GET** /v1/storekit/categories | List storefront categories.
*StoreKitApi* | [**storekitListOrders**](docs/StoreKitApi.md#storekitlistorders) | **GET** /v1/storekit/orders | List orders.
*StoreKitApi* | [**testWebhookEndpoint**](docs/StoreKitApi.md#testwebhookendpoint) | **POST** /v1/storekit/webhook-endpoints/{endpoint_id}/test | 宛先へ署名付きの疎通確認イベントを1回送る。
*StoreKitApi* | [**updateCartItem**](docs/StoreKitApi.md#updatecartitemoperation) | **POST** /v1/storekit/carts/{cart_id}/items/{item_id} | Update a cart item by item ID.
*StoreKitApi* | [**updateCustomer**](docs/StoreKitApi.md#updatecustomeroperation) | **POST** /v1/storekit/customers/{customer_id} | Update customer.
*StoreKitApi* | [**updateWebhookEndpoint**](docs/StoreKitApi.md#updatewebhookendpointoperation) | **PATCH** /v1/storekit/webhook-endpoints/{endpoint_id} | webhook 宛先を部分更新する。
*StoreKitApi* | [**validateCoupon**](docs/StoreKitApi.md#validatecouponoperation) | **POST** /v1/storekit/coupons/validate | Validate coupon.
*StorefrontProfileApi* | [**getStorefrontProfile**](docs/StorefrontProfileApi.md#getstorefrontprofile) | **GET** /v1/field/storefront-profile | 
*StorefrontProfileApi* | [**saveStorefrontProfile**](docs/StorefrontProfileApi.md#savestorefrontprofileoperation) | **PUT** /v1/field/storefront-profile | 
*TACHYONFieldAPIKeysApi* | [**createApiKey**](docs/TACHYONFieldAPIKeysApi.md#createapikeyoperation) | **POST** /v1/field/api-keys | 
*TACHYONFieldAPIKeysApi* | [**deleteApiKey**](docs/TACHYONFieldAPIKeysApi.md#deleteapikey) | **DELETE** /v1/field/api-keys/{id} | 
*TACHYONFieldAPIKeysApi* | [**getApiKey**](docs/TACHYONFieldAPIKeysApi.md#getapikey) | **GET** /v1/field/api-keys/{id} | 
*TACHYONFieldAPIKeysApi* | [**listApiKeys**](docs/TACHYONFieldAPIKeysApi.md#listapikeys) | **GET** /v1/field/api-keys | 
*TACHYONFieldAPIKeysApi* | [**revokeApiKey**](docs/TACHYONFieldAPIKeysApi.md#revokeapikey) | **POST** /v1/field/api-keys/{id}/revoke | 
*TACHYONFieldAnalyticsApi* | [**getCustomerPurchaseSummary**](docs/TACHYONFieldAnalyticsApi.md#getcustomerpurchasesummary) | **GET** /v1/erp/analytics/customer-purchase-summary/{customer_id} | 顧客1件の購買サマリ。
*TACHYONFieldAnalyticsApi* | [**listCustomerPurchaseSummaries**](docs/TACHYONFieldAnalyticsApi.md#listcustomerpurchasesummaries) | **GET** /v1/erp/analytics/customer-purchase-summary | 顧客ごとの購買サマリを横断で返す。
*TACHYONFieldBillingAccountsApi* | [**addOperator**](docs/TACHYONFieldBillingAccountsApi.md#addoperatoroperation) | **POST** /v1/field/billing-accounts/{id}/operators | &#x60;POST /v1/field/billing-accounts/{id}/operators&#x60; — add an operator to a billing account.
*TACHYONFieldBillingAccountsApi* | [**createBillingAccount**](docs/TACHYONFieldBillingAccountsApi.md#createbillingaccountoperation) | **POST** /v1/field/billing-accounts | &#x60;POST /v1/field/billing-accounts&#x60; — create a new billing account.
*TACHYONFieldBillingAccountsApi* | [**getBillingAccount**](docs/TACHYONFieldBillingAccountsApi.md#getbillingaccount) | **GET** /v1/field/billing-accounts/{id} | &#x60;GET /v1/field/billing-accounts/{id}&#x60; — get a single billing account.
*TACHYONFieldBillingAccountsApi* | [**listBillingAccounts**](docs/TACHYONFieldBillingAccountsApi.md#listbillingaccounts) | **GET** /v1/field/billing-accounts | &#x60;GET /v1/field/billing-accounts&#x60; — list all billing accounts.
*TACHYONFieldBillingAccountsApi* | [**listOperators**](docs/TACHYONFieldBillingAccountsApi.md#listoperators) | **GET** /v1/field/billing-accounts/{id}/operators | &#x60;GET /v1/field/billing-accounts/{id}/operators&#x60; — list operators linked to a billing account.
*TACHYONFieldBillingAccountsApi* | [**removeOperator**](docs/TACHYONFieldBillingAccountsApi.md#removeoperator) | **DELETE** /v1/field/billing-accounts/{id}/operators/{operator_id} | &#x60;DELETE /v1/field/billing-accounts/{id}/operators/ {operator_id}&#x60; — remove an operator from a billing account.
*TACHYONFieldBillingAccountsApi* | [**updateBillingAccount**](docs/TACHYONFieldBillingAccountsApi.md#updatebillingaccountoperation) | **PUT** /v1/field/billing-accounts/{id} | &#x60;PUT /v1/field/billing-accounts/{id}&#x60; — update a billing account.
*TACHYONFieldBridgeApi* | [**analyzeBridgeTabular**](docs/TACHYONFieldBridgeApi.md#analyzebridgetabular) | **POST** /v1/bridge/tabular/analyze | 
*TACHYONFieldBridgeApi* | [**createBridgeDefinition**](docs/TACHYONFieldBridgeApi.md#createbridgedefinition) | **POST** /v1/bridge/definitions | 
*TACHYONFieldBridgeApi* | [**executeBridgeRun**](docs/TACHYONFieldBridgeApi.md#executebridgerun) | **POST** /v1/bridge/runs/{run_id}/execute | 
*TACHYONFieldBridgeApi* | [**getBridgeRun**](docs/TACHYONFieldBridgeApi.md#getbridgerun) | **GET** /v1/bridge/runs/{run_id} | 
*TACHYONFieldBridgeApi* | [**invokeBridgeAction**](docs/TACHYONFieldBridgeApi.md#invokebridgeaction) | **POST** /v1/bridge/actions/{action} | 
*TACHYONFieldBridgeApi* | [**listBridgeDefinitions**](docs/TACHYONFieldBridgeApi.md#listbridgedefinitions) | **GET** /v1/bridge/definitions | 
*TACHYONFieldBridgeApi* | [**listBridgeRuns**](docs/TACHYONFieldBridgeApi.md#listbridgeruns) | **GET** /v1/bridge/runs | 
*TACHYONFieldBridgeApi* | [**listBridgeTargetObjects**](docs/TACHYONFieldBridgeApi.md#listbridgetargetobjects) | **GET** /v1/bridge/objects | The objects a definition may target, with the properties each one accepts.
*TACHYONFieldBridgeApi* | [**previewBridgeFile**](docs/TACHYONFieldBridgeApi.md#previewbridgefile) | **POST** /v1/bridge/definitions/{definition_id}/runs/preview-file | 
*TACHYONFieldBridgeApi* | [**previewBridgeRun**](docs/TACHYONFieldBridgeApi.md#previewbridgerun) | **POST** /v1/bridge/definitions/{definition_id}/runs/preview | 
*TACHYONFieldBridgeExportApi* | [**createBridgeExportDefinition**](docs/TACHYONFieldBridgeExportApi.md#createbridgeexportdefinition) | **POST** /v1/bridge/exports/definitions | 
*TACHYONFieldBridgeExportApi* | [**exportBridgeCsv**](docs/TACHYONFieldBridgeExportApi.md#exportbridgecsv) | **GET** /v1/bridge/exports/definitions/{definition_id}/csv | 
*TACHYONFieldBridgeExportApi* | [**listBridgeExportDefinitions**](docs/TACHYONFieldBridgeExportApi.md#listbridgeexportdefinitions) | **GET** /v1/bridge/exports/definitions | 
*TACHYONFieldBridgeExportApi* | [**listBridgeExportObjects**](docs/TACHYONFieldBridgeExportApi.md#listbridgeexportobjects) | **GET** /v1/bridge/exports/objects | 
*TACHYONFieldCRMClientsApi* | [**exportClientsCsv**](docs/TACHYONFieldCRMClientsApi.md#exportclientscsv) | **GET** /v1/erp/clients/export.csv | 
*TACHYONFieldCRMClientsApi* | [**importClientsCsv**](docs/TACHYONFieldCRMClientsApi.md#importclientscsv) | **POST** /v1/erp/clients/import.csv | 
*TACHYONFieldCRMCustomersApi* | [**exportConsumerCustomersCsv**](docs/TACHYONFieldCRMCustomersApi.md#exportconsumercustomerscsv) | **GET** /v1/erp/customers/export.csv | 一覧と同じクエリ文字列（&#x60;segment&#x60; / &#x60;sort&#x60; / &#x60;min_order_total_nanodollar&#x60; など）を受け、絞り込んだ結果をそのまま CSV にする。画面で作ったリストを そのまま持ち出せるようにするためで、絞り込みを無視して全件を返すと、 「購入金額上位のリスト」を出したつもりの利用者に台帳全体が渡る。 &#x60;limit&#x60; / &#x60;offset&#x60; は無視して先頭から全件を読む。
*TACHYONFieldCRMCustomersApi* | [**importConsumerCustomersCsv**](docs/TACHYONFieldCRMCustomersApi.md#importconsumercustomerscsv) | **POST** /v1/erp/customers/import.csv | 
*TACHYONFieldIAMApi* | [**deleteErpUserRole**](docs/TACHYONFieldIAMApi.md#deleteerpuserrole) | **DELETE** /v1/field/iam/users/{user_id} | 
*TACHYONFieldIAMApi* | [**inviteErpUser**](docs/TACHYONFieldIAMApi.md#inviteerpuseroperation) | **POST** /v1/field/iam/users/invite | 
*TACHYONFieldIAMApi* | [**listErpUsers**](docs/TACHYONFieldIAMApi.md#listerpusers) | **GET** /v1/field/iam/users | 
*TACHYONFieldIAMApi* | [**updateErpUserPolicies**](docs/TACHYONFieldIAMApi.md#updateerpuserpoliciesoperation) | **PUT** /v1/field/iam/users/{user_id}/policies | Replace a member\&#39;s ERP-managed policies with the given flat list.
*TACHYONFieldIAMApi* | [**updateErpUserRole**](docs/TACHYONFieldIAMApi.md#updateerpuserroleoperation) | **PUT** /v1/field/iam/users/{user_id}/role | 
*TACHYONFieldIdentityApi* | [**evaluateFeatureFlags**](docs/TACHYONFieldIdentityApi.md#evaluatefeatureflagsoperation) | **POST** /v1/feature-flags/evaluate | Evaluate Field-owned feature flags for the authenticated tenant.
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
*TACHYONFieldStripeConnectApi* | [**createStripeConnectAccount**](docs/TACHYONFieldStripeConnectApi.md#createstripeconnectaccount) | **POST** /v1/erp/payments/stripe-connect/account | 
*TACHYONFieldStripeConnectApi* | [**createStripeConnectOnboardingLink**](docs/TACHYONFieldStripeConnectApi.md#createstripeconnectonboardinglinkoperation) | **POST** /v1/erp/payments/stripe-connect/onboarding-link | 
*TACHYONFieldStripeConnectApi* | [**getStripeConnectAccount**](docs/TACHYONFieldStripeConnectApi.md#getstripeconnectaccount) | **GET** /v1/erp/payments/stripe-connect/account | 
*VendorsApi* | [**createVendor**](docs/VendorsApi.md#createvendoroperation) | **POST** /v1/erp/vendors | 
*VendorsApi* | [**getVendor**](docs/VendorsApi.md#getvendor) | **GET** /v1/erp/vendors/{id} | 
*VendorsApi* | [**listVendors**](docs/VendorsApi.md#listvendors) | **GET** /v1/erp/vendors | 
*VendorsApi* | [**updateVendor**](docs/VendorsApi.md#updatevendoroperation) | **PATCH** /v1/erp/vendors/{id} | 


### Models

- [AcceptOrderByQuotationResponse](docs/AcceptOrderByQuotationResponse.md)
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
- [ArtifactDownloadResponse](docs/ArtifactDownloadResponse.md)
- [AssignMembershipPlanRequest](docs/AssignMembershipPlanRequest.md)
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
- [BridgeTargetFieldView](docs/BridgeTargetFieldView.md)
- [BridgeTargetObjectListResponse](docs/BridgeTargetObjectListResponse.md)
- [BridgeTargetObjectView](docs/BridgeTargetObjectView.md)
- [CaddieAvailability](docs/CaddieAvailability.md)
- [CaddieAvailabilityListResponse](docs/CaddieAvailabilityListResponse.md)
- [CaddieAvailabilityStatus](docs/CaddieAvailabilityStatus.md)
- [CaddieCourseMembership](docs/CaddieCourseMembership.md)
- [CaddieCourseMembershipListResponse](docs/CaddieCourseMembershipListResponse.md)
- [CancelExpiredResponse](docs/CancelExpiredResponse.md)
- [CancelReservationRequest](docs/CancelReservationRequest.md)
- [CancellationActorType](docs/CancellationActorType.md)
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
- [CloseCustomerClientAffiliationRequest](docs/CloseCustomerClientAffiliationRequest.md)
- [CloseReservationWaitlistEntryRequest](docs/CloseReservationWaitlistEntryRequest.md)
- [CompletePublicSigningInput](docs/CompletePublicSigningInput.md)
- [ConsumerConsentStateListResponse](docs/ConsumerConsentStateListResponse.md)
- [ConsumerConsentStateResponse](docs/ConsumerConsentStateResponse.md)
- [ConsumerCustomerCsvImportError](docs/ConsumerCustomerCsvImportError.md)
- [ConsumerCustomerCsvImportResponse](docs/ConsumerCustomerCsvImportResponse.md)
- [ContactPreferenceChannel](docs/ContactPreferenceChannel.md)
- [ContactPreferenceEntryRequest](docs/ContactPreferenceEntryRequest.md)
- [ContactPreferenceListResponse](docs/ContactPreferenceListResponse.md)
- [ContactPreferenceResponse](docs/ContactPreferenceResponse.md)
- [ContractLineItem](docs/ContractLineItem.md)
- [ConvertOrderToInvoiceResponse](docs/ConvertOrderToInvoiceResponse.md)
- [ConvertQuotationToInvoiceResponse](docs/ConvertQuotationToInvoiceResponse.md)
- [ConvertReservationWaitlistEntryRequest](docs/ConvertReservationWaitlistEntryRequest.md)
- [ConvertReservationWaitlistEntryResponse](docs/ConvertReservationWaitlistEntryResponse.md)
- [CouponResponse](docs/CouponResponse.md)
- [CrateOrderApiOrderItemResponse](docs/CrateOrderApiOrderItemResponse.md)
- [CrateOrderApiOrderResponse](docs/CrateOrderApiOrderResponse.md)
- [CreatableCustomFieldTypeWire](docs/CreatableCustomFieldTypeWire.md)
- [CreateActivityRequest](docs/CreateActivityRequest.md)
- [CreateApiKeyRequest](docs/CreateApiKeyRequest.md)
- [CreateApiKeyResponse](docs/CreateApiKeyResponse.md)
- [CreateApprovalFlowRequest](docs/CreateApprovalFlowRequest.md)
- [CreateBillingAccountRequest](docs/CreateBillingAccountRequest.md)
- [CreateCartRequest](docs/CreateCartRequest.md)
- [CreateConsumerCustomerRequest](docs/CreateConsumerCustomerRequest.md)
- [CreateCustomFieldDefinitionRequest](docs/CreateCustomFieldDefinitionRequest.md)
- [CreateCustomerClientAffiliationRequest](docs/CreateCustomerClientAffiliationRequest.md)
- [CreateCustomerContactRequest](docs/CreateCustomerContactRequest.md)
- [CreateCustomerCredentialRequest](docs/CreateCustomerCredentialRequest.md)
- [CreateCustomerRequest](docs/CreateCustomerRequest.md)
- [CreateCustomerSubjectRequest](docs/CreateCustomerSubjectRequest.md)
- [CreateDealRequest](docs/CreateDealRequest.md)
- [CreateExpenseRequest](docs/CreateExpenseRequest.md)
- [CreateHandoffNoteRequest](docs/CreateHandoffNoteRequest.md)
- [CreateInvoiceLineItemRequest](docs/CreateInvoiceLineItemRequest.md)
- [CreateInvoiceRequest](docs/CreateInvoiceRequest.md)
- [CreateMembershipConsentItemRequest](docs/CreateMembershipConsentItemRequest.md)
- [CreateMembershipEntitlementRequest](docs/CreateMembershipEntitlementRequest.md)
- [CreateMembershipPlanRequest](docs/CreateMembershipPlanRequest.md)
- [CreateOrderClientAddressRequest](docs/CreateOrderClientAddressRequest.md)
- [CreateOrderEntryPointRequest](docs/CreateOrderEntryPointRequest.md)
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
- [CreateReservationResourceRequest](docs/CreateReservationResourceRequest.md)
- [CreateReservationResponse](docs/CreateReservationResponse.md)
- [CreateReservationTypeRequest](docs/CreateReservationTypeRequest.md)
- [CreateReservationWaitlistEntryRequest](docs/CreateReservationWaitlistEntryRequest.md)
- [CreateReturnLineRequest](docs/CreateReturnLineRequest.md)
- [CreateReturnRequest](docs/CreateReturnRequest.md)
- [CreateSaasChangeRequestRequest](docs/CreateSaasChangeRequestRequest.md)
- [CreateSaasSubscriptionRequest](docs/CreateSaasSubscriptionRequest.md)
- [CreateSalesTaskRequest](docs/CreateSalesTaskRequest.md)
- [CreateScheduleRequest](docs/CreateScheduleRequest.md)
- [CreateSigningRequestInput](docs/CreateSigningRequestInput.md)
- [CreateSigningSignerInput](docs/CreateSigningSignerInput.md)
- [CreateStaffLeaveRequestRequest](docs/CreateStaffLeaveRequestRequest.md)
- [CreateStockOutboundRequest](docs/CreateStockOutboundRequest.md)
- [CreateStockOutboundResponse](docs/CreateStockOutboundResponse.md)
- [CreateStockTransferRequest](docs/CreateStockTransferRequest.md)
- [CreateStripeConnectOnboardingLinkRequest](docs/CreateStripeConnectOnboardingLinkRequest.md)
- [CreateVendorRequest](docs/CreateVendorRequest.md)
- [CreateWebhookEndpointRequest](docs/CreateWebhookEndpointRequest.md)
- [CreatedEntityResponse](docs/CreatedEntityResponse.md)
- [CurrencyTotalsResponse](docs/CurrencyTotalsResponse.md)
- [CustomFieldDefinitionListResponse](docs/CustomFieldDefinitionListResponse.md)
- [CustomFieldDefinitionResponse](docs/CustomFieldDefinitionResponse.md)
- [CustomFieldEntityType](docs/CustomFieldEntityType.md)
- [CustomFieldValuesResponse](docs/CustomFieldValuesResponse.md)
- [CustomerAddressRequest](docs/CustomerAddressRequest.md)
- [CustomerClientAffiliation](docs/CustomerClientAffiliation.md)
- [CustomerClientAffiliationListResponse](docs/CustomerClientAffiliationListResponse.md)
- [CustomerConsentResponse](docs/CustomerConsentResponse.md)
- [CustomerContactListResponse](docs/CustomerContactListResponse.md)
- [CustomerContactResponse](docs/CustomerContactResponse.md)
- [CustomerCredentialResponse](docs/CustomerCredentialResponse.md)
- [CustomerPurchaseSummaryListResponse](docs/CustomerPurchaseSummaryListResponse.md)
- [CustomerPurchaseSummaryResponse](docs/CustomerPurchaseSummaryResponse.md)
- [CustomerPurchaseSummaryRowResponse](docs/CustomerPurchaseSummaryRowResponse.md)
- [CustomerResponse](docs/CustomerResponse.md)
- [CustomerSubjectResponse](docs/CustomerSubjectResponse.md)
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
- [EmploymentStatus](docs/EmploymentStatus.md)
- [EmploymentType](docs/EmploymentType.md)
- [EnableExtensionRequest](docs/EnableExtensionRequest.md)
- [ErpCustomPolicyResponse](docs/ErpCustomPolicyResponse.md)
- [ErpRole](docs/ErpRole.md)
- [ErpUserListResponse](docs/ErpUserListResponse.md)
- [ErpUserResponse](docs/ErpUserResponse.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [EvaluateFeatureFlagsRequest](docs/EvaluateFeatureFlagsRequest.md)
- [EvaluateFeatureFlagsResponse](docs/EvaluateFeatureFlagsResponse.md)
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
- [FeatureFlagValue](docs/FeatureFlagValue.md)
- [FieldErpMasterCatalog](docs/FieldErpMasterCatalog.md)
- [FieldErpMasterItem](docs/FieldErpMasterItem.md)
- [ForecastBucket](docs/ForecastBucket.md)
- [ForecastResponse](docs/ForecastResponse.md)
- [FulfillmentMethodResponse](docs/FulfillmentMethodResponse.md)
- [GenerateResourceTimeSlotsRequest](docs/GenerateResourceTimeSlotsRequest.md)
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
- [GolfPolicyHooksStatus](docs/GolfPolicyHooksStatus.md)
- [GolfPolicyWarning](docs/GolfPolicyWarning.md)
- [GolfProductSlot](docs/GolfProductSlot.md)
- [GolfProductSlotBody](docs/GolfProductSlotBody.md)
- [GolfProductSlotListResponse](docs/GolfProductSlotListResponse.md)
- [GolfReservationPolicy](docs/GolfReservationPolicy.md)
- [GolfReservationProduct](docs/GolfReservationProduct.md)
- [GolfReservationProductListResponse](docs/GolfReservationProductListResponse.md)
- [GolfResourceKind](docs/GolfResourceKind.md)
- [GolfUnpaidCancellationItem](docs/GolfUnpaidCancellationItem.md)
- [HandoffNote](docs/HandoffNote.md)
- [HandoffNoteAuthorType](docs/HandoffNoteAuthorType.md)
- [HandoffNoteListResponse](docs/HandoffNoteListResponse.md)
- [ImportProductSlotsRequest](docs/ImportProductSlotsRequest.md)
- [ImportProductSlotsResponse](docs/ImportProductSlotsResponse.md)
- [InspectionDispositionLineRequest](docs/InspectionDispositionLineRequest.md)
- [InspectionDispositionRequest](docs/InspectionDispositionRequest.md)
- [InventoryLocationListResponse](docs/InventoryLocationListResponse.md)
- [InventoryLocationResponse](docs/InventoryLocationResponse.md)
- [InventoryValuationListResponse](docs/InventoryValuationListResponse.md)
- [InventoryValuationResponse](docs/InventoryValuationResponse.md)
- [InvitationDeliveryStatus](docs/InvitationDeliveryStatus.md)
- [InviteErpUserRequest](docs/InviteErpUserRequest.md)
- [InviteErpUserResponse](docs/InviteErpUserResponse.md)
- [InvoiceBillToEvidenceResponse](docs/InvoiceBillToEvidenceResponse.md)
- [InvoiceBillToEvidenceResponseOneOf](docs/InvoiceBillToEvidenceResponseOneOf.md)
- [InvoiceBillToEvidenceResponseOneOf1](docs/InvoiceBillToEvidenceResponseOneOf1.md)
- [InvoiceBillToRequest](docs/InvoiceBillToRequest.md)
- [InvoiceBillToRequestOneOf](docs/InvoiceBillToRequestOneOf.md)
- [InvoiceBillToRequestOneOf1](docs/InvoiceBillToRequestOneOf1.md)
- [InvoiceBillToRequestOneOf2](docs/InvoiceBillToRequestOneOf2.md)
- [InvoiceBillToResponse](docs/InvoiceBillToResponse.md)
- [InvoiceBillToResponseOneOf](docs/InvoiceBillToResponseOneOf.md)
- [InvoiceBillToResponseOneOf1](docs/InvoiceBillToResponseOneOf1.md)
- [InvoiceBillToResponseOneOf2](docs/InvoiceBillToResponseOneOf2.md)
- [InvoiceBillToResponseOneOf3](docs/InvoiceBillToResponseOneOf3.md)
- [InvoiceLineItemResponse](docs/InvoiceLineItemResponse.md)
- [InvoiceListResponse](docs/InvoiceListResponse.md)
- [InvoiceResponse](docs/InvoiceResponse.md)
- [InvoiceVoidEligibilityResponse](docs/InvoiceVoidEligibilityResponse.md)
- [InvoiceVoidErrorResponse](docs/InvoiceVoidErrorResponse.md)
- [InvoiceVoidPeriodResponse](docs/InvoiceVoidPeriodResponse.md)
- [IssueReservationBillingLinkRequest](docs/IssueReservationBillingLinkRequest.md)
- [IssueReservationBillingLinkResponse](docs/IssueReservationBillingLinkResponse.md)
- [IssueReservationSquareInvoiceResponse](docs/IssueReservationSquareInvoiceResponse.md)
- [LatestCustomerContactListResponse](docs/LatestCustomerContactListResponse.md)
- [LatestCustomerContactLookupRequest](docs/LatestCustomerContactLookupRequest.md)
- [LatestCustomerContactResponse](docs/LatestCustomerContactResponse.md)
- [LeaveRequestStatus](docs/LeaveRequestStatus.md)
- [LeaveRequestType](docs/LeaveRequestType.md)
- [LowStockAlertListResponse](docs/LowStockAlertListResponse.md)
- [LowStockAlertResponse](docs/LowStockAlertResponse.md)
- [MembershipActivityActorResponse](docs/MembershipActivityActorResponse.md)
- [MembershipActivityListResponse](docs/MembershipActivityListResponse.md)
- [MembershipActivityResponse](docs/MembershipActivityResponse.md)
- [MembershipActivitySourceResponse](docs/MembershipActivitySourceResponse.md)
- [MembershipActivityTargetResponse](docs/MembershipActivityTargetResponse.md)
- [MembershipConsentItemListResponse](docs/MembershipConsentItemListResponse.md)
- [MembershipConsentItemResponse](docs/MembershipConsentItemResponse.md)
- [MembershipCustomerResponse](docs/MembershipCustomerResponse.md)
- [MembershipCustomerViewResponse](docs/MembershipCustomerViewResponse.md)
- [MembershipEntitlementListResponse](docs/MembershipEntitlementListResponse.md)
- [MembershipEntitlementResponse](docs/MembershipEntitlementResponse.md)
- [MembershipOfferingListResponse](docs/MembershipOfferingListResponse.md)
- [MembershipOfferingResponse](docs/MembershipOfferingResponse.md)
- [MembershipPlanAssignmentResponse](docs/MembershipPlanAssignmentResponse.md)
- [MembershipPlanListResponse](docs/MembershipPlanListResponse.md)
- [MembershipPlanResponse](docs/MembershipPlanResponse.md)
- [MembershipRosterEntryResponse](docs/MembershipRosterEntryResponse.md)
- [MembershipRosterResponse](docs/MembershipRosterResponse.md)
- [MembershipSaleResponse](docs/MembershipSaleResponse.md)
- [MessageResponse](docs/MessageResponse.md)
- [OkResponse](docs/OkResponse.md)
- [OperatorBillingAccountResponse](docs/OperatorBillingAccountResponse.md)
- [OrderEntryPointResponse](docs/OrderEntryPointResponse.md)
- [OrderEntryPointWithTokenResponse](docs/OrderEntryPointWithTokenResponse.md)
- [OrderItemResponse](docs/OrderItemResponse.md)
- [OrderListResponse](docs/OrderListResponse.md)
- [OrderProductListResponse](docs/OrderProductListResponse.md)
- [OrderProductOptionGroupRequest](docs/OrderProductOptionGroupRequest.md)
- [OrderProductOptionRequest](docs/OrderProductOptionRequest.md)
- [OrderProductVariantListResponse](docs/OrderProductVariantListResponse.md)
- [OrderProductVariationRequest](docs/OrderProductVariationRequest.md)
- [OrderResponse](docs/OrderResponse.md)
- [OrderSessionResponse](docs/OrderSessionResponse.md)
- [PaymentIntent](docs/PaymentIntent.md)
- [PaymentIntentStatus](docs/PaymentIntentStatus.md)
- [PayoutReportItemResponse](docs/PayoutReportItemResponse.md)
- [PayoutReportResponse](docs/PayoutReportResponse.md)
- [PlacePublicOrderRequest](docs/PlacePublicOrderRequest.md)
- [ProductOptionGroupResponse](docs/ProductOptionGroupResponse.md)
- [ProductOptionResponse](docs/ProductOptionResponse.md)
- [ProductResponse](docs/ProductResponse.md)
- [ProductRestResponse](docs/ProductRestResponse.md)
- [ProductSelectionsResponse](docs/ProductSelectionsResponse.md)
- [ProductVariantOptionResponse](docs/ProductVariantOptionResponse.md)
- [ProductVariantRestResponse](docs/ProductVariantRestResponse.md)
- [ProfileResponse](docs/ProfileResponse.md)
- [ProfileTenant](docs/ProfileTenant.md)
- [ProfileTenantExtension](docs/ProfileTenantExtension.md)
- [ProfileUser](docs/ProfileUser.md)
- [PublicAddCartItemRequest](docs/PublicAddCartItemRequest.md)
- [PublicCartItemResponse](docs/PublicCartItemResponse.md)
- [PublicCartResponse](docs/PublicCartResponse.md)
- [PublicCheckoutRequest](docs/PublicCheckoutRequest.md)
- [PublicCouponPreviewRequest](docs/PublicCouponPreviewRequest.md)
- [PublicCouponPreviewResponse](docs/PublicCouponPreviewResponse.md)
- [PublicCustomFieldDefinitionListResponse](docs/PublicCustomFieldDefinitionListResponse.md)
- [PublicCustomFieldDefinitionResponse](docs/PublicCustomFieldDefinitionResponse.md)
- [PublicInvoiceCheckoutResponse](docs/PublicInvoiceCheckoutResponse.md)
- [PublicInvoicePaymentConfirmationRequest](docs/PublicInvoicePaymentConfirmationRequest.md)
- [PublicInvoicePaymentConfirmationResponse](docs/PublicInvoicePaymentConfirmationResponse.md)
- [PublicInvoicePaymentIntentResponse](docs/PublicInvoicePaymentIntentResponse.md)
- [PublicInvoiceResponse](docs/PublicInvoiceResponse.md)
- [PublicInvoiceStripePublishableKeyResponse](docs/PublicInvoiceStripePublishableKeyResponse.md)
- [PublicMembershipConsentItemResponse](docs/PublicMembershipConsentItemResponse.md)
- [PublicMembershipRegistrationFormResponse](docs/PublicMembershipRegistrationFormResponse.md)
- [PublicMembershipRegistrationRequest](docs/PublicMembershipRegistrationRequest.md)
- [PublicMembershipRegistrationResponse](docs/PublicMembershipRegistrationResponse.md)
- [PublicOrderEntryPointResponse](docs/PublicOrderEntryPointResponse.md)
- [PublicOrderItemResponse](docs/PublicOrderItemResponse.md)
- [PublicOrderLine](docs/PublicOrderLine.md)
- [PublicOrderLookupRequest](docs/PublicOrderLookupRequest.md)
- [PublicOrderLookupResponse](docs/PublicOrderLookupResponse.md)
- [PublicOrderMenuResponse](docs/PublicOrderMenuResponse.md)
- [PublicOrderResponse](docs/PublicOrderResponse.md)
- [PublicProductResponse](docs/PublicProductResponse.md)
- [PublicRegistrationConsentRequest](docs/PublicRegistrationConsentRequest.md)
- [PublicRegistrationCustomerRequest](docs/PublicRegistrationCustomerRequest.md)
- [PublicRegistrationSubjectRequest](docs/PublicRegistrationSubjectRequest.md)
- [PublicSelectedOptionResponse](docs/PublicSelectedOptionResponse.md)
- [PublicSigningDocumentResponse](docs/PublicSigningDocumentResponse.md)
- [PublicSigningErrorResponse](docs/PublicSigningErrorResponse.md)
- [PublicSigningSessionResponse](docs/PublicSigningSessionResponse.md)
- [PublicSigningSignerResponse](docs/PublicSigningSignerResponse.md)
- [PublicSigningValueInput](docs/PublicSigningValueInput.md)
- [PublicUpdateCartItemRequest](docs/PublicUpdateCartItemRequest.md)
- [PurchaseOrderItemResponse](docs/PurchaseOrderItemResponse.md)
- [PurchaseOrderListResponse](docs/PurchaseOrderListResponse.md)
- [PurchaseOrderResponse](docs/PurchaseOrderResponse.md)
- [PurgeResourceTimeSlotsResponse](docs/PurgeResourceTimeSlotsResponse.md)
- [PurgeResourceTimeSlotsResult](docs/PurgeResourceTimeSlotsResult.md)
- [PutReservationScheduleDateOverrideRequest](docs/PutReservationScheduleDateOverrideRequest.md)
- [PutReservationScheduleLocationRequest](docs/PutReservationScheduleLocationRequest.md)
- [QuotationItemResponse](docs/QuotationItemResponse.md)
- [QuotationListResponse](docs/QuotationListResponse.md)
- [QuotationPdfResponse](docs/QuotationPdfResponse.md)
- [QuotationResponse](docs/QuotationResponse.md)
- [ReceptionFieldKey](docs/ReceptionFieldKey.md)
- [ReceptionFieldListResponse](docs/ReceptionFieldListResponse.md)
- [ReceptionFieldResponse](docs/ReceptionFieldResponse.md)
- [ReceptionFieldSettingRequest](docs/ReceptionFieldSettingRequest.md)
- [ReconcileSquarePaymentRequest](docs/ReconcileSquarePaymentRequest.md)
- [RecordConsumerConsentsRequest](docs/RecordConsumerConsentsRequest.md)
- [RecordContactPreferencesRequest](docs/RecordContactPreferencesRequest.md)
- [RecordCustomerConsentsRequest](docs/RecordCustomerConsentsRequest.md)
- [RegisterExtensionRequest](docs/RegisterExtensionRequest.md)
- [RegisterMembershipRequest](docs/RegisterMembershipRequest.md)
- [RegistrationAddressRequest](docs/RegistrationAddressRequest.md)
- [RegistrationConsentRequest](docs/RegistrationConsentRequest.md)
- [RegistrationCredentialRequest](docs/RegistrationCredentialRequest.md)
- [RegistrationCustomerRequest](docs/RegistrationCustomerRequest.md)
- [RegistrationSubjectRequest](docs/RegistrationSubjectRequest.md)
- [RejectExpenseRequest](docs/RejectExpenseRequest.md)
- [ReleasePaymentHoldsRequest](docs/ReleasePaymentHoldsRequest.md)
- [ReleasePaymentHoldsResult](docs/ReleasePaymentHoldsResult.md)
- [ReleasePaymentIntentHoldRequest](docs/ReleasePaymentIntentHoldRequest.md)
- [ReplaceCaddieCourseMembershipsRequest](docs/ReplaceCaddieCourseMembershipsRequest.md)
- [ReplaceGolfProductSlotsRequest](docs/ReplaceGolfProductSlotsRequest.md)
- [ReplaceReceptionFieldsRequest](docs/ReplaceReceptionFieldsRequest.md)
- [ReplaceReservationProductSlotsRequest](docs/ReplaceReservationProductSlotsRequest.md)
- [ReplaceReservationResourceScheduleRequest](docs/ReplaceReservationResourceScheduleRequest.md)
- [ReplenishmentPolicyResponse](docs/ReplenishmentPolicyResponse.md)
- [ResendPaymentLinkRequest](docs/ResendPaymentLinkRequest.md)
- [Reservation](docs/Reservation.md)
- [ReservationAvailabilityRuleRequest](docs/ReservationAvailabilityRuleRequest.md)
- [ReservationAvailabilityRuleResponse](docs/ReservationAvailabilityRuleResponse.md)
- [ReservationBillTo](docs/ReservationBillTo.md)
- [ReservationBillToOneOf](docs/ReservationBillToOneOf.md)
- [ReservationBillToOneOf1](docs/ReservationBillToOneOf1.md)
- [ReservationBillToRequest](docs/ReservationBillToRequest.md)
- [ReservationBillToRequestOneOf](docs/ReservationBillToRequestOneOf.md)
- [ReservationCancellationEvent](docs/ReservationCancellationEvent.md)
- [ReservationCancellationListResponse](docs/ReservationCancellationListResponse.md)
- [ReservationListResponse](docs/ReservationListResponse.md)
- [ReservationNotificationTemplateContent](docs/ReservationNotificationTemplateContent.md)
- [ReservationNotificationTemplatesResponse](docs/ReservationNotificationTemplatesResponse.md)
- [ReservationPaymentStatus](docs/ReservationPaymentStatus.md)
- [ReservationProductCatalogItem](docs/ReservationProductCatalogItem.md)
- [ReservationProductCatalogListResponse](docs/ReservationProductCatalogListResponse.md)
- [ReservationProductListResponse](docs/ReservationProductListResponse.md)
- [ReservationProductSlot](docs/ReservationProductSlot.md)
- [ReservationProductSlotListResponse](docs/ReservationProductSlotListResponse.md)
- [ReservationResource](docs/ReservationResource.md)
- [ReservationResourceListResponse](docs/ReservationResourceListResponse.md)
- [ReservationResourceResponse](docs/ReservationResourceResponse.md)
- [ReservationResourceScheduleResponse](docs/ReservationResourceScheduleResponse.md)
- [ReservationResourceType](docs/ReservationResourceType.md)
- [ReservationScheduleDateOverride](docs/ReservationScheduleDateOverride.md)
- [ReservationScheduleDateOverrideListResponse](docs/ReservationScheduleDateOverrideListResponse.md)
- [ReservationScheduleLocationResponse](docs/ReservationScheduleLocationResponse.md)
- [ReservationStatus](docs/ReservationStatus.md)
- [ReservationStatusLookupRequest](docs/ReservationStatusLookupRequest.md)
- [ReservationStatusLookupResponse](docs/ReservationStatusLookupResponse.md)
- [ReservationStatusSnapshot](docs/ReservationStatusSnapshot.md)
- [ReservationType](docs/ReservationType.md)
- [ReservationTypeListResponse](docs/ReservationTypeListResponse.md)
- [ReservationWaitlistCandidate](docs/ReservationWaitlistCandidate.md)
- [ReservationWaitlistEntry](docs/ReservationWaitlistEntry.md)
- [ReservationWaitlistListResponse](docs/ReservationWaitlistListResponse.md)
- [ReservationWaitlistStatus](docs/ReservationWaitlistStatus.md)
- [ResourceListResponse](docs/ResourceListResponse.md)
- [ResourceTimeSlot](docs/ResourceTimeSlot.md)
- [ResourceTimeSlotGenerationResponse](docs/ResourceTimeSlotGenerationResponse.md)
- [ResourceTimeSlotGenerationResult](docs/ResourceTimeSlotGenerationResult.md)
- [ResourceTimeSlotListResponse](docs/ResourceTimeSlotListResponse.md)
- [RetractHandoffNoteRequest](docs/RetractHandoffNoteRequest.md)
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
- [SaveReservationNotificationTemplatesRequest](docs/SaveReservationNotificationTemplatesRequest.md)
- [SaveReservationProductRequest](docs/SaveReservationProductRequest.md)
- [SaveReservationStaffAssignmentRequest](docs/SaveReservationStaffAssignmentRequest.md)
- [SaveStaffAssignmentRequest](docs/SaveStaffAssignmentRequest.md)
- [SaveStaffCompensationProfileRequest](docs/SaveStaffCompensationProfileRequest.md)
- [SaveStaffMemberRequest](docs/SaveStaffMemberRequest.md)
- [SaveStaffProfileRequest](docs/SaveStaffProfileRequest.md)
- [SaveStaffShiftPreferenceRequest](docs/SaveStaffShiftPreferenceRequest.md)
- [SaveStaffShiftRequest](docs/SaveStaffShiftRequest.md)
- [SaveStaffSkillProfileRequest](docs/SaveStaffSkillProfileRequest.md)
- [SaveStoreRequest](docs/SaveStoreRequest.md)
- [SaveStorefrontProfileRequest](docs/SaveStorefrontProfileRequest.md)
- [SaveWarehouseRequest](docs/SaveWarehouseRequest.md)
- [ScheduleDateOverrideKind](docs/ScheduleDateOverrideKind.md)
- [ScheduleDateOverrideWindow](docs/ScheduleDateOverrideWindow.md)
- [ScheduleDateOverrideWindowRequest](docs/ScheduleDateOverrideWindowRequest.md)
- [ScheduleLineItemRequest](docs/ScheduleLineItemRequest.md)
- [ScheduleListResponse](docs/ScheduleListResponse.md)
- [ScheduleLocationScope](docs/ScheduleLocationScope.md)
- [ScheduleResponse](docs/ScheduleResponse.md)
- [ScheduleSourceKind](docs/ScheduleSourceKind.md)
- [SeedReservationProductsRequest](docs/SeedReservationProductsRequest.md)
- [SeedReservationProductsResponse](docs/SeedReservationProductsResponse.md)
- [SelectPickupDatetimeRequest](docs/SelectPickupDatetimeRequest.md)
- [SelectedOptionResponse](docs/SelectedOptionResponse.md)
- [SendReservationNotificationRequest](docs/SendReservationNotificationRequest.md)
- [SendReservationNotificationResponse](docs/SendReservationNotificationResponse.md)
- [SendSigningRequestResponse](docs/SendSigningRequestResponse.md)
- [SetCustomFieldValuesRequest](docs/SetCustomFieldValuesRequest.md)
- [SigningArtifactResponse](docs/SigningArtifactResponse.md)
- [SigningEventResponse](docs/SigningEventResponse.md)
- [SigningFieldDefinition](docs/SigningFieldDefinition.md)
- [SigningRequestDetailResponse](docs/SigningRequestDetailResponse.md)
- [SigningRequestListResponse](docs/SigningRequestListResponse.md)
- [SigningRequestSummary](docs/SigningRequestSummary.md)
- [SigningSignerResponse](docs/SigningSignerResponse.md)
- [SigningValueResponse](docs/SigningValueResponse.md)
- [SmsStatus](docs/SmsStatus.md)
- [SolarBoundary](docs/SolarBoundary.md)
- [SolarEventKind](docs/SolarEventKind.md)
- [SolarWindow](docs/SolarWindow.md)
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
- [StaffWorkloadListResponse](docs/StaffWorkloadListResponse.md)
- [StageSettingItem](docs/StageSettingItem.md)
- [StageSettingsResponse](docs/StageSettingsResponse.md)
- [StartOrderSessionRequest](docs/StartOrderSessionRequest.md)
- [StartOrderSessionResponse](docs/StartOrderSessionResponse.md)
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
- [StoreKitListPublicProductResponse](docs/StoreKitListPublicProductResponse.md)
- [StoreKitListPublicProductResponseItemsInner](docs/StoreKitListPublicProductResponseItemsInner.md)
- [StoreListResponse](docs/StoreListResponse.md)
- [StoreResponse](docs/StoreResponse.md)
- [StorefrontAvailabilityCalendarResponse](docs/StorefrontAvailabilityCalendarResponse.md)
- [StorefrontAvailabilityDay](docs/StorefrontAvailabilityDay.md)
- [StorefrontCreateReservationRequest](docs/StorefrontCreateReservationRequest.md)
- [StorefrontDayAvailability](docs/StorefrontDayAvailability.md)
- [StorefrontLogo](docs/StorefrontLogo.md)
- [StorefrontMembershipPlan](docs/StorefrontMembershipPlan.md)
- [StorefrontMembershipPlanListResponse](docs/StorefrontMembershipPlanListResponse.md)
- [StorefrontProfileResponse](docs/StorefrontProfileResponse.md)
- [StorefrontResourceTimeSlotListResponse](docs/StorefrontResourceTimeSlotListResponse.md)
- [StorefrontUpdateReservationRequest](docs/StorefrontUpdateReservationRequest.md)
- [StripeConnectAccountResponse](docs/StripeConnectAccountResponse.md)
- [StripeConnectOnboardingLinkResponse](docs/StripeConnectOnboardingLinkResponse.md)
- [SummaryPeriodResponse](docs/SummaryPeriodResponse.md)
- [TabularAnalyzeResponse](docs/TabularAnalyzeResponse.md)
- [TabularMappingFieldResponse](docs/TabularMappingFieldResponse.md)
- [TabularMappingResponse](docs/TabularMappingResponse.md)
- [TabularRowResponse](docs/TabularRowResponse.md)
- [TabularTargetFieldRequest](docs/TabularTargetFieldRequest.md)
- [TenantExtension](docs/TenantExtension.md)
- [TenantExtensionListResponse](docs/TenantExtensionListResponse.md)
- [TenantExtensionStatus](docs/TenantExtensionStatus.md)
- [TenantExtensionStatusListResponse](docs/TenantExtensionStatusListResponse.md)
- [TenantExtensionStatusView](docs/TenantExtensionStatusView.md)
- [UpdateApprovalFlowRequest](docs/UpdateApprovalFlowRequest.md)
- [UpdateBillingAccountRequest](docs/UpdateBillingAccountRequest.md)
- [UpdateCartItemRequest](docs/UpdateCartItemRequest.md)
- [UpdateCustomFieldDefinitionRequest](docs/UpdateCustomFieldDefinitionRequest.md)
- [UpdateCustomerClientAffiliationRequest](docs/UpdateCustomerClientAffiliationRequest.md)
- [UpdateCustomerContactRequest](docs/UpdateCustomerContactRequest.md)
- [UpdateCustomerCredentialRequest](docs/UpdateCustomerCredentialRequest.md)
- [UpdateCustomerRequest](docs/UpdateCustomerRequest.md)
- [UpdateCustomerSubjectRequest](docs/UpdateCustomerSubjectRequest.md)
- [UpdateDealRequest](docs/UpdateDealRequest.md)
- [UpdateErpUserPoliciesRequest](docs/UpdateErpUserPoliciesRequest.md)
- [UpdateErpUserRoleRequest](docs/UpdateErpUserRoleRequest.md)
- [UpdateExpenseRequest](docs/UpdateExpenseRequest.md)
- [UpdateExtensionConfigRequest](docs/UpdateExtensionConfigRequest.md)
- [UpdateGolfReservationPolicyRequest](docs/UpdateGolfReservationPolicyRequest.md)
- [UpdateInvoiceFollowUpStatusRequest](docs/UpdateInvoiceFollowUpStatusRequest.md)
- [UpdateInvoiceRequest](docs/UpdateInvoiceRequest.md)
- [UpdateLowStockDecisionRequest](docs/UpdateLowStockDecisionRequest.md)
- [UpdateMembershipConsentItemRequest](docs/UpdateMembershipConsentItemRequest.md)
- [UpdateMembershipEntitlementRequest](docs/UpdateMembershipEntitlementRequest.md)
- [UpdateMembershipPlanRequest](docs/UpdateMembershipPlanRequest.md)
- [UpdateOrderEntryPointRequest](docs/UpdateOrderEntryPointRequest.md)
- [UpdateOrderProductRequest](docs/UpdateOrderProductRequest.md)
- [UpdateOrderProductVariationRequest](docs/UpdateOrderProductVariationRequest.md)
- [UpdateOrderRequest](docs/UpdateOrderRequest.md)
- [UpdatePurchaseOrderRequest](docs/UpdatePurchaseOrderRequest.md)
- [UpdateQuotationRequest](docs/UpdateQuotationRequest.md)
- [UpdateReservationRequest](docs/UpdateReservationRequest.md)
- [UpdateReservationResourceRequest](docs/UpdateReservationResourceRequest.md)
- [UpdateReservationTypeRequest](docs/UpdateReservationTypeRequest.md)
- [UpdateSaasSubscriptionRequest](docs/UpdateSaasSubscriptionRequest.md)
- [UpdateSalesTaskRequest](docs/UpdateSalesTaskRequest.md)
- [UpdateScheduleRequest](docs/UpdateScheduleRequest.md)
- [UpdateStaffMemberRequest](docs/UpdateStaffMemberRequest.md)
- [UpdateStaffShiftRequest](docs/UpdateStaffShiftRequest.md)
- [UpdateStageSettingsRequest](docs/UpdateStageSettingsRequest.md)
- [UpdateVendorRequest](docs/UpdateVendorRequest.md)
- [UpdateWebhookEndpointRequest](docs/UpdateWebhookEndpointRequest.md)
- [UpsertCategoryRequest](docs/UpsertCategoryRequest.md)
- [UpsertReplenishmentPolicyRequest](docs/UpsertReplenishmentPolicyRequest.md)
- [ValidateCouponRequest](docs/ValidateCouponRequest.md)
- [VendorListResponse](docs/VendorListResponse.md)
- [VendorResponse](docs/VendorResponse.md)
- [VoidInvoiceRequest](docs/VoidInvoiceRequest.md)
- [VoidInvoiceResponse](docs/VoidInvoiceResponse.md)
- [WarehouseListResponse](docs/WarehouseListResponse.md)
- [WarehouseResponse](docs/WarehouseResponse.md)
- [WebhookDeliveryResponse](docs/WebhookDeliveryResponse.md)
- [WebhookEndpointResponse](docs/WebhookEndpointResponse.md)
- [WebhookEndpointWithSecretResponse](docs/WebhookEndpointWithSecretResponse.md)
- [WebhookTestResponse](docs/WebhookTestResponse.md)

### Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
#### bearerAuth


- **Type**: HTTP Bearer Token authentication
<a id="cognitoBearer"></a>
#### cognitoBearer


- **Type**: HTTP Bearer Token authentication (JWT)
<a id="signingCapability"></a>
#### signingCapability


- **Type**: API key
- **API key parameter name**: `Authorization`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.1.25`
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
