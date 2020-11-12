import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { QualificationModel } from './schema/qualification.value';
import { qualificationYupObject } from './schema/qualification.validation';
import QualificationForm from './components/qualification-form';

type Props = {
  setIsEditing: () => void;
  setShowEditingQualification: () => void;
  qualification: QualificationModel;
};

const EditQualification: React.FC<Props> = ({
  qualification,
  setIsEditing,
  setShowEditingQualification,
}) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={qualification}
      validationSchema={qualificationYupObject}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {formikProps => (
        <Form>
          <div>
            <h4>Edit Qualification</h4>
            <Button
              onClick={async () => {
                try {
                  alert(`await deleteQualificationAxios(${qualification.id})`);
                  setIsEditing();
                  setShowEditingQualification();
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
            <QualificationForm formikProps={formikProps} />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            <Button
              onClick={() => {
                setIsEditing();
                setShowEditingQualification();
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

export default EditQualification;
