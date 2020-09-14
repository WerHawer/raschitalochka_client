import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { CSSTransition } from 'react-transition-group';
import Modal from 'components/Modal/ModalContainer';
import { mapStyles, bounceTransition } from 'libs/routesAnimationsSettings';
import HomePage from './pages/MainPage/';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegPage from 'pages/RegistrationPage/RegPage';

const App = ({ modal }) => {
  const isAuth = true;

  useEffect(() => {
    if (modal) document.body.style.overflow = 'hidden';

    if (!modal) document.body.style.overflow = 'auto';
  }, [modal]);
  return (
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
        <Route path="/signin" component={LoginPage} />
        <Route path="/signup" component={RegPage} />
        {isAuth && <Route path="/" component={HomePage} />}
        <Redirect to="/signin" />
      </AnimatedSwitch>
    </>
  );
};

export default App;
