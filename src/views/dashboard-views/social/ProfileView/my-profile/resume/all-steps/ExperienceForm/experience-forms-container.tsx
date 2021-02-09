import React, { useState } from 'react';

import { ExperienceModel } from './schema/experience.value';
import EditExperience from './edit-experience';
import NewExperience from './new-experience';
import Experience from './experience';
import { Box, Typography } from '@material-ui/core';

type Props = {
  experiences: ExperienceModel[];
  fetchExperience: () => Promise<void>;
  removeExperience: (id: string) => void;
  updateExperience: (experience: ExperienceModel) => void;
};

const ExperienceFormsContainer = ({
  experiences,
  fetchExperience,
  removeExperience,
  updateExperience,
}: Props) => {
  const resetIdTracking = '0';
  const [isEditing, setIsEditing] = useState(false);
  const [showNewExperience, setShowNewExperience] = useState(false);
  const [showEditingExperience, setShowEditingExperience] = useState(
    resetIdTracking,
  );

  const { length, [length - 1]: lastExperience } = experiences;

  // experiences = null;

  return (
    <>
      {showNewExperience || !experiences ? (
        <NewExperience
          showCancelButton={showNewExperience}
          setShowNewExperience={() => {
            setShowNewExperience(!showNewExperience);
          }}
          fetchExperience={fetchExperience}
        />
      ) : (
        <>
          {showEditingExperience === resetIdTracking && (
            <Box mb={6}>
              <Typography variant={'h3'}>Career History</Typography>
            </Box>
          )}
          {experiences.map(experience => (
            <div key={experience.id}>
              {experience.id === showEditingExperience && (
                <EditExperience
                  experience={experience}
                  setIsEditing={() => setIsEditing(!isEditing)}
                  removeExperience={removeExperience}
                  updateExperience={updateExperience}
                  setShowEditingExperience={() =>
                    setShowEditingExperience(resetIdTracking)
                  }
                />
              )}
              {showEditingExperience === resetIdTracking && (
                <Experience
                  experience={experience}
                  setShowNewExperience={() =>
                    setShowNewExperience(!showNewExperience)
                  }
                  setIsEditing={() => setIsEditing(!isEditing)}
                  setShowEditingExperience={() =>
                    setShowEditingExperience(experience.id)
                  }
                  showAddExperienceButton={lastExperience === experience}
                />
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ExperienceFormsContainer;
