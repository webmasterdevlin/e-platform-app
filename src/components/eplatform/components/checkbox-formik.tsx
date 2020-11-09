import React from 'react';
import { FormikProps, useFormikContext } from 'formik';
import { Box, Typography } from '@material-ui/core';

type Props = {
  id: string;
  label: string;
};

const CheckboxFormik: React.FC<Props> = ({ id, label }) => {
  const { values, setFieldValue } = useFormikContext<any>();

  return (
    <Box mb={2} display={'flex'} flexDirection={'row'}>
      <div>
        <input
          checked={values[`${id}`]}
          onChange={() => {
            setFieldValue(id, !values[`${id}`]);
          }}
          id={id}
          type="checkbox"
          style={{ marginRight: '1rem' }}
        />
      </div>
      <label htmlFor={id}>
        <Typography>{label}</Typography>
      </label>
    </Box>
  );
};

export default CheckboxFormik;
