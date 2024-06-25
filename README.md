<h1 align="center">Weather App</h1> 

<h2 align="center">Web application to show the current and upcoming week weather forecast.</h2>    

<br />
<p align="center">
    <img src="https://img.shields.io/badge/React_(17.0.2)-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
    <img src="https://img.shields.io/badge/Django_(3.x)-092E20?style=for-the-badge&logo=django&logoColor=white" alt="django" />
    <img src="https://img.shields.io/badge/Rest_API-02303A?style=for-the-badge&logo=react-router&logoColor=white" alt="restAPI"/>
</p>

<p align="center"> 
    <br />&#10023;
    <a href="#getting-started">Getting Started</a> &#10023;
</p>

<br/>

This project is focused on developing a web application that provides weather forecasts by leveraging data from the external [OpenWeatherMap] API. Users can search for weather details for any location worldwide. Additionally, the application offers an automatic detection feature for the user's current location at startup, provided the user grants location access. 

Key features include caching weather data in both Redux store and session storage to minimize network requests, displaying maps for selected locations, and updating data synchronously to reflect the most current weather information. Users will enjoy interactive elements such as toast notifications for actions, a modal popup showcasing a seven-day weather forecast, and engaging zoom animations. The design is fully responsive, ensuring a seamless experience across various screen sizes.

## 🚀 Features
- Caching weather information in both the Redux store and session storage to decrease reliance on network calls.
- Enabling users to find weather conditions by city name.
- Automatically identifying and using the user's present location to present weather data.
- Displaying a geographical map pinpointing the selected area.
- Regularly refreshing data to ensure the display of the most current weather statistics.
- Generating toast notifications for user interactions.
- Utilizing a modal dialog to offer an extended seven-day weather forecast.
- Incorporating dynamic zoom animations for an engaging user experience.
- Designed to be fully adaptable across a range of device sizes.

<br/>

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) for React
- Python and Django for backend development

### Installation

#### React Frontend

1. **Clone the repository**

   ```bash
   git clone <repository_url>
   cd weather-app-react-django

Install dependencies

bash
Copy code
npm install
# or
yarn install
Run the application

bash
Copy code
npm start
# or
yarn start
The React application will start running on http://localhost:3000.

Django Backend
Create a virtual environment (optional but recommended)

bash
Copy code
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
Install Django and necessary packages

bash
Copy code
pip install django djangorestframework
Run migrations (if applicable)

bash
Copy code
python manage.py migrate
Start the Django development server

bash
Copy code
python manage.py runserver
The Django server will start running on http://localhost:8000.

Tools used on this project
Visual Studio Code
Vite Js React Template
Django REST framework
vbnet
Copy code

### Explanation:

1. **Prerequisites**: Outline the prerequisites for both frontend (React) and backend (Django) development.
2. **Installation**: Step-by-step instructions on how to clone the repository, install dependencies, and start the applications for both React and Django.
3. **Tools Used**: List the tools and frameworks used in the project for transparency and clarity.

Make sure to replace `<repository_url>` with the actual URL of your project's repository. This README.md file provides comprehensive instructions for setting up and running your React and Django project, ensuring ease of use for developers who want to contribute or deploy your application. Adjust the instructions as per your specific project structure and requirements.
