export const skillsValues: SkillsModel = {
  id: '',
  list: [],
};

export type SkillsModel = {
  id: string;
  list: Array<string>;
};

export type SkillParam = {
  skillId: string;
  skillLevel: number | string;
};
