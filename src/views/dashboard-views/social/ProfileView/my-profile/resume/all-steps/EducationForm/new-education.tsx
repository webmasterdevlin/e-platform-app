import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, LinearProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { educationValue } from './schema/education.value';
import { educationYupObject } from './schema/education.validation';
import EducationForm from './components/education-form';
import { RootState } from 'store';
import { ProfileModel } from 'auth/auth.model';
import { postEducationAxios } from './education.service';

type Props = {
  setShowNewEducation: (boolean) => void;
  showCancelButton: boolean;
  fetchEducation: () => Promise<void>;
};

const NewEducation = ({
  setShowNewEducation,
  showCancelButton,
  fetchEducation,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const profile: ProfileModel = user?.profile;
    setUserId(profile?.oid);
  }, []);

  return (
    <Formik
      initialValues={educationValue}
      validationSchema={educationYupObject}
      onSubmit={async (values, actions) => {
        const request = { ...values, id: userId };
        try {
          await postEducationAxios(request);
          actions.resetForm({});
          setShowNewEducation(false);
          await fetchEducation();
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
      }}
    >
      {() => (
        <Form>
          {loading && (
            <Box my={2}>
              <LinearProgress color="secondary" />
            </Box>
          )}
          <Box mb={6}>
            <Typography variant={'h3'}>New Qualification</Typography>
          </Box>
          <div>
            <EducationForm />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            {showCancelButton && (
              <Button
                onClick={setShowNewEducation}
                variant={'text'}
                color={'primary'}
              >
                Cancel
              </Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewEducation;
