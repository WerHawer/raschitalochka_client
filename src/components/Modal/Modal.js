import React, { useEffect } from 'react';

import AddModals from 'components/AddModals/AddModals';
import css from './modal.module.css';

const Modal = ({ modal, removeModal }) => {
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.code !== 'Escape') return;
      removeModal();
    };

    window.addEventListener('keydown', closeOnEsc);
    return () => {
      window.removeEventListener('keydown', closeOnEsc);
    };
  }, []);

  const closeByOutClick = (e) => {
    if (e.target !== e.currentTarget) return;

    removeModal();
  };

  return (
    <div className={css.wrapper} onClick={closeByOutClick}>
      {(modal === 'cost' || modal === 'income') && <AddModals variant={modal} />}
    </div>
  );
};
export default React.memo(Modal);
