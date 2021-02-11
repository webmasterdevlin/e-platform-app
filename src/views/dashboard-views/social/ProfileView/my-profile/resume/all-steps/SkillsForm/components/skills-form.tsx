import React, { useEffect, useState } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { SkillsModel, skillsValues } from '../schema/skills.value';
import {
  Box,
  Button,
  Fab,
  LinearProgress,
  TextField,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import { useStyles } from '../mui.style';
import { skillsYupObject } from '../schema/skills.validation';
import AutocompleteSkills from './AutocompleteSkills';
import { AcademicSkill } from '../schema/academicSkill';
import { ProfileSkill } from '../schema/profileSkill';

type Props = {
  setIsEditing: () => void;
  profileSkills: ProfileSkill[];
};

const SkillsForm = ({ setIsEditing, profileSkills }: Props) => {
  const classes = useStyles();
  const [newChip, setNewChip] = useState('');
  const [isNew, setIsNew] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleOnChange = ({ currentTarget }) => {
    setNewChip(currentTarget?.value);
  };

  const handleAdd = (
    formikProps: FormikProps<SkillsModel>,
    chipToAdd: string,
  ) => {
    if (formikProps?.values?.list.includes(chipToAdd)) {
      alert("Can't add same skills");
      setNewChip('');
      return;
    }

    formikProps?.setFieldValue('list', [
      ...formikProps?.values.list,
      chipToAdd,
    ]);
    setNewChip('');
  };

  const handleInputKeyPress = (
    event,
    formikProps?: FormikProps<SkillsModel>,
  ) => {
    if (event.key === 'Enter') {
      handleAdd(formikProps, newChip);
      setNewChip('');
    }
  };

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
      initialValues={isNew ? skillsValues : profileSkills}
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
            } Skills (only GET request)`}</Typography>
          </Box>
          <div>
            <section>
              <Box mb={2}>
                <Typography>
                  Help employers find you by showcasing all of your skills.
                </Typography>
              </Box>
              <label>Add new</label>
              <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'flex-start'}
                alignItems={'center'}
              >
                <Box mr={2} mb={4}>
                  {/*<TextField
                    name={'label'}
                    type={'text'}
                    value={newChip}
                    onChange={handleOnChange}
                    onKeyPress={event =>
                      handleInputKeyPress(event, formikProps)
                    }
                    placeholder={'Add new (e.g. Team building)'}
                  />*/}
                  <AutocompleteSkills />
                </Box>
                <Fab
                  // onClick={() => handleAdd(formikProps, newChip)}
                  color="primary"
                  aria-label="add"
                >
                  <AddIcon />
                </Fab>
              </Box>
              <section>
                <Box fontWeight={'bold'} mb={4}>
                  <Typography>Added skills</Typography>
                </Box>
                <Box mb={4}>
                  {/*{formikProps?.values?.list.map(data => {*/}
                  {/*  return (*/}
                  {/*    <div key={data}>*/}
                  {/*      <Chip*/}
                  {/*        style={{ fontSize: '1rem' }}*/}
                  {/*        label={data}*/}
                  {/*        className={classes.chip}*/}
                  {/*        onDelete={() => handleDelete(formikProps, data)}*/}
                  {/*      />*/}
                  {/*    </div>*/}
                  {/*  );*/}
                  {/*})}*/}
                </Box>
              </section>
              <Button
                style={{ marginRight: 20 }}
                type={'submit'}
                onClick={() => {}}
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
