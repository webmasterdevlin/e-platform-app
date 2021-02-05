import React from 'react';
import { Box, Container } from '@material-ui/core';
import NavigationBar from 'features/anti-heroes/shared/navigation-bar';

const ReduxDemoLayout = ({ children }) => {
  return (
    <Box>
      <NavigationBar />
      <Container>{children}</Container>
    </Box>
  );
};

export default ReduxDemoLayout;
