import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  LinearProgress,
  Typography,
} from '@material-ui/core';
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

const Certifications = ({
  certification,
  setIsEditing,
  showAddCertificationButton,
  setShowEditingCertification,
  setShowNewCertification,
}: Props) => {
  return (
    <Box mb={4}>
      <Box mb={4}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box mb={2}>
            <Typography variant={'h4'}>{certification.name}</Typography>
          </Box>
          <div>
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
        </Box>
        <Box mb={2}>
          <Box mb={1}>
            <Typography>{certification.issuer}</Typography>
            <Typography>
              {`Issued ${monthNameFormDate(
                new Date(certification.issueDate),
              )} ${new Date(
                certification.issueDate,
              ).getFullYear()} . Expires ${monthNameFormDate(
                new Date(certification.expiryDate),
              )} ${new Date(certification.expiryDate).getFullYear()}`}
            </Typography>
            {certification.certificateId && (
              <Typography>
                Credential ID {certification.certificateId}
              </Typography>
            )}
          </Box>
          {certification.certificateUrl && (
            <Box>
              <Typography>
                <a
                  href={certification.certificateUrl}
                  rel={'noopener noreferrer'}
                  target={'_blank'}
                >
                  See credential
                </a>
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      {showAddCertificationButton && (
        <Button
          onClick={setShowNewCertification}
          variant={'outlined'}
          color={'primary'}
        >
          Add Certification
        </Button>
      )}
    </Box>
  );
};

export default Certifications;
