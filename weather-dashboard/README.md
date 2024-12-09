# WeatherDashboard
    A simple weather dashboard application built using Angular. The app allows users to search for cities, view current weather conditions, and get a 5-day forecast. The list of cities is stored in local storage for persistence across page refreshes.
## Features
    •	Add multiple cities to the dashboard.
    •	View current weather conditions for each city.
    •	Display a 5-day weather forecast for each city.
    •	Cities persist across page refreshes using Local Storage.
    •	Responsive and modern UI design with animations.
## Technologies Used
    •	Angular 18 (latest version)
    •	OpenWeatherMap API
    •	RxJS for managing asynchronous operations
    •	TailwindCSS for styling
    •	Angular Animations for smooth transitions
## Setup Instructions
    Prerequisites
    •	Node.js (version 16 or higher)
    •	Angular CLI (version 18 or higher)
    1. Clone the Repository
         bash
         git clone https://github.com/AnushAvanesyan/Weather-dashboard.git
     2. Install Dependencies
        Navigate into the project directory and install the required dependencies.
        bash
        cd weather-dashboard
        npm install
     3. Add Your OpenWeatherMap API Key
        You need to obtain an API key from OpenWeatherMap.
        To get the API key:
        •	Go to the OpenWeatherMap API page.
        •	Sign up for an account and navigate to the API Keys section.
        •	Copy the API key provided.
        Once you have the key, update the API URL in the weather.service.ts file:
        private apiKey = 'your-openweathermap-api-key'; // Replace with your actual API key
        Alternatively, you can store your API key in an environment variable or use a .env file for added security.
     4. Running the Application
        To run the application locally, use the following command:
        bash
        ng serve
        This will start the development server, and you can access the app in your browser at:  http://localhost:4200
     5. Build the Application
        To build the project for production, use the following command:
        bash
        ng build --prod
        This will create a production-ready build in the dist/ directory.
## Usage
     1. Add a City
       •	Enter the name of a city in the input field.
       •	Click the "Add City" button to see the current weather conditions for the city and its 5-day forecast.
     2. Remove a City
       •	Click the "Remove" button on a city card to remove it from the dashboard.
     3. Persist Cities
        •	Cities are saved in local storage so that they persist across page refreshes.
## API Documentation
    OpenWeatherMap API
        -The weather data is fetched using the OpenWeatherMap API. The following endpoint is used to get the current weather data for a city:
          bash
          GET https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric
          This will return weather data in Celsius. The response includes temperature, humidity, weather condition, and more.
        - The 5-day weather forecast is fetched using the following endpoint:
          bash
          GET https://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid={API_KEY}&units=metric
          This returns weather data for the next 5 days, which is displayed in the app.
## Styling
        The app is styled using TailwindCSS for a modern, responsive layout. You can modify the styles in the styles.css file, or you can update the classes in the component templates.
## Animations
        Angular animations are used for smooth transitions when adding or removing cities. To enable animations, make sure that BrowserAnimationsModule is imported in your AppModule (or in any standalone components that use animations).
## Testing
        This application includes unit tests for components and services.
        To run the tests:
        bash
        ng test
## Contributing
     1.	Fork the repository.
     2.	Create a new branch (git checkout -b feature/your-feature).
     3.	Make your changes.
     4.	Commit your changes (git commit -am 'Add new feature').
     5.	Push to the branch (git push origin feature/your-feature).
     6.	Create a pull request.
## License
       This project is open-source and available under the MIT License.

