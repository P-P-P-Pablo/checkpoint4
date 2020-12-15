
import React from 'react';  
import { Redirect, Route } from 'react-router-dom';

// Utils
import auth from '../../utils/auth';

export default const PrivateRoute = ({ component: Component, ...rest }) => (  
  <Route {...rest} render={props => (
    auth.getToken() !== null ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
        }}
      />
    )
  )} />
);