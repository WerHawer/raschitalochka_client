import React from 'react';
import Select from 'react-select';
import css from './select.module.css';

// https://www.npmjs.com/package/react-select // ссылка на доки

const SelectCustom = ({ name, options }) => {
  // const options = [
  //   { value: '444', label: '444' },
  //   { value: '555', label: '555' },
  //   { value: '666', label: '666' },
  // ];

  return (
    <div className={css.rut}>
      <span className={css.select}>
        <Select options={options} placeholder={name} />
      </span>
    </div>
  );
};

export default SelectCustom;
