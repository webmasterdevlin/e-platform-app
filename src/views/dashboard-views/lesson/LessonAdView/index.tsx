import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import { Formik } from 'formik';

import Page from '../../../../components/Page';
import Header from '../../account/AccountView/Header';
import { Theme } from '../../../../themes/dashboard-theme';
import InputFormik from '../../../../components/eplatform/components/input-formik';
import YupFormikValidationViewer from '../../../../components/eplatform/components/yup-formik-validation-viewer';
import Typography from '@material-ui/core/Typography';

type Prop = {};

const LessonAdView = ({}: Prop) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Lesson Ad">
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <Typography variant={'h1'}>LessonAdView</Typography>

          <Formik
            initialValues={{
              adType: 'Individual',
              title: 'string',
              description: 'string',
              skillId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              subjectModuleId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              availability: {},
              schedule: {},
              locationInformation: {
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
            {formikProps => (
              <>
                <InputFormik name={'adType'} label={'Type'} />
                <InputFormik name={'title'} label={'Title'} />
                <InputFormik name={'skillId'} label={'Skill'} />
                <InputFormik
                  name={'subjectModuleId'}
                  label={'Subject Module'}
                />

                <Typography variant={'h2'}>Availability</Typography>

                <Typography variant={'h2'}>Schedule</Typography>

                <Typography variant={'h2'}>Location Information</Typography>

                <InputFormik
                  name={'locationInformation.type'}
                  label={'Location Information Type'}
                />
                <InputFormik
                  name={'locationInformation.location.id'}
                  label={'Location Information Id'}
                />
                <InputFormik
                  name={'locationInformation.location.placeId'}
                  label={'Location Information Location'}
                />
                <InputFormik
                  name={'locationInformation.location.type'}
                  label={'Location Information Type'}
                />
                <InputFormik
                  name={'locationInformation.location.name'}
                  label={'Location Information Name'}
                />
                <InputFormik
                  name={'locationInformation.location.description'}
                  label={'Location Information Description'}
                />
                <InputFormik
                  name={'locationInformation.location.country'}
                  label={'Location Information Country'}
                />
                <InputFormik
                  name={'locationInformation.location.state'}
                  label={'Location Information State'}
                />
                <InputFormik
                  name={'locationInformation.location.city'}
                  label={'Location Information City'}
                />
                <InputFormik
                  name={'locationInformation.location.postalCode'}
                  label={'Location Information Postal Code'}
                />
                <InputFormik
                  name={'locationInformation.location.addressLine1'}
                  label={'Location Information Address Line 1'}
                />
                <InputFormik
                  name={'locationInformation.location.addressLine2'}
                  label={'Location Information Address Line 2'}
                />
                <InputFormik
                  name={'locationInformation.location.formattedAddress'}
                  label={'Location Information Formatted Address'}
                />

                <Typography variant={'h2'}>Subscriptions</Typography>

                <InputFormik
                  name={'subscriptions[0].hours'}
                  label={'Subscriptions Hours'}
                />
                <InputFormik
                  name={'subscriptions[0].price'}
                  label={'Subscriptions Price'}
                />
                <InputFormik
                  name={'subscriptions[0].title'}
                  label={'Subscriptions Title'}
                />
                <InputFormik
                  name={'subscriptions[0].description'}
                  label={'Subscriptions Description'}
                />

                <Typography variant={'h2'}>Tags</Typography>

                <InputFormik name={'tags[0].id'} label={'Tags Id'} />

                <InputFormik name={'tags[0].name'} label={'Tags Name'} />

                <YupFormikValidationViewer />
              </>
              /*{

              tags: [
                {
                  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                  name: 'string',
                },
              ],
            }*/
            )}
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
