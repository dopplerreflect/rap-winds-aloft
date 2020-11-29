import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

type Coords = {
  latitude: number;
  longitude: number;
};

function App() {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [forecastText, setForecastText] = useState('');

  const setPosition = (position: GeolocationPosition) => {
    setCoords({
      latitude: Number(position.coords.latitude.toFixed(4)),
      longitude: Number(position.coords.longitude.toFixed(4)),
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setPosition);
  }, []);

  useEffect(() => {
    const fectchWindsAloftData = async (coords: Coords) => {
      const queryObj = {
        airport: `${coords.latitude}%2C${coords.longitude}`,
        startSecs: Math.floor(Date.now() / 1000),
        endSecs: Math.floor(Date.now() / 1000) + 3600,
      };
      const queryStr = Object.entries(queryObj)
        .map(pair => pair.join('='))
        .join('&');

      const url = `https://cors-anywhere.herokuapp.com/https://rucsoundings.noaa.gov/get_soundings.cgi?${queryStr}&`;

      const result = await fetch(url, { mode: 'cors' });

      setForecastText(await result.text());
    };
    if (coords) fectchWindsAloftData(coords);
  }, [coords]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {coords && (
          <dl>
            <dt>Latitude</dt>
            <dd>{coords.latitude}</dd>
            <dt>Longitude</dt>
            <dd>{coords.longitude}</dd>
          </dl>
        )}
        <code>{forecastText}</code>
      </header>
    </div>
  );
}

export default App;
