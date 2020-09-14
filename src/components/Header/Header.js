import React, { useCallback } from 'react';
import Logo from 'components/LogoHeader/Logo';
import Button from 'components/Button/Button';
import css from './header.module.css';

const HeaderPage = ({ logout }) => {
  const onLogoutClick = useCallback(logout, []);
  return (
    <header className={css.wrapper}>
      <div className={css.header}>
        <Logo variant="header" />
        <div className={css.profileNameBlock}>
          <p className={css.profileName}>Name</p>
          <div className={css.button}>
            <Button variant="logout" onClick={onLogoutClick} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
