import React, { useState } from 'react';

import { ExperienceModel } from './schema/experience.value';
import EditRole from './edit-role';
import NewExperience from './new-experience';
import Experience from './experience';
import { Typography } from '@material-ui/core';

type Props = {
  experiences: ExperienceModel[];
};

const ExperienceFormsContainer: React.FC<Props> = ({ experiences }) => {
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
        />
      ) : (
        <>
          {showEditingExperience === resetIdTracking && (
            <Typography variant={'h3'}>Career History</Typography>
          )}
          {experiences.map(experience => (
            <div key={experience.id}>
              {experience.id === showEditingExperience && (
                <EditRole
                  experience={experience}
                  setIsEditing={() => setIsEditing(!isEditing)}
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
