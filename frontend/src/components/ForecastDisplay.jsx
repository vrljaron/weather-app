import WeatherDisplay from "./WeatherDisplay";

function ForecastDisplay({ forecastData }) {
  return (
    <div className="forecast-scroll">
      {forecastData.list.map((weatherBlockData, index) => (
        <WeatherDisplay key={index} weatherData={weatherBlockData} />
      ))}
    </div>
  );
}

export default ForecastDisplay;
