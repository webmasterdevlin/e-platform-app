import React from 'react';

import CheckboxFormik from '../../../../../../../../../components/eplatform/components/checkbox-formik';
import DatePickerFormik from '../../../../../../../../../components/eplatform/components/date-picker-formik';

const LicenseCertificationForm: React.FC = () => {
  return (
    <section>
      <CheckboxFormik
        id={'doesNotExpire'}
        label={'This credential does not expire'}
      />
      <div className={'d-flex flex-row justify-content-around'}>
        <DatePickerFormik
          id={'issueDate'}
          label={'Issue Date'}
          disableFuture={true}
        />

        <DatePickerFormik
          id={'expirationDate'}
          label={'Expiration Date'}
          disablePast={true}
        />
      </div>
    </section>
  );
};

export default LicenseCertificationForm;
