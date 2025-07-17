import WeatherDisplay from "./WeatherDisplay";

function ForecastDisplay({ forecastData }) {
  return (
    <div>
      {forecastData.map((weatherBlockData) => {
        <WeatherDisplay weatherData={weatherBlockData}></WeatherDisplay>;
      })}
    </div>
  );
}

export default ForecastDisplay;
