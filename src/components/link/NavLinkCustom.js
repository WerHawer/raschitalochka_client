import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavLink.module.css';

const NavLinkCustom = ({ to, name, childen }) => {
  let mainClass;

  if (name === 'home') {
    mainClass = css.image_home;
  }

  if (name === 'diagrams') {
    mainClass = css.image_diagrams;
  }

  return (
    <div className={css.nav_Link}>
      <NavLink to={to} name={name} className={`${css.link} ${mainClass}`} activeClassName={css.active_link}>
        {childen}
      </NavLink>
    </div>
  );
};

export default NavLinkCustom;
