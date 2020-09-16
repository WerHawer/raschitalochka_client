import React from 'react';
import Select from 'react-select';
import css from './select.module.css';

// https://www.npmjs.com/package/react-select // ссылка на доки

const SelectCustom = ({ name, options, onChange }) => {
  return (
    <div className={css.rut}>
      <span className={css.select}>
        <Select options={options} placeholder={name} onChange={onChange} />
      </span>
    </div>
  );
};

export default SelectCustom;
