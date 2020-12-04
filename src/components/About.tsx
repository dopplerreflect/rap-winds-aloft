import './About.css';

const About = () => (
  <div className="About">
    <h1>About</h1>
    <p>
      Display a current winds aloft forecast from{' '}
      <a
        href="https://rucsoundings.noaa.gov/"
        target="_blank"
        rel="noopener noreferrer"
      >
        rucsoundings.noaa.gov
      </a>
      .
    </p>

    <p>
      Your location is determined using your device's location service. The
      ground elevation and winds aloft forecast for your location are fetched
      from online services. The forecast data is cached on your device until the
      start of each hour, and refetched after that.
    </p>

    <p>
      Reported altitudes are Above Ground Level (AGL). A future option may allow
      the choice do display altitudes above Mean Sea Level (MSL).
    </p>

    <p>
      <span className="warning">PLEASE NOTE:</span> This app probably only works
      correctly in the United States, as it uses NOAA and USGS services to
      gather data.
    </p>
    <h2>Future plans</h2>

    <ul>
      <li>Integrate map service to fine-tune location</li>
      <li>Provide preference option to view metric or imperial units</li>
      <li>Provide preference option for light or dark theme</li>
    </ul>

    <h2>Contact</h2>

    <p>David Rose (doppler@gmail.com)</p>

    <p>
      <a
        href="https://facebook.com/doppler"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
    </p>
  </div>
);

export default About;
