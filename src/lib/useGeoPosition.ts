import { useState, useEffect } from 'react';
export const useGeoPosition = () => {
  const [geoPosition, setGeoPosition] = useState({
    latitude: 0,
    longitude: 0,
    altitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setGeoPosition({
          latitude: Number(position.coords.latitude.toFixed(7)),
          longitude: Number(position.coords.longitude.toFixed(7)),
          altitude: Number(position.coords.altitude?.toFixed(1)),
        });
      }
    );
  }, []);

  return geoPosition;
};
