import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import TestPage from 'pages/TestPage/TestPageContainer';
import TestRouting from 'pages/TestRouting/TestRouting';

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
      </nav>

      <Switch>
        <Route path="/" exact component={TestPage} />
        <Route path="/test" component={TestRouting} />
        <Route path="/home" component={TestRouting} />
        <Route path="/diagrams" component={TestRouting} />
        <Route path="/currency" component={TestRouting} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
