import { renderHook } from '@testing-library/react-hooks';
import { useGeoPosition } from './useGeoPosition';

test('it should start with 0', () => {
  const { result } = renderHook(() => useGeoPosition());
  expect(result.current).toStrictEqual({
    latitude: 0,
    longitude: 0,
    altitude: 0,
  });
});
