import React, { useEffect } from 'react';
import SlashScreen from '../../components/SplashScreen';
import axios2 from '../../utils/axios2';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const CustomAuthenticatingComponent: React.FC = () => {
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);

  useEffect(() => {
    const token = user?.access_token;
    if (token) axios2.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  return <SlashScreen />;
};

export default CustomAuthenticatingComponent;
