import React, { useState } from 'react';
import { CertificationModel } from './schema/certification.value';
import Certifications from './certifications';
import EditCertifications from './edit-certifications';
import NewCertification from './new-certification';

type Props = {
  licensesCertifications: CertificationModel[];
};

const CertificationFormsContainer: React.FC<Props> = ({
  licensesCertifications,
}) => {
  const resetIdTracking = '0';
  const [isEditing, setIsEditing] = useState(false);
  const [
    showNewLicenseCertification,
    setShowNewLicenseCertification,
  ] = useState(false);

  const [
    showEditingLicenseCertification,
    setShowEditingLicenseCertification,
  ] = useState(resetIdTracking);

  const {
    length,
    [length - 1]: lastLicenseCertification,
  } = licensesCertifications;

  licensesCertifications = null;

  return (
    <>
      {showNewLicenseCertification || !licensesCertifications ? (
        <NewCertification
          showCancelButton={showNewLicenseCertification}
          setShowNewExperience={() => {
            setShowNewLicenseCertification(!showNewLicenseCertification);
          }}
        />
      ) : (
        <>
          {showEditingLicenseCertification === resetIdTracking && (
            <h4 className="gray">Licenses and Certifications</h4>
          )}
          {licensesCertifications.map(lc => (
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
                    setShowNewLicenseCertification(!showNewLicenseCertification)
                  }
                  certification={lc}
                  showAddCertificationButton={lastLicenseCertification === lc}
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
