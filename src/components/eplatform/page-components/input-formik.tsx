import React from 'react';
import { ErrorMessage, Field, FormikProps, useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import PlainErrorMessage from './plain-error-message';
import { Box } from '@material-ui/core';

type Props = {
  name: string;
  label: string;
};

const InputFormik: React.FC<Props> = ({ name, label }) => {
  const {
    touched,
    errors,
    handleBlur,
    handleChange,
    values,
  } = useFormikContext<any>();

  return (
    <Box mb={2}>
      {/*<TextField*/}
      {/*  value={value}*/}
      {/*  id={id}*/}
      {/*  label={label}*/}
      {/*  variant="outlined"*/}
      {/*  style={{ width: '100%', marginBottom: '1rem' }}*/}
      {/*  placeholder={placeholder}*/}
      {/*  onBlur={formikProps.handleBlur}*/}
      {/*  onChange={formikProps.handleChange}*/}
      {/*/>*/}
      {/*<PlainErrorMessage id={id} />*/}
      {/* error={formikProps.touched[`${id}`] && formikProps.errors[`${id}`]}
    helperText={formikProps.touched[`${id}`] && formikProps.errors[`${id}`]}*/}

      <TextField
        label="First Name"
        name="firstName"
        error={Boolean(touched.firstName && errors.firstName)}
        fullWidth
        helperText={touched.firstName && errors.firstName}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        variant="outlined"
      />
    </Box>
  );
};

export default InputFormik;
