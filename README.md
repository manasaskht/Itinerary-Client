# ItineraryClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.
Angular 7.1.4 is used for frontend development. The application is divided into various modules and routes. The modules created by me are landing- module, create-itinerary module.

Open command line shell (bash or cmd).

* Run command `git clone https://git.cs.dal.ca/ntyagi/itinerary-client.git` to get client project.
* Run command `npm install`
* Start server using `npm start`
* Launch your browser to `http://localhost:4200/` to load the client.
* If user is landing for the first time, then user should register on the website with their email address, Firstname, Lastname and password. After successfull registration,confirmation link will be sent to user's email inbox (Note: Also check the spam folder). 
  Clicking on this link will redirect the user to registration-confirmation page and clicking on `click` button will redirect user to landing page, for login.
* Existing User lands on the `Landing page -> Login with their credentials -> Redirected to the Homepage`.
* Here user can see their upcoming trips (if any created by the user) or can create a new itinerary(using new itinerary button).
* On create-itinerary page user has the option to add events in the itinerary in timeline-view/map-view, add notes in the itinerary,add-friends to the itinerary, chat with added group members and print
  the itinerary for offline travel.