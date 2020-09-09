import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Modal from 'components/Modal/ModalContainer';
import AddModals from 'components/AddModals/AddModals';
import Media from 'react-media';
import HomePage from './pages/MainPage/';
import LoginPage from 'pages/LoginPage/LoginPage';

const App = ({ modal }) => {
  const isAuth = true;
  return (
    <>
      <Media query="(min-width: 768px)" render={() => <>{modal && <Modal />}</>} />
      <Media
        query="(max-width: 767px)"
        render={() => <>{(modal === 'cost' || modal === 'income') && <AddModals variant={modal} />}</>}
      />

      <Switch>
        <Route path="/signin" component={LoginPage} />
        {isAuth && <Route path="/" component={HomePage} />}
        <Redirect to="/signin" />
      </Switch>
    </>
  );
};

export default App;
