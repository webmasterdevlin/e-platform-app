import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';

import CountryAutosuggest from '../country-autosuggest';
import {
  MyProfileModel,
  myProfileEmptyValue,
} from '../schema/my-profile-empty.value';
import { myProfileYupObject } from '../schema/my-profile.validation';
import {
  getMyProfileAxios,
  postMyProfileAxios,
  putMyProfileAxios,
} from '../my-profile.service';

import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextareaAutosize,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import { ThumbnailImageContainer } from '../../../../../../components/eplatform/components/thumbnail-image-container';
import InputFormik from '../../../../../../components/eplatform/components/input-formik';
import { Theme } from '../../../../../../themes/dashboard-theme';
import TextAreaFormik from '../../../../../../components/eplatform/components/text-area-formik';
import CountrySelect from '../../../../../../components/eplatform/components/country-select';

const MyProfileForm = () => {
  const classes = useStyles();

  const [myProfile, setMyProfile] = useState<MyProfileModel>(
    myProfileEmptyValue,
  );

  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    fetchMyProfile().then();
  }, []);

  const fetchMyProfile = async (): Promise<void> => {
    try {
      const { data } = await getMyProfileAxios();
      // setMyProfile(data);
      // setIsNew(false);
    } catch (e) {
      alert(`Something happened: ${e.message}`);
    }
  };

  const history = useHistory();

  return (
    <Formik
      enableReinitialize={true}
      initialValues={isNew ? myProfileEmptyValue : myProfile}
      validationSchema={myProfileYupObject}
      onSubmit={async (values, actions) => {
        alert(isNew ? 'New' : 'Editing');
        alert(JSON.stringify(values, null, 2));
        try {
          if (isNew) {
            alert('await postMyProfileAxios(values)');
          } else {
            alert('await putMyProfileAxios(values)');
          }
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
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
                <Typography variant={'h4'}>Profile Details</Typography>
              </Box>
              <div>
                <Button
                  onClick={() => {
                    return;
                    history.push('');
                  }}
                  variant={'outlined'}
                  color={'primary'}
                >
                  View Public Profile
                </Button>
              </div>
            </Box>
          </h4>
          <div>
            <Form>
              <Box mb={4}>
                {/* Avatar */}
                <Box mb={4}>
                  <ThumbnailImageContainer />
                </Box>
                <Box mb={2}>
                  <Box mb={4}>
                    <Typography variant={'h4'}>Basic Info</Typography>
                  </Box>
                  <InputFormik
                    name={'firstName'}
                    label={'First Name'}
                    placeholder={'Alex'}
                  />
                  <InputFormik
                    name={'lastName'}
                    label={'Last Name'}
                    placeholder={'Hansen'}
                  />
                  <InputFormik
                    name={'mobileNumber'}
                    label={'Mobile No.'}
                    placeholder={'+4790263785'}
                  />
                  <InputFormik
                    name={'yearBorn'}
                    label={'Born'}
                    placeholder={'1999'}
                  />
                  <TextAreaFormik
                    name={'personalSummary'}
                    label={'Personal Summary'}
                  />
                </Box>
                <Box mb={2}>
                  <Box mb={4}>
                    <Typography variant={'h4'}>Address</Typography>
                  </Box>
                  <InputFormik
                    name={'address.streetAddress'}
                    label={'Street Address'}
                  />
                  <InputFormik name={'address.province'} label={'Province'} />
                  <InputFormik
                    name={'address.state'}
                    label={'State (US only)'}
                  />

                  <CountrySelect name={'address.country'} />
                </Box>

                <Box mb={4}>
                  <Box mb={2}>
                    <Typography variant={'h4'}>Social</Typography>
                  </Box>
                  <InputFormik
                    name={'socialLinks.personalWebsite'}
                    label={'Personal Website'}
                    placeholder={'https://yourownwebsite.com'}
                  />
                  <InputFormik
                    name={'socialLinks.linkedIn'}
                    label={'LinkedIn (optional)'}
                    placeholder={'https://linkedin.com/in/username'}
                  />
                  <InputFormik
                    name={'socialLinks.twitter'}
                    label={'Twitter (optional)'}
                    placeholder={'https://www.twitter.com/Username'}
                  />
                  <InputFormik
                    name={'socialLinks.facebook'}
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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  textareaContainer: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  textarea: {
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    border: 'none',
    outline: 'none',
    resize: 'none',
    width: '100%',
  },
  action: {
    marginRight: theme.spacing(1),
  },
  fileInput: {
    display: 'none',
  },
}));
