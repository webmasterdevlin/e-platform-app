import { PersonalSummaryModel } from './schema/personal-summary.value';
import api from '../../../../../../../../utils/axios2';

export async function getPersonalSummaryAxios() {
  return await api.get<PersonalSummaryModel>('personal-summary');
}

export async function postPersonalSummaryAxios(value: PersonalSummaryModel) {
  return await api.post<PersonalSummaryModel>('personal-summary', value);
}

export async function putPersonalSummaryAxios(value: PersonalSummaryModel) {
  return await api.put<void>('personal-summary', value);
}
