import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeather() {
    if (!city) return;
    try {
      const respone = await fetch(`http://localhost:3001/weather?city=${city}`);
      if (!respone.ok) throw new Error({ error: "The city cannot be found." });
      const weatherData = await respone.json();
      console.log(`Fetch Call resp: ${JSON.stringify(respone)}`);
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
      {weatherData?.name && (
        <WeatherDisplay weatherData={weatherData}></WeatherDisplay>
      )}
    </div>
  );
}

export default App;
