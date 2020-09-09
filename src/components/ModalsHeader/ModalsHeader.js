import React, { useCallback } from 'react';
import css from './ModalsHeader.module.css';

const ModalsHeader = ({ name, removeModal }) => {
  const handleArrowClick = useCallback(removeModal, []);

  return (
    <div className={css.wrapper}>
      <div className={css.arrow} onClick={handleArrowClick}></div>
      <span className={css.name}>{name}</span>
    </div>
  );
};

export default React.memo(ModalsHeader);
