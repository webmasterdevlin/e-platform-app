import React from 'react';
import { Box } from '@material-ui/core';
import { FormikProps } from 'formik';
import { ExperienceModel } from '../schema/experience.value';
import DatePickerFormik from '../../../../../../../../../components/eplatform/dashboard-components/date-picker-formik';
import CheckboxFormik from '../../../../../../../../../components/eplatform/dashboard-components/checkbox-formik';
import InputFormik from '../../../../../../../../../components/eplatform/page-components/input-formik';

type Props = {
  formikProps: FormikProps<ExperienceModel>;
};
const RoleForm: React.FC<Props> = ({ formikProps }) => {
  return (
    <section>
      <div>
        <DatePickerFormik
          id={'started'}
          label={'Started'}
          disableFuture={true}
          formikProps={formikProps}
        />
        {!formikProps.values.stillInRole && (
          <DatePickerFormik
            id={'ended'}
            label={'Ended'}
            disableFuture={true}
            formikProps={formikProps}
          />
        )}
      </div>

      <CheckboxFormik
        formikProps={formikProps}
        id={'stillInRole'}
        label={'Still In Role'}
      />
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
          value={formikProps.values.description}
          onChange={formikProps.handleChange}
          cols={15}
          rows={5}
        />
      </div>
    </section>
  );
};

export default RoleForm;
