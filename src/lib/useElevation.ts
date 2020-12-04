import { useEffect, useState } from 'react';

const InitialLocation = {
  latitude: 0,
  longitude: 0,
};
export const useElevation = (
  location: typeof InitialLocation,
  setStatus: React.Dispatch<React.SetStateAction<string>>
) => {
  const [elevation, setElevation] = useState(0);
  useEffect(() => {
    if (elevation || !location.latitude) return;
    const abortController = new AbortController();
    const fetchElevationData = async (location: typeof InitialLocation) => {
      console.log('fetching elevation');
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
  }, [location, elevation, setStatus]);
  return elevation;
};
