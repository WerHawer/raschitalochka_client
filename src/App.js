import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/MainPage/';
import LoginPage from 'pages/LoginPage/LoginPage';

const App = () => {
  const isAuth = true;
  return (
    <>
      <Switch>
        <Route path="/signin" component={LoginPage} />
        {isAuth && <Route path="/" component={HomePage} />}
        <Redirect to="/signin" />
      </Switch>
    </>
  );
};

export default App;
