import React from 'react';

import MyProfileForm from './components/my-profile-form';

import { Divider } from '@material-ui/core';
import ResumeContent from '../../../../../features/resume';

const MyProfileContainer = () => {
  return (
    <div className="dashboard-content">
      <div className="row d-flex justify-content-center">
        <div>
          <div className="col-lg-9 mb-5">
            <MyProfileForm />
          </div>
          <Divider />
          <div className="col-lg-9 mt-5 d-flex row justify-content-center">
            <ResumeContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileContainer;
