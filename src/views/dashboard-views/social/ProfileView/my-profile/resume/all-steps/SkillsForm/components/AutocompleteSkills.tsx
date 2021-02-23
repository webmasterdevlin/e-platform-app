import React, { ChangeEvent, useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import { Box, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  getAcademicSkillsAxios,
  nonAcademicSkillsAxios,
} from '../skills.service';
import { SkillsModel } from '../schema/skills.value';
import {
  SkillModels,
  SkillChipValue,
  SkillOption,
} from '../schema/skillModels';
import { ProfileSkill } from '../schema/profileSkill';

type Props = {
  skills: ProfileSkill[];
};

const AutocompleteSkills = ({ skills }: Props) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<SkillOption[]>([]);

  const [skillLevel, setSkillLevel] = useState(1);
  const loading = open && options.length === 0;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSkillLevel(parseInt(event.target.value));
  };

  const formik = useFormikContext<SkillsModel>();

  useEffect(() => {
    if (!loading) return undefined;

    if (!open) setOptions([]);

    fetchAcademicSkills();
  }, [open, loading]);

  const fetchAcademicSkills = async () => {
    try {
      const { data: academics } = await getAcademicSkillsAxios();
      const { data: nonAcademics } = await nonAcademicSkillsAxios();

      setOptions(normalizeOptions(academics, nonAcademics));
    } catch (e) {
      console.log(e);
    }
  };

  const isValidEntry = (value: SkillOption) => {
    if (formik.values.skills?.find(s => s.skillName == value?.keyName))
      return false;

    if (skills?.find(s => s.skill.name == value?.keyName)) return false;

    if (!value?.keyName) return false;

    return true;
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
        <TextField
          select
          style={{ marginBottom: '1rem' }}
          id="outlined-select-currency"
          label="Skill Level"
          helperText="Select a skill level before choosing a skill name"
          variant="outlined"
          defaultValue={1}
          value={skillLevel}
          onChange={handleChange}
        >
          {levels.map(option => (
            <MenuItem
              key={option.value}
              defaultValue={'1'}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Autocomplete
          id="skill"
          style={{ width: 300 }}
          // groupBy={option => option.subjectModule?.name || ''}
          getOptionLabel={option => option.keyName || ''}
          options={options}
          loading={loading}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          onChange={(e: ChangeEvent<any>, value: SkillOption) => {
            if (!isValidEntry(value)) return;

            formik.setFieldValue('skills', [
              ...formik.values.skills,
              {
                skillId: value.keyId,
                skillName: value.keyName,
                skillLevel,
              } as SkillChipValue,
            ]);
          }}
          renderInput={params => (
            <TextField
              {...params}
              label="Skill Names"
              variant="outlined"
              value={formik.values?.skills[0]?.skillName}
              onChange={(e: ChangeEvent<any>) => {
                formik.setFieldValue('customSkill', e.target.value);
              }}
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
    </Box>
  );
};

export default AutocompleteSkills;

const normalizeOptions = (academics: SkillModels[], nonAcademics: any) => {
  const combinedResults: SkillOption[] = [];

  const subjectGroup = {};

  academics?.map(academic => {
    academic?.semesters?.map(semester => {
      semester?.subjects?.map(subject => {
        if (!subjectGroup.hasOwnProperty(subject.subjectModule.id)) {
          subjectGroup[subject.subjectModule.id] = {
            id: subject.subjectModule.id,
            name: subject.subjectModule.name,
            description: subject.subjectModule.description,
          };
        }

        combinedResults.push({
          keyId: subject.id,
          keyType: 'subject',
          keyName: subject.name,
        });
      });
    });
  });

  Object.keys(subjectGroup).map(key => {
    combinedResults.push({
      keyId: key,
      keyType: 'subjectGroup',
      keyName: subjectGroup[key].name,
    });
  });

  nonAcademics.map(na => {
    combinedResults.push({
      keyId: na.id,
      keyType: 'non-academic',
      keyName: na.name,
    });
  });

  return combinedResults;
};

const levels = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
];
