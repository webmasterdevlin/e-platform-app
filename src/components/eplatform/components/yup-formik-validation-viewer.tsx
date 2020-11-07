import React from 'react';
import { useFormikContext } from 'formik';
import { Box } from '@material-ui/core';

const YupFormikValidationViewer: React.FC = () => {
  const { errors, values, isValid } = useFormikContext<any>();

  return (
    <Box>
      <pre>FIELDS : {JSON.stringify(values, null, 2)}</pre>
      <pre>IS_VALID : {isValid.toString()}</pre>
      <pre>ERRORS : {JSON.stringify(errors, null, 2)}</pre>
    </Box>
  );
};

export default YupFormikValidationViewer;
