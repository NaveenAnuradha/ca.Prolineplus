Feature: Display error message for invalid login

  Background:
    Given I am in  homepage
    When I click home page login

  @Smoke
  @LoginWithEligibility
  Scenario: Login with tick eligibility check box

    And I tick the eligibility check box
    And I click on login button
    Then I can see error message"Please enter your password."

  @Smoke
  @LoginWithoutEligibility
  Scenario: Login without tick eligibility check box

    And I click on the login btn
    Then I can see the error message "You must confirm that you are eligible to play."
