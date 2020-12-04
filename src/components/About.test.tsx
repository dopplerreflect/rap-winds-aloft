import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About page', () => {
  render(<About />);
  const text = screen.getByText(/About/i);
  expect(text).toBeInTheDocument();
});
