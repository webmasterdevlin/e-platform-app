import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { PersonalDetailsModel } from '../schema/personal-details.value';

type Props = {
  setIsEditing: (boolean) => void;
  personalDetails: PersonalDetailsModel;
};

const PersonalDetails: React.FC<Props> = ({
  setIsEditing,
  personalDetails,
}) => (
  <>
    <h4>Personal Details</h4>
    <div>
      <Grid container wrap="nowrap" spacing={3}>
        <Grid item xs={4}>
          <Typography noWrap>Name</Typography>
          <Typography noWrap>Phone number</Typography>
          <Typography noWrap>Country</Typography>
          <Typography noWrap>Email</Typography>
        </Grid>
        <Grid item xs={4} zeroMinWidth>
          <Typography noWrap>
            {`${personalDetails?.firstName} ${personalDetails?.lastName}`}
          </Typography>
          <Typography noWrap>{personalDetails?.mobile}</Typography>
          <Typography noWrap>{personalDetails?.country}</Typography>
          <Typography noWrap>{personalDetails?.email}</Typography>
        </Grid>
      </Grid>
      {personalDetails?.firstName && (
        <Button variant={'outlined'} color={'primary'} onClick={setIsEditing}>
          Edit personal details Edit personal details
        </Button>
      )}
    </div>
  </>
);

export default PersonalDetails;
