package ca.Prolineplus;

import org.openqa.selenium.By;

public class HomePage extends Utils {

    By _acceptCookiesContinue = By.xpath("//button[@class=\"cc-btn cc-dismiss\"]");
    By _calendarTab = By.xpath("//button[@id=\"Calendar\"]");
    By _firstLineMoreHyperlink = By.xpath("//section[@id=\"sport_FOOT\"]/div[1]/div/div[1]/article/div[2]/a");
    By _homePageLoginBtn = By.xpath("//span[text()=\"Login\"]");

    public void clickAcceptCookiesContinueBtn() {
        clickOnElement(_acceptCookiesContinue);
    }

    public void clickCalendarTab() {
        clickWithJs(_calendarTab);
    }

    public void clickMoreHyperlinkForTheFirstEvent() {
        clickWithJs(_firstLineMoreHyperlink);
    }

    public void clickOnHomepageLoginBtn() {
        clickOnElement(_homePageLoginBtn);
    }


}
