function SearchBar({ fetchWeather, setCity, city }) {
  return (
    <div>
      <input
        type="text"
        value={city}
        name="city"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Where are you?"
        className="input"
      />
      <button onClick={fetchWeather}>Search</button>
    </div>
  );
}

export default SearchBar;
