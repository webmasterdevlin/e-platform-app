import { SkillChipValue } from './skillModels';

export const skillsValues: SkillsModel = {
  id: '',
  skills: [],
};

export type SkillsModel = {
  id: string;
  skills: SkillChipValue[];
};

export type SkillParam = {
  skillId: string;
  skillLevel: number | string;
  skillName?: string;
};
