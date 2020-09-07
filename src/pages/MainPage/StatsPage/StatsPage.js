import React from 'react';
import NavBar from '../../../components/NavBar/NavBar';
import Styles from './StatsPage.module.css';

const StatsPage = () => (
  <div className={Styles.pageWrapper}>
    <NavBar />
    <div className={Styles.container}>
      <div className={Styles.diagramm}>
        {/* Place for diagramm */}
        {/* ///////// */}
      </div>
      <div className={Styles.datePicker}>Here should be date picker</div>
    </div>
    <div className={Styles.transactionsTable}>
      {/* Place for transaction table */}
      {/* ///////// */}
    </div>
    <div className={Styles.transactionsSummary}>
      {/* Place for transaction summary */}
      {/* ///////// */}
    </div>
  </div>
);

export default StatsPage;
