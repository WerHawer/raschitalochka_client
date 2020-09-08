import React from 'react';
import Styles from './OverviewPage.module.css';
import NavBar from '../../../components/NavBar/NavBar';

const OverviewPage = () => (
  <div className={Styles.pageWrapper}>
    <div>
      <NavBar balance={24000} />
    </div>
    <div className={Styles.balanceBar}>
      {/* Place for balance component */}
      {/* ////// */}
    </div>
    <ul className={Styles.transactionsList}>
      <li className={Styles.transactionsListItem}>
        {/* Place for transactions, 
          use this <li> for wrapping each transaction 
          or replace <ul> with your component and add <ul>'s classname */}
      </li>
    </ul>
    <div className={Styles.currencyComponent}></div>
    <button className={Styles.addTransaction}>+</button>
    <footer className={Styles.mobileFooter}></footer>
  </div>
);

export default OverviewPage;
