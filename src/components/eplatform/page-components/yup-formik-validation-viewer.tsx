import React from 'react';
import { FormikProps } from 'formik';
import { Box } from '@material-ui/core';
type Props = {
  formikProps: FormikProps<any>;
};
const YupFormikValidationViewer: React.FC<Props> = ({ formikProps }) => (
  <Box color={'purple'}>
    <pre>FIELDS : {JSON.stringify(formikProps.values, null, 2)}</pre>
    <pre>IS_VALID : {formikProps.isValid.toString()}</pre>
    <pre>ERRORS : {JSON.stringify(formikProps.errors, null, 2)}</pre>
  </Box>
);

export default YupFormikValidationViewer;
