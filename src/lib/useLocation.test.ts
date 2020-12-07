import { renderHook } from '@testing-library/react-hooks';
import { useLocation } from './useLocation';

test('it should start with 0', () => {
  const { result } = renderHook(() => useLocation());
  expect(result.current).toStrictEqual({ latitude: 0, longitude: 0 });
});
