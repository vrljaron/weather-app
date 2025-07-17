function WeatherDisplay({ weatherData, city }) {
  const isForecast = weatherData.dt_txt != null;
  const label = isForecast ? weatherData.dt_txt : city;
  const temperature = weatherData.main?.temp;
  const description = weatherData.weather?.[0]?.description;
  const icon = weatherData.weather?.[0]?.icon;

  return (
    <div className="weather-card">
      {isForecast ? <p>{label}</p> : <h2>{label}</h2>}
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
