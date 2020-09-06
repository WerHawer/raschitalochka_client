import React, { Fragment } from 'react';
import NavLinkCustom from 'components/link/NavLinkCustom';
import css from '../../components/link/NavLink.module.css';
import { ReactComponent as Diagrams } from '../../public/icons/diagrams.svg';
import { ReactComponent as Home } from '../../public/icons/home.svg';
import { ReactComponent as Currency } from '../../public/icons/currency.svg';

import Media from 'react-media';

const TestRouting = () => {
  return (
    <>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1199px)',
          large: '(min-width: 1200px)',
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <ul className={css.wrapper_list}>
                <NavLinkCustom to={'/home'}>
                  <Home />
                </NavLinkCustom>

                <NavLinkCustom to={'/diagrams'}>
                  <Diagrams />
                </NavLinkCustom>

                <NavLinkCustom to={'/currency'}>
                  <Currency />
                </NavLinkCustom>
              </ul>
            )}
            {matches.medium && (
              <ul className={css.wrapper_list}>
                <NavLinkCustom to={'/home'}>
                  <Home />

                  <span className={css.name_category}>Home</span>
                </NavLinkCustom>

                <NavLinkCustom to={'/diagrams'}>
                  <Diagrams />
                  <span className={css.name_category}>Diagram</span>
                </NavLinkCustom>
              </ul>
            )}
            {matches.large && (
              <ul className={css.wrapper_list}>
                <NavLinkCustom to={'/home'}>
                  <Home />

                  <span className={css.name_category}>Home</span>
                </NavLinkCustom>

                <NavLinkCustom to={'/diagrams'}>
                  <Diagrams />
                  <span className={css.name_category}>Diagram</span>
                </NavLinkCustom>
              </ul>
            )}
          </Fragment>
        )}
      </Media>
      {/* <div className={css.wrapper}>
        <NavLinkCustom to={'/home'} children={'Home'} name={'home'} />
        <NavLinkCustom to={'/diagrams'} children={'Diagrams'} name={'diagrams'} />
        <NavLinkCustom to={'/currency'} children={'currency'} name={'currency'} />
      </div> */}
    </>
  );
};

export default TestRouting;
