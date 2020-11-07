import { QualificationModel } from './schema/qualification.value';
import { api } from '../../../../utils/axios';

export async function getQualificationAxios() {
  return await api.get<QualificationModel[]>('qualifications');
}

export async function deleteQualificationAxios(id: string) {
  return await api.put<void>('qualifications/' + id);
}

export async function postQualificationAxios(value: QualificationModel) {
  return await api.post<QualificationModel>('qualifications', value);
}

export async function putQualificationAxios(value: QualificationModel) {
  return await api.put<void>('qualifications/' + value.id, value);
}
