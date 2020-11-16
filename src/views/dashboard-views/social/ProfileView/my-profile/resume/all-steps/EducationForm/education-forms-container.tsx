import React, { useState } from 'react';

import { EducationModel } from './schema/education.value';
import Education from './education';
import NewEducation from './new-education';
import EditEducation from './edit-education';
import { Box, Typography } from '@material-ui/core';

type Props = {
  educations: EducationModel[];
};

const EducationFormsContainer: React.FC<Props> = ({ educations }) => {
  const resetIdTracking = '0';
  const [isEditing, setIsEditing] = useState(false);
  const [showNewEducation, setShowNewEducation] = useState(false);
  const [showEditingEducation, setShowEditingEducation] = useState(
    resetIdTracking,
  );

  const { length, [length - 1]: lastEducation } = educations;

  // educations = null;

  return (
    <>
      {showNewEducation || !educations ? (
        <NewEducation
          showCancelButton={showNewEducation}
          setShowNewEducation={() => setShowNewEducation(!showNewEducation)}
        />
      ) : (
        <>
          {showEditingEducation === resetIdTracking && (
            <Box mb={6}>
              <Typography variant={'h3'}>Education</Typography>
            </Box>
          )}
          {educations.map(education => (
            <div key={education.id}>
              {education.id === showEditingEducation && (
                <EditEducation
                  education={education}
                  setIsEditing={() => setIsEditing(!isEditing)}
                  setShowEditingEducation={() =>
                    setShowEditingEducation(resetIdTracking)
                  }
                />
              )}
              {showEditingEducation === resetIdTracking && (
                <Education
                  education={education}
                  setShowNewQualification={() =>
                    setShowNewEducation(!showNewEducation)
                  }
                  setIsEditing={() => setIsEditing(!isEditing)}
                  setShowEditingQualification={() =>
                    setShowEditingEducation(education.id)
                  }
                  showAddQualificationButton={lastEducation === education}
                />
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default EducationFormsContainer;
