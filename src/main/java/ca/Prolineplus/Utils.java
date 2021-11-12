package ca.Prolineplus;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class Utils extends BasePage {

    public static void clickOnElement(By by) {
        driver.findElement(by).click();
    }

    public static void typeText(By by, String keys) {
        driver.findElement(by).sendKeys(keys);
    }

    public static String getText(By by) {
        return driver.findElement(by).getText();
    }

    public static void handleAlert() {
        driver.switchTo().alert().accept();
    }

    public static String getAlertMessage() {
        return driver.switchTo().alert().getText();
    }

    public static void clickWithJs(By by) {
        WebElement element = driver.findElement(by);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", element);
    }

}



