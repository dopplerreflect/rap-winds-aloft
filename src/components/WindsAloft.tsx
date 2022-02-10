import { useState } from 'react';
import { useGeoPosition } from '../lib/useGeoPosition';
import { useElevation } from '../lib/useElevation';
import { useForecast } from '../lib/useForecast';
import Loader from './Loading.svg';
import Arrow from './Arrow';
import { WindsAloftData, GeoPosition } from '../types';
import { useSettings } from './SettingsProvider';

const WindsAloft: React.FC = () => {
  const [status, setStatus] = useState('Loading...');
  const geoPosition = useGeoPosition();
  const elevation = useElevation(geoPosition, setStatus);
  const { forecastJSON } = useForecast(geoPosition, elevation, setStatus);

  return <Wrapper status={status} forecastJSON={forecastJSON} geoPosition={geoPosition} />;
};

export default WindsAloft;

export const Wrapper: React.FC<{
  status: string;
  forecastJSON: WindsAloftData | null;
  geoPosition: GeoPosition;
}> = ({ status, forecastJSON, geoPosition }) => {
  return forecastJSON ? (
    <WindsAloftTable forecastJSON={forecastJSON} geoPosition={geoPosition} />
  ) : (
    <LoaderDiv status={status} />
  );
};

export const LoaderDiv: React.FC<{ status: string }> = ({ status }) => (
  <div className='Loading-indicator'>
    <h2>{status}</h2>
    <img src={Loader} alt='Loading indicator' className='Loading-indicator-svg' />
  </div>
);

export const WindsAloftTable: React.FC<{
  forecastJSON: WindsAloftData;
  geoPosition: GeoPosition;
}> = ({ forecastJSON, geoPosition }) => {
  const {
    state: { displayMetric },
  } = useSettings();
  return (
    <div id='winds-aloft-chart' data-testid='winds-aloft-chart'>
      {forecastJSON.soundings
        .map((sounding, i) => (
          <div className='sounding' key={i}>
            <div>
              {displayMetric
                ? `${sounding.altitude.metersAGL} m.`
                : `${sounding.altitude.feetAGL} ft.`}
            </div>
            <div>
              {displayMetric ? `${sounding.windSpd.kts} kts` : `${sounding.windSpd.mph} mph`}
            </div>
            <div>
              <Arrow dir={sounding.windDir} />
            </div>
            <div>{sounding.windDir}°</div>
            <div>{displayMetric ? `${sounding.temp.c} °C` : `${sounding.temp.f}°F`}</div>
          </div>
        ))
        .reverse()}
      <div className='footer'></div>
    </div>
  );
};
