import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const OnRedirectCallback = appState => {
  const history = useHistory();
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);

  if (user?.id_token) {
    return <Redirect to={'/app'} />;
  } else {
    return <p>callback url</p>;
  }
};

export default OnRedirectCallback;
