import './App.css'
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom"
import Home from './Home'
import HTMLPage from './HTMLPage'
import CSSPage from './CSSPage'
import JSPage from './JSPage'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1>Daily Bruin Online Training <em>Winter 2022</em></h1>
          <h2>Exercises</h2>
          <ul>
            <li><NavLink exact={true} to='/'>Home</NavLink></li>
            <li><NavLink to='/html'>HTML (optional)</NavLink></li>
            <li><NavLink to='/css'>CSS (optional)</NavLink></li>
            <li><NavLink to='/js'>Javascript</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/html'>
            <HTMLPage />
          </Route>
          <Route path='/css'>
            <CSSPage />
          </Route>
          <Route path='/js'>
            <JSPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
