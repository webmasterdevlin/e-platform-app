import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { EducationModel } from './schema/education.value';
import { educationYupObject } from './schema/education.validation';
import EducationForm from './components/education-form';
import { putEducationAxios } from './education.service';

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
      onSubmit={async (values, actions) => {
        try {
          await putEducationAxios(values);
        } catch (e) {
          alert('Something wrong happened. Please try again.');
        }
      }}
    >
      {formikProps => (
        <Form>
          <Box
            mb={4}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
          >
            <div>
              <Typography variant={'h2'}>Edit Education</Typography>
            </div>
            <div>
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
          </Box>
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
