import React from 'react';
import Logo from '../Logo/Logo';

function Header() {
    return (
        <header className="App-header">
          <Logo />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World here is Gizmo!
          </a>
        </header>
    );
  }
  
  export default Header;
  