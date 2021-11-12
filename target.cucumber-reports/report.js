$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CalendarEvents.feature");
formatter.feature({
  "line": 1,
  "name": "Bestslip from Calendar events",
  "description": "",
  "id": "bestslip-from-calendar-events",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12585181700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User is able to add and clear the selection in betslip from Calendar events",
  "description": "",
  "id": "bestslip-from-calendar-events;user-is-able-to-add-and-clear-the-selection-in-betslip-from-calendar-events",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Betslip"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am in the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on continue button of  accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Calendar tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on MORE hyperlink for the first event",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see \"ALL\" tab on event page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on first odd",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I can see the same selection displayed in the bet slip",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I can see the same odd value in the bet slip",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type \".\" in Wage box",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I can see error message \"Your wager has the wrong format\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on clear all button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I can see the message \"Are you sure you want to clear it?\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I accept the alert",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can see \"YOUR BETSLIP IS EMPTY\"",
  "keyword": "And "
});
formatter.match({
  "location": "Betslip.iAmInTheHomepage()"
});
formatter.result({
  "duration": 133001300,
  "status": "passed"
});
formatter.match({
  "location": "Betslip.iClickOnContinueButtonOfAcceptCookies()"
});
formatter.result({
  "duration": 140591200,
  "status": "passed"
});
formatter.match({
  "location": "Betslip.iClickOnCalendarTab()"
});
formatter.result({
  "duration": 2110410600,
  "status": "passed"
});
formatter.match({
  "location": "Betslip.iClickOnMOREHyperlinkForTheFirstEvent()"
});
formatter.result({
  "duration": 3445745400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ALL",
      "offset": 11
    }
  ],
  "location": "Betslip.iCanSeeTabOnEventPage(String)"
});
formatter.result({
  "duration": 331578300,
  "status": "passed"
});
formatter.match({
  "location": "Betslip.iClickOnFirstOdd()"
});
formatter.result({
  "duration": 124022300,
  "status": "passed"
});
formatter.match({
  "location": "Betslip.iCanSeeTheSameSelectionDisplayedInTheBetSlip()"
});
formatter.result({
  "duration": 576465500,
  "status": "passed"
});
formatter.match({
  "location": "Betslip.iCanSeeTheSameOddValueInTheBetSlip()"
});
formatter.result({
  "duration": 106159100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".",
      "offset": 8
    }
  ],
  "location": "Betslip.iTypeInWageBox(String)"
});
formatter.result({
  "duration": 124745000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your wager has the wrong format",
      "offset": 25
    }
  ],
  "location": "Betslip.iCanSeeErrorMessage(String)"
});
formatter.result({
  "duration": 46294900,
  "status": "passed"
});
formatter.match({
  "location": "Betslip.iClickOnClearAllButton()"
});
formatter.result({
  "duration": 89389700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you sure you want to clear it?",
      "offset": 23
    }
  ],
  "location": "Betslip.iCanSeeTheMessage(String)"
});
formatter.result({
  "duration": 7922200,
  "status": "passed"
});
formatter.match({
  "location": "Betslip.iAcceptTheAlert()"
});
formatter.result({
  "duration": 40943400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "YOUR BETSLIP IS EMPTY",
      "offset": 11
    }
  ],
  "location": "Betslip.iCanSee(String)"
});
formatter.result({
  "duration": 198463900,
  "status": "passed"
});
formatter.after({
  "duration": 9702928600,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Display error message for invalid login",
  "description": "",
  "id": "display-error-message-for-invalid-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20880012200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am in  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click home page login",
  "keyword": "When "
});
formatter.match({
  "location": "Login.iAmInHomepage()"
});
formatter.result({
  "duration": 179900,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickHomePageLogin()"
});
formatter.result({
  "duration": 342364400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login with tick eligibility check box",
  "description": "",
  "id": "display-error-message-for-invalid-login;login-with-tick-eligibility-check-box",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@LoginWithEligibility"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I tick the eligibility check box",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I can see error message\"Please enter your password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iTickTheEligibilityCheckBox()"
});
formatter.result({
  "duration": 115224100,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnLoginButton()"
});
formatter.result({
  "duration": 152189500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your password.",
      "offset": 24
    }
  ],
  "location": "Login.iCanSeeErrorMessage(String)"
});
formatter.result({
  "duration": 151646700,
  "status": "passed"
});
formatter.after({
  "duration": 7095429100,
  "status": "passed"
});
formatter.before({
  "duration": 23363869200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am in  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click home page login",
  "keyword": "When "
});
formatter.match({
  "location": "Login.iAmInHomepage()"
});
formatter.result({
  "duration": 70900,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickHomePageLogin()"
});
formatter.result({
  "duration": 553368700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login without tick eligibility check box",
  "description": "",
  "id": "display-error-message-for-invalid-login;login-without-tick-eligibility-check-box",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Smoke"
    },
    {
      "line": 16,
      "name": "@LoginWithoutEligibility"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click on the login btn",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can see the error message \"You must confirm that you are eligible to play.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iClickOnTheLoginBtn()"
});
formatter.result({
  "duration": 149312000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You must confirm that you are eligible to play.",
      "offset": 29
    }
  ],
  "location": "Login.iCanSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 47670800,
  "status": "passed"
});
formatter.after({
  "duration": 64185949500,
  "status": "passed"
});
});