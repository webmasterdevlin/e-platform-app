import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { EducationModel } from './schema/education.value';
import { educationYupObject } from './schema/education.validation';
import EducationForm from './components/education-form';

type Props = {
  setIsEditing: () => void;
  setShowEditingEducation: () => void;
  education: EducationModel;
};

const EditEducation: React.FC<Props> = ({
  education,
  setIsEditing,
  setShowEditingEducation,
}) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={education}
      validationSchema={educationYupObject}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {formikProps => (
        <Form>
          <div>
            <h4>Edit Education</h4>
            <Button
              onClick={async () => {
                try {
                  alert(`await deleteEducationAxios(${education.id})`);
                  setIsEditing();
                  setShowEditingEducation();
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
          </div>
          <div>
            <EducationForm formikProps={formikProps} />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            <Button
              onClick={() => {
                setIsEditing();
                setShowEditingEducation();
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

export default EditEducation;
