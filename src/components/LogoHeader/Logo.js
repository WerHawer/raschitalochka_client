import React from 'react';
import css from './logo.module.css';
import Media from 'react-media';
import { Link } from 'react-router-dom';

const Logo = ({ variant = 'header' }) => {
  return (
    <>
      {variant === 'header' && (
        <Media
          queries={{
            medium: '(min-width: 768px)',
          }}
        >
          {(matches) => (
            <Link to="/" className={css.logo}>
              <div className={css.logoImage}></div>
              {matches.medium && <h2 className={css.logoTitle}>Raschitalochka</h2>}
            </Link>
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
