import React from 'react';
import { InputProps } from 'react-autosuggest';
import { FormikProps } from 'formik';

type Props = {
  inputProps: InputProps<FormikProps<any>>;
};
/*
 * This is better https://material-ui.com/components/autocomplete/
 * */
const InputWithSearchIconFormik: React.FC<Props> = ({ inputProps }) => (
  <section>
    <div className={'widget'}>
      <div className="search-blog-input">
        <div className="input">
          <input {...(inputProps as any)} className="search-field" />
        </div>
      </div>
    </div>
  </section>
);

export default InputWithSearchIconFormik;
