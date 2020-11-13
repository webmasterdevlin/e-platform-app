import React, { useState } from 'react';
import { CertificationModel } from './schema/certification.value';
import Certifications from './certifications';
import EditCertifications from './edit-certifications';
import NewCertification from './new-certification';
import { Typography } from '@material-ui/core';

type Props = {
  certifications: CertificationModel[];
};

const CertificationFormsContainer: React.FC<Props> = ({ certifications }) => {
  const resetIdTracking = '0';
  const [isEditing, setIsEditing] = useState(false);
  const [showNewCertification, setShowNewCertification] = useState(false);

  const [
    showEditingLicenseCertification,
    setShowEditingLicenseCertification,
  ] = useState(resetIdTracking);

  const { length, [length - 1]: lastCertification } = certifications;

  certifications = null;

  return (
    <>
      {showNewCertification || !certifications ? (
        <NewCertification
          showCancelButton={showNewCertification}
          setShowNewExperience={() => {
            setShowNewCertification(!showNewCertification);
          }}
        />
      ) : (
        <>
          {showEditingLicenseCertification === resetIdTracking && (
            <Typography variant={'h2'}>Certifications</Typography>
          )}
          {certifications.map(lc => (
            <div key={lc.id}>
              {lc.id === showEditingLicenseCertification && (
                <EditCertifications
                  certification={lc}
                  setIsEditing={() => setIsEditing(!isEditing)}
                  setShowEditingCertification={() =>
                    setShowEditingLicenseCertification(resetIdTracking)
                  }
                />
              )}
              {showEditingLicenseCertification === resetIdTracking && (
                <Certifications
                  setIsEditing={() => setIsEditing(!isEditing)}
                  setShowNewCertification={() =>
                    setShowNewCertification(!showNewCertification)
                  }
                  certification={lc}
                  showAddCertificationButton={lastCertification === lc}
                  setShowEditingCertification={() =>
                    setShowEditingLicenseCertification(lc.id)
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

export default CertificationFormsContainer;