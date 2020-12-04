import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Menu from './Menu';

test('renders Menu', () => {
  const history = createMemoryHistory();
  history.push('/menu');
  render(
    <Router history={history}>
      <Menu />
    </Router>
  );
  const aboutButton = screen.getByLabelText('About');
  expect(aboutButton).toBeInTheDocument();
});

test('navigates to /about', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Menu />
    </Router>
  );
  const aboutButton = screen.getByText(/about/i);
  userEvent.click(aboutButton);
  expect(history.location.pathname).toBe('/about');
});

test('calls clearCache', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Menu />
    </Router>
  );
  const clearCacheButton = screen.getByText(/clear cache/i);
  userEvent.click(clearCacheButton);
  expect(history.location.pathname).toBe('/');
});
