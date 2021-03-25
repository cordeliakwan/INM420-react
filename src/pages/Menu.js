import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from 'react-router-dom';
import Pizza from './menu-pages/Pizza.js';
import Burgers from './menu-pages/Burger.js';
import Pasta from './menu-pages/Pasta.js';
import '../styles/Menu.css';

export default function Menu() {
  let match = useRouteMatch();

  return (
    <div className='Menu'>
      <h1>Menu</h1>

      <ul class="menu-list">
        <li>
          <NavLink exact to={`${match.url}/pizza`} activeClassName="selected">Pizza</NavLink>
        </li>
        <li>
          <NavLink exact to={`${match.url}/burger`} activeClassName="selected">Burger</NavLink>
        </li>
        <li>
          <NavLink exact to={`${match.url}/pasta`} activeClassName="selected">Pasta</NavLink>
        </li>
      </ul>

      <Switch>
        {/* <Route path={`${match.url}/:menuId`}>
          <Menus />
        </Route> */}
        <Route path={`${match.url}/pizza`}>
            <Pizza />
          </Route>

          <Route path={`${match.url}/burger`}>
            <Burgers />
          </Route>

          <Route path={`${match.url}/pasta`}>
            <Pasta />
          </Route>
        <Route path={'/'}>
          <h3>Please select a menu.</h3>
        </Route>
      </Switch>
    </div>
  );
}

// function Menus() {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { menuId } = useParams();

//   return (
//     <div className="banner-div">
//       <div className="banner-category-div">
//         <h1 className="menu-category">{menuId}</h1>
//       </div>
//     </div>
//   );
// }

