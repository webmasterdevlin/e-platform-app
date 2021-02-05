import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, LinearProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { certificationValue } from './schema/certification.value';
import { certificationsYupObject } from './schema/ceritifications.validation';
import CertificationForm from './components/certification-form';
import { RootState } from 'store';
import { ProfileModel } from 'auth/auth.model';
import { postCertificateAxios } from './certifications.service';

type Props = {
  setShowNewCertificate: (boolean) => void;
  showCancelButton: boolean;
};

const NewCertification = ({
  setShowNewCertificate,
  showCancelButton,
}: Props) => {
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const profile: ProfileModel = user?.profile;
    setUserId(profile?.oid);
  }, []);

  return (
    <Formik
      initialValues={certificationValue}
      validationSchema={certificationsYupObject}
      onSubmit={async (values, actions) => {
        setLoading(true);
        const request = { ...values, id: userId };
        try {
          await postCertificateAxios(request);
          actions.resetForm();
          setShowNewCertificate(false);
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
        setLoading(false);
      }}
    >
      {() => (
        <Form>
          <Box mb={6}>
            <Typography variant={'h3'}>New Certificate</Typography>
          </Box>
          <div>
            {loading && (
              <Box my={2}>
                <LinearProgress color="secondary" />
              </Box>
            )}
            <CertificationForm />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            {showCancelButton && (
              <Button
                onClick={setShowNewCertificate}
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

export default NewCertification;
