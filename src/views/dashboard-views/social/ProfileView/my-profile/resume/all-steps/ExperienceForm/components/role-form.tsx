import React from 'react';
import { Box } from '@material-ui/core';
import { useFormikContext } from 'formik';

import DatePickerFormik from '../../../../../../../../../components/eplatform/components/date-picker-formik';
import CheckboxFormik from '../../../../../../../../../components/eplatform/components/checkbox-formik';

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
        <label>
          <Box fontWeight={'700'}>Description (recommended)</Box>
        </label>
        <label>
          Summarise your responsibilities, skills and achievements.Summarize
          your responsibilities
        </label>
        <textarea
          id={'description'}
          value={values.description}
          onChange={handleChange}
          cols={15}
          rows={5}
        />
      </div>
    </section>
  );
};

export default RoleForm;
