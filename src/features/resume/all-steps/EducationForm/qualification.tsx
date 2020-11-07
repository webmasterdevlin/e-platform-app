import React from 'react';
import { Box, Button, IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import { QualificationModel } from './schema/qualification.value';

type Props = {
  setIsEditing: () => void;
  setShowNewQualification: (boolean) => void;
  qualification: QualificationModel;
  showAddQualificationButton: boolean;
  setShowEditingQualification: (string) => void;
};

const Qualification: React.FC<Props> = ({
  qualification,
  setIsEditing,
  setShowNewQualification,
  showAddQualificationButton,
  setShowEditingQualification,
}) => {
  return (
    <div className="dashboard-list-box-static">
      <section className={'mb-4'}>
        <div className="d-flex flex-row justify-content-between">
          <Box color={'#222'} fontSize={'1.80rem'} fontWeight={'500'}>
            {qualification?.courseOrQualification}
          </Box>
          <label htmlFor="edit">
            <IconButton
              onClick={() => {
                setIsEditing();
                setShowEditingQualification(qualification.id);
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
        <Box color={'#222'}>{qualification.institution}</Box>
        {qualification.finished ? (
          <Box>{`Graduated ${new Date(
            qualification.finished,
          ).getFullYear()}`}</Box>
        ) : (
          <Box>
            {`Graduating ${new Date(
              qualification.expectedFinish,
            ).getFullYear()}`}
          </Box>
        )}
      </section>
      {showAddQualificationButton && (
        <Button
          onClick={setShowNewQualification}
          variant={'outlined'}
          color={'primary'}
        >
          Add qualification
        </Button>
      )}
    </div>
  );
};

export default Qualification;
