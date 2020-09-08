import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './NavBar.module.css';

const NavBar = ({ balance }) => (
  <nav className={Styles.navBar}>
    <ul className={Styles.navBarList}>
      <li className={Styles.navBarListItem}>
        <NavLink to="/">Главная</NavLink>
      </li>
      <li className={Styles.navBarListItem}>
        <NavLink to="/stats">Статистика</NavLink>
      </li>
      <li className={Styles.navBarListItemCurrency}>
        <NavLink to="/currency">Курс Валют</NavLink>
      </li>
      <li className={Styles.navBarListItemBalance}>
        <p>Баланс: {balance} грн</p>
      </li>
    </ul>
  </nav>
);

export default NavBar;
