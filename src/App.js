import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import isNull from 'lodash.isnull';

import { CSSTransition } from 'react-transition-group';
import Modal from 'components/Modal/ModalContainer';
import { mapStyles, bounceTransition } from 'libs/routesAnimationsSettings';
import HomePage from './pages/MainPage/';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegPage from 'pages/RegistrationPage/RegPage';
import MainLoader from 'components/MainLoader/MainLoader';
import PrivatRoute from 'components/PrivatRoute/PrivatRoute';
import IsLoggedInRoute from 'components/PrivatRoute/IsLoggedInRoute';

const App = ({ modal, getTransaction, getTransactionSummary, getTransactionCategories, isAuth }) => {
  useEffect(() => {
    if (modal) document.body.style.overflow = 'hidden';

    if (!modal) document.body.style.overflow = 'auto';
  }, [modal]);

  useEffect(() => {
    getTransaction();
    getTransactionSummary();
    getTransactionCategories();
  }, [isAuth]);

  const isAuthNull = isNull(isAuth);

  return (
    <>
      {isAuthNull ? (
        <MainLoader />
      ) : (
        <>
          <CSSTransition mountOnEnter unmountOnExit in={!!modal} timeout={300} classNames="modal">
            <Modal />
          </CSSTransition>

          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="switch-wrapper"
          >
            <IsLoggedInRoute path="/signin" component={LoginPage} />
            <IsLoggedInRoute path="/signup" component={RegPage} />
            <PrivatRoute path="/" component={HomePage} />
            <Redirect to="/signin" />
          </AnimatedSwitch>
        </>
      )}
    </>
  );
};

export default App;
