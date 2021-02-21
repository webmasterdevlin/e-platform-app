import { SkillChipValue } from './academicSkill';

export const skillsValues: SkillsModel = {
  id: '',
  list: [],
};

export type SkillsModel = {
  id: string;
  list: SkillChipValue[];
};

export type SkillParam = {
  skillId: string;
  skillLevel: number | string;
};
