import React, { useEffect } from 'react';
import fetch from 'cross-fetch';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AcademicSkill } from '../schema/academicSkill';
import { getAcademicSkillsAxios } from '../skills.service';

interface CountryType {
  name: string;
}

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

const AutocompleteSkills = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<AcademicSkill[]>([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    fetchAcademicSkills();
  }, []);
  const fetchAcademicSkills = async () => {
    const { data } = await getAcademicSkillsAxios();
    setOptions(data);
  };

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const { data } = await getAcademicSkillsAxios();

      if (active) {
        setOptions(Object.keys(data).map(key => data[key]) as AcademicSkill[]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
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
      renderInput={params => (
        <TextField
          {...params}
          label="Asynchronous"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};
export default AutocompleteSkills;
