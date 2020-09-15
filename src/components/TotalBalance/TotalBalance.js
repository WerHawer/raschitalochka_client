import React from 'react';
import css from './totalBalance.module.css';

const TotalBalance = ({ total = 0 }) => {
  return (
    <>
      <div className={css.balance}>
        <p className={css.text_balance}> Total Balance, UAH </p>
        <span className={css.sum_balance}>{total.toFixed(2)}</span>
      </div>
    </>
  );
};

export default TotalBalance;
