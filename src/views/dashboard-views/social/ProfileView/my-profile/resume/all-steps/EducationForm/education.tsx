import React from 'react';
import { Box, Button, IconButton, Typography } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import { EducationModel } from './schema/education.value';

type Props = {
  setIsEditing: () => void;
  setShowNewQualification: (boolean) => void;
  education: EducationModel;
  showAddQualificationButton: boolean;
  setShowEditingQualification: (string) => void;
};

const Education: React.FC<Props> = ({
  education,
  setIsEditing,
  setShowNewQualification,
  showAddQualificationButton,
  setShowEditingQualification,
}) => {
  return (
    <div>
      <Box mb={4}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box mr={2}>
            <Typography variant={'h4'}>{education?.qualification}</Typography>
          </Box>
          <div>
            <label htmlFor="edit">
              <IconButton
                onClick={() => {
                  setIsEditing();
                  setShowEditingQualification(education.id);
                }}
                color="primary"
                aria-label="edit experience"
                component="span"
              >
                <CreateIcon />
              </IconButton>
            </label>
          </div>
        </Box>
        <Typography variant={'h5'}>{education.institution}</Typography>
        {education.completedDate ? (
          <Typography variant={'h6'}>{`Graduated ${new Date(
            education.completedDate,
          ).getFullYear()}`}</Typography>
        ) : (
          <Typography variant={'h6'}>
            {`Graduating ${new Date(
              education.expectedCompletionDate,
            ).getFullYear()}`}
          </Typography>
        )}
      </Box>
      {showAddQualificationButton && (
        <Button
          onClick={setShowNewQualification}
          variant={'outlined'}
          color={'primary'}
        >
          Add qualification
        </Button>
      )}
    </div>
  );
};

export default Education;
