import React from 'react';
import { Box } from '@material-ui/core';

const UpdateUiLabel = () => (
  <Box mb={2} display={'flex'} flexDirection={'row-reverse'}>
    <div>local-state updates, non-async actions, async actions</div>
  </Box>
);

export default UpdateUiLabel;
