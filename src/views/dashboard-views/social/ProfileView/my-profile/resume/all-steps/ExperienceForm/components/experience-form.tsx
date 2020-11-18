import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useFormikContext } from 'formik';

import DatePickerFormik from '../../../../../../../../../components/eplatform/components/date-picker-formik';
import CheckboxFormik from '../../../../../../../../../components/eplatform/components/checkbox-formik';
import TextAreaFormik from '../../../../../../../../../components/eplatform/components/text-area-formik';
import InputFormik from '../../../../../../../../../components/eplatform/components/input-formik';

const ExperienceForm: React.FC = () => {
  const { values } = useFormikContext<any>();

  return (
    <section>
      <InputFormik name={'jobTitle'} label={'Job Title'} />
      <InputFormik name={'companyName'} label={'Company Name'} />
      <InputFormik name={'location'} label={'Location'} />

      <div>
        <DatePickerFormik
          id={'started'}
          label={'Started'}
          disableFuture={true}
        />
        {!values.isCurrentRole && (
          <DatePickerFormik id={'ended'} label={'Ended'} disableFuture={true} />
        )}
      </div>

      <CheckboxFormik id={'isCurrentRole'} label={'Still In Role'} />
      <div>
        <Typography variant={'subtitle1'}>Description (recommended)</Typography>
        <TextAreaFormik
          name={'description'}
          label={
            'Summarise your responsibilities, skills and achievements. Summarize\n' +
            '          your responsibilities'
          }
        />
      </div>
    </section>
  );
};

export default ExperienceForm;
