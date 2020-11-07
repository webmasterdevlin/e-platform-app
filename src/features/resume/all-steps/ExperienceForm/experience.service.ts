import { ExperienceModel } from './schema/experience.value';
import { api } from '../../../../utils/axios';

export async function getExperienceAxios() {
  return await api.get<ExperienceModel[]>('experiences');
}

export async function deleteExperienceAxios(id: string) {
  return await api.put<void>('experiences/' + id);
}

export async function postExperienceAxios(value: ExperienceModel) {
  return await api.post<ExperienceModel>('experiences', value);
}

export async function putExperienceAxios(value: ExperienceModel) {
  return await api.put<void>('experiences/' + value.id, value);
}
