import React from "react";
import PropTypes from "prop-types";
import css from "./button.module.css";
import Spinner from "./button-loader/button-spinner";

const Button = ({
  variant = "standart",
  children,
  type,
  name,
  value,
  onClick,
  disabled = !true,
  //   убрать знак восклицания что бы работала кнопка
  isLoading = true,
}) => (
  <>
    {variant === "standart" && (
      <div className={css.wrapper}>
        <button
          className={disabled ? css.button_disabled : css.button}
          type={type}
          name={name}
          value={value}
          onClick={onClick}
          disabled={disabled}
        >
          {!isLoading ? <Spinner /> : children}
          {/* убрать знако восклицания что бы работал лоадер */}
        </button>
      </div>
    )}

    {variant === "logout" && (
      <div>
        <button
          className={css.button_logout}
          type={type}
          name={name}
          value={value}
          onClick={onClick}
        >
          logout
        </button>
      </div>
    )}
  </>
);

Button.prototype = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Button;
