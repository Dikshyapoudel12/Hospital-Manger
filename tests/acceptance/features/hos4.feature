Feature:
   As a admin 
   I want to fill the "Add Diagnosis" list
   so that i can add patient.

Scenario:Bio Data form should be appear when clicked Add Patient
   Given a admin has navigated to the homepage
   When the admin click "Add Patient" using the webUI
   Then "Bio Data Form" should be displayed on the  webUI
