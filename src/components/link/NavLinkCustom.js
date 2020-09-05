import React from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import css from './NavLink.module.css';

const NavLinkCustom = ({ to, name, childen }) => {
  const match = useRouteMatch();

  let mainClass;

  if (name === 'home') {
    mainClass = css.image_home;
  }

  if (name === 'Diagrams') {
    mainClass = css.image_Diagrams;
  }


  return (
    <div className={`${css.nav_Link}`}>
      <NavLink
        to={`${match.url}${to}`}
        name={name}
        className={`${css.link} ${mainClass}`}
        activeClassName={css.active_link}
      >
        {childen}
      </NavLink>
    </div>
  );
};

export default NavLinkCustom;

{
  /* <Switch>
        <Route path={`${match.path}${to}`} name={name} render={() => <h1> {childen}</h1>} />
      </Switch> */
}
