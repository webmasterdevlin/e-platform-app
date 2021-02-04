import React from 'react';
import { Box, Button, IconButton, Typography } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import { ExperienceModel } from './schema/experience.value';

type Props = {
  setIsEditing: () => void;
  setShowNewExperience: (boolean) => void;
  experience: ExperienceModel;
  showAddExperienceButton: boolean;
  setShowEditingExperience: (string) => void;
};

const Experience = ({
  setShowEditingExperience,
  setShowNewExperience,
  setIsEditing,
  experience,
  showAddExperienceButton,
}: Props) => {
  return (
    <div>
      <Box mb={4}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <div>
            <Typography variant={'h4'}>{experience?.jobTitle}</Typography>
          </div>
          <div>
            <label htmlFor="edit">
              <IconButton
                onClick={() => {
                  setIsEditing();
                  setShowEditingExperience(experience?.id);
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
        <Typography>{experience?.companyName}</Typography>
        <Typography>{experience?.location}</Typography>
        <Typography>
          {`${new Date(experience?.started).getFullYear()} - ${
            experience?.ended
              ? new Date(experience?.ended).getFullYear()
              : 'Present'
          }`}
        </Typography>
        <Typography>{experience?.description}</Typography>
      </Box>
      {showAddExperienceButton && (
        <Button
          onClick={setShowNewExperience}
          variant={'outlined'}
          color={'primary'}
        >
          Add Experience
        </Button>
      )}
    </div>
  );
};

export default Experience;
