import Arrow from './Arrow';

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
      <br />
      Elevation: {data.elevation}m MSL
    </div>
  </div>
);

export default WindsAloft;
