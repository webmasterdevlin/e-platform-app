import React from 'react';
import { DatePicker } from '@material-ui/pickers';
import { FormikProps } from 'formik';
import { LicenseCertificationModel } from '../schema/license-certification.value';
import CheckboxFormik from '../../../../../../../../../components/eplatform/dashboard-components/checkbox-formik';
import DatePickerFormik from '../../../../../../../../../components/eplatform/dashboard-components/date-picker-formik';
import InputFormik from '../../../../../../../../../components/eplatform/page-components/input-formik';

type Props = {
  formikProps: FormikProps<LicenseCertificationModel>;
};

const LicenseCertificationForm: React.FC<Props> = ({ formikProps }) => (
  <section>
    <CheckboxFormik
      formikProps={formikProps}
      id={'doesNotExpire'}
      label={'This credential does not expire'}
    />
    <div className={'d-flex flex-row justify-content-around'}>
      <DatePickerFormik
        id={'issueDate'}
        label={'Issue Date'}
        formikProps={formikProps}
        disableFuture={true}
      />

      <DatePickerFormik
        id={'expirationDate'}
        label={'Expiration Date'}
        formikProps={formikProps}
        disablePast={true}
      />
    </div>
  </section>
);

export default LicenseCertificationForm;
