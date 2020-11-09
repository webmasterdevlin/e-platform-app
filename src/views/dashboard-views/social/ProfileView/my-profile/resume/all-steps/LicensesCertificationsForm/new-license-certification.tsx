import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { Box, Button, Typography } from '@material-ui/core';

import {
  LicenseCertificationModel,
  licenseCertificationValue,
} from './schema/license-certification.value';
import { licensesCertificationsYupObject } from './schema/licenses-ceritifications.validation';
import LicenseCertificationForm from './components/license-certification-form';

type Props = {
  setShowNewLicenseExperience: (boolean) => void;
  showCancelButton: boolean;
};

const NewLicenseCertification: React.FC<Props> = ({
  setShowNewLicenseExperience,
  showCancelButton,
}) => (
  <Formik
    initialValues={licenseCertificationValue}
    validationSchema={licensesCertificationsYupObject}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
    }}
  >
    {(formikProps: FormikProps<LicenseCertificationModel>) => (
      <Form>
        <Box mb={4}>
          <Typography variant={'h4'}>New License or Certificate</Typography>
        </Box>
        <div>
          <LicenseCertificationForm />
          <Button type={'submit'} variant={'contained'} color={'primary'}>
            Save
          </Button>
          {showCancelButton && (
            <Button
              onClick={setShowNewLicenseExperience}
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

export default NewLicenseCertification;
