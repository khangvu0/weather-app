# 🌦️ Weather App

A simple Node.js web application that provides real-time weather information for any location.  
This project was built by following along with [Andrew Mead's The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/).  

The app demonstrates key Node.js concepts such as asynchronous programming, web servers, API integration, and deployment.

---

## Features
- Search for weather by location.
- Fetches weather data using the **Weatherstack API**.
- Converts user-provided locations into coordinates with the **Mapbox Geocoding v5 API**.
- Handles asynchronous operations in Node.js using callbacks.
- Built with **Express.js** for serving dynamic web content.
- Fully deployed for real-world use.

---

## Key Concepts Learned
This project was part of the following sections of the course:
1. **Asynchronous Node.js** – working with callbacks and handling async operations.  
2. **Web Servers** – building and serving applications with Express.js.  
3. **Accessing API from Browser** – integrating front-end with back-end using HTTP requests.  
4. **Application Deployment** – deploying a live web application to a hosting platform.  

---

## Technologies Used
- **Node.js**  
- **Express.js**  
- **Weatherstack API** (for weather data)  
- **Mapbox Geocoding v5 API** (for geocoding user input)  
- **HTML, CSS, JavaScript** (front-end)

---

## Screenshot
![Screenshot 1](/img/preview.png)

---

## Setup & Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. Install dependencies:
    ```bash
    npm install

3. Insert your API keys in geocode.js and forecast.js

4. Run the development server:
    ```bash
    npm start

5. Open your browser at:
    ```bash
    http://localhost:3000