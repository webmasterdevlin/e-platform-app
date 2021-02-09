import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { PersonalSummaryModel } from '../schema/personal-summary.value';
import { MyProfileModel } from '../../../../schema/my-profile-empty.value';

type Props = {
  setIsEditing: (boolean) => void;
  myProfile: MyProfileModel;
};
const PersonalSummary = ({ setIsEditing, myProfile }: Props) => {
  return (
    <>
      <Box mb={6}>
        <Typography variant={'h3'}>Personal summary</Typography>
      </Box>
      <div>
        <Box mb={4}>
          <div>
            <Typography>{myProfile?.profileSummary}</Typography>
          </div>
        </Box>
        {myProfile?.profileSummary && (
          <Button onClick={setIsEditing} variant={'outlined'} color={'primary'}>
            Edit summary
          </Button>
        )}
      </div>
    </>
  );
};

export default PersonalSummary;
