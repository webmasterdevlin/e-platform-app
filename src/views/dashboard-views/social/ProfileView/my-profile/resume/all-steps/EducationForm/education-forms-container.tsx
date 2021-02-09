import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import { EducationModel } from './schema/education.value';
import Education from './education';
import NewEducation from './new-education';
import EditEducation from './edit-education';

type Props = {
  educations: EducationModel[];
  fetchEducation: () => Promise<void>;
  removeQualification: (id: string) => void;
  updateQualification: (education: EducationModel) => void;
};

const EducationFormsContainer = ({
  educations,
  fetchEducation,
  removeQualification,
  updateQualification,
}: Props) => {
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
          fetchEducation={fetchEducation}
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
                  removeQualification={removeQualification}
                  updateQualification={updateQualification}
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
