import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { Alert } from '@material-ui/lab';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import {
  PersonalDetailsModel,
  personalDetailsValue,
} from '../schema/personal-details.value';
import { personalDetailsYupObject } from '../schema/personal-details.validation';
import InputWithRightIconFormik from '../../../../../components/eplatform/page-components/input-with-right-icon-formik';
import InputFormik from '../../../../../components/eplatform/page-components/input-formik';
import CountryAutosuggest from '../../../../../views/dashboard-views/social/ProfileView/my-profile/country-autosuggest';

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
          <h4 className="gray">{`${
            isNew ? 'New' : 'Edit'
          } Personal Details`}</h4>
          <div className="dashboard-list-box-static">
            <section className={'my-4'}>
              <div className="row">
                <div className="col-md-6">
                  <InputWithRightIconFormik
                    id={'firstName'}
                    value={formikProps.values.firstName}
                    label={'First Name'}
                    handleOnChange={formikProps.handleChange}
                    handleOnBlur={formikProps.handleBlur}
                    icon={'fa fa-close'}
                    handleOnIconClick={() =>
                      formikProps.setFieldValue('firstName', '')
                    }
                  />
                </div>
                <div className="col-md-6">
                  <InputWithRightIconFormik
                    id={'lastName'}
                    value={formikProps.values.lastName}
                    label={'Last Name'}
                    handleOnChange={formikProps.handleChange}
                    handleOnBlur={formikProps.handleBlur}
                    icon={'fa fa-close'}
                    handleOnIconClick={() =>
                      formikProps.setFieldValue('lastName', '')
                    }
                  />
                </div>
              </div>
              <InputWithRightIconFormik
                id={'mobileNumber'}
                value={formikProps.values.mobileNumber}
                label={'Mobile Number'}
                handleOnChange={formikProps.handleChange}
                handleOnBlur={formikProps.handleBlur}
                icon={'fa fa-close'}
                handleOnIconClick={() =>
                  formikProps.setFieldValue('mobileNumber', '')
                }
              />
              {formikProps.values.country ? (
                <InputFormik
                  id={'country'}
                  label={'Country'}
                  formikProps={formikProps}
                />
              ) : (
                // TODO: Fix the navigates when backspace is pressed on Firefox
                <CountryAutosuggest
                  id={'country'}
                  label={'Country'}
                  setFieldValue={formikProps.setFieldValue}
                />
              )}
              <label>Email address</label>
              <label>
                <em>{formikProps.values.email}</em>
              </label>
              <Alert severity="info">
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
