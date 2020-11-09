import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useFormikContext } from 'formik';

import DatePickerFormik from '../../../../../../../../../components/eplatform/components/date-picker-formik';
import CheckboxFormik from '../../../../../../../../../components/eplatform/components/checkbox-formik';
import TextAreaFormik from '../../../../../../../../../components/eplatform/components/text-area-formik';

const RoleForm: React.FC = () => {
  const { handleChange, values } = useFormikContext<any>();

  return (
    <section>
      <div>
        <DatePickerFormik
          id={'started'}
          label={'Started'}
          disableFuture={true}
        />
        {!values.stillInRole && (
          <DatePickerFormik id={'ended'} label={'Ended'} disableFuture={true} />
        )}
      </div>

      <CheckboxFormik id={'stillInRole'} label={'Still In Role'} />
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

export default RoleForm;
