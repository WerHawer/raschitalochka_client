import React from 'react';
import css from './logo.module.css';

const Logo = () => (
  <div className={css.logo}>
    <div className={css.logoImage}></div>
    <h2 className={css.logoTitle}>Raschitalochka</h2>
  </div>
);

export default Logo;
