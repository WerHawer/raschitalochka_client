import React from 'react';
import NavBar from '../../../components/NavBar/NavBar';
import Styles from './CurrencyPage.module.css';
import CurrencyStat from '../../../components/CurrencyStat/CurrencyStat';

const CurrencyPage = () => (
  <div className={Styles.pageWrapper}>
    <div className={Styles.navBar}>
      <NavBar />
    </div>
    <div className={Styles.currencyWidget}>
      <CurrencyStat />
    </div>
  </div>
);

export default CurrencyPage;
