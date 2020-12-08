import { useEffect, useState } from 'react';
import type { WindsAloftData } from '../types';

const InitialLocation = {
  latitude: 0,
  longitude: 0,
};

type UseForecastReturn = {
  forecastJSON: WindsAloftData | null;
  setForecastJSON: Function;
};

export const useForecast = (
  location: typeof InitialLocation,
  elevation: number,
  setStatus: React.Dispatch<React.SetStateAction<string>>
): UseForecastReturn => {
  const [forecastJSON, setForecastJSON] = useState<WindsAloftData | null>(null);

  /**
   * On page load, load forecast data from cache
   */
  useEffect(() => {
    const cache: WindsAloftData | null = JSON.parse(
      sessionStorage.getItem('cache') || 'null'
    );
    setForecastJSON(cache);
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

  useEffect(() => {
    if (forecastJSON || !elevation) return;
    const abortController = new AbortController();
    const fetchWindsAloftData = async (
      location: typeof InitialLocation,
      elevation: number
    ) => {
      // console.log('fetching winds aloft');
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
  }, [location, elevation, setStatus, forecastJSON]);

  return { forecastJSON, setForecastJSON };
};
