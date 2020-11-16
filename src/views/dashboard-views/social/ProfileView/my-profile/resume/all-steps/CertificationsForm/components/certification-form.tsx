import { Box } from '@material-ui/core';
import React from 'react';

import CheckboxFormik from '../../../../../../../../../components/eplatform/components/checkbox-formik';
import DatePickerFormik from '../../../../../../../../../components/eplatform/components/date-picker-formik';
import InputFormik from '../../../../../../../../../components/eplatform/components/input-formik';

const CertificationForm: React.FC = () => {
  return (
    <section>
      <Box mb={4}>
        <InputFormik name={'name'} label={'Name'} />
        <InputFormik name={'issuer'} label={'Issuer'} />
      </Box>
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

export default CertificationForm;
