import React, { useState } from 'react';
import { useLocation } from '../lib/useLocation';
import { useElevation } from '../lib/useElevation';
import { useForecast } from '../lib/useForecast';
import Loader from './Loading.svg';
import Arrow from './Arrow';
import { WindsAloftData } from '../types';

const WindsAloft: React.FC = () => {
  const [status, setStatus] = useState('Loading...');
  const location = useLocation();
  const elevation = useElevation(location, setStatus);
  const { forecastJSON } = useForecast(location, elevation, setStatus);

  return <Wrapper status={status} forecastJSON={forecastJSON} />;
};

export default WindsAloft;

export const Wrapper: React.FC<{
  status: string;
  forecastJSON: WindsAloftData | null;
}> = ({ status, forecastJSON }) => {
  return forecastJSON ? (
    <WindsAloftTable forecastJSON={forecastJSON} />
  ) : (
    <LoaderDiv status={status} />
  );
};

export const LoaderDiv: React.FC<{ status: string }> = ({ status }) => (
  <div className="Loading-indicator">
    <h2>{status}</h2>
    <img
      src={Loader}
      alt="Loading indicator"
      className="Loading-indicator-svg"
    />
  </div>
);

export const WindsAloftTable: React.FC<{ forecastJSON: WindsAloftData }> = ({
  forecastJSON,
}) => (
  <div id="winds-aloft-chart" data-testid="winds-aloft-chart">
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
);
