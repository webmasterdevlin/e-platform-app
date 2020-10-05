import React from 'react';

import { DatePicker } from '@material-ui/pickers';
import { FormikProps } from 'formik';
import PlainErrorMessage from '../frontpage-components/plain-error-message';

type Props = {
  id: string;
  label: string;
  formikProps: FormikProps<any>;
  disablePast?: boolean;
  disableFuture?: boolean;
};

const DatePickerFormik: React.FC<Props> = ({
  formikProps,
  label,
  id,
  disableFuture,
  disablePast,
}) => (
  <div className={'mb-2'}>
    <label>{label}</label>
    <DatePicker
      id={id}
      variant="inline"
      openTo="year"
      views={['year', 'month']}
      helperText="Start from year selection"
      disablePast={disablePast}
      disableFuture={disableFuture}
      value={formikProps.values[`${id}`]}
      onBlur={formikProps.handleBlur}
      onChange={dateProps => {
        formikProps.setFieldValue(id, dateProps);
      }}
    />
    <PlainErrorMessage id={id} />
  </div>
);

export default DatePickerFormik;
