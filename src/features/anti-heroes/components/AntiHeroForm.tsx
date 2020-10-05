import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { postAntiHeroAction } from '../anti-hero.async.actions';
import {
  formsInitialValue,
  validationSchema,
} from '../shared/forms-initial-values';
import SharedForm from '../shared/shared-form';

const AntiHeroForm: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={formsInitialValue}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(postAntiHeroAction(values));
        actions.resetForm();
      }}
    >
      {formikProps => <SharedForm formikProps={formikProps} />}
    </Formik>
  );
};

export default AntiHeroForm;
