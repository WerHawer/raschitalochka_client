import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import TestPage from 'pages/TestPage/TestPageContainer';
import TestRouting from 'pages/TestRouting/TestRouting';

//test
import Links from 'components/link/Links';
//test

const App = () => {
  return (
    <>
      <nav>
        <Link to="/" style={{ marginRight: 20 }}>
          Home
        </Link>
        <Link to="/test" style={{ marginRight: 20 }}>
          Test Page
        </Link>
        {/* test link */}
        <Link to="/Links" style={{ marginRight: 20 }}>
          Main
        </Link>
        {/* test link */}
      </nav>

      <Switch>
        {/* test link */}
        <Route path="/Links" component={Links} />
        {/* test link */}
        <Route path="/" exact component={TestPage} />
        <Route path="/test" component={TestRouting} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
