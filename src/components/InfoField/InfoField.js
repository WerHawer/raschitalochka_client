import React from 'react';
import css from './InfoField.module.css';

const InfoField = ({ name, value, type }) => {
  console.log('type', type);
  let valueClasses = `${css.value}`;
  if (name === 'Amount') {
    valueClasses = `${css.value} ${type}`;
  }

  return (
    <div className={`${css.wrapper} info-field`}>
      <p className={css.name}>{name}</p>
      <p className={valueClasses}>{value}</p>
    </div>
  );
};

export default InfoField;
