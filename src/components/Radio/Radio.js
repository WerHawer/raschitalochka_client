import React from "react";
import css from "./radio.module.css";

const Radio = ({ elements, name }) => {
  return (
    <form className={css.form}>
      <p className={css.title}>{name}</p>
      <ul className={css.list}>
        {elements.map((el) => {
          return (
            <li key={el.id}>
              <input
                type="radio"
                id={el.id}
                name={name}
                value={el.value}
                className={css.input}
              />
              <label for={el.id} className={css.label}>
                {el.value}
              </label>
            </li>
          );
        })}
      </ul>
    </form>
  );
};
export default Radio;
