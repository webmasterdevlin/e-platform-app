import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { CertificationModel } from './schema/certification.value';
import { experienceYupObject } from '../ExperienceForm/schema/experience.validation';
import CertificationForm from './components/certification-form';

type Props = {
  setIsEditing: () => void;
  setShowEditingCertification: () => void;
  certification: CertificationModel;
};

const EditCertifications: React.FC<Props> = ({
  certification,
  setIsEditing,
  setShowEditingCertification,
}) => {
  return (
    <Formik
      initialValues={certification}
      validationSchema={experienceYupObject}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {formikProps => (
        <Form>
          <div>
            <h4>Edit Certificate</h4>
            <Button
              onClick={async () => {
                try {
                  alert(`await deleteCertificationAxios(${certification.id})`);
                  setIsEditing();
                  setShowEditingCertification();
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
            <CertificationForm />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            <Button
              onClick={() => {
                setIsEditing();
                setShowEditingCertification();
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

export default EditCertifications;
