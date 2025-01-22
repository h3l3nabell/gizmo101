import React from 'react';
import { render, screen } from '@testing-library/react';
import CaptureDeadline from './CaptureDeadline';

describe('CaptureDeadline Component', () =>{
    it('renders without crashing', () => {
      render(<CaptureDeadline />);
    });
});

