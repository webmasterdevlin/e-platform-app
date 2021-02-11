import { SkillsModel } from './schema/skills.value';
import api from 'utils/axios2';
import { AcademicSkill } from './schema/academicSkill';
import { ProfileSkill } from './schema/profileSkill';

export async function getAcademicSkillsAxios() {
  return await api.get<AcademicSkill[]>('AcademicSkills');
}

export async function getProfileSkillsAxios() {
  return await api.get<ProfileSkill[]>('Profile/skills');
}

export async function postSkillsAxios(value: SkillsModel) {
  return await api.post<SkillsModel>('skills', value);
}

export async function putSkillsAxios(value: SkillsModel) {
  return await api.put<void>('skills', value);
}
