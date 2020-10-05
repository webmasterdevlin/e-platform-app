import React from 'react';
import { FormikProps } from 'formik';
import { DatePicker, DateTimePicker } from '@material-ui/pickers';
import Box from '@material-ui/core/Box';

type Props = {
  id: string;
  label: string;
  formikProps: FormikProps<any>;
  disablePast?: boolean;
  disableFuture?: boolean;
};

const DateTimePickerFormik: React.FC<Props> = ({
  id,
  label,
  formikProps,
  disablePast,
  disableFuture,
}) => {
  return (
    <div className={'mb-2'}>
      <label>{label}</label>
      <DateTimePicker
        autoOk
        ampm={false}
        disablePast={disablePast}
        disableFuture={disableFuture}
        value={formikProps.values[`${id}`]}
        onBlur={dateProps => {
          console.log('PROPS', dateProps);
        }}
        onChange={dateProps => {
          formikProps.setFieldValue(id, dateProps);
          console.log('FIRST::', dateProps);
        }}
      />
      <Box color={'#f91942'}>
        <pre>{formikProps?.errors ? formikProps.errors[`${id}`] : null}</pre>
      </Box>
    </div>
  );
};

export default DateTimePickerFormik;
