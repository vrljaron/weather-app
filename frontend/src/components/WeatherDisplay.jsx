function WeatherDisplay({ weatherData, isForecast }) {
  const temperature = weatherData.main?.temp;
  const description = weatherData.weather?.[0]?.description;
  const icon = weatherData.weather?.[0]?.icon;
  const time = isForecast
    ? weatherData.dt_txt
    : new Date(weatherData.dt * 1000).toLocaleString();

  return (
    <div className="weather-card">
      <p>{isForecast ? "Forecast" : "Current"}</p>
      <p>{time}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather Icon"
      />
      <p>{description}</p>
      <p>{temperature} °C</p>
    </div>
  );
}

export default WeatherDisplay;
