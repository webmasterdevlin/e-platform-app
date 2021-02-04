import React from 'react';
import { useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';

type Props = {
  name: string;
  label: string;
  placeholder?: string;
};

const InputFormik = ({ name, label, placeholder }: Props) => {
  const {
    touched,
    errors,
    handleBlur,
    handleChange,
    values,
  } = useFormikContext<any>();

  return (
    <Box mb={2}>
      <TextField
        name={name}
        label={label}
        placeholder={placeholder}
        helperText={touched[name] && errors[name]}
        error={Boolean(touched[name] && errors[name])}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values[name]}
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default InputFormik;
