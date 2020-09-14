import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthSelector } from 'redux/selectors';

const LogRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (!isAuth ? <Component {...props} /> : <Redirect to="/" />)} />
);

const mapStateToProps = (state) => ({
  isAuth: getIsAuthSelector(state),
});

export default connect(mapStateToProps)(React.memo(LogRoute));
