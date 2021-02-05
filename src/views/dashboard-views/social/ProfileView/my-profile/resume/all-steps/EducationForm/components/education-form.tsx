import React from 'react';
import { useFormikContext } from 'formik';
import { Box, Typography } from '@material-ui/core';

import { EducationModel } from '../schema/education.value';
import CheckboxFormik from 'components/eplatform/components/checkbox-formik';
import DatePickerFormik from 'components/eplatform/components/date-picker-formik';
import InputFormik from 'components/eplatform/components/input-formik';
import TextAreaFormik from 'components/eplatform/components/text-area-formik';

const EducationForm = () => {
  const { values } = useFormikContext<EducationModel>();

  return (
    <section>
      <InputFormik name={'institution'} label={'Institution'} />
      <InputFormik name={'qualification'} label={'Qualification'} />
      <CheckboxFormik id={'isCourseCompleted'} label={'Course complete'} />
      {values.isCourseCompleted ? (
        <div>
          <span>(Not included in the endpoint)</span>
          <DatePickerFormik
            id={'completedDate'}
            label={'Completed date'}
            disableFuture={true}
          />
        </div>
      ) : (
        <DatePickerFormik
          id={'expectedCompletionDate'}
          label={'Expected date'}
          disablePast={true}
        />
      )}
      <Box mb={1}>
        <Typography>Course highlights (optional)</Typography>
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
};
export default EducationForm;
