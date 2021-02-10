import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, LinearProgress, Typography } from '@material-ui/core';
import TextAreaFormik from 'components/eplatform/components/text-area-formik';
import { putMyProfileAxios } from '../../../../my-profile.service';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { MyProfileModel } from '../../../../schema/my-profile-empty.value';
import { ProfileModel } from 'auth/auth.model';

type Props = {
  myProfile: MyProfileModel;
  setIsEditing: () => void;
  fetchMyProfile: () => Promise<void>;
};

const PersonalSummaryForm = ({
  setIsEditing,
  myProfile,
  fetchMyProfile,
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
      enableReinitialize={true}
      initialValues={myProfile}
      validationSchema={null}
      onSubmit={async (values, actions) => {
        setLoading(true);
        const request = { ...values, id: userId };
        try {
          await putMyProfileAxios(request);
          setIsEditing();
          await fetchMyProfile();
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
        setLoading(false);
      }}
    >
      {formikProps => (
        <Form>
          {loading && (
            <Box my={2}>
              <LinearProgress color="secondary" />
            </Box>
          )}
          <Box mb={6}>
            <Typography variant={'h3'}>Edit Personal Summary</Typography>
          </Box>
          <div>
            <section>
              <Box mb={1}>
                <Typography>
                  Highlight your unique experiences, ambitions and strengths.
                </Typography>
              </Box>
            </section>

            <TextAreaFormik name={'profileSummary'} label={'profileSummary'} />

            <Button
              style={{ marginRight: '1rem' }}
              type={'submit'}
              variant={'contained'}
              color={'primary'}
            >
              Save
            </Button>

            {
              <Button onClick={setIsEditing} variant={'text'} color={'primary'}>
                Cancel
              </Button>
            }
            <Button
              onClick={() => formikProps.setFieldValue('profileSummary', '')}
              variant={'outlined'}
              color={'primary'}
            >
              Clear
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default PersonalSummaryForm;
