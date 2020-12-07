import React, { useState, useEffect } from 'react';
import type { WindsAloftData } from '../types';
import { useLocation } from '../lib/useLocation';
import { useElevation } from '../lib/useElevation';
import { useForecast } from '../lib/useForecast';
import Loader from './Loading.svg';
import Arrow from './Arrow';

const WindsAloft: React.FC = () => {
  const [status, setStatus] = useState('Loading...');
  const location = useLocation();
  const elevation = useElevation(location, setStatus);
  const { forecastJSON, setForecastJSON } = useForecast(
    location,
    elevation,
    setStatus
  );

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
  }, [setForecastJSON]);

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
  }, [forecastJSON, setForecastJSON]);

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
