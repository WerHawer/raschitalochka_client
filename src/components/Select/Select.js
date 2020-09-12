import React from 'react';
import Select from 'react-select';
import css from './select.module.css';

// https://www.npmjs.com/package/react-select // ссылка на доки

const SelectCustom = () => {
  const optionsYear = [
    { value: '444', label: '444' },
    { value: '555', label: '555' },
    { value: '666', label: '666' },
  ];
  const optionsMonth = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  return (
    <div className={css.rut}>
      <span className={css.years}>
        <Select options={optionsYear} placeholder="Year"  />
      </span>
      <span className={css.months}>
        <Select options={optionsMonth} placeholder="Month"  />
      </span>
    </div>
  );
};

export default SelectCustom;
