import { SkillParam, SkillsModel } from './schema/skills.value';
import api from 'utils/axios2';
import { AcademicSkill } from './schema/academicSkill';
import { ProfileSkill } from './schema/profileSkill';

export async function getAcademicSkillsAxios() {
  return await api.get<AcademicSkill[]>('AcademicSkills');
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
