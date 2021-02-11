export interface Skill {
  id: string;
  name: string;
}

export interface ProfileSkill {
  id: string;
  skillLevel: number;
  skill: Skill;
}
