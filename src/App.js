import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import TestPage from 'pages/TestPage/TestPageContainer';
import TestRouting from 'pages/TestRouting/TestRouting';
import LoginPage from 'pages/LoginPage/LoginPage';

const App = () => {
  const isAuth = false;
  return (
    <>
      {isAuth && (
        <nav>
          <Link to="/" style={{ marginRight: 20 }}>
            Home
          </Link>
          <Link to="/test">Test Page</Link>
        </nav>
      )}

      <Switch>
        <Route path="/" exact component={TestPage} />
        <Route path="/test" component={TestRouting} />
        <Route path="/signin" component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
