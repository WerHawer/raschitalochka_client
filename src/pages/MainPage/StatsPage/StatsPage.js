import React from 'react';
import NavBar from 'components/NavBar/NavBar';
import Diagram from 'components/Diagram/Diagram';

import Styles from './StatsPage.module.css';

const StatsPage = () => (
  <div className={Styles.pageWrapper}>
    <div className={Styles.navBar}>
      <NavBar balance={24000} />
    </div>

    <div className={Styles.diagrammAndTransactionsTable}>
      <div className={Styles.titleBlock}>Cost Diagram</div>
      <div className={Styles.diagramBlock}>
        <div className={Styles.diagramm}>
          <Diagram />
          {/* Place for diagramm */}
          {/* ///////// */}
        </div>
      </div>
      <div className={Styles.transactionsTable}>
        {/* Place for transaction table */}
        {/* ///////// */}
      </div>
    </div>

    <div className={Styles.balanceBar}>
      {/* Place for balance component */}
      {/* ////// */}
    </div>

    <div className={Styles.transactionsSummary}>
      {/* Place for transaction summary */}
      {/* ///////// */}
    </div>
    <div className={Styles.currencyWidget}></div>
  </div>
);

export default StatsPage;
