const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

//launch url
const url = 'http://localhost:3000'

//define selectors
const homepageElement = '.container'
const PatientInput = '.content'
const clickButton ='/html/body/div/div[3]/form/button'




Given('a user has navigated to the homepage', async function () {
   // navigate to the app
   await page.goto(url)
   // locate the element in the webUI
   const locator = page.locator(homepageElement)
   // assert that it's visible
   expect(locator).toBeVisible()
})


When('the admin adds {string}  using the webUI', function (string) {
    // Write code here that turns the phrase above into concrete actions
     page.fill(PatientInput , data);
  });


Then('"patient information"should be stored on clicking "Click To Add"Button.', function () {      
    
 page.click(clickButton);
  });

