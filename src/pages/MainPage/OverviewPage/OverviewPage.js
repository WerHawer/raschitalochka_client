import React from 'react';
import Styles from './OverviewPage.module.css';
import NavBar from '../../../components/NavBar/NavBar';

const OverviewPage = () => (
  <div className={Styles.pageWrapper}>
    <NavBar />
    <div className={Styles.container}>
      <div className={Styles.balanceBar}>
        {/* Place for balance component */}
        {/* ////// */}
      </div>
      <ul className={Styles.transactionsList}>
        <li className={Styles.transactionsListItem}></li>
        <li className={Styles.transactionsListItem}>
          {/* Place for transactions, 
          use this <li> for wrapping each tranaction  */}
        </li>
      </ul>
    </div>
    <button className={Styles.AddTransaction}>+</button>
    <footer className={Styles.mobileFooter}></footer>
  </div>
);

export default OverviewPage;
