import React, { useState } from 'react';
import { SkillsModel } from './schema/skills.value';
import SkillsForm from './components/skills-form';
import Skills from './components/skills';
import { AcademicSkill } from './schema/academicSkill';
import { ProfileSkill } from './schema/profileSkill';

type Props = {
  profileSkills: ProfileSkill[];
};

const SkillsFormsContainer = ({ profileSkills }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  // academicSkills = null;

  return (
    <>
      {isEditing || !profileSkills ? (
        <SkillsForm
          profileSkills={profileSkills}
          setIsEditing={() => setIsEditing(!isEditing)}
        />
      ) : (
        <>
          {profileSkills && (
            <Skills
              setIsEditing={() => setIsEditing(!isEditing)}
              profileSkills={profileSkills}
            />
          )}
        </>
      )}
    </>
  );
};

export default SkillsFormsContainer;
