import React, { useState, useEffect } from 'react';
import Loader from './Loading.svg';
import Arrow from './Arrow';

const InitialLocation = {
  latitude: 0,
  longitude: 0,
};

const WindsAloft: React.FC = () => {
  const [location, setLocation] = useState(InitialLocation);
  const [elevation, setElevation] = useState(0);
  const [forecastJSON, setForecastJSON] = useState<WindsAloftData | null>(null);
  const [status, setStatus] = useState('Loading...');

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
    const cache: WindsAloftData | null = JSON.parse(
      sessionStorage.getItem('cache') || 'null'
    );
    if (cache && cache.hour > new Date().getUTCHours()) {
      setForecastJSON(cache);
      setElevation(cache.elevation);
    }
  }, []);

  useEffect(() => {
    if (elevation || !location.latitude) return;
    const abortController = new AbortController();
    const fetchElevationData = async (location: typeof InitialLocation) => {
      try {
        setStatus('Determining location elevation...');
        const queryStr = Object.entries({
          x: location.longitude,
          y: location.latitude,
          units: 'Meters',
          output: 'json',
        })
          .map(pair => pair.join('='))
          .join('&');
        const url = `https://nationalmap.gov/epqs/pqs.php?${queryStr}`;
        const response = await fetch(url, { signal: abortController.signal });
        const json = await response.json();
        setElevation(
          json.USGS_Elevation_Point_Query_Service.Elevation_Query.Elevation
        );
        setStatus('');
      } catch (e) {
        console.error(e.name);
      }
    };
    fetchElevationData(location);

    return () => abortController.abort();
  }, [location, elevation]);

  useEffect(() => {
    if (forecastJSON || !elevation) return;
    const abortController = new AbortController();
    const fetchWindsAloftData = async (
      location: typeof InitialLocation,
      elevation: number
    ) => {
      try {
        setStatus('Fetching winds aloft forecast data...');
        const url = `https://weatherflow-dash.herokuapp.com/winds-aloft/${location.latitude}/${location.longitude}/${elevation}`;
        const response = await fetch(url, { signal: abortController.signal });
        const json = await response.json();
        setForecastJSON(json);
        sessionStorage.setItem('cache', JSON.stringify(json));
        setStatus('');
      } catch (e) {
        console.error(e.name);
      }
    };
    fetchWindsAloftData(location, elevation);

    return () => abortController.abort();
  }, [location, elevation, forecastJSON]);

  return forecastJSON ? (
    <div id="winds-aloft-chart">
      {forecastJSON.soundings
        .map((sounding, i) => (
          <div className="sounding" key={i}>
            <div>{sounding.altitude.feetAGL} ft.</div>
            <div>{sounding.windSpd.mph} mph</div>
            <div>
              <Arrow dir={sounding.windDir} />
            </div>
            <div>{sounding.windDir}°</div>
            <div>{sounding.temp.f}°F</div>
          </div>
        ))
        .reverse()}
      <div className="footer">
        {forecastJSON.header}
        <br />
        {forecastJSON.op40}
        <br />
        Elevation: {forecastJSON.elevation}m MSL
      </div>
    </div>
  ) : (
    <div className="Loading-indicator">
      <h2>{status}</h2>
      <img
        src={Loader}
        alt="Loading indicator"
        className="Loading-indicator-svg"
      />
    </div>
  );
};

export default WindsAloft;
