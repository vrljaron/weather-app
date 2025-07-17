import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeather() {
    if (!city) return;
    try {
      const respone = await fetch(`http://localhost:3001/weather?city=${city}`);
      if (!respone.ok) throw new Error({ error: "The city cannot be found." });
      const weatherData = await respone.json();
      setWeatherData(weatherData);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <SearchBar
        fetchWeather={fetchWeather}
        setCity={setCity}
        city={city}
      ></SearchBar>
      {weatherData && (
        <div className="weather-container">
          <WeatherDisplay
            weatherData={weatherData.currentData}
            city={weatherData.city}
          />
          <ForecastDisplay forecastData={weatherData.forecastData} />
        </div>
      )}
    </div>
  );
}

export default App;
