import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world link', () => {
  render(<App />);
  screen.debug();
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument(); 
});
