import React from 'react';
import NavLinkCustom from 'components/link/NavLinkCustom';
import css from '../../components/link/NavLink.module.css';

const TestRouting = () => (
  <div className={css.wrapper}>
    <NavLinkCustom to={'/home'} children={'Home'} name={'home'} />
    <NavLinkCustom to={'/diagrams'} children={'Diagrams'} name={'diagrams'} />
    <NavLinkCustom to={'/currency'} children={'currency'} name={'currency'} />
  </div>
);

export default TestRouting;
