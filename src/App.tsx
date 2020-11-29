import React, { useEffect, useState } from 'react';
import './App.css';

const InitialLocation = {
  latitude: 0,
  longitude: 0,
};

function App() {
  const [location, setLocation] = useState(InitialLocation);
  const [elevation, setElevation] = useState(0);
  const [forecastText, setForecastText] = useState('');

  const setCoordinates = (position: GeolocationPosition) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setCoordinates);
  }, []);

  useEffect(() => {
    const fectchWindsAloftData = async (location: typeof InitialLocation) => {
      const queryStr = Object.entries({
        airport: `${location.latitude}%2C${location.longitude}`,
        startSecs: Math.floor(Date.now() / 1000),
        endSecs: Math.floor(Date.now() / 1000) + 3600,
      })
        .map(pair => pair.join('='))
        .join('&');

      const url = `https://cors-anywhere.herokuapp.com/https://rucsoundings.noaa.gov/get_soundings.cgi?${queryStr}&`;

      const response = await fetch(url, { mode: 'cors' });

      setForecastText(await response.text());
    };

    const fetchElevationData = async (location: typeof InitialLocation) => {
      const queryStr = Object.entries({
        x: location.longitude,
        y: location.latitude,
        units: 'Meters',
        output: 'json',
      })
        .map(pair => pair.join('='))
        .join('&');

      const url = `https://nationalmap.gov/epqs/pqs.php?${queryStr}`;
      const response = await fetch(url);
      const json = await response.json();
      setElevation(
        json.USGS_Elevation_Point_Query_Service.Elevation_Query.Elevation
      );
    };
    if (location.latitude) {
      fectchWindsAloftData(location);
      fetchElevationData(location);
    }
  }, [location]);

  return (
    <div className="App">
      <code>{forecastText}</code>
      <code>Elevation: {elevation}</code>
    </div>
  );
}

export default App;
