import React from 'react';
import { Box, Button } from '@material-ui/core';
import { PersonalSummaryModel } from '../schema/personal-summary.value';

type Props = {
  setIsEditing: (boolean) => void;
  personalSummary: PersonalSummaryModel;
};
const PersonalSummary: React.FC<Props> = ({
  setIsEditing,
  personalSummary,
}) => {
  return (
    <>
      <h4>Personal summary</h4>
      <div>
        <section>
          <Box fontSize={18} fontWeight={'500'}>
            {personalSummary?.summary}
          </Box>
        </section>
        {personalSummary?.summary && (
          <Button onClick={setIsEditing} variant={'outlined'} color={'primary'}>
            Edit summary
          </Button>
        )}
      </div>
    </>
  );
};

export default PersonalSummary;
