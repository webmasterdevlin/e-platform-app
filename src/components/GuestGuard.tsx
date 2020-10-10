import React from 'react';
import type { FC, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { OidcSecure as OdicSecure } from '@axa-fr/react-oidc-redux';
import configuration from '../auth/configuration';
import CustomAuthenticatingComponent from '../auth/components/custom-authenticating-component';

interface GuestGuardProps {
  children?: ReactNode;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);

  if (isAuthenticated) {
    return <Redirect to="/app/account" />;
  }

  return (
    <OdicSecure
      isEnabled={configuration.isEnabled}
      authenticating={CustomAuthenticatingComponent}
    >
      {children}
    </OdicSecure>
  );
};

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default GuestGuard;
