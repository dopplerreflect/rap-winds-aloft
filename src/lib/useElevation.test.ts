import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import { isExpressionWithTypeArguments } from 'typescript';
import { useElevation } from './useElevation';

const setStatus = jest.fn();

describe('testing useElevation', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('with InitialState should return 0', () => {
    const { result } = renderHook(() =>
      useElevation({ latitude: 0, longitude: 0 }, setStatus)
    );
    expect(result.current).toBe(0);
  });

  test('with location should return non-zero', async () => {
    fetch.mockResponse(
      JSON.stringify({
        USGS_Elevation_Point_Query_Service: {
          Elevation_Query: { Elevation: 261.9 },
        },
      })
    );

    const { result } = renderHook(() =>
      useElevation({ latitude: 33.9765542, longitude: -84.1716474 }, setStatus)
    );
    await act(async () => {});
    expect(result.current).toBe(261.9);
  });
});
