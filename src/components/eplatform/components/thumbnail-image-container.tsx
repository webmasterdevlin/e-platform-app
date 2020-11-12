import React from 'react';
import { useFormikContext } from 'formik';
import ThumbnailImage from './thumbnail-image';
import { Box, Typography } from '@material-ui/core';
import { MyProfileModel } from '../../../views/dashboard-views/social/ProfileView/my-profile/schema/my-profile-empty.value';

type Props = {
  id: string;
};

export const ThumbnailImageContainer: React.FC<Props> = ({ id }) => {
  const { values, setFieldValue } = useFormikContext<MyProfileModel>();

  return (
    <div>
      <ThumbnailImage imageFile={values.imageUrl} />
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
              setFieldValue(id, event.currentTarget.files[0]);
            }}
          />
        </Box>
      </div>
    </div>
  );
};
