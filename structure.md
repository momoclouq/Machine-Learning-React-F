### This file is for viewing the structure of the website, explaining the connections between components and where to find them.

----------------------

### all files related to the project must be put in the **/src** folder, public folder is not for production

----------------------

Overview - Coding: 
- All components are in **/components** directory
- **components/Algorithms** directory stores all ML algorithms (Primary user is **Phat**)
- **components/Home** directory stores the files related to the homepage (Primary user if **Minh**)
- **index.css** stores most of the CSS for the project (Primary user is **Long and Minh**)
- **style.css** stores some minor CSS for the algorithm (Primary user is **Phat**)
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
- Create route to all other algorithms (using React-router)

----------------------

## Homepage
- Overall scrollbar changes: remove the original scrollbar and replace it with **scroll: overflow** and webkit re-design 

### Home/Home.js
"Home" component, which represent the homepage, includes 4 sub-segments
- Segment 1: An introduction panel and the navigation bar
- Segment 2: A carousel showcasing the algorithms
- Segment 3: A panel showing the technologies used in the project 
- Segment 4: A section to show the authors (team) of the project

----------------------

### Home/FirstSegment/Navbar.js
Represent the navigation bar, include a dropdown menu (**Menu.js**) and a logo of the project
- Can be done in both CSS and React component

----------------------

### Home/Menu.js
Represent a dropdown menu which contains the links to other parts of the website:  algorithms and homepage. 

----------------------

### Home/FirstSegment/Veil.js
A basic introduction panel for the homepage, introducing design skills of the group

----------------------

### Home/FirstSegment/Sketch.js
A special star fall effect for the homepage

----------------------

### Home/FirstSegment/Navbar.js
Navigation bar for the homepage, including links to other parts of the website (**Deprecated - should be deleted**)

----------------------

### Home/SecondSegment/Algorithms.js
A container for the AlgorithmCarousel, mostly for proper structure and styling

----------------------

### Home/SecondSegment/AlgorithmCarousel.js
A carousel displaying panels of multiple algorithms (represented as components), using the react-slick dependency
- specification for slick-react: show dots, speed: 500 (fast), autoplay is true

----------------------

#### Home/SecondSegment/LinearRegressionCard.js
A panel displaying basic information about linear regression and its visualization (image),
the 2 parts are split at the middle of the panel

----------------------

#### Home/SecondSegment/LogisticRegressionCard.js
A panel displaying basic information about logistic regression. Similar to other cards.

----------------------

#### Home/SecondSegment/NeuralNetworkCard.js
A panel displaying basic information about neural network. Similar to other cards.

----------------------

#### Home/SecondSegment/ObjectDetectionCard.js
A panel displaying basic information about object detection card. Similar to other cards.

----------------------

#### Home/SecondSegment/KNearestNeighborsCard.js
A panel displaying basic information about K nearest neighbors card. Similar to other cards.

----------------------

#### Home/SecondSegment/KMeanCard.js
A panel displaying basic information about K mean card. Similar to other cards.


----------------------

### Home/ThirdSegment/PoweredBy.js
A panel dedicated for displaying notable technologies used by the project. Using react-animated-css dependency for special animation. Consists of:
- ConvNetCard.js: picture and styling for ConvNetJS
- P5Card.js: picture and styling for P5.js technology
- TensorflowCard.js: picture and styling for tensorflow.js

----------------------

#### Home/ThirdSegment/P5Card.js
A panel including styling and image for P5.js

----------------------

#### Home/ThirdSegment/ConvNetCard.js
A panel including styling and image for ConvNetJS 

----------------------

#### Home/ThirdSegment/TensorflowCard.js
A panel including styling and image for tensorflow.js

----------------------

### Home/FourthSegment/AboutUs.js
A panel dedicated for displaying information about the creators Us!, similar in design with PoweredBy.js, using the same libraries

----------------------

## Algorithm
- Overall idea: Each algorithm page will include 1 main Panel containing 2 sub Panel
- 2 sub Panel: LeftPanel.js and RightPanel.js. LeftPanel.js will include algorithm's information, mathematical notations, equations and RightPanel.js will include the actual visualization (pictures and interactive implementation)
- Technologies used include: P5.js, tensorflow.js, convnetjs, ...

----------------------

## Common
- Store components used by every other components

### Common/ScrollToTop.js
A special component with the main function is to move the webpage view to the top everytime the pages change.







