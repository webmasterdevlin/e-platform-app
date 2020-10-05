import React from 'react';
import { Field, FormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';

type Props = {
  id: string;
  label: string;
  formikProps: FormikProps<any>;
  icon?: string;
  placeholder?: string;
  as?: any;
  regular?: boolean;
};

const InputFormik: React.FC<Props> = ({
  id,
  label,
  formikProps,
  icon,
  placeholder,
  as,
  regular,
}) => (
  <div className={'mb-5'}>
    <label className={'font-weight-bold'} htmlFor={id}>
      <i className={`${icon} ${icon && 'pr-2'}`} />
      {label}
    </label>
    <Field
      validate={null}
      placeholder={placeholder}
      name={id}
      error={formikProps.touched[`${id}`] && formikProps.errors[`${id}`]}
      helperText={formikProps.touched[`${id}`] && formikProps.errors[`${id}`]}
      as={as ? as : TextField}
      style={{ width: '100%' }}
    />
  </div>
);

export default InputFormik;
