import React from 'react';
import css from './InfoField.module.css';

const InfoField = ({ name, value }) => (
  <div className={`${css.wrapper} info-field`}>
    <p className={css.name}>{name}</p>
    <p className={css.value}>{value}</p>
  </div>
);

export default InfoField;
