import './App.css'
import {
  HashRouter as Router,
  Routes,
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
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/html'>HTML (optional)</NavLink></li>
            <li><NavLink to='/css'>CSS (optional)</NavLink></li>
            <li><NavLink to='/js'>Javascript</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='html' element={<HTMLPage />} />
          <Route path='css' element={<CSSPage />} />
          <Route path='js' element={<JSPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
