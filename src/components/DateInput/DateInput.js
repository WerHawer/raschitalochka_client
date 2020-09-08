import React from 'react';
import DatePicker from 'react-datepicker';
import css from './DateInput.module.css';

const DateInput = ({ onChange, selected, name }) => (
  <DatePicker onChange={onChange} selected={selected} className={css.input} dateFormat="dd-MM-yyyy" name={name} />
);

export default React.memo(DateInput);
