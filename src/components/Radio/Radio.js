import React from 'react';
import css from './radio.module.css';

const Radio = ({ elements, blockName, onChange, formikValue, variant }) => {
  return (
    <ul className={css.list}>
      {elements.map(({ id, name }) => {
        return (
          <li key={id} className={css.li}>
            <input
              type="radio"
              id={id}
              name={blockName}
              value={id}
              className={`${css.input} ${css[variant]}`}
              checked={id == formikValue}
              onChange={onChange}
            />

            <label htmlFor={id} className={css.label}>
              {name}
            </label>
          </li>
        );
      })}
    </ul>
  );
};
export default Radio;
