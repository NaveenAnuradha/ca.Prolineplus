package ca.Prolineplus;

import org.openqa.selenium.By;

public class EventPage extends Utils {
    By _allTab = By.xpath("//h4[text()=\"All\"]");
    By _firstOdd = By.xpath("//div[@id=\"1-content-area\"]/ul/li[1]/ul/li[1]/span");
    By _selectionName = By.xpath("//div[@id=\"1-content-area\"]/ul/li[1]/ul/li[1]/span/span[1]");
    By _oddValue = By.xpath("//div[@id=\"1-content-area\"]/ul/li[1]/ul/li[1]/span/span[2]");
    By _betSlipSelectionName = By.className("outcome-description");
    By _betSlipOddValue = By.className("formatted_price");
    By _wagerBox = By.xpath("//input[@class=\"stake single\"]");
    By _errorMessageOfWagerInput = By.xpath("//div[@class=\"stake-format-error betslip-error-message\"]");
    By _clearAllBtn = By.xpath("//button[@class=\"clear-all\"]");
    By _emptyMessage = By.xpath("//p[text()=\"Your betslip is empty\"]");


    public String getAllTab() {
        return getText(_allTab);
    }

    public void clickFirstOddBtn() {
        clickOnElement(_firstOdd);
    }

    public String getSelectionName() {
        return getText(_selectionName);
    }

    public String getOddValue() {
        return getText(_oddValue);
    }

    public String getBetSlipSelectionName() {
        return getText(_betSlipSelectionName);
    }

    public String getBetSlipOddValue() {
        return getText(_betSlipOddValue);
    }

    public void typeValueInWagerBox(String wageBoxValue) {
        typeText(_wagerBox, wageBoxValue);
    }

    public String getErrorMessageDisplayInWagerBox() {
        return getText(_errorMessageOfWagerInput);
    }

    public void clickClearAllBtn() {
        clickOnElement(_clearAllBtn);
    }

    public String getBetslipIsEmptyMessage() {
        return getText(_emptyMessage);
    }

}
