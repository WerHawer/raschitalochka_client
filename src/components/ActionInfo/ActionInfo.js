import React from 'react';
import InfoField from 'components/InfoField/InfoField';
import css from './ActionInfo.module.css';

const actions = [
  {
    id: '1',
    date: '03-03-2020',
    type: 'plus',
    category: 'Irregular Income',
    comments: 'Cash',
    amount: '10000',
    balance: '1232435343',
  },
  {
    id: '2',
    date: '03-04-2020',
    type: 'plus',
    category: 'Irregular Income',
    comments: 'Cash',
    amount: '10000',
    balance: '1232435343',
  },
  {
    id: '3',
    date: '23-03-2020',
    type: 'plus',
    category: 'Irregular Income',
    comments: 'Cash',
    amount: '10000',
    balance: '1232435343',
  },
  {
    id: '4',
    date: '12-04-2020',
    type: 'plus',
    category: 'Irregular Income',
    comments: 'Card',
    amount: '10000',
    balance: '1232435343',
  },
];

const ActionInfo = () => {
  return (
    <div className={css.mainWrapper}>
      <div className={css.header}>
        <p className={css.header__name}>date</p>
        <p className={css.header__name}>type</p>
        <p className={css.header__name}>category</p>
        <p className={css.header__name}>coments</p>
        <p className={css.header__name}>amount</p>
        <p className={css.header__name}>balance after</p>
      </div>
      {actions &&
        actions.map(({ id, date, type, category, comments, amount, balance }) => (
          <div key={id} className={css.wrapper}>
            <div className={css.backLine}></div>
            <div className={css.infoWrapper}>
              <InfoField name="Date" value={date} />
              <InfoField name="Type" value={type} />
              <InfoField name="Category" value={category} />
              <InfoField name="Comments" value={comments} />
              <InfoField name="Amount" value={amount} />
              <InfoField name="Balance After" value={balance} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ActionInfo;
