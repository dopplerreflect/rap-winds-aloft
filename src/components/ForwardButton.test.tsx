import React from 'react';
import { render, screen } from '@testing-library/react';
import ForwardButton from './ForwardButton';

test('renders ForwardButton', () => {
  render(<ForwardButton />);
  const path = screen.getByTestId('forward-button');
  expect(path).toBeInTheDocument();
});
