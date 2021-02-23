import { SkillParam, SkillsModel } from './schema/skills.value';
import api from 'utils/axios2';
import { SkillModels, NonAcademic } from './schema/skillModels';
import { ProfileSkill } from './schema/profileSkill';

export async function getAcademicSkillsAxios() {
  return await api.get<SkillModels[]>('AcademicSkills');
}

export async function getProfileSkillsAxios() {
  return await api.get<ProfileSkill[]>('Profile/skills');
}

export async function postSkillsAxios(value: SkillParam) {
  return await api.post<any>('Profile/skills', value);
}

export async function deleteSkillsAxios(id: string) {
  return await api.delete<void>('Profile/skills/' + id);
}

export async function nonAcademicSkillsAxios() {
  return await api.get<NonAcademic[]>('skills');
}
