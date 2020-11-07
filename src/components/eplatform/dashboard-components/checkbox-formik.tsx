import React from 'react';
import { FormikProps } from 'formik';

type Props = {
  formikProps: FormikProps<any>;
  id: string;
  label: string;
};

const CheckboxFormik: React.FC<Props> = ({ formikProps, id, label }) => {
  return (
    <div>
      <input
        checked={formikProps.values[`${id}`]}
        onChange={() => {
          formikProps.setFieldValue(id, !formikProps.values[`${id}`]);
        }}
        id={id}
        type="checkbox"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxFormik;
