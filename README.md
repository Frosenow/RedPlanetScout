#  Red Planet Scout - Mars Photos Gallery 
RedPlanetScout is a website that uses NASA Open API - Mars Rover Photos. The site provides photos of the selected day. The user himself chooses the day and one of the three NASA's Mars rovers (Curiosity, Opportunity, and Spirit) from which he wants to receive photos
This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. This API is maintained by Chris Cerami.
---
In addition to the photos, the user gets information about the photos: 
- Rover Name 
- Earth Date 
- Camera Name  
- Sol (Sol is a solar day on Mars)

**Link to project:** [Red Planet Scout] ([(https://red-planet-scout.herokuapp.com/])

![Mockup of the site](./assets/images/mockup.jpg)

# Getting Started 
### Prerequisites
To run this project, you need Node.js and npm installed on your system.

### Installing
* Clone or download the project repository to your local machine.
* Install the dependencies by running the following `npm install` 
* Create a .env file in the project root directory and add the environment variables (example in .env.example file)
* To start the Node.js server, run the following command: `npm run dev`

# How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, Node.js (Express.js) 

RedPlanetScout is a web application that allows users to browse a gallery of photos taken by the Mars rovers. The application uses ReactJS to create a user-friendly interface and to manage the state of the application. The gallery is populated by making HTTP requests to the NASA API using the fetch API.

When the user first loads the application, a landing page is displayed that features a form filter the fetched data. As the user scrolls down the page, new images are dynamically loaded through an infinite scroll feature. The user can click on an image to view it in full size, with additional information about the image displayed below it.

The user can also select a specific rover and date range to filter the images displayed in the gallery. This functionality is implemented using React components and state management. When the user selects a filter, an API call is made to the NASA API to retrieve the relevant images.

Additionally, RedPlanetScout uses Node.js with Express to create a server-side component of the application. To provide a set of robust features for building scalable and secure applications, such as handling HTTP requests, routing, and middleware.

In RedPlanetScout, the server-side component is used to fetch data from the NASA API and send it to the client-side application running in the browser. This is done using fetch API on server side. The server-side component also serves the client-side application and its assets, such as CSS and JavaScript files.

Overall, the combination of React components and state management, along with Node.js and Express on the server-side, enables RedPlanetScout to provide a fast, responsive, and personalized browsing experience for users, while also ensuring that the application is scalable, maintainable, and secure.


### Features 

* The application retrieves the images from the NASA API. The API endpoint URLs are defined in the constants directory, and the proxy server is used to make the HTTP requests.
* Infinite scroll: RedPlanetScout implements an infinite scroll feature that loads images dynamically as the user scrolls down the page, creating a seamless browsing experience.
* Rover and date selection: Users can filter the images by selecting a specific rover and date range, allowing for a more customized browsing experience tailored to the user's interests.
* Image organization and responsiveness: The gallery of images is well-organized in a responsive grid layout, allowing all images to be visible without the need for horizontal scrolling. When a user clicks on an image, it is displayed in full size with additional information about the image, providing a richer viewing experience.

## Lessons Learned:

While Create React App is a popular tool for quickly setting up a React application, I discovered that it may not be the best fit for more complex projects that require greater customization options. In my case, I needed to integrate our React app with a Node.js backend, and found that Create React App's built-in development server did not allow me to easily proxy requests to the backend.

Properly setting up files and the server architecture is crucial for deploying the application in the future. I learned that it's important to structure the project in a way that makes it easy to deploy, and to choose a server architecture that can accommodate the expected traffic and usage patterns.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Interactive Linear Regression using Tensorflow.js:** https://github.com/Frosenow/Learning-Tensorflowjs

**Image Processing in Python using CUDA with Numba:** https://github.com/Frosenow/Numba-GPU-Image-Processing

**Locatobia - Guide for busy tourists**: https://github.com/Frosenow/Locatobia
