import React from 'react';

import MyProfileForm from './components/my-profile-form';

import { Divider } from '@material-ui/core';
import ResumeContent from './resume';

const MyProfileContainer = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <MyProfileForm />
          </div>
          <Divider />
          <div>
            <ResumeContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileContainer;
