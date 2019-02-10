Created Pages
--------------------------------
Landing Page (/landing)
Home Page (/dashboard)
Profile Page (/dashboard/user)
Create Itinerary Page (/dashboard/create)

Technologies & Libraries Used:
--------------------------------
Angular 7 (https://angular.io/)
Typescript (https://www.typescriptlang.org/)
Angular cli (https://angular.io/cli)
Angular Material (https://material.angular.io/)
Flex Layout (https://github.com/angular/flex-layout)
ngx-toastr (https://scttcper.github.io/ngx-toastr/)

Libraries explaination
--------------------------------
Angular 7 was used for this project as it provides high modularity of the web application. Using Angular from the start can speed things up and help in collaborating with the team later. It allows various features such as data binding, routing in a single page application which are helpful in making a useful corporate worthy project.

Angular Material is used as it provides various good looking components such as modified buttons, menus, sidebar and many more. Even though these components can be created by using html and javascript, instead of reinventing the wheel, we can use these components to make user interface much more pleasing. Customizable theming is also a built-in feature of angular material, so we can create various themes based on our own design. In this project, I have used following components: tabs, buttons, icons, selectable lists, menus, inputs and sidenav. 

Flex Layout library provides various directives (fxLayout, fxFlex, fxHide, fxShow) which can render benefits of CSS3 flex box. These directives have been used in angular templates to provide responsiveness to the application. The alternative would be to create classes and write css for individual 'divs' or tags that needs the property 'display:flex'. Using directives for repetitive tasks is the angular way of development which I wanted to follow.

ngx-toastr library provides a simple method of notifying users if any error occurs. Currently used to notify error if any incorrect login and password details are entered.

Walkthough
--------------------------------
## Running the project
- Install Node.js latest version.
- Clone the project with `git clone https://git.cs.dal.ca/ntyagi/a2_nikhil_tyagi.git`
- Go into the project directory.
- To install the depencencies. Run `npm install`.
- Run `npm start`.
- Open web browser and go to `localhost:4200`.

## Details
Notice that you are presented with landing page directly and can't route to '/dashboard' without login. The dummy login credentials are email: `admin@admin.com` password: `admin`. All the validations for login and register forms are front-end only. On login, you are presented with home page with dummy itineraries in sections like upcoming itineraries, past itineraries and suggested places to visit.

Notice that after login you can't route back to '/landing'. User profile ('/dashboard/user') can be accessed using top right menu in the header with username on it. The create-itinerary button is present in upcoming itineraries with will route you to link '/dashboard/create'.

References
--------------------------------
https://www.npmjs.com/package/ngx-toastr
https://material.angular.io/components/categories
https://github.com/angular/flex-layout/wiki
https://angular.io/docs
https://travefy.com/

Images References
----------------------------------
https://hmhps.ca/images/locations/citadel-hill/citadel-hill-1.jpg
https://www.gannett-cdn.com/presto/2018/07/27/USAT/9c49add3-e5fa-4aaa-8af3-458fd0fa186f-italy-venice-gondolas-051018-az.jpg?crop=1799,1012,x0,y0&width=3200&height=1680&fit=bounds
https://www.strollingoftheheifers.com/wp-content/uploads/2012/12/Know-Your-Forester.jpg
https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784/a330628091ede7eb1548d6cda58e0357.jpg?ver=1477297804
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2VXfrz8eY0L31238Z5C3phG-e3EbQb_qm9ZsRwuUJZxFo4LwKA
https://blockchaininvestio-c007.kxcdn.com/wp-content/uploads/2018/07/India-bitcoin.jpg
http://www.traveller.com.au/content/dam/images/h/0/v/z/w/u/image.related.articleLeadwide.620x349.h166kx.png/1539216554259.jpg
https://hmhps.ca/images/locations/citadel-hill/citadel-hill-1.jpg

