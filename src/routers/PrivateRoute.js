/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MainLayout from './layouts/MainLayout';
import { authSelector } from '../selectors';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  isTutorial,
  path,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated
      ? (
        <MainLayout isAuthenticated={isAuthenticated}>
          <Component {...props} />
        </MainLayout>
      )
      : <Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.element,
  isAuthenticated: PropTypes.bool,
  isTutorial: PropTypes.bool,
  path: PropTypes.string,
};

PrivateRoute.defaultProps = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isTutorial: PropTypes.bool,
  path: PropTypes.string,
};

export default connect(authSelector)(PrivateRoute);
