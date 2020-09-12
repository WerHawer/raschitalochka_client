import React from 'react';
import { Link } from 'react-router-dom';
import css from './linkCustom.module.css';

const LinkCustom = ({ to, name }) => {
  return (
    <Link to={to} className={css.link}>
      {name}
    </Link>
  );
};

export default LinkCustom;
