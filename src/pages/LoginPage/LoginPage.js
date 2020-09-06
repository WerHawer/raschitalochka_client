import React from 'react';
import Media from 'react-media';
import LoginForm from 'components/LoginForm/LoginForm';
import css from './loginPage.module.css';

const LoginPage = () => (
  <div className={css.loginPageWrapper}>
    <Media
      queries={{
        small: '(max-width: 767px)',
        medium: '(min-width: 768px) and (max-width: 1023px)',
        large: '(min-width: 1024px)',
      }}
    >
      {(matches) => (
        <>
          {matches.small && (
            <div className={css.loginPage}>
              <LoginForm />
            </div>
          )}
          {matches.medium && (
            <div className={css.loginPage}>
              <LoginForm />
              <p className={css.subtitle}>Manage your budget with finance app</p>
            </div>
          )}
          {matches.large && (
            <>
              <div className={css.loginLeftSide}></div>
              <div className={css.loginPage}>
                <LoginForm />
                <p className={css.subtitle}>Manage your budget with finance app</p>
              </div>
            </>
          )}
        </>
      )}
    </Media>
  </div>
);

export default LoginPage;
