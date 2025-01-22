import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo Component', () =>{
    it('renders without crashing', () => {
      render(<Logo />);
    });
  
    it('renders the correct logo image', () => {
      render(<Logo />);
      
      const logoImage = screen.getByRole('img');
      
      expect(logoImage).toHaveAttribute('src', 'WellyGoat2NoBG.svg');
      expect(logoImage).toHaveAttribute('alt', 'logo');
    });
  
    it('renders the logo with a spinning animation class', () =>
    {
      render(<Logo />);
      const logoElement = screen.getByAltText('logo');
      expect(logoElement).toHaveClass('Spinning-logo');
    });
  })
  