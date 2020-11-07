import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';

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
        <h4 className="gray">New Role</h4>
        <div className="dashboard-list-box-static">
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
