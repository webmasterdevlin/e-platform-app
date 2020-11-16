import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, LinearProgress, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { CertificationModel } from './schema/certification.value';
import { experienceYupObject } from '../ExperienceForm/schema/experience.validation';
import CertificationForm from './components/certification-form';
import {
  postCertificateAxios,
  putCertificateAxios,
} from './certifications.service';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../../store';
import { ProfileModel } from '../../../../../../../../auth/auth.model';

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
            <Box mb={2} mt={2}>
              <LinearProgress color="secondary" />
            </Box>
          )}
          <Box
            mb={4}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box mb={6}>
              <Typography variant={'h3'}>Edit Certificate</Typography>
            </Box>
            <Box>
              <Button
                onClick={async () => {
                  try {
                    alert(
                      `await deleteCertificationAxios(${certification.id})`,
                    );
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
