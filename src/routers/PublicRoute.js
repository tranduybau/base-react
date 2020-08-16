/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from 'utils/cookie';

import { authSelector } from '../selectors';

const PublicRoute = ({
  component: Component, isAuthenticated, publicOnly, ...rest
}) => {
  const CurrentLayout = publicOnly ? DefaultLayout : MainLayout;
  const token = getToken();

  return (
    <Route
      {...rest}
      render={(props) => (publicOnly && isAuthenticated ? <Redirect to="/" />
        : (
          <CurrentLayout isAuthenticated={isAuthenticated}>
            <Component {...props} />
          </CurrentLayout>
        )
      )}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.element,
  isAuthenticated: PropTypes.bool,
  isTutorial: PropTypes.bool,
  path: PropTypes.string,
};

PublicRoute.defaultProps = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isTutorial: PropTypes.bool,
  path: PropTypes.string,
};

export default (PublicRoute);
