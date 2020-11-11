import { ExperienceModel } from './schema/experience.value';
import api from '../../../../../../../../utils/axios2';

export async function getExperienceAxios() {
  return await api.get<ExperienceModel[]>('Profile/experiences');
}

export async function deleteExperienceAxios(id: string) {
  return await api.put<void>('Profile/experiences/' + id);
}

export async function postExperienceAxios(value: ExperienceModel) {
  return await api.post<ExperienceModel>('Profile/experiences', value);
}

export async function putExperienceAxios(value: ExperienceModel) {
  return await api.put<void>('Profile/experiences/' + value.id, value);
}
