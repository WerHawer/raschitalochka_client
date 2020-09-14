import React from 'react';
import PropTypes from 'prop-types';
import Select from 'components/Select/Select';
import Styles from './CostsTable.module.css';

const exampleData = [
  { id: 1, name: 'Main Expenses', value: 8700, color: '#ecb22a' },
  { id: 2, name: 'Food', value: 3800, color: '#e28b20' },
  { id: 3, name: 'Car', value: 1500, color: '#d25925' },
  { id: 4, name: 'Self Care', value: 800, color: '#67b7d0' },
  { id: 5, name: 'Child Care', value: 2208, color: '#5593d7' },
  { id: 6, name: 'House', value: 300, color: '#3e6ba8' },
  { id: 7, name: 'Education', value: 3400, color: '#9cc254' },
  { id: 8, name: 'Entertainment', value: 1230, color: '#73ad57' },
  { id: 9, name: 'Other Expenses', value: 610, color: '#507c3a' },
];

const CostsTable = ({ costs = exampleData }) => {
  return (
    <>
      <div className={Styles.select}>
        <Select name={'Month'} />
        <Select name={'Year'} />
      </div>
      <div className={Styles.table}>
        <div className={Styles.tableHeader}>
          <span className={Styles.tableHeaderItem}>Categories</span>
          <span className={Styles.tableHeaderItem}>Amount</span>
        </div>
        <div className={Styles.tableBody}>
          {costs.map((i) => (
            <div className={Styles.tableItem} key={i.id}>
              <span>{i.name}</span>
              <span>{i.value.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

CostsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      value: PropTypes.number,
      color: PropTypes.string,
    })
  ),
};

export default CostsTable;
