import React from 'react';
import Page from '../../../../components/Page';
import { Box, Container, makeStyles } from '@material-ui/core';
import Header from '../../account/AccountView/Header';
import { Theme } from '../../../../themes/dashboard-theme';

type Prop = {};

const LessonAdView = ({}: Prop) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Lesson Ad">
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <h1>LessonAdView</h1>
        </Box>
      </Container>
    </Page>
  );
};

export default LessonAdView;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));
