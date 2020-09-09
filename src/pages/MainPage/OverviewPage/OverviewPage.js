import React from 'react';
import Media from 'react-media';

import Styles from './OverviewPage.module.css';
import NavBar from 'components/NavBar/NavBar';
import ActionInfo from 'components/ActionInfo/ActionInfo';
import Button from 'components/Button/Button';
import AddModals from 'components/AddModals/AddModals';

const OverviewPage = ({ addModal, modal }) => {
  const handleAddClick = (word) => {
    addModal(word);
  };
  return (
    <div className={Styles.pageWrapper}>
      {/* <Media
        query="(max-width: 767px)"
        render={() => <>{(modal === 'cost' || modal === 'income') && <AddModals variant={modal} />}</>}
      /> */}
      <div className={Styles.navBar}>
        <NavBar balance={24000} />
      </div>

      <div className={Styles.balanceBar}>
        {/* Place for balance component */}
        {/* ////// */}
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
      <div className={Styles.currencyWidget}></div>
    </div>
  );
};

export default OverviewPage;
