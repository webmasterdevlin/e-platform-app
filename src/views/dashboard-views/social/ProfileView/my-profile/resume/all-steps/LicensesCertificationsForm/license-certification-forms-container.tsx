import React, { useState } from 'react';
import { LicenseCertificationModel } from './schema/license-certification.value';
import LicensesAndCertifications from './licensesAndCertifications';
import EditLicensesCertifications from './edit-licenses-certifications';
import NewLicenseCertification from './new-license-certification';

type Props = {
  licensesCertifications: LicenseCertificationModel[];
};

const LicenseCertificationFormsContainer: React.FC<Props> = ({
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
        <NewLicenseCertification
          showCancelButton={showNewLicenseCertification}
          setShowNewLicenseExperience={() => {
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
                <EditLicensesCertifications
                  licenseCertification={lc}
                  setIsEditing={() => setIsEditing(!isEditing)}
                  setShowEditingLicenseCertification={() =>
                    setShowEditingLicenseCertification(resetIdTracking)
                  }
                />
              )}
              {showEditingLicenseCertification === resetIdTracking && (
                <LicensesAndCertifications
                  setIsEditing={() => setIsEditing(!isEditing)}
                  setShowNewLicenseCertification={() =>
                    setShowNewLicenseCertification(!showNewLicenseCertification)
                  }
                  licenseCertification={lc}
                  showAddLicenseCertificationButton={
                    lastLicenseCertification === lc
                  }
                  setShowEditingLicenseCertification={() =>
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

export default LicenseCertificationFormsContainer;
