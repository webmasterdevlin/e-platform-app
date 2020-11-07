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
import { ThumbnailImageContainer } from '../../../../../../components/eplatform/page-components/thumbnail-image-container';
import InputFormik from '../../../../../../components/eplatform/page-components/input-formik';
import { Theme } from '../../../../../../themes/dashboard-theme';

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
          <h4 className="gray">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography variant={'h4'}>Profile Details</Typography>

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
            </Grid>
          </h4>
          <div>
            <Form>
              <section>
                {/* Avatar */}
                <ThumbnailImageContainer formikProps={formikProps} />

                <Button
                  variant={'contained'}
                  color={'primary'}
                  onClick={() => formikProps.handleSubmit()}
                >
                  Save Changes
                </Button>
              </section>
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
