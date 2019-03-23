Travel Buddy

*Project Description:
    The goal of this project is to provide a single platform to the users to plan and organize their trips. 
    The users can use the website for deciding their travel destination and exploring tourist attractions in those areas. 
    They can build itineraries, and easily share it with their family and friends. 
    They can even jot down additional important information about the entire travel, thus making it easier to access it at a later stage. 
    Overall, the website allows users to easily plan, and enjoy a hassle-free vacation. '

*Installation Instructions:
  Download client-side code (itinerary-client):
    1) Download the zip file from Brightspace or Gitlab (branch feature/currency) from the link https://git.cs.dal.ca/ntyagi/itinerary-client/tree/feature/currency
    2) Import code in VS Code and open the Terminal (Ctrl+Shift+`)
    3) Run the command npm install
    4) Run the command ng serve (Starts the frontend server at localhost:4200)
  Download server-side code (itinerary-server):
    5) Download the zip file from Brightspace or Gitlab from the link https://git.cs.dal.ca/ntyagi/itinerary-server/tree/feature/profile
    6) Import code in VS Code and open the Terminal (Ctrl+Shift+`)
    7) Run the command npm install
    8) Run the command sails lift (Starts the backend server at localhost:1337)
  Run the code:
    9) Open the link in the browser http://localhost:4200/landing
    10) Register as a new user. 
    11) Click on the link received in the email from noreply@itineraryplanner.com
    11) Login with the credentials
    10) Open http://localhost:4200/dashboard/currency or click on the user name (top-right) and select the Currency Converter option

*Browsers Supported [4]:
    1) Android devices - Android browser and WebView, Chrome, Firefox, Microsoft Edge 
    2) iOS devices - Chrome, Firefox, Safari, Microsoft Edge
    3) Windows Desktop - Chrome, Firefox, Internet Explorer 10+, Microsoft Edge
    4) Mac Desktop - Chrome, Firefox, Safari

*Feature Created - Currency Converter:  
  Feature Description:
    Changes in currency rate influence the spending at a destination. 
    The currency conversion tool is beneficial for the users as they can budget their finances while planning an international trip. 
    The current exchange rates can highly affect their travel decisions, destination selection, and expenditure. 
    While making the itinerary, it would be inconvenient if the user is expected to switch to another application to check the rates. 
    Hence, the feature has been provided as a part of this application.

  Code walkthrough and folder structure:
     Angular 7: Frontend code of currency conversion feature is present in itinerary-client at the below location:
     	src -> app -> dashboard -> currency -> currency.service.ts (module for currency conversion)
     	src -> assets -> imgs (images for flag icon)
     The service to make API call to the Currency Converter API is written in currency.service.ts
     The html code is present in currencyconverter.component.html
     The css code is present in currencyconverter.component.scss
     The parsing of the results obtained from the API call and creation of objects to be displayed in the frontend is present in currencyconverter.component.ts
     The flag icons are present in the images folder
     The JSON file which contains the drop down list for currency is present in currencyconverterdata.ts

  Feature implementation and design decisions:
    1) Currency API:
    The Free Currency Converter API (https://free.currencyconverterapi.com/) is used to convert one currency to another.
    The conversion rate is fetched by parsing the JSON received as a response from the API.
    The conversion rate is then multiplied with the input amount entered by the user, before displaying it on the screen.
    API error responses are handled to ensure that errors are not propagated to the frontend.
    Additionally, it is ensured that if the validations are not satisfied, the API call does not take place. 
    This was a little tricky to implement in Angular because Validator classes are used, unlike the traditional onclick events in JavaScript.

    2) Use of icons in dropdowns:
    The list of currency is long, making it difficult for the user to navigate through the list. 
    Thus, dropdowns include the country flag icons [5] which grabs the website visitors attention and helps them to browse through the list.
    The use of icons also helps to satisfy Neilson's heuristic of matching the system and real world.
    Along with the abbreviation, currency names are also specified in the dropdown which helps in easier identification of currency.
    This implementation required a currency list. As there were no free API which returned country name, currency name, and currency abbreviation, a comprehensive JSON file had to be used. (It was time consuming to find such a file)
    The JSON file content is loaded into an arraylist and diplayed on the frontend.
    For each dropdown item, the corresponding country name is used to pick and display an image. (For this I had to find a repository of images which are named with country abbreviations [5])
      
    3) Validations:
    The validations are clear and indicate the course of action to be taken by the user.
    The fields are highlighted in red, when the validations are not satisfied.
    Generic error messages are not used. Eg. Leaving the amount field blank and entering alphabets in the amount field give different error messages.
    The user is also allowed to enter decimal values as the input amount. Eg. 0.78 and .78 are both acceptable.
	
*Reference
[1] D. Jamaludin, "Angular 6 HttpClient: Consume RESTful API Example", Djamware.com, 2019. [Online]. Available: https://www.djamware.com/post/5b87894280aca74669894414/angular-6-httpclient-consume-restful-api-example. [Accessed: 22- Mar- 2019].
[2] "Common Currency Codes in JSON", Gist, 2019. [Online]. Available: https://gist.github.com/Fluidbyte/2973986. [Accessed: 22- Mar- 2019].
[3] "Angular", Angular.io, 2019. [Online]. Available: https://angular.io/api/forms/Validators. [Accessed: 22- Mar- 2019].
[4] M. Otto and J. Thornton, “Browsers and devices,” · Bootstrap. [Online]. Available: https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/. [Accessed: 09-Feb-2019]. List of suppored browsers.
[5] "transferwise/currency-flags", GitHub, 2019. [Online]. Available: https://github.com/transferwise/currency-flags/tree/master/src/flags. [Accessed: 23- Mar- 2019]. 