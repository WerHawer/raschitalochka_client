import React from 'react';
import Media from 'react-media';
import RegForm from 'components/RegForm/RegForm';
import css from './regPage.module.css';

const RegistrationPage = () => (
  <div className={css.regPageWrapper}>
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
            <div className={css.registrationPage}>
              <RegForm />
            </div>
          )}
          {matches.medium && (
            <div className={css.registrationPage}>
              <RegForm />
            </div>
          )}
          {matches.large && (
            <>
              <div className={css.regLeftSide}>
                <h1 className={css.regDesktopTitle}>Create your own categories of costs</h1>
              </div>
              <div className={css.registrationPage}>
                <RegForm />
              </div>
            </>
          )}
        </>
      )}
    </Media>
  </div>
);

export default RegistrationPage;
