package steps;

import ca.Prolineplus.EventPage;
import ca.Prolineplus.HomePage;
import ca.Prolineplus.Utils;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class Betslip {

    HomePage homePage = new HomePage();
    EventPage eventPage = new EventPage();


    @Given("^I am in the homepage$")
    public void iAmInTheHomepage() {
    }

    @When("^I click on continue button of  accept cookies$")
    public void iClickOnContinueButtonOfAcceptCookies() {
        homePage.clickAcceptCookiesContinueBtn();
    }

    @And("^I click on Calendar tab$")
    public void iClickOnCalendarTab() {
        homePage.clickCalendarTab();
    }

    @And("^I click on MORE hyperlink for the first event$")
    public void iClickOnMOREHyperlinkForTheFirstEvent() {
        homePage.clickMoreHyperlinkForTheFirstEvent();
    }

    @Then("^I can see \"([^\"]*)\" tab on event page$")
    public void iCanSeeTabOnEventPage(String message) {
        Assert.assertEquals(eventPage.getAllTab(), message);
    }

    @When("^I click on first odd$")
    public void iClickOnFirstOdd() {
        eventPage.clickFirstOddBtn();
    }

    @Then("^I can see the same selection displayed in the bet slip$")
    public void iCanSeeTheSameSelectionDisplayedInTheBetSlip() {
        Assert.assertEquals(eventPage.getBetSlipSelectionName(), eventPage.getSelectionName());
    }

    @And("^I can see the same odd value in the bet slip$")
    public void iCanSeeTheSameOddValueInTheBetSlip() {
        Assert.assertEquals(eventPage.getOddValue(), eventPage.getBetSlipOddValue());
    }

    @When("^I type \"([^\"]*)\" in Wage box$")
    public void iTypeInWageBox(String amount) {
        eventPage.typeValueInWagerBox(amount);
    }

    @Then("^I can see error message \"([^\"]*)\"$")
    public void iCanSeeErrorMessage(String message) {
        Assert.assertEquals(eventPage.getErrorMessageDisplayInWagerBox(), message);
    }

    @When("^I click on clear all button$")
    public void iClickOnClearAllButton() {
        eventPage.clickClearAllBtn();
    }

    @Then("^I can see the message \"([^\"]*)\"$")
    public void iCanSeeTheMessage(String message) {
        Assert.assertTrue(Utils.getAlertMessage().contains(message));
    }

    @Then("^I accept the alert$")
    public void iAcceptTheAlert() {
        Utils.handleAlert();
    }

    @And("^I can see \"([^\"]*)\"$")
    public void iCanSee(String message) {
        Assert.assertEquals(eventPage.getBetslipIsEmptyMessage(), message);
    }


}

