import React from 'react';
import { Box, Button, IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import { LicenseCertificationModel } from './schema/license-certification.value';
import { monthNameFormDate } from '../../../../utils/date-converter';

type Props = {
  setIsEditing: () => void;
  setShowNewLicenseCertification: (boolean) => void;
  licenseCertification: LicenseCertificationModel;
  showAddLicenseCertificationButton: boolean;
  setShowEditingLicenseCertification: (string) => void;
};

const LicensesAndCertifications: React.FC<Props> = ({
  licenseCertification,
  setIsEditing,
  showAddLicenseCertificationButton,
  setShowEditingLicenseCertification,
  setShowNewLicenseCertification,
}) => {
  return (
    <div className="dashboard-list-box-static">
      <section className={'mb-4'}>
        <div className="d-flex flex-row justify-content-between">
          <Box color={'#222'} fontSize={'1.80rem'} fontWeight={'500'}>
            {licenseCertification.name}
          </Box>
          <label htmlFor="edit">
            <IconButton
              onClick={() => {
                setIsEditing();
                setShowEditingLicenseCertification(licenseCertification.id);
              }}
              className={'p-0'}
              color="primary"
              aria-label="edit experience"
              component="span"
            >
              <CreateIcon />
            </IconButton>
          </label>
        </div>
        <Box mb={1}>
          <Box color={'#222'}>{licenseCertification.issuingOrganization}</Box>
          <Box color={'#222'}>
            {`Issued ${monthNameFormDate(
              new Date(licenseCertification.issueDate),
            )} ${new Date(
              licenseCertification.issueDate,
            ).getFullYear()} . Expires ${monthNameFormDate(
              new Date(licenseCertification.expirationDate),
            )} ${new Date(licenseCertification.expirationDate).getFullYear()}`}
          </Box>
          {licenseCertification.credentialId && (
            <Box>Credential ID {licenseCertification.credentialId}</Box>
          )}
        </Box>
        {licenseCertification.credentialUrl && (
          <Box>
            <a
              href={licenseCertification.credentialUrl}
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              See credential
            </a>
          </Box>
        )}
      </section>
      {showAddLicenseCertificationButton && (
        <Button
          onClick={setShowNewLicenseCertification}
          variant={'outlined'}
          color={'primary'}
        >
          Add License or Certification
        </Button>
      )}
    </div>
  );
};

export default LicensesAndCertifications;
