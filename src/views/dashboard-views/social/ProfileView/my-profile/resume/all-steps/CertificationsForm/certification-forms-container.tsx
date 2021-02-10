import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import { CertificationModel } from './schema/certification.value';
import Certifications from './certifications';
import EditCertifications from './edit-certifications';
import NewCertification from './new-certification';

type Props = {
  certifications: CertificationModel[];
  fetchCertifications: () => Promise<void>;
  removeCertificate: (id: string) => void;
  updateCertificate: (certification: CertificationModel) => void;
};

const CertificationFormsContainer = ({
  certifications,
  fetchCertifications,
  removeCertificate,
  updateCertificate,
}: Props) => {
  const resetIdTracking = '0';
  const [isEditing, setIsEditing] = useState(false);
  const [showNewCertification, setShowNewCertification] = useState(false);

  const [
    showEditingLicenseCertification,
    setShowEditingLicenseCertification,
  ] = useState(resetIdTracking);

  const { length, [length - 1]: lastCertification } = certifications;

  // certifications = null;

  return (
    <>
      {showNewCertification || !certifications ? (
        <NewCertification
          showCancelButton={showNewCertification}
          fetchCertifications={fetchCertifications}
          setShowNewCertificate={() => {
            setShowNewCertification(!showNewCertification);
          }}
        />
      ) : (
        <>
          {showEditingLicenseCertification === resetIdTracking && (
            <Box mb={6}>
              <Typography variant={'h3'}>Certifications</Typography>
            </Box>
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
                  removeCertificate={removeCertificate}
                  updateCertificate={updateCertificate}
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
