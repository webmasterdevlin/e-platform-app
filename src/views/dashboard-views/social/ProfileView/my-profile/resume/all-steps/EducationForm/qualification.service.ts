import { QualificationModel } from './schema/qualification.value';
import api from '../../../../../../../../utils/axios2';

export async function getEducationsAxios() {
  return await api.get<QualificationModel[]>('Profile/educations');
}

export async function deleteEducationAxios(id: string) {
  return await api.put<void>('Profile/educations/' + id);
}

export async function postEducationAxios(value: QualificationModel) {
  return await api.post<QualificationModel>('Profile/educations', value);
}

export async function putEducationAxios(value: QualificationModel) {
  return await api.put<void>('Profile/educations/' + value.id, value);
}
