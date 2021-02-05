import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, LinearProgress, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector } from 'react-redux';

import { CertificationModel } from './schema/certification.value';
import { experienceYupObject } from '../ExperienceForm/schema/experience.validation';
import CertificationForm from './components/certification-form';
import {
  deleteCertificateAxios,
  putCertificateAxios,
} from './certifications.service';
import { RootState } from 'store';
import { ProfileModel } from 'auth/auth.model';

type Props = {
  setIsEditing: () => void;
  setShowEditingCertification: () => void;
  certification: CertificationModel;
};

const EditCertifications = ({
  certification,
  setIsEditing,
  setShowEditingCertification,
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
      initialValues={certification}
      validationSchema={experienceYupObject}
      onSubmit={async (values, actions) => {
        setLoading(true);
        try {
          await putCertificateAxios(values);
          actions.resetForm();
          setIsEditing();
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
        setLoading(false);
      }}
    >
      {() => (
        <Form>
          {loading && (
            <Box my={2}>
              <LinearProgress color="secondary" />
            </Box>
          )}
          <Box
            mb={6}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box>
              <Typography variant={'h3'}>Edit Certificate</Typography>
            </Box>
            <Box>
              <Button
                onClick={async () => {
                  setLoading(true);
                  try {
                    await deleteCertificateAxios(certification.id);
                    setIsEditing();
                    setShowEditingCertification();
                  } catch (e) {
                    alert(`Something happened: ${e.message}`);
                  }
                  setLoading(false);
                }}
                color={'inherit'}
                variant="text"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </Box>
          </Box>
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
