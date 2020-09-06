import React from 'react';
import css from './logo.module.css';
import Media from 'react-media';

const Logo = ({ variant = 'header' }) => {
  console.log('variant', variant === 'header');
  return (
    <>
      {variant === 'header' && (
        <Media
          queries={{
            medium: '(min-width: 600px)',
          }}
        >
          {(matches) => (
            <div className={css.logo}>
              <div className={css.logoImage}></div>
              {matches.medium && <h2 className={css.logoTitle}>Raschitalochka</h2>}
            </div>
          )}
        </Media>
      )}
      {variant === 'form' && (
        <div className={`${css.logoForm} logo-global`}>
          <div className={css.logoImage}></div>
          <h2 className={css.logoTitle}>Raschitalochka</h2>
        </div>
      )}
    </>
  );
};
export default Logo;
