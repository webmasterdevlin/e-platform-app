import { EducationModel } from './schema/education.value';
import api from '../../../../../../../../utils/axios2';

export async function getEducationsAxios() {
  return await api.get<EducationModel[]>('Profile/educations');
}

export async function deleteEducationAxios(id: string) {
  return await api.delete<void>(`Profile/educations/?id=${id}`);
}

export async function postEducationAxios(value: EducationModel) {
  return await api.post<EducationModel>('Profile/educations', value);
}

export async function putEducationAxios(value: EducationModel) {
  return await api.put<void>('Profile/educations/' + value.id, value);
}
