$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ELSC_0l9.feature");
formatter.feature({
  "line": 2,
  "name": "I want automate elsc 019 test case",
  "description": "To verify whether application allows admin to create training session based on the created sessions categories list",
  "id": "i-want-automate-elsc-019-test-case",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ELSC_019"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Create a session",
  "description": "",
  "id": "i-want-automate-elsc-019-test-case;create-a-session",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@My_assignment"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open the browser and enter the url \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter User name",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# Go to Administration tab and  add Category"
    }
  ],
  "line": 12,
  "name": "I click on Administration tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on Sessions categories list link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Add category icon",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter Category name \"ELSC_019\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add category Button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on Session list Link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add training icon",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter Session name \"ELSC019_s7\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Coach name \"Roshan\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on advanced settings button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select My session from dropdown \"ELSC_019\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on NextStep Button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select Course from Courselist window",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on arrow button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on next step button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I Enter and select Student name in Portal users list \"Manipal\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on Finish session creation button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I verify Success text",
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 14181678400,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_enter_User_name()"
});
formatter.result({
  "duration": 171815800,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_enter_password()"
});
formatter.result({
  "duration": 157529400,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Login_button()"
});
formatter.result({
  "duration": 11153467000,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Administration_tab()"
});
formatter.result({
  "duration": 878000800,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Sessions_categories_list_link()"
});
formatter.result({
  "duration": 2643503600,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Add_category_icon()"
});
formatter.result({
  "duration": 1395535300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ELSC_019",
      "offset": 23
    }
  ],
  "location": "ELSC_019_stepdefinitions.i_enter_Category_name(String)"
});
formatter.result({
  "duration": 188076700,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Add_category_Button()"
});
formatter.result({
  "duration": 1414987700,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Session_list_Link()"
});
formatter.result({
  "duration": 8088358000,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_add_training_icon()"
});
formatter.result({
  "duration": 11052194800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ELSC019_s7",
      "offset": 22
    }
  ],
  "location": "ELSC_019_stepdefinitions.i_enter_Session_name(String)"
});
formatter.result({
  "duration": 264311400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roshan",
      "offset": 21
    }
  ],
  "location": "ELSC_019_stepdefinitions.i_select_Coach_name(String)"
});
formatter.result({
  "duration": 5443495800,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_advanced_settings_button()"
});
formatter.result({
  "duration": 97778300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ELSC_019",
      "offset": 35
    }
  ],
  "location": "ELSC_019_stepdefinitions.I_select_My_session_from_dropdown(String)"
});
formatter.result({
  "duration": 532174800,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_NextStep_Button()"
});
formatter.result({
  "duration": 3864771300,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_select_Course_from_Courselist_window()"
});
formatter.result({
  "duration": 247794400,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_arrow_button()"
});
formatter.result({
  "duration": 160717300,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_next_step_button()"
});
formatter.result({
  "duration": 1791826900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manipal",
      "offset": 54
    }
  ],
  "location": "ELSC_019_stepdefinitions.i_Enter_and_select_Student_name_in_Portal_users_list(String)"
});
formatter.result({
  "duration": 5342812900,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.i_click_on_Finish_session_creation_button()"
});
formatter.result({
  "duration": 13649924400,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.I_verify_Success_text()"
});
formatter.result({
  "duration": 70532300,
  "status": "passed"
});
formatter.match({
  "location": "ELSC_019_stepdefinitions.I_close_the_browser()"
});
formatter.result({
  "duration": 894012100,
  "status": "passed"
});
});