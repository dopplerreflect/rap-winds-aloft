import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Winds Aloft text', () => {
  render(<App />);
  const text = screen.getByText(/Winds Aloft/i);
  expect(text).toBeInTheDocument();
});

test('renderes Loading...', () => {
  render(<App />);
  const text = screen.getByText(/Loading\.\.\./i);
  expect(text).toBeInTheDocument();
});
