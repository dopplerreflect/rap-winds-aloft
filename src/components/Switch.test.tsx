import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Switch from './Switch';

test('Switch', async () => {
  const { getByTitle, getByTestId } = render(<Switch />);
  const input = getByTestId('input');
  const label = getByTitle('displayMetricSwitch');
  expect(input).toBeInTheDocument();
  expect(label).toBeInTheDocument();
  expect(input).not.toBeChecked();
  fireEvent.click(label);
  expect(input).toBeDefined();
  fireEvent.click(label);
  expect(input).not.toBeChecked();
});
