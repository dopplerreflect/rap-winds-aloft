import React from 'react';
import { render, screen } from '@testing-library/react';
import WindsAloft from './WindsAloft';

test('renders Winds Aloft starting', async () => {
  render(<WindsAloft />);
  const text = screen.getByText(/Loading\.\.\./);
  expect(text).toBeInTheDocument();
  expect(navigator.geolocation.getCurrentPosition).toBeCalledWith(
    expect.any(Function)
  );
});
