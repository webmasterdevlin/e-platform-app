import React, { useState } from 'react';
import { SkillsModel } from './schema/skills.value';
import SkillsForm from './components/skills-form';
import Skills from './components/skills';

type Props = {
  skills: SkillsModel;
};

const SkillsFormsContainer = ({ skills }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  skills = null;

  return (
    <>
      {isEditing || !skills ? (
        <SkillsForm
          skills={skills}
          setIsEditing={() => setIsEditing(!isEditing)}
        />
      ) : (
        <>
          {skills && (
            <Skills
              setIsEditing={() => setIsEditing(!isEditing)}
              skills={skills}
            />
          )}
        </>
      )}
    </>
  );
};

export default SkillsFormsContainer;
