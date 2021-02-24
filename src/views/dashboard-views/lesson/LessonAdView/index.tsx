import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';

import Page from '../../../../components/Page';
import Header from '../../account/AccountView/Header';
import { Theme } from '../../../../themes/dashboard-theme';
import { Formik } from 'formik';

type Prop = {};

const LessonAdView = ({}: Prop) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Lesson Ad">
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <h1>LessonAdView</h1>

          <Formik
            initialValues={{
              adType: 'Individual',
              title: 'string',
              description: 'string',
              skillId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              subjectModuleId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              availability: {},
              schedule: {},
              locationInforamtion: {
                type: 'PlaceArrangedByMentor',
                location: {
                  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                  placeId: 'string',
                  type: 'Customer',
                  name: 'string',
                  description: 'string',
                  country: 'string',
                  state: 'string',
                  city: 'string',
                  postalCode: 'string',
                  addressLine1: 'string',
                  addressLine2: 'string',
                  formattedAddress: 'string',
                },
              },
              subscriptions: [
                {
                  hours: 0,
                  price: 0,
                  title: 'string',
                  description: 'string',
                },
              ],
              tags: [
                {
                  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                  name: 'string',
                },
              ],
            }}
            validationSchema={null}
            onSubmit={() => {}}
          >
            {formikProps => <></>}
          </Formik>
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
