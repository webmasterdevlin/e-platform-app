import React, { useState } from 'react';

import { QualificationModel } from './schema/qualification.value';
import Qualification from './qualification';
import NewQualification from './new-qualification';
import EditQualification from './edit-qualification';

type Props = {
  qualifications: QualificationModel[];
};

const EducationFormsContainer: React.FC<Props> = ({ qualifications }) => {
  const resetIdTracking = '0';
  const [isEditing, setIsEditing] = useState(false);
  const [showNewQualification, setShowNewQualification] = useState(false);
  const [showEditingQualification, setShowEditingQualification] = useState(
    resetIdTracking,
  );

  const { length, [length - 1]: lastQualification } = qualifications;

  qualifications = null;

  return (
    <>
      {showNewQualification || !qualifications ? (
        <NewQualification
          showCancelButton={showNewQualification}
          setShowNewQualification={() =>
            setShowNewQualification(!showNewQualification)
          }
        />
      ) : (
        <>
          {showEditingQualification === resetIdTracking && (
            <h4 className="gray">Education</h4>
          )}
          {qualifications.map(qualification => (
            <div key={qualification.id}>
              {qualification.id === showEditingQualification && (
                <EditQualification
                  qualification={qualification}
                  setIsEditing={() => setIsEditing(!isEditing)}
                  setShowEditingQualification={() =>
                    setShowEditingQualification(resetIdTracking)
                  }
                />
              )}
              {showEditingQualification === resetIdTracking && (
                <Qualification
                  qualification={qualification}
                  setShowNewQualification={() =>
                    setShowNewQualification(!showNewQualification)
                  }
                  setIsEditing={() => setIsEditing(!isEditing)}
                  setShowEditingQualification={() =>
                    setShowEditingQualification(qualification.id)
                  }
                  showAddQualificationButton={
                    lastQualification === qualification
                  }
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
