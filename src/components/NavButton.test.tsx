import React from 'react';
import { render, screen } from '@testing-library/react';
import NavButton from './NavButton';

test('renders NavButton', () => {
  render(<NavButton />);
  const path = screen.getByTestId('forward-button');
  expect(path).toBeInTheDocument();
});
