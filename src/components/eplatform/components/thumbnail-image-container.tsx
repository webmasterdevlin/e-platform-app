import React from 'react';
import { useFormikContext } from 'formik';
import ThumbnailImage from './thumbnail-image';
import { Box, Typography } from '@material-ui/core';

export const ThumbnailImageContainer: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<any>();

  return (
    <div>
      <ThumbnailImage imageFile={values.imageFile} />
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
              setFieldValue('imageFile', event.currentTarget.files[0]);
            }}
          />
        </Box>
      </div>
    </div>
  );
};
