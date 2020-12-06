### This file is for viewing the structure of the website, explaining the connections between components and where to find them.

----------------------

### all files related to the project must be put in the **/src** folder, public folder is not for production

----------------------

Overview - Coding: 
- All components are in **/components** directory
- **components/Algorithms** directory stores all ML algorithms (Primary user is **Phat**)
- **components/Home** directory stores the files related to the homepage (Primary user if **Minh**)
- **index.css** stores all the CSS for the project (Primary user is **Long**)
- **/images** directory stores all images used in the project

Overview - design:
- All design-related files are in **/Design** directory, including **figma file/link** and images

Overview - testing:
- All testing-related files are in **/Testing** directory (primary user is **Nhan**)
----------------------

### index.js
Just to call the "App" component, nothing changed here

----------------------

### App.js
"App" component, using React router dependencies
- call "Home" component (**Home.js**)
- Create route to all other algorithms

----------------------

### Home/Home.js
"Home" component, which represent the homepage, includes 4 sub-segments
- Segment 1: An introduction panel and the navigation bar
- Segment 2: A carousel showcasing the algorithms
- Segment 3: A panel showing the technologies used in the project 
- Segment 4: A section to show the authors (team) of the project

----------------------

### Home/FirstSegment/Navbar.js
Represent the navigation bar, include a dropdown menu (**Menu.js**) and a logo of the project

----------------------

### Home/Menu.js
Represent a dropdown menu which contains the links to other parts of the website such as algorithms and homepage

