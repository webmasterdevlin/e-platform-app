import React from 'react';
import { FormikProps } from 'formik';
import ThumbnailImage from './thumbnail-image';
import { Box, Typography } from '@material-ui/core';

type Props = {
  formikProps: FormikProps<any>;
};
export const ThumbnailImageContainer: React.FC<Props> = ({ formikProps }) => (
  <div>
    <ThumbnailImage imageFile={formikProps.values.imageFile} />
    <div>
      <Box mb={2}>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Upload a picture{' '}
        </Typography>

        <input
          id="imageFile"
          name="imageFile"
          type="file"
          accept={'image/*'}
          alt={'image file upload'}
          className="upload"
          onChange={event => {
            formikProps.setFieldValue(
              'imageFile',
              event.currentTarget.files[0],
            );
          }}
        />
      </Box>
    </div>
  </div>
);
