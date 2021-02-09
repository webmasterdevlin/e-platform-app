import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, LinearProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { experienceValue } from './schema/experience.value';
import { experienceYupObject } from './schema/experience.validation';
import ExperienceForm from './components/experience-form';
import { RootState } from '../../../../../../../../store';
import { ProfileModel } from '../../../../../../../../auth/auth.model';
import { postExperienceAxios } from './experience.service';

type Props = {
  setShowNewExperience: (boolean) => void;
  showCancelButton: boolean;
  fetchExperience: () => Promise<void>;
};
const NewExperience = ({
  setShowNewExperience,
  showCancelButton,
  fetchExperience,
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
      initialValues={experienceValue}
      validationSchema={experienceYupObject}
      onSubmit={async (values, actions) => {
        setLoading(true);
        const request = { ...values, id: userId };
        try {
          await postExperienceAxios(request);
          actions.resetForm({});
          setShowNewExperience(false);
          await fetchExperience();
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
        setLoading(false);
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
            <Typography variant={'h3'}>New Role</Typography>
          </Box>
          <div>
            <ExperienceForm />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            {showCancelButton && (
              <Button
                onClick={setShowNewExperience}
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

export default NewExperience;
