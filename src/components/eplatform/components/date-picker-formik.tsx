import React from 'react';

import { DatePicker } from '@material-ui/pickers';
import { useFormikContext } from 'formik';
import PlainErrorMessage from './plain-error-message';
import { Box } from '@material-ui/core';

type Props = {
  id: string;
  label: string;
  disablePast?: boolean;
  disableFuture?: boolean;
};

const DatePickerFormik: React.FC<Props> = ({
  label,
  id,
  disableFuture,
  disablePast,
}) => {
  const { handleBlur, values, setFieldValue } = useFormikContext<any>();

  return (
    <Box mb={2}>
      <DatePicker
        id={id}
        label={label}
        variant={'inline'}
        openTo="year"
        views={['year', 'month']}
        helperText="Start from year selection"
        disablePast={disablePast}
        disableFuture={disableFuture}
        value={values[id]}
        onBlur={handleBlur}
        onChange={dateProps => {
          setFieldValue(id, dateProps);
        }}
      />
      <PlainErrorMessage id={id} />
    </Box>
  );
};

export default DatePickerFormik;
