import React from 'react';
import { ErrorMessage, FormikProps } from 'formik';
import PlainErrorMessage from './plain-error-message';

type Props = {
  formikProps: FormikProps<any>;
  id: string;
  label?: string;
  placeholder?: string;
  icon?: string;
};

const InputWithIconInsideFormik: React.FC<Props> = ({
  formikProps,
  label,
  placeholder,
  icon,
  id,
}) => {
  return (
    <div>
      <section>
        <div className="input-with-icon medium-icons">
          <label htmlFor={id}>{label}</label>
          <input
            type="text"
            id={id}
            placeholder={placeholder}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            value={formikProps.values[`${id}`]}
          />
          <label>
            <i className={icon} />
          </label>
        </div>
        <PlainErrorMessage id={id} />
      </section>
    </div>
  );
};

export default InputWithIconInsideFormik;
