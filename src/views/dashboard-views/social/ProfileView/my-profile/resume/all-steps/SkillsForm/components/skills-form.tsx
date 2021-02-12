import React, { useState } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { SkillsModel, skillsValues } from '../schema/skills.value';
import {
  Box,
  Button,
  Fab,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from '../mui.style';
import { skillsYupObject } from '../schema/skills.validation';
import AutocompleteSkills from './AutocompleteSkills';
import { ProfileSkill } from '../schema/profileSkill';
import YupFormikValidationViewer from 'components/eplatform/components/yup-formik-validation-viewer';
import Chip from '@material-ui/core/Chip';
import { postSkillsAxios } from '../skills.service';

type Props = {
  setIsEditing: () => void;
  profileSkills: ProfileSkill[];
};

const SkillsForm = ({ setIsEditing, profileSkills }: Props) => {
  const classes = useStyles();
  const [isNew, setIsNew] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleDelete = (
    formikProps: FormikProps<SkillsModel>,
    chip: string,
  ) => {
    formikProps?.setFieldValue(
      'list',
      formikProps?.values?.list.filter(s => s !== chip),
    );
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={skillsValues}
      validationSchema={skillsYupObject}
      onSubmit={(values, actions) => {
        try {
          if (isNew) {
            alert('await postSkillsAxios(values)');
          } else {
            alert('await putSkillsAxios(values)');
          }
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }
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
            } Skills`}</Typography>
          </Box>
          <div>
            <section>
              <Box mb={2}>
                <Typography>
                  Help employers find you by showcasing all of your skills.
                </Typography>
              </Box>
              <Box>
                <Typography variant={'h4'}>Add New</Typography>
              </Box>
              <YupFormikValidationViewer />

              <AutocompleteSkills />

              <section>
                <Box fontWeight={'bold'} mb={4}>
                  <Typography>Added skills</Typography>
                </Box>
                <Box mb={4} display={'flex'}>
                  {formikProps?.values?.list.map(data => {
                    return (
                      <div key={data}>
                        <Chip
                          style={{ fontSize: '1rem' }}
                          label={data}
                          className={classes.chip}
                          onDelete={() => handleDelete(formikProps, data)}
                        />
                      </div>
                    );
                  })}
                </Box>
              </section>
              <Button
                style={{ marginRight: 20 }}
                type={'submit'}
                onClick={async () => {
                  // await postSkillsAxios();
                }}
                variant={'contained'}
                color={'primary'}
              >
                Save
              </Button>

              <Button onClick={setIsEditing} variant={'text'} color={'primary'}>
                Cancel
              </Button>
            </section>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default SkillsForm;
