import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, Typography } from '@material-ui/core';

import { experienceValue } from './schema/experience.value';
import { experienceYupObject } from './schema/experience.validation';
import RoleForm from './components/role-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../../store';
import { ProfileModel } from '../../../../../../../../auth/auth.model';
import { postExperienceAxios } from './experience.service';

type Props = {
  setShowNewExperience: (boolean) => void;
  showCancelButton: boolean;
};
const NewExperience: React.FC<Props> = ({
  setShowNewExperience,
  showCancelButton,
}) => {
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
        const request = { ...values, id: userId };
        try {
          await postExperienceAxios(request);
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
        // alert(JSON.stringify(values, null, 2));
      }}
    >
      {formikProps => (
        <Form>
          <Box mb={4}>
            <Typography variant={'h4'}>New Role</Typography>
          </Box>
          <div>
            <RoleForm />
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
