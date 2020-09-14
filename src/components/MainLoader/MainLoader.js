import React from 'react';
import css from './mainLoader.module.css';

const MainLoader = () => {
  return (
    <div className={css.container}>
      <div className={css.lds_hourglass}></div>
    </div>
  );
};

export default MainLoader;
