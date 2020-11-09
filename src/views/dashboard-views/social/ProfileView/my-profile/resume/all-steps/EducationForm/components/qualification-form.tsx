import React from 'react';
import { FormikProps } from 'formik';
import { QualificationModel } from '../schema/qualification.value';
import { Box } from '@material-ui/core';

import CheckboxFormik from '../../../../../../../../../components/eplatform/components/checkbox-formik';
import DatePickerFormik from '../../../../../../../../../components/eplatform/components/date-picker-formik';
import InputFormik from '../../../../../../../../../components/eplatform/components/input-formik';
import TextAreaFormik from '../../../../../../../../../components/eplatform/components/text-area-formik';

type Props = {
  formikProps: FormikProps<QualificationModel>;
};

const QualificationForm: React.FC<Props> = ({ formikProps }) => (
  <section>
    <CheckboxFormik
      id={'qualificationComplete'}
      label={'Qualification complete'}
    />
    {formikProps.values.qualificationComplete ? (
      <DatePickerFormik
        id={'finished'}
        label={'Finished (optional)'}
        disableFuture={true}
      />
    ) : (
      <DatePickerFormik
        id={'expectedFinish'}
        label={'Expected finish (optional)'}
        disablePast={true}
      />
    )}
    <Box mb={1}>
      <Box fontWeight={'700'}>Course highlights (optional)</Box>
    </Box>
    <TextAreaFormik
      name={'courseHighlights'}
      label={
        'Add activities, honours, awards or specialities achieved during your\n' +
        '        study.'
      }
    />
  </section>
);
export default QualificationForm;
