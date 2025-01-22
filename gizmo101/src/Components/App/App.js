import './App.css';
import Logo from '../Logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Welcome to WellyGoat!
        </p>
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
    </div>
  );
}

export default App;
