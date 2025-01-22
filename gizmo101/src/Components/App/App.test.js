import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () =>{
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders hello world link', () => {
    render(<App />);
    screen.debug();
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument(); 
  });

  it('renders the correct logo image', () => {
    render(<App />);
    
    const logoImage = screen.getByRole('img');
    
    expect(logoImage).toHaveAttribute('src', 'WellyGoat2NoBG.svg');
    expect(logoImage).toHaveAttribute('alt', 'logo');
  });

  it('renders the logo with a spinning animation class', () =>
  {
    render(<App />);
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toHaveClass('Spinning-logo');
  });
})
