import React from 'react';
import { InputProps } from 'react-autosuggest';
import { FormikProps } from 'formik';

type Props = {
  inputProps: InputProps<FormikProps<any>>;
};
/*
 * This is better https://material-ui.com/components/autocomplete/
 * */
const InputWithSearchIconFormik = ({ inputProps }: Props) => (
  <section>
    <div>
      <input {...(inputProps as any)} />
    </div>
  </section>
);

export default InputWithSearchIconFormik;
