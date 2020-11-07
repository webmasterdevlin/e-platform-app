import React from 'react';
import { DatePicker } from '@material-ui/pickers';
import { FormikProps } from 'formik';
import { LicenseCertificationModel } from '../schema/license-certification.value';
import InputWithRightIconFormik from '../../../../../components/eplatform/page-components/input-with-right-icon-formik';
import CheckboxFormik from '../../../../../components/eplatform/dashboard-components/checkbox-formik';
import DatePickerFormik from '../../../../../components/eplatform/dashboard-components/date-picker-formik';

type Props = {
  formikProps: FormikProps<LicenseCertificationModel>;
};

const LicenseCertificationForm: React.FC<Props> = ({ formikProps }) => (
  <section className={'mb-4'}>
    <InputWithRightIconFormik
      id={'name'}
      value={formikProps.values.name}
      label={'Name'}
      handleOnChange={formikProps.handleChange}
      handleOnBlur={formikProps.handleBlur}
      icon={'fa fa-close'}
      handleOnIconClick={() => formikProps.setFieldValue('name', '')}
    />
    <InputWithRightIconFormik
      id={'issuingOrganization'}
      value={formikProps.values.issuingOrganization}
      label={'Issuing Organization'}
      handleOnChange={formikProps.handleChange}
      handleOnBlur={formikProps.handleBlur}
      icon={'fa fa-close'}
      handleOnIconClick={() =>
        formikProps.setFieldValue('issuingOrganization', '')
      }
    />
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
    <InputWithRightIconFormik
      id={'credentialId'}
      value={formikProps.values.credentialId}
      label={'Credential ID'}
      handleOnChange={formikProps.handleChange}
      handleOnBlur={formikProps.handleBlur}
      icon={'fa fa-close'}
      handleOnIconClick={() => formikProps.setFieldValue('credentialId', '')}
    />
    <InputWithRightIconFormik
      id={'credentialUrl'}
      value={formikProps.values.credentialUrl}
      label={'Credential URL'}
      handleOnChange={formikProps.handleChange}
      handleOnBlur={formikProps.handleBlur}
      icon={'fa fa-close'}
      handleOnIconClick={() => formikProps.setFieldValue('credentialUrl', '')}
    />
  </section>
);

export default LicenseCertificationForm;
