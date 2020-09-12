import React from 'react';
import css from './Input.module.css';

const Input = ({
  value = '',
  onChange = () => null,
  onBlur = () => null,
  name,
  placeholder = 'Placeholder',
  type = 'text',
  error,
  touched,
  customClass,
  serverError,
  variant,
}) => {
  const inputNameBgr = `input__${name}`;
  const errorStyle = (error && touched) || (serverError && touched) ? css.error : undefined;

  const inputWithVariant = `inputVariant__${variant}`;

  return (
    <div className="inputWrapper">
      <input
        className={`${customClass} ${css.input} ${css[inputNameBgr]} ${errorStyle}  ${css[inputWithVariant]}`}
        name={name}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {touched && error && <span className={`${css.error} ${css.errorText}`}>{error}</span>}

      {serverError && <span className={`${css.error} ${css.errorText}`}>{serverError}</span>}
    </div>
  );
};

export default Input;
