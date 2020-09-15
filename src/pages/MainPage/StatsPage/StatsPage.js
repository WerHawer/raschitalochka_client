import React from 'react';
import NavBar from 'components/NavBar/NavBarContainer';
import Diagram from 'components/Diagram/DiagramContainer';
import CostsTable from 'components/CostsTable/CostsTableContainer';
import TransactionsSummary from 'components/TransactionsSummary/TransactionsSummaryContainer';
import CurrencyStat from 'components/CurrencyStat/CurrencyStat';
import Styles from './StatsPage.module.css';
import TotalBalance from 'components/TotalBalance/TotalBalanceContainer';

const StatsPage = () => (
  <div className={Styles.pageWrapper}>
    <div className={Styles.navBar}>
      <NavBar />
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
      <TotalBalance />
    </div>
    <div className={Styles.currencyWidget}>
      <CurrencyStat />
    </div>
  </div>
);

export default StatsPage;
