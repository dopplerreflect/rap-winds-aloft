import React from 'react';
import { render, screen } from '@testing-library/react';
import BackButton from './BackButton';

test('renders BackButton', () => {
  render(<BackButton />);
  const path = screen.getByTestId('back-button');
  expect(path).toBeInTheDocument();
});
