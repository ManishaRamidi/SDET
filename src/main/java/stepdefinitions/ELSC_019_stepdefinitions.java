package stepdefinitions;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;


import common.wrapper;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ELSC_019_stepdefinitions {
	
	WebDriver driver;

	@Given("^I open the browser and enter the url \"([^\"]*)\"$")
	public void i_open_the_browser_and_enter_the_url(String url) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "driver//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
	    
	}

	@When("^I enter User name$")
	public void i_enter_User_name() throws IOException {
		driver.findElement(By.xpath("//*[@autofocus=\"autofocus\"]")).sendKeys("admin");
		//driver.findElement(By.xpath("//*[@autofocus=\"autofocus\"]")).sendKeys(wrapper.getDataFromExcel(0, 1));
	}

	@When("^I enter password$")
	public void i_enter_password(){
		driver.findElement(By.xpath("//*[@placeholder=\"Pass\"]")).sendKeys("admin@123");
	    
	}

	@Then("^I click on Login button$")
	public void i_click_on_Login_button() throws Throwable {
	    driver.findElement(By.xpath("//*[@name=\"submitAuth\"]")).click();
	}

	@When("^I click on Administration tab$")
	public void i_click_on_Administration_tab() throws Throwable {
		driver.findElement(By.xpath("//*[@title=\"Administration\"]")).click();
	    
	}

	@When("^I click on Sessions categories list link$")
	public void i_click_on_Sessions_categories_list_link() throws Throwable {
		driver.findElement(By.linkText("Sessions categories list")).click();
	    
	}

	@Then("^I click on Add category icon$")
	public void i_click_on_Add_category_icon() throws Throwable {
		driver.findElement(By.xpath("//*[@title=\"Add category\"]")).click();
	    
	}

	@Then("^I enter Category name$")
	public void i_enter_Category_name() throws Throwable {
	    //driver.findElement(By.xpath("//*[@placeholder=\"Category\"]")).sendKeys("ELSC_019");
		driver.findElement(By.xpath("//*[@placeholder=\"Category\"]")).sendKeys(wrapper.getDataFromExcel(1, 0));
	    
	}
	
	@Then("^I enter Category name \"([^\"]*)\"$")
	public void i_enter_Category_name(String ct_name) throws Throwable {
		driver.findElement(By.xpath("//*[@placeholder=\"Category\"]")).sendKeys(ct_name);
	    
	}


	@Then("^I click on Add category Button$")
	public void i_click_on_Add_category_Button() throws Throwable {
	    driver.findElement(By.xpath("//*[@value=\"Add category\"]")).click();
	}

	@Then("^I click on Session list Link$")
	public void i_click_on_Session_list_Link() throws Throwable {
		driver.findElement(By.linkText("Session list")).click();
	   
	}

	@Then("^I click on add training icon$")
	public void i_click_on_add_training_icon() throws Throwable {
		driver.findElement(By.xpath("//*[@title=\"Add a training session\"]")).click();
	    
	}

	@And("^I enter Session name$")
	public void i_enter_Session_name() throws Throwable {
		//driver.findElement(By.xpath("//*[@id='add_session_name']")).sendKeys("ELSC_019_session2");
		driver.findElement(By.xpath("//*[@id='add_session_name']")).sendKeys(wrapper.getDataFromExcel(1, 1));    
	}
	
	@And("^I enter Session name \"([^\"]*)\"$")
	public void i_enter_Session_name(String se_name) throws Throwable {
		driver.findElement(By.xpath("//*[@id='add_session_name']")).sendKeys(se_name);
	   
	}


	@And("^I select Coach name$")
	public void i_select_Coach_name() throws Throwable {
		driver.findElement(By.xpath("//span[contains(text(),'Please select an option')]")).click();
		//driver.findElement(By.xpath("//*[@class=\"select2-search__field\"]")).sendKeys("Roshan");
		driver.findElement(By.xpath("//*[@class=\"select2-search__field\"]")).sendKeys(wrapper.getDataFromExcel(1, 2));
		Thread.sleep(5000);
		driver.findElement(By.xpath("//li[contains(text(),'Roshan Zameer')]")).click();    
	}
	
	@And("^I select Coach name \"([^\"]*)\"$")
	public void i_select_Coach_name(String co_name) throws Throwable {
		driver.findElement(By.xpath("//span[contains(text(),'Please select an option')]")).click();
		driver.findElement(By.xpath("//*[@class=\"select2-search__field\"]")).sendKeys(co_name);		
		Thread.sleep(5000);
		driver.findElement(By.xpath("//li[contains(text(),'Roshan Zameer')]")).click();  
	    
	}


	@And("^I click on advanced settings button$")
	public void i_click_on_advanced_settings_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"advanced_params\"]")).click();
	    
	}

	@Then("^I select My session from dropdown$")
	public void i_select_My_session_from_dropdown() throws Throwable {
	   driver.findElement(By.xpath("//div[contains(text(),'none')]")).click();
	   //driver.findElement(By.xpath("(//*[@aria-label=\"Search\"])[2]")).sendKeys("ELSC_019");
	   driver.findElement(By.xpath("(//*[@aria-label=\"Search\"])[2]")).sendKeys(wrapper.getDataFromExcel(1, 3));
	   driver.findElement(By.xpath("//span[contains(text(),'ELSC_019')]")).click();
	   
	}
	
	@Then("^I select My session from dropdown \"([^\"]*)\"$")
	public void I_select_My_session_from_dropdown(String se_DD) throws Throwable {
		driver.findElement(By.xpath("//div[contains(text(),'none')]")).click();
		driver.findElement(By.xpath("(//*[@aria-label=\"Search\"])[2]")).sendKeys(se_DD);		
		driver.findElement(By.xpath("//span[contains(text(),'ELSC_019')]")).click();
	   
	}


	@When("^I click on NextStep Button$")
	public void i_click_on_NextStep_Button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"add_session_submit\"]")).click();
	    
	}

	@Then("^I select Course from Courselist window$")
	public void i_select_Course_from_Courselist_window() throws Throwable {
		  Select courselist=new Select(driver.findElement(By.xpath("//*[@id='origin']")));
		  courselist.selectByVisibleText("SELENIUM1 (SELENIUM1)");
	
	}
	
	
	@And("^I click on arrow button$")
	public void i_click_on_arrow_button() throws Throwable {
		driver.findElement(By.xpath("//*[@name=\"add_course\"]")).click();
	
	}

	@Then("^I click on next step button$")
	public void i_click_on_next_step_button() throws Throwable {
		driver.findElement(By.xpath("//*[@name=\"next\"]")).click();
	    
	}

	@When("^I Enter and select Student name in Portal users list$")
	public void i_Enter_Student_name_in_Portal_users_list() throws Throwable {
		//driver.findElement(By.xpath("//*[@id=\"user_to_add\"]")).sendKeys("mani");
		driver.findElement(By.xpath("//*[@id=\"user_to_add\"]")).sendKeys(wrapper.getDataFromExcel(1, 4));		
		Thread.sleep(5000);
		driver.findElement(By.xpath("//a[contains(text(),'demo manipal (manipal) MANIPAL')]")).click();
	    
	}
	@When("^I Enter and select Student name in Portal users list \"([^\"]*)\"$")
	public void i_Enter_and_select_Student_name_in_Portal_users_list(String st_name) throws Throwable {		
		driver.findElement(By.xpath("//*[@id=\"user_to_add\"]")).sendKeys(st_name);
		Thread.sleep(5000);
		driver.findElement(By.xpath("//a[contains(text(),'demo manipal (manipal) MANIPAL')]")).click();
	}
	    
	@Then("^I click on Finish session creation button$")
	public void i_click_on_Finish_session_creation_button() throws Throwable {
		driver.findElement(By.xpath("//*[@class=\"btn btn-success\"]")).click();
		Thread.sleep(8000);
	   
	}
    @And("^I verify Success text$")
    public void I_verify_Success_text() {
    	String Actvalue = driver.findElement(By.xpath("//div[contains(text(),'Update successful')]")).getText();
    	System.out.println(Actvalue);
    	
    	
    }
    
    @Then("^I close the browser$")
    public void I_close_the_browser() {
    	driver.quit();
    }

}
