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
