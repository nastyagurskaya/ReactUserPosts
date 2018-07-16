import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {userPostService} from '../services/user.posts.service';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      localStorage.getItem('authorized') == 'true'
     // userPostService.loggedin == true
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login'
        }} />
    )} />
  )