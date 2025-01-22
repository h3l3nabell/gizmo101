import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
    return (
        <header className="App-header">
                      <a
            className="Header-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World here is Gizmo!
          </a>
          <Logo />

        </header>
    );
  }
  
  export default Header;
  