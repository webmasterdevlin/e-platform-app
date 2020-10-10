import React from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { User } from 'react-feather';
import { OidcSecure as OdicSecure, oidcSecure } from '@axa-fr/react-oidc-redux';
import configuration from '../configuration';
import CustomAuthenticatingComponent from './custom-authenticating-component';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ProtectedChild = ({ children }) => {
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);

  return (
    <OdicSecure
      isEnabled={configuration.isEnabled}
      authenticating={CustomAuthenticatingComponent}
    >
      <h2>Protected Component</h2>
    </OdicSecure>
  );
};

export default ProtectedChild;
