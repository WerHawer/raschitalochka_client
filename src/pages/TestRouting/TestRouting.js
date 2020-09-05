import React from 'react';
import NavLinkCustom from 'components/link/NavLinkCustom';
import css from '../../components/link/NavLink.module.css';

const TestRouting = () => (
  <div className={css.wrapper}>
    <NavLinkCustom to={'/home'} childen={'home'} name={'home'} />
    <NavLinkCustom to={'/diagrams'} childen={'diagrams'} name={'diagrams'} />
  </div>
);

export default TestRouting;
