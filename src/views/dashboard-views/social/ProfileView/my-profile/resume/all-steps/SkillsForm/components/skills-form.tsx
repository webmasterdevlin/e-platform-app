import React, { useState } from 'react';
import { ErrorMessage, Form, Formik, FormikProps } from 'formik';
import Chip from '@material-ui/core/Chip';
import { Box, Button, LinearProgress, Typography } from '@material-ui/core';

import { useStyles } from '../mui.style';
import { SkillsModel, skillsValues } from '../schema/skills.value';
import { skillsYupObject } from '../schema/skills.validation';
import AutocompleteSkills from './AutocompleteSkills';
import { ProfileSkill } from '../schema/profileSkill';
import YupFormikValidationViewer from 'components/eplatform/components/yup-formik-validation-viewer';
import { deleteSkillsAxios, postSkillsAxios } from '../skills.service';

type Props = {
  setIsEditing: () => void;
  profileSkills: ProfileSkill[];
  fetchProfileSkill: () => Promise<void>;
};

const SkillsForm = ({
  setIsEditing,
  profileSkills,
  fetchProfileSkill,
}: Props) => {
  const classes = useStyles();
  const [isNew, setIsNew] = useState(true);
  const [loading, setLoading] = useState(false);

  const [skills, setSkills] = useState<ProfileSkill[]>(profileSkills);

  const handleRemoveSkill = (
    formikProps: FormikProps<SkillsModel>,
    chipId: string,
  ) => {
    formikProps?.setFieldValue(
      'skills',
      formikProps?.values?.skills.filter(s => s.skillId !== chipId),
    );
  };

  const handleDeleteSkill = async (id: string) => {
    const prevSkills = [...skills];
    setSkills(skills.filter(s => s.id != id));

    try {
      await deleteSkillsAxios(id);
    } catch (e) {
      setSkills(prevSkills);
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={skillsValues}
      validationSchema={skillsYupObject}
      onSubmit={async values => {
        try {
          values.skills.map(async skill => {
            await postSkillsAxios(skill);
          });

          values.skills = [];
        } catch (e) {
          alert(`Something happened: ${e.message}`);
        }

        try {
          await fetchProfileSkill();
          setIsEditing();
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
            <Box mb={2}>
              <Box mb={2}>
                <Typography>
                  Help employers find you by showcasing all of your skills.
                </Typography>
              </Box>
              <Box>
                <Typography variant={'h4'}>Add New</Typography>
              </Box>
              <YupFormikValidationViewer />

              <AutocompleteSkills skills={skills} />

              <section>
                <Box fontWeight={'bold'} mb={4}>
                  <Typography>Added skills</Typography>
                </Box>
                <Box mb={4} display={'flex'}>
                  {formikProps?.values?.skills.map(data => {
                    return (
                      <div key={data.skillId}>
                        <Chip
                          style={{ fontSize: '1rem' }}
                          label={`${data.skillName} : Lvl ${data.skillLevel}`}
                          className={classes.chip}
                          onDelete={() =>
                            handleRemoveSkill(formikProps, data.skillId)
                          }
                        />
                      </div>
                    );
                  })}
                </Box>
              </section>

              <section>
                <Box fontWeight={'bold'} mb={4}>
                  <Typography>Current skills</Typography>
                </Box>
                <Box mb={4} display={'flex'}>
                  {skills?.map(pk => {
                    return (
                      <div key={pk.skill.id}>
                        <Chip
                          style={{ fontSize: '1rem' }}
                          label={`${pk.skill.name} : Lvl ${pk.skillLevel}`}
                          className={classes.chip}
                          onDelete={() => handleDeleteSkill(pk.id)}
                        />
                      </div>
                    );
                  })}
                </Box>
              </section>
              <Button
                style={{ marginRight: 20 }}
                type={'submit'}
                variant={'contained'}
                color={'primary'}
                disabled={formikProps.isSubmitting || !formikProps.isValid}
              >
                Save Added Skills
              </Button>

              <Button onClick={setIsEditing} variant={'text'} color={'primary'}>
                Close
              </Button>
            </Box>
            <ErrorMessage name={'skills'} />
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default SkillsForm;
