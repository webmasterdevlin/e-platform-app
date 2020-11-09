import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { Box, Button, Typography } from '@material-ui/core';

import {
  QualificationModel,
  qualificationValue,
} from './schema/qualification.value';
import { qualificationYupObject } from './schema/qualification.validation';
import QualificationForm from './components/qualification-form';

type Props = {
  setShowNewQualification: (boolean) => void;
  showCancelButton: boolean;
};

const NewQualification: React.FC<Props> = ({
  setShowNewQualification,
  showCancelButton,
}) => {
  return (
    <Formik
      initialValues={qualificationValue}
      validationSchema={qualificationYupObject}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formikProps: FormikProps<QualificationModel>) => (
        <Form>
          <Box mb={4}>
            <Typography variant={'h4'}>New Qualification</Typography>
          </Box>
          <div className="dashboard-list-box-static">
            <QualificationForm formikProps={formikProps} />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            {showCancelButton && (
              <Button
                onClick={setShowNewQualification}
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

export default NewQualification;
