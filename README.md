# Galaleeb E-Commerce



## Table of Contents
- [About](#about)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Api](#api)
- [Getting Started](#getting-started)
- [Installation](#installation)


## About
![img](./github.png)
![img](./github.png)

This is a modern e-commerce web application built to provide a seamless shopping experience. Designed with usability in mind, it allows users to browse, search, and filter through a variety of products. The app also includes secure Google authentication, enabling users to log in easily, and leverages Telegram integration to send real-time order notifications. Powered by React and Redux, the app is responsive, fast, and efficient, ensuring smooth navigation and optimal performance on all devices.


## Demo
Check out the live demo of the web app [here](https://e-commerce-galaleeb.netlify.app/).



## Features
- **User Authentication**: Login with Google for easy access.
- **Product Search and Filtering**: Seamlessly search and filter products to find exactly what you’re looking for.
- **Telegram Integration**: Send orders directly to a specified Telegram chat.
- **Responsive Design**: Optimized for both desktop and mobile views.
- **Smooth UX/UI**: Enhanced with animations and efficient state management using Redux.

## Technologies Used
- **React**: Front-end JavaScript library for building user interfaces.
- **Redux**: State management library to efficiently manage app state.
- **Firebase Authentication**: For secure login using Google authentication.
- **Telegram API**: To send order notifications directly to Telegram.
- **Netlify**: Deployment platform for hosting the web app.
- **Air Tabe**: For Api And Database Storage.

## Api 
[API](https://airtable.com/appAS2roJGcDlQhwh/api/docs)

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
- React.js (v18 or later)
- npm or yarn
- Airtable API Key and Base ID
- A Telegram bot token (for order notifications)
- Firebase project (for Google authentication)
- Create your own env file and add those variable in
    ```REACT_APP_TELEGRAM_API_KEY
    REACT_APP_TELEGRAM_CHAT_ID
    REACT_APP_AIR_TABLE_API_TOKEN
    REACT_APP_HOST
    REACT_APP_SERVICE_ID 
    REACT_APP_TEMPLATE_ID 
    REACT_APP_USER_ID
    REACT_APP_Firebase_apiKey 
    REACT_APP_Firebase_authDomain 
    REACT_APP_Firebase_projectId 
    REACT_APP_Firebase_storageBucket
    REACT_APP_Firebase_messagingSenderId
    REACT_APP_Firebase_appId



### Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/saeedkhal/galaleeb.git
   cd galaleeb

2. **Install Dependancies**
   ```bash
   npm i

2. **Start Development**
   ```bash
   npm start
