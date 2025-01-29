import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";

const Weather: React.FC = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      // Fetch geocoding information
      const geocodeResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}`
      );

      if (!geocodeResponse.ok) {
        throw new Error("Failed to fetch location coordinates.");
      }

      const geocodeData = await geocodeResponse.json();

      if (!geocodeData.results || geocodeData.results.length === 0) {
        throw new Error("Location not found.");
      }

      const { latitude, longitude } = geocodeData.results[0];

      // Fetch historical weather data
      const weatherResponse = await fetch(
        `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=2024-01-01&end_date=2025-01-01&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&temperature_unit=fahrenheit&timezone=auto&precipitation_unit=inch`
      );

      if (!weatherResponse.ok) {
        throw new Error("Failed to fetch weather data.");
      }

      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div>
        <div>
          <div>Historical Weather Search</div>
        </div>
        <div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-text"
            />
            <button className="btn btn-primary" onClick={fetchWeatherData} disabled={loading || !location}>
              {loading ? "Loading..." : "Get Weather Data"}
            </button>

            {error && <p className="text-red-500">{error}</p>}

            {weatherData && (
              <div className="mt-4">
                <h2 className="font-bold">Weather Data:</h2>
                <p>Average High Temp: {Math.floor(weatherData.daily.temperature_2m_max.reduce((avg: number, value: number, _: any, { length }: any) => {
        return avg + value / length;
    }, 0))}°F</p>
                <p>Average Low Temp: {Math.floor(weatherData.daily.temperature_2m_min.reduce((avg: number, value: number, _: any, { length }: any) => {
        return avg + value / length;
    }, 0))}°F</p>
                <p>Average Daily Precipitation: {weatherData.daily.precipitation_sum.reduce((avg: number, value: number, _: any, { length }: any) => {
        return avg + value / length;
    }, 0)} inches</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
