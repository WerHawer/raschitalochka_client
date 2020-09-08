import React from 'react';
import Styles from './OverviewPage.module.css';
import NavBar from '../../../components/NavBar/NavBar';

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
      <div className={Styles.transactionsListItem}>
        {/* Place for transactions, 
          use this child <div> for wrapping each transaction 
          or replace parent <div> with your component 
          and add parents <div>'s classname */}
      </div>
    </div>
    <div className={Styles.currencyWidget}></div>
  </div>
);

export default OverviewPage;
