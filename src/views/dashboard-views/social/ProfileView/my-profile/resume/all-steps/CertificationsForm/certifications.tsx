import React from 'react';
import { Box, Button, IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import { CertificationModel } from './schema/certification.value';
import { monthNameFormDate } from '../../../../../../../../utils/date-converter';

type Props = {
  setIsEditing: () => void;
  setShowNewCertification: (boolean) => void;
  certification: CertificationModel;
  showAddCertificationButton: boolean;
  setShowEditingCertification: (string) => void;
};

const Certifications: React.FC<Props> = ({
  certification,
  setIsEditing,
  showAddCertificationButton,
  setShowEditingCertification,
  setShowNewCertification,
}) => {
  return (
    <div>
      <section>
        <div>
          <Box color={'#222'} fontSize={'1.80rem'} fontWeight={'500'}>
            {certification.name}
          </Box>
          <label htmlFor="edit">
            <IconButton
              onClick={() => {
                setIsEditing();
                setShowEditingCertification(certification.id);
              }}
              color="primary"
              aria-label="edit experience"
              component="span"
            >
              <CreateIcon />
            </IconButton>
          </label>
        </div>
        <Box mb={1}>
          <Box color={'#222'}>{certification.issuer}</Box>
          <Box color={'#222'}>
            {`Issued ${monthNameFormDate(
              new Date(certification.issueDate),
            )} ${new Date(
              certification.issueDate,
            ).getFullYear()} . Expires ${monthNameFormDate(
              new Date(certification.expiryDate),
            )} ${new Date(certification.expiryDate).getFullYear()}`}
          </Box>
          {certification.certificateId && (
            <Box>Credential ID {certification.certificateId}</Box>
          )}
        </Box>
        {certification.certificateUrl && (
          <Box>
            <a
              href={certification.certificateUrl}
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              See credential
            </a>
          </Box>
        )}
      </section>
      {showAddCertificationButton && (
        <Button
          onClick={setShowNewCertification}
          variant={'outlined'}
          color={'primary'}
        >
          Add Certification
        </Button>
      )}
    </div>
  );
};

export default Certifications;
