import React, { useEffect } from 'react';
import { OidcSecure as OdicSecure } from '@axa-fr/react-oidc-redux';
import configuration from '../configuration';
import CustomAuthenticatingComponent from './custom-authenticating-component';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Redirect, useHistory } from 'react-router-dom';

const LoginV2 = ({ children }) => {
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);
  const history = useHistory();

  if (isLoadingUser) {
    return <h1>Loading user..</h1>;
  }

  if (!user?.id_token) {
    return (
      <OdicSecure
        isEnabled={configuration.isEnabled}
        authenticating={CustomAuthenticatingComponent}
      >
        {children}
      </OdicSecure>
    );
  }

  return <Redirect to={'/app'} />;
};

export default LoginV2;
