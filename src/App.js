import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
// import logo from './images/logo.svg';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Menu from './pages/Menu.js';
import './styles/App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="selected">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu" activeClassName="selected">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
