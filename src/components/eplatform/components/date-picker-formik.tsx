import React from 'react';

import { DatePicker } from '@material-ui/pickers';
import { FormikProps, useFormikContext } from 'formik';
import PlainErrorMessage from './plain-error-message';

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
        value={values[`${id}`]}
        onBlur={handleBlur}
        onChange={dateProps => {
          setFieldValue(id, dateProps);
        }}
      />
      <PlainErrorMessage id={id} />
    </div>
  );
};

export default DatePickerFormik;
