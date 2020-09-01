import React, { Component } from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';

import Diagram from './LinkDiagram/Diagram';
import Home from './LinkHome/Home';

export default function Links() {
  const match = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/Home`}>Home</Link>
        </li>
        <li>
          <Link to={`${match.url}/Diagram`}>Diagram</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/home`} component={Home} />
        <Route path={`${match.path}/diagram`} component={Diagram} />
      </Switch>
    </div>
  );
}
