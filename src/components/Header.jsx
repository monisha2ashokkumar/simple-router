import classes from './Header.module.css'

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
          </li>
        </ul>
      </nav></header>
    </div>
  );
}
