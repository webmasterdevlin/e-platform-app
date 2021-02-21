import React, { useEffect, useState } from 'react';
import SkillsForm from './components/skills-form';
import Skills from './components/skills';
import { ProfileSkill } from './schema/profileSkill';

type Props = {
  profileSkills: ProfileSkill[];
  fetchProfileSkill: () => Promise<void>;
};

const SkillsFormsContainer = ({ profileSkills, fetchProfileSkill }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  // academicSkills = null;

  useEffect(() => {
    fetchProfileSkill();
  }, [isEditing]);

  return (
    <>
      {isEditing || !profileSkills ? (
        <SkillsForm
          profileSkills={profileSkills}
          fetchProfileSkill={fetchProfileSkill}
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
