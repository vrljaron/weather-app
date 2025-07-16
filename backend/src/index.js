import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 3001;

app.use(cors());

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "Missing city param" });

  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=hu`;

  try {
    const respone = await fetch(url);
    if (!respone.ok) throw new Error("Unable to fetch city Data");
    const weatherData = await respone.json();
    res.json(weatherData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend is running on PORT:${PORT}`);
});
