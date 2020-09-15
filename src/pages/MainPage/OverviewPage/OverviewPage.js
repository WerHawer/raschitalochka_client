import React from 'react';
import Styles from './OverviewPage.module.css';
import NavBar from 'components/NavBar/NavBarContainer';
import ActionInfo from 'components/ActionInfo/ActionInfo';
import Button from 'components/Button/Button';
import CurrencyStat from 'components/CurrencyStat/CurrencyStat';
import TotalBalance from 'components/TotalBalance/TotalBalanceContainer';

const OverviewPage = ({ addModal, modal }) => {
  const handleAddClick = (word) => {
    addModal(word);
  };
  return (
    <div className={Styles.pageWrapper}>
      <div className={Styles.navBar}>
        <NavBar />
      </div>
      <div className={Styles.balanceBar}>
        <TotalBalance />
      </div>
      <div className={Styles.transactionsList}>
        <div className={Styles.addTransaction}>
          <div className={Styles.buttonContainer}>
            <Button onClick={() => handleAddClick('income')}>Add Income</Button>

            <Button onClick={() => handleAddClick('cost')}>Add Cost</Button>
          </div>
        </div>
        <ActionInfo />
      </div>
      <div className={Styles.currencyWidget}>
        <div className={Styles.currencyWidgetInnerWrapper}>
          <CurrencyStat />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
