Feature:
   As a admin 
   I want to view the bio data form 
   so that i wil be able to add  the patient record

Scenario: Add the patient
      Given a admin has navigated to the homepage
      When the admin click "Add Patient" using the webUI
      Then "Bio Data Form" should be displayed on the  webUI