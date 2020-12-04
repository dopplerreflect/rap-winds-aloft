import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header';

test('renders Header', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Header />
    </Router>
  );
  const button = screen.getByLabelText('Menu');
  expect(button).toBeInTheDocument();
});

test('renders Back button', () => {
  const history = createMemoryHistory();
  history.push('/menu');
  render(
    <Router history={history}>
      <Header />
    </Router>
  );
  const button = screen.getByLabelText('Back');
  expect(button).toBeInTheDocument();
});

test('Back button triggers history.goBack', () => {
  const history = createMemoryHistory();
  history.push('/menu');
  render(
    <Router history={history}>
      <Header />
    </Router>
  );
  const button = screen.getByLabelText('Back');
  userEvent.click(button);
  expect(screen.getByText('Winds Aloft')).toBeInTheDocument();
});

test('renders capitalized location in Header', () => {
  const history = createMemoryHistory();
  history.push('/about');
  render(
    <Router history={history}>
      <Header />
    </Router>
  );
  const text = screen.getByText(/About/);
  expect(text).toBeInTheDocument();
});
