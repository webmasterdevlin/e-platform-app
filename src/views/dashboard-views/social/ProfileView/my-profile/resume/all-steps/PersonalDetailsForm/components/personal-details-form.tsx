import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { Alert } from '@material-ui/lab';
import { Box, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import {
  PersonalDetailsModel,
  personalDetailsValue,
} from '../schema/personal-details.value';
import { personalDetailsYupObject } from '../schema/personal-details.validation';
import InputFormik from '../../../../../../../../../components/eplatform/components/input-formik';

import CountrySelect from '../../../../../../../../../components/eplatform/components/country-select';

type Props = {
  personalDetails: PersonalDetailsModel;
  setIsEditing: () => void;
};

const PersonalDetailsForm: React.FC<Props> = ({
  setIsEditing,
  personalDetails,
}) => {
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    if (personalDetails?.firstName) setIsNew(false);
  }, []);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={isNew ? personalDetailsValue : personalDetails}
      validationSchema={personalDetailsYupObject}
      onSubmit={async (values, actions) => {
        alert(isNew ? 'New' : 'Editing');
        alert(JSON.stringify(values, null, 2));
        try {
          if (isNew) {
            alert('await postPersonalDetailsAxios(values)');
          } else {
            alert('await putPersonalDetailsAxios(values)');
          }
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
      }}
    >
      {formikProps => (
        <Form>
          <Box mb={2}>
            <Typography variant={'h2'}>{`${
              isNew ? 'New' : 'Edit'
            } Personal Details (No Endpoint)`}</Typography>
          </Box>
          <div>
            <section>
              <div>
                <div>
                  <InputFormik name={'firstName'} label={'First Name'} />
                </div>
                <div>
                  <InputFormik name={'lastName'} label={'Last Name'} />
                </div>
              </div>

              <InputFormik name={'mobile'} label={'Mobile Number'} />

              <CountrySelect name={'country'} />

              <Typography variant={'h6'}>Email address</Typography>
              <label>
                <em>{formikProps.values.email}</em>
              </label>
              <Alert severity="info" style={{ marginBottom: '2rem' }}>
                <Typography variant={'caption'}>
                  Change your email, password, or delete your account in{' '}
                  <Link to={'dashboard-settings'}>Settings</Link>.
                </Typography>
              </Alert>
            </section>
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            {!isNew && (
              <Button onClick={setIsEditing} variant={'text'} color={'primary'}>
                Cancel
              </Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default PersonalDetailsForm;
