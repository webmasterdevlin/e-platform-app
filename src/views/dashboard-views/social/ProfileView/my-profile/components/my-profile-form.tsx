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

import { Box, Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import { ThumbnailImageContainer } from '../../../../../../components/eplatform/page-components/thumbnail-image-container';
import InputFormik from '../../../../../../components/eplatform/page-components/input-formik';

const MyProfileForm = () => {
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
        <div className="dashboard-list-box margin-top-0">
          <h4 className="gray">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <div>Profile Details</div>
              <div>
                <Button
                  onClick={() => history.push('/user-profile')}
                  variant={'outlined'}
                  color={'primary'}
                >
                  View Public Profile
                </Button>
              </div>
            </Grid>
          </h4>
          <div className="dashboard-list-box-static">
            <Form>
              <section>
                {/* Avatar */}
                <ThumbnailImageContainer formikProps={formikProps} />

                <div className="my-profile">
                  <section className={'pb-5'}>
                    <h3>Basic Info</h3>

                    <InputFormik
                      id={'firstName'}
                      label={'First Name'}
                      formikProps={formikProps}
                      placeholder={'Alex'}
                    />
                    <InputFormik
                      id={'lastName'}
                      label={'Last Name'}
                      formikProps={formikProps}
                      placeholder={'Hansen'}
                    />
                    <InputFormik
                      id={'mobileNumber'}
                      label={'Mobile No.'}
                      formikProps={formikProps}
                      placeholder={'+4790263785'}
                    />
                    <InputFormik
                      id={'yearBorn'}
                      label={'Born'}
                      formikProps={formikProps}
                      placeholder={'1999'}
                    />
                    <label>Personal Summary</label>
                    <textarea
                      name="personalSummary"
                      id="personalSummary"
                      cols={30}
                      rows={10}
                      placeholder={
                        'Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper'
                      }
                      value={formikProps.values.personalSummary}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                    />
                  </section>
                  <section className={'pb-5'}>
                    <h3>Address</h3>
                    <InputFormik
                      id={'address.streetAddress'}
                      label={'Street Address'}
                      formikProps={formikProps}
                    />
                    <InputFormik
                      id={'address.zipCode'}
                      label={'Zip Code'}
                      formikProps={formikProps}
                    />
                    <InputFormik
                      id={'address.province'}
                      label={'Province'}
                      formikProps={formikProps}
                    />
                    <InputFormik
                      id={'address.state'}
                      label={'State (US only)'}
                      formikProps={formikProps}
                    />
                    {formikProps.values.address?.country ? (
                      <InputFormik
                        id={'address.country'}
                        label={'Country'}
                        formikProps={formikProps}
                      />
                    ) : (
                      // TODO: Fix the navigates when backspace is pressed on Firefox
                      <CountryAutosuggest
                        id={'address.country'}
                        label={'Country'}
                        setFieldValue={formikProps.setFieldValue}
                      />
                    )}
                  </section>
                  <section className={'pb-5'}>
                    <h3>Social</h3>
                    <InputFormik
                      id={'socialLinks.personalWebsite'}
                      label={'Personal Website'}
                      icon={'sl sl-icon-link'}
                      placeholder={'https://yourownwebsite.com'}
                      formikProps={formikProps}
                    />
                    <InputFormik
                      id={'socialLinks.linkedIn'}
                      label={'LinkedIn (optional)'}
                      formikProps={formikProps}
                      icon={'fa fa-linkedin-square'}
                      placeholder={'https://linkedin.com/in/username'}
                    />
                    <InputFormik
                      id={'socialLinks.twitter'}
                      label={'Twitter (optional)'}
                      formikProps={formikProps}
                      icon={'fa fa-twitter-square'}
                      placeholder={'https://www.twitter.com/Username'}
                    />
                    <InputFormik
                      id={'socialLinks.facebook'}
                      label={'Facebook (optional)'}
                      formikProps={formikProps}
                      icon={'fa fa-facebook-square'}
                      placeholder={'https://www.facebook.com/username'}
                    />
                  </section>
                </div>
                <button type={'submit'} className="button margin-top-15">
                  Save Changes
                </button>
              </section>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default MyProfileForm;
