const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

//launch url
const url = 'http://localhost:3000'

//define selectors
const homepageElement = '.container'
const ViewPatient = '/html/body/div/div[2]/a[3]'
const patientForm = '/html/body/div/div[3]/table'



Given('a user has navigated to the homepage', async function () {
   // navigate to the app
   await page.goto(url)
   // locate the element in the webUI
   const locator = await page.locator(homepageElement)
   // assert that it's visible
   await expect(locator).toBeVisible()
})
 When('the admin click {string} using the webUI', function (string) {
      
    page.click(ViewPatient);
 });
Then('{string} should be displayed on the  webUI', function (string) {
           // Write code here that turns the phrase above into concrete actions
     expect(form).toBe(patientForm);
});
