import React from 'react';
import css from './progressBar.module.css';

const ProgressBar = ({ value = 2 }) => (
  <div className={`${css.progressBar} inputWrapper`}>
    {/* progressLine progress width global style */}
    <div className={`${css.progressLine} progress${value}`}></div>
  </div>
);

export default ProgressBar;
