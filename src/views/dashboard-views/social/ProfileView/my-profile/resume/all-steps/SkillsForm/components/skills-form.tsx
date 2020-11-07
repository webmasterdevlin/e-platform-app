import React, { useEffect, useState } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { SkillsModel, skillsValues } from '../schema/skills.value';
import { Box, Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import { useStyles } from '../mui.style';
import { skillsYupObject } from '../schema/skills.validation';

type Props = {
  skills: SkillsModel;
  setIsEditing: () => void;
};

const SkillsForm: React.FC<Props> = ({ setIsEditing, skills }) => {
  const classes = useStyles();
  const [newChip, setNewChip] = useState('');
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    if (skills?.list) setIsNew(false);
  }, []);

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
      initialValues={isNew ? skillsValues : skills}
      validationSchema={skillsYupObject}
      onSubmit={(values, actions) => {
        alert(isNew ? 'New' : 'Editing');
        alert(JSON.stringify(values, null, 2));
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
          <h4 className="gray">{`${isNew ? 'New' : 'Edit'} Skills`}</h4>
          <div className="dashboard-list-box-static">
            <section>
              <Box mb={2}>
                Help employers find you by showcasing all of your skills.
              </Box>
              <label className={'font-weight-bold'}>Add new</label>
              <div className={'d-flex justify-content-start'}>
                <input
                  name={'label'}
                  type={'text'}
                  value={newChip}
                  onChange={handleOnChange}
                  onKeyPress={event => handleInputKeyPress(event, formikProps)}
                  placeholder={'Add new (e.g. Team building)'}
                />
                <Fab
                  onClick={() => handleAdd(formikProps, newChip)}
                  className={'ml-2'}
                  color="primary"
                  aria-label="add"
                >
                  <AddIcon />
                </Fab>
              </div>
              <section className={'my-4'}>
                <label className={'font-weight-bold'}>Added skills</label>
                <div className={classes.root}>
                  {formikProps?.values?.list.map(data => {
                    return (
                      <div key={data}>
                        <Chip
                          style={{ fontSize: '1.8rem' }}
                          label={data}
                          className={classes.chip}
                          onDelete={() => handleDelete(formikProps, data)}
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
              <Button
                type={'submit'}
                onClick={() => {
                  if (!formikProps.values.list.length)
                    alert('Must input skill(s)');
                }}
                variant={'contained'}
                color={'primary'}
              >
                Save
              </Button>
              {!isNew && (
                <Button
                  onClick={setIsEditing}
                  variant={'text'}
                  color={'primary'}
                >
                  Cancel
                </Button>
              )}
            </section>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default SkillsForm;
