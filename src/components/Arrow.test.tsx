import React from 'react';
import { render, screen } from '@testing-library/react';
import Arrow from './Arrow';

test('Arrow renders proper dir', () => {
  render(<Arrow dir={90} />);
  const path = screen.getByTestId('arrow');
  expect(path.getAttribute('transform')).toBe('rotate(90, 256, 256)');
});
