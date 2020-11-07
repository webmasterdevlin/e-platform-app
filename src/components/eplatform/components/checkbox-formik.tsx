import React from 'react';
import { FormikProps, useFormikContext } from 'formik';

type Props = {
  id: string;
  label: string;
};

const CheckboxFormik: React.FC<Props> = ({ id, label }) => {
  const { values, setFieldValue } = useFormikContext<any>();

  return (
    <div>
      <input
        checked={values[`${id}`]}
        onChange={() => {
          setFieldValue(id, !values[`${id}`]);
        }}
        id={id}
        type="checkbox"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxFormik;
