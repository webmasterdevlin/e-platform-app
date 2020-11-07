import React from 'react';
import { Field } from 'formik';
import PlainErrorMessage from '../page-components/plain-error-message';

type Props = {
  options: Array<any>;
  id: string;
};

const CheckboxesVerticalFormik: React.FC<Props> = ({ options, id }) => {
  return (
    <section>
      <Field name={id}>
        {({ field }) => {
          return options.map(option => {
            return (
              <div key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <PlainErrorMessage id={id} />
    </section>
  );
};

export default CheckboxesVerticalFormik;
