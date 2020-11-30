import React, { useEffect, useState } from 'react';
import './App.css';
import { transformWindsAloftData } from './utils/winds-aloft';

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
    const fetchWindsAloftData = async (location: typeof InitialLocation) => {
      if (!location.latitude) return;
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
      setForecastText(await response.text());
    };
    const fetchElevationData = async (location: typeof InitialLocation) => {
      if (!location.latitude) return;
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
    fetchElevationData(location);
    fetchWindsAloftData(location);
  }, [location]);

  return (
    <div className="App">
      {forecastText && (
        <WindsAloft data={transformWindsAloftData(forecastText, elevation)} />
      )}
    </div>
  );
}

export default App;

const WindsAloft: React.FC<{ data: WindsAloftData }> = ({ data }) => (
  <div id="winds-aloft-chart">
    {data.soundings.map((sounding, i) => (
      <div className="sounding" key={i}>
        <div>{sounding.altitude.feetAGL} ft.</div>
        <div>{sounding.windSpd.mph} mph</div>
        <div>
          <Arrow dir={sounding.windDir} />
        </div>
        <div>{sounding.windDir}°</div>
        <div>{sounding.temp.f}°F</div>
      </div>
    ))}
    <div className="footer">
      {data.header}
      <br />
      {data.op40}
    </div>
  </div>
);

const Arrow: React.FC<{ dir: number }> = ({ dir }) => (
  <svg viewBox="0 0 512 512" height="2em" width="2em">
    <circle
      cx="256"
      cy="256"
      r="237.32505032019532"
      fill="hsl(210, 100%, 33%)"
      stroke="hsl(210, 100%, 66%)"
      strokeWidth="37.349899359609346"
    />
    <path
      d="
        M 260.4 0
        L 269.56814539771983 274.6749500197458
        L 313.475583094649 335.1083534400135
        L 256 512
        L 198.52441690535102 335.1083534400135
        L 242.43185460228014 274.6749500197458
        L 251.6 0
        Z"
      fill="hsl(30, 100%, 50%)"
      transform={`rotate(${dir}, 256, 256)`}
    />
  </svg>
);
