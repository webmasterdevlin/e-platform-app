import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import Page from 'components/Page';
import Header from './Header';
import Statistics from './Statistics';
import Notifications from './Notifications';
import Projects from './Projects';

const OverviewView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Overview">
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <Statistics />
        </Box>
        <Box mt={6}>
          <Notifications />
        </Box>
        <Box mt={6}>
          <Projects />
        </Box>
      </Container>
    </Page>
  );
};

export default OverviewView;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));
