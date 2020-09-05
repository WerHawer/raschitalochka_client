import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavLink.module.css';

const NavLinkCustom = ({ to, name, children }) => {
  let mainClass;

  if (name === 'home') {
    mainClass = css.image_home;
  }

  if (name === 'diagrams') {
    mainClass = css.image_diagrams;
  }

  if (name === 'currency') {
    mainClass = css.image_currency;
  }

  return (
    <div className={css.nav_Link}>
      <NavLink to={to} name={name} className={`${css.link} ${mainClass}`} activeClassName={css.active_link}>
        <div className={css.children}>{children}</div>
      </NavLink>
    </div>
  );
};

export default NavLinkCustom;
