import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors";
import { getCachedCity, setCachedCity } from "./weatherCache.js";

dotenv.config();
const app = express();
app.use(cors());

const PORT = 3001;
const apiKey = process.env.OPEN_WEATHER_API_KEY;

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "Missing city param" });

  const cachedCity = getCachedCity(city);
  if (cachedCity) {
    console.log(`Fresh cached data for: ${city}`);
    console.log(cachedCity);
    return res.json({ ...cachedCity.data, cached: true });
  }

  console.log(`New fetch call for: ${city}`);

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=hu`;
  const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=hu`;

  try {
    const [currentWeatherRes, forecastWeatherRes] = await Promise.all([
      fetch(currentWeatherUrl),
      fetch(forecastWeatherUrl),
    ]);

    if (!currentWeatherRes.ok || !forecastWeatherRes.ok) {
      throw new Error("Unable to fetch city Data from the API");
    }

    const currentWeatherData = await currentWeatherRes.json();
    const forecastWeatherData = await forecastWeatherRes.json();

    const responseData = {
      city: city,
      weatherData: currentWeatherData,
      forecastData: forecastWeatherData,
    };

    console.log(JSON.stringify(responseData));

    setCachedCity(city, responseData);

    res.json({ responseData, cached: false });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend is running on PORT:${PORT}`);
});
