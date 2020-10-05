import React from 'react';
import { Field } from 'formik';
import PlainErrorMessage from '../frontpage-components/plain-error-message';

type Props = {
  options: Array<any>;
  id: string;
};

const CheckboxesHorizontalFormik: React.FC<Props> = ({ options, id }) => {
  return (
    <section className={'d-flex flex-row justify-content-start'}>
      <Field name={id}>
        {({ field }) => {
          return options.map(option => {
            return (
              <div
                className="checkboxes in-row margin-bottom-20"
                key={option.key}
              >
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

export default CheckboxesHorizontalFormik;
