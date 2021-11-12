package steps;

import ca.Prolineplus.HomePage;
import ca.Prolineplus.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class Login {

    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();


    @Given("^I am in  homepage$")
    public void iAmInHomepage() {
    }

    @When("^I click home page login$")
    public void iClickHomePageLogin() {
        homePage.clickOnHomepageLoginBtn();
    }

    @And("^I tick the eligibility check box$")
    public void iTickTheEligibilityCheckBox() {
        loginPage.clickOnIAmEligibleBtn();
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        loginPage.clickOnLoginBtn();
    }

    @Then("^I can see error message\"([^\"]*)\"$")
    public void iCanSeeErrorMessage(String message) {
        Assert.assertEquals(loginPage.getLoginErrorMessage(), message);
    }

    @And("^I click on the login btn$")
    public void iClickOnTheLoginBtn() {
        loginPage.clickOnLoginBtn();
    }

    @Then("^I can see the error message \"([^\"]*)\"$")
    public void iCanSeeTheErrorMessage(String message) {
        Assert.assertEquals(loginPage.getElibilityLoginErrorMessage(), message);
    }

}
