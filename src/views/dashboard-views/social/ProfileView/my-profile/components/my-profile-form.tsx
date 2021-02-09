import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { createStyles } from '@material-ui/styles';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';

import {
  MyProfileModel,
  myProfileEmptyValue,
} from '../schema/my-profile-empty.value';
import { myProfileYupObject } from '../schema/my-profile.validation';
import { getMyProfileAxios, putMyProfileAxios } from '../my-profile.service';
import InputFormik from 'components/eplatform/components/input-formik';
import { Theme } from 'themes/dashboard-theme';
import TextAreaFormik from 'components/eplatform/components/text-area-formik';
import CountrySelect from 'components/eplatform/components/country-select';
import { RootState } from 'store';
import { ProfileModel } from 'auth/auth.model';

const MyProfileForm = ({ myProfile }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);
  const [userId, setUserId] = useState('');

  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    const profile: ProfileModel = user?.profile;
    setUserId(profile?.oid);
  }, []);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={myProfile}
      validationSchema={myProfileYupObject}
      onSubmit={async (values, actions) => {
        setLoading(true);
        const request = { ...values, id: userId };
        try {
          await putMyProfileAxios(request);
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
        setLoading(false);
      }}
    >
      {formikProps => (
        <div>
          <h4>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
            >
              <Box mb={2}>
                <Typography variant={'h3'}>Profile Details</Typography>
              </Box>
              <div
                style={{
                  width: '20rem',
                  height: 'auto',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}
              >
                {formikProps.values.imageUrl && (
                  <img
                    alt={'image profile'}
                    src={formikProps.values.imageUrl}
                    height={'auto'}
                    width={'100%'}
                    style={{
                      borderRadius: '1rem',
                    }}
                  />
                )}
              </div>
              {/*<div>*/}
              {/*  <Button*/}
              {/*    onClick={() => {*/}
              {/*      return;*/}
              {/*      history.push('');*/}
              {/*    }}*/}
              {/*    variant={'outlined'}*/}
              {/*    color={'primary'}*/}
              {/*  >*/}
              {/*    View Public Profile*/}
              {/*  </Button>*/}
              {/*</div>*/}
            </Box>
          </h4>
          <div>
            <Form>
              <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
              </Backdrop>
              <Box mb={4}>
                {/* Avatar */}
                {/*<Box mb={4}>*/}
                {/*  <ThumbnailImageContainer id={'imageUrl'} />*/}
                {/*</Box>*/}
                <Box mb={2}>
                  <Box mb={4}>
                    <Typography variant={'h4'}>Basic Info</Typography>
                  </Box>
                  <InputFormik name={'imageUrl'} label={'Image URL'} />
                  <InputFormik name={'firstName'} label={'First Name'} />
                  <InputFormik name={'lastName'} label={'Last Name'} />
                  <InputFormik
                    name={'mobileCountryCode'}
                    label={'Country code'}
                    placeholder={'+47'}
                  />
                  <InputFormik
                    name={'mobile'}
                    label={'Mobile No.'}
                    placeholder={'90263785'}
                  />
                  <InputFormik name={'email'} label={'Email'} />
                  {/*<TextAreaFormik*/}
                  {/*  name={'profileSummary'}*/}
                  {/*  label={'Profile Summary'}*/}
                  {/*/>*/}
                </Box>
                <Box mb={2}>
                  <Box mb={4}>
                    <Typography variant={'h4'}>Address</Typography>
                  </Box>
                  <InputFormik
                    name={'streetAddress'}
                    label={'Street Address'}
                  />
                  <InputFormik
                    name={'addressLineExtra'}
                    label={'Address line extra'}
                  />
                  <InputFormik name={'city'} label={'City'} />
                  <InputFormik name={'state'} label={'State (US only)'} />
                  <CountrySelect name={'country'} />
                  <InputFormik name={'zip'} label={'Zip'} />
                </Box>
                <Box mb={4}>
                  <Box mb={2}>
                    <Typography variant={'h4'}>Social</Typography>
                  </Box>
                  <InputFormik
                    name={'personalWebsite'}
                    label={'Personal Website'}
                    placeholder={'https://yourownwebsite.com'}
                  />
                  <InputFormik
                    name={'linkedinProfile'}
                    label={'LinkedIn (optional)'}
                    placeholder={'https://linkedin.com/in/username'}
                  />
                  <InputFormik
                    name={'twitterProfile'}
                    label={'Twitter (optional)'}
                    placeholder={'https://www.twitter.com/Username'}
                  />
                  <InputFormik
                    name={'facebookProfile'}
                    label={'Facebook (optional)'}
                    placeholder={'https://www.facebook.com/username'}
                  />
                </Box>

                <Button variant={'contained'} color={'primary'} type={'submit'}>
                  Save Changes
                </Button>
              </Box>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default MyProfileForm;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);
