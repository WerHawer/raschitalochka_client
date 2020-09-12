import React from 'react';
import PropTypes from 'prop-types';
import NavLinkCustom from 'components/NavLlink/NavLinkCustom';
import { ReactComponent as HomeIcon } from 'public/icons/home.svg';
import { ReactComponent as Diagrams } from 'public/icons/Diagrams.svg';
import { ReactComponent as Currency } from 'public/icons/currency.svg';
import Styles from './NavBar.module.css';

const NavBar = ({ balance }) => (
  <nav className={Styles.navBar}>
    <ul className={Styles.navBarList}>
      <li className={Styles.navBarListItem}>
        <NavLinkCustom to="/" exact text={'Home'}>
          <HomeIcon />
        </NavLinkCustom>
      </li>
      <li className={Styles.navBarListItem}>
        <NavLinkCustom to="/stats" text={'Diagram'}>
          <Diagrams />
        </NavLinkCustom>
      </li>
      <li className={Styles.navBarListItemCurrency}>
        <NavLinkCustom to="/currency" text={'Currency'}>
          <Currency />
        </NavLinkCustom>
      </li>
      <li className={Styles.navBarListItemBalance}>
        Total Balance:{' '}
        <span className={Styles.navBarListItemBalanceData}>{balance ? balance.toFixed(2) : null} UAH</span>
      </li>
    </ul>
  </nav>
);

NavBar.propTypes = {
  balance: PropTypes.number,
};

export default NavBar;
