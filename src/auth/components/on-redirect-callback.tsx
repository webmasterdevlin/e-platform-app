import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import axios2 from '../../utils/axios2';

const OnRedirectCallback = appState => {
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);

  useEffect(() => {
    const token = user?.access_token;
    if (token) axios2.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  if (user?.id_token) {
    return <Redirect to={'/app'} />;
  } else {
    return <p>callback url</p>;
  }
};

export default OnRedirectCallback;
