import React from 'react';
import { render, screen } from '@testing-library/react';
import WindsAloft, { WindsAloftTable, Wrapper } from './WindsAloft';

const forecastJSON = JSON.parse(
  '{"header":"Op40 02 h forecast valid for grid point 9.3 nm / 89 deg from 33.97,-85.17:","op40":"Op40        15     08      Dec    2020","type":"Op40","hour":15,"month":"Dec","day":8,"year":2020,"latitude":33.97,"longitude":84.98,"elevation":"261","soundings":[{"linType":9,"pressure":980.3,"altitude":{"metersAGL":78,"feetAGL":256,"metersMSL":339,"feetMSL":1112},"temp":{"c":1.3,"f":34.3},"dewPt":{"c":-3.7,"f":25.3},"windDir":333,"windSpd":{"kts":8,"mph":9}},{"linType":5,"pressure":977.4,"altitude":{"metersAGL":105,"feetAGL":344,"metersMSL":366,"feetMSL":1201},"temp":{"c":0.9,"f":33.6},"dewPt":{"c":-4.1,"f":24.6},"windDir":334,"windSpd":{"kts":11,"mph":13}},{"linType":5,"pressure":972,"altitude":{"metersAGL":152,"feetAGL":499,"metersMSL":413,"feetMSL":1355},"temp":{"c":0.3,"f":32.5},"dewPt":{"c":-4.3,"f":24.3},"windDir":334,"windSpd":{"kts":12,"mph":14}},{"linType":5,"pressure":962.8,"altitude":{"metersAGL":229,"feetAGL":751,"metersMSL":490,"feetMSL":1608},"temp":{"c":-0.4,"f":31.3},"dewPt":{"c":-4.6,"f":23.7},"windDir":335,"windSpd":{"kts":14,"mph":16}},{"linType":5,"pressure":949.2,"altitude":{"metersAGL":342,"feetAGL":1122,"metersMSL":603,"feetMSL":1978},"temp":{"c":-1.4,"f":29.5},"dewPt":{"c":-5,"f":23},"windDir":338,"windSpd":{"kts":16,"mph":18}},{"linType":5,"pressure":931.7,"altitude":{"metersAGL":489,"feetAGL":1604,"metersMSL":750,"feetMSL":2461},"temp":{"c":-2.3,"f":27.9},"dewPt":{"c":-4.9,"f":23.2},"windDir":342,"windSpd":{"kts":20,"mph":23}},{"linType":4,"pressure":925,"altitude":{"metersAGL":545,"feetAGL":1788,"metersMSL":806,"feetMSL":2644},"temp":{"c":-2.2,"f":28},"dewPt":{"c":-4.7,"f":23.5},"windDir":342,"windSpd":{"kts":21,"mph":24}},{"linType":5,"pressure":910.9,"altitude":{"metersAGL":665,"feetAGL":2182,"metersMSL":926,"feetMSL":3038},"temp":{"c":-2.1,"f":28.2},"dewPt":{"c":-4.4,"f":24.1},"windDir":343,"windSpd":{"kts":23,"mph":26}},{"linType":5,"pressure":888.2,"altitude":{"metersAGL":867,"feetAGL":2844,"metersMSL":1128,"feetMSL":3701},"temp":{"c":-0.5,"f":31.1},"dewPt":{"c":-6.9,"f":19.6},"windDir":342,"windSpd":{"kts":24,"mph":28}},{"linType":5,"pressure":863.6,"altitude":{"metersAGL":1094,"feetAGL":3589,"metersMSL":1355,"feetMSL":4446},"temp":{"c":0.8,"f":33.4},"dewPt":{"c":-11.2,"f":11.8},"windDir":339,"windSpd":{"kts":23,"mph":26}},{"linType":4,"pressure":850,"altitude":{"metersAGL":1221,"feetAGL":4006,"metersMSL":1482,"feetMSL":4862},"temp":{"c":0.7,"f":33.3},"dewPt":{"c":-13.9,"f":7},"windDir":337,"windSpd":{"kts":23,"mph":26}},{"linType":5,"pressure":836.1,"altitude":{"metersAGL":1354,"feetAGL":4442,"metersMSL":1615,"feetMSL":5299},"temp":{"c":0.5,"f":32.9},"dewPt":{"c":-16.7,"f":1.9},"windDir":335,"windSpd":{"kts":24,"mph":28}},{"linType":5,"pressure":805.8,"altitude":{"metersAGL":1649,"feetAGL":5410,"metersMSL":1910,"feetMSL":6266},"temp":{"c":-0.5,"f":31.1},"dewPt":{"c":-22.2,"f":-8},"windDir":328,"windSpd":{"kts":25,"mph":29}},{"linType":5,"pressure":772.7,"altitude":{"metersAGL":1984,"feetAGL":6509,"metersMSL":2245,"feetMSL":7365},"temp":{"c":-1.1,"f":30},"dewPt":{"c":-25.3,"f":-13.5},"windDir":322,"windSpd":{"kts":27,"mph":31}},{"linType":5,"pressure":736.8,"altitude":{"metersAGL":2364,"feetAGL":7756,"metersMSL":2625,"feetMSL":8612},"temp":{"c":-1.3,"f":29.7},"dewPt":{"c":-25.4,"f":-13.7},"windDir":319,"windSpd":{"kts":29,"mph":33}},{"linType":4,"pressure":700,"altitude":{"metersAGL":2772,"feetAGL":9094,"metersMSL":3033,"feetMSL":9951},"temp":{"c":-2.4,"f":27.7},"dewPt":{"c":-24.5,"f":-12.1},"windDir":319,"windSpd":{"kts":31,"mph":36}},{"linType":5,"pressure":698,"altitude":{"metersAGL":2795,"feetAGL":9170,"metersMSL":3056,"feetMSL":10026},"temp":{"c":-2.5,"f":27.5},"dewPt":{"c":-24.4,"f":-11.9},"windDir":319,"windSpd":{"kts":31,"mph":36}},{"linType":5,"pressure":656.3,"altitude":{"metersAGL":3281,"feetAGL":10764,"metersMSL":3542,"feetMSL":11621},"temp":{"c":-5.7,"f":21.7},"dewPt":{"c":-22.9,"f":-9.2},"windDir":314,"windSpd":{"kts":33,"mph":38}},{"linType":5,"pressure":611.7,"altitude":{"metersAGL":3828,"feetAGL":12559,"metersMSL":4089,"feetMSL":13415},"temp":{"c":-10,"f":14},"dewPt":{"c":-21.9,"f":-7.4},"windDir":305,"windSpd":{"kts":35,"mph":40}},{"linType":5,"pressure":564.7,"altitude":{"metersAGL":4426,"feetAGL":14521,"metersMSL":4687,"feetMSL":15377},"temp":{"c":-15.6,"f":3.9},"dewPt":{"c":-22.4,"f":-8.3},"windDir":300,"windSpd":{"kts":35,"mph":40}}]}'
);

describe('testing WindsAloft', () => {
  test('renders Winds Aloft starting', async () => {
    render(<WindsAloft />);
    const text = screen.getByText(/Loading\.\.\./);
    expect(text).toBeInTheDocument();
    expect(navigator.geolocation.getCurrentPosition).toBeCalledWith(
      expect.any(Function)
    );
  });
});

describe('WindsAloftTable', () => {
  test('renders', () => {
    render(<WindsAloftTable forecastJSON={forecastJSON} />);
    expect(screen.getByTestId('winds-aloft-chart')).toBeInTheDocument();
  });
});

describe('Wrapper', () => {
  test('renders loader if forecastJSON is null', () => {
    render(<Wrapper status="Foo" forecastJSON={null} />);
    expect(screen.getByText('Foo')).toBeInTheDocument();
  });

  test('renders forecast if forecastJSON is not null', () => {
    render(<Wrapper status="" forecastJSON={forecastJSON} />);
    expect(screen.getByTestId('winds-aloft-chart')).toBeInTheDocument();
  });
});
