import React from 'react';
import Styles from './OverviewPage.module.css';
import NavBar from 'components/NavBar/NavBar';
import ActionInfo from 'components/ActionInfo/ActionInfo';

const OverviewPage = () => (
  <div className={Styles.pageWrapper}>
    <div className={Styles.navBar}>
      <NavBar balance={24000} />
    </div>

    <div className={Styles.balanceBar}>
      {/* Place for balance component */}
      {/* ////// */}
    </div>
    <div className={Styles.transactionsList}>
      <div className={Styles.addTransaction}>
        <button>Add Income</button>
        <button>Add Cost</button>
      </div>
      <ActionInfo />
    </div>
    <div className={Styles.currencyWidget}></div>
  </div>
);

export default OverviewPage;
