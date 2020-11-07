import React from 'react';
import { FormikProps } from 'formik';
import PlainErrorMessage from '../page-components/plain-error-message';

type Props = {
  formikProps: FormikProps<any>;
  id: string;
  label: string;
  placeholder?: string;
};

const TextareaFormik: React.FC<Props> = ({
  formikProps,
  id,
  label,
  placeholder,
}) => {
  return (
    <section className={'mb-5'}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={formikProps.values[`${id}`]}
        onChange={formikProps.handleChange}
        onBlur={formikProps.handleBlur}
        cols={15}
        rows={5}
      />
      <PlainErrorMessage id={id} />
    </section>
  );
};

export default TextareaFormik;
