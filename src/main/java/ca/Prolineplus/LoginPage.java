package ca.Prolineplus;

import org.openqa.selenium.By;

public class LoginPage extends Utils {

    By _iAmEligible = By.xpath("//span[@id=\"isEligible\"]");
    By _loginButton = By.xpath("//input[@class=\"button button-primary\"]");
    By _loginErrorMessage = By.xpath("//span[text()=\"Please enter your password.\"]");
    By _eligibilityLoginErrorMessage = By.xpath("//div[@class=\"error-alert\"]/span");


    public void clickOnIAmEligibleBtn() {
        clickOnElement(_iAmEligible);
    }

    public void clickOnLoginBtn() {
        clickOnElement(_loginButton);
    }

    public String getLoginErrorMessage() {
        return getText(_loginErrorMessage);
    }

    public String getElibilityLoginErrorMessage() {
        return getText(_eligibilityLoginErrorMessage);
    }

}
