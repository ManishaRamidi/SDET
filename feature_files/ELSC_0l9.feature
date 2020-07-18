@ELSC_019
Feature: I want to automate elsc 019 test case using data parameters and excel data
  To verify whether application allows admin to create training session based on the created sessions categories list

  @My_assignment
  Scenario: Create a session 
    Given I open the browser and enter the url "http://elearningm1.upskills.in/"
    When I enter User name 
    And I enter password 
    Then I click on Login button 
 # Go to Administration tab and  add Category
    When I click on Administration tab
    And I click on Sessions categories list link
    Then I click on Add category icon
    And I enter Category name "ELSC_019"
    Then I click on Add category Button
    And I click on Session list Link
    Then I click on add training icon
    And I enter Session name "ELSC019_s8"
    And I select Coach name "Roshan"
    And I click on advanced settings button
    Then I select My session from dropdown "ELSC_019"
    When I click on NextStep Button
    Then I select Course from Courselist window
    And I click on arrow button
    Then I click on next step button
    When I Enter and select Student name in Portal users list "Manipal"
    Then I click on Finish session creation button
    And I verify Success text
    Then I close the browser
    
  @My_assignment_Excel
  Scenario: Create session using data from excel
  Given I open the browser and enter the url "http://elearningm1.upskills.in/"
    When I enter User name 
    And I enter password 
    Then I click on Login button 
 # Go to Administration tab and  add Category
    When I click on Administration tab
    And I click on Sessions categories list link
    Then I click on Add category icon
    And I enter Category name 
    Then I click on Add category Button
    And I click on Session list Link
    Then I click on add training icon
    And I enter Session name 
    And I select Coach name 
    And I click on advanced settings button
    Then I select My session from dropdown
    When I click on NextStep Button
    Then I select Course from Courselist window
    And I click on arrow button
    Then I click on next step button
    When I Enter and select Student name in Portal users list
    Then I click on Finish session creation button
    And I verify Success text
    Then I close the browser
    
    
 

 
