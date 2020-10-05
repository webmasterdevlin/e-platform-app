import React from 'react';
import Box from '@material-ui/core/Box';
import { ErrorMessage } from 'formik';

type Props = {
  id: string;
};
const PlainErrorMessage: React.FC<Props> = ({ id }) => (
  <Box color={'#f91942'}>
    <ErrorMessage name={id} component="div" />
  </Box>
);

export default PlainErrorMessage;
