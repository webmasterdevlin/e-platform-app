import React from 'react';
import { useFormikContext } from 'formik';

const YupFormikValidationViewer: React.FC = () => {
  const { errors, values, isValid } = useFormikContext<any>();

  return (
    <>
      <p>FIELDS : {JSON.stringify(values, null, 2)}</p>
      <p>IS_VALID : {isValid.toString()}</p>
      <p>ERRORS : {JSON.stringify(errors, null, 2)}</p>
    </>
  );
};

export default YupFormikValidationViewer;
