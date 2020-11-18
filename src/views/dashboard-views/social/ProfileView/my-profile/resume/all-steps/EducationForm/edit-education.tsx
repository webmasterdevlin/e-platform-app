import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, LinearProgress, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { EducationModel } from './schema/education.value';
import { educationYupObject } from './schema/education.validation';
import EducationForm from './components/education-form';
import { deleteEducationAxios, putEducationAxios } from './education.service';

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
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={education}
      validationSchema={educationYupObject}
      onSubmit={async (values, actions) => {
        setLoading(true);
        try {
          await putEducationAxios(values);
          actions.resetForm();
          setShowEditingEducation();
          setIsEditing();
        } catch (e) {
          alert('Something wrong happened. Please try again.');
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
              <Typography variant={'h3'}>Edit Education</Typography>
            </Box>
            <Box>
              <Button
                onClick={async () => {
                  setLoading(true);
                  try {
                    await deleteEducationAxios(education.id);
                    setIsEditing();
                    setShowEditingEducation();
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
            <EducationForm />
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
