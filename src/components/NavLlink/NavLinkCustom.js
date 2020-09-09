import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavLink.module.css';

const NavLinkCustom = ({ to, children }) => {
  return (
    <li className={css.nav_item}>
      <NavLink to={to} className={css.link} activeClassName={css.active_link}>
        <div className={css.children_svg}>{children}</div>
      </NavLink>
    </li>
  );
};

export default NavLinkCustom;
