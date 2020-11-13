import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { Box, Button, Typography } from '@material-ui/core';

import {
  CertificationModel,
  certificationValue,
} from './schema/certification.value';
import { certificationsYupObject } from './schema/ceritifications.validation';
import CertificationForm from './components/certification-form';

type Props = {
  setShowNewExperience: (boolean) => void;
  showCancelButton: boolean;
};

const NewCertification: React.FC<Props> = ({
  setShowNewExperience,
  showCancelButton,
}) => (
  <Formik
    initialValues={certificationValue}
    validationSchema={certificationsYupObject}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
    }}
  >
    {(formikProps: FormikProps<CertificationModel>) => (
      <Form>
        <Box mb={4}>
          <Typography variant={'h4'}>New License or Certificate</Typography>
        </Box>
        <div>
          <CertificationForm />
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

export default NewCertification;
