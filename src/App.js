import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom"
import Home from './Home'
import HTMLPage from './HTMLPage'

function App() {
  return (
    <Router basename={'/db-training-f20'}>
      <div className="App">
        <nav>
          <h1>Daily Bruin Online Training <em>Fall 2020</em></h1>
          <ul>
            <li><NavLink exact={true} to='/'>Home</NavLink></li>
            <li><NavLink to='/html'>HTML</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/html'>
            <HTMLPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
