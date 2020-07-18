$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ELSC_0l9.feature");
formatter.feature({
  "line": 2,
  "name": "I want to automate elsc 019 test case using data parameters and excel data",
  "description": "To verify whether application allows admin to create training session based on the created sessions categories list",
  "id": "i-want-to-automate-elsc-019-test-case-using-data-parameters-and-excel-data",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ELSC_019"
    }
  ]
});
formatter.scenario({
  "line": 33,
  "name": "Create session using data from excel",
  "description": "",
  "id": "i-want-to-automate-elsc-019-test-case-using-data-parameters-and-excel-data;create-session-using-data-from-excel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@My_assignment_Excel"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I open the browser and enter the url \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I enter User name",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "# Go to Administration tab and  add Category"
    }
  ],
  "line": 39,
  "name": "I click on Administration tab",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I click on Sessions categories list link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on Add category icon",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I enter Category name",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on Add category Button",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I click on Session list Link",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on add training icon",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I enter Session name",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select Coach name",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on advanced settings button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I select My session from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I click on NextStep Button",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I select Course from Courselist window",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I click on arrow button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on next step button",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I Enter and select Student name in Portal users list",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click on Finish session creation button",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I verify Success text",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/",
      "offset": 38
    }
  ],
  "location": "ELSC_019_stepdefinitions.i_open_the_browser_and_enter_the_url(String)"
});
formatter.result({
  "duration": 11647966900,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_enter_User_name()"
});
formatter.result({
  "duration": 152145300,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_enter_password()"
});
formatter.result({
  "duration": 214223700,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Login_button()"
});
formatter.result({
  "duration": 3025598800,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Administration_tab()"
});
formatter.result({
  "duration": 768273700,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Sessions_categories_list_link()"
});
formatter.result({
  "duration": 946065200,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Add_category_icon()"
});
formatter.result({
  "duration": 787799900,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_enter_Category_name()"
});
formatter.result({
  "duration": 1041365300,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Add_category_Button()"
});
formatter.result({
  "duration": 1038614500,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Session_list_Link()"
});
formatter.result({
  "duration": 2794607800,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_add_training_icon()"
});
formatter.result({
  "duration": 4850854000,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_enter_Session_name()"
});
formatter.result({
  "duration": 402308300,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_select_Coach_name()"
});
formatter.result({
  "duration": 5495476700,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_advanced_settings_button()"
});
formatter.result({
  "duration": 117722900,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_select_My_session_from_dropdown()"
});
formatter.result({
  "duration": 608835900,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_NextStep_Button()"
});
formatter.result({
  "duration": 3072209000,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_select_Course_from_Courselist_window()"
});
formatter.result({
  "duration": 198096700,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_arrow_button()"
});
formatter.result({
  "duration": 130158900,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_next_step_button()"
});
formatter.result({
  "duration": 1592956300,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_Enter_Student_name_in_Portal_users_list()"
});
formatter.result({
  "duration": 5357616000,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Finish_session_creation_button()"
});
formatter.result({
  "duration": 11990920100,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.I_verify_Success_text()"
});
formatter.result({
  "duration": 54440500,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.I_close_the_browser()"
});
formatter.result({
  "duration": 830279700,
  "status": "passed"
});
});