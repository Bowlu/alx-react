import logo from './Holberton-logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <hr className="line"></hr>

      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password"></input>
        <button>OK</button> 
      </body>
      <hr className="line"></hr>

      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
