import { QualificationModel } from './schema/qualification.value';
import api from '../../../../../../../../utils/axios2';

export async function getQualificationAxios() {
  return await api.get<QualificationModel[]>('Profile/educations');
}

export async function deleteQualificationAxios(id: string) {
  return await api.put<void>('Profile/educations/' + id);
}

export async function postQualificationAxios(value: QualificationModel) {
  return await api.post<QualificationModel>('Profile/educations', value);
}

export async function putQualificationAxios(value: QualificationModel) {
  return await api.put<void>('Profile/educations/' + value.id, value);
}
