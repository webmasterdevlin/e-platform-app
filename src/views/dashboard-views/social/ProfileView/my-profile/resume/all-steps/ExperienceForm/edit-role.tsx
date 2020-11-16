import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Formik, Form } from 'formik';
import { ExperienceModel } from './schema/experience.value';
import { experienceYupObject } from './schema/experience.validation';
import RoleForm from './components/role-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../../store';
import { ProfileModel } from '../../../../../../../../auth/auth.model';
import { putExperienceAxios } from './experience.service';

type Props = {
  setIsEditing: () => void;
  setShowEditingExperience: () => void;
  experience: ExperienceModel;
};

const EditRole: React.FC<Props> = ({
  experience,
  setIsEditing,
  setShowEditingExperience,
}) => {
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
        try {
          await putExperienceAxios(values);
          setShowEditingExperience();
          actions.resetForm();
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
      }}
    >
      {() => (
        <Form>
          <Box
            mb={6}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box>
              <Typography variant={'h3'}>Edit Role</Typography>
            </Box>
            <Box>
              <Button
                onClick={async () => {
                  try {
                    alert(`await deleteExperienceAxios(${experience.id})`);
                    setIsEditing();
                    setShowEditingExperience();
                  } catch (e) {
                    alert(`Something happened: ${e.message}`);
                  }
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
            <RoleForm />
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

export default EditRole;
