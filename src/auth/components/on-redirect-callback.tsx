import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const OnRedirectCallback = appState => {
  const history = useHistory();
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);

  if (user?.id_token) {
    return <Redirect to={'/'} />;
  }

  return (
    <>
      <button onClick={() => history.push('/')}>Home</button>
    </>
  );
};

export default OnRedirectCallback;
