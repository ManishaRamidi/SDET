package Test;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@RunWith(Cucumber.class)
@CucumberOptions(features="feature_files",glue= "stepdefinitions",tags="@ELSC_019",
format=
{"pretty",
"html:target/cucumber-reports/cucumber-pretty",
"json:target/cucumber-reports/CucumberTestReport.json"})
public class TestRunner {
	private TestNGCucumberRunner testNGCucumberRunner;
	ExtentReports report;
	ExtentTest test;
	protected static WebDriver driver;
	
	 @BeforeSuite()
     public void openBrowser() {
		 System.setProperty("webdriver.chrome.driver", "C://Users//ManishaRamidi//Desktop//Manisha//installations//chromedriver_win32//chromedriver.exe");
         driver = new ChromeDriver();
         driver.get("http://elearningm1.upskills.in/");
     }
	 
	 @BeforeClass(alwaysRun = true)
	    public void setUpClass() throws Exception {
	    testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	    report = new ExtentReports(System.getProperty("user.dir") + "/reports/Extentreport.html");
	    test = report.startTest("SDET Batch");
	    
	    }
	    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
	    public void feature(CucumberFeatureWrapper cucumberFeature) {
	    testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	    }
	    @DataProvider
	    public Object[][] features() {
	    return testNGCucumberRunner.provideFeatures();
	    }
	    @AfterClass(alwaysRun = true)
	    public void tearDownClass() throws Exception {
	    	 report.endTest(test);
	         report.flush();
	    testNGCucumberRunner.finish();
	    }


}
