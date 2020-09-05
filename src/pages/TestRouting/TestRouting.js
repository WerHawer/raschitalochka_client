import React from 'react';
import NavLinkCustom from 'components/link/NavLinkCustom';
import css from '../../components/link/NavLink.module.css';

const TestRouting = () => (
  <div className={css.wrapper}>
    <NavLinkCustom to={'/home'} childen={'Home'} name={'home'} />
    <NavLinkCustom to={'/Diagrams'} childen={'Diagrams'} name={'Diagrams'} />
  </div>
);

export default TestRouting;
