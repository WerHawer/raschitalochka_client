import React from 'react';
import css from './totalBalance.module.css';

const TotalBalance = ({ balance }) => {
  return (
    <>
      <div className={css.balance}>
        <p className={css.text_balance}>Total Balance, UAH </p>
        <span className={css.sum_balance}>{balance.toFixed(2)}</span>
      </div>
    </>
  );
};

export default TotalBalance;
