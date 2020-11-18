import React, { useEffect, useState } from 'react';
import { Box, Button, LinearProgress, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

import { ExperienceModel } from './schema/experience.value';
import { experienceYupObject } from './schema/experience.validation';
import ExperienceForm from './components/experience-form';
import { RootState } from '../../../../../../../../store';
import { ProfileModel } from '../../../../../../../../auth/auth.model';
import {
  deleteExperienceAxios,
  putExperienceAxios,
} from './experience.service';

type Props = {
  setIsEditing: () => void;
  setShowEditingExperience: () => void;
  experience: ExperienceModel;
};

const EditExperience: React.FC<Props> = ({
  experience,
  setIsEditing,
  setShowEditingExperience,
}) => {
  const [loading, setLoading] = useState(false);
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const profile: ProfileModel = user?.profile;
    setUserId(profile?.oid);
  }, []);

  return (
    <Formik
      initialValues={experience}
      validationSchema={experienceYupObject}
      onSubmit={async (values, actions) => {
        setLoading(true);
        try {
          await putExperienceAxios(values);
          setShowEditingExperience();
          actions.resetForm();
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
          <Box
            mb={6}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box>
              <Typography variant={'h3'}>Edit Experience</Typography>
            </Box>
            <Box>
              <Button
                onClick={async () => {
                  setLoading(true);
                  try {
                    await deleteExperienceAxios(experience.id);
                    setIsEditing();
                    setShowEditingExperience();
                  } catch (e) {
                    alert(`Something happened: ${e.message}`);
                  }
                  setLoading(false);
                }}
                color={'inherit'}
                variant="text"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </Box>
          </Box>
          <div>
            <ExperienceForm />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            <Button
              onClick={() => {
                setIsEditing();
                setShowEditingExperience();
              }}
              variant={'text'}
              color={'primary'}
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditExperience;
