import React from 'react';

import CheckboxFormik from '../../../../../../../../../components/eplatform/components/checkbox-formik';
import DatePickerFormik from '../../../../../../../../../components/eplatform/components/date-picker-formik';
import InputFormik from '../../../../../../../../../components/eplatform/components/input-formik';

const LicenseCertificationForm: React.FC = () => {
  return (
    <section>
      <InputFormik name={'name'} label={'Name'} />
      <InputFormik name={'issuer'} label={'Issuer'} />
      <CheckboxFormik
        id={'isCertificateNeverExpire'}
        label={'This credential does not expire'}
      />
      <div>
        <DatePickerFormik
          id={'issueDate'}
          label={'Issue Date'}
          disableFuture={true}
        />

        <DatePickerFormik
          id={'expiryDate'}
          label={'Expiration Date'}
          disablePast={true}
        />
      </div>
    </section>
  );
};

export default LicenseCertificationForm;
