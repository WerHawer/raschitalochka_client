import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TransactionsSummary.module.css';

const TransactionsSummary = ({ totalIncome, totalCosts }) => (
  <div className={Styles.wrapper}>
    <div className={Styles.categoriesWrapper}>
      <span className={Styles.label}>Total Costs:</span>
      <span className={Styles.amountCosts}>{totalCosts.toFixed(2)}</span>
    </div>
    <div className={Styles.categoriesWrapper}>
      <span className={Styles.label}>Total Income:</span>
      <span className={Styles.amountIncome}>{totalIncome.toFixed(2)}</span>
    </div>
  </div>
);

TransactionsSummary.propTypes = {
  totalIncome: PropTypes.number,
  totalCosts: PropTypes.number,
};

export default TransactionsSummary;
