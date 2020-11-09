import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, Typography } from '@material-ui/core';

import { experienceValue } from './schema/experience.value';
import { experienceYupObject } from './schema/experience.validation';
import RoleForm from './components/role-form';

type Props = {
  setShowNewExperience: (boolean) => void;
  showCancelButton: boolean;
};
const NewExperience: React.FC<Props> = ({
  setShowNewExperience,
  showCancelButton,
}) => (
  <Formik
    initialValues={experienceValue}
    validationSchema={experienceYupObject}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
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

export default NewExperience;
