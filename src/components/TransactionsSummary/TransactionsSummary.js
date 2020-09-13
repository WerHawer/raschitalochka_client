import React from 'react';
import Styles from './TransactionsSummary.module.css';

const exampleData = {
  income: 27350,
  costs: 22549.24,
};

const TransactionsSummary = ({ income = exampleData.income, costs = exampleData.costs }) => (
  <div className={Styles.wrapper}>
    <div className={Styles.categoriesWrapper}>
      <span className={Styles.label}>Total Costs:</span>
      <span className={Styles.amountCosts}>{costs.toFixed(2)}</span>
    </div>
    <div className={Styles.categoriesWrapper}>
      <span className={Styles.label}>Total Income:</span>
      <span className={Styles.amountIncome}>{income.toFixed(2)}</span>
    </div>
  </div>
);

export default TransactionsSummary;
