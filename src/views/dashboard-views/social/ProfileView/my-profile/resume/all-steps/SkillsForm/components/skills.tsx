import React, { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import { Box, Button, Typography } from '@material-ui/core';
import { useStyles } from '../mui.style';
import { SkillsModel } from '../schema/skills.value';
import { SkillModels } from '../schema/skillModels';
import { ProfileSkill } from '../schema/profileSkill';

type Props = {
  setIsEditing: (boolean) => void;
  profileSkills: ProfileSkill[];
};

const Skills = ({ setIsEditing, profileSkills }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Box mb={6}>
        <Typography variant={'h3'}>Skills</Typography>
      </Box>
      <div className="dashboard-list-box-static">
        <Box mb={4}>
          <div className={classes.root}>
            {profileSkills?.map(pk => {
              return (
                <div key={pk.skill.id}>
                  <Chip
                    style={{ fontSize: '1.8rem' }}
                    label={`${pk.skill.name} - ${pk.skillLevel}`}
                    className={classes.chip}
                  />
                </div>
              );
            })}
          </div>
        </Box>

        {profileSkills && (
          <Button onClick={setIsEditing} variant={'outlined'} color={'primary'}>
            Update Skills
          </Button>
        )}
      </div>
    </>
  );
};
export default Skills;
