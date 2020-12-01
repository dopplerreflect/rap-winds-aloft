import React, { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loading.svg';
import Header from './components/Header';
import WindsAloft from './components/WindsAloft';
import { transformWindsAloftData } from './utils/winds-aloft';

const InitialLocation = {
  latitude: 0,
  longitude: 0,
};

function App() {
  const [location, setLocation] = useState(InitialLocation);
  const [elevation, setElevation] = useState(0);
  const [forecastText, setForecastText] = useState('');
  const [status, setStatus] = useState('');

  const setCoordinates = (position: GeolocationPosition) => {
    setLocation({
      latitude: Number(position.coords.latitude.toFixed(7)),
      longitude: Number(position.coords.longitude.toFixed(7)),
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setCoordinates);
  }, []);

  useEffect(() => {
    const fetchWindsAloftData = async (location: typeof InitialLocation) => {
      if (!location.latitude) return;
      setStatus('Fetching winds aloft forecast data...');
      console.log('Fetching winds aloft.');
      const queryStr = Object.entries({
        airport: `${location.latitude}%2C${location.longitude}`,
        startSecs: Math.floor(Date.now() / 1000),
        endSecs: Math.floor(Date.now() / 1000) + 3600,
      })
        .map(pair => pair.join('='))
        .join('&');
      const url = `https://cors-anywhere.herokuapp.com/https://rucsoundings.noaa.gov/get_soundings.cgi?${queryStr}&`;
      const response = await fetch(url, { mode: 'cors' });
      const forecastText = await response.text();
      setForecastText(forecastText);
    };
    const fetchElevationData = async (location: typeof InitialLocation) => {
      if (!location.latitude) return;
      setStatus('Determining location elevation...');
      console.log('Fetching elevation.');
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
    fetchElevationData(location).then(() => {
      setStatus('');
      fetchWindsAloftData(location).then(() => setStatus(''));
    });
  }, [location]);

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Main">
        {forecastText ? (
          <WindsAloft data={transformWindsAloftData(forecastText, elevation)} />
        ) : (
          <div className="Loading-indicator">
            <h2>{status}</h2>
            <img
              src={Loader}
              alt="Loading indicator"
              className="Loading-indicator-svg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
