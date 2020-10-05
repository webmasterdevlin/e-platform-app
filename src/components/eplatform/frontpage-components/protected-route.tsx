import React from 'react';
import { Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
// import { ApplicationStateType } from '../../store/types';

const ProtectedRoute: React.FC<any> = props => {
  /*  const { accessToken } = useSelector(
    (state: ApplicationStateType) => state.signInReducer,
  );

  return accessToken ? <Route {...props} /> : <Navigate to="/login" />;*/

  return <h1>Protected Route</h1>;
};

export default ProtectedRoute;
