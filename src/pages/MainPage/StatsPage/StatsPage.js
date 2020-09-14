import React from 'react';
import NavBar from 'components/NavBar/NavBar';
import Diagram from 'components/Diagram/Diagram';
import CostsTable from 'components/CostsTable/CostsTable';
import TransactionsSummary from 'components/TransactionsSummary/TransactionsSummary';
import CurrencyStat from 'components/CurrencyStat/CurrencyStat';
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
        </div>
      </div>
      <div className={Styles.transactionsTable}>
        <CostsTable />
        <div className={Styles.transactionsSummary}>
          <TransactionsSummary />
        </div>
      </div>
    </div>

    <div className={Styles.balanceBar}>
      {/* Place for balance component */}
      {/* ////// */}
    </div>

    <div className={Styles.currencyWidget}>
      <CurrencyStat />
    </div>
  </div>
);

export default StatsPage;
