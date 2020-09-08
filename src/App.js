import React from 'react';
<<<<<<< HEAD
=======
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import TestPage from 'pages/TestPage/TestPageContainer';
import TestRouting from 'pages/TestRouting/TestRouting';
import LoginPage from 'pages/LoginPage/LoginPage';
>>>>>>> e95d78bfca5de5ec88d522a082c442526a325de2

const App = () => {
  const isAuth = false;
  return (
    <>
<<<<<<< HEAD
      <h1>App</h1>
=======
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
>>>>>>> e95d78bfca5de5ec88d522a082c442526a325de2
    </>
  );
};

export default App;
