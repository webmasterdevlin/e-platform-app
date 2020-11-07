import React from 'react';
import { FormikProps } from 'formik';
import { QualificationModel } from '../schema/qualification.value';
import { Box } from '@material-ui/core';

import InputWithRightIconFormik from '../../../../../components/eplatform/page-components/input-with-right-icon-formik';
import CheckboxFormik from '../../../../../components/eplatform/dashboard-components/checkbox-formik';
import DatePickerFormik from '../../../../../components/eplatform/dashboard-components/date-picker-formik';

type Props = {
  formikProps: FormikProps<QualificationModel>;
};

const QualificationForm: React.FC<Props> = ({ formikProps }) => (
  <section className={'mb-4'}>
    <InputWithRightIconFormik
      id={'institution'}
      label={'Institution'}
      value={formikProps.values.institution}
      handleOnChange={formikProps.handleChange}
      handleOnBlur={formikProps.handleBlur}
      icon={'fa fa-close'}
      handleOnIconClick={() => formikProps.setFieldValue('institution', '')}
    />
    <InputWithRightIconFormik
      label={'Course or qualification'}
      id={'courseOrQualification'}
      value={formikProps.values.courseOrQualification}
      handleOnChange={formikProps.handleChange}
      handleOnBlur={formikProps.handleBlur}
      icon={'fa fa-close'}
      handleOnIconClick={() => {
        formikProps.setFieldValue('courseOrQualification', '');
      }}
    />

    <CheckboxFormik
      formikProps={formikProps}
      id={'qualificationComplete'}
      label={'Qualification complete'}
    />
    {formikProps.values.qualificationComplete ? (
      <DatePickerFormik
        id={'finished'}
        label={'Finished (optional)'}
        disableFuture={true}
        formikProps={formikProps}
      />
    ) : (
      <>
        <DatePickerFormik
          id={'expectedFinish'}
          label={'Expected finish (optional)'}
          disablePast={true}
          formikProps={formikProps}
        />
      </>
    )}
    <>
      <label>
        <Box fontWeight={'700'}>Course highlights (optional)</Box>
      </label>
      <label>
        Add activities, honours, awards or specialities achieved during your
        study.
      </label>
      <textarea
        id={'courseHighlights'}
        value={formikProps.values.courseHighlights}
        onChange={formikProps.handleChange}
        onBlur={formikProps.handleBlur}
        cols={15}
        rows={5}
      />
    </>
  </section>
);
export default QualificationForm;
