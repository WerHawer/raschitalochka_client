import React from 'react';
import PropTypes from 'prop-types';
import css from './Currency.module.css';

const Currency = ({ currency }) => {
  return (
    <>
      <div className={css.currencyItem}>
        <p>{currency.ccy}</p>
      </div>
      <div className={css.currencyItem}>
        <p>{currency.buy}</p>
      </div>
      <div className={css.currencyItem}>
        <p>{currency.sale}</p>
      </div>
    </>
  );
};

Currency.propTypes = {
  currency: PropTypes.shape({
    ccy: PropTypes.string.isRequired,
    buy: PropTypes.string.isRequired,
    sale: PropTypes.string.isRequired,
  }).isRequired,
};
export default Currency;
