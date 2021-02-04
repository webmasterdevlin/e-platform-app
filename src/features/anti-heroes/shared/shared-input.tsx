import React from 'react';
import { ErrorMessage, Field, FormikProps, useFormikContext } from 'formik';

type Props = {
  id: string;
};

const SharedInput = ({ id }: Props) => {
  const formikProps = useFormikContext();
  return (
    <>
      <Field
        onChange={formikProps.handleChange(id)}
        onBlur={formikProps.handleBlur(id)}
        value={formikProps.values[`${id}`]}
        autoComplete={'off'}
      />
      <ErrorMessage
        name={id}
        component="div"
        className={'mt-2 alert alert-danger'}
      />
    </>
  );
};

export default SharedInput;
