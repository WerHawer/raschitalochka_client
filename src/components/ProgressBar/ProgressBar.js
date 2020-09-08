import React from 'react';
import css from './progressBar.module.css';

const ProgressBar = ({ value }) => <div className={css.progressBar}>{value === 2 && <div></div>}</div>;

export default ProgressBar;
