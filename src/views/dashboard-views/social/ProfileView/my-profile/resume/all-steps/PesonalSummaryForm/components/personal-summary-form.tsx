import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import {
  PersonalSummaryModel,
  personalSummaryValue,
} from '../schema/personal-summary.value';
import { Box, Button, LinearProgress, Typography } from '@material-ui/core';
import { personalSummaryYupObject } from '../schema/personal-summary.validation';
import TextAreaFormik from '../../../../../../../../../components/eplatform/components/text-area-formik';

type Props = {
  personalSummary: PersonalSummaryModel;
  setIsEditing: () => void;
};

const PersonalSummaryForm: React.FC<Props> = ({
  setIsEditing,
  personalSummary,
}) => {
  const [loading, setLoading] = useState(false);
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
        setLoading(true);
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
        setLoading(false);
      }}
    >
      {formikProps => (
        <Form>
          {loading && (
            <Box my={2}>
              <LinearProgress color="secondary" />
            </Box>
          )}
          <Box mb={6}>
            <Typography variant={'h3'}>{`${
              isNew ? 'New' : 'Edit'
            } Personal Summary (No Endpoint)`}</Typography>
          </Box>
          <div>
            <section>
              <Box mb={1}>
                <Typography>
                  Highlight your unique experiences, ambitions and strengths.
                </Typography>
              </Box>
            </section>

            <TextAreaFormik name={'summary'} label={'Summary'} />

            <Button
              style={{ marginRight: '1rem' }}
              type={'submit'}
              variant={'contained'}
              color={'primary'}
            >
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
