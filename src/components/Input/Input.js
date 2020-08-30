import React from "react";
import css from "./Input.module.css";

const Input = ({
  value,
  onChange = () => null,
  name,
  onBlur = () => null,
  placeholder = "Placeholder",
  type = "text",
  error,
  touched,
  customClass,
  serverError,
}) => {
  const inputNameBgr = `input__${name}`;
  const errorStyle = error || serverError ? css.error : undefined;

  return (
    <div className={css.inputWrapper}>
      <input
        className={`${customClass} ${css.input} ${css[inputNameBgr]} ${errorStyle}`}
        name={name}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {touched && error && (
        <span className={`${css.error} ${css.errorText}`}>{error}</span>
      )}

      {serverError && (
        <span className={`${css.error} ${css.errorText}`}>{serverError}</span>
      )}
    </div>
  );
};

export default Input;
