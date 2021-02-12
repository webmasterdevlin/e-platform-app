import React, { ChangeEvent, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import { AcademicSkill } from '../schema/academicSkill';
import { getAcademicSkillsAxios } from '../skills.service';
import { useFormikContext } from 'formik';
import { Box, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const AutocompleteSkills = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<AcademicSkill[]>([]);
  const loading = open && options.length === 0;

  const formik = useFormikContext<any>();

  useEffect(() => {
    if (!loading) {
      return undefined;
    }

    if (!open) {
      setOptions([]);
    }

    fetchAcademicSkills();
  }, [open, loading]);

  const fetchAcademicSkills = async () => {
    let active = true;

    const { data } = await getAcademicSkillsAxios();
    if (active) {
      setOptions(Object.keys(data).map(key => data[key]) as AcademicSkill[]);
    }
    setOptions(data);

    return () => {
      active = false;
    };
  };

  return (
    <Box
      m={4}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'flex-direction'}
      alignItems={'center'}
    >
      <Box mr={4}>
        <Autocomplete
          id="skill"
          style={{ width: 300 }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          getOptionSelected={(option, value) => option.name === value.name}
          getOptionLabel={option => option.name}
          options={options}
          loading={loading}
          onChange={(e: ChangeEvent<any>) => {
            if (formik.values.list.find(s => s == e.target.innerText)) return;

            if (!e.target.innerText) return;

            formik.setFieldValue('list', [
              ...formik.values.list,
              e.target.innerText,
            ]);
          }}
          renderInput={params => (
            <TextField
              {...params}
              label="Skills"
              variant="outlined"
              onChange={(e: ChangeEvent<any>) => {
                formik.setFieldValue('customSkill', e.target.value);
              }}
              value={formik.values.customSkill}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress
                        style={{ paddingBottom: '20' }}
                        color="inherit"
                        size={20}
                      />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </Box>
      <Fab
        onClick={() => {
          if (formik.values.list.find(s => s == formik.values.customSkill))
            return;

          formik.setFieldValue('list', [
            ...formik.values.list,
            formik.values.customSkill,
          ]);

          formik.setFieldValue('customSkill', '');
        }}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default AutocompleteSkills;
