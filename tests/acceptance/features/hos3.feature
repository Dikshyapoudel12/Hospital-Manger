Feature:
   As a admin 
   I want to view the patient list
   so that i can know the record of patient.

   Scenario:Patient table should appper when clicked to"View Patient"
      Given a admin has navigated to the homepage
      When the admin click "View Patient" using the webUI
      Then "Patient Table" should be displayed on the  webUI