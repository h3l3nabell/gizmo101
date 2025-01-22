import React from 'react';
import { render, screen } from '@testing-library/react';
import MainBody from './MainBody';

describe('MainBody Component', () =>{
    it('renders without crashing', () => {
      render(<MainBody />);
    });
});
