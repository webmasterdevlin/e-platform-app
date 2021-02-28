import React from 'react';
import { useFormikContext } from 'formik';
import Typography from '@material-ui/core/Typography';

const YupFormikValidationViewer: React.FC = () => {
  const { errors, values, isValid } = useFormikContext<any>();

  return (
    <>
      <Typography variant={'body1'}>
        FIELDS : {JSON.stringify(values, null, 2)}
      </Typography>
      <Typography variant={'body1'}>IS_VALID : {isValid.toString()}</Typography>
      <Typography variant={'body1'}>
        ERRORS : {JSON.stringify(errors, null, 2)}
      </Typography>
    </>
  );
};

export default YupFormikValidationViewer;
