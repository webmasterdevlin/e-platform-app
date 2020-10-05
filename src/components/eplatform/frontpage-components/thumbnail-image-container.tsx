import React from 'react';
import { FormikProps } from 'formik';
import ThumbnailImage from './thumbnail-image';

type Props = {
  formikProps: FormikProps<any>;
};
export const ThumbnailImageContainer: React.FC<Props> = ({ formikProps }) => (
  <div className="edit-profile-photo">
    <ThumbnailImage imageFile={formikProps.values.imageFile} />
    <div className="change-photo-btn">
      <div className="photoUpload">
        <span>
          <i className="fa fa-upload" /> Upload a picture
        </span>
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
      </div>
    </div>
  </div>
);
