import React from 'react';
import Select from 'react-select';
import css from './select.module.css';

// https://www.npmjs.com/package/react-select // ссылка на доки

const SelectCustom = ({ name, options }) => {
  return (
    <div className={css.rut}>
      <span className={css.select}>
        <Select options={options} placeholder={name} />
      </span>
    </div>
  );
};

export default SelectCustom;
