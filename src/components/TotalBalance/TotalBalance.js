import React from 'react';
import css from './totalBalance.module.css';

const TotalBalance = ({ total = '24 000.00' }) => {
  return (
    <>
      <div className={css.balance}>
        <p className={css.text_balance}> Total Balance, UAH </p>
        <span className={css.sum_balance}>{total}</span>
      </div>
    </>
  );
};

export default TotalBalance;
