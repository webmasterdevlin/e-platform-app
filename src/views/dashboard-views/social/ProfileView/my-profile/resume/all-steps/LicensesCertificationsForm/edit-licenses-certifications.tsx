import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { LicenseCertificationModel } from './schema/license-certification.value';
import { experienceYupObject } from '../ExperienceForm/schema/experience.validation';
import LicenseCertificationForm from './components/license-certification-form';

type Props = {
  setIsEditing: () => void;
  setShowEditingLicenseCertification: () => void;
  licenseCertification: LicenseCertificationModel;
};

const EditLicensesCertifications: React.FC<Props> = ({
  licenseCertification,
  setIsEditing,
  setShowEditingLicenseCertification,
}) => {
  return (
    <Formik
      initialValues={licenseCertification}
      validationSchema={experienceYupObject}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {formikProps => (
        <Form>
          <div className={'d-flex flex-row justify-content-between'}>
            <h4 className="gray">Edit License or Certificate</h4>
            <Button
              onClick={async () => {
                try {
                  alert(
                    `await deleteEducationAxios(${licenseCertification.id})`,
                  );
                  setIsEditing();
                  setShowEditingLicenseCertification();
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
          <div className="dashboard-list-box-static">
            <LicenseCertificationForm />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            <Button
              onClick={() => {
                setIsEditing();
                setShowEditingLicenseCertification();
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

export default EditLicensesCertifications;
