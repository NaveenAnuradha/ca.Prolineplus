Feature: Bestslip from Calendar events

  @Smoke
  @Betslip
  Scenario: User is able to add and clear the selection in betslip from Calendar events

    Given I am in the homepage
    When I click on continue button of  accept cookies
    And I click on Calendar tab
    And I click on MORE hyperlink for the first event
    Then I can see "ALL" tab on event page
    When I click on first odd
    Then I can see the same selection displayed in the bet slip
    And I can see the same odd value in the bet slip
    When I type "." in Wage box
    Then I can see error message "Your wager has the wrong format"
    When I click on clear all button
    Then I can see the message "Are you sure you want to clear it?"
    And I accept the alert
    And I can see "YOUR BETSLIP IS EMPTY"







