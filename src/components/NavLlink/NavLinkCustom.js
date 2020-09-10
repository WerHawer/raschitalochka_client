import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavLink.module.css';

const NavLinkCustom = ({ to, children, text, exact }) => {
  return (
    <div className={css.nav_item}>
      <NavLink exact={exact} to={to} className={css.link} activeClassName={css.active_link}>
        <span className={css.children_svg}>{children}</span>
        <span className={css.children_text}>{text}</span>
      </NavLink>
    </div>
  );
};

export default NavLinkCustom;
