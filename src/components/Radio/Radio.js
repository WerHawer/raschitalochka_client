import React from 'react';
import css from './radio.module.css';

const Radio = ({ elements, name, onChange, formikValue, variant }) => {
  return (
    <ul className={css.list}>
      {elements.map(({ id, value }) => {
        console.log(value === formikValue);

        return (
          <li key={id} className={css.li}>
            <input
              type="radio"
              id={id}
              name={name}
              value={value}
              className={`${css.input} ${css[variant]}`}
              checked={value === formikValue}
              onChange={onChange}
            />

            <label htmlFor={id} className={css.label}>
              {value}
            </label>
          </li>
        );
      })}
    </ul>
  );
};
export default Radio;
