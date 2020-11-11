import { SkillsModel } from './schema/skills.value';
import api from '../../../../../../../../utils/axios2';

export async function getSkillsAxios() {
  return await api.get<SkillsModel>('Skills');
}

export async function postSkillsAxios(value: SkillsModel) {
  return await api.post<SkillsModel>('skills', value);
}

export async function putSkillsAxios(value: SkillsModel) {
  return await api.put<void>('skills', value);
}
