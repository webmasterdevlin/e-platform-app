import React from 'react';
import { OidcSecure } from '@axa-fr/react-oidc-redux';
import configuration from '../configuration';
import CustomAuthenticatingComponent from './custom-authenticating-component';

const ProtectedChild = ({ children }) => {
  return (
    <OidcSecure
      isEnabled={configuration.isEnabled}
      authenticating={CustomAuthenticatingComponent}
    >
      <h2>Protected Component</h2>
    </OidcSecure>
  );
};

export default ProtectedChild;
