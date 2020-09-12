import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Modal from 'components/Modal/ModalContainer';
import Media from 'react-media';
import HomePage from './pages/MainPage/';
import LoginPage from 'pages/LoginPage/LoginPage';
import Select from './components/Select/Select';


const App = ({ modal }) => {
  const isAuth = true;

  useEffect(() => {
    if (modal) document.body.style.overflow = 'hidden';

    if (!modal) document.body.style.overflow = 'auto';
  }, [modal]);
  return (
    <>

      {modal && <Modal />}

      <Switch>
        <Route path="/signin" component={LoginPage} />
        {isAuth && <Route path="/" component={HomePage} />}
        <Redirect to="/signin" />
      </Switch>

    </>
  );
};

export default App;
