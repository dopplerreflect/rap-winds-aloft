import './About.css';
import React from 'react';

const About = () => (
  <div className="About">
    <h1>About</h1>
    <h2>What it is</h2>
    <p>
      Display a current winds aloft forecast from{' '}
      <a href="https://rucsoundings.noaa.gov/" target="_blank" rel="noopener">
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
      <span style={{ color: 'yellow', fontWeight: 'bold' }}>PLEASE NOTE:</span>{' '}
      This app probably only works correctly in the United States, as it uses
      NOAA and USGS services to gather data.
    </p>
    <h2>Future plans</h2>

    <ul>
      <li>Integrate map service to fine-tune location</li>
      <li>Provide preference option to view metric or imperial units</li>
      <li>Provide preference option for light or dark theme</li>
      <li>Provide option to clear forecast cache</li>
      <li>Provide option to "Save" app to device</li>
    </ul>

    <h2>Contact</h2>

    <p>David Rose (doppler@gmail.com)</p>

    <p>
      <a href="https://facebook.com/doppler" target="_blank" rel="noopener">
        Facebook
      </a>
    </p>
  </div>
);

export default About;
