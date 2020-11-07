import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

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
        <h4 className="gray">New License or Certificate</h4>
        <div className="dashboard-list-box-static">
          <LicenseCertificationForm formikProps={formikProps} />
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
