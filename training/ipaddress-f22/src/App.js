import logo from './logo.svg';
import IPAddress from './IPAddress';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Your IP address is <IPAddress />.</p>
      </header>
    </div>
  );
}

export default App;
