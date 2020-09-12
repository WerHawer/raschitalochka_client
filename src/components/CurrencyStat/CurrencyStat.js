import React, { useEffect, useState, useMemo } from 'react';
import css from './CurrencyStat.module.css';
import Currency from '../Currency/Currency';
import API from '../../api/agent';

const CurrencyStat = () => {
  useEffect(() => {
    (async function fetchData() {
      const request = await API.Currency.stats();
      const filteredCurrency = filterOutCurrency(request.data, 'BTC');
      setData(filteredCurrency);
    })();
  }, []);

  const [data, setData] = useState([]);

  function filterOutCurrency(stats, curr) {
    stats.forEach((stat) => {
      stat.buy = stat.buy.substring(0, stat.buy.length - 3);
      stat.sale = stat.sale.substring(0, stat.sale.length - 3);
    });
    return stats.filter((stat) => stat.ccy !== curr);
  }

  return (
    <>
      <div className={css.currency}>
        <ul className={css.currencyHeader}>
          <li className={css.currencyTitle}>Валюта</li>
          <li className={css.currencyTitle}>Покупка</li>
          <li className={css.currencyTitle}>Продажа</li>
        </ul>
        <div>
          <ul className={css.currencyStat}>
            {data.map((currency) => (
              <li className={css.currencyList} key={currency.ccy}>
                <Currency currency={currency} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CurrencyStat;
