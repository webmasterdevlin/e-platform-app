import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Formik, Form } from 'formik';
import { ExperienceModel } from './schema/experience.value';
import { experienceYupObject } from './schema/experience.validation';
import RoleForm from './components/role-form';

type Props = {
  setIsEditing: () => void;
  setShowEditingExperience: () => void;
  experience: ExperienceModel;
};

const EditRole: React.FC<Props> = ({
  experience,
  setIsEditing,
  setShowEditingExperience,
}) => {
  return (
    <Formik
      initialValues={experience}
      validationSchema={experienceYupObject}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {formikProps => (
        <Form>
          <section className={'d-flex flex-row justify-content-between'}>
            <h4 className="gray">Edit Role</h4>
            <Button
              onClick={async () => {
                try {
                  alert(`await deleteExperienceAxios(${experience.id})`);
                  setIsEditing();
                  setShowEditingExperience();
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
          </section>
          <div className="dashboard-list-box-static">
            <RoleForm formikProps={formikProps} />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            <Button
              onClick={() => {
                setIsEditing();
                setShowEditingExperience();
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

export default EditRole;
