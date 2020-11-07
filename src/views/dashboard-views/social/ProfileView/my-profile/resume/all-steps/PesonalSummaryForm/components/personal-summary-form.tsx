import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import {
  PersonalSummaryModel,
  personalSummaryValue,
} from '../schema/personal-summary.value';
import { Box, Button } from '@material-ui/core';
import { personalSummaryYupObject } from '../schema/personal-summary.validation';

type Props = {
  personalSummary: PersonalSummaryModel;
  setIsEditing: () => void;
};
const PersonalSummaryForm: React.FC<Props> = ({
  setIsEditing,
  personalSummary,
}) => {
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    if (personalSummary?.summary) setIsNew(false);
  }, []);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={isNew ? personalSummaryValue : personalSummary}
      validationSchema={personalSummaryYupObject}
      onSubmit={async (values, actions) => {
        alert(isNew ? 'New' : 'Editing');
        alert(JSON.stringify(values, null, 2));
        try {
          if (isNew) {
            alert('await postPersonalSummaryAxios(values)');
          } else {
            alert('await putPersonalSummaryAxios(values)');
          }
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
      }}
    >
      {formikProps => (
        <Form>
          <h4>{`${isNew ? 'New' : 'Edit'} Personal Summary`}</h4>
          <div>
            <section>
              <label>
                Highlight your unique experiences, ambitions and strengths.
              </label>
            </section>
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Save
            </Button>
            {!isNew && (
              <Button onClick={setIsEditing} variant={'text'} color={'primary'}>
                Cancel
              </Button>
            )}
            <Button
              onClick={() => formikProps.setFieldValue('summary', '')}
              variant={'outlined'}
              color={'primary'}
            >
              Clear
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default PersonalSummaryForm;
