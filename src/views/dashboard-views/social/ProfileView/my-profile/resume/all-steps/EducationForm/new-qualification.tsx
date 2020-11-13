import React, { useEffect, useState } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { Box, Button, Typography } from '@material-ui/core';

import {
  QualificationModel,
  qualificationValue,
} from './schema/qualification.value';
import { qualificationYupObject } from './schema/qualification.validation';
import QualificationForm from './components/qualification-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../../store';
import { ProfileModel } from '../../../../../../../../auth/auth.model';
import { postEducationAxios } from './qualification.service';

type Props = {
  setShowNewQualification: (boolean) => void;
  showCancelButton: boolean;
};

const NewQualification: React.FC<Props> = ({
  setShowNewQualification,
  showCancelButton,
}) => {
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const profile: ProfileModel = user?.profile;
    setUserId(profile?.oid);
  }, []);

  return (
    <Formik
      initialValues={qualificationValue}
      validationSchema={qualificationYupObject}
      onSubmit={async (values, actions) => {
        const request: any = { ...values, id: userId };
        try {
          await postEducationAxios(request);
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
        // alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formikProps: FormikProps<QualificationModel>) => (
        <Form>
          <Box mb={4}>
            <Typography variant={'h4'}>New Qualification</Typography>
          </Box>
          <div>
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
