# Weather App 2024

A simple and intuitive weather application that provides current weather information and forecasts for locations worldwide. Built with React and Vite, it uses the OpenWeatherMap API to fetch and display weather data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

Step-by-step guide on how to install and set up the project.

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Koundu/React-Weather-App-2024.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd React-Weather-App-2024
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Obtain an API key from OpenWeatherMap**:
    - Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and get your API key.
5. **Create a `.env` file in the root directory and add your API key**:
    ```env
    VITE_WEATHER_API_KEY=your_api_key_here;
    VITE_BASE_URL = 'https://api.openweathermap.org/data/2.5/'
    ```
6. **Start the development server**:
    ```bash
    npm run dev
    ```

## Usage

Basic example of how to use the project.

1. **Run the application**:
    ```bash
    npm run dev
    ```
2. **Open your browser and navigate to**:
    ```
    http://localhost:3000
    ```
3. **Enter a location in the search bar to get the current weather and forecast for that location**.

### Example Code

Here is a basic example of how a component in the app might look:

```jsx
import React, { useState, useEffect } from 'react';

function Weather({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, [city]);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
    </div>
  );
}

export default Weather;
```
#### Features

- Current Weather: Get real-time weather information for any city.
- 5-Day Forecast: View weather forecasts for the next five days.
- Search Functionality: Easily search for weather information by city name.
- Responsive Design: Optimized for both desktop and mobile devices.
##### Contributing

. 1. Fork the repository:
- Click the "Fork" button at the top right of this repository.
. 2. Clone your fork:
bash git clone https://github.com/your-username/weather-app.git . 3. Create a branch:
bash git checkout -b feature/your-feature-name . 4. Make your changes.
. 5. Commit your changes:
bash git commit -m 'Add some feature' . 6. Push to the branch:
bash git push origin feature/your-feature-name . 7. Open a pull request:
- Go to the original repository.
- Click on the "Pull Requests" tab.
- Click "New Pull Request".
- Compare your branch with the original repository's branch.
- Create the pull request.

###### Licensing
License
. The project's license information.
. This project is licensed under the MIT License - see the LICENSE file for details.