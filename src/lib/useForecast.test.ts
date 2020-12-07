import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import { useForecast } from './useForecast';

const setStatus = jest.fn();

const ForecastResult =
  '{"header":"Op40 02 h forecast valid for grid point 9.3 nm / 89 deg from 33.97,-85.17:","op40":"Op40        19     07      Dec    2020","type":"Op40","hour":19,"month":"Dec","day":7,"year":2020,"latitude":33.97,"longitude":84.98,"elevation":"261","soundings":[{"linType":9,"pressure":973,"altitude":{"metersAGL":78,"feetAGL":256,"metersMSL":339,"feetMSL":1112},"temp":{"c":4.5,"f":40.1},"dewPt":{"c":-0.9,"f":30.4},"windDir":315,"windSpd":{"kts":11,"mph":13}},{"linType":5,"pressure":970.1,"altitude":{"metersAGL":105,"feetAGL":344,"metersMSL":366,"feetMSL":1201},"temp":{"c":4,"f":39.2},"dewPt":{"c":-1.2,"f":29.8},"windDir":316,"windSpd":{"kts":15,"mph":17}},{"linType":5,"pressure":964.8,"altitude":{"metersAGL":153,"feetAGL":502,"metersMSL":414,"feetMSL":1358},"temp":{"c":3.5,"f":38.3},"dewPt":{"c":-1.5,"f":29.3},"windDir":316,"windSpd":{"kts":18,"mph":21}},{"linType":5,"pressure":955.6,"altitude":{"metersAGL":231,"feetAGL":758,"metersMSL":492,"feetMSL":1614},"temp":{"c":2.7,"f":36.9},"dewPt":{"c":-1.7,"f":28.9},"windDir":317,"windSpd":{"kts":19,"mph":22}},{"linType":5,"pressure":942.1,"altitude":{"metersAGL":345,"feetAGL":1132,"metersMSL":606,"feetMSL":1988},"temp":{"c":1.6,"f":34.9},"dewPt":{"c":-2,"f":28.4},"windDir":318,"windSpd":{"kts":20,"mph":23}},{"linType":4,"pressure":925,"altitude":{"metersAGL":491,"feetAGL":1611,"metersMSL":752,"feetMSL":2467},"temp":{"c":0.1,"f":32.2},"dewPt":{"c":-2.2,"f":28},"windDir":319,"windSpd":{"kts":21,"mph":24}},{"linType":5,"pressure":924.8,"altitude":{"metersAGL":493,"feetAGL":1617,"metersMSL":754,"feetMSL":2474},"temp":{"c":0.1,"f":32.2},"dewPt":{"c":-2.2,"f":28},"windDir":319,"windSpd":{"kts":21,"mph":24}},{"linType":5,"pressure":904.1,"altitude":{"metersAGL":671,"feetAGL":2201,"metersMSL":932,"feetMSL":3058},"temp":{"c":-1.6,"f":29.1},"dewPt":{"c":-2.5,"f":27.5},"windDir":320,"windSpd":{"kts":21,"mph":24}},{"linType":5,"pressure":881.6,"altitude":{"metersAGL":871,"feetAGL":2858,"metersMSL":1132,"feetMSL":3714},"temp":{"c":-3.3,"f":26.1},"dewPt":{"c":-3.2,"f":26.2},"windDir":322,"windSpd":{"kts":21,"mph":24}},{"linType":5,"pressure":857.3,"altitude":{"metersAGL":1094,"feetAGL":3589,"metersMSL":1355,"feetMSL":4446},"temp":{"c":-4.6,"f":23.7},"dewPt":{"c":-4.6,"f":23.7},"windDir":323,"windSpd":{"kts":21,"mph":24}},{"linType":4,"pressure":850,"altitude":{"metersAGL":1161,"feetAGL":3809,"metersMSL":1422,"feetMSL":4665},"temp":{"c":-4.5,"f":23.9},"dewPt":{"c":-5.7,"f":21.7},"windDir":322,"windSpd":{"kts":21,"mph":24}},{"linType":5,"pressure":830.1,"altitude":{"metersAGL":1348,"feetAGL":4423,"metersMSL":1609,"feetMSL":5279},"temp":{"c":-4.4,"f":24.1},"dewPt":{"c":-8.7,"f":16.3},"windDir":321,"windSpd":{"kts":20,"mph":23}},{"linType":5,"pressure":800.2,"altitude":{"metersAGL":1638,"feetAGL":5374,"metersMSL":1899,"feetMSL":6230},"temp":{"c":-3.9,"f":25},"dewPt":{"c":-18.1,"f":-0.6},"windDir":313,"windSpd":{"kts":22,"mph":25}},{"linType":5,"pressure":767.4,"altitude":{"metersAGL":1967,"feetAGL":6453,"metersMSL":2228,"feetMSL":7310},"temp":{"c":-5.7,"f":21.7},"dewPt":{"c":-22.8,"f":-9},"windDir":314,"windSpd":{"kts":26,"mph":30}},{"linType":5,"pressure":731.9,"altitude":{"metersAGL":2336,"feetAGL":7664,"metersMSL":2597,"feetMSL":8520},"temp":{"c":-8.3,"f":17.1},"dewPt":{"c":-23,"f":-9.4},"windDir":316,"windSpd":{"kts":30,"mph":35}},{"linType":4,"pressure":700,"altitude":{"metersAGL":2680,"feetAGL":8793,"metersMSL":2941,"feetMSL":9649},"temp":{"c":-10.9,"f":12.4},"dewPt":{"c":-18.9,"f":-2},"windDir":315,"windSpd":{"kts":35,"mph":40}},{"linType":5,"pressure":693.6,"altitude":{"metersAGL":2752,"feetAGL":9029,"metersMSL":3013,"feetMSL":9885},"temp":{"c":-11.4,"f":11.5},"dewPt":{"c":-18,"f":-0.4},"windDir":315,"windSpd":{"kts":36,"mph":41}},{"linType":5,"pressure":652.5,"altitude":{"metersAGL":3219,"feetAGL":10561,"metersMSL":3480,"feetMSL":11417},"temp":{"c":-14.4,"f":6.1},"dewPt":{"c":-15.9,"f":3.4},"windDir":303,"windSpd":{"kts":41,"mph":47}},{"linType":5,"pressure":608.4,"altitude":{"metersAGL":3745,"feetAGL":12287,"metersMSL":4006,"feetMSL":13143},"temp":{"c":-18.1,"f":-0.6},"dewPt":{"c":-22.7,"f":-8.9},"windDir":297,"windSpd":{"kts":41,"mph":47}},{"linType":5,"pressure":562,"altitude":{"metersAGL":4322,"feetAGL":14180,"metersMSL":4583,"feetMSL":15036},"temp":{"c":-22,"f":-7.6},"dewPt":{"c":-32.6,"f":-26.7},"windDir":303,"windSpd":{"kts":48,"mph":55}}]}';

describe('testing useForecast', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  test('with InitialState should return null', () => {
    const { result } = renderHook(() =>
      useForecast({ latitude: 0, longitude: 0 }, 0, setStatus)
    );
    expect(result.current.forecastJSON).toBe(null);
  });

  test('with location should return non-zero', async () => {
    fetchMock.mockResponse(ForecastResult);

    const { result } = renderHook(() =>
      useForecast(
        { latitude: 33.9765542, longitude: -84.1716474 },
        261,
        setStatus
      )
    );
    await act(async () => {});
    expect(result.current.forecastJSON?.latitude).toBe(33.97);
  });
});
