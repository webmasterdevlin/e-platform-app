import React, { FormEvent } from 'react';
import PlainErrorMessage from './plain-error-message';
import { FormikProps } from 'formik';

type Props = {
  formikProps: FormikProps<any>;
  id: string;
  label: string;
  placeholder?: string;
  icon?: string;
};

const InputWithIconAboveFormik: React.FC<Props> = ({
  id,
  label,
  placeholder,
  icon,
  formikProps,
}) => (
  <>
    <label htmlFor={id}>
      <i className={`${icon} ${icon && 'pr-2'}`} />
      {label}
    </label>
    <input
      required={false}
      id={id}
      placeholder={placeholder}
      value={formikProps.values[`${id}`]}
      onChange={formikProps.handleChange}
      onBlur={formikProps.handleBlur}
    />
    <PlainErrorMessage id={id} />
  </>
);

export default InputWithIconAboveFormik;
