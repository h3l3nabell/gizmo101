import logo from '../WellyGoat2NoBG.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Welcome to WellyGoat!
        </p>
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World here is Gizmo!
        </a>
      </header>
    </div>
  );
}

export default App;
