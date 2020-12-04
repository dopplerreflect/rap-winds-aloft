import React, { useState, useEffect } from 'react';
import { useLocation } from '../lib/useLocation';
import { useElevation } from '../lib/useElevation';
import Loader from './Loading.svg';
import Arrow from './Arrow';

const InitialLocation = {
  latitude: 0,
  longitude: 0,
};

const WindsAloft: React.FC = () => {
  const [status, setStatus] = useState('Loading...');
  const location = useLocation();
  const elevation = useElevation(location, setStatus);
  const [forecastJSON, setForecastJSON] = useState<WindsAloftData | null>(null);

  /**
   * On page load, load forecast data from cache
   */
  useEffect(() => {
    const cache: WindsAloftData | null = JSON.parse(
      sessionStorage.getItem('cache') || 'null'
    );
    if (cache) {
      setForecastJSON(cache);
      // setElevation(cache?.elevation);
    }
  }, []);

  /**
   * On page load, start a timer that fires every minute.
   * When the current hour matches the forecast's hour, clear the
   * forecast cache.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if (forecastJSON) {
        if (new Date().getUTCHours() === forecastJSON.hour) {
          console.log('clearing cache');
          sessionStorage.removeItem('cache');
          setForecastJSON(null);
        }
      }
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, [forecastJSON]);

  /**
   * Once elevation is set, fetch the forecastJSON.
   */
  useEffect(() => {
    if (forecastJSON || !elevation) return;
    const abortController = new AbortController();
    const fetchWindsAloftData = async (
      location: typeof InitialLocation,
      elevation: number
    ) => {
      console.log('fetching winds aloft');
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
