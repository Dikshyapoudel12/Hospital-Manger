Feature:
   As a admin 
   I want to add the patient bio data 
   so that i can manage the patient record

Scenario:Add the patient
   Given a admin has navigated to the homepage
   When the admin adds "patient bio data"  using the webUI
   Then "patient information"should be stored on clicking "Click To Add"Button.