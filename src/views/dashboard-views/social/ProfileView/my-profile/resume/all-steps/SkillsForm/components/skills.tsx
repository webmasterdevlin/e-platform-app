import React, { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import { Button } from '@material-ui/core';
import { useStyles } from '../mui.style';
import { SkillsModel } from '../schema/skills.value';

type Props = {
  setIsEditing: (boolean) => void;
  skills: SkillsModel;
};

const Skills = ({ skills, setIsEditing }: Props) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('SKILLS::', skills);
  }, []);

  return (
    <>
      <h4 className="gray">Skills</h4>
      <div className="dashboard-list-box-static">
        <section className={'mb-4'}>
          <div className={classes.root}>
            {skills?.list?.map(data => {
              return (
                <div key={data}>
                  <Chip
                    style={{ fontSize: '1.8rem' }}
                    label={data}
                    className={classes.chip}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {skills?.list && (
          <Button onClick={setIsEditing} variant={'outlined'} color={'primary'}>
            Update Skills
          </Button>
        )}
      </div>
    </>
  );
};
export default Skills;
