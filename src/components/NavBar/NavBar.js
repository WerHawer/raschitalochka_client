import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './NavBar.module.css';

const NavBar = () => (
  <nav className={Styles.navBar}>
    <ul className={Styles.navBarList}>
      <li>
        <NavLink to="/">Overview</NavLink>
      </li>
      <li>
        <NavLink to="/stats">stats</NavLink>
      </li>
      <li>
        <NavLink to="/currency">currency</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
